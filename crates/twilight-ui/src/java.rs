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

/// Validates a user-picked Java executable and reports its version, the
/// Prism "Browse to java" step. Accepts a `bin/java[.exe]`, a `javaw.exe`, or
/// a JVM home directory, and rejects anything that does not answer a version
/// probe.
#[tauri::command]
pub async fn probe_java_path(path: String) -> Result<JavaRuntime, String> {
    let raw = path.trim();
    if raw.is_empty() {
        return Err("no Java path given".into());
    }
    let installation = twilight_runtime::probe_java_installation(std::path::Path::new(raw))
        .await
        .map_err(|e| format!("not a usable Java runtime ({raw}): {e}"))?;
    Ok(JavaRuntime {
        major: installation.version.major,
        version: installation.version.full,
        home: installation.jvm_home.display().to_string(),
        executable: installation.executable.display().to_string(),
    })
}

/// Downloads a Temurin JRE (JDK fallback) from Adoptium into the configured
/// "Java Runtimes" folder, probes it, registers it as a custom runtime and
/// selects it. Strictly user-triggered: no install happens without a click.
#[tauri::command]
pub async fn download_adoptium_java(
    app: tauri::AppHandle,
    major: i32,
) -> Result<JavaRuntime, String> {
    if !matches!(major, 8 | 17 | 21 | 25) {
        return Err(format!(
            "unsupported Java major {major}; expected 8, 17, 21 or 25"
        ));
    }
    let root = std::path::PathBuf::from(crate::storage::get_storage(app.clone()).await?.java_dir);
    let client = reqwest::Client::new();
    let installed = twilight_runtime::install_adoptium_java(
        &client,
        twilight_runtime::ADOPTIUM_API_BASE,
        &root,
        major,
    )
    .await
    .map_err(|e| e.to_string())?;
    let executable = installed.executable.display().to_string();
    crate::prefs::add_custom_java(app.clone(), executable.clone()).await?;
    crate::prefs::apply_java_runtime(app, Some(executable.clone())).await?;
    Ok(JavaRuntime {
        major: installed.version.major,
        version: installed.version.full,
        home: installed.jvm_home.display().to_string(),
        executable,
    })
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
