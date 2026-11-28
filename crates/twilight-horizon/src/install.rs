//! On-demand installation of the prepared resources Horizon reads.
//!
//! The player's own Mojang client jar and asset objects are fetched from
//! Mojang's CDN, verified against the manifest checksums and then arranged by
//! [`crate::prepare`]. Nothing copyrighted is bundled with TwilightMC; a
//! complete, already-verified folder short-circuits the network entirely.

use std::path::{Path, PathBuf};

use reqwest::Client;
use twilight_downloader::{AssetIndex, DownloadRequest, ParallelDownloader};
use twilight_manifest::{AssetIndexInfo, DownloadInfo};

use crate::error::HorizonError;
use crate::manifest::{self, ResourcesManifest};
use crate::prepare::{self, PrepareReport};
use crate::store::AssetStore;

/// What one resource installation needs from a resolved version manifest.
pub struct InstallRequest<'a> {
    pub version: &'a str,
    /// Shared artifact root (`<shared>/assets`, `<shared>/horizon-resources`).
    pub shared_root: &'a Path,
    /// The manifest's `downloads.client` artifact.
    pub client: &'a DownloadInfo,
    /// The manifest's `assetIndex` block.
    pub asset_index: &'a AssetIndexInfo,
}

/// What a launch gets back after resources are ready.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct PreparedResources {
    pub dir: PathBuf,
    /// `true` when the existing folder passed `horizon-prepare --check`.
    pub reused: bool,
    /// What the preparation wrote, when it ran.
    pub report: Option<PrepareReport>,
}

/// Where a version's downloaded inputs are cached (never inside the prepared
/// resources, so an incremental repair can keep the existing game files).
pub fn cache_dir(shared_root: &Path, version: &str) -> PathBuf {
    shared_root
        .join("horizon-resources")
        .join(".cache")
        .join(version)
}

/// Ensures `<shared>/horizon-resources/<version>` is complete and current.
pub async fn ensure_resources(
    client: &Client,
    request: &InstallRequest<'_>,
) -> Result<PreparedResources, HorizonError> {
    let dir = manifest::resources_dir(request.shared_root, request.version);
    if manifest::check_resources(&dir, Some(request.version)).complete {
        return Ok(PreparedResources {
            dir,
            reused: true,
            report: None,
        });
    }

    let cache = cache_dir(request.shared_root, request.version);
    let jar = cache.join("client.jar");
    let index_file = cache.join(format!("{}.json", request.asset_index.id));
    let downloader = ParallelDownloader::new(client.clone(), 8);
    downloader
        .download_all(&[
            DownloadRequest {
                url: request.client.url.clone(),
                dest: jar.clone(),
                sha1: Some(request.client.sha1.clone()),
            },
            DownloadRequest {
                url: request.asset_index.url.clone(),
                dest: index_file.clone(),
                sha1: Some(request.asset_index.sha1.clone()),
            },
        ])
        .await?;

    let index_bytes = tokio::fs::read(&index_file).await?;
    let index = AssetIndex::parse(&index_bytes)?;
    let assets_root = request.shared_root.join("assets");
    AssetStore::new(&assets_root)
        .ensure_objects(&index, &downloader)
        .await?;

    let report = prepare::prepare_resources(&prepare::PrepareRequest {
        version: request.version,
        resources: &dir,
        client_jar: &jar,
        asset_index_id: &request.asset_index.id,
        asset_index_bytes: &index_bytes,
        index: &index,
        asset_store: &assets_root,
    })
    .await?;
    Ok(PreparedResources {
        dir,
        reused: false,
        report: Some(report),
    })
}

/// A small human-readable summary for the console drawer.
pub fn describe(prepared: &PreparedResources) -> String {
    if prepared.reused {
        format!(
            "Horizon: reusing prepared resources at {}",
            prepared.dir.display()
        )
    } else {
        match prepared.report {
            Some(report) => format!(
                "Horizon: prepared resources at {} ({} jar files, {} indexed assets, {} reused)",
                prepared.dir.display(),
                report.resource_files,
                report.indexed_files,
                report.reused_files
            ),
            None => format!("Horizon: prepared resources at {}", prepared.dir.display()),
        }
    }
}

/// The manifest TwilightMC writes for a prepared folder, for diagnostics.
pub fn manifest_for(prepared: &PreparedResources) -> Result<ResourcesManifest, HorizonError> {
    let bytes = std::fs::read(prepared.dir.join(manifest::RESOURCES_MANIFEST_FILE))?;
    Ok(serde_json::from_slice(&bytes)?)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn png(size: u32) -> Vec<u8> {
        let mut bytes = b"\x89PNG\r\n\x1a\n\x00\x00\x00\x0dIHDR".to_vec();
        bytes.extend_from_slice(&size.to_be_bytes());
        bytes.extend_from_slice(&size.to_be_bytes());
        bytes.extend_from_slice(&[8, 6, 0, 0, 0]);
        bytes
    }

    #[tokio::test]
    async fn a_complete_folder_is_reused_without_any_download() {
        let base = std::env::temp_dir().join(format!(
            "twilight-horizon-install-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .map(|d| d.subsec_nanos())
                .unwrap_or(0)
        ));
        let resources = manifest::resources_dir(&base, "26.3");
        std::fs::create_dir_all(resources.join("assets/minecraft/textures/gui/title/background"))
            .unwrap();
        std::fs::create_dir_all(resources.join("assets/minecraft/font/include")).unwrap();
        std::fs::create_dir_all(resources.join("assets/minecraft/resourcepacks")).unwrap();
        std::fs::write(resources.join("assets/minecraft/sounds.json"), "{}").unwrap();
        std::fs::write(resources.join("assets/pack.mcmeta"), "{}").unwrap();
        for face in 0..6 {
            std::fs::write(
                resources.join(format!(
                    "assets/minecraft/textures/gui/title/background/panorama_{face}.png"
                )),
                png(4),
            )
            .unwrap();
        }
        std::fs::write(
            resources.join("assets/minecraft/textures/gui/title/background/panorama_overlay.png"),
            png(4),
        )
        .unwrap();
        std::fs::write(
            resources.join("assets/minecraft/font/include/unifont.json"),
            "{}",
        )
        .unwrap();
        for file in [
            "assets/minecraft/font/unifont.zip",
            "assets/minecraft/resourcepacks/programmer_art.zip",
            "assets/minecraft/resourcepacks/high_contrast.zip",
        ] {
            std::fs::write(resources.join(file), "PK").unwrap();
        }
        manifest::write_manifest(
            &resources,
            &ResourcesManifest {
                schema: manifest::SCHEMA,
                minecraft: "26.3".to_owned(),
                client_sha256: None,
                asset_index: None,
                resource_files: None,
            },
        )
        .unwrap();
        manifest::write_stamp(&resources).unwrap();

        // Deliberately unreachable URLs: a reused folder must not touch them.
        let client = twilight_manifest::DownloadInfo {
            url: "http://127.0.0.1:1/client.jar".to_owned(),
            sha1: "00".to_owned(),
            size: 1,
            path: None,
        };
        let index = AssetIndexInfo {
            url: "http://127.0.0.1:1/index.json".to_owned(),
            sha1: "00".to_owned(),
            size: 1,
            total_size: 1,
            id: "26.3".to_owned(),
            path: None,
        };
        let prepared = ensure_resources(
            &Client::new(),
            &InstallRequest {
                version: "26.3",
                shared_root: &base,
                client: &client,
                asset_index: &index,
            },
        )
        .await
        .unwrap();
        assert!(prepared.reused);
        assert_eq!(prepared.dir, resources);
        assert!(describe(&prepared).contains("reusing"));
        let _ = std::fs::remove_dir_all(&base);
    }

    #[test]
    fn cache_paths_are_inside_the_shared_root() {
        let path = cache_dir(Path::new("C:/shared"), "26.3");
        assert_eq!(path, Path::new("C:/shared/horizon-resources/.cache/26.3"));
    }
}
