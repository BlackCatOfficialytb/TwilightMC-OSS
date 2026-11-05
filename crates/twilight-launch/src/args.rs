//! Launch-argument string templates and their resolution
//! (`${auth_player_name}`-style tokens, modern rule-gated lists, quickplay).

use std::collections::{BTreeSet, HashMap};

use twilight_auth::Account;
use twilight_manifest::{resolve_arg_items, RuntimeContext, VersionFile};

/// Interpolation variables for a resolved launch profile.
pub type Vars = HashMap<String, String>;

/// Everything `${...}` templates need, mirroring Prism's `makeProfileVarMapping`.
pub struct ProfileVars {
    pub profile_name: String,
    pub version_name: String,
    pub version_type: String,
    pub game_directory: String,
    /// Legacy (pre-1.7.3) asset folder when the assets id implies a virtual layout.
    pub game_assets: Option<String>,
    pub assets_root: String,
    pub assets_index_name: String,
    pub library_directory: String,
    pub natives_directory: String,
    pub launcher_name: Option<String>,
    pub launcher_version: Option<String>,
}

impl ProfileVars {
    pub fn to_map(&self) -> Vars {
        let mut vars = Vars::new();
        let mut put = |k: &str, v: &str| {
            if !v.is_empty() {
                vars.insert(k.to_owned(), v.to_owned());
            }
        };
        put("profile_name", &self.profile_name);
        put("version_name", &self.version_name);
        put("version_type", &self.version_type);
        put("game_directory", &self.game_directory);
        if let Some(game_assets) = &self.game_assets {
            put("game_assets", game_assets);
        }
        put("assets_root", &self.assets_root);
        put("assets_index_name", &self.assets_index_name);
        put("library_directory", &self.library_directory);
        put("natives_directory", &self.natives_directory);
        if let Some(n) = &self.launcher_name {
            put("launcher_name", n);
        }
        if let Some(v) = &self.launcher_version {
            put("launcher_version", v);
        }
        vars
    }
}

/// Adds the session/account tokens (`auth_player_name`, ...
/// Mirrors Prism's Yggdrasil block in `processMinecraftArgs`: offline accounts
/// carry a sentinel access token, so no online validation is required.
pub fn inject_account_vars(vars: &mut Vars, account: &Account) {
    vars.insert("auth_player_name".into(), account.username.clone());
    vars.insert("auth_uuid".into(), account.uuid.to_string());
    let token = account.access_token.clone().unwrap_or_else(|| "0".into());
    vars.insert("auth_session".into(), token.clone());
    vars.insert("auth_access_token".into(), token);
    vars.insert("user_properties".into(), "{}".into());
    vars.insert("user_type".into(), account.user_type().into());
}

/// Quick-play (1.20+) target selection.
#[derive(Debug, Clone, Default)]
pub struct QuickPlay {
    pub server_address: Option<String>,
    pub server_port: Option<u16>,
    pub world: Option<String>,
}

/// Per-launch tweaks.
#[derive(Debug, Clone, Default)]
pub struct GameOptions {
    pub tweakers: Vec<String>,
    pub quick_play: QuickPlay,
    pub demo: bool,
}

/// Port of `replaceTokensIn`: replaces `${token}` with the shortest match up to
/// the first `}`; tokens missing from `vars` drop entirely (like Qt's regex).
pub fn replace_tokens_in(text: &str, vars: &Vars) -> String {
    let mut out = String::with_capacity(text.len());
    let mut cursor = 0usize;
    loop {
        let Some(rel) = text[cursor ..].find("${") else {
            out.push_str(&text[cursor ..]);
            return out;
        };
        let start = cursor + rel;
        out.push_str(&text[cursor .. start]);
        let body = &text[start + 2 ..];
        let Some(close) = body.find('}') else {
            // unterminated token stays literal
            out.push_str(&text[start ..]);
            return out;
        };
        if let Some(value) = vars.get(&body[..close]) {
            out.push_str(value);
        }
        cursor = start + 2 + close + 1;
    }
}

/// Builds the final game-side argument vector.
///
/// `traits` holds profile trait strings (`feature:is_quick_play_multiplayer`, ...).
pub fn game_arguments(
    version: &VersionFile,
    ctx: &RuntimeContext,
    features: &BTreeSet<String>,
    traits: &BTreeSet<String>,
    vars: &Vars,
    options: &GameOptions,
) -> Vec<String> {
    let mut args = match &version.arguments {
        Some(arguments) => resolve_arg_items(&arguments.game, ctx, features),
        None => version
            .minecraft_arguments
            .as_deref()
            .unwrap_or_default()
            .split_whitespace()
            .map(str::to_owned)
            .collect(),
    };

    for tweaker in &options.tweakers {
        args.push("--tweakClass".into());
        args.push(tweaker.clone());
    }

    if let Some(address) = &options.quick_play.server_address {
        if traits.contains("feature:is_quick_play_multiplayer") {
            args.push("--quickPlayMultiplayer".into());
            args.push(format!("{}:{}", address, options.quick_play.server_port.unwrap_or(25565)));
        } else {
            args.push("--server".into());
            args.push(address.clone());
            args.push("--port".into());
            args.push(options.quick_play.server_port.unwrap_or(25565).to_string());
        }
    }
    if let Some(world) = &options.quick_play.world
        && traits.contains("feature:is_quick_play_singleplayer")
    {
        args.push("--quickPlaySingleplayer".into());
        args.push(world.clone());
    }

    if options.demo {
        args.push("--demo".into());
    }

    args.into_iter().map(|arg| replace_tokens_in(&arg, vars)).collect()
}

/// Builds the JVM-side argument vector; injects the authlib-injector agent
/// when a custom Yggdrasil server is configured (`twilight_auth`).
pub fn jvm_arguments(
    version: &VersionFile,
    ctx: &RuntimeContext,
    features: &BTreeSet<String>,
    vars: &Vars,
    authlib_injector: Option<(&std::path::Path, &str)>,
) -> Vec<String> {
    let mut args = match &version.arguments {
        Some(arguments) => resolve_arg_items(&arguments.jvm, ctx, features),
        None => Vec::new(),
    };
    if let Some((jar_path, auth_server_url)) = authlib_injector {
        args.extend(twilight_auth::authlib_injector_jvm_args(&jar_path.display().to_string(), auth_server_url));
    }
    args.into_iter().map(|arg| replace_tokens_in(&arg, vars)).collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    fn vars() -> Vars {
        HashMap::from([
            ("auth_player_name".to_owned(), "Steve".to_owned()),
            ("assets_index_name".to_owned(), "26.3".to_owned()),
            ("natives_directory".to_owned(), "/g/natives".to_owned()),
        ])
    }

    #[test]
    fn token_replacement_matches_qt_semantics() {
        let v = vars();
        assert_eq!(replace_tokens_in("${auth_player_name}!", &v), "Steve!");
        // known tokens are the shortest match ending at the first `}`
        assert_eq!(replace_tokens_in("--${natives_directory}\\libs", &v), "--/g/natives\\libs");
        // ${unclosed stays literal; unknown forms vanish entirely
        assert_eq!(replace_tokens_in("keep ${unclosed", &v), "keep ${unclosed");
        assert_eq!(replace_tokens_in("drop ${unknown_token} here", &v), "drop  here");
        assert_eq!(replace_tokens_in("no tokens at all", &v), "no tokens at all");
    }

    #[test]
    fn offline_account_injects_sentinel_tokens() {
        let account = Account::offline("Steve");
        let mut v = vars();
        inject_account_vars(&mut v, &account);
        assert_eq!(v["auth_player_name"], "Steve");
        assert_eq!(v["auth_uuid"], "5627dd98-e6be-3c21-b8a8-e92344183641");
        assert_eq!(v["auth_access_token"], "0");
        assert_eq!(v["user_type"], "legacy");
        // microsooft accounts surface their own type/token
        let ms = Account {
            id: "x".into(),
            username: "Player".into(),
            uuid: account.uuid,
            account_type: twilight_auth::AccountType::Microsoft,
            access_token: Some("real-token".into()),
        };
        inject_account_vars(&mut v, &ms);
        assert_eq!(v["auth_access_token"], "real-token");
        assert_eq!(v["user_type"], "mojang");
    }

    use std::collections::BTreeSet;
    use twilight_manifest::RuntimeContext;

    const MODERN: &str = r#"{
        "id": "26.3",
        "mainClass": "net.minecraft.client.main.Main",
        "arguments": {
            "game": [
                "--username", "${auth_player_name}",
                { "rules": [{ "action": "allow", "os": { "name": "linux-x86_64" } }], "value": "--fullscreen" }
            ],
            "jvm": [
                "-Dnatives=${natives_directory}",
                { "rules": [{ "action": "allow", "features": { "is_demo_user": true } }], "value": "--demo" }
            ]
        }
    }"#;

    const LEGACY: &str = r#"{
        "id": "1.7.3",
        "mainClass": "net.minecraft.client.m",
        "minecraftArguments": "--username ${auth_player_name} --accessToken ${auth_access_token}"
    }"#;

    fn ctx() -> RuntimeContext {
        RuntimeContext::new("linux", "x86_64")
    }

    fn none() -> BTreeSet<String> {
        BTreeSet::new()
    }

    #[test]
    fn modern_arguments_resolve_rules_then_tokens() {
        let version = twilight_manifest::parse_version_file(MODERN).unwrap();
        let demo: GameOptions = GameOptions { demo: true, ..Default::default() };
        let demo_features: BTreeSet<String> = ["is_demo_user".to_owned()].into();

        let game = game_arguments(&version, &ctx(), &none(), &none(), &vars(), &demo);
        assert_eq!(game, vec!["--username", "Steve", "--fullscreen", "--demo"]);

        let jvm = jvm_arguments(&version, &ctx(), &none(), &vars(), None);
        assert_eq!(jvm, vec!["-Dnatives=/g/natives"]);
        let demo_jvm = jvm_arguments(&version, &ctx(), &demo_features, &vars(), None);
        assert_eq!(demo_jvm, vec!["-Dnatives=/g/natives", "--demo"]);
    }

    #[test]
    fn legacy_templates_split_and_resolve() {
        let version = twilight_manifest::parse_version_file(LEGACY).unwrap();
        let mut vars = vars();
        inject_account_vars(&mut vars, &Account::offline("Steve"));
        let game = game_arguments(&version, &ctx(), &none(), &none(), &vars, &GameOptions::default());
        assert_eq!(game, vec!["--username", "Steve", "--accessToken", "0"]);
    }

    #[test]
    fn server_join_switches_between_quickplay_and_classic() {
        let modern_quickplay: &str = r#"{ "id": "x", "arguments": { "game": [] } }"#;
        // (traits try in upstream launches is profile data; simulate both paths)

        let version = twilight_manifest::parse_version_file(modern_quickplay).unwrap();
        let legacy_opts = GameOptions { quick_play: QuickPlay { server_address: Some("mc.example".into()), server_port: Some(2026), ..Default::default() }, ..Default::default() };
        // no quickplay trait: classic in --server ... --port ...
        let classic = game_arguments(&version, &ctx(), &none(), &none(), &vars(), &legacy_opts);
        assert_eq!(classic, vec!["--server", "mc.example", "--port", "2026"]);

        let with_trait: BTreeSet<String> = ["feature:is_quick_play_multiplayer".to_owned()].into();
        let quick = game_arguments(&version, &ctx(), &none(), &with_trait.clone(), &vars(), &legacy_opts);
        assert_eq!(quick, vec!["--quickPlayMultiplayer", "mc.example:2026"]);
        let _ = with_trait;
    }

    #[test]
    fn authlib_injector_arrives_as_javaagent() {
        let version = twilight_manifest::parse_version_file(r#"{ "id": "x" }"#).unwrap();
        let jvm = jvm_arguments(&version, &ctx(), &none(), &vars(), Some((std::path::Path::new("/l/ai.jar"), "https://ely.by/api/auth")));
        assert_eq!(jvm, vec!["-javaagent:/l/ai.jar=https://ely.by/api/auth", "-Dauthlibinjector.side=client"]);
    }
}
