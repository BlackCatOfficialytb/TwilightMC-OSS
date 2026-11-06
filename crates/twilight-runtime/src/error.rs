use thiserror::Error;

#[derive(Debug, Error)]
pub enum RuntimeError {
    #[error("I/O failure while probing Java")]
    Io(#[from] std::io::Error),
    #[error("no parsable java version string was found")]
    VersionNotFound,
    #[error("failed to execute java binary {path:?}")]
    Spawn {
        path: std::path::PathBuf,
        #[source]
        source: std::io::Error,
    },
    #[error("registry query for installed JVMs failed: {0}")]
    Registry(String),
}
