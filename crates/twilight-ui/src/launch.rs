// IPC bridge to the launch pipeline. Game output streams into the webview as
// `launch-log` events; the command resolves when the game process exits.

use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicBool, AtomicU32, Ordering};

use serde::Serialize;
use tauri::{AppHandle, Emitter};
use tokio::sync::mpsc;
use twilight_cli::{LaunchConfig, run_launch_with};
use twilight_launch::LaunchEvent;

use crate::accounts::{active_account, load_settings, settings_path};
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

/// Launches the instance `instance_id` from the shared instance library with
/// the UI storage layout: shared artifacts live under the app data dir,
/// staging stays in the OS temp. `server` quick-joins an address (`--server`).
#[tauri::command]
pub async fn launch_instance(
    app: AppHandle,
    instance_id: String,
    server: Option<String>,
) -> Result<i32, String> {
    if RUNNING
        .compare_exchange(false, true, Ordering::SeqCst, Ordering::SeqCst)
        .is_err()
    {
        return Err("a game is already running".to_owned());
    }

    let result = run(&app, &instance_id, server).await;
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

async fn run(app: &AppHandle, instance_id: &str, server: Option<String>) -> Result<i32, String> {
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
    let mut jvm_args = Vec::new();
    if settings.max_memory_mb > 0 {
        jvm_args.push(format!("-Xmx{}M", settings.max_memory_mb));
    }
    if settings.min_memory_mb > 0 {
        jvm_args.push(format!("-Xms{}M", settings.min_memory_mb));
    }

    // Pump pipeline events into the webview console drawer.
    let (sink_tx, mut sink_rx) = mpsc::channel::<LaunchEvent>(512);
    let forwarder = {
        let emitters = app.clone();
        tokio::spawn(async move {
            while let Some(event) = sink_rx.recv().await {
                match event {
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
                }
            }
        })
    };

    // Deaf Mode: closed captions must be on before the game boots
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

    // artifacts (libraries/assets) always live in the shared library store,
    // wherever the instance itself is scanned from
    let shared_dir = crate::storage::shared_root(app).await?;
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
        jvm_args,
        account,
        server,
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
}
