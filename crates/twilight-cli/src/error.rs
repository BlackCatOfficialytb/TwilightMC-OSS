use thiserror::Error;

use twilight_downloader::DownloadError;
use twilight_horizon::HorizonError;
use twilight_launch::LaunchError;
use twilight_manifest::ManifestError;
use twilight_runtime::RuntimeError;

/// Everything the `twilight` executable can fail with.
#[derive(Debug, Error)]
pub enum CliError {
    #[error("the manifest of {id} declares no main class")]
    NoMainClass { id: String },
    #[error(
        "no compatible Java runtime found for required majors {majors:?}; install one or pass --java"
    )]
    NoJava { majors: Vec<i32> },
    #[error("malformed manifest for {id}")]
    ManifestParse {
        id: String,
        #[source]
        source: ManifestError,
    },
    #[error("metadata/artifact download failed")]
    Download(#[from] DownloadError),
    #[error("horizon asset store operation failed")]
    Horizon(#[from] HorizonError),
    #[error("launch pipeline failed")]
    Launch(#[from] LaunchError),
    #[error("JVM discovery failed")]
    Runtime(#[from] RuntimeError),
    #[error("io failure")]
    Io(#[from] std::io::Error),
    #[error("game process failed with status {status}")]
    GameFailed { status: String },
}
