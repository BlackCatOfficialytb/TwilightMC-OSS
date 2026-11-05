//! Parsing and evaluation of Mojang version manifests (`version.json`).
//!
//! Clean-room port of Prism Launcher's `MojangVersionFormat`, `VersionFile`,
//! `Rule`, `Library` and `GradleSpecifier` into native, serde-typed Rust.
//! Qt types were replaced with `String`/`Vec`/`HashMap`/`BTreeMap`.

mod arg;
mod download;
mod error;
mod gradle;
mod library;
mod rule;
mod runtime;
mod version;

pub use arg::{ArgItem, ArgValue, Arguments, resolve_arg_items};
pub use download::{AssetIndexInfo, DownloadInfo, LibraryDownloads};
pub use error::ManifestError;
pub use gradle::{GradleSpecifier, PathSpec};
pub use library::{Library, ResolvedDownload};
pub use rule::{Action, OsRule, Rule, RuleResult, eval_rule_list};
pub use runtime::{RuntimeContext, System};
pub use version::{VersionFile, parse_version_file, write_version_file};

/// Default Mojang shared-library repository base (`BuildConfig.LIBRARY_BASE`).
pub const MOJANG_LIBRARY_BASE: &str = "https://libraries.minecraft.net/";
/// Highest `minimumLauncherVersion` this client understands.
pub const SUPPORTED_MINIMUM_LAUNCHER_VERSION: i32 = 18;
