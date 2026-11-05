//! Mojang asset index (`indexes/<assets_id>.json`) parsing and object paths.
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct AssetIndex {
    /// Legacy (pre-1.7) indexes materialize clients-side as `assets/virtual/<id>/...`
    #[serde(default, rename = "virtual")]
    pub is_virtual: Option<bool>,
    #[serde(default, rename = "map_to_resources")]
    pub maps_to_resources: Option<bool>,
    /// Keyed by virtual/relative file name.
    pub objects: HashMap<String, AssetObject>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct AssetObject {
    /// 40-hex-char sha1 of the object.
    pub hash: String,
    /// Older/odd indexes omit `size`; treat as unknown.
    #[serde(default)]
    pub size: i64,
}

impl AssetIndex {
    pub fn parse(bytes: &[u8]) -> Result<AssetIndex, super::error::DownloadError> {
        Ok(serde_json::from_slice(bytes)?)
    }

    /// Content-addressed relative path inside the assets store:
    /// `objects/aa/<full-40-hex-hash>`.
    pub fn object_path(&self, hash: &str) -> std::path::PathBuf {
        let dir = &hash[..2];
        std::path::PathBuf::from("objects").join(dir).join(hash)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn sample_index() -> AssetIndex {
        AssetIndex::parse(
            br#"{
                "objects": {
                    "minecraft/sounds/ambient/cave/cave1.ogg": { "hash": "aabbccddeeff00112233445566778899aabbccdd", "size": 123 },
                    "pack.mcmeta": { "hash": "0bcd0123456789abcdef0123456789abcdef0123", "size": 456 }
                },
                "virtual": false,
                "map_to_resources": false
            }"#,
        )
        .unwrap()
    }

    #[test]
    fn parses_assets_objects_map_and_flags() {
        let index = sample_index();
        assert_eq!(index.objects.len(), 2);
        assert_eq!(index.is_virtual, Some(false));
        assert_eq!(index.maps_to_resources, Some(false));
        let pack = index.objects.get("pack.mcmeta").unwrap();
        assert_eq!(pack.size, 456);
    }

    #[test]
    fn missing_object_key_is_lenient() {
        let minimal = AssetIndex::parse(br#"{ "objects": { "x": { "hash": "ab" } } }"#);
        assert!(minimal.is_ok());
    }

    #[test]
    fn content_addressed_object_paths() {
        let index = sample_index();
        let path = index.object_path("aabbccddeeff00112233445566778899aabbccdd");
        assert_eq!(
            path.display().to_string(),
            "objects/aa/aabbccddeeff00112233445566778899aabbccdd"
        );
    }

    #[tokio::test]
    async fn bad_json_is_rejected() {
        assert!(AssetIndex::parse(br#"{"objects": []}"#).is_err());
        assert!(AssetIndex::parse(b"null objects?").is_err());
    }
}
