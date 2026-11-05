use thiserror::Error;

use twilight_downloader::DownloadError;

#[derive(Debug, Error)]
pub enum HorizonError {
    #[error("asset object {resource:?} is missing from the store")]
    MissingObject {
        resource: String,
        source: std::io::Error,
    },
    #[error("asset object {resource:?} is corrupt: expected sha1 {expected}, found {actual}")]
    CorruptObject {
        resource: String,
        expected: String,
        actual: String,
    },
    #[error(transparent)]
    Download(#[from] DownloadError),
    #[error(transparent)]
    Json(#[from] serde_json::Error),
    #[error(transparent)]
    Io(#[from] std::io::Error),
}
