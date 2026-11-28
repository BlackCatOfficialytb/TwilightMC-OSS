use thiserror::Error;

use twilight_downloader::DownloadError;
use twilight_horizon::HorizonError;
use twilight_launch::LaunchError;
use twilight_manifest::ManifestError;
use twilight_modloader::LoaderError;
use twilight_modrinth::ModrinthError;
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
    #[error("game process exited with {status}")]
    GameFailed { status: String },
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
    #[error("mod loader resolution failed")]
    Loader(#[from] LoaderError),
    #[error(".mrpack install failed")]
    Modrinth(#[from] ModrinthError),
    #[error(
        "unknown mod loader {given:?} (supported: fabric, quilt, forge, neoforge, legacyfabric, cleanroom, ornithe)"
    )]
    UnknownLoader { given: String },
    #[error("{loader} only supports Minecraft {required}, not {given}")]
    LoaderGameMismatch {
        loader: String,
        required: String,
        given: String,
    },
    #[error("the modpack declares more than one mod loader ({loaders:?})")]
    ModpackAmbiguousLoaders { loaders: Vec<String> },
    #[error(
        "{message} Missing: {missing}. Install them from {url} (or let the launcher install the Modrinth-hosted core mods)."
    )]
    CleanroomGate {
        message: String,
        missing: String,
        url: String,
    },
    #[error("account authentication failed")]
    Auth(#[from] twilight_auth::AuthError),
    #[error("io failure")]
    Io(#[from] std::io::Error),
}
