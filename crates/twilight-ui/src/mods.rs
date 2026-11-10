// Mods management: listing, enable/disable (rename), delete and import of
// `.jar` files inside an instance's `minecraft/mods` directory. Enabled mods
// live as `<name>.jar`; disabled ones as `<name>.jar.disabled`. The legacy
// Milestone-1 `<name>.disabled` twin-flag form is still read and is upgraded
// to the canonical pair on the next toggle.

use std::path::{Path, PathBuf};

use serde::Serialize;
use tauri::AppHandle;

use crate::instances::{instances_root, validate_instance_id};

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
        .join(file_name);
    if dest.exists() {
        return Err(format!(
            "mod {} already exists",
            src.file_name().unwrap().to_string_lossy()
        ));
    }
    tokio::fs::copy(&src, &dest)
        .await
        .map_err(|e| e.to_string())?;
    Ok(())
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
}
