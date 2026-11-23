//! Clean-room integration with Horizon, the native Rust Minecraft client
//! (`horizon-rust/horizon`).
//!
//! TwilightMC never bundles, compiles or links Horizon. This crate speaks the
//! contracts the project documents:
//!
//! - **Prepared resources** (`horizon-resources.json`, `horizon-prepare.json`,
//!   `assets/…`): built from the player's own Mojang client jar and asset
//!   index, which the launch pipeline downloads on demand and verifies.
//! - **Launch API 0.1.1** (`horizon-client --launch-api`): discovery, probing
//!   and the exact `--resources` / `--game-dir` / `--home` command line,
//!   including the read-once session JSON on stdin.
//! - **Releases**: the platform archives at `horizon-rust/horizon` are offered
//!   when the player has no build; the launcher downloads one only on request.
//!
//! The guaranteed store remains a plain Mojang object pool (`objects/xx/<sha1>`);
//! the prepared-resources layout is Horizon's, and `upstream/horizon` stays a
//! read-only reference that is never modified.

mod error;
pub mod install;
pub mod launch;
pub mod manifest;
pub mod prepare;
pub mod probe;
pub mod release;
pub mod store;

pub use error::HorizonError;
pub use install::{InstallRequest, PreparedResources, describe, ensure_resources};
pub use launch::{LAUNCH_API_VERSION, LaunchCommand, LaunchOptions, client_command, session_json};
pub use manifest::{
    LEGACY_MANIFEST_FILE, PREPARE_STAMP_FILE, RESOURCES_MANIFEST_FILE, ResourceStatus,
    ResourcesManifest, SCHEMA, check_resources, require_resources, resources_dir,
};
pub use prepare::{PrepareReport, PrepareRequest, prepare_resources};
pub use probe::{
    LaunchApiInfo, discover_client_binaries, discover_prepare_binaries, probe_launch_api,
};
pub use release::{
    InstalledRelease, Release, ReleaseAsset, download_asset, extract_archive, fetch_releases,
    install_latest_client, platform_asset_name, preferred_release, release_asset,
};
pub use store::{AssetStore, safe_relative};
