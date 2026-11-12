// IPC bridge for instance management: each instance is a directory under
// the resolved instances root holding `instance.json` metadata (legacy
// `twilight.json` stays readable/writable in place) and the game work
// dir `minecraft/`.

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};
use tauri::AppHandle;

use crate::instance::{display_loader, parse_cfg, parse_mmc_pack, resolved_instances_root};

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

/// Slugs a display name into a filesystem-safe instance id: lowercase,
/// every non-alphanumeric run becomes one dash, dash-trimmed.
pub(crate) fn slugify(name: &str) -> String {
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

/// Launch-time metadata: native files first, then foreign Prism/MultiMC
/// metadata — everything the grid can list, the launcher must be able to run.
/// Unlike [`read_meta`] (whose `Option` keeps the scan tolerant) this reports
/// the precise failure so the launch command surfaces a real error instead of
/// an opaque "unknown instance".
pub(crate) async fn read_launch_meta(instance_dir: &Path) -> Result<InstanceMeta, String> {
    if !instance_dir.is_dir() {
        return Err(format!(
            "instance directory not found: {}",
            instance_dir.display()
        ));
    }
    for file in ["instance.json", "twilight.json"] {
        let path = instance_dir.join(file);
        match tokio::fs::read_to_string(&path).await {
            Ok(data) => match serde_json::from_str::<InstanceMeta>(&data) {
                Ok(meta) => return Ok(meta),
                Err(e) => return Err(format!("{} is malformed: {e}", path.display())),
            },
            Err(e) if e.kind() == std::io::ErrorKind::NotFound => continue,
            Err(e) => return Err(format!("cannot read {}: {e}", path.display())),
        }
    }
    if let Some(meta) = prism_launch_meta(instance_dir) {
        return Ok(meta);
    }
    Err(format!(
        "no readable instance metadata in {} (expected instance.json / twilight.json, \
         or Prism's instance.cfg + mmc-pack.json with a Minecraft version)",
        instance_dir.display()
    ))
}

/// Launch metadata from foreign Prism/MultiMC files. `None` when the
/// directory carries no `instance.cfg`, or the metadata names no Minecraft
/// version (the one field a launch cannot proceed without).
fn prism_launch_meta(instance_dir: &Path) -> Option<InstanceMeta> {
    let cfg_text = std::fs::read_to_string(instance_dir.join("instance.cfg")).ok()?;
    let cfg = parse_cfg(&cfg_text);
    let (minecraft, loader) = std::fs::read_to_string(instance_dir.join("mmc-pack.json"))
        .ok()
        .and_then(|text| serde_json::from_str::<serde_json::Value>(&text).ok())
        .map(|raw| parse_mmc_pack(&raw))
        .unwrap_or((None, None));
    Some(InstanceMeta {
        version: minecraft?,
        name: cfg.get("name").cloned().unwrap_or_default(),
        loader: loader.as_ref().map(|(token, _)| token.clone()),
        loader_version: loader.map(|(_, version)| version),
        last_played: 0,
        total_time_played: 0,
    })
}

/// Writes metadata beside wherever it already lives: an instance carrying the
/// legacy `twilight.json` keeps that file, all others use `instance.json`.
pub(crate) async fn write_meta(instance_dir: &Path, meta: &InstanceMeta) -> Result<(), String> {
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

/// First free `<base>-copy[-n]` slug for a duplicate, checked against
/// `exists` (the instances root) so copies never collide.
fn next_copy_id(base: &str, exists: &dyn Fn(&str) -> bool) -> String {
    let mut candidate = format!("{base}-copy");
    let mut n = 2;
    while exists(&candidate) {
        candidate = format!("{base}-copy-{n}");
        n += 1;
    }
    candidate
}

/// Replaces the `name=` line of an `instance.cfg`; every other line stays
/// byte-identical.
fn rewrite_cfg_name(text: &str, new_name: &str) -> String {
    let mut out = String::with_capacity(text.len() + new_name.len());
    for line in text.split_inclusive('\n') {
        if line.trim_start().starts_with("name=") {
            out.push_str("name=");
            out.push_str(new_name);
            out.push('\n');
        } else {
            out.push_str(line);
        }
    }
    out
}

/// Copies an instance directory under a unique `<name>-copy` slug and
/// returns its fresh grid row. Native metadata gets the copy's name and
/// zeroed play counters; foreign Prism `instance.cfg` files only get their
/// `name=` line rewritten — the copied files keep the rest as-is.
#[tauri::command]
pub async fn duplicate_instance(
    app: AppHandle,
    instance_id: String,
) -> Result<crate::instance::InstanceInfo, String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    let src = root.join(&instance_id);
    if !src.is_dir() {
        return Err(format!("unknown instance {instance_id}"));
    }

    // display name: our metadata first, then Prism's cfg, then the id
    let display = read_meta(&src)
        .await
        .map(|meta| {
            if meta.name.is_empty() {
                meta.version
            } else {
                meta.name
            }
        })
        .or_else(|| {
            parse_cfg(&std::fs::read_to_string(src.join("instance.cfg")).unwrap_or_default())
                .get("name")
                .cloned()
                .filter(|n| !n.is_empty())
        })
        .filter(|d| !d.is_empty())
        .unwrap_or_else(|| instance_id.clone());
    let new_name = format!("{display} Copy");

    let id = next_copy_id(&slugify(&display), &|c| root.join(c).exists());
    let dest = root.join(&id);
    copy_dir_all(&src, &dest).await?;

    if let Some(mut meta) = read_meta(&dest).await {
        meta.name = new_name.clone();
        meta.last_played = 0;
        meta.total_time_played = 0;
        write_meta(&dest, &meta).await?;
    } else if dest.join("instance.cfg").is_file() {
        let path = dest.join("instance.cfg");
        let text = tokio::fs::read_to_string(&path)
            .await
            .map_err(|e| e.to_string())?;
        tokio::fs::write(&path, rewrite_cfg_name(&text, &new_name))
            .await
            .map_err(|e| e.to_string())?;
    }

    // the fresh row straight from the scan engine (icon, group, meta)
    crate::instance::scan_instances_in(&root)
        .await?
        .into_iter()
        .find(|row| row.id == id)
        .ok_or_else(|| "copy vanished after staging".to_owned())
}

/// Copies an image file into the instance directory as `icon.<ext>` and
/// removes the other recognized icon variants, so the scan resolves
/// exactly one artwork file afterwards.
#[tauri::command]
pub async fn set_instance_icon(
    app: AppHandle,
    instance_id: String,
    image_path: String,
) -> Result<String, String> {
    validate_instance_id(&instance_id)?;
    let src = PathBuf::from(image_path.trim());
    if !src.is_file() {
        return Err(format!("image not found: {image_path}"));
    }
    let ext = src
        .extension()
        .and_then(|e| e.to_str())
        .map(|e| e.to_ascii_lowercase())
        .unwrap_or_default();
    if !matches!(ext.as_str(), "png" | "jpg" | "jpeg" | "webp" | "ico") {
        return Err("icons must be png, jpg, jpeg, webp or ico files".into());
    }
    let size = tokio::fs::metadata(&src)
        .await
        .map_err(|e| e.to_string())?
        .len();
    if size > 16 * 1024 * 1024 {
        return Err("icon files larger than 16 MiB are rejected".into());
    }
    let dir = instances_root(&app).await?.join(&instance_id);
    if !dir.is_dir() {
        return Err(format!("unknown instance {instance_id}"));
    }
    for stale in ["icon.png", "icon.jpg", "icon.jpeg", "icon.ico", "icon.webp"] {
        let _ = tokio::fs::remove_file(dir.join(stale)).await;
    }
    let dest = dir.join(format!("icon.{ext}"));
    tokio::fs::copy(&src, &dest)
        .await
        .map_err(|e| e.to_string())?;
    Ok(dest.display().to_string())
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

    #[test]
    fn copy_ids_never_collide() {
        let taken = |candidate: &str| candidate == "modded-copy" || candidate == "modded-copy-2";
        assert_eq!(next_copy_id("modded", &taken), "modded-copy-3");
        assert_eq!(next_copy_id("fresh", &|_| false), "fresh-copy");
    }

    #[test]
    fn cfg_name_rewrite_touches_only_the_name_line() {
        let cfg = "InstanceType=OneSix\nname=Old Name\niconKey=chickens\n";
        assert_eq!(
            rewrite_cfg_name(cfg, "Old Name Copy"),
            "InstanceType=OneSix\nname=Old Name Copy\niconKey=chickens\n"
        );
        // a trailing name line without a newline still gets replaced
        assert_eq!(rewrite_cfg_name("name=Old", "New"), "name=New\n");
        // files without a name line stay byte-identical
        assert_eq!(
            rewrite_cfg_name("InstanceType=OneSix\n", "x"),
            "InstanceType=OneSix\n"
        );
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
    async fn launch_meta_reports_native_prism_and_failures() {
        let root = temp_root();

        // native instance.json
        std::fs::create_dir_all(root.join("native")).unwrap();
        std::fs::write(
            root.join("native").join("instance.json"),
            r#"{"version":"1.21.4","name":"Native"}"#,
        )
        .unwrap();
        let meta = read_launch_meta(&root.join("native")).await.unwrap();
        assert_eq!(meta.version, "1.21.4");

        // foreign Prism instance (instance.cfg + mmc-pack.json)
        std::fs::create_dir_all(root.join("prism-pack")).unwrap();
        std::fs::write(
            root.join("prism-pack").join("instance.cfg"),
            "name=Prism Pack\n",
        )
        .unwrap();
        std::fs::write(
            root.join("prism-pack").join("mmc-pack.json"),
            r#"{"components":[
                {"uid":"net.minecraft","version":"1.20.1"},
                {"uid":"net.minecraftforge","version":"47.2.0"}
            ]}"#,
        )
        .unwrap();
        let meta = read_launch_meta(&root.join("prism-pack")).await.unwrap();
        assert_eq!(meta.version, "1.20.1");
        assert_eq!(meta.name, "Prism Pack");
        assert_eq!(meta.loader.as_deref(), Some("forge"));
        assert_eq!(meta.loader_version.as_deref(), Some("47.2.0"));

        // a missing directory names the path it looked for
        let err = read_launch_meta(&root.join("ghost")).await.unwrap_err();
        assert!(err.contains("not found") && err.contains("ghost"), "{err}");

        // malformed native metadata is reported verbatim, not swallowed
        std::fs::create_dir_all(root.join("broken")).unwrap();
        std::fs::write(root.join("broken").join("instance.json"), "{nope").unwrap();
        let err = read_launch_meta(&root.join("broken")).await.unwrap_err();
        assert!(
            err.contains("malformed") && err.contains("instance.json"),
            "{err}"
        );

        // a directory with nothing readable says what it expected
        std::fs::create_dir_all(root.join("empty")).unwrap();
        let err = read_launch_meta(&root.join("empty")).await.unwrap_err();
        assert!(err.contains("no readable instance metadata"), "{err}");
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
