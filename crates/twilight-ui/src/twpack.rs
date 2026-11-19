// IPC bridge to the `.twpack` (7z) instance format. Export packs only the
// playable payload (`minecraft/` with mods, configs, resource and shader
// packs) beside a `twilight-pack.json` manifest; import validates every
// archive path before writing (zip-slip guard) and registers the extracted
// directory as a managed instance.

use std::path::{Path, PathBuf};

use serde::Serialize;
use tauri::AppHandle;
use twilight_pack::{PackManifest, export_twpack, import_twpack, read_manifest};

use crate::instance::resolved_instances_root;
use crate::instances::{self, InstanceMeta, instances_root, slugify, write_meta};

/// Pack facts shown by the `.twpack` import modal.
#[derive(Debug, Clone, Serialize)]
pub struct TwpackInfo {
    /// Pack name recorded in the manifest.
    pub name: String,
    /// Target Minecraft version.
    pub game_version: String,
    pub loader: Option<String>,
    pub loader_version: Option<String>,
    /// Payload entry count (files + directories).
    pub file_count: usize,
}

/// Ensures the destination carries a `.twpack` suffix.
fn normalize_dest(dest: PathBuf) -> PathBuf {
    let is_twpack = dest
        .extension()
        .and_then(|e| e.to_str())
        .is_some_and(|e| e.eq_ignore_ascii_case("twpack"));
    if is_twpack {
        dest
    } else {
        dest.with_extension("twpack")
    }
}

/// Exports an instance into a user-chosen `.twpack` path.
#[tauri::command]
pub async fn export_instance_twpack(
    app: AppHandle,
    instance_id: String,
    dest_path: String,
) -> Result<String, String> {
    instances::validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    let dir = root.join(&instance_id);
    if !dir.is_dir() {
        return Err(format!("unknown instance {instance_id}"));
    }
    let dest = normalize_dest(PathBuf::from(dest_path.trim()));
    if dest.as_os_str().is_empty() {
        return Err("destination path is required".into());
    }
    // packing into the instance's own tree would include the growing archive
    if dest.starts_with(&dir) {
        return Err("destination must be outside the instance directory".into());
    }
    if let Some(parent) = dest.parent()
        && !parent.is_dir()
    {
        return Err(format!(
            "destination directory missing: {}",
            parent.display()
        ));
    }

    // the manifest carries the instance identity the grid already knows
    let meta = instances::read_meta(&dir).await.unwrap_or(InstanceMeta {
        version: instance_id.clone(),
        name: instance_id.clone(),
        loader: None,
        loader_version: None,
        last_played: 0,
        total_time_played: 0,
        icon_key: None,
    });
    let mut manifest = PackManifest::new(
        if meta.name.trim().is_empty() {
            instance_id.clone()
        } else {
            meta.name.clone()
        },
        meta.version.clone(),
    );
    manifest.loader = meta.loader.clone();
    manifest.loader_version = meta.loader_version.clone();

    let dest_out = dest.clone();
    tokio::task::spawn_blocking(move || export_twpack(&dir, &dest_out, manifest))
        .await
        .map_err(|e| e.to_string())?
        .map_err(|e| e.to_string())?;
    Ok(dest.display().to_string())
}

/// Reads only the pack manifest for the import modal.
#[tauri::command]
pub async fn inspect_twpack(path: String) -> Result<TwpackInfo, String> {
    let archive = path.trim().to_owned();
    if archive.is_empty() {
        return Err("pack path is required".into());
    }
    let manifest = tokio::task::spawn_blocking(move || read_manifest(Path::new(&archive)))
        .await
        .map_err(|e| e.to_string())?
        .map_err(|e| e.to_string())?;
    Ok(TwpackInfo {
        name: manifest.name,
        game_version: manifest.minecraft_version,
        loader: manifest.loader,
        loader_version: manifest.loader_version,
        file_count: manifest.files.len(),
    })
}

/// Installs a `.twpack` into the resolved instances library as a new managed
/// instance, returning its id for grid auto-selection.
#[tauri::command]
pub async fn install_twpack(
    app: AppHandle,
    path: String,
    instance_name: String,
) -> Result<String, String> {
    let archive = path.trim().to_owned();
    if archive.is_empty() {
        return Err("pack path is required".into());
    }
    if !Path::new(&archive).is_file() {
        return Err(format!("pack not found: {archive}"));
    }
    // the manifest names the pack and pins the launch version/loader
    let archive_for_manifest = archive.clone();
    let manifest =
        tokio::task::spawn_blocking(move || read_manifest(Path::new(&archive_for_manifest)))
            .await
            .map_err(|e| e.to_string())?
            .map_err(|e| e.to_string())?;

    let chosen = {
        let typed = instance_name.trim();
        if typed.is_empty() {
            if manifest.name.trim().is_empty() {
                "twpack".to_owned()
            } else {
                manifest.name.trim().to_owned()
            }
        } else {
            typed.to_owned()
        }
    };
    let id = slugify(&chosen);
    instances::validate_instance_id(&id)?;
    let instances_dir = resolved_instances_root(&app).await?;
    let instance_dir = instances_dir.join(&id);
    if instance_dir.exists() {
        return Err(format!("instance {id} already exists; pick another name"));
    }

    let extract_into = instance_dir.clone();
    let archive_for_extract = archive.clone();
    let extracted = tokio::task::spawn_blocking(move || {
        import_twpack(Path::new(&archive_for_extract), &extract_into)
    })
    .await
    .map_err(|e| e.to_string())?
    .map_err(|e| e.to_string());
    if let Err(e) = extracted {
        // a refused/half-extracted pack must not surface as a broken instance
        let _ = tokio::fs::remove_dir_all(&instance_dir).await;
        return Err(e);
    }

    let meta = InstanceMeta {
        version: manifest.minecraft_version.clone(),
        name: chosen,
        loader: manifest.loader.clone(),
        loader_version: manifest.loader_version.clone(),
        last_played: 0,
        total_time_played: 0,
        icon_key: None,
    };
    write_meta(&instance_dir, &meta).await?;
    Ok(id)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn twpack_suffix_is_enforced() {
        assert_eq!(
            normalize_dest(PathBuf::from("C:\\out\\pack")),
            PathBuf::from("C:\\out\\pack.twpack")
        );
        assert_eq!(
            normalize_dest(PathBuf::from("pack.TWPACK")),
            PathBuf::from("pack.TWPACK"),
            "case-insensitive suffix kept"
        );
    }
}
