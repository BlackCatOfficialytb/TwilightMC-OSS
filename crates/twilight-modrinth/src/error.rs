use std::path::PathBuf;

use thiserror::Error;
use twilight_downloader::DownloadError;

/// Errors raised while installing a Modrinth `.mrpack`.
#[derive(Debug, Error)]
pub enum ModrinthError {
    #[error("I/O on {path}: {source}")]
    Io {
        path: PathBuf,
        #[source]
        source: std::io::Error,
    },
    #[error("malformed zip archive: {0}")]
    Zip(String),
    #[error("deflate stream error: {0}")]
    Inflate(String),
    #[error("malformed modrinth.index.json payload")]
    BadJson(#[from] serde_json::Error),
    #[error("unsupported modpack format version {found} (expected 1)")]
    UnsupportedFormatVersion { found: i64 },
    #[error("modrinth.index.json is not present in the archive")]
    MissingIndex,
    #[error("archive entry path escapes the instance directory: {path}")]
    UnsafePath { path: String },
    #[error("no download url for {path}")]
    MissingDownload { path: String },
    #[error("crc mismatch for {entry}: expected {expected:#010x}, computed {computed:#010x}")]
    CrcMismatch {
        entry: String,
        expected: u32,
        computed: u32,
    },
    #[error("modpack download failed")]
    Download(#[from] DownloadError),
}
