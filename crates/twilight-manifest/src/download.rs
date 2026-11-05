use std::collections::HashMap;

use serde::{Deserialize, Serialize};

/// One downloadable artifact in a Mojang manifest: `url` + `sha1` are required.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DownloadInfo {
    pub url: String,
    pub sha1: String,
    pub size: i64,
    /// Relative path hint within the artifact store; optional (not used by us).
    #[serde(skip_serializing_if = "Option::is_none")]
    pub path: Option<String>,
}

/// `downloads` block of a manifest library.
#[derive(Debug, Clone, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct LibraryDownloads {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub artifact: Option<DownloadInfo>,
    #[serde(default, skip_serializing_if = "HashMap::is_empty")]
    pub classifiers: HashMap<String, DownloadInfo>,
}

/// `assetIndex` block of a manifest. Extends [`DownloadInfo`] with index metadata.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssetIndexInfo {
    pub url: String,
    pub sha1: String,
    pub size: i64,
    pub total_size: i64,
    pub id: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub path: Option<String>,
}

impl AssetIndexInfo {
    /// Fallback description for old manifests that only carry an `assets` id
    /// (`1.7.3` era). Port of the hard-coded URL swaps in
    /// `MojangAssetIndexInfo::MojangAssetIndexInfo(QString)`; the resulting
    /// entry is not sha1-verifiable (no hash known), hence `known = false`.
    pub fn provisional(id: &str) -> Self {
        let url = if id == "legacy" {
            "https://piston-meta.mojang.com/mc/assets/legacy/c0fd82e8ce9fbc93119e40d96d5a4e62cfa3f729/legacy.json".to_owned()
        } else {
            format!("https://s3.amazonaws.com/Minecraft.Download/indexes/{id}.json")
        };
        AssetIndexInfo {
            url,
            sha1: String::new(),
            size: -1,
            total_size: -1,
            id: id.to_owned(),
            path: None,
        }
    }

    /// true when the manifest itself provided full download metadata.
    pub fn is_known(&self) -> bool {
        self.size >= 0
    }
}
