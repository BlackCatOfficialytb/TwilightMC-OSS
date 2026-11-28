// CurseForge v1 browser bridge: mod search for one game version + loader
// (personal API key from Settings) and a verified install of a hit's `.jar`
// artifact into an instance's `minecraft/mods` directory. Files blocked for
// distribution carry no download URL — the UI falls back to "Open in Browser"
// plus the manual `.jar` import instead of downloading.

use serde::Serialize;
use tauri::AppHandle;
use twilight_downloader::{DownloadRequest, ParallelDownloader};

use crate::accounts::{load_settings, settings_path};
use crate::devmode::redact_secret;
use crate::instances::{instances_root, validate_instance_id};
use crate::modpack::{CF_API_BASE, curse_file_name};
use crate::mods::mods_dir;

/// One search hit of the CurseForge mods browser.
#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct CurseSearchResult {
    pub project_id: u64,
    pub title: String,
    pub description: String,
    /// CDN thumbnail URL; empty string when the project has no artwork.
    pub icon_url: String,
    pub downloads: u64,
    pub author: String,
    /// Project page on curseforge.com (the "Open in Browser" fallback target).
    pub website_url: String,
    /// Primary `.jar` artifact of the hit. An empty `download_url` means the
    /// file is blocked for distribution — manual fallback required.
    pub download_url: String,
    pub file_name: String,
    pub sha1: Option<String>,
}

/// Numeric `modLoaderType` the v1 search endpoint expects (Forge=1,
/// Fabric=4, Quilt=5, NeoForge=6); `None` = vanilla (no loader pin).
fn loader_id(loader: &str) -> Option<u8> {
    match loader.trim().to_ascii_lowercase().as_str() {
        "forge" => Some(1),
        "fabric" => Some(4),
        "quilt" => Some(5),
        "neoforge" => Some(6),
        _ => None,
    }
}

fn str_field(hit: &serde_json::Value, field: &str) -> String {
    hit.get(field)
        .and_then(serde_json::Value::as_str)
        .unwrap_or_default()
        .to_owned()
}

/// SHA-1 of one `latestFiles` entry (`hashes[].algo` 1 = SHA-1, 2 = MD5).
fn entry_sha1(file: &serde_json::Value) -> Option<String> {
    file.get("hashes")?
        .as_array()?
        .iter()
        .find(|h| h.get("algo") == Some(&serde_json::Value::from(1)))
        .and_then(|h| h.get("value"))
        .and_then(serde_json::Value::as_str)
        .map(str::to_owned)
}

/// (downloadUrl, fileName, sha1) of the newest distributable `latestFiles`
/// entry; `None` = every file is blocked for distribution or unusable.
fn pick_primary_file(hit: &serde_json::Value) -> Option<(String, String, Option<String>)> {
    let files = hit.get("latestFiles")?.as_array()?;
    for file in files {
        if file.get("isAvailable") == Some(&serde_json::Value::Bool(false)) {
            continue;
        }
        let url = file
            .get("downloadUrl")
            .and_then(serde_json::Value::as_str)
            .unwrap_or_default();
        if !url.starts_with("https://") {
            continue;
        }
        let file_name = str_field(file, "fileName");
        if file_name.is_empty() {
            continue;
        }
        return Some((url.to_owned(), file_name, entry_sha1(file)));
    }
    None
}

/// Flattens a `/mods/search` response's data hits into browser rows. Hits
/// without a distributable file keep their metadata but carry an empty
/// `download_url` (the blocked-distribution marker).
pub(crate) fn parse_search_hits(raw: &serde_json::Value) -> Vec<CurseSearchResult> {
    raw.get("data")
        .and_then(|hits| hits.as_array())
        .map(|hits| hits.iter().filter_map(parse_hit).collect())
        .unwrap_or_default()
}

fn parse_hit(hit: &serde_json::Value) -> Option<CurseSearchResult> {
    let (download_url, file_name, sha1) = pick_primary_file(hit).unwrap_or_default();
    Some(CurseSearchResult {
        project_id: hit.get("id")?.as_u64()?,
        title: str_field(hit, "name"),
        description: str_field(hit, "summary"),
        icon_url: hit
            .pointer("/logo/thumbnailUrl")
            .and_then(serde_json::Value::as_str)
            .unwrap_or_default()
            .to_owned(),
        downloads: hit
            .get("downloadCount")
            .and_then(serde_json::Value::as_u64)
            .unwrap_or_default(),
        author: hit
            .pointer("/authors/0/name")
            .and_then(serde_json::Value::as_str)
            .unwrap_or_default()
            .to_owned(),
        website_url: hit
            .pointer("/links/websiteUrl")
            .and_then(serde_json::Value::as_str)
            .unwrap_or_default()
            .to_owned(),
        download_url,
        file_name,
        sha1,
    })
}

/// Descriptive message for a non-2xx CurseForge response. The v1 API reports
/// `{"error": "..."}` (sometimes nested as `{"error": {...}}`); surface that
/// detail plus an actionable hint for the auth failures users hit most.
pub(crate) fn curseforge_error_message(status: reqwest::StatusCode, body: &str) -> String {
    let detail = serde_json::from_str::<serde_json::Value>(body)
        .ok()
        .and_then(|raw| {
            let error = raw.get("error")?;
            if let Some(message) = error.as_str() {
                return Some(message.to_owned());
            }
            error
                .get("message")
                .and_then(serde_json::Value::as_str)
                .map(str::to_owned)
        })
        .filter(|message| !message.trim().is_empty());
    let detail = detail
        .map(|message| format!(": {message}"))
        .unwrap_or_default();
    match status.as_u16() {
        401 => format!(
            "CurseForge rejected the API key (HTTP 401). Check the key in Settings → General{detail}"
        ),
        403 => format!(
            "CurseForge denied access (HTTP 403). Make sure this API key was approved for the \
             CurseForge API and is pasted without extra spaces{detail}"
        ),
        404 => format!("CurseForge returned HTTP 404 for this search{detail}"),
        _ => format!(
            "CurseForge request failed (HTTP {}){detail}",
            status.as_u16()
        ),
    }
}

/// Reads the explicit CurseForge toggle from a serialized settings object.
/// Files written before the toggle existed are treated as enabled so an
/// existing API key keeps working; an explicit `false` always wins.
pub(crate) fn curseforge_enabled_in(settings: &serde_json::Value) -> bool {
    settings
        .get("curseforge_enabled")
        .and_then(serde_json::Value::as_bool)
        .unwrap_or(true)
}

/// Loads the key and the enabled toggle together so callers can skip every
/// network call when CurseForge is disabled in Settings.
pub(crate) async fn curseforge_settings(app: &AppHandle) -> Result<(String, bool), String> {
    let settings = load_settings(&settings_path(app).await?).await;
    let value = serde_json::to_value(&settings).map_err(|e| e.to_string())?;
    let enabled = curseforge_enabled_in(&value);
    let key = settings.curseforge_api_key.unwrap_or_default();
    Ok((key, enabled))
}

/// Searches CurseForge projects (gameId 432) for one game version + loader
/// using the personal API key from Settings. `class_id` selects the project
/// class: 6 = mods, 12 = resource packs, 6552 = shaders. Keyless users stay on
/// the Modrinth flow — the UI shows the manual fallback instead.
#[tauri::command]
pub async fn search_curseforge_mods(
    app: AppHandle,
    query: String,
    game_version: String,
    loader: String,
    class_id: Option<u32>,
) -> Result<Vec<CurseSearchResult>, String> {
    let (key, enabled) = curseforge_settings(&app).await?;
    if !enabled {
        return Err("CurseForge is disabled in Settings".to_owned());
    }
    search_curseforge_mods_core(
        CF_API_BASE,
        key.trim(),
        &query,
        &game_version,
        &loader,
        class_id,
    )
    .await
}

/// AppHandle-free core of [`search_curseforge_mods`] for hermetic tests.
pub(crate) async fn search_curseforge_mods_core(
    api_base: &str,
    api_key: &str,
    query: &str,
    game_version: &str,
    loader: &str,
    class_id: Option<u32>,
) -> Result<Vec<CurseSearchResult>, String> {
    if api_key.is_empty() {
        return Err("no CurseForge API key configured".to_owned());
    }
    let class_id = class_id.unwrap_or(6);
    let mut params = vec![
        ("gameId", "432".to_owned()),
        ("classId", class_id.to_string()),
        ("searchFilter", query.trim().to_owned()),
        ("pageSize", "40".to_owned()),
        // sortField 2 = Popularity, descending: most-installed first
        ("sortField", "2".to_owned()),
        ("sortOrder", "desc".to_owned()),
    ];
    // packs/shaders aren't mod-loader-specific: a loader pin would filter
    // every hit out
    if class_id == 6
        && let Some(id) = loader_id(loader)
    {
        params.push(("modLoaderType", id.to_string()));
    }
    if !game_version.trim().is_empty() {
        params.push(("gameVersion", game_version.trim().to_owned()));
    }
    let url = reqwest::Url::parse_with_params(format!("{api_base}/mods/search").as_str(), &params)
        .map_err(|e| redact_secret(&e.to_string(), api_key))?;
    let client = reqwest::Client::new();
    // 429/503 are transient; retry_request caps the budget and the delay.
    let request_client = &client;
    let request_url = &url;
    let resp = crate::net::retry_request(crate::net::MAX_ATTEMPTS, || async move {
        request_client
            .get(request_url.clone())
            .header("x-api-key", api_key)
            .header(reqwest::header::ACCEPT, "application/json")
            .header(reqwest::header::USER_AGENT, crate::modrinth::client_ua())
            .send()
            .await
            .map_err(|e| e.to_string())
    })
    .await
    .map_err(|e| redact_secret(&e, api_key))?;
    let status = resp.status();
    let body = resp
        .text()
        .await
        .map_err(|e| redact_secret(&e.to_string(), api_key))?;
    if !status.is_success() {
        return Err(redact_secret(
            &curseforge_error_message(status, &body),
            api_key,
        ));
    }
    let raw: serde_json::Value =
        serde_json::from_str(&body).map_err(|e| redact_secret(&e.to_string(), api_key))?;
    Ok(parse_search_hits(&raw))
}

/// Installs one CurseForge hit's `.jar` artifact into the instance mods dir
/// (AtomicDownloader write, SHA-1 verified when the hit carries a hash).
/// Trust boundary: the fetch must stay on CurseForge's CDN and the write
/// inside the mods dir. Blocked hits (empty download_url) never reach this —
/// the UI shows the manual fallback instead.
#[tauri::command]
pub async fn install_curseforge_mod(
    app: AppHandle,
    instance_id: String,
    download_url: String,
    file_name: String,
    sha1: Option<String>,
) -> Result<String, String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    let dir = mods_dir(&root, &instance_id).await?;
    let name = curse_file_name(&file_name, &download_url);
    if name.is_empty() || !download_url.starts_with("https://") {
        return Err("missing file name or download url".to_owned());
    }
    let host = reqwest::Url::parse(&download_url)
        .ok()
        .and_then(|u| u.host_str().map(str::to_owned))
        .unwrap_or_default();
    // ponytail: pin the CurseForge CDN hosts; widen if the CDN ever splits
    if !host.ends_with("forgecdn.net") {
        return Err("downloads must come from the CurseForge CDN".to_owned());
    }
    ParallelDownloader::new(reqwest::Client::new(), 1)
        .download_all(&[DownloadRequest {
            url: download_url,
            dest: dir.join(&name),
            sha1,
        }])
        .await
        .map_err(|e| e.to_string())?;
    let dest = dir.join(&name);
    if let Some(cas_root) = crate::mods::cas_root_if_enabled(&app).await? {
        crate::mods::cas_dedupe_dest(&cas_root, &dest).await?;
    }
    // CDN host was pinned above: this jar is a public CurseForge artifact.
    let _ = crate::provenance::record_public_mod(
        &root.join(&instance_id),
        &name,
        &name,
        None,
        None,
        "curseforge",
    );
    Ok(name)
}

/// Installs one CurseForge resource pack / shader `.zip` into the instance's
/// `resourcepacks` or `shaderpacks` dir (SHA-1 verified when supplied).
/// Same trust boundary as [`install_curseforge_mod`]: CurseForge CDN only.
#[tauri::command]
pub async fn install_curseforge_pack(
    app: AppHandle,
    instance_id: String,
    download_url: String,
    file_name: String,
    sha1: Option<String>,
    project_type: String,
) -> Result<String, String> {
    let dir_name = match project_type.as_str() {
        "resourcepack" => "resourcepacks",
        "shader" => "shaderpacks",
        other => return Err(format!("unsupported project type {other:?}")),
    };
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    let dir = root.join(&instance_id).join("minecraft").join(dir_name);
    tokio::fs::create_dir_all(&dir)
        .await
        .map_err(|e| e.to_string())?;
    let name = curse_file_name(&file_name, &download_url);
    if name.is_empty() || !download_url.starts_with("https://") {
        return Err("missing file name or download url".to_owned());
    }
    let host = reqwest::Url::parse(&download_url)
        .ok()
        .and_then(|u| u.host_str().map(str::to_owned))
        .unwrap_or_default();
    if !host.ends_with("forgecdn.net") {
        return Err("downloads must come from the CurseForge CDN".to_owned());
    }
    ParallelDownloader::new(reqwest::Client::new(), 1)
        .download_all(&[DownloadRequest {
            url: download_url,
            dest: dir.join(&name),
            sha1,
        }])
        .await
        .map_err(|e| e.to_string())?;
    Ok(name)
}

#[cfg(test)]
mod tests {
    use super::*;

    /// One-shot loopback CurseForge stand-in: answers `/v1/mods/search` with
    /// the canned body, forwards the raw request through a channel (header
    /// assertions), 404 otherwise.
    fn loopback_api(body: String) -> (String, std::sync::mpsc::Receiver<String>) {
        loopback_api_status(200, body)
    }

    /// Same stand-in with an arbitrary status, used for auth-error tests.
    fn loopback_api_status(
        status: u16,
        body: String,
    ) -> (String, std::sync::mpsc::Receiver<String>) {
        use std::io::{Read, Write};
        use std::net::TcpListener;

        let listener = TcpListener::bind("127.0.0.1:0").unwrap();
        let base = format!("http://{}", listener.local_addr().unwrap());
        let (tx, rx) = std::sync::mpsc::channel();
        std::thread::spawn(move || {
            for mut stream in listener.incoming().flatten() {
                let mut buf = [0u8; 4096];
                let n = stream.read(&mut buf).unwrap_or(0);
                let _ = tx.send(String::from_utf8_lossy(&buf[..n]).into_owned());
                let req = String::from_utf8_lossy(&buf[..n]);
                let path = req
                    .split_whitespace()
                    .nth(1)
                    .unwrap_or_default()
                    .split('?')
                    .next()
                    .unwrap_or_default();
                let (status, body) = if path == "/v1/mods/search" {
                    (status, body.clone())
                } else {
                    (404, "{\"error\":\"not_found\"}".to_owned())
                };
                let resp = format!(
                    "HTTP/1.1 {status} TW\r\nContent-Type: application/json\r\nContent-Length: {}\r\nConnection: close\r\n\r\n{body}",
                    body.len()
                );
                let _ = stream.write_all(resp.as_bytes());
            }
        });
        (format!("{base}/v1"), rx)
    }

    /// Canned search response: one distributable hit (SHA-1 hashed) and one
    /// blocked for distribution (downloadUrl null).
    fn search_json(available_url: &str) -> String {
        format!(
            r#"{{"data":[{{"id":238222,"name":"Just Enough Items","summary":"Item and recipe viewing.","downloadCount":420000000,"authors":[{{"name":"mezz"}}],"links":{{"websiteUrl":"https://www.curseforge.com/minecraft/mc-mods/jei"}},"logo":{{"thumbnailUrl":"https://media.forgecdn.net/avatars/jei.png"}},"latestFiles":[{{"fileName":"jei-1.21.4-fabric.jar","downloadUrl":"{available_url}","isAvailable":true,"hashes":[{{"value":"abc123","algo":1}}]}}]}},{{"id":9999,"name":"Blocked Mod","summary":"Cannot be distributed.","downloadCount":1,"authors":[{{"name":"anon"}}],"links":{{"websiteUrl":"https://www.curseforge.com/minecraft/mc-mods/blocked"}},"logo":null,"latestFiles":[{{"fileName":"blocked.jar","downloadUrl":null,"isAvailable":false}}]}}]}}"#
        )
    }

    #[test]
    fn parse_search_hits_reads_fields_and_marks_blocked() {
        let raw: serde_json::Value = serde_json::from_str(&search_json(
            "https://mediafilez.forgecdn.net/files/jei.jar",
        ))
        .unwrap();
        let hits = parse_search_hits(&raw);
        assert_eq!(hits.len(), 2);
        assert_eq!(hits[0].project_id, 238222);
        assert_eq!(hits[0].title, "Just Enough Items");
        assert_eq!(hits[0].author, "mezz");
        assert_eq!(hits[0].downloads, 420000000);
        assert_eq!(
            hits[0].website_url,
            "https://www.curseforge.com/minecraft/mc-mods/jei"
        );
        assert_eq!(
            hits[0].download_url,
            "https://mediafilez.forgecdn.net/files/jei.jar"
        );
        assert_eq!(hits[0].file_name, "jei-1.21.4-fabric.jar");
        assert_eq!(hits[0].sha1.as_deref(), Some("abc123"));
        // blocked for distribution: metadata intact, no usable URL
        assert_eq!(hits[1].project_id, 9999);
        assert_eq!(hits[1].title, "Blocked Mod");
        assert!(hits[1].download_url.is_empty());
        assert!(hits[1].file_name.is_empty());
    }

    #[test]
    fn loader_ids_map_to_api_codes() {
        assert_eq!(loader_id("forge"), Some(1));
        assert_eq!(loader_id("Fabric"), Some(4));
        assert_eq!(loader_id("quilt"), Some(5));
        assert_eq!(loader_id("NeoForge"), Some(6));
        assert_eq!(loader_id("vanilla"), None);
    }

    #[tokio::test]
    async fn search_sends_key_and_parses_loopback_response() {
        let (api, rx) = loopback_api(search_json("https://mediafilez.forgecdn.net/files/jei.jar"));
        let hits =
            search_curseforge_mods_core(&api, "test-key-123", "jei", "1.21.4", "fabric", None)
                .await
                .unwrap();
        assert_eq!(hits.len(), 2);
        assert_eq!(hits[0].file_name, "jei-1.21.4-fabric.jar");
        // the personal key travels in the x-api-key header, filters ride along
        let req = rx.recv_timeout(std::time::Duration::from_secs(5)).unwrap();
        assert!(req.contains("x-api-key: test-key-123"));
        assert!(
            req.to_ascii_lowercase()
                .contains("accept: application/json")
        );
        assert!(req.contains("gameId=432"));
        assert!(req.contains("classId=6"));
        assert!(req.contains("modLoaderType=4"));
        assert!(req.contains("gameVersion=1.21.4"));
        assert!(req.contains("searchFilter=jei"));
    }

    #[tokio::test]
    async fn pack_search_uses_class_id_and_skips_loader_pin() {
        let (api, rx) = loopback_api(search_json(
            "https://mediafilez.forgecdn.net/files/pack.zip",
        ));
        search_curseforge_mods_core(&api, "key", "shaders", "1.21.4", "fabric", Some(6552))
            .await
            .unwrap();
        let req = rx.recv_timeout(std::time::Duration::from_secs(5)).unwrap();
        assert!(req.contains("classId=6552"));
        assert!(!req.contains("modLoaderType"));
    }

    #[test]
    fn error_messages_explain_auth_failures() {
        let forbidden = curseforge_error_message(
            reqwest::StatusCode::FORBIDDEN,
            r#"{"error":{"message":"API key not approved"}}"#,
        );
        assert!(forbidden.contains("HTTP 403"));
        assert!(forbidden.contains("API key not approved"));
        let unauthorized = curseforge_error_message(reqwest::StatusCode::UNAUTHORIZED, "{}");
        assert!(unauthorized.contains("HTTP 401"));
        let other =
            curseforge_error_message(reqwest::StatusCode::BAD_GATEWAY, r#"{"error":"upstream"}"#);
        assert!(other.contains("HTTP 502"));
        assert!(other.contains("upstream"));
    }

    #[tokio::test]
    async fn search_without_key_errors_before_any_network_call() {
        let (api, _rx) = loopback_api(search_json("https://mediafilez.forgecdn.net/files/x.jar"));
        let err = search_curseforge_mods_core(&api, "", "jei", "1.21.4", "fabric", None)
            .await
            .unwrap_err();
        assert!(err.contains("no CurseForge API key"));
    }

    #[tokio::test]
    async fn api_key_is_redacted_from_401_error_details() {
        const KEY: &str = "cf-super-secret-key-42";
        let (api, rx) =
            loopback_api_status(401, format!(r#"{{"error":"invalid key {KEY} rejected"}}"#));
        let err = search_curseforge_mods_core(&api, KEY, "jei", "1.21.4", "fabric", None)
            .await
            .unwrap_err();
        assert!(err.contains("HTTP 401"), "{err}");
        assert!(err.contains("********"), "{err}");
        assert!(!err.contains(KEY), "raw key leaked into error: {err}");
        // 401 is non-retryable: exactly one request reached the loopback API
        let request = rx.recv_timeout(std::time::Duration::from_secs(5)).unwrap();
        assert!(request.contains(&format!("x-api-key: {KEY}")));
        assert!(
            rx.recv_timeout(std::time::Duration::from_millis(100))
                .is_err(),
            "401 must not be retried"
        );
    }

    #[test]
    fn explicit_disable_wins_and_legacy_settings_stay_enabled() {
        assert!(!curseforge_enabled_in(&serde_json::json!({
            "curseforge_enabled": false
        })));
        assert!(curseforge_enabled_in(&serde_json::json!({
            "curseforge_enabled": true
        })));
        assert!(curseforge_enabled_in(&serde_json::json!({
            "curseforge_api_key": "legacy-key"
        })));
    }
}
