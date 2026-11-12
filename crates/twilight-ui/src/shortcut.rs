// Desktop shortcuts: one OS-native launcher shortcut per instance that boots
// this exact build straight into the instance via the `--launch <id>` startup
// flag. Windows gets a real `.lnk` (scripted through PowerShell's
// WScript.Shell COM), Linux an XDG `.desktop` entry, macOS a `.command`.

use std::path::Path;
use std::sync::OnceLock;

use tauri::AppHandle;

use crate::instances::{instances_root, validate_instance_id};

/// The instance id carried by the `--launch` command line, decided once at
/// boot and never mutated again.
static STARTUP_LAUNCH: OnceLock<Option<String>> = OnceLock::new();

/// Extracts the auto-launch target from a command line: `--launch <id>` or
/// `--launch=<id>`; anything else reads as "no auto-launch".
pub(crate) fn parse_startup_launch(argv: &[String]) -> Option<String> {
    for (i, arg) in argv.iter().enumerate() {
        if arg == "--launch" {
            return argv.get(i + 1).filter(|id| !id.is_empty()).cloned();
        }
        if let Some(rest) = arg.strip_prefix("--launch=") {
            let id = rest.trim();
            if !id.is_empty() {
                return Some(id.to_owned());
            }
        }
    }
    None
}

/// Boot hook: decides whether this process was started to auto-launch an
/// instance (a desktop-shortcut double-click).
pub(crate) fn init_startup_launch(argv: &[String]) {
    let _ = STARTUP_LAUNCH.set(parse_startup_launch(argv));
}

/// The pending auto-launch target for the UI (it fires once instances load).
#[tauri::command]
pub fn get_startup_launch() -> Option<String> {
    STARTUP_LAUNCH
        .get()
        .and_then(|launch| launch.as_deref())
        .map(str::to_owned)
}

/// Creates a desktop shortcut whose target is this executable with
/// `--launch <id>`. Returns the created file's path.
#[tauri::command]
pub async fn create_desktop_shortcut(
    app: AppHandle,
    instance_id: String,
) -> Result<String, String> {
    validate_instance_id(&instance_id)?;
    let root = instances_root(&app).await?;
    // the display name comes from the same scan the grid uses, so native and
    // Prism instances get their proper labels
    let row = crate::instance::scan_instances_in(&root)
        .await?
        .into_iter()
        .find(|row| row.id == instance_id)
        .ok_or_else(|| format!("unknown instance {instance_id}"))?;
    let exe =
        std::env::current_exe().map_err(|e| format!("cannot resolve the app executable: {e}"))?;
    let workdir = exe.parent().map(Path::to_path_buf).unwrap_or_default();
    let name = shortcut_file_name(&row.name);
    tokio::task::spawn_blocking(move || create_shortcut_file(&name, &exe, &workdir, &instance_id))
        .await
        .map_err(|e| e.to_string())?
}

/// Windows-safe base file name for the shortcut: separators and reserved
/// characters collapse to `_`, leading/trailing spaces and dots are trimmed.
fn shortcut_file_name(label: &str) -> String {
    let cleaned: String = label
        .chars()
        .map(|c| {
            if matches!(c, '/' | '\\' | ':' | '*' | '?' | '"' | '<' | '>' | '|') || c.is_control() {
                '_'
            } else {
                c
            }
        })
        .collect();
    let trimmed = cleaned.trim_matches(|c| c == ' ' || c == '.' || c == '_');
    if trimmed.is_empty() {
        "instance".to_owned()
    } else {
        trimmed.to_owned()
    }
}

#[cfg(windows)]
fn create_shortcut_file(
    name: &str,
    exe: &Path,
    workdir: &Path,
    id: &str,
) -> Result<String, String> {
    let script = windows_shortcut_script(
        name,
        &exe.display().to_string(),
        &workdir.display().to_string(),
        id,
    );
    let output = std::process::Command::new("powershell")
        .args(["-NoProfile", "-NonInteractive", "-Command", &script])
        .output()
        .map_err(|e| format!("cannot run PowerShell: {e}"))?;
    if !output.status.success() {
        let detail = String::from_utf8_lossy(&output.stderr).trim().to_owned();
        return Err(if detail.is_empty() {
            let code = output.status;
            format!("PowerShell exited with {code}")
        } else {
            detail
        });
    }
    let stdout = String::from_utf8_lossy(&output.stdout);
    let created = stdout
        .lines()
        .rev()
        .map(str::trim)
        .find(|line| !line.is_empty())
        .unwrap_or("");
    if !created.is_empty() && Path::new(created).is_file() {
        Ok(created.to_owned())
    } else {
        Err("the shortcut did not appear on the Desktop".into())
    }
}

/// Builds the WScript.Shell script that writes the `.lnk`. The Desktop path
/// is resolved by PowerShell itself so OneDrive-redirected desktops work.
/// Single quotes only — with `''` doubling — so the string survives
/// PowerShell's own parser with no double-quote hazards.
#[cfg(windows)]
fn windows_shortcut_script(file_name: &str, exe: &str, workdir: &str, id: &str) -> String {
    format!(
        "$ErrorActionPreference = 'Stop'; \
         $desktop = [Environment]::GetFolderPath('Desktop'); \
         New-Item -ItemType Directory -Force -Path $desktop | Out-Null; \
         $ws = New-Object -ComObject WScript.Shell; \
         $sc = $ws.CreateShortcut((Join-Path $desktop '{file}')); \
         $sc.TargetPath = '{exe}'; \
         $sc.Arguments = '--launch {id}'; \
         $sc.WorkingDirectory = '{wd}'; \
         $sc.IconLocation = '{exe},0'; \
         $sc.Save(); \
         Write-Output $sc.FullName",
        file = ps_single(file_name),
        exe = ps_single(exe),
        id = ps_single(id),
        wd = ps_single(workdir),
    )
}

/// Escapes a value for a PowerShell single-quoted string (`'` doubles).
#[cfg(windows)]
fn ps_single(value: &str) -> String {
    value.replace('\'', "''")
}

#[cfg(target_os = "macos")]
fn create_shortcut_file(
    name: &str,
    exe: &Path,
    _workdir: &Path,
    id: &str,
) -> Result<String, String> {
    let path = desktop_dir()?.join(format!("{name}.command"));
    let script = format!(
        "#!/bin/sh\nexec {} --launch {}\n",
        sh_single(&exe.display().to_string()),
        sh_single(id),
    );
    std::fs::write(&path, script).map_err(|e| e.to_string())?;
    make_executable(&path)?;
    Ok(path.display().to_string())
}

#[cfg(all(unix, not(target_os = "macos")))]
fn create_shortcut_file(
    name: &str,
    exe: &Path,
    workdir: &Path,
    id: &str,
) -> Result<String, String> {
    let path = desktop_dir()?.join(format!("{name}.desktop"));
    let content = format!(
        "[Desktop Entry]\n\
         Type=Application\n\
         Name={name}\n\
         Comment=Launch {name} with TwilightMC\n\
         Exec={} --launch {}\n\
         Path={}\n\
         Terminal=false\n\
         Categories=Game;\n",
        exec_arg(&exe.display().to_string()),
        exec_arg(id),
        workdir.display(),
    );
    std::fs::write(&path, content).map_err(|e| e.to_string())?;
    make_executable(&path)?;
    Ok(path.display().to_string())
}

/// The user's Desktop on unix, created when absent.
#[cfg(unix)]
fn desktop_dir() -> Result<std::path::PathBuf, String> {
    let home = std::env::var_os("HOME").ok_or("HOME is not set; cannot locate the Desktop")?;
    let dir = std::path::PathBuf::from(home).join("Desktop");
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir)
}

/// Double-quoted argument for a `.desktop` Exec line (backslash escapes).
#[cfg(all(unix, not(target_os = "macos")))]
fn exec_arg(value: &str) -> String {
    format!("\"{}\"", value.replace('\\', "\\\\").replace('"', "\\\""))
}

/// Single-quoted argument for a POSIX shell script (`'` → `'\''`).
#[cfg(target_os = "macos")]
fn sh_single(value: &str) -> String {
    format!("'{}'", value.replace('\'', "'\\''"))
}

#[cfg(unix)]
fn make_executable(path: &Path) -> Result<(), String> {
    use std::os::unix::fs::PermissionsExt;
    let mut perms = std::fs::metadata(path)
        .map_err(|e| e.to_string())?
        .permissions();
    perms.set_mode(0o755);
    std::fs::set_permissions(path, perms).map_err(|e| e.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    fn argv(items: &[&str]) -> Vec<String> {
        items.iter().map(|s| s.to_string()).collect()
    }

    #[test]
    fn startup_launch_reads_both_flag_shapes() {
        assert_eq!(
            parse_startup_launch(&argv(&["exe", "--launch", "demo-1"])),
            Some("demo-1".to_owned())
        );
        assert_eq!(
            parse_startup_launch(&argv(&["exe", "--launch=demo-2"])),
            Some("demo-2".to_owned())
        );
        assert_eq!(parse_startup_launch(&argv(&["exe"])), None);
        assert_eq!(parse_startup_launch(&argv(&["exe", "--launch"])), None);
        assert_eq!(parse_startup_launch(&argv(&["exe", "--launch="])), None);
        assert_eq!(parse_startup_launch(&argv(&["exe", "--launch", ""])), None);
    }

    #[test]
    fn shortcut_names_are_filesystem_safe() {
        assert_eq!(shortcut_file_name("My: Game?"), "My_ Game");
        assert_eq!(shortcut_file_name("a/b\\c"), "a_b_c");
        assert_eq!(shortcut_file_name("  .dots. "), "dots");
        assert_eq!(shortcut_file_name("///"), "instance");
    }

    #[cfg(windows)]
    #[test]
    fn windows_script_quotes_safely_and_launches() {
        let script = windows_shortcut_script(
            "Demo's",
            r"C:\Program Files\app.exe",
            r"C:\Program Files",
            "demo's",
        );
        // no double quotes anywhere: the payload survives one level of
        // Windows command-line quoting untouched
        assert!(!script.contains('"'));
        assert!(
            script.contains("--launch demo''s"),
            "ps_single applied: {script}"
        );
        assert!(script.contains("CreateShortcut((Join-Path $desktop 'Demo''s'))"));
        assert!(script.contains("C:\\Program Files\\app.exe"));
        assert!(script.contains("WScript.Shell"));
    }

    #[cfg(windows)]
    #[test]
    fn ps_single_doubles_quotes_only() {
        assert_eq!(ps_single("plain"), "plain");
        assert_eq!(ps_single("it's"), "it''s");
        assert_eq!(ps_single("a'b'c"), "a''b''c");
    }

    #[cfg(all(unix, not(target_os = "macos")))]
    #[test]
    fn desktop_exec_args_escape_quotes() {
        assert_eq!(exec_arg("/opt/app"), "\"/opt/app\"");
        assert_eq!(exec_arg(r#"we"ird\path"#), "\"we\\\\\\\"ird\\\\path\"");
    }
}
