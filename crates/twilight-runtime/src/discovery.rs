//! System-wide JVM discovery.
//!
//! Scan roots per OS:
//! - Linux: `/usr/lib/jvm/`, `/usr/java/`, `/opt/jdk/`
//! - Windows: `C:\Program Files\Java\`, `C:\Program Files\Eclipse Adoptium\`,
//!   plus `HKLM\SOFTWARE\JavaSoft` registry fallback via `reg query`
//! - macOS: `/Library/Java/JavaVirtualMachines/`
//!
//! PATH hits and `JAVA_HOME` are honored everywhere, in that priority order.

use std::collections::BTreeSet;
use std::path::{Path, PathBuf};

use crate::error::RuntimeError;
use crate::version::{
    JavaInstallation, java_executable_relative, probe_version, release_file_version,
};

/// Candidate JVM root directories on the current platform, most-likely first.
pub fn candidate_jvm_roots() -> Vec<PathBuf> {
    let mut roots = Vec::new();
    if cfg!(target_os = "macos") {
        roots.push(PathBuf::from("/Library/Java/JavaVirtualMachines"));
    }
    if cfg!(target_os = "windows") {
        // `Program Files` may be relocated; use the system refs as the base
        for dir in [
            "C:\\Program Files\\Java",
            "C:\\Program Files\\Eclipse Adoptium",
        ] {
            roots.push(PathBuf::from(dir));
        }
    }
    if cfg!(target_os = "linux") {
        for dir in ["/usr/lib/jvm", "/usr/java", "/opt/jdk"] {
            roots.push(PathBuf::from(dir));
        }
    }
    roots
}

/// JVM roots referenced by the `JAVA_HOME` environment variable (single entry).
fn java_home_root() -> Vec<PathBuf> {
    std::env::var_os("JAVA_HOME")
        .map(Into::<PathBuf>::into)
        .filter(|p| !p.as_os_str().is_empty())
        .map(|p| vec![p])
        .unwrap_or_default()
}

/// Deducible JVM homes from every `PATH` entry holding a `java` binary; the
/// home is the parent directory of `bin/`.
fn path_jvm_homes() -> Vec<PathBuf> {
    let Some(path_var) = std::env::var_os("PATH") else {
        return Vec::new();
    };
    let exe = if cfg!(windows) { "java.exe" } else { "java" };
    let mut homes = Vec::new();
    for dir in std::env::split_paths(&path_var) {
        let candidate = dir.join(exe);
        if candidate.is_file()
            && let Some(home) = candidate
                .parent()
                .and_then(Path::parent)
                .map(Into::<PathBuf>::into)
        {
            homes.push(home);
        }
    }
    homes
}

/// Resolves `<jvm_home>/<bin/java>` to the executable when it exists.
fn java_executable_in(home: &Path) -> Option<PathBuf> {
    let exe = home.join(java_executable_relative());
    exe.is_file().then_some(exe)
}

/// Recovers the JVM home from a standalone java executable path (`<home>/bin/java`).
pub fn jvm_home_from_executable(executable: &Path) -> Option<PathBuf> {
    executable
        .parent()
        .and_then(Path::parent)
        .map(Into::<PathBuf>::into)
}

/// Interrogates every candidate JVM home: reads `<home>/release` first, and
/// falls back to an async `<java> -version` probe when the marker file is missing.
/// Duplicate JVM homes are probed once.
pub async fn scan_roots(homes: Vec<PathBuf>) -> Vec<JavaInstallation> {
    let mut seen = BTreeSet::new();
    let mut installations = Vec::new();
    for home in homes {
        let canonical = fs_canonicalize(&home).await.unwrap_or(home.clone());
        if !seen.insert(canonical.display().to_string()) {
            continue;
        }
        let Some(executable) = java_executable_in(&canonical) else {
            // Home without a runnable `bin/java`: not an installation
            continue;
        };
        let version = match release_file_version(&canonical) {
            Some(v) => Some(v),
            None => probe_version(executable.as_path()).await.ok(),
        };
        let Some(version) = version else { continue };
        installations.push(JavaInstallation {
            executable,
            jvm_home: canonical,
            version,
        });
    }
    installations
}

/// Wraps tokio's canonicalize, surfacing only successful readlinks/resolutions.
async fn fs_canonicalize(path: &Path) -> std::io::Result<PathBuf> {
    tokio::fs::canonicalize(path).await
}

/// Full system scan: dedup PATH homes, `JAVA_HOME`, OS roots (expanded one
/// level for each JVM bundle) and Windows registry `JavaHome` values.
/// Probing failures are swallowed — absence of JDKs is not an error condition.
pub async fn discover_java() -> Result<Vec<JavaInstallation>, RuntimeError> {
    let mut homes = Vec::new();
    homes.extend(path_jvm_homes());
    homes.extend(java_home_root());
    for root in candidate_jvm_roots() {
        // each direct child of the root is a candidate home (bundled JDK dirs),
        // plus the root itself when it is already a home
        if java_executable_in(&root).is_some() {
            homes.push(root.clone());
        }
        match read_dir_sorted(&root).await {
            Ok(children) => homes.extend(children),
            Err(_) => { /* missing standard root: normal on most systems */ }
        }
    }
    #[cfg(target_os = "windows")]
    if let Some(mut registry_homes) = windows_registry_java_homes().await {
        homes.append(&mut registry_homes);
    }
    Ok(scan_roots(homes).await)
}

/// Deterministic read of a directory's direct children.
async fn read_dir_sorted(dir: &Path) -> std::io::Result<Vec<PathBuf>> {
    let mut read = tokio::fs::read_dir(dir).await?;
    let mut entries = Vec::new();
    while let Some(entry) = read.next_entry().await? {
        if entry.path().is_dir() {
            entries.push(entry.path());
        }
    }
    entries.sort();
    Ok(entries)
}

/// Asks `reg query` (no winreg crate) for `HKLM\SOFTWARE\JavaSoft` `JavaHome`
/// values; returns `None` when the hive is not present at all.
#[cfg(target_os = "windows")]
async fn windows_registry_java_homes() -> Option<Vec<PathBuf>> {
    let output = tokio::process::Command::new("reg")
        .args(["query", r"HKLM\SOFTWARE\JavaSoft", "/s", "/v", "JavaHome"])
        .output()
        .await
        .ok()?;
    let text = String::from_utf8_lossy(&output.stdout);
    let homes = parse_reg_java_home_output(&text);
    if homes.is_empty() { None } else { Some(homes) }
}

/// Pure parser for `reg query ... /v JavaHome` output rows. Values keep their
/// embedded spaces (`C:\Program Files\Java\jdk-21`), so whitespace splitting
/// cannot be used — everything after `REG_SZ` is the path.
pub fn parse_reg_java_home_output(text: &str) -> Vec<PathBuf> {
    text.lines()
        .filter(|line| line.contains("JavaHome") && line.contains("REG_SZ"))
        .filter_map(|line| {
            let pos = line.find("REG_SZ")?;
            let value = line[pos + "REG_SZ".len()..].trim();
            (!value.is_empty()).then(|| PathBuf::from(value))
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn jvm_home_from_executable_walks_up_bin() {
        let home = PathBuf::from("/usr/lib/jvm/jdk-21");
        let exe = home.join("bin/java");
        assert_eq!(
            jvm_home_from_executable(&exe).as_deref(),
            Some(home.as_path())
        );
    }

    #[test]
    fn registry_parser_extracts_every_java_home_row() {
        // real `reg query ... /s /v JavaHome` rows keep the `\r` from CRLF endings
        // and values contain spaces, so naive whitespace splitting would truncate
        let sample = "HKLM\\SOFTWARE\\JavaSoft\\Java Runtime Environment\\21\r\n    \
            JavaHome    REG_SZ    C:\\Program Files\\Java\\jdk-21\r\n\r\n\
        HKLM\\SOFTWARE\\JavaSoft\\Java Runtime Environment\\17\r\n    \
            JavaHome    REG_SZ    C:\\Program Files\\Eclipse Adoptium\\jdk-17\r\n\r\n\
        HKLM\\broken    REG_SZ    some-other-value\r\n";
        let homes = parse_reg_java_home_output(sample);
        assert_eq!(
            homes,
            vec![
                PathBuf::from(r"C:\Program Files\Java\jdk-21"),
                PathBuf::from(r"C:\Program Files\Eclipse Adoptium\jdk-17"),
            ],
            "only JavaHome rows carry resolvable values"
        );
    }

    #[cfg(not(target_os = "windows"))]
    #[tokio::test]
    async fn scan_roots_skips_homes_without_java_binary() {
        let temp = std::env::temp_dir().join(format!("twi-jvm-{}", std::process::id()));
        let broken = temp.join("broken-home");
        tokio::fs::create_dir_all(&broken).await.unwrap();
        let good = temp.join("good-home");
        tokio::fs::create_dir_all(good.join("bin")).await.unwrap();
        tokio::fs::write(good.join("bin/java"), format!("#!/bin/sh\necho ok\n"))
            .await
            .unwrap();

        let found = scan_roots(vec![broken, good]).await;
        assert_eq!(found.len(), 1, "only the home with bin/java is probed");
        assert_eq!(found[0].jvm_home, good);
        let _ = tokio::fs::remove_dir_all(&temp).await;
    }
}
