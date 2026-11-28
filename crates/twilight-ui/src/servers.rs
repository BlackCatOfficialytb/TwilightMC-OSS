// IPC bridge for the server creator: each server is a directory under
// `<app_data_dir>/servers/<id>/` holding `server.json` metadata plus the
// server's own files (jars, plugins, eula.txt, server.properties). Output
// streams into the webview as `server-log` events; state transitions as
// `server-state`; the Minekube Connect endpoint as `server-connect`.

use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::sync::{Mutex, OnceLock};

use serde::Serialize;
use sysinfo::{Pid, ProcessRefreshKind, ProcessesToUpdate, System};
use tauri::{AppHandle, Emitter, Manager};
use twilight_downloader::{DownloadRequest, ParallelDownloader};
use twilight_modrinth::extract_archive;
use twilight_runtime::{JavaInstallation, discover_java, select_best_java};
use twilight_server::{ServerMeta, ServerSoftware, config, engine, process};

use crate::accounts::{load_settings, settings_path};
use crate::export::write_zip_entries;
use crate::instances::slugify;
use crate::worlds::timestamp_label;

// ---- event payloads ----

#[derive(Clone, Serialize)]
struct ServerLine {
    id: String,
    line: String,
}

#[derive(Clone, Serialize)]
struct ServerState {
    id: String,
    state: String,
}

#[derive(Clone, Serialize)]
struct ConnectEvent {
    id: String,
    endpoint: String,
}

// ---- registries (std Mutex: no await while held) ----

struct Running {
    sender: tokio::sync::mpsc::UnboundedSender<String>,
    pid: u32,
    /// Spawn time (unix seconds) for the uptime metric.
    started_at: u64,
}

static RUNNING: OnceLock<Mutex<HashMap<String, Running>>> = OnceLock::new();
static STATES: OnceLock<Mutex<HashMap<String, String>>> = OnceLock::new();
static CONNECT: OnceLock<Mutex<HashMap<String, String>>> = OnceLock::new();

fn running() -> &'static Mutex<HashMap<String, Running>> {
    RUNNING.get_or_init(Mutex::default)
}

fn states() -> &'static Mutex<HashMap<String, String>> {
    STATES.get_or_init(Mutex::default)
}

fn connect_endpoints() -> &'static Mutex<HashMap<String, String>> {
    CONNECT.get_or_init(Mutex::default)
}

fn set_state(app: &AppHandle, id: &str, state: &str) {
    states()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .insert(id.to_owned(), state.to_owned());
    let _ = app.emit(
        "server-state",
        ServerState {
            id: id.to_owned(),
            state: state.to_owned(),
        },
    );
}

fn state_of(id: &str) -> String {
    states()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .get(id)
        .cloned()
        .unwrap_or_else(|| "Stopped".into())
}

// ---- rows / dirs / ids ----

/// Server card for the dashboard.
#[derive(Clone, Serialize)]
pub struct ServerRow {
    pub id: String,
    pub name: String,
    pub software: ServerSoftware,
    pub version: String,
    pub loader_version: Option<String>,
    pub port: u16,
    pub min_memory_mb: u32,
    pub max_memory_mb: u32,
    pub offline_mode: bool,
    pub connect: bool,
    pub created: u64,
    pub jvm_flags: Option<String>,
    pub java_path: Option<String>,
    pub auto_eula: bool,
    pub state: String,
    /// Live PID sidecar without a registry entry (app restarted, game still
    /// running); the card offers a kill-orphaned-process action.
    pub orphaned: bool,
}

fn to_row(meta: &ServerMeta, id: &str, state: String, orphaned: bool) -> ServerRow {
    ServerRow {
        id: id.to_owned(),
        name: id.to_owned(),
        software: meta.software.clone(),
        version: meta.version.clone(),
        loader_version: meta.loader_version.clone(),
        port: meta.port,
        min_memory_mb: meta.min_memory_mb,
        max_memory_mb: meta.max_memory_mb,
        offline_mode: meta.offline_mode,
        connect: meta.connect,
        created: meta.created,
        jvm_flags: meta.jvm_flags.clone(),
        java_path: meta.java_path.clone(),
        auto_eula: meta.auto_eula,
        state,
        orphaned,
    }
}

async fn servers_root(app: &AppHandle) -> Result<PathBuf, String> {
    // The Folders-page override wins; blank keeps `<app_data>/servers`.
    let configured = load_settings(&settings_path(app).await?).await.servers_dir;
    let root = configured
        .as_deref()
        .map(str::trim)
        .filter(|d| !d.is_empty())
        .map(PathBuf::from)
        .unwrap_or_else(|| {
            app.path()
                .app_data_dir()
                .map(|dir| dir.join("servers"))
                .unwrap_or_default()
        });
    if root.as_os_str().is_empty() {
        return Err("cannot resolve the servers directory".to_owned());
    }
    tokio::fs::create_dir_all(&root)
        .await
        .map_err(|e| e.to_string())?;
    Ok(root)
}

/// Server ids are directory leaf names; reject anything that could escape.
fn validate_server_id(id: &str) -> Result<(), String> {
    if id.is_empty()
        || id.contains('/')
        || id.contains('\\')
        || id.contains("..")
        || id.contains(':')
    {
        return Err(format!("invalid server id {id:?}"));
    }
    Ok(())
}

async fn server_dir(app: &AppHandle, id: &str) -> Result<PathBuf, String> {
    validate_server_id(id)?;
    let dir = servers_root(app).await?.join(id);
    if !dir.is_dir() {
        return Err(format!("server {id:?} does not exist"));
    }
    Ok(dir)
}

async fn read_meta(dir: &Path) -> Result<ServerMeta, String> {
    let raw = tokio::fs::read_to_string(dir.join("server.json"))
        .await
        .map_err(|e| format!("missing server.json ({e})"))?;
    serde_json::from_str(&raw).map_err(|e| e.to_string())
}

async fn write_meta(dir: &Path, meta: &ServerMeta) -> Result<(), String> {
    let json = serde_json::to_string_pretty(meta).map_err(|e| e.to_string())?;
    tokio::fs::write(dir.join("server.json"), json)
        .await
        .map_err(|e| e.to_string())
}

fn now_secs() -> u64 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs()
}

// ---- artifact resolution ----

fn http_client() -> reqwest::Client {
    // Shared RFC-compliant identification for every external API request:
    // the product-token `User-Agent` (never a spoofed browser prefix, so
    // Cloudflare TLS fingerprinting never rejects rustls) plus the
    // Sec-CH-UA client hints, versioned from CARGO_PKG_VERSION.
    twilight_server::headers::api_client()
}

/// GETs `url` as text, surfacing HTTP errors with a body excerpt instead of
/// an opaque decode failure downstream.
async fn fetch_text(client: &reqwest::Client, url: &str) -> Result<String, String> {
    let resp = client.get(url).send().await.map_err(|e| e.to_string())?;
    let status = resp.status();
    let raw = resp.text().await.map_err(|e| e.to_string())?;
    if !status.is_success() {
        let excerpt: String = raw.chars().take(200).collect();
        return Err(format!("HTTP {status} from {url}: {excerpt}"));
    }
    Ok(raw)
}

/// [`fetch_text`] + JSON parse; the raw body is read before parsing so a
/// 403/404 page surfaces as a clear error, never as a decode failure.
async fn fetch_json(client: &reqwest::Client, url: &str) -> Result<serde_json::Value, String> {
    let raw = fetch_text(client, url).await?;
    serde_json::from_str(&raw).map_err(|e| format!("invalid JSON from {url}: {e}"))
}

/// Deterministic artifact name per software inside the server dir.
fn server_software_slug(software: &ServerSoftware) -> String {
    format!("{software:?}").to_ascii_lowercase()
}

fn jar_name(software: &ServerSoftware) -> &'static str {
    match software {
        ServerSoftware::Pumpkin if cfg!(windows) => "pumpkin.exe",
        ServerSoftware::Pumpkin => "pumpkin",
        ServerSoftware::Steel if cfg!(windows) => "steel.exe",
        ServerSoftware::Steel => "steel",
        _ => "server.jar",
    }
}

/// Downloads `url` into the server dir when the artifact is missing.
/// Returns the artifact path.
async fn fetch_artifact(
    dir: &Path,
    name: &str,
    url: &str,
    sha1: Option<String>,
    app: Option<&AppHandle>,
    task_id: &str,
) -> Result<PathBuf, String> {
    let dest = dir.join(name);
    if dest.is_file() {
        return Ok(dest);
    }
    let reqs = [DownloadRequest {
        url: url.to_owned(),
        dest: dest.clone(),
        sha1,
    }];
    let downloader = ParallelDownloader::new(http_client(), 4);
    if let Some(app) = app {
        let emitter =
            crate::downloads::ProgressEmitter::new(app, task_id.to_owned(), name.to_owned());
        let cb = crate::downloads::parallel_progress_callback(emitter.clone());
        downloader
            .with_progress(cb)
            .download_all(&reqs)
            .await
            .map_err(|e| e.to_string())?;
        emitter.emit_complete(1, 1, 0, None);
    } else {
        downloader
            .download_all(&reqs)
            .await
            .map_err(|e| e.to_string())?;
    }
    Ok(dest)
}

/// Fabric needs a concrete loader version; empty resolves the latest stable.
async fn resolve_fabric_loader(loader_version: Option<&str>) -> Result<String, String> {
    if let Some(v) = loader_version.filter(|v| !v.trim().is_empty()) {
        return Ok(v.to_owned());
    }
    let list = fetch_json(
        &http_client(),
        "https://meta.fabricmc.net/v2/versions/loader",
    )
    .await?;
    list.as_array()
        .and_then(|items| {
            items
                .iter()
                .find(|e| e.get("stable").and_then(serde_json::Value::as_bool) == Some(true))
                .and_then(|e| e.get("version").and_then(serde_json::Value::as_str))
                .map(str::to_owned)
        })
        .ok_or_else(|| "no stable fabric loader found".to_owned())
}

/// Resolves (and caches on disk) the server artifact for `meta`. Installer
/// flows (Forge / NeoForge) stream progress through `emit`.
async fn resolve_artifact(
    dir: &Path,
    meta: &ServerMeta,
    emit: &std::sync::Arc<dyn Fn(String) + Send + Sync>,
    app: Option<&AppHandle>,
) -> Result<PathBuf, String> {
    let client = http_client();
    let name = jar_name(&meta.software);
    let dest = dir.join(name);
    // already cached: nothing to fetch
    if dest.is_file() {
        return Ok(dest);
    }
    match meta.software {
        ServerSoftware::Vanilla => {
            let manifest = fetch_json(
                &client,
                "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json",
            )
            .await?;
            let (_, version_url, _) = engine::vanilla_entry(&manifest, &meta.version)
                .ok_or_else(|| format!("unknown vanilla version {}", meta.version))?;
            let version_json = fetch_json(&client, &version_url).await?;
            let (url, sha1) = engine::vanilla_server_download(&version_json)
                .ok_or_else(|| "mojang manifest has no server download".to_owned())?;
            fetch_artifact(
                dir,
                name,
                &url,
                sha1,
                app,
                &format!(
                    "server-{}-{}",
                    server_software_slug(&meta.software),
                    meta.version
                ),
            )
            .await
        }
        ServerSoftware::Paper | ServerSoftware::Velocity => {
            // Fill v3: builds arrive newest first; pick the latest stable.
            let project = if meta.software == ServerSoftware::Velocity {
                "velocity"
            } else {
                "paper"
            };
            let builds = fetch_json(
                &client,
                &format!(
                    "https://fill.papermc.io/v3/projects/{project}/versions/{}/builds",
                    meta.version
                ),
            )
            .await?;
            let (url, sha256) = engine::fill_download(&builds).ok_or_else(|| {
                format!("no stable papermc build for {} {}", project, meta.version)
            })?;
            fetch_artifact(
                dir,
                name,
                &url,
                sha256,
                app,
                &format!(
                    "server-{}-{}",
                    server_software_slug(&meta.software),
                    meta.version
                ),
            )
            .await
        }
        ServerSoftware::Purpur => {
            fetch_artifact(
                dir,
                name,
                &engine::purpur_download_url(&meta.version),
                None,
                app,
                &format!("server-purpur-{}", meta.version),
            )
            .await
        }
        ServerSoftware::Fabric => {
            let loader = resolve_fabric_loader(meta.loader_version.as_deref()).await?;
            fetch_artifact(
                dir,
                name,
                &engine::fabric_download_url(&meta.version, &loader),
                None,
                app,
                &format!("server-fabric-{}", meta.version),
            )
            .await
        }
        ServerSoftware::Pumpkin | ServerSoftware::Steel => {
            // GitHub `/releases/latest` 404s on prerelease-only repos —
            // query the list and pick: pinned tag, else newest stable, else
            // any release with a matching host asset.
            let (repo, per_page) = match meta.software {
                ServerSoftware::Pumpkin => ("Pumpkin-MC/Pumpkin", 25),
                _ => ("Steel-Foundation/SteelMC", 20),
            };
            let releases = fetch_json(
                &client,
                &format!("https://api.github.com/repos/{repo}/releases?per_page={per_page}"),
            )
            .await?;
            let list = releases
                .as_array()
                .ok_or_else(|| "unexpected github releases response".to_owned())?;
            let release = engine::pick_release(list, &meta.version).ok_or_else(|| {
                format!(
                    "no {} release binary matching this host",
                    meta.software.label()
                )
            })?;
            let url = engine::pick_host_asset(release, engine::host_supports_avx2())
                .ok_or_else(|| format!("no {} asset matching this host", meta.software.label()))?;
            emit(format!(
                "[TwilightMC] selected {} asset {} ({})",
                meta.software.label(),
                url.rsplit('/').next().unwrap_or(&url),
                engine::host_cpu_target()
            ));
            fetch_artifact(
                dir,
                name,
                &url,
                None,
                app,
                &format!(
                    "server-{}-{}",
                    server_software_slug(&meta.software),
                    meta.version
                ),
            )
            .await
        }
        ServerSoftware::NeoForge => {
            // Step 1: the installer jar; step 2: run `--installServer` once
            // to assemble libraries + the run scripts the launch uses.
            let installer = fetch_artifact(
                dir,
                "neoforge-installer.jar",
                &engine::neoforge_installer_url(&meta.version),
                None,
                app,
                &format!("server-neoforge-{}", meta.version),
            )
            .await?;
            if !dir.join("libraries").is_dir() {
                let java = find_java(&meta.software, &meta.version).await?;
                run_installer(&java, &installer, dir, emit).await?;
            }
            Ok(installer)
        }
        ServerSoftware::Forge => {
            // Same installer flow as NeoForge: fetch the official installer
            // jar, run `--installServer` once to assemble libraries + the
            // run scripts, then launch via the generated run scripts.
            let installer = fetch_artifact(
                dir,
                "forge-installer.jar",
                &engine::forge_installer_url(&meta.version),
                None,
                app,
                &format!("server-forge-{}", meta.version),
            )
            .await?;
            if !dir.join("libraries").is_dir() {
                let java = find_java(&meta.software, &meta.version).await?;
                run_installer(&java, &installer, dir, emit).await?;
            }
            Ok(installer)
        }
    }
}

/// Consistent java majors per game version (1.20.5+ → 21, 1.18+ → 17, …).
/// New-style ids without the `1.` prefix (e.g. NeoForge `26.3.0.110`) are
/// modern Minecraft and also require 21.
fn required_major(software: &ServerSoftware, version: &str) -> Vec<i32> {
    if software == &ServerSoftware::Velocity {
        return vec![17];
    }
    let mut parts = version.split('.');
    let major: u32 = parts.next().and_then(|m| m.parse().ok()).unwrap_or(0);
    if major > 1 {
        return vec![21];
    }
    if major == 1 {
        let minor: u32 = parts.next().and_then(|m| m.parse().ok()).unwrap_or(0);
        let patch: u32 = parts.next().and_then(|p| p.parse().ok()).unwrap_or(0);
        if minor > 20 || (minor == 20 && patch >= 5) {
            return vec![21];
        }
        if minor >= 17 {
            return vec![17];
        }
        if minor >= 16 {
            return vec![16];
        }
    }
    vec![8]
}

async fn find_java(software: &ServerSoftware, version: &str) -> Result<String, String> {
    let installed: Vec<JavaInstallation> = discover_java().await.map_err(|e| e.to_string())?;
    let java = select_best_java(&installed, &required_major(software, version))
        .ok_or_else(|| format!("no compatible java runtime found for {version}"))?;
    Ok(java.executable.to_string_lossy().to_string())
}

/// The launch java: the Startup-page override when set, else auto-discovery.
async fn resolve_java(meta: &ServerMeta) -> Result<String, String> {
    if let Some(path) = meta
        .java_path
        .as_deref()
        .map(str::trim)
        .filter(|p| !p.is_empty())
    {
        return Ok(path.to_owned());
    }
    find_java(&meta.software, &meta.version).await
}

/// Space-split custom JVM flags.
fn jvm_flag_list(flags: &Option<String>) -> Vec<String> {
    flags
        .as_deref()
        .unwrap_or_default()
        .split_whitespace()
        .map(str::to_owned)
        .collect()
}

/// `java <custom flags> -Xms… -Xmx… -jar <jar> nogui`; custom flags ride
/// ahead of the memory args (Pterodactyl-style ordering).
fn java_launch_args(meta: &ServerMeta, jar: &str) -> Vec<String> {
    let mut args = jvm_flag_list(&meta.jvm_flags);
    args.extend(process::java_args(
        meta.min_memory_mb,
        meta.max_memory_mb,
        jar,
    ));
    args
}

// ---- connect / authme plugins ----

async fn fetch_release(release_url: &str) -> Result<serde_json::Value, String> {
    fetch_json(&http_client(), release_url).await
}

async fn install_plugin_jar(
    dir: &Path,
    release_url: &str,
    pick: fn(&serde_json::Value) -> Option<String>,
    file: &str,
) -> Result<PathBuf, String> {
    let plugins = dir.join("plugins");
    tokio::fs::create_dir_all(&plugins)
        .await
        .map_err(|e| e.to_string())?;
    let dest = plugins.join(file);
    if dest.is_file() {
        return Ok(dest);
    }
    let release = fetch_release(release_url).await?;
    let url = pick(&release).ok_or_else(|| "no matching release asset".to_owned())?;
    let downloader = ParallelDownloader::new(http_client(), 1);
    downloader
        .download_all(&[DownloadRequest {
            url,
            dest: dest.clone(),
            sha1: None,
        }])
        .await
        .map_err(|e| e.to_string())?;
    Ok(dest)
}

// ---- installer-based loaders (Forge / NeoForge) ----

/// Runs a Forge/NeoForge installer headlessly (`--installServer`) in the
/// server dir; progress streams through `emit` as server log lines.
async fn run_installer(
    java: &str,
    installer: &Path,
    dir: &Path,
    emit: &std::sync::Arc<dyn Fn(String) + Send + Sync>,
) -> Result<(), String> {
    emit("[TwilightMC] running installer --installServer (may take a few minutes)…".to_owned());
    let mut cmd = tokio::process::Command::new(java);
    cmd.args(["-jar", &installer.to_string_lossy(), "--installServer"])
        .current_dir(dir)
        .stdout(std::process::Stdio::piped())
        .stderr(std::process::Stdio::piped());
    #[cfg(windows)]
    cmd.creation_flags(0x0800_0000); // CREATE_NO_WINDOW
    let out = cmd.output().await.map_err(|e| e.to_string())?;
    let combined = format!(
        "{}{}",
        String::from_utf8_lossy(&out.stdout),
        String::from_utf8_lossy(&out.stderr)
    );
    for line in combined.lines().filter(|l| !l.trim().is_empty()) {
        emit(line.to_owned());
    }
    if !out.status.success() {
        return Err(format!(
            "installer failed with {}",
            out.status.code().unwrap_or(-1)
        ));
    }
    emit("[TwilightMC] installer finished".to_owned());
    Ok(())
}

/// Assembles the launch args for installer-based loaders: the installer's
/// generated `run.bat` / `run.sh` carries the canonical java line; parse it
/// and replace the `%*` / `"$@"` passthrough with `nogui`.
fn launcher_args(dir: &Path, os_windows: bool) -> Result<Vec<String>, String> {
    let script = if os_windows {
        dir.join("run.bat")
    } else {
        dir.join("run.sh")
    };
    let raw = std::fs::read_to_string(&script)
        .map_err(|e| format!("installer launch script missing ({e})"))?;
    let line = raw
        .lines()
        .map(str::trim)
        .find(|l| l.starts_with("java "))
        .ok_or_else(|| "installer launch script has no java command".to_owned())?;
    let mut args: Vec<String> = line["java ".len()..]
        .split_whitespace()
        .filter(|a| !matches!(*a, "%*" | "$@" | "\"$@\""))
        .map(str::to_owned)
        .collect();
    args.push("nogui".into());
    Ok(args)
}

// ---- spawn ----

/// Extracts the minekube endpoint (word containing `.connect.minekube.`).
fn connect_endpoint(line: &str) -> Option<String> {
    line.split_whitespace()
        .find(|t| t.contains(".connect.minekube."))
        .map(|t| {
            t.trim_matches(|c: char| c == '"' || c == '\'' || c == ',')
                .to_owned()
        })
}

fn make_emit(app: &AppHandle, id: &str) -> std::sync::Arc<dyn Fn(String) + Send + Sync> {
    let app = app.clone();
    let id = id.to_owned();
    std::sync::Arc::new(move |line: String| {
        // ready-state: "Done (" for MC, "istening" for native binaries
        if (line.contains("Done (") || line.contains("istening")) && state_of(&id) != "Running" {
            set_state(&app, &id, "Running");
        }
        if let Some(endpoint) = connect_endpoint(&line) {
            connect_endpoints()
                .lock()
                .unwrap_or_else(|e| e.into_inner())
                .insert(id.clone(), endpoint.clone());
            let _ = app.emit(
                "server-connect",
                ConnectEvent {
                    id: id.clone(),
                    endpoint,
                },
            );
        }
        let _ = app.emit(
            "server-log",
            ServerLine {
                id: id.clone(),
                line,
            },
        );
    })
}

/// Registers the exit watcher: state back to Stopped, registry + pid
/// sidecar cleanup.
fn watch_exit(app: &AppHandle, id: &str, dir: PathBuf, mut child: tokio::process::Child) {
    let app = app.clone();
    let id = id.to_owned();
    tauri::async_runtime::spawn(async move {
        let _ = child.wait().await;
        running()
            .lock()
            .unwrap_or_else(|e| e.into_inner())
            .remove(&id);
        remove_pid_file(&dir).await;
        set_state(&app, &id, "Stopped");
    });
}

async fn start_server_inner(app: &AppHandle, id: &str) -> Result<(), String> {
    if running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .contains_key(id)
    {
        return Err("server is already running".to_owned());
    }
    let dir = server_dir(app, id).await?;
    let meta = read_meta(&dir).await?;

    set_state(app, id, "Starting");

    let emit = make_emit(app, id);

    // resolve/download the artifact first (slow path: clean state on failure)
    let artifact = match resolve_artifact(&dir, &meta, &emit, Some(app)).await {
        Ok(a) => a,
        Err(e) => {
            set_state(app, id, "Stopped");
            return Err(e);
        }
    };

    // configs: eula + properties (java) or pumpkin.toml (native)
    if meta.software.is_native() {
        let toml_path = dir.join("pumpkin.toml");
        if !toml_path.is_file() {
            tokio::fs::write(
                &toml_path,
                config::pumpkin_toml(meta.port, !meta.offline_mode),
            )
            .await
            .map_err(|e| e.to_string())?;
        }
    } else {
        let eula = dir.join("eula.txt");
        if meta.auto_eula {
            tokio::fs::write(&eula, config::eula_txt())
                .await
                .map_err(|e| e.to_string())?;
        } else if !eula.is_file() {
            // acceptance stays pending; the server stops until accepted
            tokio::fs::write(
                &eula,
                "# Pending acceptance (Minecraft EULA: https://aka.ms/MinecraftEULA)\neula=false\n",
            )
            .await
            .map_err(|e| e.to_string())?;
        }
        let props_path = dir.join("server.properties");
        if !props_path.is_file() {
            tokio::fs::write(&props_path, config::default_server_properties(meta.port))
                .await
                .map_err(|e| e.to_string())?;
        }
    }

    // Minekube Connect plugin (java servers)
    if meta.connect && !meta.software.is_native() {
        let pick = match meta.software {
            ServerSoftware::Velocity => {
                |r: &serde_json::Value| engine::connect_plugin_asset(r, ServerSoftware::Velocity)
            }
            _ => |r: &serde_json::Value| engine::connect_plugin_asset(r, ServerSoftware::Paper),
        };
        let _ = install_plugin_jar(
            &dir,
            "https://api.github.com/repos/minekube/connect-java/releases/latest",
            pick,
            "connect-plugin.jar",
        )
        .await;
    }

    emit(format!(
        "[TwilightMC] starting {} {} (port {})",
        meta.software.label(),
        meta.version,
        meta.port
    ));

    // offline-mode security guard
    if meta.offline_mode {
        emit(
            "Offline Server Notice: With online-mode=false, anyone can connect using any username or spoof administrator UUIDs.".to_owned(),
        );
        emit("[TwilightMC] recommended: install AuthMeReloaded from the server card".to_owned());
    }

    let spawn_spec = if meta.software.is_native() {
        process::ServerSpawn {
            program: artifact.to_string_lossy().to_string(),
            args: Vec::new(),
            cwd: dir.clone(),
        }
    } else if meta.software == ServerSoftware::NeoForge {
        // Installer-based launch: memory + custom flags ride
        // user_jvm_args.txt; the parsed script line carries classpath/module
        // args.
        let flags = jvm_flag_list(&meta.jvm_flags);
        if meta.min_memory_mb > 0 || meta.max_memory_mb > 0 || !flags.is_empty() {
            let mut content = config::user_jvm_args_txt(meta.min_memory_mb, meta.max_memory_mb);
            for flag in &flags {
                content.push_str(flag);
                content.push('\n');
            }
            tokio::fs::write(dir.join("user_jvm_args.txt"), content)
                .await
                .map_err(|e| e.to_string())?;
        }
        let java = match resolve_java(&meta).await {
            Ok(j) => j,
            Err(e) => {
                set_state(app, id, "Stopped");
                return Err(e);
            }
        };
        let args = match launcher_args(&dir, cfg!(windows)) {
            Ok(a) => a,
            Err(e) => {
                set_state(app, id, "Stopped");
                return Err(e);
            }
        };
        process::ServerSpawn {
            program: java,
            args,
            cwd: dir.clone(),
        }
    } else {
        let java = match resolve_java(&meta).await {
            Ok(j) => j,
            Err(e) => {
                set_state(app, id, "Stopped");
                return Err(e);
            }
        };
        process::ServerSpawn {
            program: java,
            args: java_launch_args(&meta, &artifact.to_string_lossy()),
            cwd: dir.clone(),
        }
    };

    match process::spawn(&spawn_spec, emit).await {
        Ok((child, sender)) => {
            let pid = child.id().unwrap_or(0);
            write_pid_file(&dir, pid).await;
            running().lock().unwrap_or_else(|e| e.into_inner()).insert(
                id.to_owned(),
                Running {
                    sender,
                    pid,
                    started_at: now_secs(),
                },
            );
            watch_exit(app, id, dir, child);
        }
        Err(e) => {
            set_state(app, id, "Stopped");
            return Err(e.to_string());
        }
    }

    Ok(())
}

// ---- tauri commands ----

/// Reveals the server directory in the platform file browser.
#[tauri::command]
pub async fn open_server_folder(app: AppHandle, id: String) -> Result<(), String> {
    let dir = server_dir(&app, &id).await?;
    crate::spawn_open(&dir.to_string_lossy())
}

/// Scans the server library for the dashboard.
#[tauri::command]
pub async fn list_servers(app: AppHandle) -> Result<Vec<ServerRow>, String> {
    let root = servers_root(&app).await?;
    let mut rows = Vec::new();
    let mut entries = tokio::fs::read_dir(&root)
        .await
        .map_err(|e| e.to_string())?;
    while let Some(entry) = entries.next_entry().await.map_err(|e| e.to_string())? {
        let path = entry.path();
        if !path.is_dir() {
            continue;
        }
        if let Ok(meta) = read_meta(&path).await {
            let id = path
                .file_name()
                .map(|n| n.to_string_lossy().to_string())
                .unwrap_or_default();
            let orphaned = scan_orphan(&path, &id).await;
            rows.push(to_row(&meta, &id, state_of(&id), orphaned));
        }
    }
    rows.sort_by_key(|r| r.created);
    Ok(rows)
}

#[derive(serde::Deserialize)]
pub struct CreateServer {
    pub name: String,
    pub software: String,
    pub version: String,
    pub loader_version: Option<String>,
    pub port: u16,
    pub min_memory_mb: u32,
    pub max_memory_mb: u32,
    pub offline_mode: bool,
    pub connect: bool,
}

/// Creates a server instance from the wizard; idempotent per id.
#[tauri::command]
pub async fn create_server(app: AppHandle, config: CreateServer) -> Result<ServerRow, String> {
    let software = ServerSoftware::parse(&config.software)
        .ok_or_else(|| format!("unknown server software {:?}", config.software))?;
    if config.version.trim().is_empty() {
        return Err("version must not be empty".to_owned());
    }
    let id = slugify(&config.name);
    let dir = servers_root(&app).await?.join(&id);
    tokio::fs::create_dir_all(&dir)
        .await
        .map_err(|e| e.to_string())?;
    if dir.join("server.json").is_file() {
        return Err(format!("server {id:?} already exists"));
    }
    let meta = ServerMeta {
        software,
        version: config.version.trim().to_owned(),
        loader_version: config.loader_version,
        port: if config.port == 0 { 25565 } else { config.port },
        min_memory_mb: config.min_memory_mb,
        max_memory_mb: config.max_memory_mb,
        offline_mode: config.offline_mode,
        connect: config.connect,
        created: now_secs(),
        jvm_flags: None,
        java_path: None,
        auto_eula: true,
    };
    write_meta(&dir, &meta).await?;
    Ok(to_row(&meta, &id, "Stopped".into(), false))
}

/// Deletes a server directory (not while running).
#[tauri::command]
pub async fn delete_server(app: AppHandle, id: String) -> Result<(), String> {
    if running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .contains_key(&id)
    {
        return Err("stop the server before deleting it".to_owned());
    }
    let dir = server_dir(&app, &id).await?;
    tokio::fs::remove_dir_all(dir)
        .await
        .map_err(|e| e.to_string())?;
    states()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .remove(&id);
    connect_endpoints()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .remove(&id);
    Ok(())
}

/// Resolves artifacts + configs and spawns the server process.
#[tauri::command]
pub async fn start_server(app: AppHandle, id: String) -> Result<(), String> {
    start_server_inner(&app, &id).await
}

async fn kill_pid(pid: u32) -> Result<(), String> {
    #[cfg(windows)]
    let mut cmd = {
        let mut c = tokio::process::Command::new("taskkill");
        c.args(["/PID", &pid.to_string(), "/T", "/F"]);
        c
    };
    #[cfg(not(windows))]
    let mut cmd = {
        let mut c = tokio::process::Command::new("kill");
        c.arg(pid.to_string());
        c
    };
    cmd.status()
        .await
        .map_err(|e| e.to_string())?
        .success()
        .then_some(())
        .ok_or_else(|| "kill failed".to_owned())
}

// ---- pid sidecar / orphan scan ----

/// PID sidecar persisted on start: `<server_dir>/.twilight-server.pid`.
fn pid_file(dir: &Path) -> PathBuf {
    dir.join(".twilight-server.pid")
}

async fn write_pid_file(dir: &Path, pid: u32) {
    if pid != 0 {
        let _ = tokio::fs::write(pid_file(dir), pid.to_string()).await;
    }
}

async fn read_pid_file(dir: &Path) -> Option<u32> {
    tokio::fs::read_to_string(pid_file(dir))
        .await
        .ok()
        .and_then(|s| s.trim().parse::<u32>().ok())
}

async fn remove_pid_file(dir: &Path) {
    let _ = tokio::fs::remove_file(pid_file(dir)).await;
}

/// True when `pid` names a live process (sysinfo refresh of exactly it).
fn pid_alive(pid: u32) -> bool {
    if pid == 0 {
        return false;
    }
    let Ok(mut guard) = sys_cache().lock() else {
        return false;
    };
    if guard.is_none() {
        *guard = System::new().ok();
    }
    let Some(system) = guard.as_mut() else {
        return false;
    };
    system.refresh_processes_specifics(
        ProcessesToUpdate::Some(&[Pid::from_u32(pid)]),
        true,
        ProcessRefreshKind::nothing().with_cpu().with_memory(),
    );
    system.process(Pid::from_u32(pid)).is_some()
}

/// Orphan scan for one server: a live PID sidecar with no `Running`
/// registry entry means the app restarted (or crashed) while the game
/// server kept running. Stale sidecars (dead pid, untracked) are pruned.
async fn scan_orphan(dir: &Path, id: &str) -> bool {
    let tracked = running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .contains_key(id);
    if tracked {
        return false;
    }
    match read_pid_file(dir).await {
        Some(pid) if pid_alive(pid) => true,
        Some(_) => {
            remove_pid_file(dir).await;
            false
        }
        None => false,
    }
}

/// Force-kills an orphaned game-server process (live PID sidecar left
/// behind by an app restart/crash) and clears the sidecar.
#[tauri::command]
pub async fn kill_orphaned_server(app: AppHandle, id: String) -> Result<(), String> {
    let dir = server_dir(&app, &id).await?;
    let pid = read_pid_file(&dir)
        .await
        .filter(|&p| pid_alive(p))
        .ok_or_else(|| "no orphaned process for this server".to_owned())?;
    kill_pid(pid).await?;
    remove_pid_file(&dir).await;
    set_state(&app, &id, "Stopped");
    Ok(())
}

/// Graceful stop: `stop` down stdin; force-kill fallback after 15s.
#[tauri::command]
pub async fn stop_server(app: AppHandle, id: String) -> Result<(), String> {
    let sender = running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .get(&id)
        .map(|r| r.sender.clone());
    let pid = running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .get(&id)
        .map(|r| r.pid);
    if let Some(sender) = sender {
        set_state(&app, &id, "Stopping");
        let _ = sender.send("stop".to_owned());
        // wait up to 15s for the exit watcher to flip state
        for _ in 0..150 {
            if state_of(&id) == "Stopped" {
                return Ok(());
            }
            tokio::time::sleep(std::time::Duration::from_millis(100)).await;
        }
    }
    if let Some(pid) = pid.filter(|p| *p != 0) {
        let _ = kill_pid(pid).await;
    }
    if let Ok(dir) = server_dir(&app, &id).await {
        remove_pid_file(&dir).await;
    }
    running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .remove(&id);
    set_state(&app, &id, "Stopped");
    Ok(())
}

/// Force-kills the process tree immediately.
#[tauri::command]
pub async fn kill_server(app: AppHandle, id: String) -> Result<(), String> {
    let pid = running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .get(&id)
        .map(|r| r.pid);
    if let Some(pid) = pid.filter(|p| *p != 0) {
        kill_pid(pid).await?;
    }
    if let Ok(dir) = server_dir(&app, &id).await {
        remove_pid_file(&dir).await;
    }
    running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .remove(&id);
    set_state(&app, &id, "Stopped");
    Ok(())
}

/// Restarts: graceful stop then start again.
#[tauri::command]
pub async fn restart_server(app: AppHandle, id: String) -> Result<(), String> {
    if state_of(&id) != "Stopped" {
        stop_server(app.clone(), id.clone()).await?;
    }
    start_server_inner(&app, &id).await
}

/// Writes a command + newline to the server stdin.
#[tauri::command]
pub async fn send_server_command(
    app: AppHandle,
    id: String,
    command: String,
) -> Result<(), String> {
    let _ = &app;
    let sender = running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .get(&id)
        .map(|r| r.sender.clone())
        .ok_or_else(|| "server is not running".to_owned())?;
    sender
        .send(command)
        .map_err(|_| "server stdin closed".to_owned())
}

/// Ordered `server.properties` lines (java) for the properties editor.
#[tauri::command]
pub async fn get_server_properties(app: AppHandle, id: String) -> Result<Vec<String>, String> {
    let dir = server_dir(&app, &id).await?;
    let raw = tokio::fs::read_to_string(dir.join("server.properties"))
        .await
        .unwrap_or_default();
    if raw.is_empty() {
        let meta = read_meta(&dir).await?;
        return Ok(config::default_server_properties(meta.port)
            .lines()
            .map(str::to_owned)
            .collect());
    }
    Ok(raw.lines().map(str::to_owned).collect())
}

/// Applies key=value updates in place, preserving comments/order.
#[tauri::command]
pub async fn update_server_properties(
    app: AppHandle,
    id: String,
    properties: HashMap<String, String>,
) -> Result<(), String> {
    let dir = server_dir(&app, &id).await?;
    let meta = read_meta(&dir).await?;
    if meta.software.is_native() {
        let raw = tokio::fs::read_to_string(dir.join("pumpkin.toml"))
            .await
            .unwrap_or_else(|_| config::pumpkin_toml(meta.port, !meta.offline_mode));
        let mut out = raw;
        for (key, value) in &properties {
            match key.as_str() {
                // Pumpkin 0.2.x reads these from `[networking.java]`
                "server-port" => {
                    out = config::update_toml_value(
                        &out,
                        "networking.java",
                        "address",
                        &format!("\"0.0.0.0:{value}\""),
                    );
                }
                "online-mode" => {
                    out = config::update_toml_value(&out, "networking.java", "online_mode", value);
                }
                "max-players" => {
                    out = config::update_toml_value(&out, "networking.java", "max_players", value);
                }
                "motd" => {
                    out = config::update_toml_value(
                        &out,
                        "networking.java",
                        "motd",
                        &format!("\"{value}\""),
                    );
                }
                _ => {}
            }
        }
        tokio::fs::write(dir.join("pumpkin.toml"), out)
            .await
            .map_err(|e| e.to_string())?;
        return Ok(());
    }
    let raw = tokio::fs::read_to_string(dir.join("server.properties"))
        .await
        .unwrap_or_else(|_| config::default_server_properties(meta.port));
    let mut lines = config::parse_properties(&raw);
    config::update_properties(&mut lines, &properties);
    tokio::fs::write(
        dir.join("server.properties"),
        config::serialize_properties(&lines),
    )
    .await
    .map_err(|e| e.to_string())
}

/// 1-click AuthMe install into `plugins/` (offline-mode recommendation).
#[tauri::command]
pub async fn install_authme(app: AppHandle, id: String) -> Result<String, String> {
    let dir = server_dir(&app, &id).await?;
    let dest = install_plugin_jar(
        &dir,
        "https://api.github.com/repos/AuthMe/AuthMeReloaded/releases/latest",
        engine::authme_asset_url,
        "AuthMe.jar",
    )
    .await?;
    Ok(dest.to_string_lossy().to_string())
}

/// 1-click Minekube Connect plugin install into `plugins/`.
#[tauri::command]
pub async fn install_connect(app: AppHandle, id: String) -> Result<String, String> {
    let dir = server_dir(&app, &id).await?;
    let meta = read_meta(&dir).await?;
    let pick = match meta.software {
        ServerSoftware::Velocity => {
            |r: &serde_json::Value| engine::connect_plugin_asset(r, ServerSoftware::Velocity)
        }
        _ => |r: &serde_json::Value| engine::connect_plugin_asset(r, ServerSoftware::Paper),
    };
    let dest = install_plugin_jar(
        &dir,
        "https://api.github.com/repos/minekube/connect-java/releases/latest",
        pick,
        "connect-plugin.jar",
    )
    .await?;
    Ok(dest.to_string_lossy().to_string())
}

/// Live Minekube Connect tunnel status + cached public endpoint.
#[tauri::command]
pub async fn get_connect_status(
    app: AppHandle,
    id: String,
) -> Result<(bool, Option<String>), String> {
    let _ = &app;
    let dir = server_dir(&app, &id).await?;
    let meta = read_meta(&dir).await?;
    let endpoint = connect_endpoints()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .get(&id)
        .cloned();
    Ok((meta.connect, endpoint))
}

/// Enables/disables the Minekube Connect tunnel (any time after creation);
/// the plugin jar auto-installs on the next server start.
#[tauri::command]
pub async fn set_connect_enabled(app: AppHandle, id: String, enabled: bool) -> Result<(), String> {
    let dir = server_dir(&app, &id).await?;
    let mut meta = read_meta(&dir).await?;
    meta.connect = enabled;
    write_meta(&dir, &meta).await?;
    Ok(())
}

/// Removes the Minekube Connect plugin jar and disables the tunnel.
#[tauri::command]
pub async fn remove_connect(app: AppHandle, id: String) -> Result<(), String> {
    let dir = server_dir(&app, &id).await?;
    let mut meta = read_meta(&dir).await?;
    meta.connect = false;
    write_meta(&dir, &meta).await?;
    let _ = tokio::fs::remove_file(dir.join("plugins").join("connect-plugin.jar")).await;
    Ok(())
}

/// Version lists for the wizard's step 2 (empty = manual installer).
#[tauri::command]
pub async fn fetch_server_versions(software: String) -> Result<Vec<String>, String> {
    let software = ServerSoftware::parse(&software)
        .ok_or_else(|| format!("unknown server software {software:?}"))?;
    let client = http_client();
    Ok(match software {
        ServerSoftware::Vanilla => {
            let manifest = fetch_json(
                &client,
                "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json",
            )
            .await?;
            engine::vanilla_version_ids(&manifest)
        }
        ServerSoftware::Paper | ServerSoftware::Velocity => {
            // Fill v3: `versions` is a map of groups; flatten + sort.
            let project = if software == ServerSoftware::Velocity {
                "velocity"
            } else {
                "paper"
            };
            let project_json = fetch_json(
                &client,
                &format!("https://fill.papermc.io/v3/projects/{project}"),
            )
            .await?;
            let mut ids = engine::fill_versions(&project_json);
            ids.truncate(80);
            ids
        }
        ServerSoftware::Purpur => {
            let v = fetch_json(&client, "https://api.purpurmc.org/v2/purpur").await?;
            let mut ids: Vec<String> = v
                .get("versions")
                .and_then(serde_json::Value::as_array)
                .map(|a| {
                    a.iter()
                        .filter_map(|x| x.as_str().map(str::to_owned))
                        .collect()
                })
                .unwrap_or_default();
            ids.reverse(); // upstream lists oldest first
            ids
        }
        ServerSoftware::Fabric => {
            let v: Vec<serde_json::Value> = client
                .get("https://meta.fabricmc.net/v2/versions/game")
                .send()
                .await
                .map_err(|e| e.to_string())?
                .json()
                .await
                .map_err(|e| e.to_string())?;
            v.iter()
                .filter(|e| e.get("stable").and_then(serde_json::Value::as_bool) == Some(true))
                .filter_map(|e| {
                    e.get("version")
                        .and_then(serde_json::Value::as_str)
                        .map(str::to_owned)
                })
                .collect()
        }
        ServerSoftware::Pumpkin | ServerSoftware::Steel => {
            // Releases list (not /releases/latest: it 404s on prerelease
            // repos). Official releases surface first, then the rolling
            // `canary` / `nightly` builds as selectable versions.
            let (repo, per_page) = match software {
                ServerSoftware::Pumpkin => ("Pumpkin-MC/Pumpkin", 25),
                _ => ("Steel-Foundation/SteelMC", 20),
            };
            let releases = fetch_json(
                &client,
                &format!("https://api.github.com/repos/{repo}/releases?per_page={per_page}"),
            )
            .await?;
            engine::github_release_choices(&releases)
        }
        ServerSoftware::NeoForge => {
            // Official maven API first (it lists ascending; the engine
            // re-sorts), then the maven-metadata.xml, then Prism's Meta v1
            // index as the last resort.
            let mut ids = match fetch_json(
                &client,
                "https://maven.neoforged.net/api/maven/versions/releases/net/neoforged/neoforge",
            )
            .await
            {
                Ok(api) => engine::neoforge_api_versions(&api),
                Err(_) => {
                    match fetch_text(
                        &client,
                        "https://maven.neoforged.net/releases/net/neoforged/neoforge/maven-metadata.xml",
                    )
                    .await
                    {
                        Ok(xml) => engine::neoforge_versions(&xml),
                        Err(_) => {
                            let prism = fetch_json(
                                &client,
                                "https://meta.prismlauncher.org/v1/net.neoforged/index.json",
                            )
                            .await?;
                            engine::neoforge_prism_versions(&prism)
                        }
                    }
                }
            };
            ids.truncate(120); // keep the dropdown sane; newest are first
            // Legacy 1.20.1 targets merge in from the
            // `net.neoforged:forge` artifact, best effort — they sort
            // below the modern ids, so the cap never hides them.
            if let Ok(legacy) = fetch_json(
                &client,
                "https://maven.neoforged.net/api/maven/versions/releases/net/neoforged/forge",
            )
            .await
            {
                ids.extend(engine::neoforge_legacy_versions(&legacy));
            }
            ids
        }
        ServerSoftware::Forge => {
            // Official promotions first (latest/recommended per Minecraft
            // version), then the full maven-metadata.xml, then Prism's
            // Meta v1 index as the last resort.
            let mut ids = match fetch_json(
                &client,
                "https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json",
            )
            .await
            {
                Ok(promos) => engine::forge_versions(&promos),
                Err(_) => {
                    match fetch_text(
                        &client,
                        "https://maven.minecraftforge.net/net/minecraftforge/forge/maven-metadata.xml",
                    )
                    .await
                    {
                        Ok(xml) => engine::maven_metadata_versions(&xml),
                        Err(_) => {
                            let prism = fetch_json(
                                &client,
                                "https://meta.prismlauncher.org/v1/net.minecraftforge/index.json",
                            )
                            .await?;
                            engine::forge_prism_versions(&prism)
                        }
                    }
                }
            };
            ids.truncate(120);
            ids
        }
    })
}

/// The detected host CPU microarch target, shown in the server wizard.
#[tauri::command]
pub fn get_cpu_target() -> String {
    engine::host_cpu_target().to_owned()
}

// ---- live metrics ----

#[derive(Clone, Serialize)]
pub struct ServerMetrics {
    pub state: String,
    pub cpu_percent: f32,
    pub memory_bytes: u64,
    pub max_memory_bytes: u64,
    pub disk_bytes: u64,
    pub uptime_secs: u64,
    pub orphaned: bool,
}

/// Cached sysinfo handle: kept alive between calls so CPU% is a real delta
/// between refreshes, never a zero first sample.
static SYS: OnceLock<Mutex<Option<System>>> = OnceLock::new();

fn sys_cache() -> &'static Mutex<Option<System>> {
    SYS.get_or_init(Mutex::default)
}

/// One sysinfo refresh of exactly the server PID: `(cpu_percent, bytes)`.
fn pid_cpu_memory(pid: u32) -> (f32, u64) {
    if pid == 0 {
        return (0.0, 0);
    }
    let Ok(mut guard) = sys_cache().lock() else {
        return (0.0, 0);
    };
    if guard.is_none() {
        *guard = System::new().ok();
    }
    let Some(system) = guard.as_mut() else {
        return (0.0, 0);
    };
    system.refresh_processes_specifics(
        ProcessesToUpdate::Some(&[Pid::from_u32(pid)]),
        true,
        ProcessRefreshKind::nothing().with_cpu().with_memory(),
    );
    match system.process(Pid::from_u32(pid)) {
        Some(proc) => (proc.cpu_usage(), proc.memory()),
        None => (0.0, 0),
    }
}

/// Recursive on-disk size of `path` (depth-guarded against symlink cycles).
fn dir_size(path: &Path, depth: usize) -> u64 {
    if depth > 32 {
        return 0;
    }
    let mut total = 0;
    let Ok(entries) = std::fs::read_dir(path) else {
        return 0;
    };
    for entry in entries.flatten() {
        let p = entry.path();
        if p.is_dir() {
            total += dir_size(&p, depth + 1);
        } else if let Ok(meta) = entry.metadata()
            && meta.is_file()
        {
            total += meta.len();
        }
    }
    total
}

/// ponytail: 30s TTL cache for the disk metric — a full tree walk every 2s
/// poll would thrash large worlds; upgrade to a watcher when needed.
static DISK_CACHE: OnceLock<Mutex<(PathBuf, u64, std::time::Instant)>> = OnceLock::new();

const DISK_TTL: std::time::Duration = std::time::Duration::from_secs(30);

fn cached_disk_size(path: PathBuf) -> u64 {
    let Ok(mut guard) = DISK_CACHE
        .get_or_init(|| Mutex::new((PathBuf::new(), 0, std::time::Instant::now())))
        .lock()
    else {
        return 0;
    };
    if guard.0 == path && guard.2.elapsed() < DISK_TTL {
        return guard.1;
    }
    *guard = (path.clone(), 0, std::time::Instant::now());
    let size = dir_size(&path, 0);
    guard.1 = size;
    guard.2 = std::time::Instant::now();
    size
}

/// Live process + disk metrics for one server.
#[tauri::command]
pub async fn get_server_metrics(app: AppHandle, id: String) -> Result<ServerMetrics, String> {
    let dir = server_dir(&app, &id).await?;
    let meta = read_meta(&dir).await?;
    let state = state_of(&id);
    let (cpu_percent, memory_bytes, uptime_secs) = if state == "Running" || state == "Starting" {
        let entry = running()
            .lock()
            .unwrap_or_else(|e| e.into_inner())
            .get(&id)
            .map(|r| (r.pid, r.started_at));
        match entry {
            Some((pid, started_at)) => {
                let (cpu, mem) = pid_cpu_memory(pid);
                (cpu, mem, now_secs().saturating_sub(started_at))
            }
            None => (0.0, 0, 0),
        }
    } else {
        (0.0, 0, 0)
    };
    let orphaned = scan_orphan(&dir, &id).await;
    let disk_bytes = tokio::task::spawn_blocking(move || cached_disk_size(dir))
        .await
        .map_err(|e| e.to_string())?;
    Ok(ServerMetrics {
        state,
        cpu_percent,
        memory_bytes,
        max_memory_bytes: u64::from(meta.max_memory_mb) * 1024 * 1024,
        disk_bytes,
        uptime_secs,
        orphaned,
    })
}

// ---- file manager ----

#[derive(Clone, Serialize)]
pub struct FileEntry {
    pub name: String,
    pub is_dir: bool,
    pub size: u64,
    pub modified: u64,
    pub readonly: bool,
}

/// Resolves `rel` inside `root` with a strict traversal guard: every `..`
/// component is rejected lexically, then the target (or its deepest existing
/// ancestor) is canonicalized and verified to stay inside the canonicalized
/// root — so symlinked entries cannot escape either.
fn resolve_in_root(root: &Path, rel: &str) -> Result<PathBuf, String> {
    let trimmed = rel.trim().trim_matches(|c| c == '/' || c == '\\');
    if trimmed.is_empty() {
        return Ok(root.to_path_buf());
    }
    let mut target = root.to_path_buf();
    for comp in trimmed.split(['/', '\\']) {
        if comp.is_empty() || comp == "." {
            continue;
        }
        if comp == ".." || comp.contains(':') || Path::new(comp).is_absolute() {
            return Err(format!("path traversal rejected: {rel:?}"));
        }
        target = target.join(comp);
    }
    let canon_root = root.canonicalize().map_err(|e| e.to_string())?;
    let mut popped: Vec<String> = Vec::new();
    let mut probe = target;
    let canonical = loop {
        match probe.canonicalize() {
            Ok(existing) => {
                let mut full = existing;
                for part in popped.iter().rev() {
                    full = full.join(part);
                }
                break full;
            }
            Err(_) => {
                let name = probe
                    .file_name()
                    .ok_or_else(|| format!("path escapes the server directory: {rel:?}"))?
                    .to_string_lossy()
                    .to_string();
                popped.push(name);
                probe = probe
                    .parent()
                    .ok_or_else(|| format!("path escapes the server directory: {rel:?}"))?
                    .to_path_buf();
            }
        }
    };
    if !canonical.starts_with(&canon_root) {
        return Err(format!("path escapes the server directory: {rel:?}"));
    }
    Ok(canonical)
}

fn modified_secs(meta: &std::fs::Metadata) -> u64 {
    meta.modified()
        .ok()
        .and_then(|time| time.duration_since(std::time::UNIX_EPOCH).ok())
        .map(|delta| delta.as_secs())
        .unwrap_or_default()
}

/// Editor-eligible text configs (`.properties`, `.toml`, `.yml`, `.json`,
/// `.txt`) plus logs and common config sidecars.
fn editable_rel(path: &Path) -> bool {
    matches!(
        path.extension()
            .and_then(|e| e.to_str())
            .map(|e| e.to_ascii_lowercase())
            .as_deref(),
        Some(
            "properties"
                | "toml"
                | "yml"
                | "yaml"
                | "json"
                | "txt"
                | "log"
                | "cfg"
                | "conf"
                | "mcmeta"
        )
    )
}

/// Upper bound for the built-in text editor.
const MAX_TEXT_FILE_BYTES: u64 = 2 * 1024 * 1024;

#[tauri::command]
pub async fn list_server_files(
    app: AppHandle,
    id: String,
    rel_path: String,
) -> Result<Vec<FileEntry>, String> {
    let dir = server_dir(&app, &id).await?;
    let target = resolve_in_root(&dir, &rel_path)?;
    let mut out = Vec::new();
    let mut entries = tokio::fs::read_dir(&target)
        .await
        .map_err(|e| e.to_string())?;
    while let Some(entry) = entries.next_entry().await.map_err(|e| e.to_string())? {
        let Ok(meta) = entry.metadata().await else {
            continue;
        };
        out.push(FileEntry {
            name: entry.file_name().to_string_lossy().into_owned(),
            is_dir: meta.is_dir(),
            size: if meta.is_file() { meta.len() } else { 0 },
            modified: modified_secs(&meta),
            readonly: meta.permissions().readonly(),
        });
    }
    // directories first, then case-insensitive names
    out.sort_by(|a, b| {
        b.is_dir
            .cmp(&a.is_dir)
            .then_with(|| a.name.to_lowercase().cmp(&b.name.to_lowercase()))
    });
    Ok(out)
}

#[tauri::command]
pub async fn read_server_text_file(
    app: AppHandle,
    id: String,
    rel_path: String,
) -> Result<String, String> {
    let dir = server_dir(&app, &id).await?;
    let target = resolve_in_root(&dir, &rel_path)?;
    if !target.is_file() {
        return Err(format!("not a file: {rel_path}"));
    }
    if !editable_rel(&target) {
        return Err(format!("{rel_path} is not an editable text file"));
    }
    let size = tokio::fs::metadata(&target)
        .await
        .map_err(|e| e.to_string())?
        .len();
    if size > MAX_TEXT_FILE_BYTES {
        return Err(format!(
            "file is larger than the {} MiB editor limit",
            MAX_TEXT_FILE_BYTES / 1024 / 1024
        ));
    }
    let bytes = tokio::fs::read(&target).await.map_err(|e| e.to_string())?;
    Ok(String::from_utf8_lossy(&bytes).into_owned())
}

#[tauri::command]
pub async fn write_server_text_file(
    app: AppHandle,
    id: String,
    rel_path: String,
    content: String,
) -> Result<(), String> {
    let dir = server_dir(&app, &id).await?;
    let target = resolve_in_root(&dir, &rel_path)?;
    if !editable_rel(&target) {
        return Err(format!("{rel_path} is not an editable text file"));
    }
    if let Some(parent) = target.parent() {
        tokio::fs::create_dir_all(parent)
            .await
            .map_err(|e| e.to_string())?;
    }
    tokio::fs::write(&target, content)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn create_server_dir(app: AppHandle, id: String, rel_path: String) -> Result<(), String> {
    let dir = server_dir(&app, &id).await?;
    let target = resolve_in_root(&dir, &rel_path)?;
    tokio::fs::create_dir_all(&target)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn delete_server_entry(
    app: AppHandle,
    id: String,
    rel_path: String,
) -> Result<(), String> {
    let dir = server_dir(&app, &id).await?;
    let target = resolve_in_root(&dir, &rel_path)?;
    if target == dir {
        return Err("cannot delete the server root".to_owned());
    }
    if target.is_dir() {
        tokio::fs::remove_dir_all(&target)
            .await
            .map_err(|e| e.to_string())
    } else if target.is_file() {
        tokio::fs::remove_file(&target)
            .await
            .map_err(|e| e.to_string())
    } else {
        Err(format!("no such entry: {rel_path}"))
    }
}

#[tauri::command]
pub async fn rename_server_entry(
    app: AppHandle,
    id: String,
    old_rel: String,
    new_rel: String,
) -> Result<(), String> {
    let dir = server_dir(&app, &id).await?;
    let from = resolve_in_root(&dir, &old_rel)?;
    let to = resolve_in_root(&dir, &new_rel)?;
    if to.exists() {
        return Err(format!("target already exists: {new_rel}"));
    }
    if let Some(parent) = to.parent() {
        tokio::fs::create_dir_all(parent)
            .await
            .map_err(|e| e.to_string())?;
    }
    tokio::fs::rename(&from, &to)
        .await
        .map_err(|e| e.to_string())
}

/// Copies external files (jars, mods, plugins) into one server directory.
#[tauri::command]
pub async fn upload_server_files(
    app: AppHandle,
    id: String,
    rel_dir: String,
    source_paths: Vec<String>,
) -> Result<u32, String> {
    let dir = server_dir(&app, &id).await?;
    let target = resolve_in_root(&dir, &rel_dir)?;
    if !target.is_dir() {
        return Err(format!("not a directory: {rel_dir}"));
    }
    let mut copied = 0u32;
    for source in &source_paths {
        let source = PathBuf::from(source.trim());
        let Some(name) = source.file_name().map(|n| n.to_string_lossy().into_owned()) else {
            continue;
        };
        if !source.is_file() {
            continue;
        }
        tokio::fs::copy(&source, target.join(name))
            .await
            .map_err(|e| e.to_string())?;
        copied += 1;
    }
    Ok(copied)
}

/// Zips the selected entries into `<server>/archives/<stamp>.zip`; returns
/// the archive's server-relative path.
#[tauri::command]
pub async fn archive_server_entries(
    app: AppHandle,
    id: String,
    rel_paths: Vec<String>,
) -> Result<String, String> {
    let dir = server_dir(&app, &id).await?;
    if rel_paths.is_empty() {
        return Err("select at least one entry to archive".to_owned());
    }
    for rel in &rel_paths {
        resolve_in_root(&dir, rel)?;
    }
    let archives = dir.join("archives");
    tokio::fs::create_dir_all(&archives)
        .await
        .map_err(|e| e.to_string())?;
    let name = format!("archive-{}.zip", timestamp_label(now_secs() as i64));
    let dest = archives.join(&name);
    let base = dir.clone();
    let rels: Vec<String> = rel_paths.iter().map(|r| r.replace('\\', "/")).collect();
    let out = dest.clone();
    tokio::task::spawn_blocking(move || {
        let refs: Vec<&str> = rels.iter().map(String::as_str).collect();
        write_zip_entries(&base, &refs, &out)
    })
    .await
    .map_err(|e| e.to_string())??;
    Ok(dest
        .strip_prefix(&dir)
        .unwrap_or(&dest)
        .to_string_lossy()
        .into_owned())
}

// ---- startup & runtime configuration ----

#[derive(serde::Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ServerStartup {
    pub min_memory_mb: u32,
    pub max_memory_mb: u32,
    pub port: u16,
    pub jvm_flags: Option<String>,
    pub java_path: Option<String>,
    pub auto_eula: bool,
}

/// Persists the Startup-page fields; blocked while the server runs.
#[tauri::command]
pub async fn set_server_startup(
    app: AppHandle,
    id: String,
    config: ServerStartup,
) -> Result<(), String> {
    if running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .contains_key(&id)
    {
        return Err("stop the server before editing its startup".to_owned());
    }
    if config.port == 0 {
        return Err("port must not be 0".to_owned());
    }
    if let Some(java) = config
        .java_path
        .as_deref()
        .map(str::trim)
        .filter(|p| !p.is_empty())
        && !Path::new(java).is_file()
    {
        return Err(format!("java runtime not found: {java}"));
    }
    let dir = server_dir(&app, &id).await?;
    let mut meta = read_meta(&dir).await?;
    let port_changed = meta.port != config.port;
    meta.min_memory_mb = config.min_memory_mb;
    meta.max_memory_mb = config.max_memory_mb;
    meta.port = config.port;
    meta.jvm_flags = config
        .jvm_flags
        .map(|f| f.trim().to_owned())
        .filter(|f| !f.is_empty());
    meta.java_path = config
        .java_path
        .map(|p| p.trim().to_owned())
        .filter(|p| !p.is_empty());
    meta.auto_eula = config.auto_eula;
    write_meta(&dir, &meta).await?;
    if port_changed {
        // keep the runtime config (server.properties / Pumpkin.toml) in sync
        let properties = HashMap::from([("server-port".to_owned(), config.port.to_string())]);
        update_server_properties(app, id, properties).await?;
    }
    Ok(())
}

// ---- backups ----

#[derive(Clone, Serialize)]
pub struct ServerBackup {
    pub name: String,
    pub size: u64,
    pub created: u64,
}

fn backups_dir(dir: &Path) -> PathBuf {
    dir.join("backups")
}

/// Everything a backup preserves: the world plus the identity configs.
const BACKUP_ROOTS: &[&str] = &[
    "world",
    "server.properties",
    "pumpkin.toml",
    "eula.txt",
    "server.json",
];

/// Timestamped backups of `world/` + configs, newest first.
#[tauri::command]
pub async fn list_server_backups(app: AppHandle, id: String) -> Result<Vec<ServerBackup>, String> {
    let dir = server_dir(&app, &id).await?;
    let mut out = Vec::new();
    let Ok(mut entries) = tokio::fs::read_dir(backups_dir(&dir)).await else {
        return Ok(out);
    };
    while let Some(entry) = entries.next_entry().await.map_err(|e| e.to_string())? {
        let Ok(meta) = entry.metadata().await else {
            continue;
        };
        if !meta.is_file() {
            continue;
        }
        let name = entry.file_name().to_string_lossy().into_owned();
        if !name.to_ascii_lowercase().ends_with(".zip") {
            continue;
        }
        out.push(ServerBackup {
            name,
            size: meta.len(),
            created: modified_secs(&meta),
        });
    }
    out.sort_by_key(|b| std::cmp::Reverse(b.created));
    Ok(out)
}

/// Archives `world/` + configs into `<server>/backups/<stamp>.zip`.
#[tauri::command]
pub async fn create_server_backup(app: AppHandle, id: String) -> Result<ServerBackup, String> {
    let dir = server_dir(&app, &id).await?;
    let existing: Vec<String> = BACKUP_ROOTS
        .iter()
        .filter(|rel| dir.join(rel).exists())
        .map(|rel| rel.to_string())
        .collect();
    if existing.is_empty() {
        return Err("nothing to back up yet (no world or configs)".to_owned());
    }
    tokio::fs::create_dir_all(backups_dir(&dir))
        .await
        .map_err(|e| e.to_string())?;
    let name = format!("backup-{}.zip", timestamp_label(now_secs() as i64));
    let dest = backups_dir(&dir).join(&name);
    let base = dir.clone();
    let out = dest.clone();
    tokio::task::spawn_blocking(move || {
        let refs: Vec<&str> = existing.iter().map(String::as_str).collect();
        write_zip_entries(&base, &refs, &out)
    })
    .await
    .map_err(|e| e.to_string())??;
    let size = tokio::fs::metadata(&dest)
        .await
        .map(|m| m.len())
        .unwrap_or(0);
    Ok(ServerBackup {
        name,
        size,
        created: now_secs(),
    })
}

/// Destination for one archive entry inside `dir`, or `None` when the entry
/// escapes the server folder (zip-slip guard).
fn dest_for_entry(dir: &Path, name: &str) -> Option<PathBuf> {
    // Backslashes, drive letters and NTFS alternate data streams are unsafe
    // on every host: on Linux `Path` would accept `C:/abs.dat` as two plain
    // components even though Windows reads it as an absolute path.
    if name.is_empty() || name.ends_with('/') || name.contains(['\\', '\0', ':']) {
        return None;
    }
    let mut dest = dir.to_path_buf();
    for component in Path::new(name).components() {
        match component {
            std::path::Component::Normal(part) => dest.push(part),
            // `..`, absolute roots, Windows prefixes: never leave the dir
            _ => return None,
        }
    }
    Some(dest)
}

/// Restores one backup zip over the server directory (blocked while
/// running); stale files not in the archive survive.
#[tauri::command]
pub async fn restore_server_backup(
    app: AppHandle,
    id: String,
    backup_name: String,
) -> Result<(), String> {
    validate_server_id(&backup_name)?;
    if running()
        .lock()
        .unwrap_or_else(|e| e.into_inner())
        .contains_key(&id)
    {
        return Err("stop the server before restoring a backup".to_owned());
    }
    let dir = server_dir(&app, &id).await?;
    let path = backups_dir(&dir).join(&backup_name);
    if !path.is_file() {
        return Err(format!("backup {backup_name:?} does not exist"));
    }
    let bytes = tokio::fs::read(&path).await.map_err(|e| e.to_string())?;
    let entries = extract_archive(&bytes).map_err(|e| e.to_string())?;
    for (name, content) in entries {
        // ponytail: directory entries are skipped — parents are created by
        // the file writes; empty dirs never occur in these archives
        if name.ends_with('/') {
            continue;
        }
        let Some(dest) = dest_for_entry(&dir, &name) else {
            return Err(format!(
                "archive entry {name:?} escapes the server directory"
            ));
        };
        if let Some(parent) = dest.parent() {
            tokio::fs::create_dir_all(parent)
                .await
                .map_err(|e| e.to_string())?;
        }
        tokio::fs::write(&dest, &content)
            .await
            .map_err(|e| e.to_string())?;
    }
    Ok(())
}

/// Deletes one backup zip.
#[tauri::command]
pub async fn delete_server_backup(
    app: AppHandle,
    id: String,
    backup_name: String,
) -> Result<(), String> {
    validate_server_id(&backup_name)?;
    let dir = server_dir(&app, &id).await?;
    let path = backups_dir(&dir).join(&backup_name);
    if !path.is_file() {
        return Err(format!("backup {backup_name:?} does not exist"));
    }
    tokio::fs::remove_file(&path)
        .await
        .map_err(|e| e.to_string())
}

#[cfg(test)]
mod server_manager_tests {
    use super::*;

    fn temp_root(tag: &str) -> PathBuf {
        let root = std::env::temp_dir().join(format!(
            "twi-srv-mgr-test-{tag}-{}-{}",
            std::process::id(),
            now_secs() * 1000
                + u64::from(
                    std::time::SystemTime::now()
                        .duration_since(std::time::UNIX_EPOCH)
                        .unwrap_or_default()
                        .subsec_millis()
                )
        ));
        std::fs::create_dir_all(&root).unwrap();
        root
    }

    #[test]
    fn traversal_is_rejected_lexically() {
        let root = temp_root("traversal");
        std::fs::create_dir_all(root.join("world")).unwrap();
        std::fs::write(root.join("server.properties"), "x=1\n").unwrap();
        // simple escape
        assert!(resolve_in_root(&root, "../evil").is_err());
        // sneaky escape through a nested path
        assert!(resolve_in_root(&root, "world/../../evil").is_err());
        // absolute roots and drive prefixes
        let canon_root = root.canonicalize().unwrap();
        assert!(resolve_in_root(&root, "/etc/passwd").is_ok_and(|p| p.starts_with(&canon_root))); // leading slash is relative
        assert!(resolve_in_root(&root, "C:/evil").is_err());
        // valid nesting resolves and stays inside
        let ok = resolve_in_root(&root, "world/region").unwrap();
        assert!(ok.starts_with(&canon_root));
        // empty resolves to the root itself
        assert_eq!(resolve_in_root(&root, "").unwrap(), root);
        assert_eq!(resolve_in_root(&root, "  ").unwrap(), root);
    }

    #[test]
    fn canonicalization_blocks_symlink_escapes() {
        // unix-only: symlink creation needs no elevation there
        #[cfg(unix)]
        {
            let root = temp_root("symlink");
            let outside = temp_root("outside");
            std::fs::write(outside.join("secret.txt"), "x").unwrap();
            std::os::unix::fs::symlink(&outside, root.join("link")).unwrap();
            // the symlink resolves outside the root: rejected
            assert!(resolve_in_root(&root, "link/secret.txt").is_err());
            // a nested dir that does not exist yet resolves fine
            assert!(resolve_in_root(&root, "missing/dir/file.txt").is_ok());
        }
    }

    #[test]
    fn java_args_carry_flags_then_memory_then_jar() {
        let meta = ServerMeta {
            software: ServerSoftware::Paper,
            version: "1.21.4".into(),
            loader_version: None,
            port: 25565,
            min_memory_mb: 1024,
            max_memory_mb: 4096,
            offline_mode: false,
            connect: false,
            created: 0,
            jvm_flags: Some("-XX:+UseG1GC -Dfile.encoding=UTF8".into()),
            java_path: None,
            auto_eula: true,
        };
        let args = java_launch_args(&meta, "server.jar");
        assert_eq!(
            args,
            vec![
                "-XX:+UseG1GC",
                "-Dfile.encoding=UTF8",
                "-Xms1024M",
                "-Xmx4096M",
                "-jar",
                "server.jar",
                "nogui"
            ]
        );
        // no flags / no memory: the plain java line
        let mut plain = meta.clone();
        plain.jvm_flags = None;
        plain.min_memory_mb = 0;
        plain.max_memory_mb = 0;
        assert_eq!(
            java_launch_args(&plain, "server.jar"),
            vec!["-jar", "server.jar", "nogui"]
        );
        // whitespace-only flags are none
        assert!(jvm_flag_list(&Some("   ".into())).is_empty());
        assert!(jvm_flag_list(&None).is_empty());
    }

    #[test]
    fn editable_extensions_match_text_configs_only() {
        for name in [
            "server.properties",
            "pumpkin.toml",
            "config.yml",
            "config.yaml",
            "settings.json",
            "README.txt",
            "latest.log",
            "proxy.cfg",
            "proxy.conf",
            "pack.mcmeta",
        ] {
            assert!(editable_rel(Path::new(name)), "{name} should be editable");
        }
        for name in [
            "server.jar",
            "pumpkin.exe",
            "world.dat",
            "image.png",
            "noext",
        ] {
            assert!(
                !editable_rel(Path::new(name)),
                "{name} must not be editable"
            );
        }
    }

    #[test]
    fn backup_entry_guard_blocks_zip_slip() {
        let root = temp_root("backup-guard");
        assert!(dest_for_entry(&root, "world/level.dat").is_some());
        assert!(dest_for_entry(&root, "server.properties").is_some());
        assert!(dest_for_entry(&root, "../steal.dat").is_none());
        assert!(dest_for_entry(&root, "/abs.dat").is_none());
        assert!(dest_for_entry(&root, "C:/abs.dat").is_none());
        assert!(dest_for_entry(&root, "..\\steal.dat").is_none());
        assert!(dest_for_entry(&root, "stream.dat:evil").is_none());
        assert!(dest_for_entry(&root, "dir/").is_none());
        assert!(dest_for_entry(&root, "").is_none());
    }

    #[test]
    fn pid_alive_distinguishes_zero_and_live_pids() {
        assert!(!pid_alive(0));
        // this test process is alive
        assert!(pid_alive(std::process::id()));
    }

    #[tokio::test]
    async fn pid_file_roundtrip_and_orphan_scan() {
        let root = temp_root("pid-file");
        // no sidecar yet: not orphaned
        assert!(!scan_orphan(&root, "srv").await);
        // live pid (this test process) with no registry entry → orphaned
        write_pid_file(&root, std::process::id()).await;
        assert!(scan_orphan(&root, "srv").await);
        // a live scan keeps the sidecar
        assert!(read_pid_file(&root).await.is_some());
        // dead pid (above every platform pid_max) → stale sidecar pruned
        write_pid_file(&root, u32::MAX - 1).await;
        assert!(!scan_orphan(&root, "srv").await);
        assert!(!pid_file(&root).exists());
        // roundtrip + explicit removal
        write_pid_file(&root, 12345).await;
        assert_eq!(read_pid_file(&root).await, Some(12345));
        remove_pid_file(&root).await;
        assert_eq!(read_pid_file(&root).await, None);
    }
}
