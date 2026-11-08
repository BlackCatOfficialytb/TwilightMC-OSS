//! TwilightMC launcher CLI: clap surface, isolated artifact staging, the
//! end-to-end vanilla (and loader-composited) launch pipeline (metadata
//! failover, libraries, assets, natives, argument assembly, process spawn)
//! and the Modrinth `.mrpack` installation flow.
//!
//! The network-free core is [`launch::assemble_command`]; everything with
//! side effects hangs off [`launch::run_launch`] and [`modpack::run_install`].

pub mod cli;
pub mod error;
pub mod java;
pub mod launch;
pub mod modpack;
pub mod staging;
pub mod versions;

pub use cli::{Cli, Command, LaunchArgs, LaunchConfig, ModpackAction, ModpackArgs};
pub use error::CliError;
pub use launch::run_launch_with;
pub use staging::ArtifactStaging;

/// Dispatches a parsed subcommand, returning the process exit code.
pub async fn execute(command: Command) -> Result<i32, CliError> {
    match command {
        Command::Launch(args) => launch::run_launch(args).await,
        Command::Modpack(ModpackAction::Install(args)) => modpack::run_install(args).await,
        Command::Java => java::run_java().await,
        Command::Versions => versions::run_versions().await,
    }
}
