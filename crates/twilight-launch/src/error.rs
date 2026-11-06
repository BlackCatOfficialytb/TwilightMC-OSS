use thiserror::Error;

#[derive(Debug, Error)]
pub enum LaunchError {
    #[error("failed to spawn {executable}")]
    Spawn {
        executable: String,
        #[source]
        source: std::io::Error,
    },
    #[error("wait for game process failed")]
    Wait(#[from] std::io::Error),
    #[error("no 7-Zip binary (`7z`/`7za`) available for natives extraction")]
    Missing7z,
    #[error("7-Zip failed on {jar} (exit code {code:?}): {stderr}")]
    ExtractFailed {
        jar: String,
        code: Option<i32>,
        stderr: String,
    },
    #[error("jar {jar} compresses entry {entry} with unsupported method {method}")]
    UnsupportedCompression {
        jar: String,
        entry: String,
        method: u16,
    },
    #[error("jar {jar} appears corrupt: {reason}")]
    CorruptJar { jar: String, reason: String },
    #[error("natives extraction io failure: {0}")]
    ExtractIo(std::io::Error),
}
