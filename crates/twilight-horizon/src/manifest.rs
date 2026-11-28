//! The prepared-resource contract Horizon documents (`horizon-resources.json` +
//! `horizon-prepare.json`) and the checks its launcher runs before a start.
//!
//! The layout is Horizon's, not a TwilightMC invention: `assets/` (including
//! the indexed sounds, languages, panorama, Unifont and built-in packs), the
//! `horizon-resources.json` manifest and the preparer stamp. The manifest is
//! intentionally tolerant on read: readers ignore fields they do not know, as
//! Horizon's Launch API requires.

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};

use crate::error::HorizonError;

/// The prepared resources' manifest, beside the `assets` folder.
pub const RESOURCES_MANIFEST_FILE: &str = "horizon-resources.json";
/// TwilightMC's compatibility alias for the same manifest. Horizon itself
/// reads [`RESOURCES_MANIFEST_FILE`]; older TwilightMC builds used this name.
pub const LEGACY_MANIFEST_FILE: &str = "horizon-assets.json";
/// The stamp naming the preparer output version that made the folder.
pub const PREPARE_STAMP_FILE: &str = "horizon-prepare.json";
/// The prepared files' layout version (`horizon-prepare`'s `SCHEMA`).
pub const SCHEMA: i64 = 7;
/// What this preparer makes (`horizon-prepare`'s `OUTPUT_VERSION`).
pub const OUTPUT_VERSION: u32 = 5;
/// The raw asset index snapshot Horizon's preparer keeps in the resources.
pub const ASSET_INDEX_FILE: &str = "asset-index.json";

/// `horizon-resources.json`: the fields a launcher reads before starting the
/// game. Fields TwilightMC does not fill are omitted (`skip_serializing_if`).
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct ResourcesManifest {
    /// Prepared files' layout, compared with [`SCHEMA`].
    pub schema: i64,
    /// Minecraft version the resources were prepared from.
    pub minecraft: String,
    /// SHA-256 of the client jar the resources were extracted from.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub client_sha256: Option<String>,
    /// The asset index id whose objects were overlaid.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub asset_index: Option<String>,
    /// How many client-jar resource files were written.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub resource_files: Option<u64>,
}

/// `horizon-prepare.json`: the preparer output version stamp.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct PrepareStamp {
    pub output_version: u32,
}

/// Where prepared resources live under a shared root:
/// `<root>/horizon-resources/<minecraft version>`.
pub fn resources_dir(root: &Path, minecraft: &str) -> PathBuf {
    root.join("horizon-resources").join(minecraft)
}

/// The full set of files `horizon-prepare --check` insists on, each with the
/// command that fills it. Base resources (client-jar `assets` and `data`) are
/// covered by the manifest; these are the indexed extras an interrupted import
/// can leave out.
pub const EXTRAS: [(&str, &str); 13] = [
    ("sounds", "assets/minecraft/sounds.json"),
    (
        "panorama",
        "assets/minecraft/textures/gui/title/background/panorama_0.png",
    ),
    (
        "panorama",
        "assets/minecraft/textures/gui/title/background/panorama_1.png",
    ),
    (
        "panorama",
        "assets/minecraft/textures/gui/title/background/panorama_2.png",
    ),
    (
        "panorama",
        "assets/minecraft/textures/gui/title/background/panorama_3.png",
    ),
    (
        "panorama",
        "assets/minecraft/textures/gui/title/background/panorama_4.png",
    ),
    (
        "panorama",
        "assets/minecraft/textures/gui/title/background/panorama_5.png",
    ),
    (
        "panorama",
        "assets/minecraft/textures/gui/title/background/panorama_overlay.png",
    ),
    ("fonts", "assets/minecraft/font/include/unifont.json"),
    ("fonts", "assets/minecraft/font/unifont.zip"),
    ("packs", "assets/minecraft/resourcepacks/programmer_art.zip"),
    ("packs", "assets/minecraft/resourcepacks/high_contrast.zip"),
    ("languages", "assets/pack.mcmeta"),
];

/// Result of checking a resources folder without Java or Mojang files.
#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct ResourceStatus {
    /// Every check passed.
    pub complete: bool,
    /// One human-readable line per gap, each naming the prepare command.
    pub issues: Vec<String>,
}

/// Checks `resources` the way `horizon-prepare --check` does: manifest schema,
/// pinned Minecraft version, preparer stamp and the indexed extras. It does not
/// re-hash file contents (a launcher that suspects damage prepares again).
pub fn check_resources(resources: &Path, minecraft: Option<&str>) -> ResourceStatus {
    let mut issues = Vec::new();
    let manifest_path = resources.join(RESOURCES_MANIFEST_FILE);
    let manifest = match std::fs::read(&manifest_path)
        .ok()
        .and_then(|bytes| serde_json::from_slice::<ResourcesManifest>(&bytes).ok())
    {
        Some(manifest) => Some(manifest),
        None => {
            issues.push(format!(
                "{} is not prepared: run `horizon-prepare` or launch once",
                resources.display()
            ));
            None
        }
    };
    if let Some(manifest) = &manifest {
        if manifest.schema != SCHEMA {
            issues.push(format!(
                "older resource layout (schema {}, this launcher reads {SCHEMA}): prepare again",
                manifest.schema
            ));
        }
        if let Some(expected) = minecraft
            && manifest.minecraft != expected
        {
            issues.push(format!(
                "prepared for Minecraft {}, this instance runs {expected}: prepare again",
                manifest.minecraft
            ));
        }
    }
    let stamp = std::fs::read(resources.join(PREPARE_STAMP_FILE))
        .ok()
        .and_then(|bytes| serde_json::from_slice::<PrepareStamp>(&bytes).ok());
    if stamp.as_ref().map(|stamp| stamp.output_version) != Some(OUTPUT_VERSION) {
        issues.push(format!(
            "made by output version {}, this launcher prepares {OUTPUT_VERSION}: prepare again",
            stamp
                .map(|stamp| stamp.output_version.to_string())
                .unwrap_or_else(|| "unknown".to_owned())
        ));
    }
    let mut missing = Vec::new();
    for (command, file) in EXTRAS {
        if !resources.join(file).is_file() {
            missing.push((command, file));
        }
    }
    for (command, file) in &missing {
        issues.push(format!("{file} missing: run `horizon-prepare {command}`"));
    }
    if panorama_is_placeholder(resources) {
        issues.push(
            "the title panorama faces are placeholders or mismatched: run `horizon-prepare panorama`"
                .to_owned(),
        );
    }
    ResourceStatus {
        complete: issues.is_empty(),
        issues,
    }
}

/// Mirrors `horizon-prepare`'s `lacks_panorama`: six equally sized, non-1x1
/// square PNG faces. The client jar ships 1x1 placeholders that a plain
/// existence check would accept.
fn panorama_is_placeholder(resources: &Path) -> bool {
    let background = resources.join("assets/minecraft/textures/gui/title/background");
    let mut expected = None;
    for face in 0..6 {
        let Ok(png) = std::fs::read(background.join(format!("panorama_{face}.png"))) else {
            return true;
        };
        if png.get(..16) != Some(b"\x89PNG\r\n\x1a\n\0\0\0\x0dIHDR") {
            return true;
        }
        let Some(dimensions) = png.get(16..24) else {
            return true;
        };
        let width =
            u32::from_be_bytes([dimensions[0], dimensions[1], dimensions[2], dimensions[3]]);
        let height =
            u32::from_be_bytes([dimensions[4], dimensions[5], dimensions[6], dimensions[7]]);
        if width <= 1 || width != height || expected.is_some_and(|size| size != width) {
            return true;
        }
        expected = Some(width);
    }
    false
}

/// `check_resources` as a result, for launch paths that must stop early.
pub fn require_resources(
    resources: &Path,
    minecraft: &str,
) -> Result<ResourceStatus, HorizonError> {
    let status = check_resources(resources, Some(minecraft));
    if status.complete {
        Ok(status)
    } else {
        Err(HorizonError::NotPrepared(status.issues.join("; ")))
    }
}

/// Writes the manifest with Horizon's two-space indentation and a final newline,
/// plus TwilightMC's [`LEGACY_MANIFEST_FILE`] alias for older builds.
pub fn write_manifest(resources: &Path, manifest: &ResourcesManifest) -> Result<(), HorizonError> {
    let bytes = serde_json::to_vec_pretty(manifest)?;
    write_json(&resources.join(RESOURCES_MANIFEST_FILE), &bytes)?;
    write_json(&resources.join(LEGACY_MANIFEST_FILE), &bytes)
}

/// Writes the preparer stamp beside the manifest.
pub fn write_stamp(resources: &Path) -> Result<(), HorizonError> {
    let stamp = PrepareStamp {
        output_version: OUTPUT_VERSION,
    };
    write_json(
        &resources.join(PREPARE_STAMP_FILE),
        &serde_json::to_vec_pretty(&stamp)?,
    )
}

fn write_json(path: &Path, bytes: &[u8]) -> Result<(), HorizonError> {
    if let Some(parent) = path.parent() {
        std::fs::create_dir_all(parent)?;
    }
    let mut with_newline = bytes.to_vec();
    if !with_newline.ends_with(b"\n") {
        with_newline.push(b'\n');
    }
    if std::fs::read(path).is_ok_and(|current| current == with_newline) {
        return Ok(());
    }
    std::fs::write(path, with_newline)?;
    Ok(())
}
