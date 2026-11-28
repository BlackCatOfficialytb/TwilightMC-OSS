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
    #[error("HTTP request to {url} failed: {source}")]
    Http {
        url: String,
        #[source]
        source: Box<reqwest::Error>,
    },
    #[error("HTTP status {status} from {url}")]
    HttpStatus { url: String, status: u16 },
    #[error("malformed Adoptium metadata JSON")]
    BadJson(#[from] serde_json::Error),
    #[error("unusable Adoptium metadata: {0}")]
    BadMetadata(String),
    #[error("invalid Java major version: {0}")]
    InvalidMajor(i32),
    #[error("no matching Adoptium asset for Java {major} on this platform ({detail})")]
    AssetNotFound { major: i32, detail: String },
    #[error("SHA-256 mismatch: expected {expected}, computed {computed}")]
    Sha256Mismatch { expected: String, computed: String },
    #[error("bad Java archive: {0}")]
    BadArchive(String),
    #[error("archive entry escapes the install directory: {path}")]
    UnsafePath { path: String },
    #[error("no java executable found at {path:?}")]
    MissingExecutable { path: std::path::PathBuf },
}
