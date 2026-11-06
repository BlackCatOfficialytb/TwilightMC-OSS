//! `twilight versions` — resolve the vanilla list through the failover chain
//! (Mojang piston-meta primary, Prism and Freesm mirrors).

use twilight_downloader::{VanillaVersionList, list_vanilla_versions, vanilla_sources};

use crate::error::CliError;

/// Lists every version reported by the first responding metadata source.
pub async fn run_versions() -> Result<i32, CliError> {
    let client = reqwest::Client::new();
    let list = list_vanilla_versions(&client, &vanilla_sources()).await?;
    println!("{}", describe(&list));
    Ok(0)
}

/// Pure renderer (unit-testable): count, latest pointer, then one row per version.
pub fn describe(list: &VanillaVersionList) -> String {
    let mut out = format!(
        "{} vanilla version(s); latest release: {}",
        list.versions.len(),
        list.latest_release_id.as_deref().unwrap_or("(unknown)")
    );
    for version in &list.versions {
        out.push_str(&format!(
            "\n  {:<28} {:<10} {}",
            version.id,
            if version.version_type.is_empty() {
                "?"
            } else {
                &version.version_type
            },
            version.release_time.as_deref().unwrap_or("")
        ));
    }
    out
}

#[cfg(test)]
mod tests {
    use super::*;
    use twilight_downloader::{VanillaMetaVersion, VanillaVersionList};

    #[tokio::test]
    async fn all_sources_out_is_an_error() {
        // a URL that never resolves: the failover chain must exhaust cleanly
        let dead = vec![twilight_downloader::SourceKind::Meta {
            base: "http://127.0.0.1:1/".to_owned(),
        }];
        let client = reqwest::Client::new();
        assert!(matches!(
            list_vanilla_versions(&client, &dead).await,
            Err(twilight_downloader::DownloadError::AllSourcesOut { .. })
        ));
    }

    #[test]
    fn describe_renders_count_latest_and_rows() {
        let list = VanillaVersionList {
            latest_release_id: Some("1.21.4".into()),
            versions: vec![
                VanillaMetaVersion {
                    id: "1.21.4".into(),
                    version_type: "release".into(),
                    release_time: Some("2024-12-19".into()),
                    details_url: String::new(),
                },
                VanillaMetaVersion {
                    id: "26.3".into(),
                    version_type: "snapshot".into(),
                    release_time: None,
                    details_url: String::new(),
                },
            ],
        };
        let text = describe(&list);
        assert!(
            text.starts_with("2 vanilla version(s); latest release: 1.21.4"),
            "{text}"
        );
        assert!(
            text.contains("1.21.4") && text.contains("release"),
            "{text}"
        );
        assert!(text.contains("26.3") && text.contains("snapshot"), "{text}");
        assert!(text.contains("2024-12-19"), "{text}");
    }
}
