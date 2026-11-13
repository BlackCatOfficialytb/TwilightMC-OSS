//! Prism/Freesm-style pre-launch diagnostic header: launcher identity, auth
//! mode, service DNS answers, OS/CPU/RAM/GPU snapshot, components, libraries
//! and the fully assembled argument lists. The block is rendered as plain
//! lines so hosts (CLI stdout and the desktop console drawer) print it
//! verbatim; the final `Minecraft process ID` line is appended by the spawn
//! pump's `Started` event, right after the child exists.

use std::time::Duration;

use twilight_auth::{Account, AccountType};

/// Header identity line: the product version in release-tag form
/// (`alpha-v0.4.0` — Bolide channel taxonomy, see VERSION.md).
pub const VERSION_LABEL: &str = concat!("alpha-v", env!("CARGO_PKG_VERSION"));

/// The game-window default the launcher never overrides.
pub const DEFAULT_WINDOW_SIZE: &str = "854 x 480";

/// Mojang/Microsoft endpoints whose reachability the header reports.
pub const SERVICE_HOSTS: [&str; 4] = [
    "login.microsoftonline.com",
    "session.minecraft.net",
    "textures.minecraft.net",
    "api.mojang.com",
];

/// Per-lookup DNS budget so offline machines never stall the launch.
const DNS_TIMEOUT: Duration = Duration::from_millis(800);
/// GPU vendor queries spawn a one-shot command; PowerShell's cold start can
/// exceed 2s on first use, so the cap stays generous (worst case only when
/// the query is failing anyway).
const GPU_TIMEOUT: Duration = Duration::from_secs(4);

/// OS/CPU/RAM/GPU snapshot rendered into the header.
#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct Hardware {
    /// `<OS name> <OS version>`, e.g. `Windows 11 (Build 26100)`.
    pub os: String,
    /// CPU brand string, e.g. `AMD Ryzen 7 5800X 8-Core Processor`.
    pub cpu: String,
    pub ram_total_mib: u64,
    pub ram_available_mib: u64,
    /// `64-bit` / `32-bit`, derived from the CPU architecture word size.
    pub arch: &'static str,
    /// Comma-joined adapter names, or `Unknown` when the platform query fails.
    pub gpu: String,
}

/// Every header input except the spawn PID. Plain data on purpose: the
/// renderer is pure and unit-testable end to end.
#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct DiagnosticInfo {
    /// Header identity tag (`alpha-v0.4.0`).
    pub version: String,
    /// `online` / `offline` / `custom` — the account actually being used.
    pub auth_mode: String,
    /// `(host, "ip, ip" | "skipped/unreachable")` per service endpoint.
    pub dns: Vec<(String, String)>,
    /// Game working directory (`${game_directory}`).
    pub game_dir: String,
    /// Java executable that will spawn.
    pub java_path: String,
    /// Full JVM version string, or `unknown` when probing failed.
    pub java_version: String,
    pub hardware: Hardware,
    /// Pre-formatted component lines (loader first, then Minecraft).
    pub components: Vec<String>,
    pub main_class: String,
    /// Active trait set; empty prints `none`.
    pub traits: Vec<String>,
    /// One full jar path per line: loader libraries, then vanilla, then the
    /// client jar (classpath order).
    pub libraries: Vec<String>,
    /// One native jar path per line.
    pub native_libraries: Vec<String>,
    pub natives_dir: String,
    /// Game arguments; `--accessToken` values are masked when rendered.
    pub game_args: Vec<String>,
    pub jvm_args: Vec<String>,
}

/// Auth-mode label derived from the account actually used; flips honestly
/// when online accounts land.
pub fn auth_mode_name(account: &Account) -> &'static str {
    match &account.account_type {
        AccountType::Offline => "offline",
        AccountType::Microsoft => "online",
        AccountType::CustomYggdrasil { .. } => "custom",
    }
}

/// Replaces every `--accessToken` value with `********` (paired and `=`
/// joined forms) so tokens never land in the console.
pub fn mask_access_token(args: &[String]) -> Vec<String> {
    let mut out = Vec::with_capacity(args.len());
    let mut mask_next = false;
    for arg in args {
        if mask_next {
            out.push("********".to_owned());
            mask_next = false;
        } else if arg == "--accessToken" {
            mask_next = true;
            out.push(arg.clone());
        } else if arg.starts_with("--accessToken=") {
            out.push("--accessToken=********".to_owned());
        } else {
            out.push(arg.clone());
        }
    }
    out
}

/// Resolves one host with the [`DNS_TIMEOUT`] budget; failures and timeouts
/// render as the shared `skipped/unreachable` answer.
async fn resolve_one(host: &str) -> (String, String) {
    let answer = match tokio::time::timeout(DNS_TIMEOUT, tokio::net::lookup_host((host, 0))).await {
        Ok(Ok(addrs)) => {
            let mut ips: Vec<String> = Vec::new();
            for address in addrs {
                let ip = address.ip().to_string();
                if !ips.contains(&ip) {
                    ips.push(ip);
                }
            }
            if ips.is_empty() {
                "skipped/unreachable".to_owned()
            } else {
                ips.join(", ")
            }
        }
        _ => "skipped/unreachable".to_owned(),
    };
    (host.to_owned(), answer)
}

/// Resolves every [`SERVICE_HOSTS`] entry concurrently (worst case one
/// timeout, not four in sequence).
pub async fn resolve_service_hosts() -> Vec<(String, String)> {
    let lookups = SERVICE_HOSTS.iter().map(|host| resolve_one(host));
    futures::future::join_all(lookups).await
}

/// Queries the GPU adapter names per OS:
/// PowerShell `Win32_VideoController` (Windows), `lspci` (Linux),
/// `system_profiler` (macOS). Any failure degrades to `Unknown`.
pub async fn gpu_names() -> String {
    let names = query_gpu().await.unwrap_or_default();
    if names.is_empty() {
        "Unknown".to_owned()
    } else {
        names.join(", ")
    }
}

async fn query_gpu() -> Option<Vec<String>> {
    use std::process::Stdio;

    use tokio::process::Command;

    let mut cmd = match std::env::consts::OS {
        "windows" => {
            let mut cmd = Command::new("powershell");
            cmd.args([
                "-NoProfile",
                "-Command",
                "(Get-CimInstance Win32_VideoController).Name",
            ]);
            cmd
        }
        "linux" => {
            let mut cmd = Command::new("lspci");
            cmd.arg("-nn");
            cmd
        }
        "macos" => {
            let mut cmd = Command::new("system_profiler");
            cmd.arg("SPDisplaysDataType");
            cmd
        }
        _ => return None,
    };
    cmd.stdin(Stdio::null())
        .stdout(Stdio::piped())
        .stderr(Stdio::null());
    // never flash a console window on Windows
    #[cfg(windows)]
    cmd.creation_flags(0x0800_0000); // CREATE_NO_WINDOW

    let output = tokio::time::timeout(GPU_TIMEOUT, cmd.output())
        .await
        .ok()?
        .ok()?;
    if !output.status.success() {
        return None;
    }
    let text = String::from_utf8_lossy(&output.stdout);
    let names = match std::env::consts::OS {
        "windows" => parse_windows_gpu_names(&text),
        "linux" => parse_lspci_gpu_names(&text),
        "macos" => parse_macos_gpu_names(&text),
        _ => Vec::new(),
    };
    if names.is_empty() { None } else { Some(names) }
}

/// One adapter name per output line.
fn parse_windows_gpu_names(text: &str) -> Vec<String> {
    let mut names: Vec<String> = Vec::new();
    for line in text.lines() {
        let name = line.trim();
        if !name.is_empty() && !names.iter().any(|known| known == name) {
            names.push(name.to_owned());
        }
    }
    names
}

/// Keeps `VGA compatible controller` / `3D` / `Display controller` entries
/// (`01:00.0 VGA compatible controller: NVIDIA Corporation GA104 [...]`).
fn parse_lspci_gpu_names(text: &str) -> Vec<String> {
    let mut names: Vec<String> = Vec::new();
    for line in text.lines() {
        if !line.contains("VGA compatible controller")
            && !line.contains("3D controller")
            && !line.contains("Display controller")
        {
            continue;
        }
        let Some((_, name)) = line.split_once("controller: ") else {
            continue;
        };
        let name = name.trim();
        if !name.is_empty() && !names.iter().any(|known| known == name) {
            names.push(name.to_owned());
        }
    }
    names
}

/// Collects `Chipset Model:` entries from `system_profiler SPDisplaysDataType`.
fn parse_macos_gpu_names(text: &str) -> Vec<String> {
    let mut names: Vec<String> = Vec::new();
    for line in text.lines() {
        let Some((label, name)) = line.split_once("Chipset Model:") else {
            continue;
        };
        // the label column must be indentation, not data text
        if !label.trim().is_empty() {
            continue;
        }
        let name = name.trim();
        if !name.is_empty() && !names.iter().any(|known| known == name) {
            names.push(name.to_owned());
        }
    }
    names
}

/// OS/CPU/RAM snapshot via sysinfo, then the async GPU query, all as one
/// awaited call.
pub async fn collect_hardware() -> Hardware {
    let gpu = gpu_names().await;

    let fallback = Hardware {
        os: "Unknown OS".to_owned(),
        cpu: "Unknown CPU".to_owned(),
        ram_total_mib: 0,
        ram_available_mib: 0,
        arch: "64-bit",
        gpu: gpu.clone(),
    };
    let Ok(mut system) = sysinfo::System::new() else {
        return fallback;
    };
    system.refresh_cpu_all();
    system.refresh_memory();

    let arch = sysinfo::System::cpu_arch();
    let arch = if arch.contains("64") {
        "64-bit"
    } else {
        "32-bit"
    };
    let os = format!(
        "{} {}",
        sysinfo::System::name().unwrap_or_else(|_| "Unknown OS".to_owned()),
        sysinfo::System::os_version().unwrap_or_default(),
    )
    .trim()
    .to_owned();
    let cpu = system
        .cpus()
        .first()
        .map(|cpu| cpu.brand().trim().to_owned())
        .filter(|brand| !brand.is_empty())
        .unwrap_or_else(|| "Unknown CPU".to_owned());

    Hardware {
        os,
        cpu,
        ram_total_mib: system.total_memory() / 1024 / 1024,
        ram_available_mib: system.available_memory() / 1024 / 1024,
        arch,
        gpu,
    }
}

/// Renders the whole header except the `Minecraft process ID` line, which the
/// spawn pump appends the moment the child exists.
pub fn header_lines(info: &DiagnosticInfo) -> Vec<String> {
    let mut lines = Vec::new();
    lines.push(format!(
        "TwilightMC Bolide version: {} (official)",
        info.version
    ));
    lines.push(String::new());
    lines.push(format!("Launched instance in {} mode", info.auth_mode));
    lines.push(String::new());
    for (host, answer) in &info.dns {
        lines.push(format!("{host} resolves to:"));
        lines.push(format!("  {answer}"));
    }
    lines.push(String::new());
    lines.push("Minecraft folder is:".to_owned());
    lines.push(format!("  {}", info.game_dir));
    lines.push(String::new());
    lines.push("Java path is:".to_owned());
    lines.push(format!("  {}", info.java_path));
    lines.push(format!(
        "Java is version {}, using {} architecture",
        info.java_version, info.hardware.arch
    ));
    lines.push(String::new());
    lines.push(format!("OS: {}", info.hardware.os));
    lines.push(format!("CPU: {}", info.hardware.cpu));
    lines.push(format!(
        "RAM: {} MiB (available: {} MiB)",
        info.hardware.ram_total_mib, info.hardware.ram_available_mib
    ));
    lines.push(format!("GPU: {}", info.hardware.gpu));
    lines.push(String::new());
    lines.push("Components:".to_owned());
    for (index, component) in info.components.iter().enumerate() {
        lines.push(format!("  {}) {component}", index + 1));
    }
    lines.push(String::new());
    lines.push("Launcher: standard".to_owned());
    lines.push(format!("Main class: {}", info.main_class));
    lines.push(String::new());
    lines.push("Traits:".to_owned());
    if info.traits.is_empty() {
        lines.push("  none".to_owned());
    } else {
        for trait_name in &info.traits {
            lines.push(format!("  {trait_name}"));
        }
    }
    lines.push(String::new());
    lines.push("Libraries:".to_owned());
    if info.libraries.is_empty() {
        lines.push("  none".to_owned());
    } else {
        for library in &info.libraries {
            lines.push(format!("  {library}"));
        }
    }
    lines.push(String::new());
    lines.push("Native libraries:".to_owned());
    if info.native_libraries.is_empty() {
        lines.push("  none".to_owned());
    } else {
        for library in &info.native_libraries {
            lines.push(format!("  {library}"));
        }
    }
    lines.push(String::new());
    lines.push("Natives path:".to_owned());
    lines.push(format!("  {}", info.natives_dir));
    lines.push(String::new());
    lines.push("Minecraft arguments:".to_owned());
    lines.push(format!(
        "  {}",
        mask_access_token(&info.game_args).join(" ")
    ));
    lines.push(String::new());
    lines.push(format!("Window size: {DEFAULT_WINDOW_SIZE}"));
    lines.push(String::new());
    lines.push("Java arguments:".to_owned());
    lines.push(format!("  {}", info.jvm_args.join(" ")));
    lines
}

/// The whole header as one string (CLI dry-run / stdout printing).
pub fn render(info: &DiagnosticInfo) -> String {
    let mut out = header_lines(info).join("\n");
    out.push('\n');
    out
}

#[cfg(test)]
mod tests {
    use super::*;

    fn sample_info() -> DiagnosticInfo {
        DiagnosticInfo {
            version: VERSION_LABEL.to_owned(),
            auth_mode: "offline".to_owned(),
            dns: vec![
                (
                    "login.microsoftonline.com".to_owned(),
                    "20.190.128.4".to_owned(),
                ),
                (
                    "session.minecraft.net".to_owned(),
                    "skipped/unreachable".to_owned(),
                ),
            ],
            game_dir: r"S\instances\1.21.4\minecraft".to_owned(),
            java_path: r"D:\jdk-21\bin\java.exe".to_owned(),
            java_version: "21.0.2".to_owned(),
            hardware: Hardware {
                os: "Windows 11".to_owned(),
                cpu: "AMD Ryzen 7 5800X 8-Core Processor".to_owned(),
                ram_total_mib: 32768,
                ram_available_mib: 12288,
                arch: "64-bit",
                gpu: "NVIDIA GeForce RTX 3070".to_owned(),
            },
            components: vec![
                "Fabric Loader (net.fabricmc.fabric-loader) 0.16.9".to_owned(),
                "Minecraft (net.minecraft) 1.21.4".to_owned(),
            ],
            main_class: "net.fabricmc.loader.impl.launch.knot.KnotClient".to_owned(),
            traits: Vec::new(),
            libraries: vec![
                r"S\libraries\a.jar".to_owned(),
                r"S\instances\game.jar".to_owned(),
            ],
            native_libraries: vec![r"S\libraries\lwjgl.jar".to_owned()],
            natives_dir: r"E:\staging\natives\1.21.4".to_owned(),
            game_args: vec![
                "--username".to_owned(),
                "Steve".to_owned(),
                "--accessToken".to_owned(),
                "secret-token".to_owned(),
                "--gameDir".to_owned(),
                r"S\instances\1.21.4\minecraft".to_owned(),
            ],
            jvm_args: vec!["-Xms512M".to_owned(), "-Xmx2048M".to_owned()],
        }
    }

    #[test]
    fn header_matches_the_prism_layout() {
        let lines = header_lines(&sample_info());
        let text = lines.join("\n");
        assert!(
            text.starts_with(&format!(
                "TwilightMC Bolide version: {VERSION_LABEL} (official)\n\nLaunched instance in offline mode\n"
            )),
            "{text}"
        );
        // DNS answers are indented under their host lines
        assert!(
            text.contains("login.microsoftonline.com resolves to:\n  20.190.128.4"),
            "{text}"
        );
        assert!(
            text.contains("session.minecraft.net resolves to:\n  skipped/unreachable"),
            "{text}"
        );
        // java, hardware
        assert!(
            text.contains("Java is version 21.0.2, using 64-bit architecture"),
            "{text}"
        );
        assert!(
            text.contains("RAM: 32768 MiB (available: 12288 MiB)"),
            "{text}"
        );
        assert!(text.contains("GPU: NVIDIA GeForce RTX 3070"), "{text}");
        // components are numbered
        assert!(
            text.contains("  1) Fabric Loader (net.fabricmc.fabric-loader) 0.16.9"),
            "{text}"
        );
        assert!(
            text.contains("  2) Minecraft (net.minecraft) 1.21.4"),
            "{text}"
        );
        // fixed chrome
        assert!(
            text.contains(
                "Launcher: standard\nMain class: net.fabricmc.loader.impl.launch.knot.KnotClient"
            ),
            "{text}"
        );
        assert!(text.contains("Traits:\n  none"), "{text}");
        assert!(text.contains("Window size: 854 x 480"), "{text}");
        // the pid line is appended by the spawn pump, never the header
        assert!(!text.contains("Minecraft process ID"), "{text}");
        // ends on the java arguments block
        assert!(
            text.ends_with("Java arguments:\n  -Xms512M -Xmx2048M"),
            "{text}"
        );
    }

    #[test]
    fn access_tokens_are_masked_in_both_forms() {
        let masked = mask_access_token(&[
            "--accessToken".to_owned(),
            "real-token".to_owned(),
            "--accessToken=other".to_owned(),
            "--username".to_owned(),
            "Steve".to_owned(),
        ]);
        assert_eq!(
            masked,
            vec![
                "--accessToken",
                "********",
                "--accessToken=********",
                "--username",
                "Steve",
            ]
        );
    }

    #[test]
    fn empty_lists_print_none() {
        let mut info = sample_info();
        info.traits = Vec::new();
        info.libraries = Vec::new();
        info.native_libraries = Vec::new();
        let text = render(&info);
        assert!(text.contains("Traits:\n  none\n"), "{text}");
        assert!(text.contains("Libraries:\n  none\n"), "{text}");
        assert!(text.contains("Native libraries:\n  none\n"), "{text}");
    }

    #[test]
    fn auth_mode_names_cover_the_account_kinds() {
        assert_eq!(auth_mode_name(&Account::offline("Steve")), "offline");
        let custom =
            Account::custom_yggdrasil("Steve", "https://ely.by/api/authlib-injector", None);
        assert_eq!(auth_mode_name(&custom), "custom");
    }

    #[tokio::test(flavor = "multi_thread")]
    #[ignore = "hardware probe smoke check; run with --ignored --nocapture"]
    async fn gpu_probe_prints_the_adapters() {
        println!("gpu: {:?}", gpu_names().await);
        println!("hardware: {:?}", collect_hardware().await);
    }
}
