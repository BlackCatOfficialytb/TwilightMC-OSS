//! Async process controller: spawns Java/native servers with piped
//! stdout/stderr and a stdin writer for admin commands.

use std::path::PathBuf;

use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};
use tokio::process::{Child, Command};
use tokio::sync::mpsc::{UnboundedReceiver, UnboundedSender, unbounded_channel};

/// A fully resolved spawn: program, args and working directory.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ServerSpawn {
    pub program: String,
    pub args: Vec<String>,
    pub cwd: PathBuf,
}

/// Java flags: `-Xms<min> -Xmx<max> -jar <jar> nogui` (0 MiB = flag omitted).
pub fn java_args(min_memory_mb: u32, max_memory_mb: u32, jar: &str) -> Vec<String> {
    let mut args = Vec::new();
    if min_memory_mb > 0 {
        args.push(format!("-Xms{min_memory_mb}M"));
    }
    if max_memory_mb > 0 {
        args.push(format!("-Xmx{max_memory_mb}M"));
    }
    args.push("-jar".into());
    args.push(jar.to_owned());
    args.push("nogui".into());
    args
}

/// Spawns the server with all three pipes and pumps stdout/stderr as lines
/// through `emit`. Returns the child plus the stdin command channel.
pub async fn spawn(
    spec: &ServerSpawn,
    emit: std::sync::Arc<dyn Fn(String) + Send + Sync>,
) -> Result<(Child, UnboundedSender<String>), std::io::Error> {
    let mut cmd = Command::new(&spec.program);
    cmd.args(&spec.args)
        .current_dir(&spec.cwd)
        .stdin(std::process::Stdio::piped())
        .stdout(std::process::Stdio::piped())
        .stderr(std::process::Stdio::piped())
        .kill_on_drop(true);
    #[cfg(windows)]
    {
        cmd.creation_flags(0x0800_0000); // CREATE_NO_WINDOW
    }
    let mut child = cmd.spawn()?;

    let (tx, mut rx): (UnboundedSender<String>, UnboundedReceiver<String>) = unbounded_channel();
    if let Some(mut stdin) = child.stdin.take() {
        // stdin is owned by the writer task; commands flow through `tx`.
        tokio::spawn(async move {
            while let Some(line) = rx.recv().await {
                if stdin.write_all(line.as_bytes()).await.is_err()
                    || stdin.write_all(b"\n").await.is_err()
                {
                    break;
                }
                let _ = stdin.flush().await;
            }
        });
    }
    if let Some(stdout) = child.stdout.take() {
        let emit = emit.clone();
        tokio::spawn(async move {
            let mut lines = BufReader::new(stdout).lines();
            while let Ok(Some(line)) = lines.next_line().await {
                emit(line);
            }
        });
    }
    if let Some(stderr) = child.stderr.take() {
        let emit = emit.clone();
        tokio::spawn(async move {
            let mut lines = BufReader::new(stderr).lines();
            while let Ok(Some(line)) = lines.next_line().await {
                emit(line);
            }
        });
    }
    Ok((child, tx))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn java_flags() {
        assert_eq!(
            java_args(1024, 4096, "server.jar"),
            vec!["-Xms1024M", "-Xmx4096M", "-jar", "server.jar", "nogui"]
        );
        assert_eq!(
            java_args(0, 0, "paper.jar"),
            vec!["-jar", "paper.jar", "nogui"]
        );
    }

    #[tokio::test]
    async fn spawn_pipes_and_stdin_roundtrip() {
        // echo server: reads one line from stdin, writes it back to stdout.
        let script = if cfg!(windows) {
            "echo/offset"
        } else {
            "/bin/sh"
        };
        let spec = if cfg!(windows) {
            ServerSpawn {
                program: "cmd".into(),
                args: ["/C", "more"].iter().map(|s| s.to_string()).collect(),
                cwd: std::env::temp_dir(),
            }
        } else {
            ServerSpawn {
                program: script.into(),
                args: ["-c", "read line; echo \"$line\""]
                    .iter()
                    .map(|s| s.to_string())
                    .collect(),
                cwd: std::env::temp_dir(),
            }
        };
        let (mut child, tx) = spawn(&spec, std::sync::Arc::new(|_line: String| {}))
            .await
            .unwrap();
        tx.send("hello-twilight".to_owned()).unwrap();
        drop(tx);
        let status = child.wait().await.unwrap();
        assert!(status.success());
    }
}
