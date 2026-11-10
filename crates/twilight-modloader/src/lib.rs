//! Fabric and Quilt mod-loader metadata for the launch pipeline: endpoints,
//! meta profile parsing and the composite launch component (Knot main class +
//! loader libraries) that the CLI overlays onto a vanilla launch.

mod component;
mod error;
mod resolver;

#[cfg(test)]
mod test_server;

pub use component::{LoaderProfile, ResolvedLoaderLib};
pub use error::LoaderError;
pub use resolver::{
    FABRIC_META_BASE, ModLoader, QUILT_META_BASE, parse_loader_meta, profile_url,
    resolve_loader_profile,
};
