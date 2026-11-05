//! Parallel, SHA-1 verified file downloads with atomic writes.
use std::path::{Path, PathBuf};

use futures::stream::{self, StreamExt, TryStreamExt};
use sha1::{Digest, Sha1};
use tokio::io::{AsyncReadExt, AsyncWriteExt};

use crate::error::DownloadError;

/// One artifact to fetch: `url`, destination, optional expected sha1.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DownloadRequest {
    pub url: String,
    pub dest: PathBuf,
    pub sha1: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DownloadedFile {
    pub dest: PathBuf,
    /// Computed (or verified-existing) sha1 hex.
    pub sha1: String,
    pub was_skipped: bool,
}

#[derive(Debug, Clone)]
pub struct ParallelDownloader {
    client: reqwest::Client,
    concurrency: usize,
}

impl ParallelDownloader {
    pub fn new(client: reqwest::Client, concurrency: usize) -> Self {
        Self { client, concurrency }
    }

    /// Downloads all files, up to `concurrency` in flight; fails fast on the
    /// first error (in-flight downloads are cancelled when the future drops).
    pub async fn download_all(&self, reqs: &[DownloadRequest]) -> Result<Vec<DownloadedFile>, DownloadError> {
        stream::iter(reqs.iter())
            .map(|req| self.download_one(req))
            .buffer_unordered(self.concurrency)
            .try_collect()
            .await
    }

    /// Verifies an already-present file against its expected sha1 (hash-only, no clone of bytes).
    pub async fn verify(&self, req: &DownloadRequest) -> Result<(), DownloadError> {
        let sha1_hex = sha1_of_file(&req.dest).await?;
        match &req.sha1 {
            Some(expected) if sha1_hex != expected.to_lowercase() => Err(DownloadError::Sha1Mismatch {
                path: req.dest.clone(),
                expected: expected.clone(),
                computed: sha1_hex,
            }),
            _ => Ok(()),
        }
    }

    async fn download_one(&self, req: &DownloadRequest) -> Result<DownloadedFile, DownloadError> {
        // Existing file with a known-good hash: skip the network entirely.
        if let Some(expected) = req.sha1.as_deref().filter(|e| !e.is_empty()).map(|e| e.to_lowercase())
            && let Ok(computed) = sha1_of_file(&req.dest).await
            && computed == expected
        {
            return Ok(DownloadedFile { dest: req.dest.clone(), sha1: computed, was_skipped: true });
        }

        if let Some(parent) = req.dest.parent() {
            tokio::fs::create_dir_all(parent).await.map_err(|e| DownloadError::Io { path: parent.into(), source: e })?;
        }
        // Atomic publish: stream into `<dest>.part`, rename on success.
        let part = req.dest.with_extension(format!("part-{}", std::process::id()));
        let mut part_file = tokio::fs::File::create(&part).await.map_err(|e| DownloadError::Io { path: part.clone(), source: e })?;

        let resp = self.client.get(&req.url).send().await.map_err(|e| DownloadError::Http { url: req.url.clone(), source: e })?;
        if !resp.status().is_success() {
            return Err(DownloadError::HttpStatus { url: req.url.clone(), status: resp.status().as_u16() });
        }
        let mut hasher = Sha1::new();
        let mut stream = resp.bytes_stream();
        loop {
            match stream.next().await {
                Some(Ok(chunk)) => {
                    hasher.update(&chunk);
                    part_file.write_all(&chunk).await.map_err(|e| DownloadError::Io { path: part.clone(), source: e })?;
                }
                Some(Err(e)) => return Err(DownloadError::Http { url: req.url.clone(), source: e }),
                None => break,
            }
        }

        part_file.flush().await.map_err(|e| DownloadError::Io { path: part.clone(), source: e })?;
        drop(part_file);

        let actual = to_hex(&hasher.finalize());
        if let Some(expected) = req.sha1.as_deref().map(|e| e.to_lowercase())
            && expected != actual
        {
            let _ = tokio::fs::remove_file(&part).await;
            return Err(DownloadError::Sha1Mismatch { path: req.dest.clone(), expected, computed: actual });
        }
        tokio::fs::rename(&part, &req.dest).await.map_err(|e| DownloadError::Io { path: req.dest.clone(), source: e })?;
        Ok(DownloadedFile { dest: req.dest.clone(), sha1: actual, was_skipped: false })
    }
}

pub fn to_hex(bytes: &[u8]) -> String {
    let mut out = String::with_capacity(bytes.len() * 2);
    for b in bytes {
        out.push(char::from_digit((b >> 4) as u32, 16).expect("nibble"));
        out.push(char::from_digit((b & 0x0f) as u32, 16).expect("nibble"));
    }
    out
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_server::spawn;
    use std::collections::HashMap;

    fn client() -> reqwest::Client {
        reqwest::Client::new()
    }

    const BODY: &[u8] = b"twilight mc rocks!\n";

    fn sha(body: &[u8]) -> String {
        to_hex(Sha1::digest(body).as_slice())
    }

    #[tokio::test]
    async fn downloads_files_in_parallel_atomically() {
        let routes: HashMap<String, (u16, Vec<u8>)> = ["a.bin", "b.bin", "c.bin"]
            .into_iter()
            .map(|f| (f.to_owned(), (200u16, BODY.to_vec())))
            .collect();
        let addr = spawn(routes).await;
        let base = format!("http://{addr}");
        let expected = sha(BODY);
        let dir = std::env::temp_dir().join("twilight-dl-par");
        let reqs: Vec<DownloadRequest> = ["a.bin", "b.bin", "c.bin"]
            .into_iter()
            .map(|f| DownloadRequest { url: format!("{base}/{f}"), dest: dir.join(f), sha1: Some(expected.clone()) })
            .collect();

        let files = ParallelDownloader::new(client(), 3).download_all(&reqs).await.unwrap();
        assert_eq!(files.len(), 3);
        assert!(files.iter().all(|f| !f.was_skipped && f.sha1 == expected));
        for req in &reqs {
            assert_eq!(tokio::fs::read(&req.dest).await.unwrap(), BODY);
        }
        assert_eq!(leftover_parts(&dir), 0, "no .part files left after success");
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }

    #[tokio::test]
    async fn rejects_checksum_mismatch_with_computed_hash() {
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([("bad.bin".to_owned(), (200u16, BODY.to_vec()))]);
        let addr = spawn(routes).await;
        let req = DownloadRequest {
            url: format!("http://{addr}/bad.bin"),
            dest: std::env::temp_dir().join("twilight-dl-bad.bin"),
            sha1: Some("0".repeat(40)),
        };
        let err = ParallelDownloader::new(client(), 1).download_all(&[req.clone()]).await.unwrap_err();
        match err {
            DownloadError::Sha1Mismatch { path, expected, computed } => {
                assert_eq!(path, req.dest);
                assert_eq!(expected, "0".repeat(40));
                assert_eq!(computed, sha(BODY));
            }
            other => panic!("wrong error: {other:?}"),
        }
        // the corrupted download must not have been published to dest
        assert!(!req.dest.exists());
    }

    #[tokio::test]
    async fn skips_files_that_already_match_their_sha1() {
        // a 500 route would poison any re-download: proves no network hit
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([("skip.bin".to_owned(), (500u16, b"no".to_vec()))]);
        let addr = spawn(routes).await;
        let dest = std::env::temp_dir().join("twilight-dl-skip.bin");
        tokio::fs::write(&dest, BODY).await.unwrap();
        let req = DownloadRequest { url: format!("http://{addr}/skip.bin"), dest: dest.clone(), sha1: Some(sha(BODY)) };
        let files = ParallelDownloader::new(client(), 1).download_all(&[req]).await.unwrap();
        assert!(files[0].was_skipped);
        assert_eq!(files[0].sha1, sha(BODY));
        let _ = tokio::fs::remove_file(&dest).await;
    }

    fn leftover_parts(dir: &Path) -> usize {
        std::fs::read_dir(dir).map(|rd| rd.filter_map(Result::ok).filter(|e| e.file_name().to_string_lossy().contains(".part-")).count()).unwrap_or(0)
    }
}

/// Streaming sha1 + hex of an on-disk file.
pub async fn sha1_of_file(path: &Path) -> Result<String, DownloadError> {
    let mut file = tokio::fs::File::open(path).await.map_err(|e| DownloadError::Io { path: path.into(), source: e })?;
    let mut hasher = Sha1::new();
    let mut buf = vec![0u8; 64 * 1024];
    loop {
        let n = file.read(&mut buf).await.map_err(|e| DownloadError::Io { path: path.into(), source: e })?;
        if n == 0 {
            break;
        }
        hasher.update(&buf[..n]);
    }
    Ok(to_hex(&hasher.finalize()))
}
