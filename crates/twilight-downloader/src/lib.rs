//! Network layer for TwilightMC: failover metadata hosts (Mojang piston-meta,
//! meta.prismlauncher.org, meta.freesmlauncher.org), asset index parsing and
//! parallel SHA-1 verified downloads.

mod asset_index;
mod download;
mod error;
mod meta;

#[cfg(test)]
mod test_server;

pub use asset_index::{AssetIndex, AssetObject};
pub use download::{DownloadRequest, DownloadedFile, ParallelDownloader, sha1_of_file, to_hex};
pub use error::DownloadError;
pub use meta::{FREESM_META_BASE, MOJANG_MANIFEST_V2, MOJANG_RESOURCES_BASE, PRISM_META_BASE};
pub use meta::{
    VanillaMetaVersion, VanillaVersionList, fetch_json_failover, list_vanilla_versions,
    resolve_vanilla_version, vanilla_sources,
};
