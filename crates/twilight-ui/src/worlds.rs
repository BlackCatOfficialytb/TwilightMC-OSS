// Worlds management: singleplayer world listing, zip backups and restores.
// Backups live in `<instance>/backups` as `<world>_<ddmmyyyy_HHMMSS>.zip`
// (hand-rolled STORE writer, entries relative to the world folder) and
// restores land back in `<game_dir>/saves/<world>` (zip-slip guarded).

use std::path::{Path, PathBuf};

use serde::Serialize;
use tauri::AppHandle;
use twilight_modrinth::extract_archive;

use crate::export::write_zip;
use crate::instances::{instances_root, validate_instance_id};

/// One singleplayer world in the instance's saves folder.
#[derive(Debug, Clone, Serialize)]
pub struct WorldEntry {
    /// Folder name inside `saves` (the quick-play key).
    pub name: String,
    /// Unix seconds of last modification.
    pub modified: u64,
    /// Proxy size: `level.dat` + `icon.png` in bytes.
    pub size: u64,
}

/// One world backup zip in the instance's backups folder.
#[derive(Debug, Clone, Serialize)]
pub struct WorldBackupEntry {
    /// Backup file name (with the `.zip` suffix the restore IPC round-trips).
    pub name: String,
    /// Byte size of the zip.
    pub size: u64,
    /// Unix seconds of last modification.
    pub modified: u64,
}

/// World folder names must stay plain single components (`..`, separators and
/// drive-like names never leave the saves folder).
fn validate_world_name(name: &str) -> Result<(), String> {
    if name.is_empty()
        || name == "."
        || name == ".."
        || name.contains('/')
        || name.contains('\\')
        || name.contains(':')
        || name.chars().any(char::is_control)
    {
        return Err(format!("invalid world name {name:?}"));
    }
    Ok(())
}

/// `ddmmyyyy_HHMMSS` stamp of an epoch (UTC — the launcher stores no timezone).
pub(crate) fn timestamp_label(secs: i64) -> String {
    let (h, m, s) = {
        let rem = secs.rem_euclid(86_400);
        (rem / 3600, (rem % 3600) / 60, rem % 60)
    };
    // civil-from-days (Howard Hinnant's algorithm)
    let z = secs.div_euclid(86_400) + 719_468;
    let era = z.div_euclid(146_097);
    let doe = z.rem_euclid(146_097);
    let yoe = (doe - doe / 1460 + doe / 36_524 - doe / 146_096) / 365;
    let doy = doe - (365 * yoe + yoe / 4 - yoe / 100);
    let mp = (5 * doy + 2) / 153;
    let d = doy - (153 * mp + 2) / 5 + 1;
    let mth = if mp < 10 { mp + 3 } else { mp - 9 };
    let y = yoe + era * 400 + i64::from(mth <= 2);
    format!("{d:02}{mth:02}{y:04}_{h:02}{m:02}{s:02}")
}

/// World folder name of a `<world>_<ddmmyyyy_HHMMSS>.zip` backup name; the
/// stamp segments are stripped from the right so world names keep underscores.
fn world_name_from_backup(backup_name: &str) -> Option<String> {
    let stem = backup_name.strip_suffix(".zip")?;
    let mut parts = stem.rsplitn(3, '_');
    let time = parts.next()?;
    let date = parts.next()?;
    let world = parts.next()?;
    if time.len() != 6 || date.len() != 8 {
        return None;
    }
    if !time.chars().all(|c| c.is_ascii_digit()) || !date.chars().all(|c| c.is_ascii_digit()) {
        return None;
    }
    if world.is_empty() {
        return None;
    }
    Some(world.to_owned())
}

/// Destination for one archive entry inside `world_dir`, or `None` when the
/// entry escapes the world folder (zip-slip guard).
fn dest_for_entry(world_dir: &Path, name: &str) -> Option<PathBuf> {
    if name.is_empty() || name.ends_with('/') {
        return None;
    }
    let mut dest = world_dir.to_path_buf();
    for component in Path::new(name).components() {
        match component {
            std::path::Component::Normal(part) => dest.push(part),
            // `..`, absolute roots, Windows prefixes: never leave the world dir
            _ => return None,
        }
    }
    Some(dest)
}

fn modified_secs(meta: &std::fs::Metadata) -> u64 {
    meta.modified()
        .ok()
        .and_then(|time| time.duration_since(std::time::UNIX_EPOCH).ok())
        .map(|delta| delta.as_secs())
        .unwrap_or_default()
}

/// Backs up one world folder into the backups dir; returns the zip path.
pub(crate) async fn backup_world_core(
    world_dir: PathBuf,
    backups_dir: &Path,
    world_name: &str,
) -> Result<PathBuf, String> {
    let stamp = {
        let now = std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .unwrap_or_default()
            .as_secs() as i64;
        timestamp_label(now)
    };
    let dest = backups_dir.join(format!("{world_name}_{stamp}.zip"));
    // owned: the blocking task runs detached ('static)
    let out = dest.clone();
    tokio::task::spawn_blocking(move || write_zip(&world_dir, &out))
        .await
        .map_err(|e| e.to_string())??;
    Ok(dest)
}

/// Restores one backup zip into the saves folder; returns the world folder
/// name. A stale world folder is replaced wholesale (fresh restore, no stale
/// region files survive).
pub(crate) async fn restore_world_core(
    saves_dir: &Path,
    backup_path: &Path,
) -> Result<String, String> {
    let backup_name = backup_path
        .file_name()
        .map(|n| n.to_string_lossy().into_owned())
        .unwrap_or_default();
    let world_name = world_name_from_backup(&backup_name)
        .ok_or_else(|| format!("unrecognized backup name {backup_name:?}"))?;
    let bytes =
        std::fs::read(backup_path).map_err(|e| format!("cannot read {backup_name}: {e}"))?;
    let entries = extract_archive(&bytes).map_err(|e| e.to_string())?;
    let world_dir = saves_dir.join(&world_name);
    if world_dir.exists() {
        std::fs::remove_dir_all(&world_dir).map_err(|e| e.to_string())?;
    }
    for (name, content) in entries {
        // ponytail: directory entries are skipped — parents are created by
        // the file writes; empty dirs never occur in world saves
        if name.ends_with('/') {
            continue;
        }
        let Some(dest) = dest_for_entry(&world_dir, &name) else {
            return Err(format!("archive entry {name:?} escapes the world folder"));
        };
        if let Some(parent) = dest.parent() {
            std::fs::create_dir_all(parent).map_err(|e| e.to_string())?;
        }
        std::fs::write(&dest, &content).map_err(|e| e.to_string())?;
    }
    Ok(world_name)
}

/// Worlds browser data: every folder in the instance's `minecraft/saves`.
#[tauri::command]
pub async fn list_instance_worlds(
    app: AppHandle,
    instance_id: String,
) -> Result<Vec<WorldEntry>, String> {
    validate_instance_id(&instance_id)?;
    let saves = instances_root(&app)
        .await?
        .join(&instance_id)
        .join("minecraft")
        .join("saves");
    let mut worlds = Vec::new();
    let Ok(mut entries) = tokio::fs::read_dir(&saves).await else {
        return Ok(worlds);
    };
    while let Some(entry) = entries.next_entry().await.map_err(|e| e.to_string())? {
        let path = entry.path();
        if !path.is_dir() {
            continue;
        }
        let meta = entry.metadata().await.map_err(|e| e.to_string())?;
        // ponytail: proxy size from level.dat + icon.png — a full recursive
        // walk would stat every region file; upgrade to folder walk if needed
        let size = ["level.dat", "icon.png"]
            .iter()
            .filter_map(|f| std::fs::metadata(path.join(f)).ok().map(|m| m.len()))
            .sum();
        worlds.push(WorldEntry {
            name: entry.file_name().to_string_lossy().to_string(),
            modified: modified_secs(&meta),
            size,
        });
    }
    worlds.sort_by(|a, b| {
        b.modified
            .cmp(&a.modified)
            .then_with(|| a.name.cmp(&b.name))
    });
    Ok(worlds)
}

/// Zips one world into `<instance>/backups/<world>_<ddmmyyyy_HHMMSS>.zip`;
/// returns the backup path.
#[tauri::command]
pub async fn backup_instance_world(
    app: AppHandle,
    instance_id: String,
    world_name: String,
) -> Result<String, String> {
    validate_instance_id(&instance_id)?;
    validate_world_name(&world_name)?;
    let root = instances_root(&app).await?;
    let world_dir = root
        .join(&instance_id)
        .join("minecraft")
        .join("saves")
        .join(&world_name);
    if !world_dir.is_dir() {
        return Err(format!("world {world_name:?} not found"));
    }
    let backups = root.join(&instance_id).join("backups");
    tokio::fs::create_dir_all(&backups)
        .await
        .map_err(|e| e.to_string())?;
    let dest = backup_world_core(world_dir, &backups, &world_name).await?;
    Ok(dest.display().to_string())
}

/// Backups browser data: every zip in the instance's `backups` folder,
/// newest-first.
#[tauri::command]
pub async fn list_world_backups(
    app: AppHandle,
    instance_id: String,
) -> Result<Vec<WorldBackupEntry>, String> {
    validate_instance_id(&instance_id)?;
    let backups = instances_root(&app)
        .await?
        .join(&instance_id)
        .join("backups");
    let mut rows = Vec::new();
    let Ok(mut entries) = tokio::fs::read_dir(&backups).await else {
        return Ok(rows);
    };
    while let Some(entry) = entries.next_entry().await.map_err(|e| e.to_string())? {
        let path = entry.path();
        if !path.is_file() {
            continue;
        }
        let meta = entry.metadata().await.map_err(|e| e.to_string())?;
        rows.push(WorldBackupEntry {
            name: entry.file_name().to_string_lossy().to_string(),
            size: meta.len(),
            modified: modified_secs(&meta),
        });
    }
    rows.sort_by(|a, b| {
        b.modified
            .cmp(&a.modified)
            .then_with(|| a.name.cmp(&b.name))
    });
    Ok(rows)
}

/// Restores a backup zip from the instance's `backups` folder back into
/// `saves` (overwrites the world folder — the UI confirms first); returns the
/// restored world folder name.
#[tauri::command]
pub async fn restore_world_backup(
    app: AppHandle,
    instance_id: String,
    backup_name: String,
) -> Result<String, String> {
    validate_instance_id(&instance_id)?;
    validate_world_name(&backup_name)?;
    let root = instances_root(&app).await?;
    let backup_path = root.join(&instance_id).join("backups").join(&backup_name);
    if !backup_path.is_file() {
        return Err(format!("backup {backup_name:?} not found"));
    }
    let saves = root.join(&instance_id).join("minecraft").join("saves");
    restore_world_core(&saves, &backup_path).await
}

#[cfg(test)]
mod tests {
    use super::*;

    fn scratch(name: &str) -> PathBuf {
        let dir = std::env::temp_dir().join(format!(
            "twi-worlds-test-{name}-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ));
        std::fs::create_dir_all(&dir).unwrap();
        dir
    }

    #[test]
    fn stamps_format_as_ddmmyyyy_hhmmss() {
        assert_eq!(timestamp_label(0), "01011970_000000");
        // 2026-11-20 12:34:56 UTC is 1795178096
        assert_eq!(timestamp_label(1_795_178_096), "20112026_123456");
    }

    #[test]
    fn world_names_validate_tight() {
        assert!(validate_world_name("My World").is_ok());
        assert!(validate_world_name("My_World").is_ok());
        assert!(validate_world_name("..").is_err());
        assert!(validate_world_name("a/b").is_err());
        assert!(validate_world_name("a\\b").is_err());
        assert!(validate_world_name("C:evil").is_err());
        assert!(validate_world_name("").is_err());
    }

    #[test]
    fn backup_names_derive_world_folders() {
        assert_eq!(
            world_name_from_backup("My_World_20112026_123456.zip").as_deref(),
            Some("My_World")
        );
        assert_eq!(
            world_name_from_backup("Test_20112026_123456.zip").as_deref(),
            Some("Test")
        );
        // not our naming scheme: rejected before any filesystem write
        assert!(world_name_from_backup("hello.zip").is_none());
        assert!(world_name_from_backup("a_b_c.zip").is_none());
        assert!(world_name_from_backup("My_World_notastamp.zip").is_none());
    }

    #[test]
    fn entries_never_escape_the_world_folder() {
        let root = Path::new("/saves/w");
        assert!(dest_for_entry(root, "level.dat").is_some());
        assert!(dest_for_entry(root, "region/r.0.mca").is_some());
        assert!(dest_for_entry(root, "../steal.dat").is_none());
        assert!(dest_for_entry(root, "/abs.dat").is_none());
        assert!(dest_for_entry(root, "dir/").is_none());
        assert!(dest_for_entry(root, "").is_none());
    }

    #[tokio::test]
    async fn backup_and_restore_round_trip() {
        let base = scratch("round-trip");
        let world_dir = base.join("saves/My_World");
        std::fs::create_dir_all(world_dir.join("region")).unwrap();
        std::fs::write(world_dir.join("level.dat"), b"level").unwrap();
        std::fs::write(world_dir.join("region/r.0.mca"), b"region bytes").unwrap();

        let backups = base.join("backups");
        std::fs::create_dir_all(&backups).unwrap();
        let zip_path = backup_world_core(world_dir, &backups, "My_World")
            .await
            .unwrap();
        assert!(zip_path.is_file());
        assert!(
            zip_path
                .file_name()
                .unwrap()
                .to_string_lossy()
                .starts_with("My_World_")
        );

        // restore into a wiped saves folder
        let saves = base.join("saves2");
        std::fs::create_dir_all(&saves).unwrap();
        let restored = restore_world_core(&saves, &zip_path).await.unwrap();
        assert_eq!(restored, "My_World");
        assert_eq!(
            std::fs::read(saves.join("My_World/level.dat")).unwrap(),
            b"level"
        );
        assert_eq!(
            std::fs::read(saves.join("My_World/region/r.0.mca")).unwrap(),
            b"region bytes"
        );

        // a second restore replaces the world folder wholesale
        std::fs::write(saves.join("My_World/stale.dat"), b"stale").unwrap();
        restore_world_core(&saves, &zip_path).await.unwrap();
        assert!(!saves.join("My_World/stale.dat").exists());
    }
}
