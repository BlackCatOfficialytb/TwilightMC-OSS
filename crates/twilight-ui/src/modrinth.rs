// Modrinth v2 browser bridge: project search for one game version + loader,
// and a one-click install of the primary `.jar` artifact into an instance's
// `minecraft/mods` directory (AtomicDownloader writes; SHA-1 verified).

use serde::Serialize;
use tauri::AppHandle;
use twilight_downloader::{DownloadRequest, ParallelDownloader};

use crate::instances::{instances_root, validate_instance_id};
use crate::mods::mods_dir;

pub(crate) const API_BASE: &str = "https://api.modrinth.com/v2";

/// One search hit of the in-app mods browser.
#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct ModSearchResult {
    pub project_id: String,
    pub title: String,
    pub description: String,
    /// CDN icon URL; empty string when the project has no artwork.
    pub icon_url: String,
    pub downloads: u64,
    pub author: String,
}

/// Flattens a `/search` response's hits into browser rows.
pub(crate) fn parse_search_hits(raw: &serde_json::Value) -> Vec<ModSearchResult> {
    raw.get("hits")
        .and_then(|hits| hits.as_array())
        .map(|hits| {
            hits.iter()
                .filter_map(|hit| {
                    let project_id = hit.get("project_id")?.as_str()?.to_owned();
                    Some(ModSearchResult {
                        title: hit
                            .get("title")
                            .and_then(|t| t.as_str())
                            .unwrap_or_default()
                            .to_owned(),
                        description: hit
                            .get("description")
                            .and_then(|d| d.as_str())
                            .unwrap_or_default()
                            .to_owned(),
                        icon_url: hit
                            .get("icon_url")
                            .and_then(|i| i.as_str())
                            .unwrap_or_default()
                            .to_owned(),
                        downloads: hit.get("downloads")?.as_u64().unwrap_or_default(),
                        author: hit
                            .get("author")
                            .and_then(|a| a.as_str())
                            .unwrap_or_default()
                            .to_owned(),
                        project_id,
                    })
                })
                .collect()
        })
        .unwrap_or_default()
}

/// Picks the version row to install: the list is newest-first, so the first
/// entry wins. `Ok(None)` means "compatible build exists but carries no files".
fn pick_version_entry(raw: &serde_json::Value) -> Result<Option<&serde_json::Value>, String> {
    let list = raw
        .as_array()
        .ok_or_else(|| format!("unexpected Modrinth response: {raw}"))?;
    Ok(list.first())
}

/// (url, filename, sha1) of the primary `.jar` artifact of a version entry:
/// the flag-marked primary minimizes ambiguity, falling back to the first
/// `.jar` in the list when a version carries no primary marker.
fn pick_primary_file(entry: &serde_json::Value) -> Option<(String, String, Option<String>)> {
    let files = entry.get("files")?.as_array()?;
    let mut first_jar = None;
    for file in files {
        let Some(filename) = file.get("filename").and_then(serde_json::Value::as_str) else {
            continue;
        };
        if !filename.to_ascii_lowercase().ends_with(".jar") {
            continue;
        }
        let Some(url) = file.get("url").and_then(serde_json::Value::as_str) else {
            continue;
        };
        let sha1 = file
            .pointer("/hashes/sha1")
            .and_then(serde_json::Value::as_str)
            .map(str::to_owned);
        let candidate = (url.to_owned(), filename.to_owned(), sha1);
        if file.get("primary") == Some(&serde_json::Value::Bool(true)) {
            return Some(candidate);
        }
        if first_jar.is_none() {
            first_jar = Some(candidate);
        }
    }
    first_jar
}

fn client_ua() -> &'static str {
    concat!(
        "twilight-ui/",
        env!("CARGO_PKG_VERSION"),
        " (twilightmc launcher; +https://github.com/BlackCatOfficialytb/TwilightMC-OSS)"
    )
}

/// Search facets block (`project_type:mod`, optional version + loader pins).
fn search_facets(game_version: &str, loader: &str) -> serde_json::Value {
    let mut facets = vec!["project_type:mod".to_owned()];
    if !game_version.trim().is_empty() {
        facets.push(format!("versions:{}", game_version.trim()));
    }
    if !loader.trim().is_empty() {
        facets.push(format!("categories:{}", loader.trim().to_ascii_lowercase()));
    }
    serde_json::json!([facets])
}

/// Searches Modrinth mods (project_type pinned, version/loader facets when
/// provided) — feeds the browser modal. Most-installed first on empty queries.
#[tauri::command]
pub async fn search_modrinth_mods(
    query: String,
    game_version: String,
    loader: String,
) -> Result<Vec<ModSearchResult>, String> {
    let url = reqwest::Url::parse_with_params(
        format!("{API_BASE}/search").as_str(),
        &[
            ("query", query.trim()),
            ("limit", "40"),
            (
                "facets",
                &search_facets(game_version.trim(), loader.trim()).to_string(),
            ),
        ],
    )
    .map_err(|e| e.to_string())?;
    let client = reqwest::Client::new();
    let raw = client
        .get(url)
        .header(reqwest::header::USER_AGENT, client_ua())
        .send()
        .await
        .map_err(|e| e.to_string())?
        .error_for_status()
        .map_err(|e| e.to_string())?
        .json::<serde_json::Value>()
        .await
        .map_err(|e| e.to_string())?;
    Ok(parse_search_hits(&raw))
}

/// Installs one mod: resolves the latest compatible Modrinth version of the
/// project and downloads its primary jar into the instance mods dir.
/// Returns the installed file name.
#[tauri::command]
pub async fn install_modrinth_mod(
    app: AppHandle,
    instance_id: String,
    project_id: String,
    game_version: String,
    loader: String,
) -> Result<String, String> {
    validate_instance_id(&instance_id)?;
    if !project_id
        .chars()
        .all(|c| c.is_ascii_alphanumeric() || c == '-' || c == '_')
        || project_id.is_empty()
    {
        return Err(format!("invalid project id {project_id:?}"));
    }

    // latest version known compatible with this game version + loader
    let versions_url = reqwest::Url::parse_with_params(
        format!("{API_BASE}/project/{project_id}/version").as_str(),
        &[
            (
                "game_versions",
                &serde_json::json!([game_version.trim()]).to_string(),
            ),
            (
                "loaders",
                &serde_json::json!([loader.trim().to_ascii_lowercase()]).to_string(),
            ),
        ],
    )
    .map_err(|e| e.to_string())?;

    let client = reqwest::Client::new();
    let raw = client
        .get(versions_url)
        .header(reqwest::header::USER_AGENT, client_ua())
        .send()
        .await
        .map_err(|e| e.to_string())?
        .error_for_status()
        .map_err(|e| e.to_string())?
        .json::<serde_json::Value>()
        .await
        .map_err(|e| e.to_string())?;
    let entry = pick_version_entry(&raw)?
        .ok_or_else(|| format!("no compatible version of {project_id} for this build"))?;
    let Some((url, filename, sha1)) = pick_primary_file(entry) else {
        return Err(format!(
            "version {} carries no .jar artifact",
            entry
                .get("version_number")
                .and_then(|v| v.as_str())
                .unwrap_or("?")
        ));
    };

    let dest = mods_dir(&instances_root(&app).await?, &instance_id)
        .await?
        .join(&filename);
    ParallelDownloader::new(client, 4)
        .download_all(&[DownloadRequest { url, dest, sha1 }])
        .await
        .map_err(|e| e.to_string())?;
    Ok(filename)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn search_hits_flatten_and_skip_broken_rows() {
        let raw: serde_json::Value = serde_json::from_str(
            r#"{
              "hits": [
                {"project_id":"AABB1122CCDD4455","title":"Sodium","description":"Modern rendering engine.",
                 "icon_url":"https://cdn.modrinth.com/a.png","downloads":4210000,"author":"jellysquid3"},
                {"project_id":"EEFF5566AABB7788","title":"Lithium","description":"Game logic optimizations.",
                 "icon_url":"","downloads":3300000,"author":"jellysquid3"},
                {"project_id":"not-an-id-with-dashes","title":"Broken"}
              ]
            }"#,
        )
        .unwrap();

        let rows = parse_search_hits(&raw);
        // the third hit carries no downloads number -> dropped as broken
        assert_eq!(rows.len(), 2);
        assert_eq!(rows[0].title, "Sodium");
        assert_eq!(rows[0].project_id, "AABB1122CCDD4455");
        assert_eq!(rows[0].downloads, 4_210_000);
        assert_eq!(rows[0].author, "jellysquid3");
        assert_eq!(rows[1].icon_url, "");
    }

    #[test]
    fn primary_file_prefers_primary_jars_and_resolves_sha1() {
        let entry: serde_json::Value = serde_json::from_str(
            r#"{
              "version_number": "0.16.9",
              "files": [
                {"filename":"source.zip","primary":false,
                 "url":"https://cdn.modrinth.com/x/source.zip"},
                {"filename":"sodium.jar","primary":true,
                 "url":"https://cdn.modrinth.com/x/sodium.jar",
                 "hashes":{"sha1":"abc123"}},
                {"filename":"aux.jar","primary":false,
                 "url":"https://cdn.modrinth.com/x/aux.jar"}
              ]
            }"#,
        )
        .unwrap();

        let (url, filename, sha1) = pick_primary_file(&entry).unwrap();
        assert_eq!(filename, "sodium.jar");
        assert_eq!(url, "https://cdn.modrinth.com/x/sodium.jar");
        assert_eq!(sha1.as_deref(), Some("abc123"));

        // no primary flag present -> first .jar wins
        let bare: serde_json::Value = serde_json::from_str(
            r#"{"files":[{"filename":"first.jar","url":"https://cdn/f.jar"}]}"#,
        )
        .unwrap();
        let (_, filename, _) = pick_primary_file(&bare).unwrap();
        assert_eq!(filename, "first.jar");

        // empty version list means "no compatible build"
        assert!(
            pick_version_entry(&serde_json::json!([]))
                .unwrap()
                .is_none()
        );
        assert_eq!(
            pick_version_entry(&serde_json::json!([{"version_number":"1"}]))
                .unwrap()
                .and_then(|e| e.get("version_number"))
                .and_then(|v| v.as_str()),
            Some("1")
        );
    }

    #[test]
    fn facets_pin_project_type_gaps_stay_lean() {
        assert_eq!(
            search_facets("1.21.4", "Fabric"),
            serde_json::json!([["project_type:mod", "versions:1.21.4", "categories:fabric"]])
        );
        assert_eq!(
            search_facets("  ", ""),
            serde_json::json!([["project_type:mod"]])
        );
    }
}
