// IPC bridge to the vanilla metadata failover chain (Mojang piston-meta ->
// Prism -> Freesm), feeding the searchable version picker, plus the loader
// build lists (fabric/quilt meta) feeding the wizard dropdown.

use serde::Serialize;
use twilight_downloader::{list_vanilla_versions, vanilla_sources};
use twilight_modloader::{ModLoader, profile_url};

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
pub async fn fetch_vanilla_versions() -> Result<VersionCatalog, String> {
    let client = reqwest::Client::new();
    let list = list_vanilla_versions(&client, &vanilla_sources())
        .await
        .map_err(|e| e.to_string())?;
    Ok(to_catalog(list))
}

/// One loader build row of the wizard dropdown.
#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct LoaderVersionRow {
    pub version: String,
    pub stable: bool,
}

/// Flattens a loader meta `versions/loader/{game}` list into dropdown rows.
pub(crate) fn parse_loader_versions(raw: &serde_json::Value) -> Vec<LoaderVersionRow> {
    raw.as_array()
        .map(|list| {
            list.iter()
                .filter_map(|entry| {
                    let version = entry.pointer("/loader/version")?.as_str()?;
                    Some(LoaderVersionRow {
                        stable: entry.pointer("/loader/stable")
                            == Some(&serde_json::Value::Bool(true)),
                        version: version.to_owned(),
                    })
                })
                .collect()
        })
        .unwrap_or_default()
}

/// Lists the builds a loader published for one Minecraft version (the
/// wizard's loader-version dropdown; latest stable goes first in the meta).
#[tauri::command]
pub async fn fetch_loader_versions(
    loader: String,
    game_version: String,
) -> Result<Vec<LoaderVersionRow>, String> {
    let loader = ModLoader::from_token(&loader)
        .ok_or_else(|| format!("unsupported loader {loader:?} (fabric/quilt only)"))?;
    let base = match loader {
        ModLoader::Fabric => twilight_modloader::FABRIC_META_BASE,
        ModLoader::Quilt => twilight_modloader::QUILT_META_BASE,
    };
    let client = reqwest::Client::new();
    let url = profile_url(base, loader, &game_version, None);
    let raw = client
        .get(url)
        .send()
        .await
        .map_err(|e| e.to_string())?
        .error_for_status()
        .map_err(|e| e.to_string())?
        .json::<serde_json::Value>()
        .await
        .map_err(|e| e.to_string())?;
    Ok(parse_loader_versions(&raw))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn loader_version_rows_parse_from_meta_list() {
        let raw: serde_json::Value = serde_json::from_str(
            r#"[
                 {"loader":{"version":"0.16.14","stable":false},
                  "intermediary":{"maven":"x"}},
                 {"loader":{"version":"0.16.9-minecraft.1.21.4","stable":true}},
                 {"loader":{"version":"0.16.5","stable":true}},
                 {"intermediary":{"maven":"y"}},
                 {"loader":{"version":"0.16.14-beta.1","stable":false}}
               ]"#,
        )
        .unwrap();

        let rows = parse_loader_versions(&raw);
        assert_eq!(
            rows,
            vec![
                LoaderVersionRow {
                    version: "0.16.14".into(),
                    stable: false
                },
                LoaderVersionRow {
                    version: "0.16.9-minecraft.1.21.4".into(),
                    stable: true
                },
                LoaderVersionRow {
                    version: "0.16.5".into(),
                    stable: true
                },
                LoaderVersionRow {
                    version: "0.16.14-beta.1".into(),
                    stable: false
                },
            ],
            "entries without a loader.version pointer are dropped"
        );
        assert!(rows.iter().any(|r| r.stable));
    }

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
