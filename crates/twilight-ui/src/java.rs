// IPC bridge to twilight-runtime's JVM discovery, feeding the Settings page a
// preview of every auto-detected Java runtime with parsed versions.

use twilight_runtime::{JavaInstallation, discover_java};

/// Frontend-facing runtime view. `JavaInstallation` itself is not serde and
/// paths arrive pre-stringified so the webview never manipulates PathBufs.
#[derive(Clone, serde::Serialize)]
pub struct JavaRuntime {
    /// Parsed major (`8`, `17`, `21`, ...).
    pub major: i32,
    /// Original version string, e.g. `21.0.5`.
    pub version: String,
    /// JVM home directory (holds `bin/java`).
    pub home: String,
    /// Executable used for probes and for spawning the game.
    pub executable: String,
}

/// Newest first; ties keep a stable full-string order so the preview never
/// reshuffles between rescans.
fn to_sorted_runtimes(installations: Vec<JavaInstallation>) -> Vec<JavaRuntime> {
    let mut runtimes: Vec<JavaRuntime> = installations
        .into_iter()
        .map(|inst| JavaRuntime {
            major: inst.version.major,
            version: inst.version.full.clone(),
            home: inst.jvm_home.display().to_string(),
            executable: inst.executable.display().to_string(),
        })
        .collect();
    runtimes.sort_by(|a, b| {
        let key_a = (&a.major, &a.version);
        let key_b = (&b.major, &b.version);
        key_b.cmp(&key_a)
    });
    runtimes
}

#[tauri::command]
pub async fn discover_java_installations() -> Result<Vec<JavaRuntime>, String> {
    let installations = discover_java().await.map_err(|e| e.to_string())?;
    Ok(to_sorted_runtimes(installations))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sorting_puts_newest_major_first() {
        let make = |major: i32, full: &str| JavaInstallation {
            executable: std::path::PathBuf::from(format!("C:/jdk-{full}/bin/java.exe")),
            jvm_home: std::path::PathBuf::from(format!("C:/jdk-{full}")),
            version: twilight_runtime::JavaVersion {
                major,
                full: full.to_owned(),
            },
        };

        let runtimes = to_sorted_runtimes(vec![
            make(17, "17.0.9"),
            make(21, "21.0.5"),
            make(8, "1.8.0_392"),
        ]);
        let majors: Vec<i32> = runtimes.iter().map(|r| r.major).collect();
        assert_eq!(
            majors,
            vec![21, 17, 8],
            "newest major first regardless of input order"
        );
        assert_eq!(runtimes[0].version, "21.0.5");
        assert_eq!(runtimes[0].home, "C:/jdk-21.0.5");
        assert!(runtimes[0].executable.ends_with("bin/java.exe"));
    }
}
