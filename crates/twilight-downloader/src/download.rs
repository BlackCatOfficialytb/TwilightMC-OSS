//! Parallel, SHA-1 verified file downloads with atomic writes.
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex};
use std::time::{Duration, Instant};

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

/// Aggregate progress for one [`ParallelDownloader::download_all`] call.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DownloadProgress {
    pub completed_files: u64,
    pub total_files: u64,
    pub downloaded_bytes: u64,
    /// Sum of known `Content-Length` values for tasks that reported one.
    pub known_total_bytes: u64,
    /// True when every task reported a `Content-Length`.
    pub total_bytes_known: bool,
}

impl DownloadProgress {
    pub fn percent(&self) -> Option<f32> {
        if self.total_bytes_known && self.known_total_bytes > 0 {
            Some((self.downloaded_bytes as f32 / self.known_total_bytes as f32) * 100.0)
        } else if self.total_files > 0 {
            Some((self.completed_files as f32 / self.total_files as f32) * 100.0)
        } else {
            None
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DownloadedFile {
    pub dest: PathBuf,
    /// Computed (or verified-existing) sha1 hex.
    pub sha1: String,
    pub was_skipped: bool,
}

type ProgressCallback = Arc<dyn Fn(DownloadProgress) + Send + Sync>;

#[derive(Clone)]
pub struct ParallelDownloader {
    client: reqwest::Client,
    concurrency: usize,
    progress: Option<ProgressCallback>,
}

impl std::fmt::Debug for ParallelDownloader {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("ParallelDownloader")
            .field("concurrency", &self.concurrency)
            .field("has_progress", &self.progress.is_some())
            .finish_non_exhaustive()
    }
}

impl ParallelDownloader {
    pub fn new(client: reqwest::Client, concurrency: usize) -> Self {
        Self {
            client,
            concurrency,
            progress: None,
        }
    }

    pub fn with_progress<F>(mut self, progress: F) -> Self
    where
        F: Fn(DownloadProgress) + Send + Sync + 'static,
    {
        self.progress = Some(Arc::new(progress));
        self
    }

    /// Downloads all files, up to `concurrency` in flight; fails fast on the
    /// first error (in-flight downloads are cancelled when the future drops).
    ///
    /// The futures are collected before streaming: a `.map(|req| ...)` closure
    /// here would produce a higher-ranked `fn(&T) -> impl Future` signature
    /// that trips rustc's "FnOnce not general enough" solver limit when the
    /// future is awaited through Tauri's `#[tauri::command]` wrapper.
    pub async fn download_all(
        &self,
        reqs: &[DownloadRequest],
    ) -> Result<Vec<DownloadedFile>, DownloadError> {
        let tracker = ProgressTracker::new(reqs.len(), self.progress.clone());
        tracker.emit();
        let mut futs = Vec::with_capacity(reqs.len());
        for (index, req) in reqs.iter().enumerate() {
            futs.push(self.download_one(req, index, tracker.clone()));
        }
        let result: Result<Vec<DownloadedFile>, DownloadError> = stream::iter(futs)
            .buffer_unordered(self.concurrency)
            .try_collect()
            .await;
        if result.is_ok() {
            tracker.force_complete();
        }
        result
    }

    /// Verifies an already-present file against its expected sha1 (hash-only, no clone of bytes).
    pub async fn verify(&self, req: &DownloadRequest) -> Result<(), DownloadError> {
        let sha1_hex = sha1_of_file(&req.dest).await?;
        match &req.sha1 {
            Some(expected) if sha1_hex != expected.to_lowercase() => {
                Err(DownloadError::Sha1Mismatch {
                    path: req.dest.clone(),
                    expected: expected.clone(),
                    computed: sha1_hex,
                })
            }
            _ => Ok(()),
        }
    }

    async fn download_one(
        &self,
        req: &DownloadRequest,
        task_id: usize,
        tracker: ProgressTracker,
    ) -> Result<DownloadedFile, DownloadError> {
        // Existing file with a known-good hash: skip the network entirely.
        if let Some(expected) = req
            .sha1
            .as_deref()
            .filter(|e| !e.is_empty())
            .map(|e| e.to_lowercase())
            && let Ok(computed) = sha1_of_file(&req.dest).await
            && computed == expected
        {
            let bytes = req.dest.metadata().ok().map(|m| m.len()).unwrap_or(0);
            tracker.file_done(task_id, bytes, Some(bytes));
            return Ok(DownloadedFile {
                dest: req.dest.clone(),
                sha1: computed,
                was_skipped: true,
            });
        }

        if let Some(parent) = req.dest.parent() {
            tokio::fs::create_dir_all(parent)
                .await
                .map_err(|e| DownloadError::Io {
                    path: parent.into(),
                    source: e,
                })?;
        }
        // Atomic publish: stream into `<dest>.part`, rename on success.
        let part = req
            .dest
            .with_extension(format!("part-{}", std::process::id()));
        let mut part_file =
            tokio::fs::File::create(&part)
                .await
                .map_err(|e| DownloadError::Io {
                    path: part.clone(),
                    source: e,
                })?;

        let resp = self
            .client
            .get(&req.url)
            .send()
            .await
            .map_err(|e| DownloadError::Http {
                url: req.url.clone(),
                source: e,
            })?;
        if !resp.status().is_success() {
            return Err(DownloadError::HttpStatus {
                url: req.url.clone(),
                status: resp.status().as_u16(),
            });
        }
        let mut hasher = Sha1::new();
        let task_total = resp.content_length();
        let mut task_bytes = 0u64;
        let mut stream = resp.bytes_stream();
        loop {
            match stream.next().await {
                Some(Ok(chunk)) => {
                    hasher.update(&chunk);
                    part_file
                        .write_all(&chunk)
                        .await
                        .map_err(|e| DownloadError::Io {
                            path: part.clone(),
                            source: e,
                        })?;
                    task_bytes = task_bytes.saturating_add(chunk.len() as u64);
                    tracker.bytes(task_id, task_bytes, task_total);
                }
                Some(Err(e)) => {
                    return Err(DownloadError::Http {
                        url: req.url.clone(),
                        source: e,
                    });
                }
                None => break,
            }
        }

        part_file.flush().await.map_err(|e| DownloadError::Io {
            path: part.clone(),
            source: e,
        })?;
        drop(part_file);

        let actual = to_hex(&hasher.finalize());
        if let Some(expected) = req.sha1.as_deref().map(|e| e.to_lowercase())
            && expected != actual
        {
            let _ = tokio::fs::remove_file(&part).await;
            return Err(DownloadError::Sha1Mismatch {
                path: req.dest.clone(),
                expected,
                computed: actual,
            });
        }
        tokio::fs::rename(&part, &req.dest)
            .await
            .map_err(|e| DownloadError::Io {
                path: req.dest.clone(),
                source: e,
            })?;
        tracker.file_done(task_id, task_bytes, task_total);
        Ok(DownloadedFile {
            dest: req.dest.clone(),
            sha1: actual,
            was_skipped: false,
        })
    }
}

#[derive(Clone, Default)]
struct TaskProgress {
    bytes: u64,
    total: Option<u64>,
    completed: bool,
}

#[derive(Clone)]
struct ProgressTracker {
    callback: Option<ProgressCallback>,
    state: Arc<Mutex<ProgressState>>,
}

struct ProgressState {
    tasks: Vec<TaskProgress>,
    last_emit: Instant,
    last_emitted_bytes: u64,
}

impl ProgressTracker {
    fn new(total_files: usize, callback: Option<ProgressCallback>) -> Self {
        Self {
            callback,
            state: Arc::new(Mutex::new(ProgressState {
                tasks: vec![TaskProgress::default(); total_files],
                last_emit: Instant::now() - Duration::from_millis(200),
                last_emitted_bytes: 0,
            })),
        }
    }

    fn snapshot(tasks: &[TaskProgress]) -> DownloadProgress {
        let mut completed_files = 0u64;
        let mut downloaded_bytes = 0u64;
        let mut known_total_bytes = 0u64;
        let mut total_bytes_known = !tasks.is_empty();
        for task in tasks {
            if task.completed {
                completed_files = completed_files.saturating_add(1);
            }
            downloaded_bytes = downloaded_bytes.saturating_add(task.bytes);
            match task.total {
                Some(total) => known_total_bytes = known_total_bytes.saturating_add(total),
                None => total_bytes_known = false,
            }
        }
        DownloadProgress {
            completed_files,
            total_files: tasks.len() as u64,
            downloaded_bytes,
            known_total_bytes,
            total_bytes_known,
        }
    }

    fn emit(&self) {
        let Some(callback) = &self.callback else {
            return;
        };
        let snapshot = {
            let mut state = match self.state.lock() {
                Ok(guard) => guard,
                Err(poisoned) => poisoned.into_inner(),
            };
            let snapshot = Self::snapshot(&state.tasks);
            state.last_emit = Instant::now();
            state.last_emitted_bytes = snapshot.downloaded_bytes;
            snapshot
        };
        callback(snapshot);
    }

    fn emit_throttled(&self) {
        let Some(callback) = &self.callback else {
            return;
        };
        let snapshot = {
            let mut state = match self.state.lock() {
                Ok(guard) => guard,
                Err(poisoned) => poisoned.into_inner(),
            };
            let snapshot = Self::snapshot(&state.tasks);
            let bytes_delta = snapshot
                .downloaded_bytes
                .saturating_sub(state.last_emitted_bytes);
            if state.last_emit.elapsed() < Duration::from_millis(100) && bytes_delta < 64 * 1024 {
                return;
            }
            state.last_emit = Instant::now();
            state.last_emitted_bytes = snapshot.downloaded_bytes;
            snapshot
        };
        callback(snapshot);
    }

    fn bytes(&self, task_id: usize, task_bytes: u64, task_total: Option<u64>) {
        if self.callback.is_none() {
            return;
        }
        {
            let mut state = match self.state.lock() {
                Ok(guard) => guard,
                Err(poisoned) => poisoned.into_inner(),
            };
            if let Some(task) = state.tasks.get_mut(task_id) {
                task.bytes = task.bytes.max(task_bytes);
                if task.total.is_none() {
                    task.total = task_total;
                }
            }
        }
        self.emit_throttled();
    }

    fn file_done(&self, task_id: usize, task_bytes: u64, task_total: Option<u64>) {
        let Some(callback) = &self.callback else {
            return;
        };
        let snapshot = {
            let mut state = match self.state.lock() {
                Ok(guard) => guard,
                Err(poisoned) => poisoned.into_inner(),
            };
            if let Some(task) = state.tasks.get_mut(task_id) {
                task.completed = true;
                task.bytes = task.bytes.max(task_bytes);
                task.total = task.total.or(task_total);
                if let Some(total) = task.total {
                    task.bytes = task.bytes.max(total);
                }
            }
            let snapshot = Self::snapshot(&state.tasks);
            state.last_emit = Instant::now();
            state.last_emitted_bytes = snapshot.downloaded_bytes;
            snapshot
        };
        callback(snapshot);
    }

    fn force_complete(&self) {
        let Some(callback) = &self.callback else {
            return;
        };
        let snapshot = {
            let mut state = match self.state.lock() {
                Ok(guard) => guard,
                Err(poisoned) => poisoned.into_inner(),
            };
            for task in &mut state.tasks {
                task.completed = true;
                if let Some(total) = task.total {
                    task.bytes = task.bytes.max(total);
                }
            }
            let snapshot = Self::snapshot(&state.tasks);
            state.last_emit = Instant::now();
            state.last_emitted_bytes = snapshot.downloaded_bytes;
            snapshot
        };
        callback(snapshot);
    }
}

pub fn to_hex(bytes: &[u8]) -> String {
    const HEX: &[u8; 16] = b"0123456789abcdef";
    let mut out = String::with_capacity(bytes.len() * 2);
    for b in bytes {
        out.push(HEX[(b >> 4) as usize] as char);
        out.push(HEX[(b & 0x0f) as usize] as char);
    }
    out
}

/// Streaming sha1 + hex of an on-disk file.
pub async fn sha1_of_file(path: &Path) -> Result<String, DownloadError> {
    let mut file = tokio::fs::File::open(path)
        .await
        .map_err(|e| DownloadError::Io {
            path: path.into(),
            source: e,
        })?;
    let mut hasher = Sha1::new();
    let mut buf = vec![0u8; 64 * 1024];
    loop {
        let n = file.read(&mut buf).await.map_err(|e| DownloadError::Io {
            path: path.into(),
            source: e,
        })?;
        if n == 0 {
            break;
        }
        hasher.update(&buf[..n]);
    }
    Ok(to_hex(&hasher.finalize()))
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
            .map(|f| DownloadRequest {
                url: format!("{base}/{f}"),
                dest: dir.join(f),
                sha1: Some(expected.clone()),
            })
            .collect();

        let files = ParallelDownloader::new(client(), 3)
            .download_all(&reqs)
            .await
            .unwrap();
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
        let routes: HashMap<String, (u16, Vec<u8>)> =
            HashMap::from([("bad.bin".to_owned(), (200u16, BODY.to_vec()))]);
        let addr = spawn(routes).await;
        let req = DownloadRequest {
            url: format!("http://{addr}/bad.bin"),
            dest: std::env::temp_dir().join("twilight-dl-bad.bin"),
            sha1: Some("0".repeat(40)),
        };
        let err = ParallelDownloader::new(client(), 1)
            .download_all(std::slice::from_ref(&req))
            .await
            .unwrap_err();
        match err {
            DownloadError::Sha1Mismatch {
                path,
                expected,
                computed,
            } => {
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
        let routes: HashMap<String, (u16, Vec<u8>)> =
            HashMap::from([("skip.bin".to_owned(), (500u16, b"no".to_vec()))]);
        let addr = spawn(routes).await;
        let dest = std::env::temp_dir().join("twilight-dl-skip.bin");
        tokio::fs::write(&dest, BODY).await.unwrap();
        let req = DownloadRequest {
            url: format!("http://{addr}/skip.bin"),
            dest: dest.clone(),
            sha1: Some(sha(BODY)),
        };
        let files = ParallelDownloader::new(client(), 1)
            .download_all(&[req])
            .await
            .unwrap();
        assert!(files[0].was_skipped);
        assert_eq!(files[0].sha1, sha(BODY));
        let _ = tokio::fs::remove_file(&dest).await;
    }

    #[tokio::test]
    async fn stale_lwjgl_freetype_is_replaced_after_sha1_mismatch() {
        // The vulnerable native sits in the shared library store; a fresh
        // Mojang manifest publishes the patched artifact under a new sha1.
        const PATCHED: &[u8] = b"patched lwjgl-freetype 3.3.3 native";
        let routes: HashMap<String, (u16, Vec<u8>)> = HashMap::from([(
            "lwjgl-freetype-3.3.3-natives-linux.jar".to_owned(),
            (200u16, PATCHED.to_vec()),
        )]);
        let addr = spawn(routes).await;
        let dir =
            std::env::temp_dir().join(format!("twilight-freetype-refresh-{}", std::process::id()));
        let dest =
            dir.join("org/lwjgl/lwjgl-freetype/3.3.3/lwjgl-freetype-3.3.3-natives-linux.jar");
        tokio::fs::create_dir_all(dest.parent().unwrap())
            .await
            .unwrap();
        tokio::fs::write(&dest, b"stale vulnerable native")
            .await
            .unwrap();

        let req = DownloadRequest {
            url: format!("http://{addr}/lwjgl-freetype-3.3.3-natives-linux.jar"),
            dest: dest.clone(),
            sha1: Some(sha(PATCHED)),
        };
        let files = ParallelDownloader::new(client(), 1)
            .download_all(std::slice::from_ref(&req))
            .await
            .unwrap();

        assert!(
            !files[0].was_skipped,
            "a mismatched cached jar must not be trusted"
        );
        assert_eq!(files[0].sha1, sha(PATCHED));
        assert_eq!(tokio::fs::read(&dest).await.unwrap(), PATCHED);
        assert_eq!(sha1_of_file(&dest).await.unwrap(), sha(PATCHED));
        let _ = tokio::fs::remove_dir_all(&dir).await;
    }

    fn leftover_parts(dir: &Path) -> usize {
        std::fs::read_dir(dir)
            .map(|rd| {
                rd.filter_map(Result::ok)
                    .filter(|e| e.file_name().to_string_lossy().contains(".part-"))
                    .count()
            })
            .unwrap_or(0)
    }
}
