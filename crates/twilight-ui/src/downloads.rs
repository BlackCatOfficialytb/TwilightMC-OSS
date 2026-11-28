//! Throttled download progress events emitted to the webview as
//! `download-progress`. Callers report aggregate progress; this module caps
//! emission rate so the UI stays responsive during fast downloads.

use std::sync::{Arc, Mutex};
use std::time::{Duration, Instant};

use serde::Serialize;
use tauri::{AppHandle, Emitter};

#[derive(Debug, Clone, Serialize)]
pub struct DownloadProgressPayload {
    pub task_id: String,
    pub label: String,
    pub stage: String,
    pub completed_files: u64,
    pub total_files: u64,
    pub downloaded_bytes: u64,
    pub total_bytes: Option<u64>,
    pub percent: Option<f32>,
    pub indeterminate: bool,
}

#[derive(Clone)]
pub struct ProgressEmitter {
    app: AppHandle,
    task_id: String,
    label: String,
    stage: Arc<Mutex<String>>,
    state: Arc<Mutex<ThrottleState>>,
}

struct ThrottleState {
    last_emit: Instant,
    last_bytes: u64,
}

impl ProgressEmitter {
    pub fn new(app: &AppHandle, task_id: impl Into<String>, label: impl Into<String>) -> Self {
        Self {
            app: app.clone(),
            task_id: task_id.into(),
            label: label.into(),
            stage: Arc::new(Mutex::new("downloading".to_owned())),
            state: Arc::new(Mutex::new(ThrottleState {
                last_emit: Instant::now() - Duration::from_millis(200),
                last_bytes: 0,
            })),
        }
    }

    pub fn set_stage(&self, stage: impl Into<String>) {
        if let Ok(mut guard) = self.stage.lock() {
            *guard = stage.into();
        }
    }

    pub fn emit(
        &self,
        completed_files: u64,
        total_files: u64,
        downloaded_bytes: u64,
        total_bytes: Option<u64>,
        force: bool,
    ) {
        if !force {
            let Ok(mut state) = self.state.lock() else {
                return;
            };
            let bytes_delta = downloaded_bytes.saturating_sub(state.last_bytes);
            if state.last_emit.elapsed() < Duration::from_millis(100) && bytes_delta < 64 * 1024 {
                return;
            }
            state.last_emit = Instant::now();
            state.last_bytes = downloaded_bytes;
        } else if let Ok(mut state) = self.state.lock() {
            state.last_emit = Instant::now();
            state.last_bytes = downloaded_bytes;
        }
        let stage = self
            .stage
            .lock()
            .map(|s| s.clone())
            .unwrap_or_else(|_| "downloading".to_owned());
        let percent = total_bytes
            .filter(|total| *total > 0)
            .map(|total| {
                ((downloaded_bytes as f64 / total as f64) * 100.0).clamp(0.0, 100.0) as f32
            })
            .or_else(|| {
                if total_files > 0 {
                    Some(
                        ((completed_files as f64 / total_files as f64) * 100.0).clamp(0.0, 100.0)
                            as f32,
                    )
                } else {
                    None
                }
            });
        let payload = DownloadProgressPayload {
            task_id: self.task_id.clone(),
            label: self.label.clone(),
            stage,
            completed_files,
            total_files,
            downloaded_bytes,
            total_bytes,
            percent,
            indeterminate: total_bytes.is_none() && total_files == 0,
        };
        crate::debug_protocol::trace(&self.app).record(
            "download",
            "download-progress",
            format!(
                "{} {} {}%",
                payload.label,
                payload.stage,
                payload.percent.map(|p| p.round() as i32).unwrap_or(-1)
            ),
            None,
        );
        let _ = self.app.emit("download-progress", payload);
    }

    pub fn emit_complete(
        &self,
        completed_files: u64,
        total_files: u64,
        downloaded_bytes: u64,
        total_bytes: Option<u64>,
    ) {
        let resolved_total = total_bytes.or(if downloaded_bytes > 0 {
            Some(downloaded_bytes)
        } else {
            None
        });
        self.emit(
            completed_files,
            total_files,
            resolved_total.unwrap_or(downloaded_bytes),
            resolved_total,
            true,
        );
    }
}

/// Build a Tauri download-progress emitter callback for `twilight_downloader::ParallelDownloader`.
pub fn parallel_progress_callback(
    emitter: ProgressEmitter,
) -> impl Fn(twilight_downloader::DownloadProgress) + Send + Sync + 'static {
    move |progress| {
        let total_bytes = if progress.total_bytes_known {
            Some(progress.known_total_bytes)
        } else {
            None
        };
        emitter.emit(
            progress.completed_files,
            progress.total_files,
            progress.downloaded_bytes,
            total_bytes,
            false,
        );
    }
}
