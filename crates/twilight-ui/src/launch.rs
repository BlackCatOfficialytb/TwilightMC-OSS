// IPC bridge to the launch pipeline. Game output streams into the webview as
// `launch-log` events; the command resolves when the game process exits.

use std::path::PathBuf;
use std::sync::atomic::{AtomicBool, AtomicU32, Ordering};

use serde::Serialize;
use tauri::{AppHandle, Emitter};
use tokio::sync::mpsc;
use twilight_cli::{LaunchConfig, run_launch_with};
use twilight_launch::LaunchEvent;

use crate::accounts::{active_username, load_settings, settings_path};
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
/// staging stays in the OS temp.
#[tauri::command]
pub async fn launch_instance(app: AppHandle, instance_id: String) -> Result<i32, String> {
    if RUNNING
        .compare_exchange(false, true, Ordering::SeqCst, Ordering::SeqCst)
        .is_err()
    {
        return Err("a game is already running".to_owned());
    }

    let result = run(&app, &instance_id).await;
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

async fn run(app: &AppHandle, instance_id: &str) -> Result<i32, String> {
    let shared_dir = crate::storage::shared_root(app).await?;
    let instance_dir = shared_dir.join("instances").join(instance_id);
    let meta = instances::read_meta(&instance_dir)
        .await
        .ok_or_else(|| format!("unknown instance {instance_id}"))?;
    let username = active_username(app).await;
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
                                line: format!("game started (pid {pid})"),
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

    let cfg = LaunchConfig {
        version_or_id: meta.version,
        username,
        instance_dir: Some(instance_dir),
        shared_dir,
        temp_dir: None,
        java: settings
            .java_path
            .filter(|p| !p.trim().is_empty())
            .map(PathBuf::from),
        loader: meta.loader,
        loader_version: meta.loader_version,
        jvm_args,
        dry_run: false,
    };

    let code = run_launch_with(cfg, Some(sink_tx))
        .await
        .map_err(|e| e.to_string())?;

    instances::stamp_last_played(app, instance_id).await;

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
