// Instance discovery & metadata engine. One unified grid row per directory
// with either TwilightMC metadata (`instance.json`, legacy `twilight.json`)
// or foreign Prism/MultiMC metadata (`instance.cfg` + `mmc-pack.json`), so
// an existing Prism library (`%APPDATA%\PrismLauncher\instances`, or a
// configured path like `D:\ins\instances`) is recognized in place.

use std::collections::BTreeMap;
use std::path::{Path, PathBuf};

use serde::Serialize;
use tauri::AppHandle;

use crate::accounts::{load_settings, settings_path};
use crate::instances::{instances_root, read_meta, validate_instance_id};
use crate::storage::shared_root;

/// One row of the instance grid; the superset of our own and Prism metadata.
#[derive(Debug, Clone, Serialize)]
pub struct InstanceInfo {
    /// Directory leaf name.
    pub id: String,
    /// Display name (cfg `name` / metadata `name`, falling back to version).
    pub name: String,
    /// Absolute icon file path when artwork exists on disk, else `None`.
    pub icon_path: Option<String>,
    pub minecraft_version: String,
    /// Display loader: `Vanilla` / `Fabric` / `Quilt` / `Horizon` / other.
    pub loader_type: String,
    /// Pinned loader version, `None` = latest stable.
    pub loader_version: Option<String>,
    /// Unix seconds of the last launch; 0 = never played.
    pub last_played: u64,
    /// Accumulated play time in seconds.
    pub total_time_played: u64,
    /// Prism group label from the root's shared `instgroups.json`.
    pub group: Option<String>,
}

/// Maps a stored loader token onto a display name; `None`/`vanilla` stays
/// Vanilla, our `horizon` loader gets its own card treatment upstream.
pub(crate) fn display_loader(token: Option<&str>) -> &'static str {
    match token.map(str::trim).filter(|t| !t.is_empty()) {
        None => "Vanilla",
        Some(t) => match t.to_ascii_lowercase().as_str() {
            "fabric" => "Fabric",
            "quilt" => "Quilt",
            "horizon" | "horizon-rust" => "Horizon",
            "forge" => "Forge",
            "neoforge" => "NeoForge",
            _ => "Vanilla",
        },
    }
}

// ---- Prism/MultiMC `instance.cfg` (Key=Value lines) ----------------------

/// Parses `instance.cfg` into a deterministic map (last value wins).
pub(crate) fn parse_cfg(text: &str) -> BTreeMap<String, String> {
    let mut map = BTreeMap::new();
    for line in text.lines() {
        let line = line.trim();
        if line.is_empty() || line.starts_with(';') || line.starts_with('#') {
            continue;
        }
        if let Some((key, value)) = line.split_once('=') {
            map.insert(key.trim().to_owned(), value.trim().to_owned());
        }
    }
    map
}

/// Parses a `lastLaunchTime` into epoch seconds: plain numbers pass through,
/// otherwise a tolerant ISO read (`T`/space separator, optional fraction,
/// optional `Z`/`±HH:MM`/`±HHMM` zone).
pub(crate) fn epoch_secs(text: &str) -> Option<u64> {
    let text = text.trim();
    if text.is_empty() {
        return None;
    }
    if let Ok(secs) = text.parse::<u64>() {
        return Some(secs);
    }

    // digit groups in order: y, m, d, then optionally h, m, s
    let digits: Vec<&str> = text
        .split(|c: char| !c.is_ascii_digit())
        .filter(|group| !group.is_empty())
        .collect();
    if digits.len() < 3 {
        return None;
    }
    let year: i64 = digits[0].parse().ok()?;
    let month: i64 = digits[1].parse().ok()?;
    let day: i64 = digits[2].parse().ok()?;
    if !(1..=12).contains(&month) || !(1..=31).contains(&day) {
        return None;
    }
    let hour: i64 = digits.get(3).and_then(|h| h.parse().ok()).unwrap_or(0);
    let minute: i64 = digits.get(4).and_then(|m| m.parse().ok()).unwrap_or(0);
    let second: i64 = digits.get(5).and_then(|s| s.parse().ok()).unwrap_or(0);
    if !(0..24).contains(&hour) {
        return None;
    }

    let offset = tz_offset(text);
    let secs =
        days_from_civil(year, month, day) * 86_400 + hour * 3_600 + minute * 60 + second - offset;
    u64::try_from(secs).ok()
}

/// Seconds east of UTC from the trailing zone of an ISO timestamp. Only
/// written formats are honored — `Z` and `±HH:MM`/`±HHMM` (Prism/Qt's
/// ISODateWithOffsets); a digit tail that is not a zone shape means the
/// string has no zone and reads as-is (legacy MultiMC local times).
fn tz_offset(text: &str) -> i64 {
    if text.ends_with(['Z', 'z']) {
        return 0;
    }
    // signed offsets always carry a `+` in Qt ISO formats
    if let Some(sign_pos) = text.rfind('+') {
        return parse_zone_magnitude(&text[sign_pos..]).unwrap_or(0);
    }
    // a trailing `-HH:MM`/`-HHMM` zone: the sign sits after the seconds, so
    // the chars before it are digits — bare dates are rejected by the shape
    if let Some(sign_pos) = text.rfind('-')
        && text[..sign_pos]
            .chars()
            .next_back()
            .is_some_and(|c| c.is_ascii_digit())
        && let Some(magnitude) = parse_zone_magnitude(&text[sign_pos..])
    {
        return -magnitude;
    }
    0
}

/// Magnitude (seconds) of a `+HH:MM` / `+HHMM` token; `None` when the digits
/// do not shape a real zone (e.g. the `09` tail of a bare date).
fn parse_zone_magnitude(token: &str) -> Option<i64> {
    let digits: String = token
        .trim_start_matches(['+', '-'])
        .chars()
        .filter(|c| c.is_ascii_digit())
        .collect();
    match digits.len() {
        // 4 digits but a colon present also counts (the digit filter drops it)
        4 => {
            let hour: i64 = digits[..2].parse().ok()?;
            let minute: i64 = digits[2..].parse().ok()?;
            Some(hour * 3_600 + minute * 60)
        }
        _ => None,
    }
}

/// Howard Hinnant's `days_from_civil` (Gregorian, calendar-neutral).
fn days_from_civil(year: i64, month: i64, day: i64) -> i64 {
    let y = year - (month <= 2) as i64;
    let era = y.div_euclid(400);
    let yoe = y - era * 400; // [0, 399]
    let doy = (153 * (if month > 2 { month - 3 } else { month + 9 }) + 2) / 5 + day - 1;
    let doe = yoe * 365 + yoe / 4 - yoe / 100 + doy;
    era * 146_097 + doe - 719_468
}

// ---- foreign `mmc-pack.json` ----------------------------------------------

/// Extracts `(minecraft_version, Some((loader_token, loader_version)))` from
/// an `mmc-pack.json` value; the loader uids it speaks are fabric, quilt,
/// forge and neoforge.
pub(crate) fn parse_mmc_pack(
    raw: &serde_json::Value,
) -> (Option<String>, Option<(String, String)>) {
    let mut minecraft = None;
    let mut loader = None;
    for component in raw
        .get("components")
        .and_then(|c| c.as_array())
        .into_iter()
        .flatten()
    {
        let Some(uid) = component.get("uid").and_then(|u| u.as_str()) else {
            continue;
        };
        let version = || {
            component
                .get("version")
                .or_else(|| component.get("cachedVersion"))
                .and_then(|v| v.as_str())
                .map(str::to_owned)
        };
        match uid {
            "net.minecraft" => minecraft = version(),
            "net.fabricmc.fabric-loader" => loader = Some(("fabric", version())),
            "org.quiltmc.quilt-loader" => loader = Some(("quilt", version())),
            "net.minecraftforge" => loader = Some(("forge", version())),
            "net.neoforged" => loader = Some(("neoforge", version())),
            _ => {}
        }
    }
    let loader = loader.and_then(|(token, version)| version.map(|v| (token.to_owned(), v)));
    (minecraft, loader)
}

// ---- icon resolution -------------------------------------------------------

/// Icon artwork: the instance's own `icon.*`, else the library's shared
/// `icons/<iconKey>.*` directory (Prism's drop spot), else `None`.
fn icon_for(dir: &Path, icon_key: Option<&str>, root: &Path) -> Option<String> {
    for file in ["icon.png", "icon.jpg", "icon.jpeg", "icon.ico", "icon.webp"] {
        let path = dir.join(file);
        if path.is_file() {
            return Some(path.display().to_string());
        }
    }
    let key = icon_key?;
    let icons = root
        .parent()
        .map(|parent| parent.join("icons"))
        .unwrap_or_else(|| root.join("icons"));
    for file in [".png", ".jpg", ".jpeg", ".ico", ".svg"] {
        let path = icons.join(format!("{key}{file}"));
        if path.is_file() {
            return Some(path.display().to_string());
        }
    }
    None
}

// ---- Prism group membership (`instgroups.json`) ----------------------------

/// The shared group document every launcher in the root reads: each group
/// carries a display name and its member instance directory names.
fn instgroups_path(root: &Path) -> PathBuf {
    root.join("instgroups.json")
}

/// Directory-id → group-name map from `<root>/instgroups.json`; missing or
/// malformed files read as empty. Hidden groups are skipped and duplicate
/// memberships resolve to the first visible group that claims the instance.
pub(crate) fn group_map(root: &Path) -> BTreeMap<String, String> {
    let Ok(text) = std::fs::read_to_string(instgroups_path(root)) else {
        return BTreeMap::new();
    };
    let Ok(raw) = serde_json::from_str::<serde_json::Value>(&text) else {
        return BTreeMap::new();
    };
    groups_from_doc(&raw)
}

/// Extracts the membership map from a parsed document (testable core).
fn groups_from_doc(raw: &serde_json::Value) -> BTreeMap<String, String> {
    let mut map = BTreeMap::new();
    for (_key, group) in raw
        .get("groups")
        .and_then(|g| g.as_object())
        .into_iter()
        .flatten()
    {
        if group
            .get("hidden")
            .and_then(|h| h.as_bool())
            .unwrap_or(false)
        {
            continue;
        }
        let Some(name) = group.get("name").and_then(|n| n.as_str()) else {
            continue;
        };
        for member in group
            .get("instances")
            .and_then(|i| i.as_array())
            .into_iter()
            .flatten()
        {
            if let Some(id) = member.as_str() {
                map.entry(id.to_owned()).or_insert_with(|| name.to_owned());
            }
        }
    }
    map
}

/// Rewrites the group document: `id` leaves every group it belongs to and,
/// when `group` is set, joins that one — existing display names win, fresh
/// groups are keyed by their name (colliding keys get a numeric suffix).
/// Pure core of the IPC command.
fn set_group_membership(
    raw: &mut serde_json::Value,
    id: &str,
    group: Option<&str>,
) -> Result<(), String> {
    let object = raw
        .as_object_mut()
        .ok_or("instgroups.json must be a JSON object")?;
    if !object.get("groups").is_some_and(|g| g.is_object()) {
        object.insert("groups".to_owned(), serde_json::json!({}));
    }
    let groups = object
        .get_mut("groups")
        .and_then(|g| g.as_object_mut())
        .ok_or("groups must be a JSON object")?;

    // strip the instance from every group's member list
    for entry in groups.values_mut() {
        if let Some(list) = entry.get_mut("instances").and_then(|i| i.as_array_mut()) {
            list.retain(|member| member.as_str() != Some(id));
        }
    }

    let Some(label) = group.map(str::trim).filter(|g| !g.is_empty()) else {
        return Ok(());
    };
    let entry = groups
        .iter_mut()
        .find(|(_key, g)| g.get("name").and_then(|n| n.as_str()) == Some(label))
        .map(|(_key, g)| g);
    let entry = match entry {
        Some(existing) => existing,
        None => {
            let mut key = label.to_owned();
            let mut n = 2;
            while groups.contains_key(&key) {
                key = format!("{label}-{n}");
                n += 1;
            }
            groups.insert(
                key.clone(),
                serde_json::json!({ "name": label, "hidden": false, "instances": [] }),
            );
            groups.get_mut(&key).unwrap()
        }
    };
    if !entry.get("instances").is_some_and(|i| i.is_array()) {
        entry["instances"] = serde_json::json!([]);
    }
    if let Some(list) = entry.get_mut("instances").and_then(|i| i.as_array_mut())
        && !list.iter().any(|member| member.as_str() == Some(id))
    {
        list.push(serde_json::json!(id));
    }
    Ok(())
}

/// Moves an instance between groups: `None`/empty clears the membership.
/// Groups live in the root's shared `instgroups.json`, so native and
/// foreign (Prism-imported) instances behave identically — and Prism
/// itself reads the same file.
#[tauri::command]
pub async fn set_instance_group(
    app: AppHandle,
    instance_id: String,
    group: Option<String>,
) -> Result<(), String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    let path = instgroups_path(&root);
    let mut raw = match tokio::fs::read_to_string(&path).await {
        Ok(text) => serde_json::from_str::<serde_json::Value>(&text)
            .map_err(|e| format!("instgroups.json is malformed: {e}"))?,
        Err(e) if e.kind() == std::io::ErrorKind::NotFound => {
            serde_json::json!({ "formatVersion": "1", "groups": {} })
        }
        Err(e) => return Err(e.to_string()),
    };
    set_group_membership(&mut raw, &instance_id, group.as_deref())?;
    let json = serde_json::to_string_pretty(&raw).map_err(|e| e.to_string())?;
    tokio::fs::write(&path, json)
        .await
        .map_err(|e| e.to_string())
}

// ---- the scan ---------------------------------------------------------------

/// Scans `root` one level deep, listing every directory that carries our own
/// or foreign instance metadata. Unknown directories (`.trash`, staging, ...)
/// are skipped silently.
pub(crate) async fn scan_instances_in(root: &Path) -> Result<Vec<InstanceInfo>, String> {
    let groups = group_map(root);
    let mut infos = Vec::new();
    let mut entries = tokio::fs::read_dir(root).await.map_err(|e| e.to_string())?;
    while let Some(entry) = entries.next_entry().await.map_err(|e| e.to_string())? {
        let dir = entry.path();
        if !dir.is_dir() {
            continue;
        }
        let id = dir
            .file_name()
            .map(|n| n.to_string_lossy().to_string())
            .unwrap_or_default();
        let group = groups.get(&id).cloned();
        let info = native_info(&dir, &id, group.clone())
            .await
            .or_else(|| prism_info(&dir, &id, root, group));
        if let Some(info) = info {
            infos.push(info);
        }
    }
    infos.sort_by(|a, b| {
        a.name
            .to_ascii_lowercase()
            .cmp(&b.name.to_ascii_lowercase())
            .then_with(|| a.id.cmp(&b.id))
    });
    Ok(infos)
}

/// Builds a row from our own `instance.json` / legacy `twilight.json`.
async fn native_info(dir: &Path, id: &str, group: Option<String>) -> Option<InstanceInfo> {
    let meta = read_meta(dir).await?;
    let name = if meta.name.is_empty() {
        meta.version.clone()
    } else {
        meta.name.clone()
    };
    Some(InstanceInfo {
        icon_path: icon_for(dir, None, dir),
        id: id.to_owned(),
        name: if name.is_empty() { id.to_owned() } else { name },
        minecraft_version: meta.version,
        loader_type: display_loader(meta.loader.as_deref()).to_owned(),
        loader_version: meta.loader_version,
        last_played: meta.last_played,
        total_time_played: meta.total_time_played,
        group,
    })
}

/// Builds a row from foreign Prism/MultiMC metadata, `None` when the
/// directory carries no `instance.cfg`.
fn prism_info(dir: &Path, id: &str, root: &Path, group: Option<String>) -> Option<InstanceInfo> {
    let cfg_text = std::fs::read_to_string(dir.join("instance.cfg")).ok()?;
    let cfg = parse_cfg(&cfg_text);
    let cfg_get = |key: &str| cfg.get(key).map(|v| v.as_str());

    let name = cfg_get("name").unwrap_or(id);
    let last_played = cfg_get("lastLaunchTime").and_then(epoch_secs).unwrap_or(0);
    let total_time_played = cfg_get("totalTimePlayed")
        .and_then(|v| v.parse::<u64>().ok())
        .unwrap_or(0);

    let (minecraft, loader) = std::fs::read_to_string(dir.join("mmc-pack.json"))
        .ok()
        .and_then(|text| serde_json::from_str::<serde_json::Value>(&text).ok())
        .map(|raw| parse_mmc_pack(&raw))
        .unwrap_or((None, None));
    let (loader_token, loader_version) = loader
        .map(|(token, version)| (token, Some(version)))
        .unwrap_or_else(|| (String::new(), None));

    Some(InstanceInfo {
        icon_path: icon_for(dir, cfg_get("iconKey"), root),
        id: id.to_owned(),
        name: name.to_owned(),
        minecraft_version: minecraft.unwrap_or_else(|| "unknown".to_owned()),
        loader_type: display_loader(if loader_token.is_empty() {
            None
        } else {
            Some(&loader_token)
        })
        .to_owned(),
        loader_version,
        last_played,
        total_time_played,
        group,
    })
}

// ---- root resolution --------------------------------------------------------

/// The instances root: `settings.json` `instances_dir` override first, then
/// `%APPDATA%\PrismLauncher\instances` on Windows when it exists, then the
/// shared library's `instances` directory. Read-only side effects: missing
/// defaults are reported but never created from here.
pub(crate) async fn resolved_instances_root(app: &AppHandle) -> Result<PathBuf, String> {
    let settings = load_settings(&settings_path(app).await?).await;
    if let Some(dir) = settings
        .instances_dir
        .as_deref()
        .map(str::trim)
        .filter(|d| !d.is_empty())
    {
        return Ok(PathBuf::from(dir));
    }
    #[cfg(windows)]
    if let Ok(appdata) = std::env::var("APPDATA") {
        let prism = PathBuf::from(appdata)
            .join("PrismLauncher")
            .join("instances");
        if prism.is_dir() {
            return Ok(prism);
        }
    }
    Ok(shared_root(app).await?.join("instances"))
}

/// Scans the resolved root (or an explicit `instances_dir`) for the grid.
#[tauri::command]
pub async fn scan_instances(
    app: AppHandle,
    instances_dir: Option<String>,
) -> Result<Vec<InstanceInfo>, String> {
    match instances_dir
        .as_deref()
        .map(str::trim)
        .filter(|d| !d.is_empty())
    {
        Some(dir) => scan_instances_in(Path::new(dir)).await,
        None => {
            let root = resolved_instances_root(&app).await?;
            if root.is_dir() {
                scan_instances_in(&root).await
            } else {
                Ok(Vec::new())
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn iso_timestamps_parse_to_epoch() {
        // well-known anchors
        assert_eq!(epoch_secs("1970-01-01T00:00:00Z"), Some(0));
        assert_eq!(epoch_secs("2000-01-01T00:00:00Z"), Some(946_684_800));
        let noon_utc = epoch_secs("2000-01-01T12:00:00Z");
        assert_eq!(noon_utc, Some(946_684_800 + 43_200));

        assert_eq!(
            epoch_secs("2000-01-01T13:00:00+01:00"),
            epoch_secs("2000-01-01T12:00:00Z"),
            "+01:00 shifts into the same instant"
        );
        assert_eq!(
            epoch_secs("2000-01-01T11:00:00-0100"),
            epoch_secs("2000-01-01T12:00:00Z"),
            "-HHMM shape too"
        );
        // bare (no-zone) legacy times read as-is
        assert!(epoch_secs("2016.08.21 20:59:26").is_some());
        assert_eq!(epoch_secs("0"), Some(0));
        assert_eq!(epoch_secs(""), None);
        assert_eq!(epoch_secs("not-a-time"), None);
    }

    fn lib() -> (PathBuf, PathBuf) {
        let root = std::env::temp_dir().join(format!(
            "twi-scan-test-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ));
        let instances = root.join("instances");
        std::fs::create_dir_all(&instances).unwrap();
        (root, instances)
    }

    #[test]
    fn cfg_fields_map_onto_values() {
        let cfg = parse_cfg(
            "; MultiMC instance config\nInstanceType=OneSix\nname=Fabulous Pack\niconKey=chickens\n",
        );
        assert_eq!(cfg.get("name").map(String::as_str), Some("Fabulous Pack"));
        assert_eq!(cfg.get("iconKey").map(String::as_str), Some("chickens"));
        assert_eq!(cfg.get("InstanceType").map(String::as_str), Some("OneSix"));
    }

    #[test]
    fn mmc_pack_uids_drive_loader_type() {
        let fabric: serde_json::Value = serde_json::from_str(
            r#"{"components":[
                {"uid":"net.minecraft","version":"1.20.1","cachedName":"Minecraft"},
                {"uid":"net.fabricmc.fabric-loader","version":"0.16.9"},
                {"uid":"org.twilight.unknown","version":"1.0"}
            ]}"#,
        )
        .unwrap();
        let (mc, loader) = parse_mmc_pack(&fabric);
        assert_eq!(mc.as_deref(), Some("1.20.1"));
        assert_eq!(
            loader.as_ref().map(|(t, v)| (t.as_str(), v.as_str())),
            Some(("fabric", "0.16.9"))
        );

        let quilt: serde_json::Value = serde_json::from_str(
            r#"{"components":[
                {"uid":"net.minecraft","cachedVersion":"1.21.4"},
                {"uid":"org.quiltmc.quilt-loader","version":"0.26.4"}
            ]}"#,
        )
        .unwrap();
        let (mc, loader) = parse_mmc_pack(&quilt);
        assert_eq!(mc.as_deref(), Some("1.21.4"), "cachedVersion fallback");
        assert_eq!(loader, Some(("quilt".to_owned(), "0.26.4".to_owned())));

        let neoforge: serde_json::Value =
            serde_json::from_str(r#"{"components":[{"uid":"net.neoforged","version":"21.1.77"}]}"#)
                .unwrap();
        assert_eq!(parse_mmc_pack(&neoforge).1.unwrap().0, "neoforge");
        assert_eq!(display_loader(Some("neoforge")), "NeoForge");
    }

    #[tokio::test]
    async fn scan_recognizes_native_and_prism_instances() {
        let (lib_root, root) = lib();

        // foreign Prism instance with fabric loader + iconKey
        let prism = root.join("Fabulous Pack");
        std::fs::create_dir_all(&prism).unwrap();
        std::fs::write(
            prism.join("instance.cfg"),
            "InstanceType=OneSix\nname=Fabulous Pack\niconKey=chickens\nlastLaunchTime=2025-07-09T12:00:00Z\ntotalTimePlayed=5400\n",
        )
        .unwrap();
        std::fs::write(
            prism.join("mmc-pack.json"),
            r#"{"formatVersion":1,"components":[{"uid":"net.minecraft","version":"1.20.1"},{"uid":"net.fabricmc.fabric-loader","version":"0.16.9"}]}"#,
        )
        .unwrap();
        std::fs::create_dir_all(lib_root.join("icons")).unwrap();
        std::fs::write(lib_root.join("icons").join("chickens.png"), b"png").unwrap();

        // native instance, legacy twilight.json
        let native = root.join("vanilla-sky");
        std::fs::create_dir_all(&native).unwrap();
        std::fs::write(
            native.join("twilight.json"),
            r#"{"version":"1.21.4","name":"Vanilla Sky","loader":"fabric","loader_version":"0.16.9","last_played":42,"total_time_played":90}"#,
        )
        .unwrap();

        // native instance, canonical instance.json + our horizon loader
        let horizon = root.join("horizon-home");
        std::fs::create_dir_all(&horizon).unwrap();
        std::fs::write(
            horizon.join("instance.json"),
            r#"{"version":"26.3","name":"Horizon Home","loader":"horizon"}"#,
        )
        .unwrap();

        // noise: no metadata, no scanning
        std::fs::create_dir_all(root.join("not-an-instance")).unwrap();
        std::fs::write(root.join("notes.txt"), b"x").unwrap();

        // shared Prism group file: one member instance gets a group label
        std::fs::write(
            root.join("instgroups.json"),
            r#"{"formatVersion":"1","groups":{"sky":{"name":"Sky","hidden":false,"instances":["vanilla-sky"]}}}"#,
        )
        .unwrap();

        let scanned = scan_instances_in(&root).await.unwrap();
        assert_eq!(scanned.len(), 3, "junk dirs skipped: {scanned:?}");

        // sorted by display name (case-insensitive)
        assert_eq!(scanned[0].name, "Fabulous Pack");
        assert_eq!(scanned[0].loader_type, "Fabric");
        assert_eq!(scanned[0].loader_version.as_deref(), Some("0.16.9"));
        assert_eq!(scanned[0].minecraft_version, "1.20.1");
        assert!(scanned[0].last_played > 0, "ISO lastLaunchTime parsed");
        assert_eq!(scanned[0].total_time_played, 5400);
        assert!(
            scanned[0]
                .icon_path
                .as_deref()
                .is_some_and(|p| p.ends_with("chickens.png")),
            "library icons dir resolves the iconKey: {:?}",
            scanned[0].icon_path
        );

        assert_eq!(scanned[1].name, "Horizon Home");
        assert_eq!(scanned[1].loader_type, "Horizon");

        assert_eq!(scanned[2].name, "Vanilla Sky");
        assert_eq!(scanned[2].loader_type, "Fabric");
        assert_eq!(scanned[2].last_played, 42);
        assert_eq!(scanned[2].total_time_played, 90);
        assert!(scanned[2].icon_path.is_none());
        assert_eq!(
            scanned[2].group.as_deref(),
            Some("Sky"),
            "instgroups.json member"
        );
        assert_eq!(scanned[0].group, None, "ungrouped instances read as None");
    }

    #[test]
    fn group_membership_moves_between_groups() {
        let mut doc = serde_json::json!({
            "formatVersion": "1",
            "groups": {
                "newgen": { "name": "New gen", "hidden": false, "instances": ["alpha", "beta"] }
            }
        });
        set_group_membership(&mut doc, "alpha", Some("Sky")).unwrap();
        let map = groups_from_doc(&doc);
        assert_eq!(map.get("alpha").map(String::as_str), Some("Sky"));
        assert_eq!(
            map.get("beta").map(String::as_str),
            Some("New gen"),
            "untouched member keeps its group"
        );

        // joining an existing group matches by display name, key unchanged
        set_group_membership(&mut doc, "gamma", Some("New gen")).unwrap();
        assert_eq!(
            groups_from_doc(&doc).get("gamma").map(String::as_str),
            Some("New gen")
        );

        // clearing membership removes the instance everywhere
        set_group_membership(&mut doc, "alpha", None).unwrap();
        assert!(!groups_from_doc(&doc).contains_key("alpha"));

        // a fresh document gains formatVersion groups when written by hand
        let mut bare = serde_json::json!({});
        set_group_membership(&mut bare, "solo", Some("Lone")).unwrap();
        let map = groups_from_doc(&bare);
        assert_eq!(map.get("solo").map(String::as_str), Some("Lone"));

        // non-object documents are refused, not silently rewritten
        let mut junk = serde_json::json!("nope");
        assert!(set_group_membership(&mut junk, "x", None).is_err());
    }

    #[test]
    fn group_map_skips_hidden_groups() {
        let doc = serde_json::json!({
            "groups": {
                "a": { "name": "Visible", "instances": ["one", "two"] },
                "b": { "name": "Hidden", "hidden": true, "instances": ["two"] }
            }
        });
        let map = groups_from_doc(&doc);
        assert_eq!(map.get("one").map(String::as_str), Some("Visible"));
        assert_eq!(
            map.get("two").map(String::as_str),
            Some("Visible"),
            "the first visible group wins"
        );
    }

    #[tokio::test]
    async fn empty_root_scans_clean() {
        let (_, root) = lib();
        let scanned = scan_instances_in(&root).await.unwrap();
        assert!(scanned.is_empty());
    }
}
