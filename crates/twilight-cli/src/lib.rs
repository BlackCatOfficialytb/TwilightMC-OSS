//! TwilightMC launcher CLI: clap surface, isolated artifact staging and the
//! end-to-end vanilla launch pipeline (metadata failover, libraries, assets,
//! natives, argument assembly, process spawn).
//!
//! The network-free core is [`launch::assemble_command`]; everything with
//! side effects hangs off [`launch::run_launch`].

pub mod cli;
pub mod error;
pub mod java;
pub mod launch;
pub mod staging;
pub mod versions;

pub use cli::{Cli, Command, LaunchArgs, LaunchConfig};
pub use error::CliError;
pub use staging::ArtifactStaging;

/// Dispatches a parsed subcommand, returning the process exit code.
pub async fn execute(command: Command) -> Result<i32, CliError> {
    match command {
        Command::Launch(args) => launch::run_launch(args).await,
        Command::Java => java::run_java().await,
        Command::Versions => versions::run_versions().await,
    }
}
