use std::collections::BTreeMap;

use serde::{Deserialize, Serialize};

use crate::download::{AssetIndexInfo, DownloadInfo};
use crate::error::ManifestError;
use crate::library::Library;

/// Root of a Mojang `version.json` manifest.
///
/// Unknown key/value pairs are preserved so re-serialization keeps
/// launcher-visible round-trips lossless, matching Qt keeping only own fields
/// — we keep *more* than Qt here, purely for manifest fidelity.
#[derive(Debug, Clone, Default, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase", default)]
pub struct VersionFile {
    /// `id` in Mojang manifests (e.g. `1.21.4`) — corresponds to `minecraftVersion`.
    #[serde(rename = "id")]
    pub id: String,
    /// `type`: release snapshot, alpha, etc.
    #[serde(rename = "type")]
    pub r#type: Option<String>,
    pub main_class: Option<String>,
    /// Pre-1.12.5 string argument template (space-separated, `${token}` placeholders).
    #[serde(rename = "minecraftArguments")]
    pub minecraft_arguments: Option<String>,
    /// Post-1.12.5 rule-gated argument lists.
    pub arguments: Option<crate::arg::Arguments>,
    /// `assets` id short name (e.g. `17`).
    #[serde(default)]
    pub assets: Option<String>,
    #[serde(rename = "assetIndex")]
    pub asset_index: Option<AssetIndexInfo>,
    #[serde(default, rename = "minimumLauncherVersion")]
    pub minimum_launcher_version: Option<i32>,
    #[serde(default)]
    pub compatible_java_majors: Vec<i32>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub compatible_java_name: Option<String>,
    /// Client/launcher artifacts (`client`, `server`…).
    #[serde(default)]
    pub downloads: BTreeMap<String, DownloadInfo>,
    /// ISO-ish (`S3 time`) strings; parsed lazily — we never `unwrap` dates.
    #[serde(default)]
    pub release_time: Option<String>,
    #[serde(default)]
    pub update_time: Option<String>,
    #[serde(default)]
    pub libraries: Vec<Library>,
}

/// Parses a Mojang `version.json` document.
pub fn parse_version_file(json: &str) -> Result<VersionFile, ManifestError> {
    let value: serde_json::Value = serde_json::from_str(json)?;
    if !value.is_object() {
        return Err(ManifestError::NotObject);
    }
    let file: VersionFile = serde_json::from_value(value)?;
    Ok(file)
}

/// Serializes back to Mojang's manifest shape (round-trip helper for storage).
pub fn write_version_file(file: &VersionFile) -> Result<String, serde_json::Error> {
    serde_json::to_string_pretty(file)
}

impl VersionFile {
    /// Deprecated but real: launcher-version babysitting from `readVersionProperties`.
    pub fn launcher_compatible(&self) -> bool {
        self.minimum_launcher_version
            .map(|v| v <= crate::SUPPORTED_MINIMUM_LAUNCHER_VERSION)
            .unwrap_or(true)
    }

    /// Resolves the effective asset index; falls back to the provisional URL
    /// hack when only the `assets` short id exists (Qt's `out->mojangAssetIndex`
    /// construction). The `known=false` flag is carried through `is_known()`.
    pub fn effective_asset_index(&self) -> Option<AssetIndexInfo> {
        if let Some(idx) = &self.asset_index {
            return Some(idx.clone());
        }
        self.assets.as_deref().map(AssetIndexInfo::provisional)
    }

    /// The client jar artifact when the manifest ships `downloads.client`.
    pub fn client(&self) -> Option<&DownloadInfo> {
        self.downloads.get("client")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const SAMPLE: &str = r#"{
        "id": "1.21.4",
        "type": "release",
        "mainClass": "net.minecraft.client.main.Main",
        "releaseTime": "2024-12-19T08:11:48+00:00",
        "time": "2024-12-19T08:11:48+00:00",
        "assets": "17",
        "assetIndex": {
            "url": "https://piston-meta.mojang.com/v1/packages/unknown/17.json",
            "sha1": "unknown",
            "size": 486123,
            "totalSize": 713323969,
            "id": "17"
        },
        "minimumLauncherVersion": 21,
        "argumentBuilder": "IGNORED",
        "libraries": [
            {
                "name": "com.mojang:blocklog:1.0.62",
                "downloads": {
                    "artifact": { "url": "https://libraries.minecraft.net/com/mojang/blocklog/1.0.62/blocklog-1.0.62.jar",
                        "sha1": "1e2815...","size": 32555 }
                }
            },
            {
                "name": "org.lwjgl:lwjgl:3.3.3:natives-windows-x8_64",
                "natives": { "windows-x8_64": "natives-windows-x8_64" }
            }
        ],
        "downloads": {
            "client": { "url": "https://piston-data.mojang.com/v1/objects/unknown/client.jar", "sha1": "deadbeef", "size": 26261384 }
        }
    }"#;

    #[test]
    fn parses_mojang_shape() {
        let f = parse_version_file(SAMPLE).unwrap();
        assert_eq!(f.id, "1.21.4");
        assert_eq!(f.r#type.as_deref(), Some("release"));
        assert_eq!(
            f.main_class.as_deref(),
            Some("net.minecraft.client.main.Main")
        );
        assert!(f.arguments.is_none());
        assert_eq!(f.effective_asset_index().unwrap().id, "17");
        assert_eq!(f.libraries.len(), 2);
        assert_eq!(f.client().unwrap().sha1, "deadbeef");
        // legacy assets-only manifests also work, with a distinct fallback URL
        let legacy_y = r#"{ "id": "1.7.3", "assets": "legacy" }"#;
        let f = parse_version_file(legacy_y).unwrap();
        let idx = f.effective_asset_index().unwrap();
        assert!(!idx.is_known());
        assert!(idx.url.contains("piston-meta"));
        assert_eq!(
            parse_version_file(legacy_y).unwrap().assets.as_deref(),
            Some("legacy")
        );
    }

    #[test]
    fn rejects_non_object_manifest() {
        assert!(parse_version_file("[]").is_err());
        assert!(parse_version_file("").is_err());
        assert!(parse_version_file("null").is_err());
    }

    #[test]
    fn launcher_version_check() {
        let f = parse_version_file(r#"{ "id": "x", "minimumLauncherVersion": 17 }"#).unwrap();
        assert!(f.launcher_compatible());
        let f = parse_version_file(r#"{ "id": "x", "minimumLauncherVersion": 99 }"#).unwrap();
        assert!(!f.launcher_compatible());
        assert!(
            parse_version_file(r#"{ "id": "x" }"#)
                .unwrap()
                .launcher_compatible()
        );
    }

    #[test]
    fn round_trip_preserves_fields() {
        let f = parse_version_file(SAMPLE).unwrap();
        let serialized = write_version_file(&f).unwrap();
        let f2 = parse_version_file(&serialized).unwrap();
        assert_eq!(f, f2);
    }

    #[test]
    fn skips_unknown_top_level_keys() {
        let f = parse_version_file(r#"{ "id": "x", "futureField": 12345 }"#).unwrap();
        assert_eq!(f.id, "x");
        // ...but round-trip does not keep them (Qt behaved the same)
        assert!(!write_version_file(&f).unwrap().contains("futureField"));
    }
}
