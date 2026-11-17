//! Artifact resolution from the official APIs: Mojang piston-meta (Vanilla),
//! PaperMC API v2 (Paper/Velocity), Purpur API, Fabric meta and GitHub
//! releases (Pumpkin + helpers for Connect/AuthMe plugins).

use serde_json::Value;

use crate::ServerSoftware;

/// Vanilla version ids (newest first) from `version_manifest_v2.json`.
pub fn vanilla_version_ids(manifest: &Value) -> Vec<String> {
    manifest
        .get("versions")
        .and_then(Value::as_array)
        .map(|list| {
            list.iter()
                .filter_map(|v| v.get("id").and_then(Value::as_str))
                .map(str::to_owned)
                .collect()
        })
        .unwrap_or_default()
}

/// The manifest entry (`id`, `url`, `sha1`) for one Vanilla version.
pub fn vanilla_entry(manifest: &Value, version: &str) -> Option<(String, String, Option<String>)> {
    manifest
        .get("versions")?
        .as_array()?
        .iter()
        .find(|v| v.get("id").and_then(Value::as_str) == Some(version))
        .map(|v| {
            (
                version.to_owned(),
                v.get("url")
                    .and_then(Value::as_str)
                    .unwrap_or_default()
                    .to_owned(),
                v.get("sha1").and_then(Value::as_str).map(str::to_owned),
            )
        })
}

/// The server-jar download (`url`, `sha1`) from one Vanilla version JSON.
pub fn vanilla_server_download(version_json: &Value) -> Option<(String, Option<String>)> {
    let dl = version_json.get("downloads")?.get("server")?;
    Some((
        dl.get("url")?.as_str()?.to_owned(),
        dl.get("sha1").and_then(Value::as_str).map(str::to_owned),
    ))
}

/// PaperMC builds JSON -> the newest build's download URL.
/// Project is `paper` or `velocity`; asset key is `downloads.application`.
pub fn papermc_download_url(builds: &Value) -> Option<String> {
    let build = builds.get("builds")?.as_array()?.last()?;
    let name = build
        .get("downloads")?
        .get("application")?
        .get("name")?
        .as_str()?;
    let (project, version) = (
        builds.get("project_id")?.as_str()?,
        builds.get("version")?.as_str()?,
    );
    let build_id = build.get("build")?;
    Some(format!(
        "https://api.papermc.io/v2/projects/{project}/versions/{version}/builds/{build_id}/downloads/{name}"
    ))
}

/// Purpur direct binary URL: `…/v2/purpur/{version}/latest/download`.
pub fn purpur_download_url(version: &str) -> String {
    format!("https://api.purpurmc.org/v2/purpur/{version}/latest/download")
}

/// Fabric server launcher jar (single jar, no checksum).
pub fn fabric_download_url(game: &str, loader: &str) -> String {
    format!("https://meta.fabricmc.net/v2/versions/loader/{game}/{loader}/server/jar")
}

/// Picks the first asset whose name satisfies `want` (case-insensitive
/// contains). GitHub release JSON shape: `assets[].name` + `browser_download_url`.
pub fn pick_asset(release: &Value, want: impl Fn(&str) -> bool) -> Option<String> {
    release
        .get("assets")?
        .as_array()?
        .iter()
        .filter_map(|a| {
            let name = a.get("name")?.as_str()?;
            a.get("browser_download_url")?.as_str().map(|u| (name, u))
        })
        .find(|(name, _)| want(name))
        .map(|(_, url)| url.to_owned())
}

/// Asset predicate for the host target triple: matches `X64`/`ARM64` + OS
/// tag in the asset name.
pub fn host_asset_matches(name: &str) -> bool {
    let n = name.to_ascii_lowercase();
    let arch = if cfg!(target_arch = "x86_64") {
        ["x64", "x86_64", "amd64"].as_slice()
    } else if cfg!(target_arch = "aarch64") {
        ["arm64", "aarch64"].as_slice()
    } else {
        return false;
    };
    let os: &[&str] = if cfg!(target_os = "windows") {
        &["windows", "win", ".exe"]
    } else if cfg!(target_os = "macos") {
        &["macos", "darwin", "apple"]
    } else {
        &["linux"]
    };
    os.iter().any(|o| n.contains(o)) && arch.iter().any(|a| n.contains(a))
}

/// Pumpkin release binary URL from the latest GitHub release, matching the
/// host OS/arch; plain builds win over `-v3-` (CPU-feature specific) ones.
pub fn pumpkin_asset_url(latest: &Value) -> Option<String> {
    pick_asset(latest, |name| {
        host_asset_matches(name) && !name.to_ascii_lowercase().contains("-v3")
    })
    .or_else(|| pick_asset(latest, host_asset_matches))
}

/// The three proxy/plugin bridges Minekube Connect ships per release.
pub fn connect_plugin_asset(url: &Value, software: ServerSoftware) -> Option<String> {
    let want = match software {
        ServerSoftware::Velocity => "connect-velocity",
        ServerSoftware::Purpur | ServerSoftware::Paper => "connect-spigot",
        _ => "connect-spigot",
    };
    pick_asset(url, |name| {
        name.eq_ignore_ascii_case(&format!("{want}.jar"))
    })
}

/// AuthMe plugin jar, preferring the Paper build.
pub fn authme_asset_url(latest: &Value) -> Option<String> {
    pick_asset(latest, |name| {
        let n = name.to_ascii_lowercase();
        n.ends_with(".jar") && n.contains("authme") && n.contains("paper")
    })
    .or_else(|| {
        pick_asset(latest, |name| {
            let n = name.to_ascii_lowercase();
            n.ends_with(".jar") && n.contains("authme")
        })
    })
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;

    #[test]
    fn vanilla_manifest_parse() {
        let m = json!({
            "versions": [
                {"id": "1.21.4", "url": "https://piston-meta.mojang.com/v1/packages/aaa/1.21.4.json", "sha1": "abc"},
                {"id": "1.20.1", "url": "https://piston-meta.mojang.com/v1/packages/bbb/1.20.1.json"}
            ]
        });
        assert_eq!(vanilla_version_ids(&m), vec!["1.21.4", "1.20.1"]);
        let (id, url, sha1) = vanilla_entry(&m, "1.21.4").unwrap();
        assert_eq!(id, "1.21.4");
        assert_eq!(
            url,
            "https://piston-meta.mojang.com/v1/packages/aaa/1.21.4.json"
        );
        assert_eq!(sha1.as_deref(), Some("abc"));
        assert!(vanilla_entry(&m, "9.9.9").is_none());
    }

    #[test]
    fn vanilla_server_download_parse() {
        let v = json!({"downloads": {"server": {"url": "https://piston-data.mojang.com/server.jar", "sha1": "deadbeef"}}});
        let (url, sha1) = vanilla_server_download(&v).unwrap();
        assert_eq!(url, "https://piston-data.mojang.com/server.jar");
        assert_eq!(sha1.as_deref(), Some("deadbeef"));
    }

    #[test]
    fn papermc_builds_parse() {
        let b = json!({
            "project_id": "paper",
            "version": "1.21.4",
            "builds": [
                {"build": 100, "downloads": {"application": {"name": "paper-1.21.4-100.jar"}}},
                {"build": 231, "downloads": {"application": {"name": "paper-1.21.4-231.jar"}}}
            ]
        });
        assert_eq!(
            papermc_download_url(&b).unwrap(),
            "https://api.papermc.io/v2/projects/paper/versions/1.21.4/builds/231/downloads/paper-1.21.4-231.jar"
        );
    }

    #[test]
    fn purpur_and_fabric_urls() {
        assert_eq!(
            purpur_download_url("1.21.4"),
            "https://api.purpurmc.org/v2/purpur/1.21.4/latest/download"
        );
        assert_eq!(
            fabric_download_url("1.21.4", "0.16.9"),
            "https://meta.fabricmc.net/v2/versions/loader/1.21.4/0.16.9/server/jar"
        );
    }

    #[test]
    fn pumpkin_host_asset_selection() {
        let release = json!({
            "assets": [
                {"name": "pumpkin-X64-Windows-v3.exe", "browser_download_url": "https://x/v3.exe"},
                {"name": "pumpkin-X64-Windows.exe", "browser_download_url": "https://x/plain.exe"},
                {"name": "pumpkin-ARM64-Linux", "browser_download_url": "https://x/arm"}
            ]
        });
        let url = pumpkin_asset_url(&release).unwrap();
        assert_eq!(url, "https://x/plain.exe");
    }

    #[test]
    fn connect_and_authme_assets() {
        let release = json!({
            "assets": [
                {"name": "connect-velocity.jar", "browser_download_url": "https://x/velocity.jar"},
                {"name": "connect-spigot.jar", "browser_download_url": "https://x/spigot.jar"},
                {"name": "AuthMe-6.0.1-Spigot-1.21.jar", "browser_download_url": "https://x/spigot-auth.jar"},
                {"name": "AuthMe-6.0.1-Paper.jar", "browser_download_url": "https://x/paper-auth.jar"}
            ]
        });
        assert_eq!(
            connect_plugin_asset(&release, ServerSoftware::Velocity).unwrap(),
            "https://x/velocity.jar"
        );
        assert_eq!(
            connect_plugin_asset(&release, ServerSoftware::Paper).unwrap(),
            "https://x/spigot.jar"
        );
        assert_eq!(
            authme_asset_url(&release).unwrap(),
            "https://x/paper-auth.jar"
        );
    }
}
