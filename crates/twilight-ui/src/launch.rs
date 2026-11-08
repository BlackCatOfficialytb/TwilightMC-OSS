// IPC bridge to the launch pipeline. Game output streams into the webview as
// `launch-log` events; the command resolves when the game process exits.

use std::sync::atomic::{AtomicBool, Ordering};

use serde::Serialize;
use tauri::{AppHandle, Emitter};
use tokio::sync::mpsc;
use twilight_cli::{LaunchConfig, run_launch_with};
use twilight_launch::LaunchEvent;

use crate::accounts::active_username;
use crate::instances;

/// One game output line. `stream` is `"stdout"` or `"stderr"`.
#[derive(Clone, Serialize)]
struct LaunchLine {
    stream: &'static str,
    line: String,
}

/// One game per app run: the pipeline stages artifacts in shared scratch dirs.
static RUNNING: AtomicBool = AtomicBool::new(false);

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
    RUNNING.store(false, Ordering::SeqCst);
    result
}

async fn run(app: &AppHandle, instance_id: &str) -> Result<i32, String> {
    let shared_dir = crate::storage::shared_root(app).await?;
    let instance_dir = shared_dir.join("instances").join(instance_id);
    let meta = instances::read_meta(&instance_dir)
        .await
        .ok_or_else(|| format!("unknown instance {instance_id}"))?;
    let username = active_username(app).await;

    // Pump pipeline events into the webview console drawer.
    let (sink_tx, mut sink_rx) = mpsc::channel::<LaunchEvent>(512);
    let forwarder = {
        let emitters = app.clone();
        tokio::spawn(async move {
            while let Some(event) = sink_rx.recv().await {
                let line = match event {
                    LaunchEvent::Stdout(line) => LaunchLine {
                        stream: "stdout",
                        line,
                    },
                    LaunchEvent::Stderr(line) => LaunchLine {
                        stream: "stderr",
                        line,
                    },
                };
                let _ = emitters.emit("launch-log", line);
            }
        })
    };

    let cfg = LaunchConfig {
        version_or_id: meta.version,
        username,
        instance_dir: Some(instance_dir),
        shared_dir,
        temp_dir: None,
        java: None,
        loader: meta.loader,
        loader_version: None,
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
