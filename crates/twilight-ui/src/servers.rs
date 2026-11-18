// IPC bridge for the server creator: each server is a directory under
// `<app_data_dir>/servers/<id>/` holding `server.json` metadata plus the
// server's own files (jars, plugins, eula.txt, server.properties). Output
// streams into the webview as `server-log` events; state transitions as
// `server-state`; the Minekube Connect endpoint as `server-connect`.

use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::sync::{Mutex, OnceLock};

use serde::Serialize;
use tauri::{AppHandle, Emitter, Manager};
use twilight_downloader::{DownloadRequest, ParallelDownloader};
use twilight_runtime::{JavaInstallation, discover_java, select_best_java};
use twilight_server::{ServerMeta, ServerSoftware, config, engine, process};

use crate::instances::slugify;

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
        .unwrap()
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
        .unwrap()
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
    pub state: String,
}

fn to_row(meta: &ServerMeta, id: &str, state: String) -> ServerRow {
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
        state,
    }
}

async fn servers_root(app: &AppHandle) -> Result<PathBuf, String> {
    let root = app
        .path()
        .app_data_dir()
        .map_err(|e| e.to_string())?
        .join("servers");
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
    reqwest::Client::builder()
        // GitHub 403s generic agents; PaperMC Fill v3 documents a UA with
        // project/URL. Every external request flows through this client.
        .user_agent("TwilightMC/0.6.0 (https://github.com/BlackCatOfficialytb/TwilightMC-OSS)")
        .build()
        .unwrap_or_default()
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
) -> Result<PathBuf, String> {
    let dest = dir.join(name);
    if dest.is_file() {
        return Ok(dest);
    }
    let downloader = ParallelDownloader::new(http_client(), 4);
    downloader
        .download_all(&[DownloadRequest {
            url: url.to_owned(),
            dest: dest.clone(),
            sha1,
        }])
        .await
        .map_err(|e| e.to_string())?;
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
/// flows (NeoForge) stream progress through `emit`.
async fn resolve_artifact(
    dir: &Path,
    meta: &ServerMeta,
    emit: &std::sync::Arc<dyn Fn(String) + Send + Sync>,
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
            fetch_artifact(dir, name, &url, sha1).await
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
            fetch_artifact(dir, name, &url, sha256).await
        }
        ServerSoftware::Purpur => {
            fetch_artifact(dir, name, &engine::purpur_download_url(&meta.version), None).await
        }
        ServerSoftware::Fabric => {
            let loader = resolve_fabric_loader(meta.loader_version.as_deref()).await?;
            fetch_artifact(
                dir,
                name,
                &engine::fabric_download_url(&meta.version, &loader),
                None,
            )
            .await
        }
        ServerSoftware::Pumpkin | ServerSoftware::Steel => {
            // GitHub `/releases/latest` 404s on prerelease-only repos —
            // query the list and pick: pinned tag, else newest stable, else
            // any release with a matching host asset.
            let repo = if meta.software == ServerSoftware::Steel {
                "Steel-Foundation/SteelMC"
            } else {
                "Pumpkin-MC/Pumpkin"
            };
            let releases = fetch_json(
                &client,
                &format!("https://api.github.com/repos/{repo}/releases?per_page=20"),
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
            fetch_artifact(dir, name, &url, None).await
        }
        ServerSoftware::NeoForge => {
            // Step 1: the installer jar; step 2: run `--installServer` once
            // to assemble libraries + the run scripts the launch uses.
            let installer = fetch_artifact(
                dir,
                "neoforge-installer.jar",
                &engine::neoforge_installer_url(&meta.version),
                None,
            )
            .await?;
            if !dir.join("libraries").is_dir() {
                let java = find_java(&meta.software, &meta.version).await?;
                run_installer(&java, &installer, dir, emit).await?;
            }
            Ok(installer)
        }
        _ => Err(format!(
            "{} has no automated fetch in TwilightMC — install the official launcher jar as {} and retry",
            meta.software.label(),
            name
        )),
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
                .unwrap()
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

/// Registers the exit watcher: state back to Stopped, registry cleanup.
fn watch_exit(app: &AppHandle, id: &str, mut child: tokio::process::Child) {
    let app = app.clone();
    let id = id.to_owned();
    tauri::async_runtime::spawn(async move {
        let _ = child.wait().await;
        running().lock().unwrap().remove(&id);
        set_state(&app, &id, "Stopped");
    });
}

async fn start_server_inner(app: &AppHandle, id: &str) -> Result<(), String> {
    if running().lock().unwrap().contains_key(id) {
        return Err("server is already running".to_owned());
    }
    let dir = server_dir(app, id).await?;
    let meta = read_meta(&dir).await?;

    set_state(app, id, "Starting");

    let emit = make_emit(app, id);

    // resolve/download the artifact first (slow path: clean state on failure)
    let artifact = match resolve_artifact(&dir, &meta, &emit).await {
        Ok(a) => a,
        Err(e) => {
            set_state(app, id, "Stopped");
            return Err(e);
        }
    };

    // configs: eula + properties (java) or Pumpkin.toml (native)
    if meta.software.is_native() {
        let toml_path = dir.join("Pumpkin.toml");
        if !toml_path.is_file() {
            tokio::fs::write(&toml_path, config::pumpkin_toml(meta.port))
                .await
                .map_err(|e| e.to_string())?;
        }
    } else {
        tokio::fs::write(dir.join("eula.txt"), config::eula_txt())
            .await
            .map_err(|e| e.to_string())?;
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
        // Installer-based launch: memory flags ride user_jvm_args.txt; the
        // parsed script line carries classpath/module args.
        if meta.min_memory_mb > 0 || meta.max_memory_mb > 0 {
            tokio::fs::write(
                dir.join("user_jvm_args.txt"),
                config::user_jvm_args_txt(meta.min_memory_mb, meta.max_memory_mb),
            )
            .await
            .map_err(|e| e.to_string())?;
        }
        let java = match find_java(&meta.software, &meta.version).await {
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
        let java = find_java(&meta.software, &meta.version).await;
        let java = match java {
            Ok(j) => j,
            Err(e) => {
                set_state(app, id, "Stopped");
                return Err(e);
            }
        };
        process::ServerSpawn {
            program: java,
            args: process::java_args(
                meta.min_memory_mb,
                meta.max_memory_mb,
                &artifact.to_string_lossy(),
            ),
            cwd: dir.clone(),
        }
    };

    match process::spawn(&spawn_spec, emit).await {
        Ok((child, sender)) => {
            let pid = child.id().unwrap_or(0);
            running()
                .lock()
                .unwrap()
                .insert(id.to_owned(), Running { sender, pid });
            watch_exit(app, id, child);
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
            rows.push(to_row(&meta, &id, state_of(&id)));
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
    };
    write_meta(&dir, &meta).await?;
    Ok(to_row(&meta, &id, "Stopped".into()))
}

/// Deletes a server directory (not while running).
#[tauri::command]
pub async fn delete_server(app: AppHandle, id: String) -> Result<(), String> {
    if running().lock().unwrap().contains_key(&id) {
        return Err("stop the server before deleting it".to_owned());
    }
    let dir = server_dir(&app, &id).await?;
    tokio::fs::remove_dir_all(dir)
        .await
        .map_err(|e| e.to_string())?;
    states().lock().unwrap().remove(&id);
    connect_endpoints().lock().unwrap().remove(&id);
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

/// Graceful stop: `stop` down stdin; force-kill fallback after 15s.
#[tauri::command]
pub async fn stop_server(app: AppHandle, id: String) -> Result<(), String> {
    let sender = running().lock().unwrap().get(&id).map(|r| r.sender.clone());
    let pid = running().lock().unwrap().get(&id).map(|r| r.pid);
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
    running().lock().unwrap().remove(&id);
    set_state(&app, &id, "Stopped");
    Ok(())
}

/// Force-kills the process tree immediately.
#[tauri::command]
pub async fn kill_server(app: AppHandle, id: String) -> Result<(), String> {
    let pid = running().lock().unwrap().get(&id).map(|r| r.pid);
    if let Some(pid) = pid.filter(|p| *p != 0) {
        kill_pid(pid).await?;
    }
    running().lock().unwrap().remove(&id);
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
        .unwrap()
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
        let raw = tokio::fs::read_to_string(dir.join("Pumpkin.toml"))
            .await
            .unwrap_or_else(|_| config::pumpkin_toml(meta.port));
        let mut out = raw;
        for (key, value) in &properties {
            if key == "server-port" {
                out = config::update_toml_value(&out, "server", "port", value);
            }
        }
        tokio::fs::write(dir.join("Pumpkin.toml"), out)
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
    let endpoint = connect_endpoints().lock().unwrap().get(&id).cloned();
    Ok((meta.connect, endpoint))
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
            // repos); nightly/canary tags surface as selectable versions.
            let repo = if software == ServerSoftware::Steel {
                "Steel-Foundation/SteelMC"
            } else {
                "Pumpkin-MC/Pumpkin"
            };
            let releases = fetch_json(
                &client,
                &format!("https://api.github.com/repos/{repo}/releases?per_page=20"),
            )
            .await?;
            let mut tags = engine::release_tag_names(&releases);
            tags.retain(|t| t != "canary"); // testing build, nightly is the daily
            tags
        }
        ServerSoftware::NeoForge => {
            let xml = fetch_text(
                &client,
                "https://maven.neoforged.net/releases/net/neoforged/neoforge/maven-metadata.xml",
            )
            .await?;
            engine::neoforge_versions(&xml)
        }
        // Forge: manual installer, no automated fetch
        _ => Vec::new(),
    })
}

/// The detected host CPU microarch target, shown in the server wizard.
#[tauri::command]
pub fn get_cpu_target() -> String {
    engine::host_cpu_target().to_owned()
}
