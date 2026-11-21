//! Java 8–25 aware Garbage Collector preset resolver.
//!
//! Every flag emitted here is validated against the active Java major version
//! so the JVM never crashes with `Unrecognized VM option`. Unsupported
//! presets (e.g. ZGC/Shenandoah on Java 8–14) cleanly fall back to Aikar's
//! tuned G1GC and report a diagnostic notice.

use serde::{Deserialize, Serialize};

/// Persisted GC preset choice. Serialized as the snake-ish variant name so it
/// round-trips through `settings.json` unchanged.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize, Default)]
#[serde(rename_all = "PascalCase")]
pub enum GcPreset {
    #[default]
    Default,
    Auto,
    GenerationalZgc,
    Shenandoah,
    AikarG1,
    Custom,
}

impl GcPreset {
    pub fn from_str_loose(value: &str) -> Self {
        match value.trim().to_ascii_lowercase().as_str() {
            "auto" => Self::Auto,
            "generationalzgc" | "generational_zgc" | "zgc" => Self::GenerationalZgc,
            "shenandoah" | "shenandoahgc" => Self::Shenandoah,
            "aikarg1" | "aikar_g1" | "aikar" => Self::AikarG1,
            "custom" => Self::Custom,
            _ => Self::Default,
        }
    }

    pub fn as_str(self) -> &'static str {
        match self {
            Self::Default => "Default",
            Self::Auto => "Auto",
            Self::GenerationalZgc => "GenerationalZgc",
            Self::Shenandoah => "Shenandoah",
            Self::AikarG1 => "AikarG1",
            Self::Custom => "Custom",
        }
    }
}

/// Aikar's tuned G1GC flag set — the safe fallback for every Java version.
pub fn aikar_g1_flags() -> Vec<String> {
    [
        "-XX:+UseG1GC",
        "-XX:+ParallelRefProcEnabled",
        "-XX:MaxGCPauseMillis=200",
        "-XX:+UnlockExperimentalVMOptions",
        "-XX:+DisableExplicitGC",
        "-XX:+AlwaysPreTouch",
        "-XX:G1NewSizePercent=30",
        "-XX:G1MaxNewSizePercent=40",
        "-XX:G1HeapRegionSize=8M",
        "-XX:G1ReservePercent=20",
        "-XX:G1HeapWastePercent=5",
        "-XX:G1MixedGCCountTarget=4",
        "-XX:InitiatingHeapOccupancyPercent=15",
        "-XX:G1MixedGCLiveThresholdPercent=90",
        "-XX:G1RSetUpdatingPauseTimePercent=5",
        "-XX:SurvivorRatio=32",
        "-XX:+PerfDisableSharedMem",
        "-XX:MaxTenuringThreshold=1",
    ]
    .iter()
    .map(|s| s.to_string())
    .collect()
}

/// Resolve a preset into concrete JVM flags for the given Java major version and
/// allocated max memory. Returns `(flags, fallback_notice)` where the notice is
/// `Some` when the requested preset was unsupported and we substituted G1GC.
pub fn resolve_gc_flags(
    preset: GcPreset,
    java_major: i32,
    max_mem_mib: u32,
    custom_flags: &[String],
    extra_args: &str,
) -> (Vec<String>, Option<String>) {
    match preset {
        GcPreset::Default => (Vec::new(), None),
        GcPreset::Auto => {
            let chosen = if java_major < 17 {
                GcPreset::AikarG1
            } else if max_mem_mib < 4096 {
                GcPreset::Shenandoah
            } else if java_major >= 21 {
                GcPreset::GenerationalZgc
            } else {
                GcPreset::Shenandoah
            };
            let (flags, notice) =
                resolve_gc_flags(chosen, java_major, max_mem_mib, custom_flags, extra_args);
            // Auto never reports a fallback notice of its own; the inner one
            // (if any) is still surfaced so users learn why G1GC was picked.
            (flags, notice)
        }
        GcPreset::GenerationalZgc => {
            if java_major < 15 {
                let notice = Some(format!(
                    "Generational ZGC is unavailable on Java {java_major}; fell back to Aikar G1GC."
                ));
                return (aikar_g1_flags(), notice);
            }
            let mut flags = vec!["-XX:+UseZGC".to_string()];
            // JEP 490 removed non-generational ZGC in JDK 24: +ZGenerational
            // must NOT be emitted there (it is a fatal startup error).
            if (21..=23).contains(&java_major) {
                flags.push("-XX:+ZGenerational".to_string());
            }
            // Java 21-23 also benefit from the generational mode being explicit.
            (flags, None)
        }
        GcPreset::Shenandoah => {
            if java_major < 15 {
                let notice = Some(format!(
                    "Shenandoah GC is unavailable on Java {java_major}; fell back to Aikar G1GC."
                ));
                return (aikar_g1_flags(), notice);
            }
            let mut flags = vec!["-XX:+UseShenandoahGC".to_string()];
            if (21..=23).contains(&java_major) {
                flags.push("-XX:ShenandoahGCMode=iu".to_string());
            }
            (flags, None)
        }
        GcPreset::AikarG1 => (aikar_g1_flags(), None),
        GcPreset::Custom => {
            let mut flags: Vec<String> = custom_flags.to_vec();
            for token in extra_args.split_whitespace() {
                flags.push(token.to_string());
            }
            (flags, None)
        }
    }
}

/// Convenience: assemble the full JVM arg list by appending resolved GC flags.
pub fn append_gc_flags(base: &mut Vec<String>, flags: &[String]) {
    base.extend(flags.iter().cloned());
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn zgenerational_present_on_21_to_23_only() {
        for major in [21, 22, 23] {
            let (flags, _) = resolve_gc_flags(GcPreset::GenerationalZgc, major, 8192, &[], "");
            assert!(
                flags.iter().any(|f| f == "-XX:+ZGenerational"),
                "ZGenerational missing on Java {major}"
            );
        }
        for major in [8, 11, 14, 17, 20, 24, 25] {
            let (flags, _) = resolve_gc_flags(GcPreset::GenerationalZgc, major, 8192, &[], "");
            assert!(
                !flags.iter().any(|f| f == "-XX:+ZGenerational"),
                "ZGenerational wrongly present on Java {major}"
            );
        }
    }

    #[test]
    fn zgc_absent_on_java_8() {
        for preset in [
            GcPreset::GenerationalZgc,
            GcPreset::Shenandoah,
            GcPreset::Auto,
        ] {
            let (flags, _) = resolve_gc_flags(preset, 8, 8192, &[], "");
            assert!(
                !flags
                    .iter()
                    .any(|f| f.contains("UseZGC") || f.contains("UseShenandoahGC")),
                "ZGC/Shenandoah leaked on Java 8 for {preset:?}"
            );
            // fell back to G1GC
            assert!(flags.iter().any(|f| f == "-XX:+UseG1GC"));
        }
    }

    #[test]
    fn zgenerational_absent_on_24_and_25() {
        for major in [24, 25] {
            let (flags, _) = resolve_gc_flags(GcPreset::GenerationalZgc, major, 8192, &[], "");
            assert!(flags.iter().any(|f| f == "-XX:+UseZGC"));
            assert!(!flags.iter().any(|f| f == "-XX:+ZGenerational"));
        }
    }

    #[test]
    fn shenandoah_mode_iu_on_21_to_23() {
        for major in [21, 22, 23] {
            let (flags, _) = resolve_gc_flags(GcPreset::Shenandoah, major, 8192, &[], "");
            assert!(flags.iter().any(|f| f == "-XX:ShenandoahGCMode=iu"));
        }
        for major in [17, 24, 25] {
            let (flags, _) = resolve_gc_flags(GcPreset::Shenandoah, major, 8192, &[], "");
            assert!(!flags.iter().any(|f| f == "-XX:ShenandoahGCMode=iu"));
        }
    }

    #[test]
    fn auto_smart_rules() {
        // low mem + java 17 -> shenandoah
        let (flags, _) = resolve_gc_flags(GcPreset::Auto, 17, 2048, &[], "");
        assert!(flags.iter().any(|f| f == "-XX:+UseShenandoahGC"));
        // high mem + java 21 -> generational zgc
        let (flags, _) = resolve_gc_flags(GcPreset::Auto, 21, 8192, &[], "");
        assert!(flags.iter().any(|f| f == "-XX:+UseZGC"));
        assert!(flags.iter().any(|f| f == "-XX:+ZGenerational"));
        // java < 17 -> aikar
        let (flags, _) = resolve_gc_flags(GcPreset::Auto, 11, 8192, &[], "");
        assert!(flags.iter().any(|f| f == "-XX:+UseG1GC"));
    }

    #[test]
    fn custom_emits_toggles_and_extra() {
        let (flags, _) = resolve_gc_flags(
            GcPreset::Custom,
            21,
            8192,
            &["-XX:+UseG1GC".to_string()],
            "-Xlog:gc*",
        );
        assert_eq!(flags, vec!["-XX:+UseG1GC", "-Xlog:gc*"]);
    }

    #[test]
    fn default_emits_nothing() {
        let (flags, notice) = resolve_gc_flags(GcPreset::Default, 21, 8192, &[], "");
        assert!(flags.is_empty());
        assert!(notice.is_none());
    }

    #[test]
    fn fallback_notice_reported() {
        let (_, notice) = resolve_gc_flags(GcPreset::GenerationalZgc, 8, 8192, &[], "");
        assert!(notice.is_some());
    }
}
