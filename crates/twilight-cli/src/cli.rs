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

/// The four subcommands: launch / modpack / java / versions.
#[derive(Debug, Clone, Subcommand)]
pub enum Command {
    /// Launch a vanilla (or loader-composited) Minecraft version end to end.
    Launch(LaunchArgs),
    /// Install a Modrinth `.mrpack` into a managed instance.
    #[command(subcommand)]
    Modpack(ModpackAction),
    /// Scan the system for installed JVMs and print them.
    Java,
    /// Resolve the vanilla version list through the metadata failover chain.
    Versions,
}

/// `.mrpack` subcommands.
#[derive(Debug, Clone, Subcommand)]
pub enum ModpackAction {
    /// Stage a `.mrpack`: client downloads, overrides and loader libraries.
    Install(ModpackArgs),
}

/// `twilight modpack install <PATH_OR_URL>` arguments.
#[derive(Debug, Clone, clap::Args)]
pub struct ModpackArgs {
    /// `.mrpack` file path or `http(s)://` URL of the archive.
    #[arg(value_name = "PATH_OR_URL")]
    pub path_or_url: String,
    /// Instance root; defaults to `<shared-dir>/instances/<pack-name-slug>`.
    #[arg(long, value_name = "DIR")]
    pub instance_dir: Option<PathBuf>,
    /// Shared artifact root (`libraries/` lives here).
    #[arg(long, value_name = "DIR", env = "TWILIGHTMC_SHARED_DIR")]
    pub shared_dir: Option<PathBuf>,
    /// Staging root override; defaults to `<system-temp>/twilightmc_staging`.
    #[arg(long, value_name = "DIR", env = "TWILIGHTMC_TEMP_DIR")]
    pub temp_dir: Option<PathBuf>,
    /// Print the install plan and exit; no downloads, no files written.
    #[arg(long)]
    pub dry_run: bool,
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
    /// Mod loader composited onto the launch (`fabric` / `quilt`, case-insensitive).
    #[arg(long, value_name = "LOADER", env = "TWILIGHTMC_LOADER")]
    pub loader: Option<String>,
    /// Pinned loader version; empty/omitted resolves the latest stable release.
    #[arg(long, value_name = "VERSION", env = "TWILIGHTMC_LOADER_VERSION")]
    pub loader_version: Option<String>,
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
    pub loader: Option<String>,
    pub loader_version: Option<String>,
    pub dry_run: bool,
}

/// Fallback shared directory when no `--shared-dir` was passed: the cwd.
pub(crate) fn shared_default() -> Result<PathBuf, CliError> {
    std::env::current_dir().map_err(CliError::from)
}

impl LaunchArgs {
    /// Applies the shared-directory default (the current working directory).
    pub fn to_config(&self) -> Result<LaunchConfig, CliError> {
        let shared_dir = match &self.shared_dir {
            Some(dir) => dir.clone(),
            None => shared_default()?,
        };
        Ok(LaunchConfig {
            version_or_id: self.version_or_id.clone(),
            username: self.username.clone(),
            instance_dir: self.instance_dir.clone(),
            shared_dir,
            temp_dir: self.temp_dir.clone(),
            java: self.java.clone(),
            loader: self.loader.clone(),
            loader_version: self.loader_version.clone(),
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
    fn loader_flags_parse_and_default_to_none() {
        let args = launch_args();
        assert!(args.loader.is_none());
        assert!(args.loader_version.is_none());

        let command = parse(&[
            "twilight",
            "launch",
            "1.21.4",
            "--loader",
            "Quilt",
            "--loader-version",
            "0.26.4",
        ]);
        let Command::Launch(args) = command else {
            panic!("expected launch subcommand");
        };
        assert_eq!(args.loader.as_deref(), Some("Quilt"));
        assert_eq!(args.loader_version.as_deref(), Some("0.26.4"));
        let cfg = args.to_config().unwrap();
        assert_eq!(cfg.loader.as_deref(), Some("Quilt"));
        assert_eq!(cfg.loader_version.as_deref(), Some("0.26.4"));
    }

    #[test]
    fn modpack_install_parses_positional_and_flags() {
        let command = parse(&[
            "twilight",
            "modpack",
            "install",
            r"B:\packs\tap.mrpack",
            "--shared-dir",
            r"K:\shared",
            "--instance-dir",
            r"K:\shared\instances\my-pack",
            "--temp-dir",
            r"E:\tmp\stage",
            "--dry-run",
        ]);
        let Command::Modpack(ModpackAction::Install(args)) = command else {
            panic!("expected modpack install subcommand");
        };
        assert_eq!(args.path_or_url, r"B:\packs\tap.mrpack");
        assert_eq!(args.shared_dir.as_deref(), Some(Path::new(r"K:\shared")));
        assert_eq!(
            args.instance_dir.as_deref(),
            Some(Path::new(r"K:\shared\instances\my-pack"))
        );
        assert_eq!(args.temp_dir.as_deref(), Some(Path::new(r"E:\tmp\stage")));
        assert!(args.dry_run);
    }

    #[test]
    fn pack_urls_with_scheme_parse_as_positional() {
        let command = parse(&[
            "twilight",
            "modpack",
            "install",
            "https://cdn.example.org/pack.mrpack",
        ]);
        let Command::Modpack(ModpackAction::Install(args)) = command else {
            panic!("expected modpack install subcommand");
        };
        assert_eq!(args.path_or_url, "https://cdn.example.org/pack.mrpack");
        assert!(!args.dry_run);
        assert!(args.shared_dir.is_none());
        assert!(args.instance_dir.is_none());
    }

    #[test]
    fn missing_feature_rejected() {
        assert!(Cli::try_parse_from(["twilight", "java", "--nonexistent"]).is_err());
    }
}
