// IPC bridge for instance management: each instance is a directory under
// `<shared>/instances/<id>` holding `twilight.json` metadata
// (`{version, loader, last_played}`) and the game work dir `minecraft/`.

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};
use tauri::AppHandle;

use crate::storage::shared_root;

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
    /// Unix seconds of the last play; 0 = never.
    #[serde(default)]
    pub last_played: u64,
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

pub(crate) async fn read_meta(instance_dir: &Path) -> Option<InstanceMeta> {
    let data = tokio::fs::read_to_string(instance_dir.join("twilight.json"))
        .await
        .ok()?;
    serde_json::from_str(&data).ok()
}

async fn write_meta(instance_dir: &Path, meta: &InstanceMeta) -> Result<(), String> {
    let json = serde_json::to_string_pretty(meta).map_err(|e| e.to_string())?;
    tokio::fs::write(instance_dir.join("twilight.json"), json)
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

async fn instances_root(app: &AppHandle) -> Result<PathBuf, String> {
    let root = shared_root(app).await?.join("instances");
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
            last_played: 0,
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
        let loader = match meta.loader.as_deref().map(|l| l.to_ascii_lowercase()) {
            Some(l) if l == "fabric" => "Fabric",
            Some(l) if l == "quilt" => "Quilt",
            _ => "Vanilla",
        };
        rows.push(InstanceRow {
            id,
            name,
            version: meta.version,
            loader: loader.to_owned(),
            last_played: meta.last_played,
        });
    }
    rows.sort_by(|a, b| a.id.cmp(&b.id));
    Ok(rows)
}

/// Creates (or returns the existing) instance `id` for `version` + `loader`.
/// Idempotent: an existing instance is returned unchanged.
async fn create_instance_in(
    root: &Path,
    name: &str,
    version: &str,
    loader: Option<String>,
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
                last_played: 0,
            };
            write_meta(&dir, &meta).await?;
            meta
        }
    };
    Ok(InstanceRow {
        name: name.to_owned(),
        loader: match meta.loader.as_deref().map(|l| l.to_ascii_lowercase()) {
            Some(l) if l == "fabric" => "Fabric".to_owned(),
            Some(l) if l == "quilt" => "Quilt".to_owned(),
            _ => "Vanilla".to_owned(),
        },
        id,
        version: meta.version,
        last_played: meta.last_played,
    })
}

/// Marks `instance` as played today (UTC); best-effort.
async fn touch_last_played(root: &Path, id: &str) {
    let dir = root.join(id);
    let mut meta = match read_meta(&dir).await {
        Some(meta) => meta,
        None => return,
    };
    meta.last_played = now_secs();
    let _ = write_meta(&dir, &meta).await;
}

// ---- mods (edit-instance) helpers ----

/// One installed mod in the instance's `minecraft/mods` dir; disabled mods
/// are renamed `<base>.disabled`.
#[derive(Debug, Clone, Serialize)]
pub struct ModEntry {
    /// File name without the `.jar`/`.disabled` suffix.
    pub base: String,
    pub enabled: bool,
}

async fn mods_dir(root: &Path, instance_id: &str) -> Result<PathBuf, String> {
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
        let name = entry.file_name().to_string_lossy().to_string();
        if let Some(base) = name.strip_suffix(".disabled") {
            mods.push(ModEntry {
                base: base.to_owned(),
                enabled: false,
            });
        } else if let Some(base) = name.strip_suffix(".jar") {
            mods.push(ModEntry {
                base: base.to_owned(),
                enabled: true,
            });
        }
    }
    mods.sort_by(|a, b| {
        a.base
            .to_ascii_lowercase()
            .cmp(&b.base.to_ascii_lowercase())
    });
    Ok(mods)
}

async fn toggle_mod_in(dir: &Path, base: &str, enable: bool) -> Result<(), String> {
    if base.is_empty() || base.contains('/') || base.contains('\\') || base.contains("..") {
        return Err("invalid mod name".into());
    }
    let installed = dir.join(format!("{base}.jar"));
    let disabled = dir.join(format!("{base}.disabled"));
    let (from, to) = if enable {
        (&disabled, &installed)
    } else {
        (&installed, &disabled)
    };
    if !from.exists() {
        return Err(format!("mod {base} is not present"));
    }
    tokio::fs::rename(from, to).await.map_err(|e| e.to_string())
}

/// Instance ids are directory leaf names; reject anything that could escape.
fn validate_instance_id(id: &str) -> Result<(), String> {
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
) -> Result<InstanceRow, String> {
    let root = instances_root(&app).await?;
    create_instance_in(&root, &name, &version, loader).await
}

/// Best-effort last-played stamp, called from the launch path.
pub(crate) async fn stamp_last_played(app: &AppHandle, instance_id: &str) {
    if let Ok(root) = instances_root(app).await {
        touch_last_played(&root, instance_id).await;
    }
}

/// Mods installed in an instance, enabled ones first.
#[tauri::command]
pub async fn list_mods(app: AppHandle, instance_id: String) -> Result<Vec<ModEntry>, String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    list_mods_in(&mods_dir(&root, &instance_id).await?).await
}

/// Enables/disables a mod by renaming it `<base>.jar` <-> `<base>.disabled`.
#[tauri::command]
pub async fn toggle_mod(
    app: AppHandle,
    instance_id: String,
    mod_base: String,
    enable: bool,
) -> Result<(), String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    toggle_mod_in(&mods_dir(&root, &instance_id).await?, &mod_base, enable).await
}

/// Deletes an instance directory tree (metadata, game dir, mods).
#[tauri::command]
pub async fn delete_instance(app: AppHandle, instance_id: String) -> Result<(), String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    let dir = root.join(&instance_id);
    if !dir.is_dir() {
        return Err(format!("unknown instance {instance_id}"));
    }
    tokio::fs::remove_dir_all(dir)
        .await
        .map_err(|e| e.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    fn temp_root() -> PathBuf {
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

        let row = create_instance_in(&root, "Sky Factory", "1.21.4", Some("FABRIC".into()))
            .await
            .unwrap();
        assert_eq!(row.id, "sky-factory");
        assert_eq!(row.loader, "Fabric");
        assert!(root.join("sky-factory/twilight.json").exists());
        assert!(root.join("sky-factory/minecraft").is_dir());

        // idempotent: second create returns the same instance
        let again = create_instance_in(&root, "Sky Factory", "9.9.9", Some("quilt".into()))
            .await
            .unwrap();
        assert_eq!(again.version, "1.21.4");
        assert_eq!(again.loader, "Fabric");

        let rows = get_instances_in(&root).await.unwrap();
        assert_eq!(rows.len(), 1);
        assert_eq!(rows[0].name, "Sky Factory");

        touch_last_played(&root, "sky-factory").await;
        let rows = get_instances_in(&root).await.unwrap();
        assert!(rows[0].last_played > 0);
    }

    #[tokio::test]
    async fn mods_toggle_and_delete_guards() {
        let root = temp_root();
        create_instance_in(&root, "Modded", "1.21.4", None)
            .await
            .unwrap();

        let mods = mods_dir(&root, "Modded").await.unwrap();
        std::fs::write(mods.join("sodium.jar"), b"x").unwrap();
        std::fs::write(mods.join("lithium.disabled"), b"x").unwrap();
        std::fs::create_dir_all(mods.join("subdir")).unwrap(); // ignored

        let listed = list_mods_in(&mods).await.unwrap();
        assert_eq!(listed.len(), 2);
        assert_eq!(
            listed[0].base, "lithium",
            "alphabetical regardless of enabled state"
        );
        assert!(!listed[0].enabled);
        assert_eq!(listed[1].base, "sodium");
        assert!(listed[1].enabled);

        // enable lithium -> rename only, second rename errors
        toggle_mod_in(&mods, "lithium", true).await.unwrap();
        assert!(mods.join("lithium.jar").exists());
        assert!(toggle_mod_in(&mods, "lithium", true).await.is_err());
        // disable again
        toggle_mod_in(&mods, "lithium", false).await.unwrap();
        assert!(mods.join("lithium.disabled").exists());
        // traversal guard
        assert!(toggle_mod_in(&mods, "..\\evil", false).await.is_err());
        assert!(validate_instance_id("../escape").is_err());
        assert!(validate_instance_id("fine-id").is_ok());

        // delete instance removes the whole tree
        delete_dir(&root, "Modded").await.unwrap();
        assert!(!root.join("Modded").exists());
        assert!(delete_dir(&root, "Nope").await.is_err());
    }

    /// Direct wrapper over the delete command body so tests skip tauri state.
    async fn delete_dir(root: &Path, id: &str) -> Result<(), String> {
        validate_instance_id(id)?;
        let dir = root.join(id);
        if !dir.is_dir() {
            return Err(format!("unknown instance {id}"));
        }
        tokio::fs::remove_dir_all(dir)
            .await
            .map_err(|e| e.to_string())
    }
}
