//! Strict typed models of `modrinth.index.json` (Modrinth pack format 1).

use std::collections::BTreeMap;

use serde::Deserialize;

use crate::error::ModrinthError;

/// `modrinth.index.json` of a `.mrpack` (format version 1).
#[derive(Debug, Clone, PartialEq, Eq, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ModpackIndex {
    /// Always `1` in spec-conformant packs (checked by [`parse_index`]).
    pub format_version: i64,
    /// Target game, conventionally `"minecraft"`.
    pub game: String,
    /// Human-readable pack name.
    pub name: String,
    #[serde(default)]
    pub version_id: String,
    /// Long-form pack description; absent in some packs.
    #[serde(default)]
    pub summary: Option<String>,
    #[serde(default)]
    pub dependencies: BTreeMap<String, String>,
    #[serde(default)]
    pub files: Vec<ModpackFile>,
}

/// One mod/config file entry with its checksums, download mirrors and
/// declared client/server usage.
#[derive(Debug, Clone, PartialEq, Eq, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ModpackFile {
    /// Relative path inside the game directory (`/` separators).
    pub path: String,
    pub hashes: ModpackHashes,
    /// Download mirrors; `downloads[0]` is the primary URL.
    pub downloads: Vec<String>,
    /// Client/server usage; `None` behaves like required on both sides.
    pub env: Option<Env>,
    #[serde(default)]
    pub file_size: Option<i64>,
}

/// Checksums carried by every index file entry.
#[derive(Debug, Clone, PartialEq, Eq, Deserialize)]
pub struct ModpackHashes {
    pub sha1: String,
    pub sha512: String,
}

/// Where a file belongs: client and/or server side.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum EnvSupport {
    Required,
    Optional,
    Unsupported,
}

/// `env` declaration object of a file entry.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Deserialize)]
pub struct Env {
    pub client: EnvSupport,
    pub server: EnvSupport,
}

impl Env {
    /// Behaviour for entries serialized without an `env` object.
    pub const REQUIRED_ON_BOTH: Self = Self {
        client: EnvSupport::Required,
        server: EnvSupport::Required,
    };
}

impl ModpackFile {
    /// Client-side support of this file; a missing `env` is `required`.
    pub fn client_support(&self) -> EnvSupport {
        self.env.map_or(EnvSupport::Required, |env| env.client)
    }

    /// Whether a client install must download this file.
    pub fn applies_to_client(&self) -> bool {
        !matches!(self.client_support(), EnvSupport::Unsupported)
    }
}

/// Parses and validates an index payload (`formatVersion` must be 1).
pub(crate) fn parse_index(bytes: &[u8]) -> Result<ModpackIndex, ModrinthError> {
    let index: ModpackIndex = serde_json::from_slice(bytes)?;
    if index.format_version != 1 {
        return Err(ModrinthError::UnsupportedFormatVersion {
            found: index.format_version,
        });
    }
    Ok(index)
}

#[cfg(test)]
mod tests {
    use super::*;

    /// Alpha is required client-side, beta is server-only, gamma carries no
    /// `env` (defaults required/required).
    const INDEX_JSON: &str = r#"{
        "formatVersion": 1,
        "game": "minecraft",
        "name": "Twilight Archive Pack",
        "versionId": "tap-1.0.0",
        "dependencies": { "minecraft": "1.21.4", "fabric-loader": "0.16.9" },
        "files": [
            {
                "path": "mods/alpha.jar",
                "hashes": { "sha1": "0102030405060708090a0b0c0d0e0f1011121314", "sha512": "11111111111111111111111111111111" },
                "downloads": ["https://cdn.modrinth.com/data/AABB/versions/1.0.0/alpha.jar"],
                "env": { "client": "required", "server": "required" },
                "fileSize": 1024
            },
            {
                "path": "mods/beta.jar",
                "hashes": { "sha1": "a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1", "sha512": "22222222222222222222222222222222" },
                "downloads": ["https://cdn.modrinth.com/data/CCDD/versions/2.0.0/beta.jar"],
                "env": { "client": "unsupported", "server": "required" },
                "fileSize": 2048
            },
            {
                "path": "mods/gamma.jar",
                "hashes": { "sha1": "b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2", "sha512": "33333333333333333333333333333333" },
                "downloads": ["https://cdn.modrinth.com/data/DDEE/versions/3.0.0/gamma.jar"],
                "fileSize": 512
            }
        ]
    }"#;

    #[test]
    fn index_parses_strictly() {
        let index = parse_index(INDEX_JSON.as_bytes()).unwrap();
        assert_eq!(index.format_version, 1);
        assert_eq!(index.game, "minecraft");
        assert_eq!(index.name, "Twilight Archive Pack");
        assert_eq!(index.version_id, "tap-1.0.0");
        assert_eq!(index.dependencies["minecraft"], "1.21.4");
        assert_eq!(index.dependencies["fabric-loader"], "0.16.9");
        assert_eq!(index.files.len(), 3);
        assert_eq!(index.files[0].hashes.sha1.len(), 40);
        assert_eq!(index.files[0].file_size, Some(1024));
    }

    #[test]
    fn env_defaults_to_required_and_filters_server_only_files() {
        let index = parse_index(INDEX_JSON.as_bytes()).unwrap();
        // missing `env` behaves like required on both sides
        assert_eq!(index.files[2].client_support(), EnvSupport::Required);
        assert_eq!(index.files[2].env, None);

        // explicit declarations flow through
        assert_eq!(index.files[0].client_support(), EnvSupport::Required);
        assert_eq!(index.files[1].client_support(), EnvSupport::Unsupported);

        let client_files = index
            .files
            .iter()
            .filter(|file| file.applies_to_client())
            .count();
        assert_eq!(client_files, 2, "beta is server-only and never stages");
    }

    #[test]
    fn summary_is_optional() {
        let index = parse_index(INDEX_JSON.as_bytes()).unwrap();
        assert_eq!(index.summary, None, "no summary in the fixture");

        let with_summary = parse_index(
            br#"{ "formatVersion": 1, "game": "minecraft", "name": "pack",
                "summary": "A curated pack." }"#,
        )
        .unwrap();
        assert_eq!(with_summary.summary.as_deref(), Some("A curated pack."));
    }

    #[test]
    fn unsupported_format_version_is_rejected() {
        let payload = br#"{ "formatVersion": 2, "game": "minecraft", "name": "future" }"#;
        let err = parse_index(payload).unwrap_err();
        assert!(
            matches!(err, ModrinthError::UnsupportedFormatVersion { found } if found == 2),
            "{err:?}"
        );
    }
}
