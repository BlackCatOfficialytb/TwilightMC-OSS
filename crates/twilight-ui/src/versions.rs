// IPC bridge to the vanilla metadata failover chain (Mojang piston-meta ->
// Prism -> Freesm), feeding the searchable version picker.

use serde::Serialize;
use twilight_downloader::{list_vanilla_versions, vanilla_sources};

/// One picker row; `details_url` stays server-side — the UI never fetches.
#[derive(Debug, Clone, Serialize)]
pub struct VersionRow {
    pub id: String,
    /// `release`, `snapshot`, `old_beta`, `old_alpha`, ...
    pub version_type: String,
    pub release_time: Option<String>,
    /// True when this row is the source's `latest.release` pointer.
    pub is_latest_release: bool,
}

#[derive(Debug, Clone, Serialize)]
pub struct VersionCatalog {
    /// Total rows available after failover (the picker may show a subset).
    pub total: usize,
    pub latest_release_id: Option<String>,
    pub versions: Vec<VersionRow>,
}

fn to_catalog(list: twilight_downloader::VanillaVersionList) -> VersionCatalog {
    let total = list.versions.len();
    let latest = list.latest_release_id.clone();
    let versions = list
        .versions
        .into_iter()
        .map(|v| {
            let is_latest_release = Some(v.id.clone()) == latest;
            VersionRow {
                id: v.id,
                version_type: v.version_type,
                release_time: v.release_time,
                is_latest_release,
            }
        })
        .collect();
    VersionCatalog {
        total,
        latest_release_id: latest,
        versions,
    }
}

/// Fetches the version list through the full failover chain; the raw list is
/// large Mojang payload data, so the whole catalog travels once per request.
#[tauri::command]
pub async fn list_versions() -> Result<VersionCatalog, String> {
    let client = reqwest::Client::new();
    let list = list_vanilla_versions(&client, &vanilla_sources())
        .await
        .map_err(|e| e.to_string())?;
    Ok(to_catalog(list))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn catalog_flags_the_latest_release_row() {
        let list = twilight_downloader::VanillaVersionList {
            latest_release_id: Some("1.21.4".into()),
            versions: vec![
                row("1.21.4", "release"),
                row("26.3", "snapshot"),
                row("1.21.3", "release"),
            ],
        };

        let catalog = to_catalog(list);
        assert_eq!(catalog.total, 3);
        assert_eq!(catalog.latest_release_id.as_deref(), Some("1.21.4"));
        assert!(catalog.versions[0].is_latest_release, "1.21.4 is flagged");
        assert!(!catalog.versions[1].is_latest_release);
        assert_eq!(catalog.versions[1].version_type, "snapshot");
    }

    fn row(id: &str, version_type: &str) -> twilight_downloader::VanillaMetaVersion {
        twilight_downloader::VanillaMetaVersion {
            id: id.to_owned(),
            version_type: version_type.to_owned(),
            release_time: None,
            details_url: String::new(),
        }
    }
}
