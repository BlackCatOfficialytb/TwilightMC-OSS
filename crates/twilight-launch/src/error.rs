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
}
