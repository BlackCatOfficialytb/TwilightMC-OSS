//! Launch pipeline for TwilightMC: argument templates, classpath building and
//! async process spawns. Clean-room port of Prism's
//! `MinecraftInstance::processMinecraftArgs` / `getJvmArguments` mechanics.

mod args;
mod classpath;
mod error;
mod process;

pub use args::{
    game_arguments, inject_account_vars, jvm_arguments, replace_tokens_in, GameOptions, ProfileVars, QuickPlay, Vars,
};
pub use classpath::{active_paths, classpath_string, profile_classpath, separator};
pub use error::LaunchError;
pub use process::{build_command, run, LaunchEvent, LaunchPlan};
