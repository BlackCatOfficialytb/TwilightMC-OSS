//! Asynchronous game process spawning (tokio), replacing Qt's QProcess.

use std::collections::HashMap;
use std::path::PathBuf;
use std::process::ExitStatus;

use tokio::io::{AsyncBufReadExt, BufReader};
use tokio::process::Command;
use tokio::sync::mpsc;

use crate::error::LaunchError;

/// Everything needed to start the game.
#[derive(Debug, Clone, Default)]
pub struct LaunchPlan {
    pub java_executable: PathBuf,
    pub jvm_args: Vec<String>,
    /// Lorem: `-cp` value; skipped when empty.
    pub classpath: String,
    pub main_class: String,
    pub game_args: Vec<String>,
    pub work_dir: PathBuf,
    pub env: HashMap<String, String>,
}

/// Line-oriented output pump target.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum LaunchEvent {
    Stdout(String),
    Stderr(String),
}

/// Builds a tokio `Command` (for inspection in tests and `run`).
pub fn build_command(plan: &LaunchPlan) -> Command {
    let mut cmd = Command::new(&plan.java_executable);
    cmd.current_dir(&plan.work_dir);
    for (key, value) in &plan.env {
        cmd.env(key, value);
    }
    cmd.args(&plan.jvm_args);
    if !plan.classpath.is_empty() {
        cmd.arg("-cp").arg(&plan.classpath);
    }
    cmd.arg(&plan.main_class);
    cmd.args(&plan.game_args);
    cmd
}

/// Spawns the game, streams stdout/stderr lines through `events`, then returns
/// the exit status. Pump tasks outlive `wait` only until both pipes close.
pub async fn run(
    plan: LaunchPlan,
    events: mpsc::Sender<LaunchEvent>,
) -> Result<ExitStatus, LaunchError> {
    let mut cmd = build_command(&plan);
    cmd.stdin(std::process::Stdio::null())
        .stdout(std::process::Stdio::piped())
        .stderr(std::process::Stdio::piped());
    let mut child = cmd.spawn().map_err(|e| LaunchError::Spawn {
        executable: plan.java_executable.display().to_string(),
        source: e,
    })?;

    let stdout = child.stdout.take().map(BufReader::new);
    let stderr = child.stderr.take().map(BufReader::new);
    let stdout_tx = events.clone();
    let stdout_pump = stdout.map(|reader| {
        let tx = stdout_tx;
        async move {
            let mut lines = reader.lines();
            while let Ok(Some(line)) = lines.next_line().await {
                if tx.send(LaunchEvent::Stdout(line)).await.is_err() {
                    break;
                }
            }
        }
    });
    let stderr_pump = stderr.map(|reader| {
        let tx = events;
        async move {
            let mut lines = reader.lines();
            while let Ok(Some(line)) = lines.next_line().await {
                if tx.send(LaunchEvent::Stderr(line)).await.is_err() {
                    break;
                }
            }
        }
    });
    tokio::spawn(async move {
        if let Some(task) = stdout_pump {
            task.await;
        }
        if let Some(task) = stderr_pump {
            task.await;
        }
    });
    child.wait().await.map_err(LaunchError::Wait)
}

#[cfg(test)]
#[cfg(not(windows))]
mod tests {
    use super::*;

    #[tokio::test]
    async fn streams_stdout_stderr_and_exit_status() {
        let (tx, mut rx) = mpsc::channel(64);
        let plan = LaunchPlan {
            java_executable: "/bin/sh".into(),
            jvm_args: vec![],
            classpath: String::new(),
            main_class: "-c".into(),
            game_args: vec!["echo twilight-out; echo twilight-err 1>&2".into()],
            work_dir: std::env::temp_dir(),
            env: HashMap::new(),
        };
        let status = run(plan, tx).await.unwrap();
        assert!(status.success());

        let mut out = Vec::new();
        while let Some(event) = rx.recv().await {
            out.push(event);
        }
        assert!(out.contains(&LaunchEvent::Stdout("twilight-out".into())));
        assert!(out.contains(&LaunchEvent::Stderr("twilight-err".into())));
    }

    #[test]
    fn command_argv_emits_classpath_then_main_class() {
        let with_cp = LaunchPlan {
            java_executable: "/usr/bin/java".into(),
            jvm_args: vec!["-Xms128M".into()],
            classpath: "/a:/b".into(),
            main_class: "net.minecraft.client.main.Main".into(),
            game_args: vec!["--fullscreen".into()],
            work_dir: std::env::temp_dir(),
            env: HashMap::new(),
        };
        let argv: Vec<String> = build_command(&with_cp)
            .as_std()
            .get_args()
            .map(|a| a.to_string_lossy().to_string())
            .collect();
        assert_eq!(
            argv,
            vec![
                "-Xms128M",
                "-cp",
                "/a:/b",
                "net.minecraft.client.main.Main",
                "--fullscreen"
            ]
        );

        let mut without_cp = with_cp;
        without_cp.classpath = String::new();
        let argv: Vec<String> = build_command(&without_cp)
            .as_std()
            .get_args()
            .map(|a| a.to_string_lossy().to_string())
            .collect();
        assert!(
            argv.iter().all(|arg| arg != "-cp"),
            "no stray -cp when classpath empty"
        );
    }

    #[tokio::test]
    async fn missing_executable_is_an_error() {
        let (tx, _rx) = mpsc::channel(64);
        let plan = LaunchPlan {
            java_executable: "/definitely/missing/java".into(),
            ..Default::default()
        };
        let err = run(plan, tx).await.unwrap_err();
        assert!(matches!(err, LaunchError::Spawn { .. }));
    }
}
