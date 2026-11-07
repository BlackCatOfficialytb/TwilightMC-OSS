use thiserror::Error;

/// Errors raised while resolving mod-loader metadata.
#[derive(Debug, Error)]
pub enum LoaderError {
    #[error("HTTP failure on {url}")]
    Http { url: String, source: reqwest::Error },
    #[error("HTTP status {status} from {url}")]
    HttpStatus { url: String, status: u16 },
    #[error("malformed loader metadata payload")]
    BadJson(#[from] serde_json::Error),
    #[error("loader metadata is missing the {field} field")]
    MissingField { field: &'static str },
    #[error("unresolvable maven coordinate {name}")]
    BadCoordinate { name: String },
    #[error("no stable {loader} profile in the metadata list")]
    NoStableProfile { loader: String },
}
