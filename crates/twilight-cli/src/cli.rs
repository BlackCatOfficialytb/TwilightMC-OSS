//! clap 4 command surface for the `twilight` executable.

use std::path::PathBuf;

use clap::{Parser, Subcommand};

use crate::error::CliError;

/// TwilightMC launcher CLI.
#[derive(Debug, Parser)]
#[command(
    name = "twilight",
    version,
    about = "TwilightMC: the Rust-bred clean-room launcher"
)]
pub struct Cli {
    #[command(subcommand)]
    pub command: Command,
}

/// The three subcommands: launch / java / versions.
#[derive(Debug, Clone, Subcommand)]
pub enum Command {
    /// Launch a vanilla Minecraft version end to end.
    Launch(LaunchArgs),
    /// Scan the system for installed JVMs and print them.
    Java,
    /// Resolve the vanilla version list through the metadata failover chain.
    Versions,
}

/// `launch <VERSION_OR_ID>` arguments.
#[derive(Debug, Clone, clap::Args)]
pub struct LaunchArgs {
    /// `latest`, an exact version id (e.g. `1.21.4`) or an instance name.
    #[arg(value_name = "VERSION_OR_ID")]
    pub version_or_id: String,
    /// Player name for the offline profile (deterministic v3 UUID).
    #[arg(long, default_value = "Steve", value_name = "NAME")]
    pub username: String,
    /// Instance root; defaults to `<shared-dir>/instances/<version>`.
    #[arg(long, value_name = "DIR", env = "TWILIGHTMC_INSTANCE_DIR")]
    pub instance_dir: Option<PathBuf>,
    /// Shared artifact root (`libraries/`, `assets/`); may point at a Prism data dir.
    #[arg(long, value_name = "DIR", env = "TWILIGHTMC_SHARED_DIR")]
    pub shared_dir: Option<PathBuf>,
    /// Staging root override; defaults to `<system-temp>/twilightmc_staging`.
    #[arg(long, value_name = "DIR", env = "TWILIGHTMC_TEMP_DIR")]
    pub temp_dir: Option<PathBuf>,
    /// Explicit java executable; falls back to full JVM discovery + `select_best_java`.
    #[arg(long, value_name = "FILE", env = "TWILIGHTMC_JAVA")]
    pub java: Option<PathBuf>,
    /// Print the assembled command and exit; no downloads, no natives writes, no spawn.
    #[arg(long)]
    pub dry_run: bool,
}

/// Fully resolved launch configuration (clap types do not leak further).
#[derive(Debug, Clone)]
pub struct LaunchConfig {
    pub version_or_id: String,
    pub username: String,
    pub instance_dir: Option<PathBuf>,
    pub shared_dir: PathBuf,
    pub temp_dir: Option<PathBuf>,
    pub java: Option<PathBuf>,
    pub dry_run: bool,
}

impl LaunchArgs {
    /// Applies the shared-directory default (the current working directory).
    pub fn to_config(&self) -> Result<LaunchConfig, CliError> {
        let shared_dir = match &self.shared_dir {
            Some(dir) => dir.clone(),
            None => std::env::current_dir().map_err(CliError::from)?,
        };
        Ok(LaunchConfig {
            version_or_id: self.version_or_id.clone(),
            username: self.username.clone(),
            instance_dir: self.instance_dir.clone(),
            shared_dir,
            temp_dir: self.temp_dir.clone(),
            java: self.java.clone(),
            dry_run: self.dry_run,
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::path::Path;

    fn parse(args: &[&str]) -> Command {
        match Cli::try_parse_from(args).map(|cli| cli.command) {
            Ok(command) => command,
            Err(e) => panic!("clap rejected {args:?}: {e}"),
        }
    }

    fn launch_args() -> LaunchArgs {
        match parse(&["twilight", "launch", "1.21.4"]) {
            Command::Launch(args) => args,
            other => panic!("wrong subcommand: {other:?}"),
        }
    }

    #[test]
    fn launch_defaults_are_offline_steve_without_dry_run() {
        let args = launch_args();
        assert_eq!(args.version_or_id, "1.21.4");
        assert_eq!(args.username, "Steve");
        assert!(!args.dry_run);
        assert!(args.java.is_none());
        assert!(args.shared_dir.is_none());
        assert!(args.instance_dir.is_none());
        assert!(args.temp_dir.is_none());
        // shared dir default = current working directory
        let cfg = args.to_config().unwrap();
        assert_eq!(cfg.shared_dir, std::env::current_dir().unwrap());
    }

    #[test]
    fn launch_flags_and_positional_parse_straight_through() {
        let command = parse(&[
            "twilight",
            "launch",
            "latest",
            "--username",
            "Alex",
            "--shared-dir",
            r"D:\ins",
            "--instance-dir",
            r"D:\ins\my-world",
            "--temp-dir",
            r"E:\tmp\stage",
            "--java",
            r"D:\jdk-21\bin\java.exe",
            "--dry-run",
        ]);
        let Command::Launch(args) = command else {
            panic!("expected launch subcommand");
        };
        assert_eq!(args.version_or_id, "latest");
        assert_eq!(args.username, "Alex");
        assert_eq!(args.shared_dir.as_deref(), Some(Path::new(r"D:\ins")));
        assert_eq!(
            args.instance_dir.as_deref(),
            Some(Path::new(r"D:\ins\my-world"))
        );
        assert_eq!(args.temp_dir.as_deref(), Some(Path::new(r"E:\tmp\stage")));
        assert_eq!(
            args.java.as_deref(),
            Some(Path::new(r"D:\jdk-21\bin\java.exe"))
        );
        assert!(args.dry_run);
        let cfg = args.to_config().unwrap();
        assert_eq!(cfg.shared_dir, PathBuf::from(r"D:\ins"));
        assert!(cfg.dry_run);
    }

    #[test]
    fn java_and_versions_subcommands_match() {
        assert!(matches!(parse(&["twilight", "java"]), Command::Java));
        assert!(matches!(
            parse(&["twilight", "versions"]),
            Command::Versions
        ));
    }

    #[test]
    fn missing_feature_rejected() {
        assert!(Cli::try_parse_from(["twilight", "java", "--nonexistent"]).is_err());
    }
}
