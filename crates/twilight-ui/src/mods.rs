// Mods management: listing, enable/disable (rename), delete and import of
// `.jar` files inside an instance's `minecraft/mods` directory. Enabled mods
// live as `<name>.jar`; disabled ones as `<name>.jar.disabled`. The legacy
// Milestone-1 `<name>.disabled` twin-flag form is still read and is upgraded
// to the canonical pair on the next toggle.

use std::path::{Path, PathBuf};

use serde::Serialize;
use tauri::AppHandle;

use crate::accounts::{load_settings, settings_path};
use crate::instances::{FileEntry, instances_root, list_dir_files, validate_instance_id};
use crate::storage::shared_root;

/// The shared CAS root when the user enabled zero-copy linking
/// (`use_cas_links`), else `None`.
pub(crate) async fn cas_root_if_enabled(app: &AppHandle) -> Result<Option<PathBuf>, String> {
    let settings = load_settings(&settings_path(app).await?).await;
    if !settings.use_cas_links {
        return Ok(None);
    }
    Ok(Some(shared_root(app).await?.join("cas")))
}

/// Deduplicates an existing file: ingests it into the CAS and atomically
/// replaces `dest` with a hardlink/symlink (best-effort copy fallback).
/// Safe when the blob is already present — the result is the same either way.
pub(crate) async fn cas_dedupe_dest(cas_root: &Path, dest: &Path) -> Result<(), String> {
    let Some(meta) = tokio::fs::metadata(dest).await.ok().filter(|m| m.is_file()) else {
        return Ok(()); // nothing to dedupe
    };
    if meta.len() == 0 {
        return Ok(());
    }
    let ingest = twilight_cas::ingest_file(cas_root, dest)
        .await
        .map_err(|e| e.to_string())?;
    let blob = twilight_cas::blob_path(cas_root, &ingest.hash);
    if !tokio::fs::try_exists(&blob)
        .await
        .map_err(|e| e.to_string())?
    {
        return Ok(());
    }
    if tokio::fs::try_exists(dest)
        .await
        .map_err(|e| e.to_string())?
    {
        tokio::fs::remove_file(dest)
            .await
            .map_err(|e| e.to_string())?;
    }
    if twilight_cas::link_or_copy(&blob, dest).await.is_err() {
        tokio::fs::copy(&blob, dest)
            .await
            .map_err(|e| e.to_string())?;
    }
    Ok(())
}

/// One installed mod file. `filename` is the exact on-disk name (with its
/// state suffix) that the toggle/delete IPC round-trips unchanged; the table
/// shows `display_name`.
#[derive(Debug, Clone, Serialize)]
pub struct ModEntry {
    /// Exact on-disk file name, e.g. `sodium.jar` or `sodium.jar.disabled`.
    pub filename: String,
    /// Filename with the `.jar` / `.jar.disabled` (or legacy `.disabled`)
    /// suffix stripped.
    pub display_name: String,
    /// True while the launcher picks the file up (`*.jar` on disk).
    pub is_enabled: bool,
    /// File size in bytes.
    pub file_size: u64,
}

/// Splits a mods-dir file name into its display name and enabled state;
/// files that are not mod jars return `None`.
fn classify(file_name: &str) -> Option<(String, bool)> {
    // order matters: the canonical `.jar.disabled` twin must win over `.jar`
    file_name
        .strip_suffix(".jar.disabled")
        .map(|base| (base.to_owned(), false))
        .or_else(|| {
            file_name
                .strip_suffix(".jar")
                .map(|base| (base.to_owned(), true))
        })
        .or_else(|| {
            // legacy `<name>.disabled` twin-flag form
            file_name
                .strip_suffix(".disabled")
                .map(|base| (base.to_owned(), false))
        })
}

/// Filenames are file leaves inside the mods dir; reject anything that could
/// reach out of it or does not look like a mod archive copy.
fn validate_mod_filename(filename: &str) -> Result<(), String> {
    if filename.is_empty()
        || filename.contains('/')
        || filename.contains('\\')
        || filename.contains("..")
    {
        return Err("invalid mod filename".into());
    }
    if !filename.ends_with(".jar") && !filename.ends_with(".disabled") {
        return Err("mods live as .jar / .jar.disabled files".into());
    }
    Ok(())
}

pub(crate) async fn mods_dir(root: &Path, instance_id: &str) -> Result<PathBuf, String> {
    let dir = root.join(instance_id).join("minecraft").join("mods");
    tokio::fs::create_dir_all(&dir)
        .await
        .map_err(|e| e.to_string())?;
    Ok(dir)
}

async fn list_mods_in(dir: &Path) -> Result<Vec<ModEntry>, String> {
    let mut mods = Vec::new();
    let mut entries = tokio::fs::read_dir(dir).await.map_err(|e| e.to_string())?;
    while let Some(entry) = entries.next_entry().await.map_err(|e| e.to_string())? {
        let path = entry.path();
        if !path.is_file() {
            continue;
        }
        let file_name = entry.file_name().to_string_lossy().to_string();
        let Some((display_name, is_enabled)) = classify(&file_name) else {
            continue;
        };
        let file_size = path.metadata().map(|meta| meta.len()).unwrap_or_default();
        mods.push(ModEntry {
            filename: file_name,
            display_name,
            is_enabled,
            file_size,
        });
    }
    mods.sort_by(|a, b| {
        a.display_name
            .to_ascii_lowercase()
            .cmp(&b.display_name.to_ascii_lowercase())
    });
    Ok(mods)
}

/// Renames between `x.jar` and `x.jar.disabled`. Passing an already-target
/// filename is a no-op; the legacy `x.disabled` form upgrades to `x.jar`.
async fn toggle_mod_in(dir: &Path, filename: &str, enable: bool) -> Result<(), String> {
    validate_mod_filename(filename)?;
    let Some((base, _)) = classify(filename) else {
        return Err(format!("not a mod file: {filename}"));
    };
    let to = if enable {
        format!("{base}.jar")
    } else {
        format!("{base}.jar.disabled")
    };
    if filename == to {
        return Ok(());
    }
    let from = dir.join(filename);
    if !from.is_file() {
        return Err(format!("mod {filename} is not present"));
    }
    tokio::fs::rename(from, dir.join(to))
        .await
        .map_err(|e| e.to_string())
}

/// Lists the instance's mods (disabled twins included) with sizes.
#[tauri::command]
pub async fn list_instance_mods(
    app: AppHandle,
    instance_id: String,
) -> Result<Vec<ModEntry>, String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    list_mods_in(&mods_dir(&root, &instance_id).await?).await
}

/// Enables (`x.jar`) or disables (`x.jar.disabled`) a listed mod file.
#[tauri::command]
pub async fn toggle_mod(
    app: AppHandle,
    instance_id: String,
    filename: String,
    enable: bool,
) -> Result<(), String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    toggle_mod_in(&mods_dir(&root, &instance_id).await?, &filename, enable).await
}

/// Removes a listed mod file from the instance mods dir for good.
#[tauri::command]
pub async fn delete_mod(
    app: AppHandle,
    instance_id: String,
    filename: String,
) -> Result<(), String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    delete_mod_in(&mods_dir(&root, &instance_id).await?, &filename).await
}

async fn delete_mod_in(dir: &Path, filename: &str) -> Result<(), String> {
    validate_mod_filename(filename)?;
    let file = dir.join(filename);
    if !file.is_file() {
        return Err(format!("mod {filename} is not present"));
    }
    tokio::fs::remove_file(file)
        .await
        .map_err(|e| e.to_string())
}

/// Copies an external `.jar` into the instance mods dir (enabled on arrival).
#[tauri::command]
pub async fn import_mod(
    app: AppHandle,
    instance_id: String,
    jar_path: String,
) -> Result<(), String> {
    validate_instance_id(&instance_id)?;
    let src = PathBuf::from(&jar_path);
    if !src.is_file() {
        return Err(format!("file not found: {jar_path}"));
    }
    let Some(file_name) = src.file_name().map(|n| n.to_string_lossy().to_string()) else {
        return Err("invalid mod file name".into());
    };
    if !file_name.to_ascii_lowercase().ends_with(".jar") {
        return Err("mod files must be .jar archives".into());
    }
    let dest = mods_dir(&instances_root(&app).await?, &instance_id)
        .await?
        .join(&file_name);
    if dest.exists() {
        return Err(format!("mod {file_name} already exists"));
    }
    if let Some(cas_root) = cas_root_if_enabled(&app).await? {
        // ingest into CAS first, then install the jar as a hardlink — the
        // source copy never duplicates into the mods dir.
        let ingest = twilight_cas::ingest_file(&cas_root, &src)
            .await
            .map_err(|e| e.to_string())?;
        let blob = twilight_cas::blob_path(&cas_root, &ingest.hash);
        if twilight_cas::link_or_copy(&blob, &dest).await.is_err() {
            tokio::fs::copy(&src, &dest)
                .await
                .map_err(|e| e.to_string())?;
        }
    } else {
        tokio::fs::copy(&src, &dest)
            .await
            .map_err(|e| e.to_string())?;
    }
    Ok(())
}

/// Sub-directory of a pack kind (`resourcepack` | `shader`).
pub(crate) fn packs_dir_name(project_type: &str) -> Result<&'static str, String> {
    match project_type {
        "resourcepack" => Ok("resourcepacks"),
        "shader" => Ok("shaderpacks"),
        other => Err(format!("unsupported pack kind {other:?}")),
    }
}

/// Pack file names must stay plain single `.zip` components.
fn validate_pack_filename(filename: &str) -> Result<(), String> {
    if filename.is_empty()
        || filename.contains('/')
        || filename.contains('\\')
        || filename.contains("..")
        || filename.contains(':')
    {
        return Err("invalid pack filename".into());
    }
    if !filename.to_ascii_lowercase().ends_with(".zip") {
        return Err("packs live as .zip archives".into());
    }
    Ok(())
}

async fn packs_dir(root: &Path, instance_id: &str, project_type: &str) -> Result<PathBuf, String> {
    let dir = root
        .join(instance_id)
        .join("minecraft")
        .join(packs_dir_name(project_type)?);
    tokio::fs::create_dir_all(&dir)
        .await
        .map_err(|e| e.to_string())?;
    Ok(dir)
}

/// Lists the instance's pack archives (`resourcepacks` or `shaderpacks`),
/// newest-first. A missing directory is an empty list.
#[tauri::command]
pub async fn list_instance_packs(
    app: AppHandle,
    instance_id: String,
    project_type: String,
) -> Result<Vec<FileEntry>, String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    let dir = packs_dir(&root, &instance_id, &project_type).await?;
    list_dir_files(&dir, &["zip"]).await
}

/// Removes a listed pack archive from the instance for good.
#[tauri::command]
pub async fn delete_pack(
    app: AppHandle,
    instance_id: String,
    project_type: String,
    file_name: String,
) -> Result<(), String> {
    validate_instance_id(&instance_id)?;
    validate_pack_filename(&file_name)?;
    let root = instances_root(&app).await?;
    let file = packs_dir(&root, &instance_id, &project_type)
        .await?
        .join(&file_name);
    if !file.is_file() {
        return Err(format!("pack {file_name} is not present"));
    }
    tokio::fs::remove_file(file)
        .await
        .map_err(|e| e.to_string())
}

/// Result of importing one pack archive.
#[derive(Debug, Clone, PartialEq, Eq, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PackImportOutcome {
    /// True when the archive was copied into the instance.
    pub imported: bool,
    /// True when the archive contains `.ttf` (or `assets/*/font/` `.ttc`/`.otf`).
    pub contains_truetype_fonts: bool,
    /// Matching archive entry names, in central-directory order.
    pub font_entries: Vec<String>,
    /// True when the UI must ask the user before this pack is copied.
    pub requires_confirmation: bool,
}

impl PackImportOutcome {
    fn from_scan(imported: bool, scan: twilight_modrinth::ResourcePackFontScan) -> Self {
        Self {
            imported,
            contains_truetype_fonts: scan.contains_truetype_fonts,
            font_entries: scan.font_entries,
            requires_confirmation: false,
        }
    }

    fn needs_confirmation(scan: twilight_modrinth::ResourcePackFontScan) -> Self {
        Self {
            imported: false,
            contains_truetype_fonts: scan.contains_truetype_fonts,
            font_entries: scan.font_entries,
            requires_confirmation: true,
        }
    }
}

/// A font-bearing pack needs explicit confirmation only for resource packs on
/// `>= 1.20.5`, the versions that load fonts through the vulnerable FreeType
/// path. Shader packs never reach the font renderer.
fn pack_font_confirmation_required(
    instance_version: &str,
    project_type: &str,
    scan: &twilight_modrinth::ResourcePackFontScan,
) -> bool {
    scan.contains_truetype_fonts
        && project_type == "resourcepack"
        && twilight_launch::requires_resource_pack_font_confirmation(instance_version)
}

/// Copies an external pack archive into the packs dir after inspecting its ZIP
/// entries for FreeType fonts (`Minecraft2Shell`, CVE-2026-10701).
///
/// The first call with a font-bearing archive returns
/// `requires_confirmation: true` without copying. The UI then asks the user and
/// re-invokes with `confirm_fonts: true`; the archive is read and scanned again
/// immediately before writing, so the bytes that land in the instance are the
/// exact bytes that passed the check.
#[tauri::command]
pub async fn import_pack(
    app: AppHandle,
    instance_id: String,
    project_type: String,
    file_path: String,
    confirm_fonts: Option<bool>,
) -> Result<PackImportOutcome, String> {
    validate_instance_id(&instance_id)?;
    let src = PathBuf::from(&file_path);
    if !src.is_file() {
        return Err(format!("file not found: {file_path}"));
    }
    let Some(file_name) = src.file_name().map(|n| n.to_string_lossy().to_string()) else {
        return Err("invalid pack file name".into());
    };
    validate_pack_filename(&file_name)?;
    let root = instances_root(&app).await?;
    let meta = crate::instances::read_launch_meta(&root.join(&instance_id)).await?;
    let pack_dir = root
        .join(&instance_id)
        .join("minecraft")
        .join(packs_dir_name(&project_type)?);
    let dest = pack_dir.join(&file_name);
    if dest.exists() {
        return Err(format!("pack {file_name} already exists"));
    }

    // First read: tell the UI whether this archive needs confirmation. On the
    // confirmed retry this same read re-inspects the source immediately before
    // the copy, so a swapped file is scanned again rather than trusted.
    let bytes = tokio::fs::read(&src)
        .await
        .map_err(|e| format!("cannot read {file_name}: {e}"))?;
    let scan = twilight_modrinth::scan_resource_pack_fonts(&bytes)
        .map_err(|e| format!("cannot inspect {file_name}: {e}"))?;
    if pack_font_confirmation_required(&meta.version, &project_type, &scan)
        && !confirm_fonts.unwrap_or(false)
    {
        return Ok(PackImportOutcome::needs_confirmation(scan));
    }
    tokio::fs::create_dir_all(&pack_dir)
        .await
        .map_err(|e| e.to_string())?;
    // Write the exact buffer that was scanned, never re-open the source here.
    tokio::fs::write(&dest, &bytes)
        .await
        .map_err(|e| e.to_string())?;
    Ok(PackImportOutcome::from_scan(true, scan))
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::instances::create_instance_in;

    fn temp_root() -> std::path::PathBuf {
        std::env::temp_dir().join(format!(
            "twi-mods-test-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ))
    }

    #[tokio::test]
    async fn list_toggle_delete_round_trip() {
        let root = temp_root();
        std::fs::create_dir_all(&root).unwrap();
        let inst = create_instance_in(&root, "Modded", "1.21.4", None, None)
            .await
            .unwrap();
        let mods = mods_dir(&root, &inst.id).await.unwrap();
        tokio::fs::write(mods.join("sodium.jar"), b"x")
            .await
            .unwrap();
        tokio::fs::write(mods.join("lithium.jar.disabled"), b"yy")
            .await
            .unwrap();
        // legacy twin-flag form from earlier milestones reads as disabled
        tokio::fs::write(mods.join("optifine.disabled"), b"z")
            .await
            .unwrap();

        let listed = list_mods_in(&mods).await.unwrap();
        assert_eq!(listed.len(), 3, "alphabetical: {listed:?}");
        assert_eq!(listed[0].display_name, "lithium");
        assert!(!listed[0].is_enabled);
        assert_eq!(listed[0].filename, "lithium.jar.disabled");
        assert_eq!(listed[0].file_size, 2);
        assert_eq!(listed[1].display_name, "optifine");
        assert!(!listed[1].is_enabled);
        assert_eq!(listed[1].filename, "optifine.disabled");
        assert_eq!(listed[2].display_name, "sodium");
        assert!(listed[2].is_enabled);
        assert_eq!(listed[2].filename, "sodium.jar");
        assert_eq!(listed[2].file_size, 1);

        // enable the disabled one: the twin-flag file flips to .jar
        toggle_mod_in(&mods, "lithium.jar.disabled", true)
            .await
            .unwrap();
        assert!(mods.join("lithium.jar").exists());
        assert!(!mods.join("lithium.jar.disabled").exists());

        // disabling an enabled one parks it under .jar.disabled
        toggle_mod_in(&mods, "sodium.jar", false).await.unwrap();
        assert!(mods.join("sodium.jar.disabled").exists());
        assert!(!mods.join("sodium.jar").exists());

        // toggling into the same state is a silent no-op
        toggle_mod_in(&mods, "sodium.jar.disabled", false)
            .await
            .unwrap();

        // the legacy form upgrades to the canonical pair when enabled
        toggle_mod_in(&mods, "optifine.disabled", true)
            .await
            .unwrap();
        assert!(mods.join("optifine.jar").exists());
        assert!(!mods.join("optifine.disabled").exists());

        // delete removes the file and then reports it gone
        delete_mod_in(&mods, "optifine.jar").await.unwrap();
        assert!(!mods.join("optifine.jar").exists());
        assert!(delete_mod_in(&mods, "optifine.jar").await.is_err());

        // traversal and shape guards
        assert!(toggle_mod_in(&mods, "../evil.jar", true).await.is_err());
        assert!(toggle_mod_in(&mods, "sub\\dir.jar", false).await.is_err());
        assert!(toggle_mod_in(&mods, "not-a-mod.txt", true).await.is_err());
        assert!(delete_mod_in(&mods, "..\\escape.jar").await.is_err());
    }

    fn font_scan() -> twilight_modrinth::ResourcePackFontScan {
        twilight_modrinth::ResourcePackFontScan {
            contains_truetype_fonts: true,
            font_entries: vec!["assets/minecraft/font/custom.ttf".to_owned()],
        }
    }

    #[test]
    fn font_confirmation_only_applies_to_modern_resource_packs() {
        assert!(pack_font_confirmation_required(
            "1.21.4",
            "resourcepack",
            &font_scan()
        ));
        assert!(!pack_font_confirmation_required(
            "1.20.4",
            "resourcepack",
            &font_scan()
        ));
        assert!(!pack_font_confirmation_required(
            "1.21.4",
            "shader",
            &font_scan()
        ));
        assert!(!pack_font_confirmation_required(
            "1.21.4",
            "resourcepack",
            &twilight_modrinth::ResourcePackFontScan::default()
        ));
    }

    #[test]
    fn pack_import_outcomes_surface_font_names_and_confirmation() {
        let blocked = PackImportOutcome::needs_confirmation(font_scan());
        assert!(!blocked.imported);
        assert!(blocked.requires_confirmation);
        assert!(blocked.contains_truetype_fonts);
        assert_eq!(blocked.font_entries, ["assets/minecraft/font/custom.ttf"]);

        let imported = PackImportOutcome::from_scan(true, font_scan());
        assert!(imported.imported);
        assert!(!imported.requires_confirmation);
    }
}
