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
    #[error("prepared resources are not current: {0}")]
    NotPrepared(String),
    #[error("prepared resources are missing {0}")]
    MissingResourceFile(String),
    #[error("the client jar contains an unsafe path: {0}")]
    UnsafeArchivePath(String),
    #[error("the client jar could not be read: {0}")]
    Archive(String),
    #[error("Horizon Launch API probe failed: {0}")]
    Probe(String),
    #[error("Horizon launch options are invalid: {0}")]
    Launch(String),
    #[error("Horizon release request failed: {0}")]
    Release(String),
    #[error("Horizon session JSON is invalid: {0}")]
    Session(String),
    #[error(transparent)]
    Download(#[from] DownloadError),
    #[error(transparent)]
    Modrinth(#[from] twilight_modrinth::ModrinthError),
    #[error(transparent)]
    Cas(#[from] twilight_cas::CasError),
    #[error(transparent)]
    Json(#[from] serde_json::Error),
    #[error(transparent)]
    Io(#[from] std::io::Error),
}
