//! Classpath and natives path assembly for a resolved library profile.
use std::collections::{BTreeSet, HashSet};
use std::path::{Path, PathBuf};

use twilight_manifest::{Library, RuntimeContext};

/// Host classpath separator (`;` on Windows, `:` elsewhere).
pub fn separator() -> &'static str {
    if std::env::consts::OS == "windows" {
        ";"
    } else {
        ":"
    }
}

/// Active libraries for the context, split by kind. Storage paths are rooted
/// at `library_root` (usually the shared `libraries/` store).
pub fn active_paths(
    libraries: &[Library],
    ctx: &RuntimeContext,
    library_root: &Path,
    features: &BTreeSet<String>,
) -> (Vec<PathBuf>, Vec<PathBuf>) {
    let mut classpath = Vec::new();
    let mut natives = Vec::new();
    for library in libraries {
        if !library.is_active(ctx, features) {
            continue;
        }
        let Some(spec) = library.storage_spec(ctx) else {
            continue;
        };
        let path = library_root.join(spec.storage);
        if library.is_native() {
            natives.push(path);
        } else {
            classpath.push(path);
        }
    }
    (classpath, natives)
}

/// Joins library paths plus the game jar into a `-cp` string, deduplicating.
pub fn classpath_string(paths: &[PathBuf], main_jar: Option<&Path>) -> String {
    let mut all: Vec<&Path> = paths.iter().map(PathBuf::as_path).collect();
    if let Some(jar) = main_jar {
        all.push(jar);
    }
    let mut seen: HashSet<String> = HashSet::new();
    let mut joined = String::new();
    for path in all {
        let display = path.display().to_string();
        if display.is_empty() || !seen.insert(display.clone()) {
            continue;
        }
        if !joined.is_empty() {
            joined.push_str(separator());
        }
        joined.push_str(&display);
    }
    joined
}

/// Convenience: full profile-wide `-cp`.
pub fn profile_classpath(
    libraries: &[Library],
    ctx: &RuntimeContext,
    library_root: &Path,
    main_jar: Option<&Path>,
    features: &BTreeSet<String>,
) -> String {
    let (paths, _) = active_paths(libraries, ctx, library_root, features);
    classpath_string(&paths, main_jar)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn ctx() -> RuntimeContext {
        RuntimeContext::new("linux", "x86_64")
    }

    fn lib(json: &str) -> Library {
        serde_json::from_str(json).expect("library json")
    }

    fn no_features() -> BTreeSet<String> {
        BTreeSet::new()
    }

    const GUAVA: &str = r#"{ "name": "com.google.guava:guava:33.0.0-jre", "url": "https://e/" }"#;
    const LWJGL: &str = r#"{ "name": "org.lwjgl:lwjgl:3.3.3", "natives": { "linux": "natives-linux" },
        "downloads": { "classifiers": { "natives-linux": { "url": "https://e/l", "sha1": "a", "size": 1 } } } }"#;
    const INACTIVE: &str = r#"{ "name": "t:inactive:1", "rules": [{ "action": "disallow" }] }"#;

    #[test]
    fn splits_active_libraries_into_classpath_and_natives() {
        let libs = vec![lib(GUAVA), lib(LWJGL), lib(INACTIVE)];
        let root = Path::new("/store");
        let (classpath, natives) = active_paths(&libs, &ctx(), root, &no_features());
        assert_eq!(
            classpath,
            vec![PathBuf::from(
                "/store/com/google/guava/guava/33.0.0-jre/guava-33.0.0-jre.jar"
            )]
        );
        assert_eq!(
            natives,
            vec![PathBuf::from(
                "/store/org/lwjgl/lwjgl/3.3.3/lwjgl-3.3.3-natives-linux.jar"
            )]
        );

        let cp = classpath_string(&classpath, Some(Path::new("/store/game.jar")));
        assert_eq!(
            cp,
            "/store/com/google/guava/guava/33.0.0-jre/guava-33.0.0-jre.jar:/store/game.jar"
        );
    }

    #[test]
    fn classpath_deduplicates_and_skips_empty() {
        let paths = vec![PathBuf::from("/a"), PathBuf::from("/a"), PathBuf::new()];
        assert_eq!(classpath_string(&paths, Some(Path::new("/j"))), "/a:/j");
        assert_eq!(classpath_string(&[], None), "");
    }

    #[test]
    #[cfg(windows)]
    fn windows_separator_changes() {
        assert_eq!(separator(), ";");
    }
}
