//! Launch-argument formatting for `twilight-launch`:
//! offline/adapted game arguments plus authlib-injector JVM injection.

use uuid::Uuid;

/// Offline/legacy game arguments (Freesm bypasses Microsoft validation this way).
pub fn offline_game_args(username: &str, uuid: Uuid) -> Vec<String> {
    vec![
        "--username".into(),
        username.into(),
        "--uuid".into(),
        uuid.to_string(),
        "--accessToken".into(),
        "0".into(), // legacy sentinel: never a real token, as upstream did pre-7.2
        "--userType".into(),
        "legacy".into(),
    ]
}

/// JVM side of authlib-injector: javaagent + host-server URL.
/// The agent jar itself is fetched by the downloader; this only injects it.
pub fn authlib_injector_jvm_args(jar_path: &str, auth_server_url: &str) -> Vec<String> {
    vec![
        format!("-javaagent:{}={}", jar_path, auth_server_url),
        "-Dauthlibinjector.side=client".into(),
    ]
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::generate_offline_uuid;

    #[test]
    fn offline_args_match_minecraft_expectations() {
        let uuid = generate_offline_uuid("Steve");
        let args = offline_game_args("Steve", uuid);
        assert_eq!(
            args,
            vec![
                "--username",
                "Steve",
                "--uuid",
                "5627dd98-e6be-3c21-b8a8-e92344183641",
                "--accessToken",
                "0",
                "--userType",
                "legacy"
            ]
        );
    }

    #[test]
    fn authlib_injector_args_pair_jar_and_server() {
        let args = authlib_injector_jvm_args(
            "/libs/authlib-injector.jar",
            "https://authserver.ely.by/api/authlib-injector",
        );
        assert_eq!(args.len(), 2);
        assert!(
            args[0].contains("-javaagent:/libs/authlib-injector.jar=https://authserver.ely.by")
        );
        assert_eq!(args[1], "-Dauthlibinjector.side=client");
    }
}
