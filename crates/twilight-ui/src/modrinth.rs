// Modrinth v2 browser bridge: project search for one game version + loader,
// and a one-click install of the primary `.jar` artifact into an instance's
// `minecraft/mods` directory (AtomicDownloader writes; SHA-1 verified).

use std::collections::HashSet;
use std::path::Path;

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

/// One assistive-mod suggestion of the accessibility suite.
#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct AccessibilityModSuggestion {
    pub project_id: &'static str,
    pub title: &'static str,
    /// `core` = needed for the mode, `optional` = nice-to-have.
    pub role: &'static str,
    pub description: &'static str,
}

/// The curated Blind/Deaf Mode catalog. Fabric-only for now: the other
/// loaders (NeoForge/Forge) have no assistive coverage yet.
pub(crate) fn accessibility_candidates(
    blind_mode: bool,
    deaf_mode: bool,
) -> Vec<AccessibilityModSuggestion> {
    let mut mods = Vec::new();
    if blind_mode {
        mods.push(AccessibilityModSuggestion {
            project_id: "minecraft-access",
            title: "Minecraft Access",
            role: "core",
            description: "Screen reader & 3D spatial navigation for blind players.",
        });
        mods.push(AccessibilityModSuggestion {
            project_id: "sound-physics-remastered",
            title: "Sound Physics Remastered",
            role: "optional",
            description: "Spatial acoustics & directional echoes for audio navigation.",
        });
    }
    if deaf_mode {
        mods.push(AccessibilityModSuggestion {
            project_id: "echosight",
            title: "EchoSight",
            role: "core",
            description: "Directional sound radar & priority subtitles.",
        });
        mods.push(AccessibilityModSuggestion {
            project_id: "subtitles-visualizer",
            title: "Subtitles Visualizer",
            role: "optional",
            description: "In-world directional subtitle markers.",
        });
        mods.push(AccessibilityModSuggestion {
            project_id: "visible-sound",
            title: "Visible Sound",
            role: "optional",
            description: "In-world block/entity sound highlights.",
        });
        mods.push(AccessibilityModSuggestion {
            project_id: "soundsight",
            title: "SoundSight",
            role: "optional",
            description: "Visual threat ring & enhanced subtitles.",
        });
    }
    mods
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
    let mut names =
        install_mod_with_deps(app, instance_id, project_id, game_version, loader).await?;
    names
        .pop()
        .ok_or_else(|| "nothing was installed".to_owned())
}

fn validate_project_id(project_id: &str) -> Result<(), String> {
    if project_id.is_empty()
        || !project_id
            .chars()
            .all(|c| c.is_ascii_alphanumeric() || c == '-' || c == '_')
    {
        return Err(format!("invalid project id {project_id:?}"));
    }
    Ok(())
}

/// `/project/{id}/version` URL pinned to one game version + loader.
fn versions_url(
    api_base: &str,
    project_id: &str,
    game_version: &str,
    loader: &str,
) -> Result<reqwest::Url, String> {
    reqwest::Url::parse_with_params(
        format!("{api_base}/project/{project_id}/version").as_str(),
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
    .map_err(|e| e.to_string())
}

/// Latest version entry of `project_id` compatible with the game version +
/// loader (`None` = no compatible build). Shared by suggestions and installs.
async fn fetch_compatible_version(
    client: &reqwest::Client,
    api_base: &str,
    project_id: &str,
    game_version: &str,
    loader: &str,
) -> Result<Option<serde_json::Value>, String> {
    let raw = client
        .get(versions_url(api_base, project_id, game_version, loader)?)
        .header(reqwest::header::USER_AGENT, client_ua())
        .send()
        .await
        .map_err(|e| e.to_string())?
        .error_for_status()
        .map_err(|e| e.to_string())?
        .json::<serde_json::Value>()
        .await
        .map_err(|e| e.to_string())?;
    pick_version_entry(&raw).map(|entry| entry.cloned())
}

/// Installs one Modrinth project's primary jar into `mods_dir`, resolving and
/// installing its `required` dependencies first (recursively, cycle-guarded
/// via `visited`). Returns every downloaded file name in install order.
/// AppHandle-free core for hermetic tests.
async fn install_project_with_deps(
    client: &reqwest::Client,
    api_base: &str,
    mods_dir: &Path,
    project_id: &str,
    game_version: &str,
    loader: &str,
    visited: &mut HashSet<String>,
) -> Result<Vec<String>, String> {
    validate_project_id(project_id)?;
    if !visited.insert(project_id.to_owned()) {
        return Ok(Vec::new()); // dependency diamond / cycle: already handled
    }
    let entry = fetch_compatible_version(client, api_base, project_id, game_version, loader)
        .await?
        .ok_or_else(|| format!("no compatible version of {project_id} for this build"))?;

    // required dependencies install before the main jar
    let deps: Vec<String> = entry
        .get("dependencies")
        .and_then(serde_json::Value::as_array)
        .map(|deps| {
            deps.iter()
                .filter(|dep| {
                    dep.get("dependency_type")
                        .and_then(serde_json::Value::as_str)
                        == Some("required")
                })
                .filter_map(|dep| dep.get("project_id").and_then(serde_json::Value::as_str))
                .map(str::to_owned)
                .collect()
        })
        .unwrap_or_default();
    let mut installed = Vec::new();
    for dep in deps {
        // boxed: async recursion needs indirection to be sized
        installed.extend(
            Box::pin(install_project_with_deps(
                client,
                api_base,
                mods_dir,
                &dep,
                game_version,
                loader,
                visited,
            ))
            .await?,
        );
    }

    let Some((url, filename, sha1)) = pick_primary_file(&entry) else {
        return Err(format!(
            "version {} carries no .jar artifact",
            entry
                .get("version_number")
                .and_then(|v| v.as_str())
                .unwrap_or("?")
        ));
    };
    let dest = mods_dir.join(&filename);
    ParallelDownloader::new(client.clone(), 4)
        .download_all(&[DownloadRequest { url, dest, sha1 }])
        .await
        .map_err(|e| e.to_string())?;
    installed.push(filename);
    Ok(installed)
}

/// Installs one mod plus its `required` Modrinth dependencies (e.g.
/// `minecraft-access` pulling `fabric-api`) into the instance mods dir.
/// Returns every installed file name in install order.
#[tauri::command]
pub async fn install_mod_with_deps(
    app: AppHandle,
    instance_id: String,
    project_id: String,
    game_version: String,
    loader: String,
) -> Result<Vec<String>, String> {
    validate_instance_id(&instance_id)?;
    validate_project_id(&project_id)?;
    let root = instances_root(&app).await?;
    let dir = mods_dir(&root, &instance_id).await?;
    let mut visited = HashSet::new();
    install_project_with_deps(
        &reqwest::Client::new(),
        API_BASE,
        &dir,
        &project_id,
        &game_version,
        &loader,
        &mut visited,
    )
    .await
}

/// Curated Blind/Deaf Mode mod suggestions, filtered to projects that ship a
/// version actually compatible with the instance's game version + loader.
#[tauri::command]
pub async fn suggest_accessibility_mods(
    game_version: String,
    loader: String,
    blind_mode: bool,
    deaf_mode: bool,
) -> Result<Vec<AccessibilityModSuggestion>, String> {
    suggest_accessibility_mods_core(
        &reqwest::Client::new(),
        API_BASE,
        &game_version,
        &loader,
        blind_mode,
        deaf_mode,
    )
    .await
}

/// AppHandle-free core of `suggest_accessibility_mods` for hermetic tests.
pub(crate) async fn suggest_accessibility_mods_core(
    client: &reqwest::Client,
    api_base: &str,
    game_version: &str,
    loader: &str,
    blind_mode: bool,
    deaf_mode: bool,
) -> Result<Vec<AccessibilityModSuggestion>, String> {
    if !loader.trim().eq_ignore_ascii_case("fabric") {
        // the curated catalog targets Fabric; other loaders get nothing yet
        return Ok(Vec::new());
    }
    let mut out = Vec::new();
    for candidate in accessibility_candidates(blind_mode, deaf_mode) {
        let compatible =
            fetch_compatible_version(client, api_base, candidate.project_id, game_version, loader)
                .await?
                .is_some();
        if compatible {
            out.push(candidate);
        }
    }
    Ok(out)
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

    /// Canned `/version` response: one compatible release with the primary
    /// jar served from the loopback and the given dependencies array.
    fn version_json(base: &str, jar: &str, deps: &str) -> String {
        format!(
            r#"[{{"version_number":"1.0.0","files":[{{"filename":"{jar}","primary":true,"url":"{base}/jar/{jar}"}}],"dependencies":{deps}}}]"#
        )
    }

    /// One-shot loopback Modrinth stand-in: answers every connection with the
    /// canned body for the request path (404 otherwise), then closes.
    fn loopback_api(routes: impl FnOnce(&str) -> Vec<(&'static str, u16, String)>) -> String {
        use std::collections::HashMap;
        use std::io::{Read, Write};
        use std::net::TcpListener;

        let listener = TcpListener::bind("127.0.0.1:0").unwrap();
        let base = format!("http://{}", listener.local_addr().unwrap());
        let map: HashMap<String, (u16, String)> = routes(&base)
            .into_iter()
            .map(|(path, status, body)| (path.to_owned(), (status, body)))
            .collect();
        std::thread::spawn(move || {
            for mut stream in listener.incoming().flatten() {
                let mut buf = [0u8; 4096];
                let n = stream.read(&mut buf).unwrap_or(0);
                let req = String::from_utf8_lossy(&buf[..n]);
                let path = req
                    .split_whitespace()
                    .nth(1)
                    .unwrap_or_default()
                    .split('?')
                    .next()
                    .unwrap_or_default();
                let (status, body) = map
                    .get(path)
                    .cloned()
                    .unwrap_or_else(|| (404, "{\"error\":\"not_found\"}".to_owned()));
                let resp = format!(
                    "HTTP/1.1 {status} TW\r\nContent-Type: application/json\r\nContent-Length: {}\r\nConnection: close\r\n\r\n{body}",
                    body.len()
                );
                let _ = stream.write_all(resp.as_bytes());
            }
        });
        format!("{base}/v2")
    }

    #[tokio::test]
    async fn suggestions_filter_to_compatible_fabric_versions() {
        let api = loopback_api(|base| {
            vec![
                (
                    "/v2/project/minecraft-access/version",
                    200,
                    version_json(base, "minecraft-access.jar", "[]"),
                ),
                // no compatible build -> filtered out of the suggestions
                (
                    "/v2/project/sound-physics-remastered/version",
                    200,
                    "[]".to_owned(),
                ),
                (
                    "/v2/project/echosight/version",
                    200,
                    version_json(base, "echosight.jar", "[]"),
                ),
                (
                    "/v2/project/subtitles-visualizer/version",
                    200,
                    version_json(base, "subtitles-visualizer.jar", "[]"),
                ),
                (
                    "/v2/project/visible-sound/version",
                    200,
                    version_json(base, "visible-sound.jar", "[]"),
                ),
                (
                    "/v2/project/soundsight/version",
                    200,
                    version_json(base, "soundsight.jar", "[]"),
                ),
            ]
        });
        let client = reqwest::Client::new();

        let blind = suggest_accessibility_mods_core(&client, &api, "1.21.4", "fabric", true, false)
            .await
            .unwrap();
        // sound-physics-remastered has no compatible build -> dropped
        assert_eq!(blind.len(), 1);
        assert_eq!(blind[0].project_id, "minecraft-access");
        assert_eq!(blind[0].role, "core");

        // other loaders get nothing without touching the network
        let quilt = suggest_accessibility_mods_core(&client, &api, "1.21.4", "quilt", true, true)
            .await
            .unwrap();
        assert!(quilt.is_empty());

        let deaf = suggest_accessibility_mods_core(&client, &api, "1.21.4", "fabric", false, true)
            .await
            .unwrap();
        assert_eq!(
            deaf.iter().map(|m| m.project_id).collect::<Vec<_>>(),
            vec![
                "echosight",
                "subtitles-visualizer",
                "visible-sound",
                "soundsight"
            ]
        );
    }

    #[tokio::test]
    async fn install_resolves_required_deps_first_and_skips_optional() {
        let api = loopback_api(|base| {
            vec![
                (
                    "/v2/project/minecraft-access/version",
                    200,
                    version_json(
                        base,
                        "minecraft-access.jar",
                        r#"[{"project_id":"fabric-api","version_id":"FA","dependency_type":"required"},{"project_id":"cloth-config","version_id":"CC","dependency_type":"optional"}]"#,
                    ),
                ),
                (
                    "/v2/project/fabric-api/version",
                    200,
                    version_json(base, "fabric-api.jar", "[]"),
                ),
                // optional dependency: must never be requested (the 500 would fail the install)
                ("/v2/project/cloth-config/version", 500, String::new()),
                (
                    "/jar/minecraft-access.jar",
                    200,
                    "minecraft-access-jar-bytes".to_owned(),
                ),
                (
                    "/jar/fabric-api.jar",
                    200,
                    "fabric-api-jar-bytes".to_owned(),
                ),
            ]
        });
        let dir = std::env::temp_dir().join(format!("tw-access-install-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&dir);
        std::fs::create_dir_all(&dir).unwrap();
        let client = reqwest::Client::new();
        let mut visited = HashSet::new();

        let installed = install_project_with_deps(
            &client,
            &api,
            &dir,
            "minecraft-access",
            "1.21.4",
            "fabric",
            &mut visited,
        )
        .await
        .unwrap();

        // the required dep installs before the main jar; the optional dep never does
        assert_eq!(installed, vec!["fabric-api.jar", "minecraft-access.jar"]);
        assert!(dir.join("fabric-api.jar").is_file());
        assert!(dir.join("minecraft-access.jar").is_file());
        assert!(!dir.join("cloth-config.jar").exists());
        std::fs::remove_dir_all(&dir).unwrap();
    }
}
