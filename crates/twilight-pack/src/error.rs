/// Everything that can go wrong reading or writing a `.twpack`.
#[derive(Debug, thiserror::Error)]
pub enum PackError {
    #[error("io error: {0}")]
    Io(#[from] std::io::Error),
    #[error("invalid pack manifest: {0}")]
    Manifest(String),
    #[error("the archive is not a valid 7z container: {0}")]
    SevenZip(#[from] sevenz_rust2::Error),
    /// Zip-slip / path-traversal refusal — the archive tried to escape `dest`.
    #[error("refusing unsafe archive entry {0:?}: paths must stay inside the pack root")]
    UnsafeEntry(String),
    #[error("the archive carries no {0} manifest")]
    MissingManifest(&'static str),
    #[error("7z extraction failed with {0}")]
    CliFailed(String),
}

impl PackError {
    pub(crate) fn other(msg: impl Into<String>) -> Self {
        Self::Manifest(msg.into())
    }
}
