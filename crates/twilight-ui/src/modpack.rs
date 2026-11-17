// IPC bridge to the Modrinth `.mrpack` installer (`twilight-cli::modpack`).
// `inspect_modpack` reads pack facts (name, summary, versions, loader, file
// counts) for the drop-target modal; `install_mrpack` / `install_modpack`
// stage downloads + overrides into a new managed instance and write its
// `instance.json` metadata so the grid sees it.

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};
use tauri::AppHandle;
use twilight_modrinth::{Mrpack, extract_archive};

use twilight_cli::ModpackArgs;

use crate::accounts::{load_settings, settings_path};
use crate::instance::resolved_instances_root;
use crate::instances::{self, InstanceMeta, instances_root, slugify, write_meta};
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

/// Loader decision from the dependencies table, mirroring the CLI: the four
/// spec loader keys; a pack claiming more than one loader is rejected.
fn detect_loader(
    dependencies: &std::collections::BTreeMap<String, String>,
) -> Result<(String, String), String> {
    const KEYS: [(&str, &str); 5] = [
        ("fabric-loader", "fabric"),
        ("quilt-loader", "quilt"),
        ("forge", "forge"),
        ("neoforge", "neoforge"),
        ("legacy-fabric", "legacyfabric"),
    ];
    let claimed: Vec<(&str, String)> = KEYS
        .iter()
        .filter_map(|(key, token)| {
            dependencies
                .get(*key)
                .map(|version| (*token, version.trim().to_owned()))
        })
        .collect();
    match claimed.len() {
        0 => Ok((String::new(), String::new())),
        1 => Ok((claimed[0].0.to_owned(), claimed[0].1.clone())),
        _ => Err(format!(
            "this pack declares more than one mod loader ({})",
            claimed
                .iter()
                .map(|(token, _)| *token)
                .collect::<Vec<_>>()
                .join(", ")
        )),
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
        icon_key: None,
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

/// The CurseForge `manifest.json` schema (subset; unknown fields ignored).
#[derive(Debug, Deserialize)]
struct CurseManifest {
    #[serde(default)]
    name: String,
    #[serde(default)]
    version: String,
    #[serde(default)]
    files: Vec<CurseFileRef>,
    /// Folder the pack mirrors the game dir from (`overrides` by default).
    #[serde(default)]
    overrides: String,
}

/// One `files[]` entry: CurseForge project + file ids (no URLs in manifests).
#[derive(Debug, Deserialize)]
struct CurseFileRef {
    #[serde(rename = "projectID", default)]
    project_id: u64,
    #[serde(rename = "fileID", default)]
    file_id: u64,
}

/// What a CurseForge import did, shown in the gate dialog after it runs.
#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct CurseImportReport {
    pub name: String,
    pub version: String,
    pub overrides_extracted: usize,
    pub files_listed: usize,
    /// Mod jars fetched through the CurseForge API (needs the Settings key).
    pub mods_downloaded: Vec<String>,
    /// Manifest files not downloaded (no key, or the API fetch failed).
    pub mods_skipped: usize,
    /// True when the BareBones gate marker was written for this import.
    pub barebones_marker: bool,
}

const CF_API_BASE: &str = "https://api.curseforge.com/v1";

/// Resolves the instance `minecraft` dir a CurseForge pack extracts into.
async fn game_dir_for(app: &AppHandle, instance_id: &str) -> Result<PathBuf, String> {
    instances::validate_instance_id(instance_id)?;
    let root = instances_root(app).await?;
    Ok(root.join(instance_id).join("minecraft"))
}

/// Destination for one `overrides/` entry, or `None` when it does not belong
/// to the overrides folder or escapes the game dir (zip-slip guard).
fn override_dest(game_dir: &Path, overrides_dir: &str, name: &str) -> Option<PathBuf> {
    let rest = name.strip_prefix(overrides_dir)?;
    let rel = rest.strip_prefix(['/', '\\'])?;
    if rel.is_empty() {
        return None;
    }
    let mut dest = game_dir.to_path_buf();
    for component in Path::new(rel).components() {
        match component {
            std::path::Component::Normal(part) => dest.push(part),
            // `..`, absolute roots, Windows prefixes: never leave the game dir
            _ => return None,
        }
    }
    Some(dest)
}

/// Mod-jar file name for a CurseForge download: the API's `fileName` (or the
/// URL's last segment), stripped of path/separator characters.
fn curse_file_name(file_name: &str, url: &str) -> String {
    let raw = if !file_name.is_empty() {
        file_name.to_owned()
    } else {
        reqwest::Url::parse(url)
            .ok()
            .and_then(|u| {
                u.path_segments()
                    .and_then(|mut segments| segments.next_back().map(str::to_owned))
            })
            .unwrap_or_default()
    };
    raw.chars()
        .filter(|c| !matches!(c, '/' | '\\' | ':' | '*' | '?' | '"' | '<' | '>' | '|'))
        .collect::<String>()
        .trim()
        .to_owned()
}

/// Fetches one CurseForge mod file into `mods_dir`; `Ok(None)` = skipped
/// (fetch failed or no usable URL — the import itself stays successful).
async fn fetch_curse_file(
    client: &reqwest::Client,
    api_key: &str,
    project_id: u64,
    file_id: u64,
    mods_dir: &Path,
) -> Result<Option<String>, String> {
    let url = format!("{CF_API_BASE}/mods/{project_id}/files/{file_id}");
    let Ok(meta) = client
        .get(&url)
        .header("x-api-key", api_key)
        .header(reqwest::header::ACCEPT, "application/json")
        .send()
        .await
        .and_then(|r| r.error_for_status())
    else {
        return Ok(None);
    };
    let Ok(data) = meta.json::<serde_json::Value>().await else {
        return Ok(None);
    };
    let download_url = data
        .pointer("/data/downloadUrl")
        .and_then(serde_json::Value::as_str)
        .unwrap_or_default();
    if !download_url.starts_with("https://") {
        return Ok(None);
    }
    let file_name = data
        .pointer("/data/fileName")
        .and_then(serde_json::Value::as_str)
        .unwrap_or_default();
    let name = curse_file_name(file_name, download_url);
    if name.is_empty() {
        return Ok(None);
    }
    let Ok(resp) = client.get(download_url).send().await else {
        return Ok(None);
    };
    let Ok(resp) = resp.error_for_status() else {
        return Ok(None);
    };
    let Ok(bytes) = resp.bytes().await else {
        return Ok(None);
    };
    std::fs::write(mods_dir.join(&name), &bytes).map_err(|e| e.to_string())?;
    Ok(Some(name))
}

/// Imports a CurseForge modpack zip (manifest.json + overrides/) into an
/// existing instance: `overrides/` lands in the instance's `minecraft` dir
/// (zip-slip guarded) and the BareBones gate marker is written when the pack
/// is the BareBones Template. Manifest mod files resolve through
/// api.curseforge.com only when the user configured an API key in Settings —
/// without a key they are reported as skipped, keeping the default flow FOSS.
#[tauri::command]
pub async fn import_curseforge_pack(
    app: AppHandle,
    zip_path: String,
    instance_id: String,
) -> Result<CurseImportReport, String> {
    let bytes = std::fs::read(&zip_path).map_err(|e| format!("cannot read {zip_path}: {e}"))?;
    let game_dir = game_dir_for(&app, &instance_id).await?;
    let api_key = load_settings(&settings_path(&app).await?)
        .await
        .curseforge_api_key
        .unwrap_or_default();
    import_curseforge_pack_core(&game_dir, api_key.trim(), &bytes).await
}

/// AppHandle-free core of [`import_curseforge_pack`] for hermetic tests.
pub(crate) async fn import_curseforge_pack_core(
    game_dir: &Path,
    api_key: &str,
    bytes: &[u8],
) -> Result<CurseImportReport, String> {
    let entries = extract_archive(bytes).map_err(|e| e.to_string())?;
    let manifest_raw = entries
        .iter()
        .find(|(name, _)| name == "manifest.json")
        .map(|(_, data)| data)
        .ok_or_else(|| "not a CurseForge modpack: manifest.json is missing".to_owned())?;
    let manifest: CurseManifest = serde_json::from_slice(manifest_raw)
        .map_err(|e| format!("malformed CurseForge manifest.json: {e}"))?;

    let mods_dir = game_dir.join("mods");

    let overrides_dir = if manifest.overrides.is_empty() {
        "overrides".to_owned()
    } else {
        manifest.overrides.trim_matches(['/', '\\']).to_owned()
    };
    let mut overrides_extracted = 0usize;
    for (name, data) in &entries {
        let Some(dest) = override_dest(game_dir, &overrides_dir, name) else {
            continue;
        };
        if name.ends_with('/') {
            std::fs::create_dir_all(&dest).map_err(|e| e.to_string())?;
            continue;
        }
        if let Some(parent) = dest.parent() {
            std::fs::create_dir_all(parent).map_err(|e| e.to_string())?;
        }
        std::fs::write(&dest, data).map_err(|e| e.to_string())?;
        overrides_extracted += 1;
    }

    // the marker satisfies the BareBones gate on its own; only the BareBones
    // pack earns it (its overrides/mods carry the real compat jars)
    let barebones = manifest.name.to_ascii_lowercase().contains("barebones");
    if barebones {
        std::fs::create_dir_all(&mods_dir).map_err(|e| e.to_string())?;
        std::fs::write(
            mods_dir.join(twilight_launch::BAREBONES_MARKER_FILE),
            format!("imported: {} {}\n", manifest.name, manifest.version),
        )
        .map_err(|e| e.to_string())?;
    }

    // manifest files need the API to resolve URLs; zero-key flow lists them
    // as skipped instead (the UI tells the user what to do about Scalar)
    let mut downloaded = Vec::new();
    let mut skipped = 0usize;
    let listed: Vec<_> = manifest
        .files
        .iter()
        .filter(|f| f.project_id != 0 && f.file_id != 0)
        .collect();
    if api_key.trim().is_empty() {
        skipped = listed.len();
    } else {
        let client = reqwest::Client::new();
        for file in &listed {
            match fetch_curse_file(
                &client,
                api_key.trim(),
                file.project_id,
                file.file_id,
                &mods_dir,
            )
            .await
            {
                Ok(Some(name)) => downloaded.push(name),
                Ok(None) | Err(_) => skipped += 1,
            }
        }
    }

    Ok(CurseImportReport {
        name: manifest.name,
        version: manifest.version,
        overrides_extracted,
        files_listed: listed.len(),
        mods_downloaded: downloaded,
        mods_skipped: skipped,
        barebones_marker: barebones,
    })
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

    /// Bitwise CRC-32 (reflected, 0xEDB88320): the zip reader verifies every
    /// entry against this, so the test archive must carry real checksums.
    fn crc32_of(data: &[u8]) -> u32 {
        let mut crc: u32 = 0xFFFF_FFFF;
        for &byte in data {
            crc ^= u32::from(byte);
            for _ in 0..8 {
                let mask = (crc & 1).wrapping_neg();
                crc = (crc >> 1) ^ (0xEDB8_8320 & mask);
            }
        }
        !crc
    }

    /// Builds a minimal stored (uncompressed) ZIP from `(name, content)` pairs.
    fn stored_zip(entries: &[(&str, &[u8])]) -> Vec<u8> {
        let mut out: Vec<u8> = Vec::new();
        let mut central: Vec<u8> = Vec::new();
        for (name, content) in entries {
            let name_bytes = name.as_bytes();
            let crc = crc32_of(content);
            let offset = out.len() as u32;
            // local file header
            out.extend_from_slice(b"PK\x03\x04");
            out.extend_from_slice(&20u16.to_le_bytes()); // version needed
            out.extend_from_slice(&0u16.to_le_bytes()); // flags
            out.extend_from_slice(&0u16.to_le_bytes()); // stored
            out.extend_from_slice(&0u16.to_le_bytes()); // time
            out.extend_from_slice(&0u16.to_le_bytes()); // date
            out.extend_from_slice(&crc.to_le_bytes());
            out.extend_from_slice(&(content.len() as u32).to_le_bytes());
            out.extend_from_slice(&(content.len() as u32).to_le_bytes());
            out.extend_from_slice(&(name_bytes.len() as u16).to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes()); // extra len
            out.extend_from_slice(name_bytes);
            out.extend_from_slice(content);
            // central directory record
            central.extend_from_slice(b"PK\x01\x02");
            central.extend_from_slice(&20u16.to_le_bytes()); // version made
            central.extend_from_slice(&20u16.to_le_bytes()); // version needed
            central.extend_from_slice(&0u16.to_le_bytes()); // flags
            central.extend_from_slice(&0u16.to_le_bytes()); // stored
            central.extend_from_slice(&0u16.to_le_bytes()); // time
            central.extend_from_slice(&0u16.to_le_bytes()); // date
            central.extend_from_slice(&crc.to_le_bytes());
            central.extend_from_slice(&(content.len() as u32).to_le_bytes());
            central.extend_from_slice(&(content.len() as u32).to_le_bytes());
            central.extend_from_slice(&(name_bytes.len() as u16).to_le_bytes());
            central.extend_from_slice(&0u16.to_le_bytes()); // extra
            central.extend_from_slice(&0u16.to_le_bytes()); // comment
            central.extend_from_slice(&0u16.to_le_bytes()); // disk start
            central.extend_from_slice(&0u16.to_le_bytes()); // internal attrs
            central.extend_from_slice(&0u32.to_le_bytes()); // external attrs
            central.extend_from_slice(&offset.to_le_bytes());
            central.extend_from_slice(name_bytes);
        }
        let central_offset = out.len() as u32;
        out.extend_from_slice(&central);
        // end of central directory
        out.extend_from_slice(b"PK\x05\x06");
        out.extend_from_slice(&0u16.to_le_bytes()); // disk
        out.extend_from_slice(&0u16.to_le_bytes()); // cd disk
        out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
        out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
        out.extend_from_slice(&(central.len() as u32).to_le_bytes());
        out.extend_from_slice(&central_offset.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes()); // comment len
        out
    }

    fn scratch(tag: &str) -> PathBuf {
        let dir = std::env::temp_dir().join(format!(
            "cfpack-{tag}-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .map(|d| d.subsec_nanos())
                .unwrap_or_default()
        ));
        std::fs::create_dir_all(&dir).unwrap();
        dir
    }

    #[tokio::test]
    async fn zero_key_import_extracts_overrides_and_earns_the_marker() {
        let manifest = br#"{"manifestType":"minecraftModpack","manifestVersion":1,
            "name":"BareBones Template (Cleanroom)","version":"1.3.0",
            "files":[{"projectID":410222,"fileID":5123456,"required":true}],
            "overrides":"overrides"}"#;
        let zip = stored_zip(&[
            ("manifest.json", manifest),
            ("overrides/mods/fugue-1.0.jar", b"fugue jar"),
            ("overrides/config/barebones.cfg", b"cfg"),
            ("overrides/", b""),
        ]);
        let game_dir = scratch("import");
        let report = import_curseforge_pack_core(&game_dir, "", &zip)
            .await
            .unwrap();
        assert_eq!(report.name, "BareBones Template (Cleanroom)");
        assert_eq!(report.version, "1.3.0");
        assert_eq!(report.overrides_extracted, 2, "dir entry is not a write");
        assert_eq!(report.mods_downloaded, Vec::<String>::new());
        assert_eq!(report.mods_skipped, 1, "zero-key flow skips API files");
        assert!(report.barebones_marker);
        assert!(game_dir.join("mods/fugue-1.0.jar").exists());
        assert!(game_dir.join("config/barebones.cfg").exists());
        assert!(
            game_dir
                .join("mods/barebones-template-cleanroom.marker")
                .exists()
        );
        std::fs::remove_dir_all(&game_dir).ok();
    }

    #[tokio::test]
    async fn zip_slip_entries_never_leave_the_game_dir() {
        let manifest = br#"{"name":"BareBones Template (Cleanroom)","version":"1.0.0",
            "files":[],"overrides":"overrides"}"#;
        let zip = stored_zip(&[
            ("manifest.json", manifest),
            ("overrides/mods/ok.jar", b"ok"),
            ("overrides/../evil.txt", b"escaped"),
            ("overrides/../../worse.txt", b"more escaped"),
        ]);
        let game_dir = scratch("slip");
        let report = import_curseforge_pack_core(&game_dir, "", &zip)
            .await
            .unwrap();
        assert_eq!(report.overrides_extracted, 1, "only the safe entry");
        assert!(game_dir.join("mods/ok.jar").exists());
        assert!(!std::env::temp_dir().join("evil.txt").exists());
        assert!(!std::env::temp_dir().join("worse.txt").exists());
        std::fs::remove_dir_all(&game_dir).ok();
    }

    #[tokio::test]
    async fn non_barebones_packs_earn_no_marker() {
        let manifest = br#"{"name":"Some Other Pack","version":"2.0.0",
            "files":[],"overrides":"overrides"}"#;
        let zip = stored_zip(&[
            ("manifest.json", manifest),
            ("overrides/config/x.cfg", b"x"),
        ]);
        let game_dir = scratch("other");
        let report = import_curseforge_pack_core(&game_dir, "", &zip)
            .await
            .unwrap();
        assert!(!report.barebones_marker);
        assert!(
            !game_dir
                .join("mods/barebones-template-cleanroom.marker")
                .exists()
        );
        assert_eq!(report.overrides_extracted, 1);
        std::fs::remove_dir_all(&game_dir).ok();
    }

    #[tokio::test]
    async fn archives_without_a_manifest_are_rejected() {
        let zip = stored_zip(&[("readme.txt", b"no manifest")]);
        let game_dir = scratch("nomanifest");
        let err = import_curseforge_pack_core(&game_dir, "", &zip)
            .await
            .unwrap_err();
        assert!(err.contains("manifest.json is missing"));
        std::fs::remove_dir_all(&game_dir).ok();
    }
}
