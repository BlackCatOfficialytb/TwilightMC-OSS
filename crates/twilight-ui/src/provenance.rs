//! Public mod provenance: a tiny, bounded per-instance map that remembers only
//! the publicly installable identity of a jar (source, project id, version).
//! Local/hand-installed jars are deliberately never recorded here; the crash
//! scrubber turns those into `<local-mod>`.

use std::collections::HashMap;
use std::path::Path;

/// Per-instance provenance file, written in the instance directory.
pub const PROVENANCE_FILE: &str = "twilight-mods.json";

/// Keep the bookkeeping file small: a corrupt or hand-inflated file is treated
/// as empty rather than trusted.
const MAX_FILE_BYTES: usize = 256 * 1024;
const MAX_ENTRIES: usize = 256;
const MAX_KEY_LEN: usize = 160;
const MAX_SUMMARY_LEN: usize = 160;
const MAX_TOKEN_LEN: usize = 128;

fn now_nanos() -> u128 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap_or_default()
        .as_nanos()
}

/// Accepts only filesystem-leaf tokens made of harmless characters. The
/// returned key is lowercased so filename lookups are case-insensitive.
fn clean_filename(raw: &str) -> Result<String, String> {
    let trimmed = raw.trim();
    if trimmed.is_empty()
        || trimmed.contains('/')
        || trimmed.contains('\\')
        || trimmed.contains("..")
    {
        return Err("invalid mod filename".to_owned());
    }
    let key: String = trimmed
        .chars()
        .filter(|c| c.is_ascii_alphanumeric() || matches!(c, '-' | '_' | '.' | '+'))
        .flat_map(char::to_lowercase)
        .take(MAX_KEY_LEN)
        .collect();
    if key.is_empty() {
        Err("invalid mod filename".to_owned())
    } else {
        Ok(key)
    }
}

/// Keeps an identifier readable but strips anything that could smuggle a path,
/// a newline or a query string into the provenance summary.
fn clean_token(raw: &str, max: usize) -> Option<String> {
    let cleaned: String = raw
        .trim()
        .chars()
        .filter(|c| c.is_ascii_alphanumeric() || matches!(c, '-' | '_' | '.' | '+' | ':' | '/'))
        .take(max)
        .collect();
    if cleaned.is_empty() {
        None
    } else {
        Some(cleaned)
    }
}

/// Loads the provenance map. Missing, unreadable, oversized or corrupt files
/// yield an empty map: this file is a convenience, never a source of truth.
pub fn public_mods(instance_dir: &Path) -> HashMap<String, String> {
    let Ok(bytes) = std::fs::read(instance_dir.join(PROVENANCE_FILE)) else {
        return HashMap::new();
    };
    if bytes.len() > MAX_FILE_BYTES {
        return HashMap::new();
    }
    let Ok(text) = std::str::from_utf8(&bytes) else {
        return HashMap::new();
    };
    let Ok(value) = serde_json::from_str::<serde_json::Value>(text) else {
        return HashMap::new();
    };
    let Some(object) = value.as_object() else {
        return HashMap::new();
    };
    let mut map = HashMap::new();
    for (key, value) in object {
        let Ok(key) = clean_filename(key) else {
            continue;
        };
        let Some(summary) = value
            .as_str()
            .and_then(|text| clean_token(text, MAX_SUMMARY_LEN))
        else {
            continue;
        };
        map.insert(key, summary);
        if map.len() >= MAX_ENTRIES {
            break;
        }
    }
    map
}

fn write_mods(instance_dir: &Path, map: &HashMap<String, String>) -> Result<(), String> {
    std::fs::create_dir_all(instance_dir).map_err(|e| e.to_string())?;

    let mut entries: Vec<_> = map.iter().collect();
    entries.sort_by(|a, b| a.0.cmp(b.0));
    entries.truncate(MAX_ENTRIES);
    let mut object = serde_json::Map::new();
    for (key, summary) in entries {
        object.insert(key.clone(), serde_json::Value::String(summary.clone()));
    }
    let json =
        serde_json::to_string(&serde_json::Value::Object(object)).map_err(|e| e.to_string())?;

    let target = instance_dir.join(PROVENANCE_FILE);
    let temp = instance_dir.join(format!(
        ".{PROVENANCE_FILE}.{}.{}.tmp",
        std::process::id(),
        now_nanos()
    ));
    std::fs::write(&temp, json).map_err(|e| e.to_string())?;
    match std::fs::rename(&temp, &target) {
        Ok(()) => Ok(()),
        Err(error) => {
            // Windows cannot rename over an existing file, so replace it in a
            // two-step move; the temp file is always cleaned up on failure.
            if target.is_file() {
                std::fs::remove_file(&target).map_err(|e| e.to_string())?;
                match std::fs::rename(&temp, &target) {
                    Ok(()) => Ok(()),
                    Err(error) => {
                        let _ = std::fs::remove_file(&temp);
                        Err(error.to_string())
                    }
                }
            } else {
                let _ = std::fs::remove_file(&temp);
                Err(error.to_string())
            }
        }
    }
}

/// Records a *publicly sourced* mod so the crash report may name it. Called
/// from the Modrinth/CurseForge install paths; local jars must stay unnamed.
/// The file is rewritten atomically and capped at [`MAX_ENTRIES`] entries.
pub fn record_public_mod(
    instance_dir: &Path,
    filename: &str,
    project_id: &str,
    slug: Option<&str>,
    version: Option<&str>,
    source: &str,
) -> Result<(), String> {
    let key = clean_filename(filename)?;
    let project = clean_token(project_id, MAX_TOKEN_LEN)
        .or_else(|| slug.and_then(|slug| clean_token(slug, MAX_TOKEN_LEN)))
        .ok_or_else(|| "missing public project id".to_owned())?;
    let source = clean_token(source, 32).unwrap_or_else(|| "public".to_owned());
    let version = version
        .and_then(|version| clean_token(version, MAX_TOKEN_LEN))
        .unwrap_or_else(|| "unknown".to_owned());
    let summary = format!("{source}:{project}/{version}");

    let mut map = public_mods(instance_dir);
    map.insert(key, summary);
    write_mods(instance_dir, &map)
}

/// Extracts the public `(project_id, version_id)` pair from a Modrinth CDN URL
/// (`https://cdn.modrinth.com/data/<project>/versions/<version>/<file>`).
/// Non-Modrinth hosts yield `None`, so pack entries from other mirrors are
/// never treated as verified public artifacts.
pub fn modrinth_ids_from_url(url: &str) -> Option<(String, Option<String>)> {
    let parsed = reqwest::Url::parse(url).ok()?;
    if !parsed.host_str()?.ends_with("modrinth.com") {
        return None;
    }
    let segments: Vec<&str> = parsed.path_segments()?.collect();
    let data = segments.iter().position(|segment| *segment == "data")?;
    let project = clean_token(segments.get(data + 1)?, MAX_TOKEN_LEN)?;
    let version = (segments.get(data + 2) == Some(&"versions"))
        .then(|| clean_token(segments.get(data + 3)?, MAX_TOKEN_LEN))
        .flatten();
    Some((project, version))
}

#[cfg(test)]
mod tests {
    use std::path::PathBuf;
    use std::sync::atomic::{AtomicU64, Ordering};

    use super::*;

    static SEQ: AtomicU64 = AtomicU64::new(0);

    struct TempInstance(PathBuf);

    impl TempInstance {
        fn new() -> Self {
            let seq = SEQ.fetch_add(1, Ordering::Relaxed);
            let dir = std::env::temp_dir().join(format!(
                "twilight-provenance-{}-{seq}-{}",
                std::process::id(),
                now_nanos()
            ));
            std::fs::create_dir_all(&dir).expect("create temp instance dir");
            Self(dir)
        }

        fn path(&self) -> &Path {
            &self.0
        }
    }

    impl Drop for TempInstance {
        fn drop(&mut self) {
            let _ = std::fs::remove_dir_all(&self.0);
        }
    }

    #[test]
    fn round_trip_records_updates_and_uses_lowercase_keys() {
        let temp = TempInstance::new();
        let dir = temp.path();
        assert!(public_mods(dir).is_empty());
        assert!(!dir.join(PROVENANCE_FILE).exists());

        record_public_mod(
            dir,
            "Sodium.JAR",
            "sodium-project",
            Some("sodium"),
            Some("0.6.13"),
            "modrinth",
        )
        .expect("record first mod");
        record_public_mod(dir, "iris.jar", "iris-project", None, None, "curseforge")
            .expect("record second mod");

        let map = public_mods(dir);
        assert_eq!(
            map.get("sodium.jar").map(String::as_str),
            Some("modrinth:sodium-project/0.6.13")
        );
        assert_eq!(
            map.get("iris.jar").map(String::as_str),
            Some("curseforge:iris-project/unknown")
        );

        record_public_mod(
            dir,
            "sodium.jar",
            "sodium-project",
            None,
            Some("0.6.14"),
            "modrinth",
        )
        .expect("update existing mod");
        assert_eq!(
            public_mods(dir).get("sodium.jar").map(String::as_str),
            Some("modrinth:sodium-project/0.6.14")
        );
        assert!(
            std::fs::read_to_string(dir.join(PROVENANCE_FILE))
                .expect("read provenance file")
                .contains("sodium.jar")
        );
    }

    #[test]
    fn missing_corrupt_and_oversized_files_are_empty() {
        let temp = TempInstance::new();
        let dir = temp.path();
        assert!(public_mods(dir).is_empty());

        std::fs::write(dir.join(PROVENANCE_FILE), b"not json at all").expect("write junk");
        assert!(public_mods(dir).is_empty());

        std::fs::write(dir.join(PROVENANCE_FILE), b"[]").expect("write wrong shape");
        assert!(public_mods(dir).is_empty());

        let huge = "x".repeat(MAX_FILE_BYTES + 1);
        std::fs::write(dir.join(PROVENANCE_FILE), huge).expect("write oversized file");
        assert!(public_mods(dir).is_empty());
    }

    #[test]
    fn rejects_unsafe_filenames_and_empty_ids() {
        let temp = TempInstance::new();
        let dir = temp.path();
        assert!(
            record_public_mod(dir, "../evil.jar", "id", None, None, "src").is_err(),
            "path traversal must be rejected"
        );
        assert!(
            record_public_mod(dir, "sub/evil.jar", "id", None, None, "src").is_err(),
            "subdirectories must be rejected"
        );
        assert!(
            record_public_mod(dir, "ok.jar", "", None, None, "src").is_err(),
            "a public id is required"
        );
        assert!(public_mods(dir).is_empty());
    }

    #[test]
    fn parses_modrinth_cdn_ids() {
        assert_eq!(
            modrinth_ids_from_url(
                "https://cdn.modrinth.com/data/AANobbMI/versions/abc123/sodium.jar"
            ),
            Some(("AANobbMI".to_owned(), Some("abc123".to_owned())))
        );
        assert_eq!(
            modrinth_ids_from_url("https://cdn.modrinth.com/data/AANobbMI/sodium.jar"),
            Some(("AANobbMI".to_owned(), None))
        );
        assert_eq!(
            modrinth_ids_from_url("https://example.com/data/a/versions/b/x.jar"),
            None
        );
        assert_eq!(modrinth_ids_from_url("not a url"), None);
    }

    #[test]
    fn map_is_bounded() {
        let temp = TempInstance::new();
        let dir = temp.path();
        for index in 0..MAX_ENTRIES + 20 {
            record_public_mod(
                dir,
                &format!("mod-{index:04}.jar"),
                &format!("project-{index}"),
                None,
                None,
                "modrinth",
            )
            .expect("record mod");
        }
        assert_eq!(public_mods(dir).len(), MAX_ENTRIES);
        assert!(
            std::fs::metadata(dir.join(PROVENANCE_FILE))
                .expect("metadata")
                .len() as usize
                <= MAX_FILE_BYTES
        );
    }
}
