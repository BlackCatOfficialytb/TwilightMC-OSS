//! System Java runtime management: JVM discovery across PATH/env/OS roots,
//! fast version detection and manifest compatibility matching.

mod discovery;
mod error;
mod matcher;
mod version;

pub use discovery::{
    candidate_jvm_roots, discover_java, jvm_home_from_executable, parse_reg_java_home_output,
    scan_roots,
};
pub use error::RuntimeError;
pub use matcher::{is_compatible, select_best_java};
pub use version::{
    JavaInstallation, JavaVersion, java_executable_relative, parse_java_version,
    probe_output_version, probe_version, release_file_version, release_line_version,
};
