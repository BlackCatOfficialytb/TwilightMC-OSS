//! IPC for the Settings → Horizon Engine surface: discover local native
//! clients, browse GitHub releases and install one on request. Horizon is
//! never bundled; only a build the player chooses is downloaded and stored.

use serde::Serialize;
use tauri::AppHandle;

use twilight_horizon::{
    InstalledRelease, Release, discover_client_binaries, download_asset, extract_archive,
    fetch_releases, platform_asset_name, preferred_release, probe_launch_api, release_asset,
};

/// One `horizon-client` found on this machine, with its best-effort probe.
#[derive(Debug, Clone, Serialize)]
pub struct DetectedHorizon {
    pub path: String,
    pub horizon: Option<String>,
    pub minecraft: Option<String>,
    pub launch_api: Option<String>,
}

/// Probes every discovered binary. Failures are reported as empty metadata,
/// because an older build is still usable with the documented flags.
#[tauri::command]
pub async fn detect_horizon() -> Result<Vec<DetectedHorizon>, String> {
    let mut found = Vec::new();
    for path in discover_client_binaries().into_iter().take(4) {
        let mut row = DetectedHorizon {
            path: path.to_string_lossy().into_owned(),
            horizon: None,
            minecraft: None,
            launch_api: None,
        };
        if let Ok(info) = probe_launch_api(&path).await {
            row.horizon = info.horizon;
            row.minecraft = info.minecraft;
            row.launch_api = Some(info.launch_api);
        }
        found.push(row);
    }
    Ok(found)
}

/// Published releases with the asset for this platform flagged by its name.
#[tauri::command]
pub async fn list_horizon_releases() -> Result<Vec<Release>, String> {
    let client = reqwest::Client::new();
    fetch_releases(&client).await.map_err(|e| e.to_string())
}

/// Downloads a release's platform archive, unpacks it under the shared root
/// and points Settings at the extracted client. A tag of `latest` picks the
/// newest stable build that has an archive for this platform.
#[tauri::command]
pub async fn install_horizon_release(
    app: AppHandle,
    tag: String,
) -> Result<InstalledRelease, String> {
    let client = reqwest::Client::new();
    let releases = fetch_releases(&client).await.map_err(|e| e.to_string())?;
    let release = if tag.eq_ignore_ascii_case("latest") {
        preferred_release(&releases)
    } else {
        releases.iter().find(|release| release.tag == tag)
    }
    .ok_or_else(|| format!("Horizon release {tag:?} was not found"))?;
    let asset = release_asset(release).ok_or_else(|| {
        format!(
            "Horizon {} has no build for {}/{} ({:?})",
            release.tag,
            std::env::consts::OS,
            std::env::consts::ARCH,
            platform_asset_name()
        )
    })?;
    let emitter = crate::downloads::ProgressEmitter::new(
        &app,
        format!("horizon-{}", release.tag),
        asset.name.clone(),
    );
    emitter.set_stage("downloading".to_owned());
    emitter.emit(0, 1, 0, None, true);
    let bytes = download_asset(&client, asset)
        .await
        .map_err(|e| e.to_string())?;
    emitter.emit_complete(1, 1, bytes.len() as u64, Some(bytes.len() as u64));
    let root = crate::storage::shared_root(&app)
        .await?
        .join("horizon-releases");
    let files = tokio::task::spawn_blocking({
        let name = asset.name.clone();
        let root = root.clone();
        move || extract_archive(&bytes, &name, &root)
    })
    .await
    .map_err(|e| e.to_string())?
    .map_err(|e| e.to_string())?;
    let client_name = if cfg!(windows) {
        "horizon-client.exe"
    } else {
        "horizon-client"
    };
    let binary = files
        .iter()
        .find(|path| path.file_name().is_some_and(|name| name == client_name))
        .ok_or_else(|| format!("{} contains no {client_name}", asset.name))?;
    crate::prefs::set_horizon_prefs(app, Some(binary.to_string_lossy().into_owned())).await?;
    Ok(InstalledRelease {
        tag: release.tag.clone(),
        directory: root,
        client: binary.clone(),
        prepare: files
            .iter()
            .find(|path| {
                path.file_name()
                    .is_some_and(|name| name == "horizon-prepare" || name == "horizon-prepare.exe")
            })
            .cloned(),
    })
}
