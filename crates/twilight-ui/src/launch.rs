// IPC bridge to the launch pipeline. Game output streams into the webview as
// `launch-log` events; the command resolves when the game process exits.

use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicBool, AtomicU32, Ordering};

use serde::Serialize;
use tauri::{AppHandle, Emitter};
use tokio::io::AsyncBufReadExt;
use tokio::sync::mpsc;
use twilight_auth::AccountType;
use twilight_cli::{LaunchConfig, run_launch_with};
use twilight_downloader::{
    FREESM_META_BASE, PRISM_META_BASE, fetch_json_failover, resolve_vanilla_version,
    vanilla_sources,
};
use twilight_horizon::{
    InstallRequest, LaunchOptions, client_command, describe, ensure_resources, probe_launch_api,
    session_json,
};
use twilight_launch::LaunchEvent;

use crate::accounts::{Settings, active_account, load_settings, settings_path};
use crate::devmode::{self, DevLaunchRecord};
use crate::instance::resolved_instances_root;
use crate::instances;

/// One game output line. `stream` is `"stdout"` or `"stderr"`.
#[derive(Clone, Serialize)]
struct LaunchLine {
    stream: &'static str,
    line: String,
}

/// One game per app run: the pipeline stages artifacts in shared scratch dirs.
static RUNNING: AtomicBool = AtomicBool::new(false);
/// Live game pid (0 = none); set from the pipeline's `Started` event so
/// `kill_instance` can stop the process tree.
static GAME_PID: AtomicU32 = AtomicU32::new(0);
/// Most recent assembled command per instance, captured from the pipeline's
/// `Command` event for Developer Mode's "Copy Raw Launch Command" action.
static LAST_COMMAND: std::sync::Mutex<Option<(String, String)>> = std::sync::Mutex::new(None);

/// Exact command line of the last launch of `instance_id` (Developer Mode).
#[tauri::command]
pub async fn get_raw_launch_command(
    instance_id: String,
    unredacted: Option<bool>,
) -> Result<String, String> {
    instances::validate_instance_id(&instance_id)?;
    let cached = LAST_COMMAND.lock().map_err(|e| e.to_string())?;
    match cached.as_ref() {
        Some((id, command)) if id == &instance_id => Ok(if unredacted.unwrap_or(false) {
            command.clone()
        } else {
            devmode::redact_launch_command(command)
        }),
        _ => Err("launch this instance once to capture its raw command".to_owned()),
    }
}

/// Launches the instance `instance_id` from the shared instance library with
/// the UI storage layout: shared artifacts live under the app data dir,
/// staging stays in the OS temp. `server` quick-joins an address (`--server`);
/// `world` launches straight into a singleplayer world folder
/// (`--quickPlaySingleplayer`, 1.20+).
#[tauri::command]
pub async fn launch_instance(
    app: AppHandle,
    instance_id: String,
    server: Option<String>,
    world: Option<String>,
) -> Result<i32, String> {
    if RUNNING
        .compare_exchange(false, true, Ordering::SeqCst, Ordering::SeqCst)
        .is_err()
    {
        return Err("a game is already running".to_owned());
    }

    let result = run(&app, &instance_id, server, world).await;
    GAME_PID.store(0, Ordering::SeqCst);
    RUNNING.store(false, Ordering::SeqCst);
    result
}

/// Stops the running game by pid (Windows: process-tree kill).
#[tauri::command]
pub async fn kill_instance() -> Result<(), String> {
    let pid = GAME_PID.swap(0, Ordering::SeqCst);
    if pid == 0 {
        return Err("no game is running".to_owned());
    }
    kill_pid(pid).await
}

/// Deaf Mode pre-launch hook: flips `showSubtitles:true` in
/// `<game_dir>/options.txt` non-destructively — every other line (keybinds,
/// FOV, …) is preserved verbatim, CRLF/LF style included. Returns what
/// happened for the console diagnostic:
/// `created` | `updated` | `appended` | `already-set`.
pub(crate) fn ensure_deaf_subtitles(game_dir: &Path) -> Result<&'static str, String> {
    let path = game_dir.join("options.txt");
    if !path.exists() {
        // the pipeline creates the work dir anyway; doing it here too keeps
        // this helper self-sufficient for a fresh instance
        std::fs::create_dir_all(game_dir).map_err(|e| e.to_string())?;
        std::fs::write(&path, "showSubtitles:true\n").map_err(|e| e.to_string())?;
        return Ok("created");
    }
    let raw = std::fs::read_to_string(&path).map_err(|e| e.to_string())?;
    // `lines()` eats both \n and \r\n; the detected dominant style rebuilds
    // the file so every other line stays byte-identical
    let newline = if raw.contains("\r\n") { "\r\n" } else { "\n" };
    let trailing = raw.ends_with('\n');
    let mut updated = false;
    let mut lines = Vec::new();
    for line in raw.lines() {
        if line.starts_with("showSubtitles:") {
            if line == "showSubtitles:true" {
                return Ok("already-set");
            }
            lines.push("showSubtitles:true".to_owned());
            updated = true;
        } else {
            lines.push(line.to_owned());
        }
    }
    if updated {
        let mut out = lines.join(newline);
        if trailing {
            out.push_str(newline);
        }
        std::fs::write(&path, out).map_err(|e| e.to_string())?;
        return Ok("updated");
    }
    // no showSubtitles line at all: append one (newline before it when the
    // file does not end on its own)
    let mut out = raw;
    if !trailing && !out.is_empty() {
        out.push_str(newline);
    }
    out.push_str("showSubtitles:true\n");
    std::fs::write(&path, out).map_err(|e| e.to_string())?;
    Ok("appended")
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
    let status = cmd.status().await.map_err(|e| e.to_string())?;
    if status.success() {
        Ok(())
    } else {
        Err(format!("failed to kill pid {pid} (exit {status})"))
    }
}

/// Streams one child pipe line-by-line into the console drawer.
async fn pump_lines<R: tokio::io::AsyncRead + Unpin>(
    reader: R,
    app: AppHandle,
    stream: &'static str,
) {
    let mut lines = tokio::io::BufReader::new(reader).lines();
    while let Ok(Some(line)) = lines.next_line().await {
        let _ = app.emit("launch-log", LaunchLine { stream, line });
    }
}

/// Horizon (native Rust engine) launch path.
///
/// The real contract is `horizon-client --resources <dir> --game-dir <dir>
/// --home <dir>` with the signed-in Microsoft session on stdin. Resources are
/// prepared from the player's own Mojang jar/asset objects on demand (never
/// bundled), and the prepared folder is shared across Horizon instances by
/// version. No JVM, no classpath, no Java loader tokens.
/// JVM debug flags for one launch. Returns an empty vector unless Developer
/// Mode is enabled, so a persisted JDWP/Mixin preference is inert by itself.
fn java_dev_flags(settings: &Settings) -> Vec<String> {
    if !settings.dev_mode {
        return Vec::new();
    }
    twilight_launch::dev_jvm_args(twilight_launch::DevDebugOptions {
        jdwp_enabled: settings.jdwp_enabled,
        jdwp_port: settings.jdwp_port,
        mixin_debug: settings.mixin_debug,
    })
}

/// The launcher-managed release store. A binary outside it is a local build
/// or an unsigned artifact, which needs an explicit opt-in in Dev Mode.
fn horizon_is_official(binary: &Path, shared_dir: &Path) -> bool {
    binary.starts_with(shared_dir.join("horizon-releases"))
}

#[derive(Debug, Clone, PartialEq, Eq)]
struct HorizonDevPlan {
    developer_offline: bool,
    developer_single_player: bool,
    provenance: &'static str,
    flags_used: Vec<String>,
    blocked: bool,
}

/// Maps persisted Developer settings to Horizon's documented developer
/// switches. Every switch is double-gated on `dev_mode`; outside Dev Mode the
/// plan is empty even if old settings still carry `true` values.
fn horizon_dev_plan(settings: &Settings, official: bool) -> HorizonDevPlan {
    if !settings.dev_mode {
        return HorizonDevPlan {
            developer_offline: false,
            developer_single_player: false,
            provenance: "official",
            flags_used: Vec::new(),
            blocked: false,
        };
    }
    let developer_offline = settings.horizon_dev_offline;
    let developer_single_player = settings.horizon_dev_single_player;
    let mut flags_used = Vec::new();
    if developer_offline {
        flags_used.push("HORIZON_LAUNCHER_DEVELOPER_OFFLINE=1".to_owned());
    }
    if developer_single_player {
        flags_used.push("--developer-single-player".to_owned());
    }
    HorizonDevPlan {
        developer_offline,
        developer_single_player,
        provenance: if developer_offline {
            "build-from-source"
        } else if official {
            "official-with-dev-flags"
        } else {
            "unsigned-local"
        },
        flags_used,
        blocked: !official && !settings.horizon_allow_unsigned_local,
    }
}

async fn run_horizon(
    app: &AppHandle,
    instance_id: &str,
    instance_dir: &Path,
    meta: &instances::InstanceMeta,
    settings: &Settings,
    server: Option<String>,
    world: Option<String>,
) -> Result<i32, String> {
    let log = |stream: &'static str, line: String| {
        let _ = app.emit("launch-log", LaunchLine { stream, line });
    };

    // Explicit setting wins; otherwise accept a binary discovered on PATH /
    // beside this executable (a bundled Horizon is never shipped by us).
    let binary = settings
        .horizon_path
        .as_deref()
        .map(str::trim)
        .filter(|path| !path.is_empty())
        .map(PathBuf::from)
        .or_else(|| {
            twilight_horizon::discover_client_binaries()
                .into_iter()
                .next()
        })
        .ok_or_else(|| {
            "Horizon (Rust) is not configured. Open Settings -> Horizon Engine and set the \
             native client path, then launch again."
                .to_owned()
        })?;
    if !binary.is_file() {
        return Err(format!(
            "Horizon binary not found at {}. Update Settings -> Horizon Engine.",
            binary.display()
        ));
    }
    let shared_dir = crate::storage::shared_root(app).await?;
    let official = horizon_is_official(&binary, &shared_dir);
    let dev_plan = horizon_dev_plan(settings, official);
    if dev_plan.blocked {
        return Err(format!(
            "Developer Mode: {} is outside the launcher-managed Horizon release store. \
             Enable \"Allow unsigned or local build-from-source Horizon binaries\" in \
             Settings -> Developer to launch it.",
            binary.display()
        ));
    }
    if settings.dev_mode {
        log(
            "stderr",
            "[DEV] Unsupported / Developer Mode: unsigned Horizon builds and developer flags \
             may corrupt worlds or break saves."
                .to_owned(),
        );
        log(
            "stdout",
            format!("[DEV] Horizon provenance: {}", dev_plan.provenance),
        );
        for flag in &dev_plan.flags_used {
            log("stdout", format!("[DEV] {flag}"));
        }
    }
    log(
        "stdout",
        format!(
            "Horizon native client: {} (Launch API {})",
            binary.display(),
            twilight_horizon::LAUNCH_API_VERSION
        ),
    );
    // Best-effort probe: an older build may not answer, but the documented
    // command line still applies. Diagnostics only, never a launch blocker.
    match probe_launch_api(&binary).await {
        Ok(info) => log(
            "stdout",
            format!(
                "Horizon build {} targets Minecraft {} (Launch API {}, {} options)",
                info.horizon.as_deref().unwrap_or("unknown"),
                info.minecraft.as_deref().unwrap_or("unknown"),
                info.launch_api,
                info.options.len()
            ),
        ),
        Err(error) => log("stderr", format!("Horizon: Launch API probe: {error}")),
    }
    if settings.blind_mode {
        log(
            "stderr",
            "Accessibility: Blind Mode - Horizon is a Vanilla engine without the deep \
             screen-reader hooks of modded clients; screen-reader navigation may be limited."
                .to_owned(),
        );
    }

    // ---- version manifest -> client jar + asset index (same failover chain)
    let preflight_started = std::time::Instant::now();
    let client = reqwest::Client::new();
    let sources = vanilla_sources();
    let meta_version = resolve_vanilla_version(&client, &sources, &meta.version)
        .await
        .map_err(|e| e.to_string())?;
    let mut detail_chain = vec![meta_version.details_url.clone()];
    for base in [PRISM_META_BASE, FREESM_META_BASE] {
        let fallback = format!("{base}net.minecraft/{}.json", meta_version.id);
        if !detail_chain.contains(&fallback) {
            detail_chain.push(fallback);
        }
    }
    let raw = fetch_json_failover(&client, &detail_chain)
        .await
        .map_err(|e| e.to_string())?;
    let version_text = raw.to_string();
    let version = twilight_manifest::parse_version_file(&version_text)
        .map_err(|e| format!("cannot parse the {} manifest: {e}", meta_version.id))?;
    let client_jar = version
        .client()
        .ok_or_else(|| format!("{} declares no client jar download", meta_version.id))?;
    let index_info = version
        .effective_asset_index()
        .ok_or_else(|| format!("{} declares no asset index", meta_version.id))?;
    devmode::record_phase(
        instance_id,
        "preflight",
        preflight_started.elapsed().as_millis() as u64,
    );

    // ---- prepare the exact layout `horizon-client --resources` reads
    let assets_started = std::time::Instant::now();
    log(
        "stdout",
        format!(
            "Horizon: verifying prepared resources for Minecraft {} (asset index {})…",
            meta_version.id, index_info.id
        ),
    );
    let prepared = ensure_resources(
        &client,
        &InstallRequest {
            version: &meta_version.id,
            shared_root: &shared_dir,
            client: client_jar,
            asset_index: &index_info,
        },
    )
    .await
    .map_err(|e| e.to_string())?;
    devmode::record_phase(
        instance_id,
        "assets",
        assets_started.elapsed().as_millis() as u64,
    );
    log("stdout", describe(&prepared));

    // ---- session hand-over: Microsoft MSA only, never on the command line
    let account = active_account(app).await;
    let developer_offline = dev_plan.developer_offline;
    let session = match account.as_ref() {
        Some(account) if account.account_type == AccountType::Microsoft => {
            let mut account = account.clone();
            if account
                .access_token
                .as_deref()
                .is_none_or(|token| token.trim().is_empty())
                && account.refresh_token.is_some()
            {
                log(
                    "stdout",
                    "Horizon: renewing the Microsoft session before launch…".to_owned(),
                );
                account =
                    crate::accounts::refresh_microsoft_account(app.clone(), account.id.clone())
                        .await?;
            }
            let token = account
                .access_token
                .as_deref()
                .filter(|token| !token.trim().is_empty())
                .ok_or_else(|| {
                    "the active Microsoft account has no Minecraft access token; sign in again"
                        .to_owned()
                })?;
            Some(
                session_json(&account.username, &account.uuid.to_string(), token)
                    .map_err(|e| e.to_string())?,
            )
        }
        Some(account) if developer_offline => {
            log(
                "stderr",
                format!(
                    "Horizon: developer offline start as {:?}; released builds require a \
                     Microsoft account that owns Minecraft",
                    account.username
                ),
            );
            None
        }
        Some(other) => {
            return Err(format!(
                "Horizon runs only with a Microsoft account that owns Minecraft; {:?} is {:?}. \
                 Sign in with Microsoft in Accounts.",
                other.username, other.account_type
            ));
        }
        None if developer_offline => None,
        None => {
            return Err(
                "Horizon requires a Microsoft account that owns Minecraft. Sign in with \
                 Microsoft in Accounts, then launch again."
                    .to_owned(),
            );
        }
    };

    // ---- assemble and spawn the native client
    let game_dir = instance_dir.join("minecraft");
    let home = instance_dir.join("horizon");
    tokio::fs::create_dir_all(&game_dir)
        .await
        .map_err(|e| e.to_string())?;
    tokio::fs::create_dir_all(&home)
        .await
        .map_err(|e| e.to_string())?;
    let mut options = LaunchOptions::new(&prepared.dir, &game_dir, &home);
    options.session_stdin = session.is_some();
    options.developer_offline = dev_plan.developer_offline;
    options.developer_single_player = dev_plan.developer_single_player;
    options.quick_play_singleplayer = world.filter(|_| server.is_none());
    options.quick_play_multiplayer = server;
    let command = client_command(&binary, &options).map_err(|e| e.to_string())?;
    log("stdout", format!("Horizon: {}", command.display()));

    let mut process = tokio::process::Command::new(&command.program);
    process.args(&command.args);
    for (key, value) in &command.environment {
        process.env(key, value);
    }
    for key in &command.remove_environment {
        process.env_remove(key);
    }
    process
        .stdin(std::process::Stdio::piped())
        .stdout(std::process::Stdio::piped())
        .stderr(std::process::Stdio::piped());
    let spawn_started = std::time::Instant::now();
    let mut child = process
        .spawn()
        .map_err(|e| format!("cannot start Horizon ({}): {e}", binary.display()))?;
    devmode::record_phase(
        instance_id,
        "spawn",
        spawn_started.elapsed().as_millis() as u64,
    );
    let pid = child.id().unwrap_or(0);
    GAME_PID.store(pid, Ordering::SeqCst);
    log("stdout", format!("Horizon process ID: {pid}"));

    if settings.dev_mode {
        let record = DevLaunchRecord {
            timestamp: devmode::now_unix(),
            instance_id: instance_id.to_owned(),
            engine_or_loader: "horizon".to_owned(),
            binary_or_version: binary.display().to_string(),
            flags_used: dev_plan.flags_used.clone(),
            provenance: dev_plan.provenance.to_owned(),
        };
        if let Err(error) = devmode::record_launch(app, record).await {
            log(
                "stderr",
                format!("[DEV] could not persist the launch record: {error}"),
            );
        }
    }

    if let Some(session) = session {
        use tokio::io::AsyncWriteExt;
        let mut stdin = child
            .stdin
            .take()
            .ok_or_else(|| "Horizon stdin pipe unavailable".to_owned())?;
        stdin
            .write_all(session.as_bytes())
            .await
            .map_err(|e| format!("cannot hand over the Horizon session: {e}"))?;
        // Closing stdin makes --session-stdin read exactly one JSON value.
        drop(stdin);
    }

    let stdout = child
        .stdout
        .take()
        .ok_or_else(|| "Horizon stdout pipe unavailable".to_owned())?;
    let stderr = child
        .stderr
        .take()
        .ok_or_else(|| "Horizon stderr pipe unavailable".to_owned())?;
    let out = tokio::spawn(pump_lines(stdout, app.clone(), "stdout"));
    let err = tokio::spawn(pump_lines(stderr, app.clone(), "stderr"));
    let status = child.wait().await.map_err(|e| e.to_string())?;
    let _ = out.await;
    let _ = err.await;
    Ok(status.code().unwrap_or(-1))
}

async fn run(
    app: &AppHandle,
    instance_id: &str,
    server: Option<String>,
    world: Option<String>,
) -> Result<i32, String> {
    // Prism/Freesm-style diagnostic header: the console drawer starts with the
    // launcher identity line, exactly like "Prism Launcher 8.0 (official)".
    let _ = app.emit(
        "launch-log",
        LaunchLine {
            stream: "stdout",
            line: format!(
                "TwilightMC Bolide version: alpha-v{} (official)",
                env!("CARGO_PKG_VERSION")
            ),
        },
    );
    // the grid scans the resolved root (instances_dir override -> Prism
    // default -> shared library); launch MUST resolve the very same root or
    // every instance living outside the shared library is "unknown"
    instances::validate_instance_id(instance_id)?;
    let root = resolved_instances_root(app).await?;
    let instance_dir = root.join(instance_id);
    let meta = instances::read_launch_meta(&instance_dir)
        .await
        .map_err(|e| format!("cannot launch {instance_id}: {e}"))?;
    // full profile: Microsoft tokens and custom Yggdrasil server URLs must
    // reach the pipeline (offline fallback keeps the CLI default username)
    let account = active_account(app).await;
    let username = account
        .as_ref()
        .map(|a| a.username.clone())
        .unwrap_or_else(|| "Player".to_owned());
    // settings: explicit java override and the -Xms/-Xmx memory allocation
    let settings = load_settings(&settings_path(app).await?).await;
    devmode::reset_timings(instance_id);
    let mut jvm_args = Vec::new();
    if settings.max_memory_mb > 0 {
        jvm_args.push(format!("-Xmx{}M", settings.max_memory_mb));
    }
    if settings.min_memory_mb > 0 {
        jvm_args.push(format!("-Xms{}M", settings.min_memory_mb));
    }

    // Garbage collector preset resolution (Java 8-25 aware; unsupported
    // presets fall back to Aikar G1GC with a console notice).
    let java_major = if let Some(p) = settings
        .java_path
        .as_deref()
        .filter(|p| !p.trim().is_empty())
    {
        twilight_runtime::probe_java_installation(std::path::Path::new(p))
            .await
            .map(|inst| inst.version.major)
            .unwrap_or(0)
    } else {
        0
    };
    let preset = twilight_launch::GcPreset::from_str_loose(
        settings.gc_preset.as_deref().unwrap_or("Default"),
    );
    let (gc_flags, gc_notice) = twilight_launch::resolve_gc_flags(
        preset,
        java_major,
        settings.max_memory_mb,
        &settings.custom_gc_flags,
        settings.extra_jvm_args.as_deref().unwrap_or(""),
    );
    if let Some(notice) = gc_notice {
        let _ = app.emit(
            "launch-log",
            LaunchLine {
                stream: "stdout",
                line: notice,
            },
        );
    }
    jvm_args.extend(gc_flags);

    // App Developer Mode: debuggers never leak into a normal profile. The
    // settings are checked again here at launch time, not just in the UI.
    let dev_flags = java_dev_flags(&settings);
    if settings.dev_mode {
        let _ = app.emit(
            "launch-log",
            LaunchLine {
                stream: "stderr",
                line: "[DEV] Unsupported / Developer Mode: debug flags are for development \
                       only and may corrupt worlds or break saves."
                    .to_owned(),
            },
        );
        if settings.jdwp_enabled {
            let _ = app.emit(
                "launch-log",
                LaunchLine {
                    stream: "stdout",
                    line: format!(
                        "[DEV] JDWP Debugger listening on port {}",
                        settings.jdwp_port
                    ),
                },
            );
        }
        if settings.mixin_debug {
            let _ = app.emit(
                "launch-log",
                LaunchLine {
                    stream: "stdout",
                    line: "[DEV] Mixin debug export and verbose logging enabled".to_owned(),
                },
            );
        }
        jvm_args.extend(dev_flags.iter().cloned());
    }

    // Deaf Mode: closed captions must be on before the game boots (Horizon
    // and JVM launches share the same options.txt)
    if settings.deaf_mode {
        match ensure_deaf_subtitles(&instance_dir.join("minecraft")) {
            Ok(_) => {
                let _ = app.emit(
                    "launch-log",
                    LaunchLine {
                        stream: "stdout",
                        line:
                            "Accessibility: Enforced showSubtitles:true in options.txt (Deaf Mode)"
                                .to_owned(),
                    },
                );
            }
            Err(e) => {
                let _ = app.emit(
                    "launch-log",
                    LaunchLine {
                        stream: "stderr",
                        line: format!("Accessibility: could not enforce Deaf Mode subtitles: {e}"),
                    },
                );
            }
        }
    }

    // Horizon is a native engine: no JVM, no classpath, no loader composition.
    // It installs the verified asset store and runs its own binary.
    if meta.loader.as_deref() == Some("horizon") {
        let started = std::time::Instant::now();
        let code = run_horizon(
            app,
            instance_id,
            &instance_dir,
            &meta,
            &settings,
            server,
            world,
        )
        .await?;
        instances::stamp_last_played(app, instance_id, started.elapsed().as_secs()).await;
        let _ = app.emit(
            "launch-log",
            LaunchLine {
                stream: "stdout",
                line: format!("process exited (code {code})"),
            },
        );
        return Ok(code);
    }

    // Pump pipeline events into the webview console drawer.
    let (sink_tx, mut sink_rx) = mpsc::channel::<LaunchEvent>(512);
    let forwarder = {
        let emitters = app.clone();
        let instance_id = instance_id.to_owned();
        tokio::spawn(async move {
            while let Some(event) = sink_rx.recv().await {
                match event {
                    LaunchEvent::Command(line) => {
                        if let Ok(mut cached) = LAST_COMMAND.lock() {
                            *cached = Some((instance_id.clone(), line));
                        }
                    }
                    LaunchEvent::Started(pid) => {
                        GAME_PID.store(pid, Ordering::SeqCst);
                        let _ = emitters.emit(
                            "launch-log",
                            LaunchLine {
                                stream: "stdout",
                                line: format!("Minecraft process ID: {pid}"),
                            },
                        );
                    }
                    LaunchEvent::Stdout(line) => {
                        let _ = emitters.emit(
                            "launch-log",
                            LaunchLine {
                                stream: "stdout",
                                line,
                            },
                        );
                    }
                    LaunchEvent::Stderr(line) => {
                        let _ = emitters.emit(
                            "launch-log",
                            LaunchLine {
                                stream: "stderr",
                                line,
                            },
                        );
                    }
                    LaunchEvent::Phase(name, ms) => {
                        devmode::record_phase(&instance_id, name, ms);
                    }
                }
            }
        })
    };

    // artifacts (libraries/assets) always live in the shared library store,
    // wherever the instance itself is scanned from
    let shared_dir = crate::storage::shared_root(app).await?;
    if settings.dev_mode {
        let record = DevLaunchRecord {
            timestamp: devmode::now_unix(),
            instance_id: instance_id.to_owned(),
            engine_or_loader: meta.loader.clone().unwrap_or_else(|| "vanilla".to_owned()),
            binary_or_version: format!("Minecraft {}", meta.version),
            flags_used: dev_flags.clone(),
            provenance: "official-with-dev-flags".to_owned(),
        };
        if let Err(error) = devmode::record_launch(app, record).await {
            let _ = app.emit(
                "launch-log",
                LaunchLine {
                    stream: "stderr",
                    line: format!("[DEV] could not persist the launch record: {error}"),
                },
            );
        }
    }
    let cfg = LaunchConfig {
        version_or_id: meta.version,
        username,
        instance_dir: Some(instance_dir),
        shared_dir,
        // the Folders page's Downloads entry overrides the staging/temp root
        temp_dir: settings
            .downloads_dir
            .as_deref()
            .map(str::trim)
            .filter(|d| !d.is_empty())
            .map(PathBuf::from),
        java: settings
            .java_path
            .filter(|p| !p.trim().is_empty())
            .map(PathBuf::from),
        loader: meta.loader,
        loader_version: meta.loader_version,
        horizon: None,
        horizon_session: None,
        jvm_args,
        account,
        server,
        world,
        dry_run: false,
    };

    let started = std::time::Instant::now();
    let code = run_launch_with(cfg, Some(sink_tx))
        .await
        .map_err(|e| e.to_string())?;

    // session duration accrues into the instance's total play time
    instances::stamp_last_played(app, instance_id, started.elapsed().as_secs()).await;

    // the pipeline dropped its sender; the pump drains and closes
    let _ = forwarder.await;
    let _ = app.emit(
        "launch-log",
        LaunchLine {
            stream: "stdout",
            line: format!("process exited (code {code})"),
        },
    );
    Ok(code)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn read(game_dir: &Path) -> String {
        std::fs::read_to_string(game_dir.join("options.txt")).unwrap()
    }

    #[test]
    fn deaf_subtitles_create_missing_options_txt() {
        let dir = std::env::temp_dir().join(format!("tw-deaf-create-{}", std::process::id()));
        let game_dir = dir.join("minecraft");
        let _ = std::fs::remove_dir_all(&dir);

        assert_eq!(ensure_deaf_subtitles(&game_dir).unwrap(), "created");
        assert_eq!(read(&game_dir), "showSubtitles:true\n");
        std::fs::remove_dir_all(&dir).unwrap();
    }

    #[test]
    fn deaf_subtitles_flip_false_to_true_and_touch_nothing_else() {
        let dir = std::env::temp_dir().join(format!("tw-deaf-flip-{}", std::process::id()));
        let game_dir = dir.join("minecraft");
        std::fs::create_dir_all(&game_dir).unwrap();
        std::fs::write(
            game_dir.join("options.txt"),
            "fov:0.625\nshowSubtitles:false\nkey_key.jump:key.keyboard.space\nversion:3955\n",
        )
        .unwrap();

        assert_eq!(ensure_deaf_subtitles(&game_dir).unwrap(), "updated");
        assert_eq!(
            read(&game_dir),
            "fov:0.625\nshowSubtitles:true\nkey_key.jump:key.keyboard.space\nversion:3955\n"
        );
        std::fs::remove_dir_all(&dir).unwrap();
    }

    #[test]
    fn deaf_subtitles_append_when_absent_and_preserve_crlf() {
        let dir = std::env::temp_dir().join(format!("tw-deaf-append-{}", std::process::id()));
        let game_dir = dir.join("minecraft");
        std::fs::create_dir_all(&game_dir).unwrap();
        std::fs::write(
            game_dir.join("options.txt"),
            "fov:0.625\r\nkey_key.jump:key.keyboard.space\r\n",
        )
        .unwrap();

        assert_eq!(ensure_deaf_subtitles(&game_dir).unwrap(), "appended");
        assert_eq!(
            read(&game_dir),
            "fov:0.625\r\nkey_key.jump:key.keyboard.space\r\nshowSubtitles:true\n"
        );

        // a bare-LF file without a trailing newline gets one clean separator
        std::fs::write(game_dir.join("options.txt"), "fov:0.625").unwrap();
        assert_eq!(ensure_deaf_subtitles(&game_dir).unwrap(), "appended");
        assert_eq!(read(&game_dir), "fov:0.625\nshowSubtitles:true\n");
        std::fs::remove_dir_all(&dir).unwrap();
    }

    #[test]
    fn deaf_subtitles_already_set_is_a_noop() {
        let dir = std::env::temp_dir().join(format!("tw-deaf-set-{}", std::process::id()));
        let game_dir = dir.join("minecraft");
        std::fs::create_dir_all(&game_dir).unwrap();
        std::fs::write(
            game_dir.join("options.txt"),
            "fov:0.625\nshowSubtitles:true\n",
        )
        .unwrap();
        let before = read(&game_dir);

        assert_eq!(ensure_deaf_subtitles(&game_dir).unwrap(), "already-set");
        assert_eq!(read(&game_dir), before);
        std::fs::remove_dir_all(&dir).unwrap();
    }

    fn dev_settings() -> Settings {
        Settings {
            dev_mode: true,
            horizon_dev_offline: true,
            horizon_dev_single_player: true,
            horizon_allow_unsigned_local: true,
            jdwp_enabled: true,
            jdwp_port: 5005,
            mixin_debug: true,
            ..Settings::default()
        }
    }

    #[test]
    fn horizon_developer_flags_are_never_injected_without_dev_mode() {
        let settings = Settings {
            dev_mode: false,
            ..dev_settings()
        };
        let plan = horizon_dev_plan(&settings, false);
        assert!(!plan.developer_offline);
        assert!(!plan.developer_single_player);
        assert!(plan.flags_used.is_empty());
        assert!(!plan.blocked);
    }

    #[test]
    fn horizon_developer_flags_are_recorded_and_provenance_is_explicit() {
        let plan = horizon_dev_plan(&dev_settings(), true);
        assert!(plan.developer_offline);
        assert!(plan.developer_single_player);
        assert_eq!(
            plan.flags_used,
            [
                "HORIZON_LAUNCHER_DEVELOPER_OFFLINE=1",
                "--developer-single-player"
            ]
        );
        assert_eq!(plan.provenance, "build-from-source");
        assert!(!plan.blocked);

        let single_player_only = Settings {
            horizon_dev_offline: false,
            ..dev_settings()
        };
        let plan = horizon_dev_plan(&single_player_only, false);
        assert!(!plan.developer_offline);
        assert!(plan.developer_single_player);
        assert_eq!(plan.provenance, "unsigned-local");
    }

    #[test]
    fn unsigned_horizon_requires_an_explicit_allow_flag() {
        let settings = Settings {
            horizon_dev_offline: false,
            horizon_dev_single_player: false,
            horizon_allow_unsigned_local: false,
            ..dev_settings()
        };
        assert!(horizon_dev_plan(&settings, false).blocked);
        assert!(!horizon_dev_plan(&settings, true).blocked);
        // Relative components keep this assertion valid on every platform.
        assert!(!horizon_is_official(
            std::path::Path::new("dev/horizon-client"),
            std::path::Path::new("shared")
        ));
        assert!(horizon_is_official(
            std::path::Path::new("shared/horizon-releases/v1/horizon-client"),
            std::path::Path::new("shared")
        ));
    }

    #[test]
    fn java_debug_flags_obey_the_dev_mode_gate() {
        let settings = Settings {
            dev_mode: false,
            ..dev_settings()
        };
        assert!(java_dev_flags(&settings).is_empty());
        assert_eq!(
            java_dev_flags(&dev_settings()),
            [
                "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005",
                "-Dmixin.debug.export=true",
                "-Dmixin.debug.verbose=true",
            ]
        );
    }
}
