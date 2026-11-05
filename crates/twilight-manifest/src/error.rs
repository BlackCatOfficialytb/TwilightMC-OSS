use thiserror::Error;

#[derive(Debug, Error)]
pub enum ManifestError {
    #[error("manifest is empty or not a JSON object")]
    NotObject,
    #[error("invalid gradle specifier {0:?}")]
    InvalidSpecifier(String),
    #[error("`{field}` is missing or has the wrong type")]
    BadField { field: &'static str },
    #[error(transparent)]
    Json(#[from] serde_json::Error),
}
