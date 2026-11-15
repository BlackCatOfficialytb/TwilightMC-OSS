//! Mod-loader metadata for the launch pipeline: Fabric/Quilt native meta APIs
//! and the Prism/Freesm Meta v1 indices (Forge, NeoForge). Endpoints, profile
//! parsing and the composite launch component (main class + loader libraries)
//! that the CLI overlays onto a vanilla launch.

mod component;
mod error;
mod resolver;

#[cfg(test)]
mod test_server;

pub use component::{LoaderProfile, ResolvedLoaderLib};
pub use error::LoaderError;
pub use resolver::{
    FABRIC_META_BASE, FORGE_MAVEN_BASE, FORGE_WRAPPER_MAIN, LoaderBuild, MINECRAFT_MAVEN_BASE,
    ModLoader, NEOFORGE_MAVEN_BASE, QUILT_META_BASE, parse_loader_meta, parse_meta_index,
    pick_meta_build, profile_url, resolve_loader_profile,
};
