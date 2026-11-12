// IPC bridge to the Modrinth `.mrpack` installer (`twilight-cli::modpack`).
// `inspect_modpack` reads pack facts (name, summary, versions, loader, file
// counts) for the drop-target modal; `install_mrpack` / `install_modpack`
// stage downloads + overrides into a new managed instance and write its
// `instance.json` metadata so the grid sees it.

use std::path::PathBuf;

use serde::Serialize;
use tauri::AppHandle;
use twilight_modrinth::Mrpack;

use twilight_cli::ModpackArgs;

use crate::instance::resolved_instances_root;
use crate::instances::{self, InstanceMeta, slugify, write_meta};
use crate::storage::shared_root;

/// Pack facts shown by the drag-and-drop install modal.
#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct ModpackInfo {
    pub name: String,
    /// Long-form description; empty when the pack carries none.
    pub summary: String,
    pub version_id: String,
    /// Target Minecraft version (`minecraft` dependency).
    pub game_version: String,
    /// `"fabric"` / `"quilt"`; empty means vanilla.
    pub loader: String,
    /// Pinned loader version; empty resolves the latest stable.
    pub loader_version: String,
    /// Entries in the index (`mods/…`, configs, overrides).
    pub file_count: usize,
    /// Entries actually downloaded for a client install
    /// (server-side-unsupported files never stage).
    pub download_count: usize,
    /// Extractable `overrides/` entries copied into the instance.
    pub override_count: usize,
    /// Archive size in bytes.
    pub archive_size: u64,
}

/// Reads the archive bytes: `http(s)://` URLs go through reqwest, anything
/// else is a local file path.
async fn fetch_archive(path_or_url: &str) -> Result<(u64, Vec<u8>), String> {
    if path_or_url.starts_with("http://") || path_or_url.starts_with("https://") {
        let bytes = reqwest::get(path_or_url)
            .await
            .map_err(|e| format!("cannot download {path_or_url}: {e}"))?
            .error_for_status()
            .map_err(|e| format!("cannot download {path_or_url}: {e}"))?
            .bytes()
            .await
            .map_err(|e| format!("cannot download {path_or_url}: {e}"))?;
        let len = u64::try_from(bytes.len()).unwrap_or(u64::MAX);
        return Ok((len, bytes.to_vec()));
    }
    let meta = tokio::fs::metadata(path_or_url)
        .await
        .map_err(|e| format!("cannot read {path_or_url}: {e}"))?;
    let bytes = tokio::fs::read(path_or_url)
        .await
        .map_err(|e| format!("cannot read {path_or_url}: {e}"))?;
    Ok((meta.len(), bytes))
}

/// Parses the pack and extracts the facts both inspect and install need.
async fn load_pack(
    path_or_url: &str,
) -> Result<(u64, Mrpack, twilight_modrinth::ModpackIndex), String> {
    let (size, bytes) = fetch_archive(path_or_url).await?;
    let mrpack = Mrpack::from_bytes(bytes).map_err(|e| format!("not a valid .mrpack: {e}"))?;
    let index = mrpack.index().clone();
    Ok((size, mrpack, index))
}

/// Loader decision from the dependencies table, mirroring the CLI:
/// `fabric-loader` / `quilt-loader`; a pack claiming both is rejected.
fn detect_loader(
    dependencies: &std::collections::BTreeMap<String, String>,
) -> Result<(String, String), String> {
    let fabric = dependencies.get("fabric-loader");
    let quilt = dependencies.get("quilt-loader");
    match (fabric, quilt) {
        (Some(_), Some(_)) => Err("this pack declares both fabric-loader and quilt-loader".into()),
        (Some(version), None) => Ok(("fabric".into(), version.trim().to_owned())),
        (None, Some(version)) => Ok(("quilt".into(), version.trim().to_owned())),
        (None, None) => Ok((String::new(), String::new())),
    }
}

fn non_empty(value: &str) -> Option<String> {
    let trimmed = value.trim();
    (!trimmed.is_empty()).then(|| trimmed.to_owned())
}

/// The instance's display id: the user's choice when non-empty, else the
/// pack label (name, falling back to the version id, then `modpack`).
fn chosen_id(index: &twilight_modrinth::ModpackIndex, instance_name: &str) -> String {
    let pack_label = non_empty(&index.name)
        .unwrap_or_else(|| non_empty(&index.version_id).unwrap_or_else(|| "modpack".into()));
    non_empty(instance_name).unwrap_or(pack_label)
}

/// Grid metadata for the freshly staged pack: the `minecraft` dependency is
/// the launch version (version id as a last resort), the loader table feeds
/// the loader pins, play counters start at zero.
fn meta_from_index(
    index: &twilight_modrinth::ModpackIndex,
    chosen: &str,
    loader: &str,
    loader_version: &str,
) -> InstanceMeta {
    InstanceMeta {
        version: non_empty(
            index
                .dependencies
                .get("minecraft")
                .map(String::as_str)
                .unwrap_or_default(),
        )
        .unwrap_or_else(|| non_empty(&index.version_id).unwrap_or_else(|| "unknown".into())),
        name: chosen.to_owned(),
        loader: non_empty(loader),
        loader_version: non_empty(loader_version),
        last_played: 0,
        total_time_played: 0,
    }
}

/// Reads the pack facts for the install modal.
#[tauri::command]
pub async fn inspect_modpack(path_or_url: String) -> Result<ModpackInfo, String> {
    let path_or_url = path_or_url.trim().to_owned();
    if path_or_url.is_empty() {
        return Err("modpack path or URL is required".into());
    }
    let (size, mrpack, index) = load_pack(&path_or_url).await?;
    let (loader, loader_version) = detect_loader(&index.dependencies)?;
    let game_dir = PathBuf::new();
    let download_count = mrpack
        .download_requests(&game_dir)
        .map_err(|e| e.to_string())?
        .len();
    let override_count = mrpack.override_paths().map_err(|e| e.to_string())?.len();
    Ok(ModpackInfo {
        name: index.name,
        summary: index.summary.unwrap_or_default(),
        version_id: index.version_id,
        game_version: non_empty(
            index
                .dependencies
                .get("minecraft")
                .map(String::as_str)
                .unwrap_or_default(),
        )
        .unwrap_or_default(),
        loader,
        loader_version,
        file_count: index.files.len(),
        download_count,
        override_count,
        archive_size: size,
    })
}

/// Core install shared by the drop modal and the wizard's Modpack tab:
/// stages the pack into the resolved instances library under a user-chosen
/// (or pack-derived) id and writes the grid metadata, then returns the id.
async fn install_pack(
    app: &AppHandle,
    path_or_url: &str,
    instance_name: &str,
) -> Result<String, String> {
    let path_or_url = path_or_url.trim();
    if path_or_url.is_empty() {
        return Err("modpack path or URL is required".into());
    }
    let (size, _mrpack, index) = load_pack(path_or_url).await?;
    let (loader, loader_version) = detect_loader(&index.dependencies)?;

    // display name: user's choice, falling back to the pack label
    let chosen = chosen_id(&index, instance_name);
    let id = slugify(&chosen);
    instances::validate_instance_id(&id)?;

    let shared_dir = shared_root(app).await?;
    let instances_dir = resolved_instances_root(app).await?;
    let instance_dir = instances_dir.join(&id);

    let args = ModpackArgs {
        path_or_url: path_or_url.to_owned(),
        instance_dir: Some(instance_dir.clone()),
        shared_dir: Some(shared_dir),
        temp_dir: None,
        dry_run: false,
    };
    twilight_cli::modpack::run_install(args)
        .await
        .map_err(|e| e.to_string())?;

    // grid metadata: without it the scan skips the directory entirely
    let meta = meta_from_index(&index, &chosen, &loader, &loader_version);
    write_meta(&instance_dir, &meta).await?;
    let _ = size; // archive size is inspect-only information
    Ok(id)
}

/// Installs a dropped `.mrpack` (local path) into the shared instance
/// library, returning the created instance id for grid auto-selection.
#[tauri::command]
pub async fn install_mrpack(
    app: AppHandle,
    path_or_url: String,
    instance_name: String,
) -> Result<String, String> {
    install_pack(&app, &path_or_url, &instance_name).await
}

/// Installs a `.mrpack` (local path or URL) from the wizard's Modpack tab;
/// the pack label names the instance.
#[tauri::command]
pub async fn install_modpack(app: AppHandle, path_or_url: String) -> Result<String, String> {
    install_pack(&app, &path_or_url, "").await
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::BTreeMap;

    fn index_with(
        name: &str,
        version_id: &str,
        deps: &[(&str, &str)],
    ) -> twilight_modrinth::ModpackIndex {
        twilight_modrinth::ModpackIndex {
            format_version: 1,
            game: "minecraft".into(),
            name: name.into(),
            version_id: version_id.into(),
            summary: None,
            dependencies: deps
                .iter()
                .map(|(k, v)| ((*k).to_owned(), (*v).to_owned()))
                .collect(),
            files: vec![],
        }
    }

    #[test]
    fn loader_decision_mirrors_the_cli_rules() {
        let deps = BTreeMap::from([("fabric-loader".to_owned(), "0.16.9".to_owned())]);
        assert_eq!(
            detect_loader(&deps).unwrap(),
            ("fabric".to_owned(), "0.16.9".to_owned())
        );

        let deps = BTreeMap::from([("quilt-loader".to_owned(), "   ".to_owned())]);
        assert_eq!(
            detect_loader(&deps).unwrap(),
            ("quilt".to_owned(), String::new()),
            "empty pin defers to the latest stable"
        );

        assert_eq!(
            detect_loader(&BTreeMap::new()).unwrap(),
            (String::new(), String::new())
        );

        let deps = BTreeMap::from([
            ("fabric-loader".to_owned(), "0.16.9".to_owned()),
            ("quilt-loader".to_owned(), "0.26.4".to_owned()),
        ]);
        assert!(detect_loader(&deps).is_err(), "ambiguous pack rejected");
    }

    #[test]
    fn instance_id_prefers_the_user_choice_then_the_pack_label() {
        let index = index_with("Twilight Archive Pack", "tap-1.0.0", &[]);
        assert_eq!(chosen_id(&index, "  My Pack "), "My Pack");
        assert_eq!(
            chosen_id(&index, "   "),
            "Twilight Archive Pack",
            "pack name"
        );

        let unnamed = index_with("   ", "tap-1.0.0", &[]);
        assert_eq!(chosen_id(&unnamed, ""), "tap-1.0.0", "version id fallback");

        let bare = index_with("   ", "   ", &[]);
        assert_eq!(chosen_id(&bare, ""), "modpack");
    }

    #[test]
    fn metadata_uses_the_minecraft_dependency_and_loader_table() {
        let index = index_with(
            "Pack",
            "v1",
            &[("minecraft", "1.21.4"), ("fabric-loader", "0.16.9")],
        );
        let meta = meta_from_index(&index, "My Pack", "fabric", "0.16.9");
        assert_eq!(meta.version, "1.21.4");
        assert_eq!(meta.name, "My Pack");
        assert_eq!(meta.loader.as_deref(), Some("fabric"));
        assert_eq!(meta.loader_version.as_deref(), Some("0.16.9"));
        assert_eq!(meta.last_played, 0);

        // no minecraft dependency: the version id carries the launch version
        let bare = index_with("Pack", "26.4-snapshot-8", &[]);
        let meta = meta_from_index(&bare, "x", "", "   ");
        assert_eq!(meta.version, "26.4-snapshot-8");
        assert_eq!(meta.loader, None, "vanilla pack");
        assert_eq!(meta.loader_version, None, "whitespace pin is not a pin");
    }
}
