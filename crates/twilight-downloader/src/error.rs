use thiserror::Error;

#[derive(Debug, Error)]
pub enum DownloadError {
    #[error("empty source/failover chain")]
    EmptyChain,
    #[error("malformed JSON payload")]
    Json(#[from] serde_json::Error),
    #[error("all {sources} vanilla metadata sources failed")]
    AllSourcesOut {
        sources: usize,
        #[source]
        source: Box<DownloadError>,
    },
    #[error("version not found: {wanted:?}")]
    VersionNotFound { wanted: String },
    #[error("HTTP failure on {url}")]
    Http { url: String, source: reqwest::Error },
    #[error("HTTP status {status} from {url}")]
    HttpStatus { url: String, status: u16 },
    #[error("malformed JSON payload from {url}")]
    BadJson {
        url: String,
        source: serde_json::Error,
    },
    #[error("I/O on {path}: {source}")]
    Io {
        path: std::path::PathBuf,
        #[source]
        source: std::io::Error,
    },
    #[error("sha1 mismatch for {path}: expected {expected}, computed {computed}")]
    Sha1Mismatch {
        path: std::path::PathBuf,
        expected: String,
        computed: String,
    },
}
