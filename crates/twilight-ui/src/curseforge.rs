// CurseForge v1 browser bridge: mod search for one game version + loader
// (personal API key from Settings) and a verified install of a hit's `.jar`
// artifact into an instance's `minecraft/mods` directory. Files blocked for
// distribution carry no download URL — the UI falls back to "Open in Browser"
// plus the manual `.jar` import instead of downloading.

use serde::Serialize;
use tauri::AppHandle;
use twilight_downloader::{DownloadRequest, ParallelDownloader};

use crate::accounts::{load_settings, settings_path};
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

/// Searches CurseForge mods (gameId 432, classId 6 = Mods) for one game
/// version + loader using the personal API key from Settings. Keyless users
/// stay on the Modrinth flow — the UI shows the manual fallback instead.
#[tauri::command]
pub async fn search_curseforge_mods(
    app: AppHandle,
    query: String,
    game_version: String,
    loader: String,
) -> Result<Vec<CurseSearchResult>, String> {
    let key = load_settings(&settings_path(&app).await?)
        .await
        .curseforge_api_key
        .unwrap_or_default();
    search_curseforge_mods_core(CF_API_BASE, key.trim(), &query, &game_version, &loader).await
}

/// AppHandle-free core of [`search_curseforge_mods`] for hermetic tests.
pub(crate) async fn search_curseforge_mods_core(
    api_base: &str,
    api_key: &str,
    query: &str,
    game_version: &str,
    loader: &str,
) -> Result<Vec<CurseSearchResult>, String> {
    if api_key.is_empty() {
        return Err("no CurseForge API key configured".to_owned());
    }
    let mut params = vec![
        ("gameId", "432".to_owned()),
        ("classId", "6".to_owned()),
        ("searchFilter", query.trim().to_owned()),
        ("pageSize", "40".to_owned()),
        // sortField 2 = Popularity, descending: most-installed first
        ("sortField", "2".to_owned()),
        ("sortOrder", "desc".to_owned()),
    ];
    if let Some(id) = loader_id(loader) {
        params.push(("modLoaderType", id.to_string()));
    }
    if !game_version.trim().is_empty() {
        params.push(("gameVersion", game_version.trim().to_owned()));
    }
    let url = reqwest::Url::parse_with_params(format!("{api_base}/mods/search").as_str(), &params)
        .map_err(|e| e.to_string())?;
    let raw = reqwest::Client::new()
        .get(url)
        .header("x-api-key", api_key)
        .header(reqwest::header::USER_AGENT, crate::modrinth::client_ua())
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
    Ok(name)
}

#[cfg(test)]
mod tests {
    use super::*;

    /// One-shot loopback CurseForge stand-in: answers `/v1/mods/search` with
    /// the canned body, forwards the raw request through a channel (header
    /// assertions), 404 otherwise.
    fn loopback_api(body: String) -> (String, std::sync::mpsc::Receiver<String>) {
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
                    (200, body.clone())
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
        let hits = search_curseforge_mods_core(&api, "test-key-123", "jei", "1.21.4", "fabric")
            .await
            .unwrap();
        assert_eq!(hits.len(), 2);
        assert_eq!(hits[0].file_name, "jei-1.21.4-fabric.jar");
        // the personal key travels in the x-api-key header, filters ride along
        let req = rx.recv_timeout(std::time::Duration::from_secs(5)).unwrap();
        assert!(req.contains("x-api-key: test-key-123"));
        assert!(req.contains("gameId=432"));
        assert!(req.contains("classId=6"));
        assert!(req.contains("modLoaderType=4"));
        assert!(req.contains("gameVersion=1.21.4"));
        assert!(req.contains("searchFilter=jei"));
    }

    #[tokio::test]
    async fn search_without_key_errors_before_any_network_call() {
        let (api, _rx) = loopback_api(search_json("https://mediafilez.forgecdn.net/files/x.jar"));
        let err = search_curseforge_mods_core(&api, "", "jei", "1.21.4", "fabric")
            .await
            .unwrap_err();
        assert!(err.contains("no CurseForge API key"));
    }
}
