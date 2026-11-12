//! Loader metadata endpoints (fabric meta v2, quilt meta v3) and profile
//! resolution: latest stable from the list endpoint, or a pinned version.

use std::fmt;

use reqwest::Client;

use crate::component::{LoaderProfile, RawProfile};
use crate::error::LoaderError;

/// Fabric metadata host (API v2).
pub const FABRIC_META_BASE: &str = "https://meta.fabricmc.net";
/// Quilt metadata host (API v3).
pub const QUILT_META_BASE: &str = "https://meta.quiltmc.org";

/// Wire formats TwilightMC resolves into composite launch overlays.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ModLoader {
    Fabric,
    Quilt,
}

impl ModLoader {
    /// Maps a case-insensitive CLI token (`fabric`, `quilt`, whitespace
    /// trimmed) onto a loader.
    pub fn from_token(token: &str) -> Option<Self> {
        match token.trim().to_ascii_lowercase().as_str() {
            "fabric" => Some(Self::Fabric),
            "quilt" => Some(Self::Quilt),
            _ => None,
        }
    }

    /// Knot main class the composited launch spawns.
    pub const fn knot_main_class(self) -> &'static str {
        match self {
            Self::Fabric => "net.fabricmc.loader.impl.launch.knot.KnotClient",
            Self::Quilt => "org.quiltmc.loader.impl.launch.knot.KnotClient",
        }
    }

    /// Maven repository resolving url-less profile entries.
    pub const fn maven_base(self) -> &'static str {
        match self {
            Self::Fabric => "https://maven.fabricmc.net/",
            Self::Quilt => "https://maven.quiltmc.org/repository/release/",
        }
    }

    /// Maven coordinate of the loader artifact itself. Modern `launcherMeta`
    /// v2 library lists no longer include it (they carry only support jars
    /// like asm/mixin), so profile resolution must synthesize this entry or
    /// the Knot main class cannot load.
    pub fn loader_coordinate(self, version: &str) -> String {
        match self {
            Self::Fabric => format!("net.fabricmc:fabric-loader:{version}"),
            Self::Quilt => format!("org.quiltmc:quilt-loader:{version}"),
        }
    }

    /// Envelope field of the mapping jar (`intermediary` / `hashed`).
    pub const fn mapping_field(self) -> &'static str {
        match self {
            Self::Fabric => "intermediary",
            Self::Quilt => "hashed",
        }
    }

    /// Metadata host of the loader API.
    const fn meta_base(self) -> &'static str {
        match self {
            Self::Fabric => FABRIC_META_BASE,
            Self::Quilt => QUILT_META_BASE,
        }
    }

    /// Endpoint path `v2|v3/versions/loader/{game}[/{loader_version}]`; an
    /// empty loader version selects the list endpoint (latest stable).
    fn endpoint_path(self, game_version: &str, loader_version: Option<&str>) -> String {
        let api = match self {
            Self::Fabric => "v2",
            Self::Quilt => "v3",
        };
        match loader_version.filter(|version| !version.trim().is_empty()) {
            Some(version) => format!("{api}/versions/loader/{game_version}/{version}"),
            None => format!("{api}/versions/loader/{game_version}"),
        }
    }
}

impl fmt::Display for ModLoader {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(match self {
            Self::Fabric => "fabric",
            Self::Quilt => "quilt",
        })
    }
}

/// Endpoint URL for `loader.meta_base()`.
pub fn profile_url(
    base: &str,
    loader: ModLoader,
    game_version: &str,
    loader_version: Option<&str>,
) -> String {
    format!(
        "{base}/{}",
        loader.endpoint_path(game_version, loader_version)
    )
}

/// Resolves the composite [`LoaderProfile`] for a Minecraft version:
/// `loader_version` `None`/empty uses the latest stable list entry, otherwise
/// the version-pinned profile endpoint answers.
pub async fn resolve_loader_profile(
    client: &Client,
    loader: ModLoader,
    game_version: &str,
    loader_version: Option<&str>,
) -> Result<LoaderProfile, LoaderError> {
    let url = profile_url(loader.meta_base(), loader, game_version, loader_version);
    fetch_profile(client, loader, &url).await
}

/// Fetches and parses one meta endpoint (shared by production + loopback tests).
async fn fetch_profile(
    client: &Client,
    loader: ModLoader,
    url: &str,
) -> Result<LoaderProfile, LoaderError> {
    let response = client
        .get(url)
        .send()
        .await
        .map_err(|source| LoaderError::Http {
            url: url.to_owned(),
            source,
        })?;
    if !response.status().is_success() {
        return Err(LoaderError::HttpStatus {
            url: url.to_owned(),
            status: response.status().as_u16(),
        });
    }
    let raw: serde_json::Value = response.json().await.map_err(|source| LoaderError::Http {
        url: url.to_owned(),
        source,
    })?;
    parse_loader_meta(loader, &raw)
}

/// Parses a list endpoint (first stable entry wins, else the first entry) or a
/// version-pinned profile object into the composite launch component.
pub fn parse_loader_meta(
    loader: ModLoader,
    raw: &serde_json::Value,
) -> Result<LoaderProfile, LoaderError> {
    let picked = match raw {
        serde_json::Value::Array(list) => list
            .iter()
            .find(|entry| {
                matches!(
                    entry.pointer("/loader/stable"),
                    Some(serde_json::Value::Bool(true))
                )
            })
            .or_else(|| list.first())
            .ok_or_else(|| LoaderError::NoStableProfile {
                loader: loader.to_string(),
            })?
            .clone(),
        other => other.clone(),
    };
    let profile: RawProfile = serde_json::from_value(picked)?;
    profile.into_profile(loader)
}

#[cfg(test)]
pub(crate) const FABRIC_PROFILE_FIXTURE: &str = r#"{
    "loader": { "version": "0.16.9", "stable": true },
    "intermediary": {
        "maven": "net.fabricmc:intermediary:1.21.4",
        "url": "https://maven.fabricmc.net/net/fabricmc/intermediary/1.21.4/intermediary-1.21.4.jar",
        "version": "1.21.4"
    },
    "launcherMeta": {
        "libraries": {
            "common": [
                { "name": "net.fabricmc:fabric-loader:0.16.9", "url": "https://maven.fabricmc.net/" },
                { "name": "org.ow2.asm:asm:9.6", "sha1": "3d2af0b73e0d4032ac0f726d1b1c9e5a0b8e2be1" }
            ],
            "client": [
                { "name": "org.spongepowered:mixin:0.8.5", "url": "https://repo.spongepowered.org/repository/maven-public/" }
            ],
            "server": [
                { "name": "org.spongepowered:mixin:0.8.5", "url": "https://repo.spongepowered.org/repository/maven-public/" }
            ]
        }
    }
}"#;

#[cfg(test)]
pub(crate) const QUILT_PROFILE_FIXTURE: &str = r#"{
    "hashed": {
        "maven": "org.quiltmc:hashed:1.21.4",
        "version": "1.21.4"
    },
    "maven": "org.quiltmc:quilt-loader:0.26.4",
    "launcherMeta": {
        "libraries": {
            "common": [
                { "name": "org.quiltmc:quilt-loader:0.26.4", "url": "https://maven.quiltmc.org/repository/release/" },
                { "name": "org.ow2.asm:asm:9.6", "url": "https://maven.fabricmc.net/" }
            ],
            "client": [],
            "server": []
        }
    }
}"#;

#[cfg(test)]
pub(crate) const FABRIC_LIST_FIXTURE: &str = r#"[
    {
        "loader": { "version": "0.15.3", "stable": false },
        "intermediary": { "maven": "net.fabricmc:intermediary:1.21.3" },
        "launcherMeta": { "libraries": { "common": [], "client": [], "server": [] } }
    },
    {
        "loader": { "version": "0.16.9", "stable": true },
        "intermediary": { "maven": "net.fabricmc:intermediary:1.21.4" },
        "launcherMeta": { "libraries": { "common": [], "client": [], "server": [] } }
    },
    {
        "loader": { "version": "0.17.0-beta.1", "stable": false },
        "intermediary": { "maven": "net.fabricmc:intermediary:1.21.5" },
        "launcherMeta": { "libraries": { "common": [], "client": [], "server": [] } }
    }
]"#;

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_server::spawn;
    use std::collections::HashMap;

    #[test]
    fn endpoint_urls_follow_the_meta_apis() {
        assert_eq!(
            profile_url(FABRIC_META_BASE, ModLoader::Fabric, "1.21.4", None),
            "https://meta.fabricmc.net/v2/versions/loader/1.21.4"
        );
        assert_eq!(
            profile_url(
                FABRIC_META_BASE,
                ModLoader::Fabric,
                "1.21.4",
                Some("0.16.9")
            ),
            "https://meta.fabricmc.net/v2/versions/loader/1.21.4/0.16.9"
        );
        // empty loader versions select the list endpoint
        assert_eq!(
            profile_url(QUILT_META_BASE, ModLoader::Quilt, "1.7.10", Some("   ")),
            "https://meta.quiltmc.org/v3/versions/loader/1.7.10"
        );
        assert_eq!(
            ModLoader::Quilt.maven_base(),
            "https://maven.quiltmc.org/repository/release/"
        );
        assert_eq!(
            ModLoader::Fabric.maven_base(),
            "https://maven.fabricmc.net/"
        );
    }

    #[test]
    fn loader_coordinates_match_each_maven() {
        assert_eq!(
            ModLoader::Fabric.loader_coordinate("0.20.1"),
            "net.fabricmc:fabric-loader:0.20.1"
        );
        assert_eq!(
            ModLoader::Quilt.loader_coordinate("0.26.4"),
            "org.quiltmc:quilt-loader:0.26.4"
        );
    }

    #[test]
    fn loader_tokens_are_case_insensitive() {
        assert_eq!(ModLoader::from_token("Quilt"), Some(ModLoader::Quilt));
        assert_eq!(ModLoader::from_token(" FABRIC "), Some(ModLoader::Fabric));
        assert_eq!(ModLoader::from_token("quiltmc"), None);
        assert_eq!(ModLoader::from_token("forge"), None);
    }

    #[test]
    fn list_meta_picks_the_latest_stable_entry() {
        let raw: serde_json::Value = serde_json::from_str(FABRIC_LIST_FIXTURE).unwrap();
        let profile = parse_loader_meta(ModLoader::Fabric, &raw).unwrap();
        assert_eq!(profile.loader_version, "0.16.9");
        assert_eq!(
            profile.libraries[0].storage,
            "net/fabricmc/intermediary/1.21.4/intermediary-1.21.4.jar"
        );
    }

    #[test]
    fn empty_list_meta_is_an_error() {
        let raw = serde_json::json!([]);
        let err = parse_loader_meta(ModLoader::Quilt, &raw).unwrap_err();
        assert!(
            matches!(err, LoaderError::NoStableProfile { ref loader } if loader == "quilt"),
            "{err:?}"
        );
    }

    #[test]
    fn quilt_profile_parses_composite_launch_data() {
        let raw: serde_json::Value = serde_json::from_str(QUILT_PROFILE_FIXTURE).unwrap();
        let profile = parse_loader_meta(ModLoader::Quilt, &raw).unwrap();
        assert_eq!(profile.loader_version, "0.26.4");
        assert_eq!(
            profile.main_class,
            "org.quiltmc.loader.impl.launch.knot.KnotClient"
        );
    }

    #[tokio::test]
    async fn fetches_profiles_over_the_loopback_endpoints() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([
            (
                "v2/versions/loader/1.21.4".to_owned(),
                (200u16, FABRIC_LIST_FIXTURE.as_bytes().to_vec()),
            ),
            (
                "v2/versions/loader/1.21.4/0.16.9".to_owned(),
                (200u16, FABRIC_PROFILE_FIXTURE.as_bytes().to_vec()),
            ),
            (
                "v3/versions/loader/1.21.4/0.26.4".to_owned(),
                (200u16, QUILT_PROFILE_FIXTURE.as_bytes().to_vec()),
            ),
        ]);
        let addr = spawn(routes).await;
        let base = format!("http://{addr}");
        let client = Client::new();

        // latest stable from a list endpoint
        let fabric = fetch_profile(
            &client,
            ModLoader::Fabric,
            &profile_url(&base, ModLoader::Fabric, "1.21.4", None),
        )
        .await
        .unwrap();
        assert_eq!(fabric.loader_version, "0.16.9");
        assert_eq!(
            fabric.main_class,
            "net.fabricmc.loader.impl.launch.knot.KnotClient"
        );

        // version-pinned profile object
        let pinned = fetch_profile(
            &client,
            ModLoader::Fabric,
            &profile_url(&base, ModLoader::Fabric, "1.21.4", Some("0.16.9")),
        )
        .await
        .unwrap();
        assert_eq!(pinned.loader_version, "0.16.9");
        assert_eq!(pinned.libraries.len(), 4, "full fabric fixture shape");

        let quilt = fetch_profile(
            &client,
            ModLoader::Quilt,
            &profile_url(&base, ModLoader::Quilt, "1.21.4", Some("0.26.4")),
        )
        .await
        .unwrap();
        assert_eq!(quilt.loader_version, "0.26.4");
        assert!(
            quilt.libraries[0]
                .storage
                .starts_with("org/quiltmc/hashed/1.21.4/"),
            "hashed mapping jar leads the library list"
        );
    }

    #[tokio::test]
    async fn http_errors_surface_the_endpoint_and_status() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([(
            "v2/versions/loader/9.9.9".to_owned(),
            (404u16, b"gone".to_vec()),
        )]);
        let addr = spawn(routes).await;
        let base = format!("http://{addr}");
        let err = fetch_profile(
            &Client::new(),
            ModLoader::Fabric,
            &profile_url(&base, ModLoader::Fabric, "9.9.9", None),
        )
        .await
        .unwrap_err();
        assert!(
            matches!(err, LoaderError::HttpStatus { ref status, .. } if *status == 404),
            "{err:?}"
        );
    }
}
