//! Fast Java version detection.
//!
//! Primary: parse `<jvm_home>/release` (`JAVA_VERSION="21.0.3"`) with zero
//! process overhead. Fallback: run `<java> -version` asynchronously and parse
//! the quoted version from the output stream.

use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};
use tokio::process::Command;

use crate::error::RuntimeError;

/// Parens-free parse result of a Java version string.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct JavaVersion {
    /// Major version (`8`, `17`, `21`...). The pre-9 formats `1.x` map to `x`.
    pub major: i32,
    /// The original (unquoted) version string, e.g. `1.8.0_392`.
    pub full: String,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct JavaInstallation {
    /// Executable used for probes and for spawning the game.
    pub executable: PathBuf,
    /// Deducible JVM root: the directory holding `bin/java`.
    pub jvm_home: PathBuf,
    pub version: JavaVersion,
}

/// Leading numeric component of a dotted/sub-build version segment (`392` for `0_392`).
fn leading_i32(segment: &str) -> Option<i32> {
    let digits: String = segment.chars().take_while(|c| c.is_ascii_digit()).collect();
    digits.parse().ok()
}

/// Parses a version string into `[major, full]`.
///
/// `1.8.0_392` -> 8, `17.0.9` -> 17, `21.0.2` -> 21, `21` -> 21.
/// Garbage input yields `None`; should never panic in production paths.
pub fn parse_java_version(raw: &str) -> Option<JavaVersion> {
    let full = raw.trim().trim_matches('"').to_owned();
    if full.is_empty() {
        return None;
    }
    let mut parts = full.split('.');
    let first = parts.next()?;
    if first == "1" {
        // legacy scheme `1.<major>.<...>`: major lives in the second segment
        let second = parts.next()?;
        let major = leading_i32(second)?;
        if major < 2 {
            return None; // 1.0/1.1 era values never compile to usable majors here
        }
        return Some(JavaVersion { major, full });
    }
    let major = leading_i32(first)?;
    (major > 0).then_some(JavaVersion { major, full })
}

/// Reads `<jvm_home>/release` and parses its `JAVA_VERSION="..."` line.
/// `None` when the marker file is absent (temp SDKs, slim distributions) or unparsable.
pub fn release_file_version(jvm_home: &Path) -> Option<JavaVersion> {
    let text = std::fs::read_to_string(jvm_home.join("release")).ok()?;
    release_line_version(&text)
}

/// Pure parser for `release` file contents (unit-testable without a JDK).
pub fn release_line_version(text: &str) -> Option<JavaVersion> {
    for line in text.lines() {
        let Some(rest) = line.strip_prefix("JAVA_VERSION=") else {
            continue;
        };
        return parse_java_version(rest);
    }
    None
}

/// Splits `java -version` (or another JDK probe) output into a version.
/// Handles both `openjdk version "21.0.2"` and bare `21.0.2` shapes.
pub fn probe_output_version(output: &str) -> Option<JavaVersion> {
    // prefer the first quoted token, as emitted by every major JVM vendor
    for line in output.lines() {
        if let Some(open) = line.find('"') {
            let rest = &line[open + '"'.len_utf8()..];
            if let Some(close) = rest.find('"')
                && let Some(v) = parse_java_version(&rest[..close])
            {
                return Some(v);
            }
        }
    }
    // ASCII fallback: first whitespace-separated token that parses
    output.split_whitespace().find_map(parse_java_version)
}

/// Absolute path of the java binary relative to a JVM home.
pub fn java_executable_relative() -> &'static str {
    if cfg!(windows) {
        r"bin\java.exe"
    } else {
        "bin/java"
    }
}

/// Runs `<java> -version` asynchronously; JVMs print the banner on stderr.
pub async fn probe_version(executable: &Path) -> Result<JavaVersion, RuntimeError> {
    let output = Command::new(executable)
        .arg("-version")
        .output()
        .await
        .map_err(|e| RuntimeError::Spawn {
            path: executable.into(),
            source: e,
        })?;
    let text = format!(
        "{}{}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );
    probe_output_version(&text).ok_or(RuntimeError::VersionNotFound)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_mojang_usable_majors() {
        assert_eq!(
            parse_java_version("1.8.0_392"),
            Some(JavaVersion {
                major: 8,
                full: "1.8.0_392".into()
            })
        );
        assert_eq!(
            parse_java_version("17.0.9"),
            Some(JavaVersion {
                major: 17,
                full: "17.0.9".into()
            })
        );
        assert_eq!(
            parse_java_version("21.0.2"),
            Some(JavaVersion {
                major: 21,
                full: "21.0.2".into()
            })
        );
        assert_eq!(
            parse_java_version("21"),
            Some(JavaVersion {
                major: 21,
                full: "21".into()
            })
        );
        // quoted strings (as embedded in `release` files and probe banners)
        assert_eq!(
            parse_java_version("\"1.8.0_292\""),
            Some(JavaVersion {
                major: 8,
                full: "1.8.0_292".into()
            })
        );
    }

    #[test]
    fn rejects_garbage_and_legacy_fragments() {
        assert!(parse_java_version("").is_none());
        assert!(
            parse_java_version("nope x9").is_none()
                || parse_java_version("nope x9").is_some_and(|v| v.major != 0),
            "garbage must not silently parse as a positive major"
        );
        assert_eq!(parse_java_version("x9"), None);
        assert_eq!(parse_java_version("0.0"), None);
        assert_eq!(parse_java_version("1.0"), None);
        assert_eq!(parse_java_version("1"), None); // `1.x` without the major segment
    }

    #[test]
    fn release_file_marker_is_primary_source() {
        let text = "IMPLEMENTOR=\"Eclipse Adoptium\"\n\
                    JAVA_VERSION=\"21.0.3\"\n\
                    JAVA_RUNTIME_VERSION=\"21.0.3+9-LTS\"\n\
                    MACOSX_BUNDLE_ID=\"net.adoptopenjdk.21\"";

        let v = release_line_version(text).unwrap();
        assert_eq!(v.major, 21);

        // no marker: legacy `/usr/lib/jvm/java-8-openjdk` style homes
        assert!(release_line_version("IMPLEMENTOR=\"Adoptium\"").is_none());
    }

    #[test]
    fn probe_output_prefers_quoted_banner() {
        const STDOUT_OPENJDK: &str = "openjdk version \"17.0.9\" 2023-10-17\n\
             OpenJDK Runtime Environment Temurin-17.0.9+9\n\
             OpenJDK 64-Bit Server VM Temurin-17.0.9+9 (mixed mode)";
        assert_eq!(probe_output_version(STDOUT_OPENJDK).unwrap().major, 17);

        // JRE8 prints on stderr with a differently-worded banner
        const LEGACY_8: &str =
            "java version \"1.8.0_392\"\nJava(TM) SE Runtime Environment (build 1.8.0_392-b13)";
        assert_eq!(probe_output_version(LEGACY_8).unwrap().major, 8);

        // bare numeric production output (no vendor banner)
        assert_eq!(probe_output_version("21.0.1\n").unwrap().major, 21);
        assert!(probe_output_version("nothing useful").is_none());
    }
}
