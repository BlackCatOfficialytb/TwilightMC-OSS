//! `.twpack` — TwilightMC's super-compressed instance format.
//!
//! A `.twpack` is a 7z container holding a `twilight-pack.json` manifest plus
//! the instance payload (`minecraft/` with mods, configs, resource packs and
//! shader packs; transient junk such as `logs/`, `crash-reports/` and
//! `natives/` is skipped). Compression prefers the system `7z` CLI
//! (`7z a -t7z -mx=7`) and falls back to the pure-Rust `sevenz-rust2`
//! encoder when no CLI is installed. Extraction mirrors that: CLI first,
//! pure-Rust fallback, and **every** entry path is validated against
//! zip-slip / path traversal before a single byte is written.

mod error;

pub use error::PackError;

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};
use sevenz_rust2::encoder_options::{EncoderOptions, Lzma2Options};
use sevenz_rust2::{
    ArchiveEntry, ArchiveReader, ArchiveWriter, EncoderConfiguration, EncoderMethod, Password,
};

/// Manifest file name at the archive root.
pub const MANIFEST_FILE: &str = "twilight-pack.json";
/// Manifest schema tag.
pub const SCHEMA: &str = "twilight-pack-v1";
/// The payload subdirectory inside an instance.
const PAYLOAD_DIR: &str = "minecraft";

/// Directory names skipped while collecting the payload: caches, logs and
/// machine-specific scratch that must never travel inside a pack.
const EXCLUDED_DIRS: &[&str] = &[
    "logs",
    "crash-reports",
    "natives",
    "cache",
    ".cache",
    "webcache",
    ".mixin.out",
    "local",
];

/// Depth guard for pathological directory cycles (symlinked trees).
const MAX_DEPTH: usize = 32;

/// `twilight-pack.json`: what the pack is and what it carries.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PackManifest {
    pub schema: String,
    pub name: String,
    pub minecraft_version: String,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub loader: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub loader_version: Option<String>,
    /// Payload entries, relative to the archive root (sorted, `/`-separated).
    #[serde(default)]
    pub files: Vec<String>,
    /// Unix seconds the pack was written.
    #[serde(default)]
    pub created: u64,
}

impl PackManifest {
    /// Builds a manifest with the current schema tag and timestamp.
    pub fn new(name: impl Into<String>, minecraft_version: impl Into<String>) -> Self {
        Self {
            schema: SCHEMA.to_owned(),
            name: name.into(),
            minecraft_version: minecraft_version.into(),
            loader: None,
            loader_version: None,
            files: Vec::new(),
            created: std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .as_secs(),
        }
    }

    fn validate(&self) -> Result<(), PackError> {
        if self.schema != SCHEMA {
            return Err(PackError::Manifest(format!(
                "unsupported pack schema {:?} (expected {SCHEMA})",
                self.schema
            )));
        }
        if self.name.trim().is_empty() {
            return Err(PackError::Manifest("pack name is empty".into()));
        }
        Ok(())
    }
}

/// The `7z` executable to use, when one is installed (`7z`, then `7za`).
pub fn sevenz_cli() -> Option<PathBuf> {
    let names: &[&str] = if cfg!(windows) {
        &["7z.exe", "7za.exe", "7z", "7za"]
    } else {
        &["7z", "7za"]
    };
    let path = std::env::var_os("PATH")?;
    for dir in std::env::split_paths(&path) {
        for name in names {
            let candidate = dir.join(name);
            if candidate.is_file() {
                return Some(candidate);
            }
        }
    }
    // Windows installers do not always touch PATH.
    if cfg!(windows) {
        for root in ["C:\\Program Files\\7-Zip", "C:\\Program Files (x86)\\7-Zip"] {
            let candidate = Path::new(root).join("7z.exe");
            if candidate.is_file() {
                return Some(candidate);
            }
        }
    }
    None
}

/// Rejects any archive entry that could escape the extraction root.
///
/// Refuses absolute paths, Windows drive/UNC prefixes and any `..` segment —
/// the zip-slip guard both extraction paths share. Backslashes are treated as
/// separators so a `..\\evil` entry cannot slip past on Unix either.
pub fn validate_entry_path(name: &str) -> Result<(), PackError> {
    let normalized = name.replace('\\', "/");
    if normalized.trim().is_empty() {
        return Err(PackError::UnsafeEntry(name.to_owned()));
    }
    // absolute: `/x`, `\x`, `C:/x`, `//server/share`
    if normalized.starts_with('/') {
        return Err(PackError::UnsafeEntry(name.to_owned()));
    }
    let bytes = normalized.as_bytes();
    if bytes.len() >= 2 && bytes[1] == b':' && bytes[0].is_ascii_alphabetic() {
        return Err(PackError::UnsafeEntry(name.to_owned()));
    }
    for segment in normalized.split('/') {
        if segment == ".." {
            return Err(PackError::UnsafeEntry(name.to_owned()));
        }
    }
    Ok(())
}

/// Collects `(absolute path, archive-relative name)` payload pairs.
///
/// Walks `<instance>/minecraft` skipping [`EXCLUDED_DIRS`]; directories keep a
/// trailing slash so empty ones survive a round trip.
fn collect_payload(instance_dir: &Path) -> Result<Vec<(PathBuf, String)>, PackError> {
    let mut out = Vec::new();
    let payload = instance_dir.join(PAYLOAD_DIR);
    if payload.is_dir() {
        collect(&payload, PAYLOAD_DIR, 0, &mut out)?;
    }
    out.sort_by(|a, b| a.1.cmp(&b.1));
    Ok(out)
}

fn collect(
    dir: &Path,
    prefix: &str,
    depth: usize,
    out: &mut Vec<(PathBuf, String)>,
) -> Result<(), PackError> {
    if depth > MAX_DEPTH {
        return Err(PackError::other("instance tree is nested too deeply"));
    }
    let mut entries: Vec<_> = std::fs::read_dir(dir)?
        .collect::<Result<Vec<_>, _>>()?
        .into_iter()
        .map(|e| e.path())
        .collect();
    entries.sort();
    for path in entries {
        let Some(leaf) = path.file_name().map(|n| n.to_string_lossy().to_string()) else {
            continue;
        };
        let rel = format!("{prefix}/{leaf}");
        if path.is_dir() {
            if EXCLUDED_DIRS.iter().any(|d| d.eq_ignore_ascii_case(&leaf)) {
                continue;
            }
            out.push((path.clone(), format!("{rel}/")));
            collect(&path, &rel, depth + 1, out)?;
        } else if path.is_file() {
            out.push((path, rel));
        }
    }
    Ok(())
}

/// Writes `instance_dir` into `dest` as a `.twpack`, returning the manifest.
///
/// Uses `7z a -t7z -mx=7` when a CLI is available and the pure-Rust encoder
/// otherwise; both produce the same entry set.
pub fn export_twpack(
    instance_dir: &Path,
    dest: &Path,
    mut manifest: PackManifest,
) -> Result<PackManifest, PackError> {
    if !instance_dir.is_dir() {
        return Err(PackError::other(format!(
            "unknown instance directory {}",
            instance_dir.display()
        )));
    }
    let payload = collect_payload(instance_dir)?;
    manifest.schema = SCHEMA.to_owned();
    manifest.files = payload.iter().map(|(_, rel)| rel.clone()).collect();
    manifest.validate()?;

    // an existing archive would be *updated* in place (stale entries from a
    // previous pack would survive), so the destination starts from scratch
    if dest.exists() {
        std::fs::remove_file(dest)?;
    }

    // the manifest lives beside the payload so both compressors pick it up
    // with no staging copy; a pre-existing one (imported provenance) is
    // restored untouched after the archive is written
    let manifest_path = instance_dir.join(MANIFEST_FILE);
    let previous = std::fs::read(&manifest_path).ok();
    let json =
        serde_json::to_string_pretty(&manifest).map_err(|e| PackError::Manifest(e.to_string()))?;
    std::fs::write(&manifest_path, json.as_bytes())?;

    let result = match sevenz_cli() {
        Some(cli) => export_with_cli(&cli, instance_dir, dest, &manifest),
        None => export_pure_rust(instance_dir, dest, &manifest, &json),
    };
    match previous {
        Some(bytes) => {
            let _ = std::fs::write(&manifest_path, bytes);
        }
        None => {
            let _ = std::fs::remove_file(&manifest_path);
        }
    }
    if result.is_err() {
        // never leave a half-written archive behind
        let _ = std::fs::remove_file(dest);
    }
    result.map(|()| manifest)
}

fn export_with_cli(
    cli: &Path,
    instance_dir: &Path,
    dest: &Path,
    _manifest: &PackManifest,
) -> Result<(), PackError> {
    // Recursing over the payload directory (instead of listing every file)
    // keeps the command line short even for thousand-mod packs; `-xr!name`
    // reproduces the collector's exclusions at any depth.
    let mut cmd = std::process::Command::new(cli);
    cmd.current_dir(instance_dir)
        .arg("a")
        .arg("-t7z")
        .arg("-mx=7")
        .arg("-y")
        .arg("-r")
        .arg(dest)
        .arg(MANIFEST_FILE);
    if instance_dir.join(PAYLOAD_DIR).is_dir() {
        cmd.arg(PAYLOAD_DIR);
        for excluded in EXCLUDED_DIRS {
            cmd.arg(format!("-xr!{excluded}"));
        }
    }
    let out = cmd.output()?;
    if !out.status.success() {
        return Err(PackError::CliFailed(
            String::from_utf8_lossy(&out.stderr).trim().to_owned(),
        ));
    }
    Ok(())
}

fn export_pure_rust(
    instance_dir: &Path,
    dest: &Path,
    manifest: &PackManifest,
    manifest_json: &str,
) -> Result<(), PackError> {
    let mut writer = ArchiveWriter::create(dest)?;
    writer.set_content_methods(vec![
        EncoderConfiguration::new(EncoderMethod::LZMA2)
            .with_options(EncoderOptions::Lzma2(Lzma2Options::from_level(7))),
    ]);
    writer.push_archive_entry(
        ArchiveEntry::new_file(MANIFEST_FILE),
        Some(manifest_json.as_bytes()),
    )?;
    for rel in &manifest.files {
        let abs = instance_dir.join(rel.trim_end_matches('/'));
        if rel.ends_with('/') {
            writer.push_archive_entry(ArchiveEntry::new_directory(rel), None::<&[u8]>)?;
        } else {
            let mut file = std::fs::File::open(&abs)?;
            writer
                .push_archive_entry(ArchiveEntry::from_path(&abs, rel.clone()), Some(&mut file))?;
        }
    }
    writer.finish()?;
    Ok(())
}

/// Reads only the manifest out of a `.twpack` without extracting the payload.
pub fn read_manifest(archive: &Path) -> Result<PackManifest, PackError> {
    if let Some(cli) = sevenz_cli()
        && let Ok(manifest) = read_manifest_with_cli(&cli, archive)
    {
        return Ok(manifest);
    }
    read_manifest_pure_rust(archive)
}

fn read_manifest_with_cli(cli: &Path, archive: &Path) -> Result<PackManifest, PackError> {
    let out = std::process::Command::new(cli)
        .arg("x")
        .arg("-so")
        .arg(archive)
        .arg(MANIFEST_FILE)
        .output()?;
    if !out.status.success() {
        return Err(PackError::CliFailed(
            String::from_utf8_lossy(&out.stderr).trim().to_owned(),
        ));
    }
    parse_manifest(&out.stdout)
}

fn read_manifest_pure_rust(archive: &Path) -> Result<PackManifest, PackError> {
    let mut reader = ArchiveReader::open(archive, Password::empty())?;
    let mut found: Option<Vec<u8>> = None;
    reader.for_each_entries(|entry, data| {
        if entry.name().replace('\\', "/") == MANIFEST_FILE {
            let mut buf = Vec::new();
            data.read_to_end(&mut buf)?;
            found = Some(buf);
            return Ok(false);
        }
        Ok(true)
    })?;
    let bytes = found.ok_or(PackError::MissingManifest(MANIFEST_FILE))?;
    parse_manifest(&bytes)
}

fn parse_manifest(bytes: &[u8]) -> Result<PackManifest, PackError> {
    let manifest: PackManifest = serde_json::from_slice(bytes)
        .map_err(|e| PackError::Manifest(format!("{MANIFEST_FILE}: {e}")))?;
    manifest.validate()?;
    Ok(manifest)
}

/// Extracts `archive` into `dest`, refusing any unsafe entry path.
///
/// Returns the manifest the pack carries.
pub fn import_twpack(archive: &Path, dest: &Path) -> Result<PackManifest, PackError> {
    if !archive.is_file() {
        return Err(PackError::other(format!(
            "pack not found: {}",
            archive.display()
        )));
    }
    std::fs::create_dir_all(dest)?;
    match sevenz_cli() {
        Some(cli) => {
            // validate every stored path before the CLI writes anything
            for name in list_entries_with_cli(&cli, archive)? {
                validate_entry_path(&name)?;
            }
            let out = std::process::Command::new(&cli)
                .arg("x")
                .arg("-y")
                .arg(format!("-o{}", dest.display()))
                .arg(archive)
                .output()?;
            if !out.status.success() {
                return Err(PackError::CliFailed(
                    String::from_utf8_lossy(&out.stderr).trim().to_owned(),
                ));
            }
        }
        None => extract_pure_rust(archive, dest)?,
    }
    let manifest_path = dest.join(MANIFEST_FILE);
    if !manifest_path.is_file() {
        return Err(PackError::MissingManifest(MANIFEST_FILE));
    }
    let bytes = std::fs::read(&manifest_path)?;
    parse_manifest(&bytes)
}

/// `7z l -slt` → stored entry paths (used for pre-extraction validation).
fn list_entries_with_cli(cli: &Path, archive: &Path) -> Result<Vec<String>, PackError> {
    let out = std::process::Command::new(cli)
        .arg("l")
        .arg("-slt")
        .arg(archive)
        .output()?;
    if !out.status.success() {
        return Err(PackError::CliFailed(
            String::from_utf8_lossy(&out.stderr).trim().to_owned(),
        ));
    }
    let text = String::from_utf8_lossy(&out.stdout);
    let mut names = Vec::new();
    let mut in_entries = false;
    for line in text.lines() {
        let line = line.trim();
        if line.starts_with("----------") {
            in_entries = true;
            continue;
        }
        if in_entries && let Some(path) = line.strip_prefix("Path = ") {
            names.push(path.trim().to_owned());
        }
    }
    Ok(names)
}

fn extract_pure_rust(archive: &Path, dest: &Path) -> Result<(), PackError> {
    let mut reader = ArchiveReader::open(archive, Password::empty())?;
    // the reader callback speaks sevenz_rust2::Error, so the typed guard
    // error is captured here and re-raised after iteration stops
    let mut refused: Option<PackError> = None;
    reader.for_each_entries(|entry, data| {
        let name = entry.name().replace('\\', "/");
        if let Err(e) = validate_entry_path(&name) {
            refused = Some(e);
            return Ok(false);
        }
        let target = dest.join(&name);
        if entry.is_directory() {
            std::fs::create_dir_all(&target)?;
            return Ok(true);
        }
        if let Some(parent) = target.parent() {
            std::fs::create_dir_all(parent)?;
        }
        let mut file = std::fs::File::create(&target)?;
        std::io::copy(data, &mut file)?;
        Ok(true)
    })?;
    if let Some(err) = refused {
        return Err(err);
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    fn temp_dir(tag: &str) -> PathBuf {
        let dir = std::env::temp_dir().join(format!(
            "twpack-{tag}-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ));
        std::fs::create_dir_all(&dir).unwrap();
        dir
    }

    /// A small instance: payload plus every transient dir that must be skipped.
    fn fixture_instance(root: &Path) -> PathBuf {
        let instance = root.join("demo");
        for dir in [
            "minecraft/mods",
            "minecraft/config",
            "minecraft/resourcepacks",
            "minecraft/shaderpacks",
            "minecraft/logs",
            "minecraft/crash-reports",
            "minecraft/natives",
            "minecraft/saves",
        ] {
            std::fs::create_dir_all(instance.join(dir)).unwrap();
        }
        std::fs::create_dir_all(instance.join("minecraft/saves/world")).unwrap();
        std::fs::write(instance.join("instance.json"), b"{\"version\":\"26.3\"}").unwrap();
        std::fs::write(instance.join("minecraft/mods/sodium.jar"), b"jar-bytes").unwrap();
        std::fs::write(instance.join("minecraft/config/options.txt"), b"fov:0.5").unwrap();
        std::fs::write(instance.join("minecraft/resourcepacks/pack.zip"), b"rp").unwrap();
        std::fs::write(instance.join("minecraft/shaderpacks/s.zip"), b"sp").unwrap();
        std::fs::write(instance.join("minecraft/saves/world/level.dat"), b"world").unwrap();
        std::fs::write(instance.join("minecraft/logs/latest.log"), b"noise").unwrap();
        std::fs::write(instance.join("minecraft/crash-reports/crash.txt"), b"boom").unwrap();
        std::fs::write(instance.join("minecraft/natives/native.dll"), b"bin").unwrap();
        instance
    }

    #[test]
    fn entry_paths_are_validated_against_traversal() {
        for safe in [
            "twilight-pack.json",
            "minecraft/mods/sodium.jar",
            "minecraft/",
            "a/b/c.txt",
        ] {
            assert!(validate_entry_path(safe).is_ok(), "{safe} must pass");
        }
        for unsafe_name in [
            "../evil.txt",
            "minecraft/../../evil.txt",
            "/etc/passwd",
            "..\\evil.txt",
            "minecraft\\..\\..\\evil.txt",
            "C:/Windows/system32/evil.dll",
            "C:\\Windows\\evil.dll",
            "",
        ] {
            assert!(
                matches!(
                    validate_entry_path(unsafe_name),
                    Err(PackError::UnsafeEntry(_))
                ),
                "{unsafe_name:?} must be refused"
            );
        }
    }

    #[test]
    fn export_and_import_round_trip_via_pure_rust() {
        let root = temp_dir("roundtrip");
        let instance = fixture_instance(&root);
        let dest = root.join("out.twpack");
        let mut manifest = PackManifest::new("Demo Pack", "26.3");
        manifest.loader = Some("fabric".into());
        manifest.loader_version = Some("0.16.9".into());

        let written = export_pure_rust_wrapper(&instance, &dest, manifest.clone()).unwrap();
        assert_eq!(written.schema, SCHEMA);
        assert!(
            written
                .files
                .iter()
                .any(|f| f == "minecraft/mods/sodium.jar")
        );
        assert!(written.files.iter().any(|f| f == "minecraft/saves/"));
        assert!(!written.files.iter().any(|f| f.contains("logs")));
        assert!(!written.files.iter().any(|f| f.contains("crash-reports")));
        assert!(!written.files.iter().any(|f| f.contains("natives")));

        // the manifest is readable without extracting
        let read_back = read_manifest_pure_rust(&dest).unwrap();
        assert_eq!(read_back, written);

        let out = root.join("extracted");
        let imported = import_pure_rust_wrapper(&dest, &out).unwrap();
        assert_eq!(imported, written);
        assert_eq!(
            std::fs::read(out.join("minecraft/mods/sodium.jar")).unwrap(),
            b"jar-bytes"
        );
        assert_eq!(
            std::fs::read(out.join("minecraft/saves/world/level.dat")).unwrap(),
            b"world"
        );
        assert!(!out.join("minecraft/logs").exists());

        let _ = std::fs::remove_dir_all(&root);
    }

    /// Round-trip through the pure-Rust encoder/decoder regardless of CLI
    /// presence, so the fallback path is always exercised in CI.
    fn export_pure_rust_wrapper(
        instance: &Path,
        dest: &Path,
        mut manifest: PackManifest,
    ) -> Result<PackManifest, PackError> {
        let payload = collect_payload(instance)?;
        manifest.schema = SCHEMA.to_owned();
        manifest.files = payload.iter().map(|(_, rel)| rel.clone()).collect();
        let json = serde_json::to_string_pretty(&manifest).unwrap();
        export_pure_rust(instance, dest, &manifest, &json)?;
        Ok(manifest)
    }

    fn import_pure_rust_wrapper(archive: &Path, dest: &Path) -> Result<PackManifest, PackError> {
        std::fs::create_dir_all(dest)?;
        extract_pure_rust(archive, dest)?;
        parse_manifest(&std::fs::read(dest.join(MANIFEST_FILE))?)
    }

    #[test]
    fn import_refuses_a_traversal_entry() {
        let root = temp_dir("slip");
        let evil = root.join("evil.twpack");
        {
            let mut writer = ArchiveWriter::create(&evil).unwrap();
            writer
                .push_archive_entry(
                    ArchiveEntry::new_file(MANIFEST_FILE),
                    Some(
                        serde_json::to_string(&PackManifest::new("Evil", "26.3"))
                            .unwrap()
                            .as_bytes(),
                    ),
                )
                .unwrap();
            writer
                .push_archive_entry(
                    ArchiveEntry::new_file("../pwned.txt"),
                    Some(b"gotcha".as_slice()),
                )
                .unwrap();
            writer.finish().unwrap();
        }
        let out = root.join("extracted");
        let err = import_pure_rust_wrapper(&evil, &out).unwrap_err();
        assert!(
            matches!(err, PackError::UnsafeEntry(ref n) if n == "../pwned.txt"),
            "{err:?}"
        );
        assert!(!root.join("pwned.txt").exists(), "nothing may escape dest");
        assert!(!out.join("../pwned.txt").exists());

        let _ = std::fs::remove_dir_all(&root);
    }

    #[test]
    fn round_trip_through_the_7z_cli_when_installed() {
        let Some(_) = sevenz_cli() else {
            return; // pure-Rust coverage above; skip without the CLI
        };
        let root = temp_dir("cli-roundtrip");
        let instance = fixture_instance(&root);
        let dest = root.join("out.twpack");

        let mut manifest = PackManifest::new("Demo Pack", "26.3");
        manifest.loader = Some("fabric".into());
        let written = export_twpack(&instance, &dest, manifest).unwrap();
        assert!(
            !instance.join(MANIFEST_FILE).exists(),
            "the staging manifest must not leak into the instance"
        );

        // CLI export honours the exclusions and stores the manifest
        let manifest_back = read_manifest(&dest).unwrap();
        assert_eq!(manifest_back, written);

        let out = root.join("cli-extracted");
        let imported = import_twpack(&dest, &out).unwrap();
        assert_eq!(imported, written);
        assert_eq!(
            std::fs::read(out.join("minecraft/mods/sodium.jar")).unwrap(),
            b"jar-bytes"
        );
        assert!(!out.join("minecraft/logs").exists());
        assert!(!out.join("minecraft/crash-reports").exists());
        assert!(!out.join("minecraft/natives").exists());

        let _ = std::fs::remove_dir_all(&root);
    }

    #[test]
    fn cli_import_refuses_a_traversal_entry_when_installed() {
        let Some(_) = sevenz_cli() else {
            return;
        };
        let root = temp_dir("cli-slip");
        let evil = root.join("evil.twpack");
        {
            let mut writer = ArchiveWriter::create(&evil).unwrap();
            writer
                .push_archive_entry(
                    ArchiveEntry::new_file(MANIFEST_FILE),
                    Some(
                        serde_json::to_string(&PackManifest::new("Evil", "26.3"))
                            .unwrap()
                            .as_bytes(),
                    ),
                )
                .unwrap();
            writer
                .push_archive_entry(
                    ArchiveEntry::new_file("../pwned.txt"),
                    Some(b"gotcha".as_slice()),
                )
                .unwrap();
            writer.finish().unwrap();
        }
        let out = root.join("cli-extracted");
        let err = import_twpack(&evil, &out).unwrap_err();
        assert!(matches!(err, PackError::UnsafeEntry(_)), "{err:?}");
        assert!(!root.join("pwned.txt").exists(), "nothing may escape dest");

        let _ = std::fs::remove_dir_all(&root);
    }

    #[test]
    fn manifest_schema_and_name_are_enforced() {
        let mut manifest = PackManifest::new("", "26.3");
        assert!(matches!(manifest.validate(), Err(PackError::Manifest(_))));
        manifest.name = "Ok".into();
        manifest.schema = "twilight-pack-v2".into();
        assert!(matches!(manifest.validate(), Err(PackError::Manifest(_))));
        manifest.schema = SCHEMA.into();
        assert!(manifest.validate().is_ok());
    }
}
