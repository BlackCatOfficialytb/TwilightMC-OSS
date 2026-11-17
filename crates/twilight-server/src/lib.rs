//! Server engine: supported server software, artifact resolution from the
//! official APIs (Mojang, PaperMC, Purpur, Fabric meta, GitHub releases),
//! EULA/server.properties management and the async process controller with
//! piped stdin/stdout.

pub mod config;
pub mod engine;
pub mod process;

use serde::{Deserialize, Serialize};

#[derive(Debug, thiserror::Error)]
pub enum ServerError {
    #[error("network error: {0}")]
    Network(#[from] reqwest::Error),
    #[error("download error: {0}")]
    Download(#[from] twilight_downloader::DownloadError),
    #[error("io error: {0}")]
    Io(#[from] std::io::Error),
    #[error("{0}")]
    Other(String),
}

/// The supported server software, Java and Rust-native.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ServerSoftware {
    // Java Servers
    Vanilla,
    Paper,
    Purpur,
    Fabric,
    Forge,
    NeoForge,
    Velocity,
    // Rust Native Servers (TwilightMC exclusives)
    Pumpkin,
    Steel,
}

impl ServerSoftware {
    /// Display label for the UI badges.
    pub fn label(&self) -> &'static str {
        match self {
            Self::Vanilla => "Vanilla",
            Self::Paper => "Paper",
            Self::Purpur => "Purpur",
            Self::Fabric => "Fabric",
            Self::Forge => "Forge",
            Self::NeoForge => "NeoForge",
            Self::Velocity => "Velocity",
            Self::Pumpkin => "PumpkinMC",
            Self::Steel => "SteelMC",
        }
    }

    /// `true` for the Rust-native servers (spawned as a native executable).
    pub fn is_native(&self) -> bool {
        matches!(self, Self::Pumpkin | Self::Steel)
    }

    /// Parses the snake_case string the webview sends.
    pub fn parse(s: &str) -> Option<Self> {
        serde_json::from_value(serde_json::Value::String(s.to_owned())).ok()
    }
}

/// Persisted server metadata (`server.json` inside the server directory).
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ServerMeta {
    pub software: ServerSoftware,
    pub version: String,
    /// Pinned loader version (Fabric); empty resolves the latest stable.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub loader_version: Option<String>,
    #[serde(default)]
    pub port: u16,
    /// `-Xms` in MiB; 0 = none.
    #[serde(default)]
    pub min_memory_mb: u32,
    /// `-Xmx` in MiB; 0 = none.
    #[serde(default)]
    pub max_memory_mb: u32,
    /// Offline (`online-mode=false`) servers carry the AuthMe suggestion.
    #[serde(default)]
    pub offline_mode: bool,
    /// Minekube Connect tunnel enabled.
    #[serde(default)]
    pub connect: bool,
    /// Unix seconds of creation.
    #[serde(default)]
    pub created: u64,
}
