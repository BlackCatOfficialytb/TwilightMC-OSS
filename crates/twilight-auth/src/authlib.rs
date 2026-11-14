//! `authlib-injector` agent fetching: latest-artifact metadata, SHA-256
//! verified jar download into `<shared>/libraries/authlib-injector.jar`.
//!
//! The metadata host publishes **only** a sha256 digest (no sha1), so the
//! `twilight-downloader` sha1 verification cannot check this artifact — the
//! digest is verified separately here after the download.

use std::path::{Path, PathBuf};

use sha2::{Digest, Sha256};
use tokio::io::AsyncReadExt;

use crate::error::AuthError;

/// Live metadata endpoint publishing `build_number`, `version`,
/// `download_url` and `checksums.sha256`.
pub const AUTHLIB_METADATA_URL: &str = "https://authlib-injector.yushi.moe/artifact/latest.json";

/// Fixed artifact filename inside the shared libraries directory.
pub const AUTHLIB_JAR_NAME: &str = "authlib-injector.jar";

#[derive(Debug, Clone, PartialEq, Eq, serde::Serialize, serde::Deserialize)]
pub struct AuthlibArtifact {
    pub build_number: u32,
    pub version: String,
    pub download_url: String,
    #[serde(default)]
    pub checksums: Option<AuthlibChecksums>,
}

#[derive(Debug, Clone, PartialEq, Eq, serde::Serialize, serde::Deserialize)]
pub struct AuthlibChecksums {
    pub sha256: String,
}

/// Where the agent jar lives for a given shared directory.
pub fn jar_path(shared_dir: &Path) -> PathBuf {
    shared_dir.join("libraries").join(AUTHLIB_JAR_NAME)
}

/// Fetches the latest artifact metadata (overridable URL for tests).
pub async fn fetch_latest_artifact(
    client: &reqwest::Client,
    metadata_url: &str,
) -> Result<AuthlibArtifact, AuthError> {
    let resp = client.get(metadata_url).send().await?;
    let status = resp.status();
    if !status.is_success() {
        return Err(AuthError::Status {
            url: metadata_url.to_owned(),
            status: status.as_u16(),
        });
    }
    Ok(resp.json::<AuthlibArtifact>().await?)
}

/// Ensures `<shared>/libraries/authlib-injector.jar` exists, matching the
/// digest of the latest published build: reuses a matching file, otherwise
/// downloads (sha1 pipeline + separate sha256 verification) and replaces it.
/// Returns the jar path for [`crate::authlib_injector_jvm_args`].
pub async fn ensure_authlib_injector(
    client: &reqwest::Client,
    shared_dir: &Path,
) -> Result<PathBuf, AuthError> {
    ensure_authlib_injector_with(client, shared_dir, AUTHLIB_METADATA_URL).await
}

pub async fn ensure_authlib_injector_with(
    client: &reqwest::Client,
    shared_dir: &Path,
    metadata_url: &str,
) -> Result<PathBuf, AuthError> {
    let artifact = fetch_latest_artifact(client, metadata_url).await?;
    let expected = artifact
        .checksums
        .map(|c| c.sha256.to_lowercase())
        .filter(|sha| !sha.is_empty())
        .ok_or_else(|| {
            AuthError::DeviceFlow("authlib-injector metadata carries no sha256 checksum".into())
        })?;

    let dest = jar_path(shared_dir);
    // fast path: a matching jar is already cached
    if tokio::fs::try_exists(&dest).await.unwrap_or(false)
        && sha256_of_file(&dest).await? == expected
    {
        return Ok(dest);
    }

    if let Some(parent) = dest.parent() {
        tokio::fs::create_dir_all(parent).await?;
    }
    let downloader = twilight_downloader::ParallelDownloader::new(client.clone(), 2);
    downloader
        .download_all(std::slice::from_ref(
            &twilight_downloader::DownloadRequest {
                url: artifact.download_url.clone(),
                dest: dest.clone(),
                sha1: None,
            },
        ))
        .await?;

    let computed = sha256_of_file(&dest).await?;
    if computed != expected {
        let _ = tokio::fs::remove_file(&dest).await;
        return Err(AuthError::Sha256Mismatch {
            path: dest,
            expected,
            computed,
        });
    }
    Ok(dest)
}

/// Streaming sha256 + hex of an on-disk file.
async fn sha256_of_file(path: &Path) -> Result<String, AuthError> {
    let mut file = tokio::fs::File::open(path).await?;
    let mut hasher = Sha256::new();
    let mut buf = vec![0u8; 64 * 1024];
    loop {
        let n = file.read(&mut buf).await?;
        if n == 0 {
            break;
        }
        hasher.update(&buf[..n]);
    }
    Ok(twilight_downloader::to_hex(&hasher.finalize()))
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_http::{TestServer, spawn, static_routes};
    use std::collections::HashMap;

    const JAR_BYTES: &[u8] = b"PK authlib-injector test jar";
    const JAR_PATH: &str = "56/authlib-injector-1.2.8.jar";
    const META_PATH: &str = "artifact/latest.json";

    fn sha256(body: &[u8]) -> String {
        twilight_downloader::to_hex(Sha256::digest(body).as_slice())
    }

    async fn temp_shared_dir(tag: &str) -> PathBuf {
        let dir = std::env::temp_dir().join(format!(
            "twi-authlib-{tag}-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .subsec_nanos()
        ));
        tokio::fs::create_dir_all(&dir).await.unwrap();
        dir
    }

    /// Serves the jar artifact on its own server (so the metadata JSON can
    /// embed its URL) and returns the server.
    async fn jar_server(responses: Vec<(u16, Vec<u8>)>) -> TestServer {
        spawn(HashMap::from([(JAR_PATH.to_owned(), responses)])).await
    }

    /// Serves `latest.json` pointing at `jar`'s server with `checksum_sha`.
    async fn meta_server(jar: &TestServer, checksum_sha: &str) -> TestServer {
        let meta = format!(
            r#"{{ "build_number": 56, "version": "1.2.8",
                 "release_time": "2026-07-11T17:14:13Z",
                 "download_url": "{}",
                 "checksums": {{ "sha256": "{checksum_sha}" }} }}"#,
            jar.url(JAR_PATH)
        );
        spawn(HashMap::from([(
            META_PATH.to_owned(),
            vec![(200u16, meta.into_bytes())],
        )]))
        .await
    }

    #[tokio::test]
    async fn downloads_verifies_and_caches_the_jar() {
        // two-element jar route: a second download would get a 500
        let jar = jar_server(vec![
            (200, JAR_BYTES.to_vec()),
            (500, b"exhausted".to_vec()),
        ])
        .await;
        let meta = meta_server(&jar, &sha256(JAR_BYTES)).await;
        let shared = temp_shared_dir("ok").await;
        let client = reqwest::Client::new();
        let meta_url = meta.url(META_PATH);

        let jar_file = ensure_authlib_injector_with(&client, &shared, &meta_url)
            .await
            .unwrap();
        assert_eq!(jar_file, jar_path(&shared));
        assert_eq!(tokio::fs::read(&jar_file).await.unwrap(), JAR_BYTES);

        // second call: the cached jar matches, so the (now exhausted) jar
        // route must not be hit — no re-download happened
        let jar_again = ensure_authlib_injector_with(&client, &shared, &meta_url)
            .await
            .unwrap();
        assert_eq!(jar_again, jar_file);
        assert_eq!(jar.hits(JAR_PATH).await, 1, "cached jar was re-downloaded");
        let _ = tokio::fs::remove_dir_all(&shared).await;
    }

    #[tokio::test]
    async fn digest_mismatch_fails_and_leaves_no_jar() {
        let jar = jar_server(vec![(200, JAR_BYTES.to_vec())]).await;
        let meta = meta_server(&jar, &sha256(b"different bytes")).await;
        let shared = temp_shared_dir("bad").await;
        let err =
            ensure_authlib_injector_with(&reqwest::Client::new(), &shared, &meta.url(META_PATH))
                .await
                .unwrap_err();
        match err {
            AuthError::Sha256Mismatch { path, .. } => {
                assert_eq!(path, jar_path(&shared));
            }
            other => panic!("wrong error: {other:?}"),
        }
        assert!(!jar_path(&shared).exists(), "corrupt jar must be removed");
        let _ = tokio::fs::remove_dir_all(&shared).await;
    }

    #[tokio::test]
    async fn corrupt_cached_jar_is_replaced() {
        let jar = jar_server(vec![(200, JAR_BYTES.to_vec())]).await;
        let meta = meta_server(&jar, &sha256(JAR_BYTES)).await;
        let shared = temp_shared_dir("fix").await;
        let dest = jar_path(&shared);
        tokio::fs::create_dir_all(dest.parent().unwrap())
            .await
            .unwrap();
        tokio::fs::write(&dest, b"corrupted").await.unwrap();

        let jar_file =
            ensure_authlib_injector_with(&reqwest::Client::new(), &shared, &meta.url(META_PATH))
                .await
                .unwrap();
        assert_eq!(tokio::fs::read(&jar_file).await.unwrap(), JAR_BYTES);
        let _ = tokio::fs::remove_dir_all(&shared).await;
    }

    #[tokio::test]
    async fn metadata_without_checksums_is_rejected() {
        let routes = static_routes(&[(
            META_PATH,
            200,
            r#"{ "build_number": 56, "version": "1.2.8", "download_url": "http://x/y.jar" }"#,
        )]);
        let meta = spawn(routes).await;
        let shared = temp_shared_dir("nosum").await;
        let err =
            ensure_authlib_injector_with(&reqwest::Client::new(), &shared, &meta.url(META_PATH))
                .await
                .unwrap_err();
        assert!(err.to_string().contains("no sha256 checksum"), "got: {err}");
        let _ = tokio::fs::remove_dir_all(&shared).await;
    }
}
