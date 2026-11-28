//! System Java runtime management: JVM discovery across PATH/env/OS roots,
//! fast version detection and manifest compatibility matching.

mod adoptium;
mod discovery;
mod error;
mod gc;
mod matcher;
#[cfg(test)]
mod test_server;
mod version;

pub use adoptium::{
    ADOPTIUM_API_BASE, ADOPTIUM_GITHUB_RELEASES_ATOM, AdoptiumAsset, AtomRelease,
    adoptium_asset_url, atom_asset_filename, fetch_adoptium_asset, fetch_adoptium_asset_with_atom,
    install_adoptium_java, map_os_arch, parse_assets, parse_atom_feed,
};
pub use discovery::{
    candidate_jvm_roots, discover_java, jvm_home_from_executable, parse_reg_java_home_output,
    scan_roots,
};
pub use error::RuntimeError;
pub use gc::{FlagCompat, flag_compat, java_badge};
pub use matcher::{is_compatible, select_best_java};
pub use version::{
    JavaInstallation, JavaVersion, java_executable_relative, parse_java_version,
    probe_java_installation, probe_output_version, probe_version, release_file_version,
    release_line_version,
};
