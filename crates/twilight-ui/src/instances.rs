// IPC bridge for instance management: each instance is a directory under
// the resolved instances root holding `instance.json` metadata (legacy
// `twilight.json` stays readable/writable in place) and the game work
// dir `minecraft/`.

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};
use tauri::AppHandle;

use crate::instance::{display_loader, resolved_instances_root};

/// Instance metadata persisted as `twilight.json` inside the instance dir.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InstanceMeta {
    pub version: String,
    /// Display name; defaults to the version id.
    #[serde(default)]
    pub name: String,
    /// `"fabric"` / `"quilt"`; absent/empty means Vanilla.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub loader: Option<String>,
    /// Pinned loader version; empty resolves the latest stable release.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub loader_version: Option<String>,
    /// Unix seconds of the last play; 0 = never.
    #[serde(default)]
    pub last_played: u64,
    /// Accumulated play time in seconds.
    #[serde(default)]
    pub total_time_played: u64,
}

/// One row of the instance grid.
#[derive(Debug, Clone, Serialize)]
pub struct InstanceRow {
    pub id: String,
    pub name: String,
    pub version: String,
    /// Display loader: `"Fabric"` / `"Quilt"` / `"Vanilla"`.
    pub loader: String,
    /// Unix seconds of the last play; 0 = never.
    pub last_played: u64,
}

// ---- core operations (isolated from tauri so they can be tested) ----

/// Slugs a display name into a filesystem-safe instance id.
fn slugify(name: &str) -> String {
    let slug: String = name
        .chars()
        .map(|c| c.to_ascii_lowercase())
        .filter_map(|c| match c {
            'a'..='z' | '0'..='9' | '-' | '_' => Some(c),
            ' ' | '.' => Some('-'),
            _ => None,
        })
        .collect();
    let slug = slug.trim_matches('-').to_owned();
    if slug.is_empty() {
        "instance".to_owned()
    } else {
        slug
    }
}

/// Reads the instance metadata, accepting both the canonical `instance.json`
/// and the legacy `twilight.json`.
pub(crate) async fn read_meta(instance_dir: &Path) -> Option<InstanceMeta> {
    for file in ["instance.json", "twilight.json"] {
        if let Ok(data) = tokio::fs::read_to_string(instance_dir.join(file)).await
            && let Ok(meta) = serde_json::from_str::<InstanceMeta>(&data)
        {
            return Some(meta);
        }
    }
    None
}

/// Writes metadata beside wherever it already lives: an instance carrying the
/// legacy `twilight.json` keeps that file, all others use `instance.json`.
async fn write_meta(instance_dir: &Path, meta: &InstanceMeta) -> Result<(), String> {
    let file = if instance_dir.join("instance.json").exists()
        || !instance_dir.join("twilight.json").exists()
    {
        "instance.json"
    } else {
        "twilight.json"
    };
    let json = serde_json::to_string_pretty(meta).map_err(|e| e.to_string())?;
    tokio::fs::write(instance_dir.join(file), json)
        .await
        .map_err(|e| e.to_string())
}

/// Unix seconds now.
fn now_secs() -> u64 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs()
}

pub(crate) async fn instances_root(app: &AppHandle) -> Result<PathBuf, String> {
    // resolved root: settings override -> Windows Prism default -> our library
    let root = resolved_instances_root(app).await?;
    tokio::fs::create_dir_all(&root)
        .await
        .map_err(|e| e.to_string())?;
    Ok(root)
}

async fn get_instances_in(root: &Path) -> Result<Vec<InstanceRow>, String> {
    let mut rows = Vec::new();
    let mut entries = tokio::fs::read_dir(root).await.map_err(|e| e.to_string())?;
    while let Some(entry) = entries.next_entry().await.map_err(|e| e.to_string())? {
        let path = entry.path();
        if !path.is_dir() {
            continue;
        }
        let meta = read_meta(&path).await.unwrap_or(InstanceMeta {
            version: path
                .file_name()
                .map(|n| n.to_string_lossy().to_string())
                .unwrap_or_default(),
            name: String::new(),
            loader: None,
            loader_version: None,
            last_played: 0,
            total_time_played: 0,
        });
        let id = path
            .file_name()
            .map(|n| n.to_string_lossy().to_string())
            .unwrap_or_default();
        let name = if meta.name.is_empty() {
            meta.version.clone()
        } else {
            meta.name.clone()
        };
        let loader_type = display_loader(meta.loader.as_deref());
        rows.push(InstanceRow {
            id,
            name,
            version: meta.version,
            loader: loader_type.to_owned(),
            last_played: meta.last_played,
        });
    }
    rows.sort_by(|a, b| a.id.cmp(&b.id));
    Ok(rows)
}

/// Creates (or returns the existing) instance `id` for `version` + `loader`.
/// Idempotent: an existing instance is returned unchanged.
pub(crate) async fn create_instance_in(
    root: &Path,
    name: &str,
    version: &str,
    loader: Option<String>,
    loader_version: Option<String>,
) -> Result<InstanceRow, String> {
    let id = slugify(name);
    if id.is_empty() {
        return Err("instance name must contain letters or digits".into());
    }
    let dir = root.join(&id);
    tokio::fs::create_dir_all(dir.join("minecraft"))
        .await
        .map_err(|e| e.to_string())?;
    let meta = match read_meta(&dir).await {
        Some(existing) => existing,
        None => {
            let meta = InstanceMeta {
                version: version.to_owned(),
                name: name.to_owned(),
                loader: loader
                    .map(|l| l.trim().to_ascii_lowercase())
                    .filter(|l| !l.is_empty() && l != "vanilla"),
                loader_version: loader_version
                    .map(|v| v.trim().to_owned())
                    .filter(|v| !v.is_empty()),
                last_played: 0,
                total_time_played: 0,
            };
            write_meta(&dir, &meta).await?;
            meta
        }
    };
    Ok(InstanceRow {
        name: name.to_owned(),
        loader: display_loader(meta.loader.as_deref()).to_owned(),
        id,
        version: meta.version,
        last_played: meta.last_played,
    })
}

/// Marks `instance` as played now and accrues the session's seconds;
/// best-effort. Only touches our own metadata files (Prism files are left
/// for Prism to manage).
async fn touch_last_played(root: &Path, id: &str, played_secs: u64) {
    let dir = root.join(id);
    let Some(mut meta) = read_meta(&dir).await else {
        return;
    };
    meta.last_played = now_secs();
    meta.total_time_played += played_secs;
    let _ = write_meta(&dir, &meta).await;
}

/// Deletes an instance: either moves it out of the scan root into a sibling
/// `.twilight-trash` (reversible-ish), or removes the tree outright.
async fn delete_instance_in(root: &Path, id: &str, to_trash: bool) -> Result<(), String> {
    validate_instance_id(id)?;
    let dir = root.join(id);
    if !dir.is_dir() {
        return Err(format!("unknown instance {id}"));
    }
    if !to_trash {
        return tokio::fs::remove_dir_all(dir)
            .await
            .map_err(|e| e.to_string());
    }
    // Trash lives outside the scan root so trashed instances never resurface
    // in the grid; a unique stamp keeps repeat trashes from colliding.
    let parent = root.parent().unwrap_or(Path::new("."));
    let trash = parent.join(".twilight-trash");
    tokio::fs::create_dir_all(&trash)
        .await
        .map_err(|e| e.to_string())?;
    let stamp = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis();
    let dest = trash.join(format!("{id}-{stamp}"));
    match tokio::fs::rename(&dir, &dest).await {
        Ok(()) => Ok(()),
        Err(_) => {
            // cross-volume move: copy the tree, then drop the original
            copy_dir_all(&dir, &dest).await?;
            tokio::fs::remove_dir_all(dir)
                .await
                .map_err(|e| e.to_string())
        }
    }
}

async fn copy_dir_all(src: &Path, dst: &Path) -> Result<(), String> {
    tokio::fs::create_dir_all(dst)
        .await
        .map_err(|e| e.to_string())?;
    let mut entries = tokio::fs::read_dir(src).await.map_err(|e| e.to_string())?;
    while let Some(entry) = entries.next_entry().await.map_err(|e| e.to_string())? {
        let from = entry.path();
        let to = dst.join(entry.file_name());
        if from.is_dir() {
            Box::pin(copy_dir_all(&from, &to)).await?;
        } else {
            tokio::fs::copy(&from, &to)
                .await
                .map_err(|e| e.to_string())?;
        }
    }
    Ok(())
}

/// Instance ids are directory leaf names; reject anything that could escape.
pub(crate) fn validate_instance_id(id: &str) -> Result<(), String> {
    if id.is_empty()
        || id.contains('/')
        || id.contains('\\')
        || id.contains("..")
        || id.contains(':')
    {
        return Err(format!("invalid instance id {id:?}"));
    }
    Ok(())
}

// ---- tauri commands ----

/// Scans the shared instance library for the grid.
#[tauri::command]
pub async fn get_instances(app: AppHandle) -> Result<Vec<InstanceRow>, String> {
    let root = instances_root(&app).await?;
    get_instances_in(&root).await
}

/// Creates an instance from the version browser; idempotent.
#[tauri::command]
pub async fn create_instance(
    app: AppHandle,
    name: String,
    version: String,
    loader: Option<String>,
    loader_version: Option<String>,
) -> Result<InstanceRow, String> {
    let root = instances_root(&app).await?;
    create_instance_in(&root, &name, &version, loader, loader_version).await
}

/// Best-effort last-played + play-time stamp, called from the launch path.
pub(crate) async fn stamp_last_played(app: &AppHandle, instance_id: &str, played_secs: u64) {
    if let Ok(root) = instances_root(app).await {
        touch_last_played(&root, instance_id, played_secs).await;
    }
}

/// Deletes an instance: `to_trash` moves it into a sibling `.twilight-trash`
/// directory; `false` removes it permanently.
#[tauri::command]
pub async fn delete_instance(
    app: AppHandle,
    instance_id: String,
    to_trash: bool,
) -> Result<(), String> {
    let root = instances_root(&app).await?;
    delete_instance_in(&root, &instance_id, to_trash).await
}

#[cfg(test)]
mod tests {
    use super::*;

    pub(crate) fn temp_root() -> PathBuf {
        let dir = std::env::temp_dir().join(format!(
            "twi-instances-test-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ));
        std::fs::create_dir_all(&dir).unwrap();
        dir
    }

    #[tokio::test]
    async fn slugify_shapes() {
        assert_eq!(slugify("My Cool Instance!"), "my-cool-instance");
        assert_eq!(slugify("1.21.4 Fabric"), "1-21-4-fabric");
        assert_eq!(slugify("///"), "instance");
    }

    #[tokio::test]
    async fn create_get_launch_round_trip() {
        let root = temp_root();

        let row = create_instance_in(&root, "Sky Factory", "1.21.4", Some("FABRIC".into()), None)
            .await
            .unwrap();
        assert_eq!(row.id, "sky-factory");
        assert_eq!(row.loader, "Fabric");
        // new instances carry the canonical instance.json
        assert!(root.join("sky-factory/instance.json").exists());
        assert!(root.join("sky-factory/minecraft").is_dir());

        // idempotent: second create returns the same instance
        let again = create_instance_in(&root, "Sky Factory", "9.9.9", Some("quilt".into()), None)
            .await
            .unwrap();
        assert_eq!(again.version, "1.21.4");
        assert_eq!(again.loader, "Fabric");

        let rows = get_instances_in(&root).await.unwrap();
        assert_eq!(rows.len(), 1);
        assert_eq!(rows[0].name, "Sky Factory");

        touch_last_played(&root, "sky-factory", 0).await;
        let rows = get_instances_in(&root).await.unwrap();
        assert!(rows[0].last_played > 0);
    }

    #[tokio::test]
    async fn delete_guards_remove_the_whole_tree() {
        let root = temp_root();
        let inst = create_instance_in(&root, "Modded", "1.21.4", None, None)
            .await
            .unwrap();
        // pinned loader version survives the round trip through the meta file
        create_instance_in(
            &root,
            "Pinned Fabric",
            "1.21.4",
            Some("fabric".into()),
            Some("0.16.9".into()),
        )
        .await
        .unwrap();
        let pinned = read_meta(&root.join("pinned-fabric")).await.unwrap();
        assert_eq!(pinned.loader_version.as_deref(), Some("0.16.9"));

        // traversal guards on the instance id
        assert!(validate_instance_id("../escape").is_err());
        assert!(validate_instance_id("fine-id").is_ok());

        // delete instance removes the whole tree (the slug id, like the grid sends)
        delete_instance_in(&root, &inst.id, false).await.unwrap();
        assert!(!root.join(&inst.id).exists());
        assert!(delete_instance_in(&root, "Nope", true).await.is_err());
    }

    #[tokio::test]
    async fn delete_to_trash_keeps_metadata_outside_the_scan_root() {
        // the instances root is nested so the sibling trash lands inside the
        // per-run temp store instead of the shared %TEMP%
        let store = temp_root();
        let root = store.join("instances");
        std::fs::create_dir_all(&root).unwrap();
        let inst = create_instance_in(&root, "Trashables", "1.21.4", None, None)
            .await
            .unwrap();

        delete_instance_in(&root, &inst.id, true).await.unwrap();
        assert!(!root.join(&inst.id).exists(), "gone from the grid root");

        let trash = store.join(".twilight-trash");
        let mut kept: Vec<std::path::PathBuf> = std::fs::read_dir(&trash)
            .map(|entries| entries.flatten().map(|e| e.path()).collect())
            .unwrap_or_default();
        assert_eq!(kept.len(), 1, "exactly one trashed instance");
        let trashed = kept.remove(0);
        let stamp_prefix = format!("{}-", inst.id);
        assert!(
            trashed
                .file_name()
                .unwrap()
                .to_string_lossy()
                .starts_with(&stamp_prefix),
            "trashed dir keeps the id + stamp: {:?}",
            trashed
        );
        let meta = read_meta(&trashed).await.unwrap();
        assert_eq!(meta.version, "1.21.4", "metadata survives the move");
    }

    #[tokio::test]
    async fn legacy_twilight_json_reads_and_stays_put() {
        let root = temp_root();
        let dir = root.join("legacy");
        std::fs::create_dir_all(&dir).unwrap();
        std::fs::write(
            dir.join("twilight.json"),
            r#"{"version":"1.21.4","name":"Legacy","loader":"quilt"}"#,
        )
        .unwrap();

        // read through the alias-aware reader
        let meta = read_meta(&dir).await.unwrap();
        assert_eq!(meta.version, "1.21.4");

        // a play stamp keeps writing the legacy file in place
        touch_last_played(&root, "legacy", 120).await;
        assert!(dir.join("twilight.json").exists(), "legacy file preserved");
        assert!(!dir.join("instance.json").exists(), "no new file spawned");
        let stamped = read_meta(&dir).await.unwrap();
        assert!(stamped.last_played > 0);
        assert_eq!(stamped.total_time_played, 120);

        // and the legacy-less create writes the canonical instance.json
        let fresh = root.join("fresh");
        std::fs::create_dir_all(&fresh).unwrap();
        std::fs::write(
            fresh.join("instance.json"),
            r#"{"version":"26.3","name":"Fresh"}"#,
        )
        .unwrap();
        touch_last_played(&root, "fresh", 0).await;
        assert!(fresh.join("instance.json").exists());
    }

    #[tokio::test]
    async fn display_loader_tokens() {
        assert_eq!(display_loader(None), "Vanilla");
        assert_eq!(display_loader(Some("")), "Vanilla");
        assert_eq!(display_loader(Some("VANILLA")), "Vanilla");
        assert_eq!(display_loader(Some("fabric")), "Fabric");
        assert_eq!(display_loader(Some("Quilt")), "Quilt");
        assert_eq!(display_loader(Some("horizon")), "Horizon");
        assert_eq!(display_loader(Some("Horizon-Rust")), "Horizon");
        assert_eq!(display_loader(Some("forge")), "Forge");
        assert_eq!(display_loader(Some("neoforge")), "NeoForge");
    }
}
