//! Horizon native-engine asset pipeline.
//!
//! Downloads and verifies Mojang's content-addressed vanilla assets into
//! Horizon's own store (`assets/objects/xx/<sha1>` layout) and emits a
//! Horizon manifest (`horizon-assets.json`). Nothing copyrighted is bundled
//! or shipped with the launcher itself — the store is populated from Mojang's
//! CDN at install time only.

mod error;

pub use error::HorizonError;

use serde::{Deserialize, Serialize};
use twilight_downloader::{AssetIndex, AssetObject, DownloadError, DownloadRequest, ParallelDownloader, MOJANG_RESOURCES_BASE};

/// Manifest written next to the assets store.
pub const HORIZON_MANIFEST_FILE: &str = "horizon-assets.json";

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HorizonAssetEntry {
    /// Resource path as named in the asset index (e.g. `minecraft/sounds/...`).
    pub resource: String,
    pub hash: String,
    #[serde(default)]
    pub size: i64,
    /// Content-addressed path within the store, relative to its root.
    pub store_path: String,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HorizonManifest {
    pub schema: String,
    pub assets_id: String,
    pub entries: Vec<HorizonAssetEntry>,
}

/// Builds a deterministically ordered (resource-sorted) Horizon manifest.
pub fn build_manifest(assets_id: &str, index: &AssetIndex) -> HorizonManifest {
    let mut entries: Vec<HorizonAssetEntry> = index
        .objects
        .iter()
        .map(|(resource, obj)| HorizonAssetEntry {
            resource: resource.clone(),
            hash: obj.hash.clone(),
            size: obj.size,
            store_path: display_path(&object_rel_path(&obj.hash)),
        })
        .collect();
    entries.sort_by(|a, b| a.resource.cmp(&b.resource));
    HorizonManifest { schema: "horizon-assets-v1".into(), assets_id: assets_id.into(), entries }
}

fn object_rel_path(hash: &str) -> std::path::PathBuf {
    std::path::Path::new("objects").join(&hash[..2]).join(hash)
}

fn display_path(path: &std::path::Path) -> String {
    path.components().map(|c| c.as_os_str().to_string_lossy()).collect::<Vec<_>>().join("/")
}

/// Horizon's verified asset store root.
pub struct AssetStore {
    pub root: std::path::PathBuf,
}

impl AssetStore {
    pub fn new(root: impl Into<std::path::PathBuf>) -> Self {
        Self { root: root.into() }
    }

    pub fn object_path(&self, hash: &str) -> std::path::PathBuf {
        self.root.join(object_rel_path(hash))
    }

    /// Composes download requests for the whole index from Mojang's content-
    /// addressed CDN; each already carries its own expected sha1.
    pub fn download_requests(&self, index: &AssetIndex) -> Vec<DownloadRequest> {
        index
            .objects
            .values()
            .map(|AssetObject { hash, .. }| DownloadRequest {
                url: format!("{MOJANG_RESOURCES_BASE}{}/{hash}", &hash[..2]),
                dest: self.object_path(hash),
                sha1: Some(hash.clone()),
            })
            .collect()
    }

    /// Verifies every object against its sha1. Missing files surface as
    /// `MissingObject`, corrupted ones as `CorruptObject`.
    pub async fn verify_all(&self, index: &AssetIndex) -> Result<(), HorizonError> {
        for (resource, obj) in &index.objects {
            let actual = match twilight_downloader::sha1_of_file(&self.object_path(&obj.hash)).await {
                Ok(actual) => actual,
                Err(DownloadError::Io { source, .. }) => return Err(HorizonError::MissingObject { resource: resource.clone(), source }),
                Err(e) => return Err(e.into()),
            };
            if actual != obj.hash.to_lowercase() {
                return Err(HorizonError::CorruptObject { resource: resource.clone(), expected: obj.hash.clone(), actual });
            }
        }
        Ok(())
    }

    /// Copies every object to `resources_root/<index key>` (needed for
    /// `map_to_resources` and legacy `virtual` indexes). Returns how many
    /// files were written; already-present identical files are skipped
    /// by content hash.
    pub async fn export_to_resources(&self, index: &AssetIndex, resources_root: &std::path::Path) -> Result<usize, HorizonError> {
        tokio::fs::create_dir_all(resources_root).await?;
        let mut written = 0usize;
        for (resource, obj) in &index.objects {
            let source = self.object_path(&obj.hash);
            let target = resources_root.join(resource);
            if let Some(parent) = target.parent() {
                tokio::fs::create_dir_all(parent).await?;
            }
            // identical copies are skipped by content hash
            if twilight_downloader::sha1_of_file(&target)
                .await
                .as_deref()
                .is_ok_and(|h| h.eq_ignore_ascii_case(&obj.hash))
            {
                continue;
            }
            tokio::fs::copy(&source, &target).await?;
            written += 1;
        }
        Ok(written)
    }

    /// Full install: downloads, verifies, then writes `horizon-assets.json`.
    pub async fn install(&self, assets_id: &str, index: &AssetIndex, downloader: &ParallelDownloader) -> Result<HorizonManifest, HorizonError> {
        downloader.download_all(&self.download_requests(index)).await?;
        self.verify_all(index).await?;
        let manifest = build_manifest(assets_id, index);
        let json = serde_json::to_string_pretty(&manifest)?;
        tokio::fs::write(self.root.join(HORIZON_MANIFEST_FILE), json).await?;
        Ok(manifest)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use sha1::{Digest, Sha1};
    use std::collections::HashMap;

    const OBJECT_A: &[u8] = b"{}"; // pack.mcmeta
    const OBJECT_B: &[u8] = b"ogg-bytes"; // minecraft/sounds/x.ogg

    fn test_index() -> AssetIndex {
        let mut objects = HashMap::new();
        for (resource, body) in [("pack.mcmeta", OBJECT_A), ("minecraft/sounds/x.ogg", OBJECT_B)] {
            objects.insert(
                resource.to_owned(),
                AssetObject { hash: sha(body), size: body.len() as i64 },
            );
        }
        AssetIndex { objects, is_virtual: Some(false), maps_to_resources: Some(false) }
    }

    fn sha(body: &[u8]) -> String {
        twilight_downloader::to_hex(Sha1::digest(body).as_slice())
    }

    fn body_of(resource: &str) -> &'static [u8] {
        if resource == "pack.mcmeta" {
            OBJECT_A
        } else {
            OBJECT_B
        }
    }

    fn fresh_root(tag: &str) -> std::path::PathBuf {
        let nanos = std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .map(|d| d.subsec_nanos())
            .unwrap_or(0);
        std::env::temp_dir().join(format!("horizon-{tag}-{}-{}", std::process::id(), nanos))
    }

    #[tokio::test]
    async fn manifest_is_deterministic_sorted_and_round_trips() {
        let index = test_index();
        let manifest = build_manifest("26.3", &index);
        assert_eq!(manifest.schema, "horizon-assets-v1");
        assert_eq!(manifest.assets_id, "26.3");
        assert!(manifest.entries[0].resource < manifest.entries[1].resource, "sorted");
        // must be stable across rebuilds
        assert_eq!(build_manifest("26.3", &index), manifest);
        let e = &manifest.entries[0];
        assert!(e.store_path.starts_with("objects/") && e.store_path.ends_with(&e.hash));

        let back: HorizonManifest = serde_json::from_str(&serde_json::to_string(&manifest).unwrap()).unwrap();
        assert_eq!(back, manifest);
    }

    #[tokio::test]
    async fn verify_reports_missing_then_corrupt_then_passes() {
        let index = test_index();
        let origin = fresh_root("store");
        let target = fresh_root("copy");
        let store = AssetStore::new(&origin);

        // 1) everything missing
        assert!(matches!(store.verify_all(&index).await, Err(HorizonError::MissingObject { .. })));

        // populate via the download path (works offline? no: server-less local
        // population of the SAME files the real CDN would deliver)
        for (resource, obj) in &index.objects {
            tokio::fs::create_dir_all(store.root.join(object_rel_path(&obj.hash)).parent().unwrap()).await.unwrap();
            tokio::fs::write(store.object_path(&obj.hash), body_of(resource)).await.unwrap();
        }
        store.verify_all(&index).await.unwrap();

        // 2) corrupt one object
        let e = &manifest_first(&index);
        tokio::fs::write(store.object_path(&e.hash), b"corrupted").await.unwrap();
        assert!(matches!(store.verify_all(&index).await, Err(HorizonError::CorruptObject { .. })));
        tokio::fs::write(store.object_path(&e.hash), body_of(&e.resource)).await.unwrap();

        // 3) export to resources layout
        let resources = target.join("resources");
        assert_eq!(store.export_to_resources(&index, &resources).await.unwrap(), 2);
        assert_eq!(tokio::fs::read(resources.join("pack.mcmeta")).await.unwrap(), OBJECT_A);
        assert_eq!(tokio::fs::read(resources.join("minecraft/sounds/x.ogg")).await.unwrap(), OBJECT_B);
        assert_eq!(store.export_to_resources(&index, &resources).await.unwrap(), 0, "idempotent export");

        let _ = tokio::fs::remove_dir_all(&origin).await;
        let _ = tokio::fs::remove_dir_all(&target).await;
    }

    fn manifest_first(index: &AssetIndex) -> HorizonAssetEntry {
        build_manifest("26.3", index).entries[0].clone()
    }
}
