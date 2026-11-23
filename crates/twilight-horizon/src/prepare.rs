//! Turns a verified client jar and asset index into the layout
//! `horizon-client --resources` reads: the client's `assets/`, `data/` and
//! `pack.png`, overlaid with the indexed sounds, languages, title panorama,
//! Unifont glyphs and built-in packs, plus Horizon's two manifests.
//!
//! Nothing is bundled with TwilightMC. The jar and asset objects are downloaded
//! from Mojang's CDN by the launch pipeline only after the player is signed in;
//! this module only arranges files the player is entitled to.

use std::path::{Path, PathBuf};

use sha2::Digest;
use twilight_downloader::AssetIndex;

use crate::error::HorizonError;
use crate::manifest::{
    self, ASSET_INDEX_FILE, OUTPUT_VERSION, PREPARE_STAMP_FILE, RESOURCES_MANIFEST_FILE,
    ResourcesManifest,
};
use crate::store::safe_relative;

/// Inputs for one preparation. Paths are borrowed so the caller keeps
/// ownership of staging locations.
pub struct PrepareRequest<'a> {
    pub version: &'a str,
    pub resources: &'a Path,
    /// Verified client jar of `version`.
    pub client_jar: &'a Path,
    /// Asset index id (e.g. `26.3`).
    pub asset_index_id: &'a str,
    /// Raw asset index JSON, kept as `asset-index.json`.
    pub asset_index_bytes: &'a [u8],
    pub index: &'a AssetIndex,
    /// Mojang object store root (`objects/xx/<sha1>`), already verified.
    pub asset_store: &'a Path,
}

/// What one preparation wrote, for the console drawer.
#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub struct PrepareReport {
    /// Client-jar resource files (assets, data, pack.png).
    pub resource_files: u64,
    /// Indexed objects overlaid or linked.
    pub indexed_files: u64,
    /// Indexed objects already present with the right content.
    pub reused_files: u64,
}

/// The indexed extras Horizon's preparer imports. Each entry is one file the
/// game reads directly, so a missing one is reported rather than guessed.
const REQUIRED: [(&str, &str); 13] = [
    ("sounds", "minecraft/sounds.json"),
    (
        "panorama",
        "minecraft/textures/gui/title/background/panorama_0.png",
    ),
    (
        "panorama",
        "minecraft/textures/gui/title/background/panorama_1.png",
    ),
    (
        "panorama",
        "minecraft/textures/gui/title/background/panorama_2.png",
    ),
    (
        "panorama",
        "minecraft/textures/gui/title/background/panorama_3.png",
    ),
    (
        "panorama",
        "minecraft/textures/gui/title/background/panorama_4.png",
    ),
    (
        "panorama",
        "minecraft/textures/gui/title/background/panorama_5.png",
    ),
    (
        "panorama",
        "minecraft/textures/gui/title/background/panorama_overlay.png",
    ),
    ("fonts", "minecraft/font/include/unifont.json"),
    ("fonts", "minecraft/font/unifont.zip"),
    ("packs", "minecraft/resourcepacks/programmer_art.zip"),
    ("packs", "minecraft/resourcepacks/high_contrast.zip"),
    ("languages", "pack.mcmeta"),
];

/// Imports the client jar and overlays the indexed extras. The resources
/// folder is created when missing; an existing complete folder should be
/// checked with [`manifest::require_resources`] first and skipped.
pub async fn prepare_resources(
    request: &PrepareRequest<'_>,
) -> Result<PrepareReport, HorizonError> {
    tokio::fs::create_dir_all(request.resources).await?;
    let client_sha256 = sha256_file(request.client_jar)?;
    let jar = tokio::fs::read(request.client_jar).await?;
    let entries = tokio::task::spawn_blocking(move || twilight_modrinth::extract_archive(&jar))
        .await
        .map_err(|e| HorizonError::Archive(e.to_string()))??;
    let mut report = PrepareReport::default();
    for (name, data) in &entries {
        if !is_client_resource(name) {
            continue;
        }
        let Some(relative) = safe_relative(name) else {
            return Err(HorizonError::UnsafeArchivePath(name.clone()));
        };
        let target = request.resources.join(&relative);
        write_bytes(&target, data).await?;
        report.resource_files += 1;
    }

    // Keep the index snapshot Horizon's preparer keeps, so a later
    // `horizon-prepare <kind>` can repair extras without the launcher.
    write_bytes(
        &request.resources.join(ASSET_INDEX_FILE),
        request.asset_index_bytes,
    )
    .await?;

    let missing: Vec<&str> = REQUIRED
        .iter()
        .filter(|(_, name)| !request.index.objects.contains_key(*name))
        .map(|(_, name)| *name)
        .collect();
    if let Some(name) = missing.first() {
        return Err(HorizonError::MissingResourceFile((*name).to_owned()));
    }

    for (name, object) in &request.index.objects {
        if !is_indexed_extra(name) {
            continue;
        }
        let Some(relative) = safe_relative(name) else {
            return Err(HorizonError::UnsafeArchivePath(name.clone()));
        };
        let source = request
            .asset_store
            .join("objects")
            .join(&object.hash[..2])
            .join(&object.hash);
        let target = request.resources.join("assets").join(&relative);
        if file_matches(&target, &object.hash).await? {
            report.reused_files += 1;
            continue;
        }
        if let Some(parent) = target.parent() {
            tokio::fs::create_dir_all(parent).await?;
        }
        // The Mojang store is already content-addressed by sha1. Linking from
        // it is the zero-copy CAS step: hardlink on the same volume, junction
        // or symlink where available, verified copy as the last resort.
        if tokio::fs::try_exists(&target).await? {
            tokio::fs::remove_file(&target).await?;
        }
        twilight_cas::link_or_copy(&source, &target).await?;
        report.indexed_files += 1;
    }

    let manifest = ResourcesManifest {
        schema: manifest::SCHEMA,
        minecraft: request.version.to_owned(),
        client_sha256: Some(client_sha256),
        asset_index: Some(request.asset_index_id.to_owned()),
        resource_files: Some(report.resource_files),
    };
    manifest::write_manifest(request.resources, &manifest)?;
    manifest::write_stamp(request.resources)?;
    let status = manifest::check_resources(request.resources, Some(request.version));
    if !status.complete {
        return Err(HorizonError::NotPrepared(status.issues.join("; ")));
    }
    Ok(report)
}

/// `assets/**`, `data/**` and `pack.png`: what the client jar contributes to
/// the prepared resources. `META-INF` signatures and the manifest stay out.
fn is_client_resource(name: &str) -> bool {
    !name.ends_with('/')
        && (name == "pack.png" || name.starts_with("assets/") || name.starts_with("data/"))
}

/// The indexed extras Horizon imports on top of the jar. Base textures/models
/// live in the jar; these either only exist in the asset index (sounds,
/// languages, full panorama, Unifont, built-in packs) or replace a jar
/// placeholder.
fn is_indexed_extra(name: &str) -> bool {
    name == "pack.mcmeta"
        || name == "minecraft/sounds.json"
        || name.starts_with("minecraft/sounds/")
        || name.starts_with("minecraft/lang/")
        || name.starts_with("minecraft/font/")
        || name.starts_with("minecraft/resourcepacks/")
        || name.starts_with("minecraft/textures/gui/title/background/panorama_")
}

async fn write_bytes(path: &Path, data: &[u8]) -> Result<(), HorizonError> {
    if let Some(parent) = path.parent() {
        tokio::fs::create_dir_all(parent).await?;
    }
    tokio::fs::write(path, data).await?;
    Ok(())
}

async fn file_matches(path: &Path, sha1: &str) -> Result<bool, HorizonError> {
    if !tokio::fs::try_exists(path).await? {
        return Ok(false);
    }
    let actual = twilight_downloader::sha1_of_file(path).await?;
    Ok(actual.eq_ignore_ascii_case(sha1))
}

fn sha256_file(path: &Path) -> Result<String, HorizonError> {
    use std::io::Read;
    let mut file = std::fs::File::open(path)?;
    let mut hash = sha2::Sha256::new();
    let mut buffer = vec![0u8; 1 << 20];
    loop {
        let read = file.read(&mut buffer)?;
        if read == 0 {
            return Ok(hash
                .finalize()
                .iter()
                .map(|byte| format!("{byte:02x}"))
                .collect());
        }
        hash.update(&buffer[..read]);
    }
}

/// Names of the two manifests this module writes, for diagnostics.
pub fn manifest_names() -> (&'static str, &'static str) {
    (RESOURCES_MANIFEST_FILE, PREPARE_STAMP_FILE)
}

/// The output version this module stamps, re-exported for UI labels.
pub const STAMPED_OUTPUT_VERSION: u32 = OUTPUT_VERSION;

/// Default resources folder for a shared root and Minecraft version.
pub fn default_resources(root: &Path, version: &str) -> PathBuf {
    manifest::resources_dir(root, version)
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::HashMap;
    use twilight_downloader::AssetObject;

    fn sha1_hex(data: &[u8]) -> String {
        use sha1::Digest;
        sha1::Sha1::digest(data)
            .iter()
            .map(|b| format!("{b:02x}"))
            .collect()
    }

    fn sha256_hex(data: &[u8]) -> String {
        use sha2::Digest;
        sha2::Sha256::digest(data)
            .iter()
            .map(|b| format!("{b:02x}"))
            .collect()
    }

    /// A stored ZIP with the entries a fixture client jar needs. Stored
    /// entries keep the test fixture independent of a compression crate.
    fn jar(entries: &[(&str, &[u8])]) -> Vec<u8> {
        let mut out = Vec::new();
        let mut central = Vec::new();
        for (name, data) in entries {
            let offset = out.len() as u32;
            let crc = crc32(data);
            let name_bytes = name.as_bytes();
            out.extend_from_slice(&0x0403_4b50u32.to_le_bytes());
            out.extend_from_slice(&20u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(&crc.to_le_bytes());
            out.extend_from_slice(&(data.len() as u32).to_le_bytes());
            out.extend_from_slice(&(data.len() as u32).to_le_bytes());
            out.extend_from_slice(&(name_bytes.len() as u16).to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(name_bytes);
            out.extend_from_slice(data);

            central.extend_from_slice(&0x0201_4b50u32.to_le_bytes());
            central.extend_from_slice(&20u16.to_le_bytes());
            central.extend_from_slice(&20u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&crc.to_le_bytes());
            central.extend_from_slice(&(data.len() as u32).to_le_bytes());
            central.extend_from_slice(&(data.len() as u32).to_le_bytes());
            central.extend_from_slice(&(name_bytes.len() as u16).to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes());
            central.extend_from_slice(&0u32.to_le_bytes());
            central.extend_from_slice(&offset.to_le_bytes());
            central.extend_from_slice(name_bytes);
        }
        let cd_offset = out.len() as u32;
        out.extend_from_slice(&central);
        out.extend_from_slice(&0x0605_4b50u32.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
        out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
        out.extend_from_slice(&(central.len() as u32).to_le_bytes());
        out.extend_from_slice(&cd_offset.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out
    }

    fn crc32(data: &[u8]) -> u32 {
        let mut crc = 0xFFFF_FFFFu32;
        for &byte in data {
            crc ^= u32::from(byte);
            for _ in 0..8 {
                crc = if crc & 1 != 0 {
                    0xEDB8_8320 ^ (crc >> 1)
                } else {
                    crc >> 1
                };
            }
        }
        crc ^ 0xFFFF_FFFF
    }

    /// A minimal PNG with a real IHDR: `check_resources` rejects the 1x1
    /// placeholders the client jar ships, so fixtures need valid dimensions.
    fn png(size: u32) -> Vec<u8> {
        let mut bytes = b"\x89PNG\r\n\x1a\n\x00\x00\x00\x0dIHDR".to_vec();
        bytes.extend_from_slice(&size.to_be_bytes());
        bytes.extend_from_slice(&size.to_be_bytes());
        bytes.extend_from_slice(&[8, 6, 0, 0, 0]);
        bytes
    }

    struct Fixture {
        dir: PathBuf,
        resources: PathBuf,
        jar: PathBuf,
        store: PathBuf,
        index: AssetIndex,
        index_bytes: Vec<u8>,
        extras: Vec<(String, Vec<u8>)>,
    }

    impl Fixture {
        fn new(name: &str) -> Fixture {
            let dir = std::env::temp_dir().join(format!(
                "twilight-horizon-prepare-{name}-{}-{}",
                std::process::id(),
                std::time::SystemTime::now()
                    .duration_since(std::time::UNIX_EPOCH)
                    .map(|d| d.subsec_nanos())
                    .unwrap_or(0)
            ));
            let _ = std::fs::remove_dir_all(&dir);
            std::fs::create_dir_all(&dir).unwrap();
            let jar = dir.join("client.jar");
            std::fs::write(
                &jar,
                jar_fixture(&[
                    ("assets/minecraft/textures/block/stone.png", b"stone"),
                    ("assets/minecraft/lang/en_us.json", b"{}"),
                    ("data/minecraft/worldgen/noise/x.json", b"noise"),
                    ("pack.png", b"icon"),
                    ("META-INF/MANIFEST.MF", b"ignored"),
                ]),
            )
            .unwrap();
            let extras: Vec<(String, Vec<u8>)> = REQUIRED
                .iter()
                .map(|(_, name)| {
                    (
                        (*name).to_owned(),
                        if name.contains("panorama_") && name.ends_with(".png") {
                            png(2)
                        } else {
                            name.as_bytes().to_vec()
                        },
                    )
                })
                .chain([
                    (
                        "minecraft/sounds/ambient/cave1.ogg".to_owned(),
                        b"OggS".to_vec(),
                    ),
                    (
                        "minecraft/sounds/ambient/cave2.ogg".to_owned(),
                        b"OggT".to_vec(),
                    ),
                    ("minecraft/lang/fr_fr.json".to_owned(), b"{}".to_vec()),
                    ("minecraft/lang/es_es.json".to_owned(), b"{}".to_vec()),
                ])
                .collect();
            let store = dir.join("store");
            let mut objects = HashMap::new();
            for (name, data) in &extras {
                let hash = sha1_hex(data);
                let path = store.join("objects").join(&hash[..2]).join(&hash);
                std::fs::create_dir_all(path.parent().unwrap()).unwrap();
                std::fs::write(&path, data).unwrap();
                objects.insert(
                    name.clone(),
                    AssetObject {
                        hash,
                        size: data.len() as i64,
                    },
                );
            }
            let index = AssetIndex {
                objects,
                is_virtual: Some(false),
                maps_to_resources: Some(false),
            };
            let index_bytes = serde_json::to_vec(&index).unwrap();
            Fixture {
                resources: dir.join("resources"),
                jar,
                store,
                index,
                index_bytes,
                extras,
                dir,
            }
        }

        async fn prepare(&self) -> Result<PrepareReport, HorizonError> {
            prepare_resources(&PrepareRequest {
                version: "26.3",
                resources: &self.resources,
                client_jar: &self.jar,
                asset_index_id: "26.3",
                asset_index_bytes: &self.index_bytes,
                index: &self.index,
                asset_store: &self.store,
            })
            .await
        }
    }

    impl Drop for Fixture {
        fn drop(&mut self) {
            let _ = std::fs::remove_dir_all(&self.dir);
        }
    }

    fn jar_fixture(entries: &[(&str, &[u8])]) -> Vec<u8> {
        jar(entries)
    }

    #[tokio::test]
    async fn prepares_the_layout_horizon_reads() {
        let fixture = Fixture::new("layout");
        let report = fixture.prepare().await.unwrap();
        assert_eq!(report.resource_files, 4);
        assert_eq!(report.indexed_files as usize, fixture.extras.len());
        assert_eq!(
            std::fs::read(
                fixture
                    .resources
                    .join("assets/minecraft/textures/block/stone.png")
            )
            .unwrap(),
            b"stone"
        );
        assert_eq!(
            std::fs::read(fixture.resources.join("assets/minecraft/sounds.json")).unwrap(),
            "minecraft/sounds.json".as_bytes()
        );
        assert_eq!(
            std::fs::read(fixture.resources.join("assets/pack.mcmeta")).unwrap(),
            b"pack.mcmeta"
        );
        assert!(
            fixture
                .resources
                .join("data/minecraft/worldgen/noise/x.json")
                .is_file()
        );
        assert!(fixture.resources.join("pack.png").is_file());
        assert!(!fixture.resources.join("META-INF").exists());
        assert_eq!(
            std::fs::read(fixture.resources.join(ASSET_INDEX_FILE)).unwrap(),
            fixture.index_bytes
        );
        let manifest: ResourcesManifest = serde_json::from_slice(
            &std::fs::read(fixture.resources.join(RESOURCES_MANIFEST_FILE)).unwrap(),
        )
        .unwrap();
        assert_eq!(manifest.schema, manifest::SCHEMA);
        assert_eq!(manifest.minecraft, "26.3");
        assert_eq!(manifest.asset_index.as_deref(), Some("26.3"));
        assert_eq!(
            manifest.client_sha256.as_deref(),
            Some(sha256_hex(&std::fs::read(&fixture.jar).unwrap()).as_str())
        );
        let status = manifest::check_resources(&fixture.resources, Some("26.3"));
        assert!(status.complete, "{status:?}");
        assert!(fixture.resources.join(PREPARE_STAMP_FILE).is_file());
    }

    #[tokio::test]
    async fn a_missing_indexed_extra_is_reported_before_writing_a_manifest() {
        let mut fixture = Fixture::new("missing");
        fixture.index.objects.remove("minecraft/font/unifont.zip");
        let error = fixture.prepare().await.unwrap_err();
        assert!(
            matches!(error, HorizonError::MissingResourceFile(ref name) if name == "minecraft/font/unifont.zip"),
            "{error}"
        );
        assert!(!fixture.resources.join(RESOURCES_MANIFEST_FILE).exists());
    }

    #[tokio::test]
    async fn preparation_is_repeatable_and_reuses_verified_objects() {
        let fixture = Fixture::new("repeat");
        fixture.prepare().await.unwrap();
        let second = fixture.prepare().await.unwrap();
        assert_eq!(second.reused_files as usize, fixture.extras.len());
        assert_eq!(second.indexed_files, 0);
        // Removing first breaks the hardlink; writing through it would also
        // corrupt the verified Mojang object the link points at.
        let damaged = fixture
            .resources
            .join("assets/minecraft/sounds/ambient/cave1.ogg");
        std::fs::remove_file(&damaged).unwrap();
        std::fs::write(&damaged, b"corrupt").unwrap();
        let third = fixture.prepare().await.unwrap();
        assert_eq!(third.indexed_files, 1);
        assert_eq!(
            std::fs::read(
                fixture
                    .resources
                    .join("assets/minecraft/sounds/ambient/cave1.ogg")
            )
            .unwrap(),
            b"OggS"
        );
    }

    #[test]
    fn client_resource_selection_matches_horizons_extraction() {
        assert!(is_client_resource("assets/minecraft/x"));
        assert!(is_client_resource("data/minecraft/x"));
        assert!(is_client_resource("pack.png"));
        assert!(!is_client_resource("META-INF/MANIFEST.MF"));
        assert!(!is_client_resource("version.json"));
        assert!(!is_client_resource("assets/minecraft/"));
        assert!(is_indexed_extra("pack.mcmeta"));
        assert!(is_indexed_extra("minecraft/sounds.json"));
        assert!(is_indexed_extra(
            "minecraft/textures/gui/title/background/panorama_0.png"
        ));
        assert!(!is_indexed_extra("minecraft/textures/block/stone.png"));
    }
}
