//! Minecraft2Shell (CVE-2026-10701) launch advisory.
//!
//! The vulnerability is an out-of-bounds write in FreeType's TrueType hinting
//! path, reached through `.ttf` fonts loaded from resource packs. Minecraft
//! `1.20.5`–`26.2` ships an unpatched `lwjgl-freetype` on every platform;
//! `26.3+` is patched only where Mojang publishes a fixed native, and Linux
//! ARM64 remains unpatched upstream. This module keeps the range/platform
//! decision pure so the console drawer and tests see identical wording.

use twilight_manifest::{RuntimeContext, System};

/// Human-readable advisory name shared by every console line.
pub const MINECRAFT2SHELL_ADVISORY: &str = "Minecraft2Shell (CVE-2026-10701)";

/// How exposed a launch is, based on the game version and host platform.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Minecraft2ShellExposure {
    /// `<= 1.20.4`: the game predates the FreeType font path.
    NotAffected,
    /// `1.20.5`–`26.2` on any OS, or `>= 26.3` on Linux ARM64.
    Unpatched,
    /// `>= 26.3` elsewhere, with a fresh manifest and verified native SHA-1.
    PatchedVerified,
    /// `>= 26.3` elsewhere, but the launch used a cached manifest or the
    /// `lwjgl-freetype` artifact could not be hash-verified.
    PatchedUnverified,
    /// Version id did not parse; stay conservative and warn.
    Unknown,
}

/// Result of the version/platform security check.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Minecraft2ShellAssessment {
    pub exposure: Minecraft2ShellExposure,
    pub minecraft_version: String,
    /// `linux-x86_64`, `osx-arm64`, … — the same classifier the game uses.
    pub platform: String,
}

impl Minecraft2ShellAssessment {
    /// Console-drawer block for this assessment. `NotAffected` returns no
    /// lines; every other case starts with a prominent tag.
    pub fn advisory_lines(&self) -> Vec<String> {
        let version = &self.minecraft_version;
        let platform = &self.platform;
        match self.exposure {
            Minecraft2ShellExposure::NotAffected => Vec::new(),
            Minecraft2ShellExposure::Unpatched => vec![
                format!(
                    "[SECURITY WARN] {MINECRAFT2SHELL_ADVISORY}: Minecraft {version} on {platform} \
                     ships the unpatched FreeType TrueType hinting path."
                ),
                "[SECURITY WARN] Set Options -> Chat Settings -> Server Resource Packs: \
                 Disabled on untrusted servers and avoid opening untrusted resource-pack \
                 .zip files."
                    .to_owned(),
                "[SECURITY WARN] A malicious .ttf in a resource pack can execute code through \
                 the game's font renderer. TwilightMC warns on local pack imports but cannot \
                 patch the game itself."
                    .to_owned(),
            ],
            Minecraft2ShellExposure::PatchedVerified => vec![format!(
                "[SECURITY] {MINECRAFT2SHELL_ADVISORY}: fresh Mojang manifest + SHA-1 verification \
                 confirm the patched lwjgl-freetype for Minecraft {version} on {platform}."
            )],
            Minecraft2ShellExposure::PatchedUnverified => vec![
                format!(
                    "[SECURITY WARN] {MINECRAFT2SHELL_ADVISORY}: Minecraft {version} requires the \
                     patched lwjgl-freetype, but this launch could not confirm a fresh, \
                     SHA-1-verified artifact."
                ),
                "[SECURITY WARN] Go online once to refresh the Mojang manifest, or keep \
                 Server Resource Packs: Disabled and avoid untrusted resource-pack .zip \
                 files."
                    .to_owned(),
            ],
            Minecraft2ShellExposure::Unknown => vec![
                format!(
                    "[SECURITY WARN] {MINECRAFT2SHELL_ADVISORY}: could not classify Minecraft \
                     version {version:?} on {platform}."
                ),
                "[SECURITY WARN] Treat this build conservatively: set Server Resource Packs: \
                 Disabled on untrusted servers and avoid untrusted resource-pack .zip files."
                    .to_owned(),
            ],
        }
    }
}

/// Classifies a launch. `manifest_fresh` is true only for a live piston-meta
/// response; `lwjgl_freetype_verified` is true only when every freetype
/// artifact was checked against the manifest's SHA-1.
pub fn assess_minecraft2shell(
    minecraft_version: &str,
    context: &RuntimeContext,
    manifest_fresh: bool,
    lwjgl_freetype_verified: bool,
) -> Minecraft2ShellAssessment {
    let platform = context.classifier();
    let exposure = match parse_minecraft_version(minecraft_version) {
        None => Minecraft2ShellExposure::Unknown,
        Some(version) if version <= (1, 20, 4) => Minecraft2ShellExposure::NotAffected,
        Some(version) if version < (26, 3, 0) => Minecraft2ShellExposure::Unpatched,
        Some(_) if is_linux_arm64(context) => Minecraft2ShellExposure::Unpatched,
        Some(_) if manifest_fresh && lwjgl_freetype_verified => {
            Minecraft2ShellExposure::PatchedVerified
        }
        Some(_) => Minecraft2ShellExposure::PatchedUnverified,
    };
    Minecraft2ShellAssessment {
        exposure,
        minecraft_version: minecraft_version.to_owned(),
        platform,
    }
}

/// Reads the leading `major.minor.patch` of a Minecraft release id. Suffixes
/// (`-pre1`, `-snapshot`, `-rc1`) are ignored; an old-style snapshot such as
/// `24w14a` parses as `24.0.0`, which stays on the conservative side.
fn parse_minecraft_version(raw: &str) -> Option<(u32, u32, u32)> {
    let text = raw.trim().trim_start_matches(['v', 'V']);
    let mut parts = [0u32; 3];
    let mut count = 0usize;
    let mut digits = String::new();
    for ch in text.chars() {
        if ch.is_ascii_digit() && count < 3 {
            digits.push(ch);
        } else if ch == '.' && !digits.is_empty() {
            parts[count] = digits.parse().ok()?;
            count += 1;
            digits.clear();
            if count == 3 {
                break;
            }
        } else {
            break;
        }
    }
    if !digits.is_empty() && count < 3 {
        parts[count] = digits.parse().ok()?;
        count += 1;
    }
    (count > 0).then_some((parts[0], parts[1], parts[2]))
}

fn is_linux_arm64(context: &RuntimeContext) -> bool {
    context.system == System::Linux && context.mapped_arch() == "arm64"
}

/// True when importing a font-bearing resource pack needs an explicit user
/// confirmation: Minecraft 1.20.5 introduced the vulnerable FreeType path.
/// Unknown ids stay conservative and require confirmation too.
pub fn requires_resource_pack_font_confirmation(minecraft_version: &str) -> bool {
    parse_minecraft_version(minecraft_version).is_none_or(|version| version >= (1, 20, 5))
}

/// True for the Maven coordinate, native filename or storage path of the
/// FreeType LWJGL binding whose SHA-1 this advisory depends on.
pub fn is_lwjgl_freetype_artifact(path_or_name: &str) -> bool {
    let lower = path_or_name.to_ascii_lowercase();
    lower.contains("lwjgl-freetype") || lower.contains("lwjgl_freetype")
}

#[cfg(test)]
mod tests {
    use super::*;

    fn ctx(os: &str, arch: &str) -> RuntimeContext {
        RuntimeContext::new(os, arch)
    }

    fn exposure(
        version: &str,
        context: &RuntimeContext,
        fresh: bool,
        verified: bool,
    ) -> Minecraft2ShellExposure {
        assess_minecraft2shell(version, context, fresh, verified).exposure
    }

    #[test]
    fn pre_1_20_5_builds_are_not_affected() {
        for version in ["1.7.10", "1.12.2", "1.20", "1.20.4", "1.20.4-pre1"] {
            assert_eq!(
                exposure(version, &ctx("linux", "x86_64"), false, false),
                Minecraft2ShellExposure::NotAffected,
                "{version}"
            );
        }
    }

    #[test]
    fn one_twenty_five_through_26_2_is_unpatched_everywhere() {
        for version in ["1.20.5", "1.20.6", "1.21", "1.21.4", "26.2", "26.2-rc1"] {
            for (os, arch) in [
                ("linux", "x86_64"),
                ("linux", "aarch64"),
                ("windows", "amd64"),
                ("osx", "aarch64"),
            ] {
                assert_eq!(
                    exposure(version, &ctx(os, arch), true, true),
                    Minecraft2ShellExposure::Unpatched,
                    "{version} on {os}/{arch}"
                );
            }
        }
    }

    #[test]
    fn linux_arm64_stays_unpatched_after_26_3() {
        assert_eq!(
            exposure("26.3", &ctx("linux", "aarch64"), true, true),
            Minecraft2ShellExposure::Unpatched
        );
        assert_eq!(
            exposure("26.4", &ctx("linux", "arm64"), true, true),
            Minecraft2ShellExposure::Unpatched
        );
    }

    #[test]
    fn patched_platforms_need_a_fresh_verified_freetype() {
        for (version, os, arch) in [
            ("26.3", "linux", "x86_64"),
            ("26.3", "windows", "amd64"),
            ("26.3", "osx", "aarch64"),
            ("26.4", "linux", "x86_64"),
            ("27.0", "osx", "x86_64"),
        ] {
            assert_eq!(
                exposure(version, &ctx(os, arch), true, true),
                Minecraft2ShellExposure::PatchedVerified,
                "{version} on {os}/{arch}"
            );
        }

        // cached/stale manifest or unverifiable SHA-1 downgrades to a warning
        assert_eq!(
            exposure("26.3", &ctx("linux", "x86_64"), false, true),
            Minecraft2ShellExposure::PatchedUnverified
        );
        assert_eq!(
            exposure("26.3", &ctx("linux", "x86_64"), true, false),
            Minecraft2ShellExposure::PatchedUnverified
        );
    }

    #[test]
    fn unparseable_ids_stay_conservative() {
        assert_eq!(
            exposure("custom-modpack", &ctx("linux", "x86_64"), true, true),
            Minecraft2ShellExposure::Unknown
        );
        assert_eq!(
            exposure("24w14a", &ctx("linux", "x86_64"), true, true),
            Minecraft2ShellExposure::Unpatched
        );
    }

    #[test]
    fn advisory_blocks_name_the_mitigation() {
        let unpatched = assess_minecraft2shell("1.21.4", &ctx("linux", "x86_64"), true, true);
        let lines = unpatched.advisory_lines();
        assert!(lines.iter().all(|line| line.starts_with("[SECURITY WARN]")));
        assert!(
            lines
                .iter()
                .any(|line| line.contains("Server Resource Packs: Disabled"))
        );
        assert!(lines.iter().any(|line| line.contains(".ttf")));

        let verified = assess_minecraft2shell("26.3", &ctx("linux", "x86_64"), true, true);
        let lines = verified.advisory_lines();
        assert_eq!(lines.len(), 1);
        assert!(lines[0].starts_with("[SECURITY]"));
        assert!(lines[0].contains("SHA-1"));

        let cached = assess_minecraft2shell("26.3", &ctx("linux", "x86_64"), false, true);
        let lines = cached.advisory_lines();
        assert!(lines.iter().all(|line| line.starts_with("[SECURITY WARN]")));
        assert!(
            lines
                .iter()
                .any(|line| line.contains("Server Resource Packs: Disabled"))
        );
    }

    #[test]
    fn pack_font_confirmation_starts_at_1_20_5() {
        for version in ["1.7.10", "1.12.2", "1.20", "1.20.4-pre1"] {
            assert!(
                !requires_resource_pack_font_confirmation(version),
                "{version}"
            );
        }
        for version in ["1.20.5", "1.21.4", "26.3", "custom-modpack"] {
            assert!(
                requires_resource_pack_font_confirmation(version),
                "{version}"
            );
        }
    }

    #[test]
    fn freetype_artifacts_are_recognized_by_coordinate_and_path() {
        assert!(is_lwjgl_freetype_artifact(
            "org.lwjgl:lwjgl-freetype:3.3.3:natives-linux"
        ));
        assert!(is_lwjgl_freetype_artifact(
            "org/lwjgl/lwjgl-freetype/3.3.3/lwjgl-freetype-3.3.3-natives-windows.jar"
        ));
        assert!(!is_lwjgl_freetype_artifact("org.lwjgl:lwjgl:3.3.3"));
        assert!(!is_lwjgl_freetype_artifact(
            "com.google.guava:guava:33.0.0-jre"
        ));
    }
}
