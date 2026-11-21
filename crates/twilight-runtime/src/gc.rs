//! Java-version compatibility helpers for JVM/GC flags. The launcher uses these
//! to decide which toggles to enable in the settings UI and which flags are
//! safe to pass to a given runtime.

/// Minimum and maximum (inclusive) Java major version a flag supports.
/// `None` bound means unbounded on that side.
#[derive(Debug, Clone, Copy)]
pub struct FlagCompat {
    pub min_major: i32,
    pub max_major: Option<i32>,
}

impl FlagCompat {
    pub const fn new(min: i32, max: Option<i32>) -> Self {
        Self {
            min_major: min,
            max_major: max,
        }
    }

    pub fn supports(&self, java_major: i32) -> bool {
        java_major >= self.min_major && self.max_major.is_none_or(|m| java_major <= m)
    }
}

/// Compatibility table for the toggleable GC flags exposed in the UI.
pub fn flag_compat(flag: &str) -> FlagCompat {
    match flag {
        "-XX:+UseZGC" => FlagCompat::new(15, None),
        "-XX:+ZGenerational" => FlagCompat::new(21, Some(23)),
        "-XX:+UseShenandoahGC" => FlagCompat::new(15, None),
        "-XX:+UseG1GC" => FlagCompat::new(8, None),
        "-XX:+ParallelRefProcEnabled" => FlagCompat::new(8, None),
        "-XX:+AlwaysPreTouch" => FlagCompat::new(8, None),
        "-XX:+UnlockExperimentalVMOptions" => FlagCompat::new(8, None),
        "-XX:+UseStringDeduplication" => FlagCompat::new(8, None), // 8u20+
        "-XX:+DisableExplicitGC" => FlagCompat::new(8, None),
        "-XX:+PerfDisableSharedMem" => FlagCompat::new(8, None),
        _ => FlagCompat::new(8, None),
    }
}

pub fn java_badge(flag: &str) -> &'static str {
    // Human-readable range used by the UI; kept in sync with flag_compat.
    match flag {
        "-XX:+UseZGC" => "Java 15+",
        "-XX:+ZGenerational" => "Java 21-23",
        "-XX:+UseShenandoahGC" => "Java 15+",
        "-XX:+UseStringDeduplication" => "Java 8u20-25",
        _ => "Java 8-25",
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn zgenerational_only_21_to_23() {
        assert!(!flag_compat("-XX:+ZGenerational").supports(20));
        assert!(flag_compat("-XX:+ZGenerational").supports(21));
        assert!(flag_compat("-XX:+ZGenerational").supports(23));
        assert!(!flag_compat("-XX:+ZGenerational").supports(24));
        assert!(!flag_compat("-XX:+ZGenerational").supports(8));
    }

    #[test]
    fn universal_flags_support_all() {
        for major in [8, 11, 17, 21, 25] {
            assert!(flag_compat("-XX:+UseG1GC").supports(major));
            assert!(flag_compat("-XX:+AlwaysPreTouch").supports(major));
        }
    }
}
