//! `horizon-client`'s documented command line and session hand-over.
//!
//! Horizon's Launch API (`horizon-client --launch-api`, version 0.1.1) is the
//! contract: `--resources`, `--game-dir`, `--home`, the window switches,
//! vanilla's quick-play names and `--session-stdin`. TwilightMC assembles
//! exactly those, never Java-style flags, so a build that refuses options
//! outside the published list still starts.

use std::ffi::OsString;
use std::path::{Component, Path, PathBuf};

use serde::Serialize;

use crate::error::HorizonError;

/// The Launch API version this module is written against.
pub const LAUNCH_API_VERSION: &str = "0.1.1";

/// One native-client start. Paths are explicit; optional values are omitted
/// from the command line when `None`.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct LaunchOptions {
    /// Prepared resources (`horizon-client --resources`).
    pub resources: PathBuf,
    /// Per-instance game folder (`--game-dir`): saves, options, resource packs.
    pub game_dir: PathBuf,
    /// Per-instance home (`--home`): logs, crash reports, caches.
    pub home: PathBuf,
    /// Optional per-player folder (`--player-dir`) when several games share a
    /// game folder. TwilightMC keeps one player per instance, so it stays unset.
    pub player_dir: Option<PathBuf>,
    pub width: Option<u32>,
    pub height: Option<u32>,
    pub fullscreen: bool,
    /// Vanilla quick play: one folder name under `saves/`.
    pub quick_play_singleplayer: Option<String>,
    /// Vanilla quick play: `HOST[:PORT]`.
    pub quick_play_multiplayer: Option<String>,
    /// Read the session JSON once from this file (the game deletes it).
    pub session_file: Option<PathBuf>,
    /// Read the session JSON once from stdin and close it.
    pub session_stdin: bool,
    /// Unsigned developer installs only; a released game refuses it.
    pub developer_single_player: bool,
    /// Unsigned developer installs only: skips the Microsoft ownership gate.
    pub developer_offline: bool,
}

impl LaunchOptions {
    pub fn new(
        resources: impl Into<PathBuf>,
        game_dir: impl Into<PathBuf>,
        home: impl Into<PathBuf>,
    ) -> Self {
        Self {
            resources: resources.into(),
            game_dir: game_dir.into(),
            home: home.into(),
            player_dir: None,
            width: None,
            height: None,
            fullscreen: false,
            quick_play_singleplayer: None,
            quick_play_multiplayer: None,
            session_file: None,
            session_stdin: false,
            developer_single_player: false,
            developer_offline: false,
        }
    }
}

/// A fully assembled native-client start.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct LaunchCommand {
    pub program: PathBuf,
    pub args: Vec<OsString>,
    /// Variables to set on the child.
    pub environment: Vec<(OsString, OsString)>,
    /// Variables inherited from the launcher that must not reach the game.
    pub remove_environment: Vec<OsString>,
}

impl LaunchCommand {
    /// The command line as one printable string (paths quoted when needed).
    pub fn display(&self) -> String {
        let mut parts = vec![self.program.display().to_string()];
        for arg in &self.args {
            let text = arg.to_string_lossy();
            if text.contains([' ', '\t', '"']) {
                parts.push(format!("\"{}\"", text.replace('"', "\\\"")));
            } else {
                parts.push(text.into_owned());
            }
        }
        parts.join(" ")
    }
}

/// Assembles `horizon-client`'s documented flags in a deterministic order.
/// Unknown options are refused by Horizon (exit 2), so only Launch API names
/// are emitted here; player extras belong to the caller's own argument list.
pub fn client_command(
    binary: &Path,
    options: &LaunchOptions,
) -> Result<LaunchCommand, HorizonError> {
    if options.session_stdin && options.session_file.is_some() {
        return Err(HorizonError::Launch(
            "a Horizon session is handed over by file or stdin, never both".to_owned(),
        ));
    }
    if let Some(world) = options
        .quick_play_singleplayer
        .as_deref()
        .filter(|world| !world.is_empty())
    {
        // Horizon accepts exactly one normal path component: no `/`, `\`,
        // drive prefixes, `.` or `..` (launch_options.rs). Check the raw
        // separators too: on Unix a backslash is an ordinary filename byte.
        if world.contains(['/', '\\']) {
            return Err(HorizonError::Launch(format!(
                "{world:?} is not a folder name under saves/"
            )));
        }
        let mut parts = Path::new(world).components();
        if !matches!(
            (parts.next(), parts.next()),
            (Some(Component::Normal(_)), None)
        ) {
            return Err(HorizonError::Launch(format!(
                "{world:?} is not a folder name under saves/"
            )));
        }
    }
    let mut args: Vec<OsString> = vec![
        "--resources".into(),
        options.resources.as_os_str().to_owned(),
        "--game-dir".into(),
        options.game_dir.as_os_str().to_owned(),
        "--home".into(),
        options.home.as_os_str().to_owned(),
    ];
    if let Some(player_dir) = &options.player_dir {
        args.push("--player-dir".into());
        args.push(player_dir.as_os_str().to_owned());
    }
    if let Some(width) = options.width.filter(|width| *width > 0) {
        args.push("--width".into());
        args.push(width.to_string().into());
    }
    if let Some(height) = options.height.filter(|height| *height > 0) {
        args.push("--height".into());
        args.push(height.to_string().into());
    }
    if options.fullscreen {
        args.push("--fullscreen".into());
    }
    if let Some(world) = options
        .quick_play_singleplayer
        .as_deref()
        .filter(|world| !world.is_empty())
    {
        args.push("--quickPlaySingleplayer".into());
        args.push(world.into());
    }
    if let Some(server) = options
        .quick_play_multiplayer
        .as_deref()
        .map(str::trim)
        .filter(|server| !server.is_empty())
    {
        args.push("--quickPlayMultiplayer".into());
        args.push(server.into());
    }
    if let Some(session) = &options.session_file {
        args.push("--session-file".into());
        args.push(session.as_os_str().to_owned());
    }
    if options.session_stdin {
        args.push("--session-stdin".into());
    }
    if options.developer_single_player {
        args.push("--developer-single-player".into());
    }

    let mut environment = vec![("HORIZON_HOME".into(), options.home.as_os_str().to_owned())];
    if options.developer_offline {
        environment.push((
            "HORIZON_LAUNCHER_DEVELOPER_OFFLINE".into(),
            OsString::from("1"),
        ));
    }
    Ok(LaunchCommand {
        program: binary.to_path_buf(),
        args,
        environment,
        // An inherited session path would be read before the explicit flags
        // (launch_options.rs); never let a launcher's environment sign in.
        remove_environment: vec![
            "HORIZON_ACCOUNT_SESSIONS".into(),
            "HORIZON_SESSION_FILE".into(),
        ],
    })
}

/// The session JSON Horizon reads from stdin or `--session-file`. The UUID is
/// accepted with or without dashes; Horizon writes the dashed form.
pub fn session_json(name: &str, uuid: &str, access_token: &str) -> Result<String, HorizonError> {
    let name = name.trim();
    if name.is_empty() {
        return Err(HorizonError::Session("the account name is empty".into()));
    }
    if access_token.trim().is_empty() {
        return Err(HorizonError::Session(
            "the account has no Minecraft access token".into(),
        ));
    }
    let compact: String = uuid.chars().filter(|c| *c != '-').collect();
    if compact.len() != 32 || !compact.bytes().all(|b| b.is_ascii_hexdigit()) {
        return Err(HorizonError::Session(format!(
            "{uuid:?} is not a Minecraft UUID"
        )));
    }
    let dashed = format!(
        "{}-{}-{}-{}-{}",
        &compact[..8],
        &compact[8..12],
        &compact[12..16],
        &compact[16..20],
        &compact[20..]
    );
    #[derive(Serialize)]
    struct Session<'a> {
        name: &'a str,
        uuid: String,
        access_token: &'a str,
        user_type: &'a str,
    }
    serde_json::to_string(&Session {
        name,
        uuid: dashed,
        access_token,
        user_type: "msa",
    })
    .map_err(|e| HorizonError::Session(e.to_string()))
}

#[cfg(test)]
mod tests {
    use super::*;

    fn options() -> LaunchOptions {
        LaunchOptions::new(
            "C:/shared/horizon-resources/26.3",
            "C:/inst/minecraft",
            "C:/inst/horizon",
        )
    }

    fn command(options: &LaunchOptions) -> LaunchCommand {
        client_command(Path::new("horizon-client.exe"), options).unwrap()
    }

    #[test]
    fn the_base_command_is_resources_game_dir_and_home() {
        let command = command(&options());
        assert_eq!(
            command.args,
            vec![
                OsString::from("--resources"),
                OsString::from("C:/shared/horizon-resources/26.3"),
                OsString::from("--game-dir"),
                OsString::from("C:/inst/minecraft"),
                OsString::from("--home"),
                OsString::from("C:/inst/horizon"),
            ]
        );
        assert_eq!(
            command.environment,
            vec![(
                OsString::from("HORIZON_HOME"),
                OsString::from("C:/inst/horizon")
            )]
        );
        assert_eq!(
            command.remove_environment,
            vec![
                OsString::from("HORIZON_ACCOUNT_SESSIONS"),
                OsString::from("HORIZON_SESSION_FILE"),
            ]
        );
    }

    #[test]
    fn optional_switches_use_horizons_exact_spelling_and_order() {
        let mut options = options();
        options.width = Some(1280);
        options.height = Some(720);
        options.fullscreen = true;
        options.quick_play_singleplayer = Some("My World".into());
        options.quick_play_multiplayer = Some("example.org:25565".into());
        options.session_stdin = true;
        options.developer_single_player = true;
        let command = command(&options);
        let args: Vec<String> = command
            .args
            .iter()
            .map(|arg| arg.to_string_lossy().into_owned())
            .collect();
        assert_eq!(
            args[6..],
            [
                "--width",
                "1280",
                "--height",
                "720",
                "--fullscreen",
                "--quickPlaySingleplayer",
                "My World",
                "--quickPlayMultiplayer",
                "example.org:25565",
                "--session-stdin",
                "--developer-single-player",
            ]
        );
        assert!(!command.display().contains("--assets"));
        assert!(!command.display().contains("--server"));
        assert!(!command.display().contains("--world"));
    }

    #[test]
    fn a_session_file_and_stdin_are_mutually_exclusive() {
        let mut options = options();
        options.session_file = Some("session.json".into());
        options.session_stdin = true;
        assert!(client_command(Path::new("x"), &options).is_err());
    }

    #[test]
    fn quick_play_singleplayer_is_one_folder_name() {
        for world in ["My World", "world_1", "E2E World"] {
            let mut options = options();
            options.quick_play_singleplayer = Some(world.to_owned());
            assert!(client_command(Path::new("x"), &options).is_ok(), "{world}");
        }
        for world in ["../x", "a/b", r"a\b", "/abs", ".", ".."] {
            let mut options = options();
            options.quick_play_singleplayer = Some(world.to_owned());
            assert!(
                client_command(Path::new("x"), &options).is_err(),
                "{world} is accepted"
            );
        }
    }

    #[test]
    fn empty_optionals_are_omitted_and_zero_is_not_a_window_size() {
        let mut options = options();
        options.width = Some(0);
        options.height = Some(0);
        options.quick_play_singleplayer = Some(String::new());
        options.quick_play_multiplayer = Some("  ".into());
        let command = command(&options);
        assert_eq!(command.args.len(), 6);
    }

    #[test]
    fn developer_offline_sets_the_documented_environment_gate() {
        let mut options = options();
        options.developer_offline = true;
        let command = command(&options);
        assert!(command.environment.contains(&(
            OsString::from("HORIZON_LAUNCHER_DEVELOPER_OFFLINE"),
            OsString::from("1")
        )));
    }

    #[test]
    fn session_json_is_the_documented_shape_with_a_dashed_uuid() {
        let session =
            session_json("Alex", "069a79f444e94726a5befca90e38aaf5", "token-value").unwrap();
        let value: serde_json::Value = serde_json::from_str(&session).unwrap();
        assert_eq!(value["name"], "Alex");
        assert_eq!(value["uuid"], "069a79f4-44e9-4726-a5be-fca90e38aaf5");
        assert_eq!(value["access_token"], "token-value");
        assert_eq!(value["user_type"], "msa");
        assert_eq!(value.as_object().unwrap().len(), 4);
    }

    #[test]
    fn session_rejects_missing_tokens_and_bad_uuids() {
        assert!(session_json("Alex", "069a79f444e94726a5befca90e38aaf5", " ").is_err());
        assert!(session_json(" ", "069a79f444e94726a5befca90e38aaf5", "t").is_err());
        assert!(session_json("Alex", "../../etc/passwd", "t").is_err());
    }
}
