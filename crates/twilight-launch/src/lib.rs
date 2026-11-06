//! Launch pipeline for TwilightMC: argument templates, classpath building and
//! async process spawns. Clean-room port of Prism's
//! `MinecraftInstance::processMinecraftArgs` / `getJvmArguments` mechanics.

mod args;
mod classpath;
mod error;
mod natives;
mod process;

pub use args::{
    GameOptions, ProfileVars, QuickPlay, Vars, game_arguments, inject_account_vars, jvm_arguments,
    replace_tokens_in,
};
pub use classpath::{active_paths, classpath_string, profile_classpath, separator};
pub use error::LaunchError;
pub use natives::{
    clean_natives_dir, extract_natives, extract_natives_with_7z, extract_natives_with_fallback,
    find_seven_zip, sevenzip_arguments,
};
pub use process::{LaunchEvent, LaunchPlan, build_command, run};
