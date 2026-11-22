// Universal instance archive importer. A single `inspect` command sniffs the
// archive (Prism/MultiMC `.zip`, CurseForge `.zip`, `.mrpack`, `.twpack`) and
// one `import` command dispatches to the matching pipeline. All ZIP entries
// are written through a host-independent zip-slip guard.

use std::path::{Path, PathBuf};

use serde::Serialize;
use tauri::AppHandle;
use twilight_modrinth::extract_archive;

use crate::instance::{parse_cfg, parse_mmc_pack, set_instance_group};
use crate::instances::{InstanceMeta, instances_root, slugify, validate_instance_id, write_meta};
use crate::modpack::{CurseMissingMod, inspect_modpack_core};
use crate::{modpack, twpack};

type Entries = Vec<(String, Vec<u8>)>;

/// Format token used by the UI to localize the preview badge.
#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct InstanceImportInfo {
    pub format: String,
    pub name: String,
    pub pack_version: String,
    pub game_version: String,
    pub loader: String,
    pub loader_version: String,
    pub icon_key: Option<String>,
    pub file_count: usize,
    pub override_count: usize,
    pub archive_size: u64,
    /// CurseForge manifest mods that need a browser fallback.
    pub missing_mods: Vec<CurseMissingMod>,
    /// Internal archive root; skipped in the IPC payload.
    #[serde(skip)]
    pub prefix: String,
}

/// Result of one import, consumed by the wizard's confirmation UI.
#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct InstanceImportOutcome {
    pub id: String,
    pub format: String,
    pub missing_mods: Vec<CurseMissingMod>,
    pub warnings: Vec<String>,
}

/// Locates the single top-level wrapper folder that holds `marker`, if any.
/// `Some("")` means the marker is at the archive root.
fn prefix_for(entries: &Entries, marker: &str) -> Option<String> {
    for (name, _) in entries {
        let Some(prefix) = name.strip_suffix(marker) else {
            continue;
        };
        let folder = prefix.trim_end_matches(['/', '\\']);
        if folder.is_empty() {
            return Some(String::new());
        }
        if !folder.contains(['/', '\\']) {
            return Some(format!("{folder}/"));
        }
    }
    None
}

/// Rejects absolute, drive-letter, backslash and `..` entry paths on every
/// host (Linux `Path` would otherwise accept `C:/windows/system32` as plain
/// components). Returns the safe relative path to write under a game dir.
fn safe_relative(raw: &str) -> Option<PathBuf> {
    if raw.is_empty() || raw.starts_with('/') || raw.contains(['\\', '\0', ':']) {
        return None;
    }
    let mut out = PathBuf::new();
    for part in raw.split('/') {
        match part {
            "" | "." => continue,
            ".." => return None,
            _ => out.push(part),
        }
    }
    (!out.as_os_str().is_empty()).then_some(out)
}

/// Resolves an entry below the archive root prefix into a safe relative path.
fn entry_relative(name: &str, prefix: &str) -> Option<PathBuf> {
    let clean = name.strip_prefix(prefix).unwrap_or(name);
    safe_relative(clean)
}

fn optional(value: &str) -> Option<String> {
    let value = value.trim();
    (!value.is_empty()).then(|| value.to_owned())
}

/// Prism/MultiMC icon keys mapped to our vendored namespaces.
/// dropped rather than guessed: they may refer to a launcher-local icon that
/// does not exist here.
fn prism_icon_key(raw: Option<&str>) -> Option<String> {
    const PRISM: &[&str] = &[
        "grass",
        "dirt",
        "stone",
        "diamond",
        "gold",
        "iron",
        "brick",
        "planks",
        "creeper",
        "squarecreeper",
        "enderman",
        "skeleton",
        "steve",
        "herobrine",
        "chicken",
        "fox",
        "bee",
        "meat",
        "enderpearl",
        "netherstar",
        "flame",
        "tnt",
        "gear",
        "magitech",
        "fabricmc",
        "quiltmc",
        "neoforged",
        "modrinth",
        "ftb_logo",
        "prismlauncher",
    ];
    const FREESM: &[&str] = &[
        "grass_legacy",
        "dirt_legacy",
        "stone_legacy",
        "brick_legacy",
        "planks_legacy",
        "diamond_legacy",
        "gold_legacy",
        "iron_legacy",
        "tnt_legacy",
        "creeper_legacy",
        "squarecreeper_legacy",
        "skeleton_legacy",
        "chicken_legacy",
        "steve_legacy",
        "herobrine_legacy",
        "enderpearl_legacy",
        "netherstar_legacy",
        "meat_legacy",
        "gear_legacy",
        "magitech_legacy",
        "ftb_logo_legacy",
        "ftb_glow",
        "infinity_legacy",
    ];
    let key = raw?.trim();
    if key.is_empty() {
        return None;
    }
    let bare = key
        .strip_prefix("prism:")
        .or_else(|| key.strip_prefix("freesm:"))
        .unwrap_or(key);
    if let Some(rest) = key.strip_prefix("twemoji:") {
        return (!rest.is_empty()).then(|| key.to_owned());
    }
    if FREESM.contains(&bare) {
        return Some(format!("freesm:{bare}"));
    }
    if PRISM.contains(&bare) {
        return Some(format!("prism:{bare}"));
    }
    None
}

/// CurseForge's `modLoaders[].id` is `token-version`; map it to our loader
/// tokens (including the Cleanroom/Legacy Fabric spellings Prism uses).
fn curse_loader(manifest: &modpack::CurseManifest) -> (String, String) {
    let Some(entry) = manifest
        .minecraft
        .mod_loaders
        .iter()
        .find(|loader| loader.primary)
        .or_else(|| manifest.minecraft.mod_loaders.first())
    else {
        return (String::new(), String::new());
    };
    let (token, version) = match entry.id.split_once('-') {
        Some((token, version)) => (token, version),
        None => (entry.id.as_str(), ""),
    };
    let token = match token.to_ascii_lowercase().as_str() {
        "fabric" => "fabric",
        "quilt" => "quilt",
        "forge" => "forge",
        "neoforge" | "neoforged" => "neoforge",
        "legacyfabric" | "legacy-fabric" => "legacyfabric",
        "cleanroom" | "cleanroommc" => "cleanroom",
        _ => token,
    };
    (token.to_owned(), version.to_owned())
}

/// Inspector for a `.zip`: Prism/MultiMC instance or CurseForge modpack.
fn inspect_zip(bytes: &[u8], size: u64) -> Result<InstanceImportInfo, String> {
    let entries = extract_archive(bytes).map_err(|e| e.to_string())?;
    if let Some(prefix) =
        prefix_for(&entries, "mmc-pack.json").or_else(|| prefix_for(&entries, "instance.cfg"))
    {
        return prism_info(&entries, &prefix, size);
    }
    if let Some(prefix) = prefix_for(&entries, "manifest.json") {
        let raw = entries
            .iter()
            .find(|(name, _)| name.strip_prefix(&prefix) == Some("manifest.json"))
            .map(|(_, data)| data.as_slice())
            .ok_or_else(|| "manifest.json is missing".to_owned())?;
        let manifest = modpack::parse_curse_manifest(raw)?;
        if !manifest.files.is_empty() || !manifest.minecraft.version.is_empty() {
            return curse_info(&entries, &prefix, &manifest, size);
        }
    }
    Err("unrecognized instance archive: expected mmc-pack.json / instance.cfg or a CurseForge manifest.json".into())
}

/// Facts read out of a Prism/MultiMC export.
fn prism_info(entries: &Entries, prefix: &str, size: u64) -> Result<InstanceImportInfo, String> {
    let cfg_raw = entries
        .iter()
        .find(|(name, _)| name.strip_prefix(prefix) == Some("instance.cfg"))
        .map(|(_, data)| String::from_utf8_lossy(data).into_owned())
        .unwrap_or_default();
    let cfg = parse_cfg(&cfg_raw);
    let pack_raw = entries
        .iter()
        .find(|(name, _)| name.strip_prefix(prefix) == Some("mmc-pack.json"))
        .map(|(_, data)| data.as_slice())
        .unwrap_or(b"{}");
    let pack: serde_json::Value =
        serde_json::from_slice(pack_raw).map_err(|e| format!("malformed mmc-pack.json: {e}"))?;
    let (game_version, loader) = parse_mmc_pack(&pack);
    let (loader, loader_version) = match loader {
        Some((token, version)) => (token, version),
        None => (String::new(), String::new()),
    };
    let fallback_name = prefix
        .trim_end_matches('/')
        .rsplit(['/', '\\'])
        .next()
        .filter(|name| !name.is_empty())
        .unwrap_or("Prism Instance")
        .to_owned();
    let name = cfg
        .get("name")
        .map(String::as_str)
        .unwrap_or(&fallback_name)
        .trim()
        .to_owned();
    let file_count = entries
        .iter()
        .filter(|(name, _)| {
            let clean = name.strip_prefix(prefix).unwrap_or(name);
            clean.starts_with("minecraft/") || clean.starts_with(".minecraft/")
        })
        .count();
    Ok(InstanceImportInfo {
        format: "prism".to_owned(),
        name: if name.is_empty() { fallback_name } else { name },
        pack_version: String::new(),
        game_version: game_version.unwrap_or_default(),
        loader,
        loader_version,
        icon_key: prism_icon_key(cfg.get("iconKey").map(String::as_str)),
        file_count,
        override_count: 0,
        archive_size: size,
        missing_mods: Vec::new(),
        prefix: prefix.to_owned(),
    })
}

/// Facts read out of a CurseForge manifest.
fn curse_info(
    entries: &Entries,
    prefix: &str,
    manifest: &modpack::CurseManifest,
    size: u64,
) -> Result<InstanceImportInfo, String> {
    let (loader, loader_version) = curse_loader(manifest);
    let overrides = if manifest.overrides.trim().is_empty() {
        "overrides".to_owned()
    } else {
        manifest.overrides.trim_matches(['/', '\\']).to_owned()
    };
    let override_count = entries
        .iter()
        .filter(|(name, _)| {
            let clean = name.strip_prefix(prefix).unwrap_or(name);
            clean.starts_with(&format!("{overrides}/")) || clean.starts_with("client-overrides/")
        })
        .count();
    let missing_mods = manifest
        .files
        .iter()
        .filter(|file| file.project_id != 0 && file.file_id != 0)
        .map(|file| CurseMissingMod {
            project_id: file.project_id,
            file_id: file.file_id,
            required: file.required,
            url: modpack::curse_fallback_url(file.project_id, file.file_id),
        })
        .collect();
    Ok(InstanceImportInfo {
        format: "curseforge".to_owned(),
        name: manifest.name.clone(),
        pack_version: manifest.version.clone(),
        game_version: manifest.minecraft.version.clone(),
        loader,
        loader_version,
        icon_key: None,
        file_count: manifest.files.len(),
        override_count,
        archive_size: size,
        missing_mods,
        prefix: prefix.to_owned(),
    })
}

/// Extension of a local path or http(s) URL (query strings ignored).
fn archive_extension(target: &str) -> String {
    let name = if target.starts_with("http://") || target.starts_with("https://") {
        reqwest::Url::parse(target)
            .ok()
            .and_then(|url| {
                url.path_segments()
                    .and_then(|mut s| s.next_back().map(str::to_owned))
            })
            .unwrap_or_default()
    } else {
        Path::new(target)
            .file_name()
            .map(|name| name.to_string_lossy().into_owned())
            .unwrap_or_default()
    };
    Path::new(&name)
        .extension()
        .map(|ext| ext.to_ascii_lowercase().to_string_lossy().into_owned())
        .unwrap_or_default()
}

/// AppHandle-free inspector, shared by the command and the import dispatch.
pub(crate) async fn inspect_instance_import_core(
    path_or_url: &str,
) -> Result<InstanceImportInfo, String> {
    let target = path_or_url.trim();
    if target.is_empty() {
        return Err("archive path or URL is required".into());
    }
    match archive_extension(target).as_str() {
        "mrpack" => {
            let info = inspect_modpack_core(target).await?;
            Ok(InstanceImportInfo {
                format: "modrinth".to_owned(),
                name: info.name,
                pack_version: info.version_id,
                game_version: info.game_version,
                loader: info.loader,
                loader_version: info.loader_version,
                icon_key: None,
                file_count: info.file_count,
                override_count: info.override_count,
                archive_size: info.archive_size,
                missing_mods: Vec::new(),
                prefix: String::new(),
            })
        }
        "twpack" => {
            let info = twpack::inspect_twpack_core(target).await?;
            Ok(InstanceImportInfo {
                format: "twpack".to_owned(),
                name: info.name,
                pack_version: String::new(),
                game_version: info.game_version,
                loader: info.loader.unwrap_or_default(),
                loader_version: info.loader_version.unwrap_or_default(),
                icon_key: None,
                file_count: info.file_count,
                override_count: 0,
                archive_size: 0,
                missing_mods: Vec::new(),
                prefix: String::new(),
            })
        }
        "zip" => {
            let (size, bytes) = modpack::fetch_archive(target).await?;
            inspect_zip(&bytes, size)
        }
        other => Err(format!(
            "unsupported archive type{}{}",
            if other.is_empty() { "" } else { ": ." },
            other
        )),
    }
}

#[tauri::command]
pub async fn inspect_instance_import(path_or_url: String) -> Result<InstanceImportInfo, String> {
    inspect_instance_import_core(&path_or_url).await
}

/// Staged Prism/MultiMC extraction under `root`, returning the created id and
/// its metadata. Hermetic so tests can exercise path guards without Tauri.
fn import_prism_core(
    root: &Path,
    chosen: &str,
    info: &InstanceImportInfo,
    bytes: &[u8],
) -> Result<(String, InstanceMeta), String> {
    let entries = extract_archive(bytes).map_err(|e| e.to_string())?;
    let id = slugify(chosen);
    validate_instance_id(&id)?;
    let instance_dir = root.join(&id);
    if instance_dir.exists() {
        return Err(format!("instance {id} already exists; pick another name"));
    }
    let game_dir = instance_dir.join("minecraft");
    std::fs::create_dir_all(&game_dir).map_err(|e| e.to_string())?;

    for (name, data) in &entries {
        let Some(rel) = entry_relative(name, &info.prefix) else {
            continue; // zip-slip / traversal attempt: silently refuse
        };
        let rel_text = rel.to_string_lossy().replace('\\', "/");
        let dest = if let Some(rest) = rel_text
            .strip_prefix("minecraft/")
            .or_else(|| rel_text.strip_prefix(".minecraft/"))
        {
            let Some(inner) = safe_relative(rest) else {
                continue;
            };
            game_dir.join(inner)
        } else if !rel_text.contains('/') && rel_text.starts_with("icon.") {
            instance_dir.join(&rel_text)
        } else {
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
    }

    let meta = InstanceMeta {
        version: if info.game_version.is_empty() {
            "unknown".to_owned()
        } else {
            info.game_version.clone()
        },
        name: chosen.to_owned(),
        loader: optional(&info.loader),
        loader_version: optional(&info.loader_version),
        last_played: 0,
        total_time_played: 0,
        icon_key: info.icon_key.clone(),
    };
    Ok((id, meta))
}

/// Creates the empty managed instance a CurseForge import extracts into.
fn prepare_instance(root: &Path, chosen: &str) -> Result<(String, PathBuf), String> {
    let id = slugify(chosen);
    validate_instance_id(&id)?;
    let dir = root.join(&id);
    if dir.exists() {
        return Err(format!("instance {id} already exists; pick another name"));
    }
    std::fs::create_dir_all(dir.join("minecraft")).map_err(|e| e.to_string())?;
    Ok((id, dir))
}

#[tauri::command]
pub async fn import_instance_archive(
    app: AppHandle,
    path_or_url: String,
    instance_name: String,
    group: Option<String>,
) -> Result<InstanceImportOutcome, String> {
    let target = path_or_url.trim().to_owned();
    let info = inspect_instance_import_core(&target).await?;
    let chosen = {
        let typed = instance_name.trim();
        if typed.is_empty() {
            let fallback = if info.name.trim().is_empty() {
                "instance"
            } else {
                info.name.trim()
            };
            fallback.to_owned()
        } else {
            typed.to_owned()
        }
    };
    let root = instances_root(&app).await?;
    let mut warnings = Vec::new();
    let (id, missing_mods) = match info.format.as_str() {
        "prism" => {
            let (_, bytes) = modpack::fetch_archive(&target).await?;
            let (id, meta) =
                import_prism_core(&root, &chosen, &info, &bytes).inspect_err(|_| {
                    let _ = std::fs::remove_dir_all(root.join(slugify(&chosen)));
                })?;
            write_meta(&root.join(&id), &meta).await?;
            (id, Vec::new())
        }
        "curseforge" => {
            let (_, bytes) = modpack::fetch_archive(&target).await?;
            let (id, dir) = prepare_instance(&root, &chosen).inspect_err(|_| {
                let _ = std::fs::remove_dir_all(root.join(slugify(&chosen)));
            })?;
            let key = crate::accounts::load_settings(&crate::accounts::settings_path(&app).await?)
                .await
                .curseforge_api_key
                .unwrap_or_default();
            let report = match modpack::import_curseforge_pack_core(
                &dir.join("minecraft"),
                key.trim(),
                &bytes,
                None,
            )
            .await
            {
                Ok(report) => report,
                Err(e) => {
                    let _ = std::fs::remove_dir_all(&dir);
                    return Err(e);
                }
            };
            let meta = InstanceMeta {
                version: if info.game_version.is_empty() {
                    "unknown".to_owned()
                } else {
                    info.game_version.clone()
                },
                name: chosen.clone(),
                loader: optional(&info.loader),
                loader_version: optional(&info.loader_version),
                last_played: 0,
                total_time_played: 0,
                icon_key: None,
            };
            write_meta(&dir, &meta).await?;
            (id, report.missing_mods)
        }
        "modrinth" => {
            let id = modpack::install_pack(&app, &target, &chosen).await?;
            (id, Vec::new())
        }
        "twpack" => {
            let id = twpack::install_twpack(app.clone(), target.clone(), chosen.clone()).await?;
            (id, Vec::new())
        }
        other => return Err(format!("unsupported import format: {other}")),
    };

    if let Some(label) = group.as_deref().map(str::trim).filter(|g| !g.is_empty())
        && let Err(e) = set_instance_group(app.clone(), id.clone(), Some(label.to_owned())).await
    {
        warnings.push(format!(
            "Instance created, but the group could not be set: {e}"
        ));
    }

    Ok(InstanceImportOutcome {
        id,
        format: info.format,
        missing_mods,
        warnings,
    })
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::time::{SystemTime, UNIX_EPOCH};

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

    /// Minimal stored (uncompressed) ZIP with real CRC-32 checksums.
    fn stored_zip(entries: &[(&str, &[u8])]) -> Vec<u8> {
        let mut out = Vec::new();
        let mut central = Vec::new();
        for (name, content) in entries {
            let name_bytes = name.as_bytes();
            let crc = crc32_of(content);
            let offset = out.len() as u32;
            out.extend_from_slice(b"PK\x03\x04");
            out.extend_from_slice(&20u16.to_le_bytes());
            out.extend_from_slice(&[0; 8]);
            out.extend_from_slice(&crc.to_le_bytes());
            out.extend_from_slice(&(content.len() as u32).to_le_bytes());
            out.extend_from_slice(&(content.len() as u32).to_le_bytes());
            out.extend_from_slice(&(name_bytes.len() as u16).to_le_bytes());
            out.extend_from_slice(&0u16.to_le_bytes());
            out.extend_from_slice(name_bytes);
            out.extend_from_slice(content);
            central.extend_from_slice(b"PK\x01\x02");
            central.extend_from_slice(&[20u8; 2]);
            central.extend_from_slice(&[20u8; 2]);
            central.extend_from_slice(&[0; 8]);
            central.extend_from_slice(&crc.to_le_bytes());
            central.extend_from_slice(&(content.len() as u32).to_le_bytes());
            central.extend_from_slice(&(content.len() as u32).to_le_bytes());
            central.extend_from_slice(&(name_bytes.len() as u16).to_le_bytes());
            central.extend_from_slice(&[0; 12]);
            central.extend_from_slice(&offset.to_le_bytes());
            central.extend_from_slice(name_bytes);
        }
        let central_offset = out.len() as u32;
        out.extend_from_slice(&central);
        out.extend_from_slice(b"PK\x05\x06");
        out.extend_from_slice(&[0; 4]);
        out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
        out.extend_from_slice(&(entries.len() as u16).to_le_bytes());
        out.extend_from_slice(&(central.len() as u32).to_le_bytes());
        out.extend_from_slice(&central_offset.to_le_bytes());
        out.extend_from_slice(&0u16.to_le_bytes());
        out
    }

    fn scratch(tag: &str) -> PathBuf {
        let nanos = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .map(|d| d.subsec_nanos())
            .unwrap_or_default();
        let dir = std::env::temp_dir().join(format!("import-{tag}-{}-{nanos}", std::process::id()));
        std::fs::create_dir_all(&dir).unwrap();
        dir
    }

    #[test]
    fn prism_zip_root_level_detection_and_extraction() {
        let zip = stored_zip(&[
            ("instance.cfg", b"name=Skyblock\niconKey=grass\n"),
            (
                "mmc-pack.json",
                br#"{"components":[{"uid":"net.minecraft","version":"1.20.1"},
                    {"uid":"net.fabricmc.fabric-loader","version":"0.16.9"}]}"#,
            ),
            ("minecraft/mods/fabric-api.jar", b"jar"),
            ("minecraft/config/options.txt", b"gamma:1.0"),
        ]);
        let info = inspect_zip(&zip, zip.len() as u64).unwrap();
        assert_eq!(info.format, "prism");
        assert_eq!(info.name, "Skyblock");
        assert_eq!(info.game_version, "1.20.1");
        assert_eq!(info.loader, "fabric");
        assert_eq!(info.icon_key.as_deref(), Some("prism:grass"));
        assert_eq!(info.file_count, 2);

        let root = scratch("prism-root");
        let (id, meta) = import_prism_core(&root, "Skyblock", &info, &zip).unwrap();
        assert_eq!(id, "skyblock");
        assert_eq!(meta.version, "1.20.1");
        assert!(
            root.join("skyblock/minecraft/mods/fabric-api.jar")
                .is_file()
        );
        assert!(root.join("skyblock/minecraft/config/options.txt").is_file());
        std::fs::remove_dir_all(&root).ok();
    }

    #[test]
    fn prism_nested_folder_and_legacyfabric_intermediary() {
        let zip = stored_zip(&[
            (
                "MyPack/instance.cfg",
                b"name=Legacy Pack\niconKey=creeper_legacy\n",
            ),
            (
                "MyPack/mmc-pack.json",
                br#"{"components":[{"uid":"net.minecraft","version":"1.12.2"},
                    {"uid":"net.legacyfabric.intermediary","version":"1.0.0+build.213"}]}"#,
            ),
            ("MyPack/minecraft/mods/legacy.jar", b"jar"),
        ]);
        let info = inspect_zip(&zip, zip.len() as u64).unwrap();
        assert_eq!(info.prefix, "MyPack/");
        assert_eq!(info.loader, "legacyfabric");
        assert_eq!(info.loader_version, "");
        assert_eq!(info.icon_key.as_deref(), Some("freesm:creeper_legacy"));

        let root = scratch("prism-nested");
        let (_, meta) = import_prism_core(&root, "Legacy", &info, &zip).unwrap();
        assert!(root.join("legacy/minecraft/mods/legacy.jar").is_file());
        assert_eq!(meta.loader.as_deref(), Some("legacyfabric"));
        std::fs::remove_dir_all(&root).ok();
    }

    #[test]
    fn curseforge_manifest_and_overrides_extraction() {
        let manifest = br#"{"manifestType":"minecraftModpack","name":"Forge Pack",
            "version":"3.1","minecraft":{"version":"1.20.1",
            "modLoaders":[{"id":"forge-47.2.0","primary":true}]},
            "overrides":"overrides",
            "files":[{"projectID":238222,"fileID":5123456,"required":true}]}"#;
        let zip = stored_zip(&[
            ("manifest.json", manifest),
            ("overrides/config/forge.cfg", b"cfg"),
            ("client-overrides/mods/client.jar", b"jar"),
        ]);
        let info = inspect_zip(&zip, zip.len() as u64).unwrap();
        assert_eq!(info.format, "curseforge");
        assert_eq!(info.game_version, "1.20.1");
        assert_eq!(info.loader, "forge");
        assert_eq!(info.loader_version, "47.2.0");
        assert_eq!(info.override_count, 2);
        assert_eq!(info.missing_mods.len(), 1);
        assert!(info.missing_mods[0].url.contains("238222"));

        let root = scratch("curse");
        let (id, _) = prepare_instance(&root, "Forge Pack").unwrap();
        let report = futures_lite_block_on(modpack::import_curseforge_pack_core(
            &root.join(&id).join("minecraft"),
            "",
            &zip,
            None,
        ))
        .unwrap();
        assert_eq!(report.missing_mods.len(), 1);
        assert!(root.join(&id).join("minecraft/config/forge.cfg").is_file());
        assert!(root.join(&id).join("minecraft/mods/client.jar").is_file());
        std::fs::remove_dir_all(&root).ok();
    }

    #[test]
    fn nested_curseforge_manifest_is_detected() {
        let manifest = br#"{"name":"Nested","version":"1","minecraft":{"version":"1.21.1",
            "modLoaders":[{"id":"neoforge-21.1.77","primary":true}]},"files":[],
            "overrides":"overrides"}"#;
        let zip = stored_zip(&[
            ("Nested/modrinth.modpack/manifest.json", manifest),
            ("Nested/modrinth.modpack/overrides/config/x.cfg", b"x"),
        ]);
        // deeper than one wrapper: not a supported layout
        assert!(inspect_zip(&zip, 0).is_err());
        let zip = stored_zip(&[
            ("Nested/manifest.json", manifest),
            ("Nested/overrides/config/x.cfg", b"x"),
        ]);
        let info = inspect_zip(&zip, 0).unwrap();
        assert_eq!(info.prefix, "Nested/");
        assert_eq!(info.loader, "neoforge");
    }

    #[test]
    fn zip_slip_entries_are_refused_everywhere() {
        assert!(safe_relative("../steal.dat").is_none());
        assert!(safe_relative("/abs.dat").is_none());
        assert!(safe_relative("C:/abs.dat").is_none());
        assert!(safe_relative("ok/../../steal.dat").is_none());
        assert_eq!(
            safe_relative("mods/ok.jar").unwrap(),
            Path::new("mods/ok.jar")
        );

        let zip = stored_zip(&[
            ("instance.cfg", b"name=Evil\n"),
            (
                "mmc-pack.json",
                br#"{"components":[{"uid":"net.minecraft","version":"1.20.1"}]}"#,
            ),
            ("minecraft/mods/ok.jar", b"ok"),
            ("minecraft/../steal.dat", b"bad"),
            ("minecraft/C:/abs.dat", b"bad"),
        ]);
        let info = inspect_zip(&zip, 0).unwrap();
        let root = scratch("slip");
        let (id, _) = import_prism_core(&root, "Evil", &info, &zip).unwrap();
        let dir = root.join(id);
        assert!(dir.join("minecraft/mods/ok.jar").is_file());
        assert!(!dir.join("steal.dat").exists());
        assert!(!dir.join("minecraft/C:/abs.dat").exists());
        std::fs::remove_dir_all(&root).ok();
    }

    /// The importer async tests need an executor on stable with no new dev
    /// dependency; tokio's current-thread runtime is already a workspace dep.
    fn futures_lite_block_on<F: std::future::Future>(future: F) -> F::Output {
        tokio::runtime::Builder::new_current_thread()
            .enable_all()
            .build()
            .unwrap()
            .block_on(future)
    }
}
