use serde::{Deserialize, Serialize};
use thiserror::Error;

pub const ONECLIENT_PROJECT: &str = "oneclient-modpack";
pub const ONECLIENT_MODRINTH_PROJECT_URL: &str = "https://modrinth.com/modpack/oneclient-modpack";
pub const ONECLIENT_MODRINTH_API: &str =
    "https://api.modrinth.com/v2/project/oneclient-modpack/version";

/// OneClient's Polyfrost attribution must be shown wherever this layer is used.
pub const ONECLIENT_ATTRIBUTION: &str = "OneClient by Polyfrost, fetched via Modrinth";

#[derive(Debug, Error)]
pub enum OneClientError {
    #[error("http request failed: {0}")]
    Http(#[from] reqwest::Error),
    #[error("invalid Modrinth response: {0}")]
    Json(#[from] serde_json::Error),
    #[error("no compatible OneClient version found for {loader} {mc_version}")]
    NotFound { loader: String, mc_version: String },
    #[error("OneClient version {version_id} has no .mrpack file")]
    MissingMrpack { version_id: String },
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum OneClientLoader {
    Fabric,
    Ornithe,
}

impl OneClientLoader {
    pub const fn as_str(self) -> &'static str {
        match self {
            Self::Fabric => "fabric",
            Self::Ornithe => "ornithe",
        }
    }

    pub fn from_token(token: &str) -> Option<Self> {
        match token.trim().to_ascii_lowercase().as_str() {
            "fabric" => Some(Self::Fabric),
            "ornithe" | "ornithemc" => Some(Self::Ornithe),
            _ => None,
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct OneClientVersion {
    pub id: String,
    pub version_number: String,
    pub name: String,
    pub loader: OneClientLoader,
    pub mc_version: String,
    pub mrpack_url: String,
    pub sha1: Option<String>,
    pub size: u64,
    pub java_major: Option<u8>,
}

#[derive(Debug, Clone, Deserialize)]
struct RawVersion {
    id: String,
    #[serde(default)]
    version_number: String,
    #[serde(default)]
    name: String,
    #[serde(default)]
    loaders: Vec<String>,
    #[serde(default)]
    game_versions: Vec<String>,
    #[serde(default)]
    files: Vec<RawFile>,
}

#[derive(Debug, Clone, Deserialize)]
struct RawFile {
    url: String,
    #[serde(default)]
    filename: String,
    #[serde(default)]
    primary: bool,
    #[serde(default)]
    hashes: RawHashes,
    #[serde(default)]
    size: u64,
}

#[derive(Debug, Clone, Default, Deserialize)]
struct RawHashes {
    sha1: Option<String>,
}

pub fn recommended_java_major(mc_version: &str) -> Option<u8> {
    let mut parts = mc_version.split('.');
    let major = parts.next()?.parse::<u32>().ok()?;
    let minor = parts.next()?.parse::<u32>().ok()?;
    let patch = parts
        .next()
        .and_then(|p| p.parse::<u32>().ok())
        .unwrap_or(0);
    match (major, minor, patch) {
        (1, 8, 9) => Some(8),
        (1, 21, _) => Some(21),
        (26, _, _) => Some(25),
        _ => None,
    }
}

pub fn profile_id(loader: OneClientLoader, mc_version: &str) -> String {
    format!("oneclient-{}-{}", mc_version, loader.as_str())
}

fn supported_pair(loader: OneClientLoader, mc_version: &str) -> bool {
    match loader {
        OneClientLoader::Fabric => matches!(mc_version, "1.21.1" | "26.3"),
        OneClientLoader::Ornithe => mc_version == "1.8.9",
    }
}

pub fn parse_versions(raw: &str) -> Result<Vec<OneClientVersion>, OneClientError> {
    let versions: Vec<RawVersion> = serde_json::from_str(raw)?;
    let mut out = Vec::new();
    for version in versions {
        let Some(loader) = version
            .loaders
            .iter()
            .find_map(|l| OneClientLoader::from_token(l))
        else {
            continue;
        };
        let Some(mc_version) = version.game_versions.first().cloned() else {
            continue;
        };
        if !supported_pair(loader, &mc_version) {
            continue;
        }
        let file = version
            .files
            .iter()
            .find(|f| f.primary && f.filename.ends_with(".mrpack"))
            .or_else(|| {
                version
                    .files
                    .iter()
                    .find(|f| f.filename.ends_with(".mrpack"))
            });
        let Some(file) = file else {
            continue;
        };
        out.push(OneClientVersion {
            id: version.id,
            version_number: version.version_number,
            name: version.name,
            loader,
            mc_version: mc_version.clone(),
            mrpack_url: file.url.clone(),
            sha1: file.hashes.sha1.clone(),
            size: file.size,
            java_major: recommended_java_major(&mc_version),
        });
    }
    Ok(out)
}

pub async fn fetch_versions(
    client: &reqwest::Client,
) -> Result<Vec<OneClientVersion>, OneClientError> {
    let raw = client
        .get(ONECLIENT_MODRINTH_API)
        .header("User-Agent", "TwilightMC/oneclient-compatible-layer")
        .send()
        .await?
        .error_for_status()?
        .text()
        .await?;
    parse_versions(&raw)
}

pub async fn resolve_latest(
    client: &reqwest::Client,
    loader: OneClientLoader,
    mc_version: &str,
) -> Result<OneClientVersion, OneClientError> {
    let versions = fetch_versions(client).await?;
    versions
        .into_iter()
        .find(|v| v.loader == loader && v.mc_version == mc_version)
        .ok_or_else(|| OneClientError::NotFound {
            loader: loader.as_str().to_owned(),
            mc_version: mc_version.to_owned(),
        })
}
