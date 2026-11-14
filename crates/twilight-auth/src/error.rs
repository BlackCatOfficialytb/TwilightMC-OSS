use thiserror::Error;

#[derive(Debug, Error)]
pub enum AuthError {
    #[error("I/O: {0}")]
    Io(#[from] std::io::Error),
    #[error("JSON: {0}")]
    Json(#[from] serde_json::Error),
    #[error("HTTP: {0}")]
    Http(#[from] reqwest::Error),
    #[error("unexpected status {status} from {url}")]
    Status { url: String, status: u16 },
    #[error("sha256 mismatch for {path}: expected {expected}, computed {computed}")]
    Sha256Mismatch {
        path: std::path::PathBuf,
        expected: String,
        computed: String,
    },
    /// Fatal device-flow terminations (denied, expired token, invalid client…).
    #[error("device flow: {0}")]
    DeviceFlow(String),
    /// XSTS rejects with an `XErr` code; each maps to a human explanation.
    #[error("Xbox authorization error {code}: {message}")]
    Xerr { code: u64, message: String },
    #[error("download: {0}")]
    Download(#[from] twilight_downloader::DownloadError),
}
