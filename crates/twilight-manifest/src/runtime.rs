/// OS identity for [crate::RuntimeContext]; mirrors
/// [crate::Library::system]'s `linux`/`windows`/`osx` names.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum System {
    Linux,
    Windows,
    Osx,
}

impl System {
    /// Canonical name used by Mojang natives classifiers and rules.
    pub fn as_str(self) -> &'static str {
        match self {
            System::Linux => "linux",
            System::Windows => "windows",
            System::Osx => "osx",
        }
    }
}

impl std::fmt::Display for System {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str(self.as_str())
    }
}

impl From<&str> for System {
    fn from(os: &str) -> Self {
        match os {
            "windows" => System::Windows,
            "osx" => System::Osx,
            _ => System::Linux,
        }
    }
}

/// The runtime environment a manifest is evaluated for: host OS plus the
/// architecture the JVM reports. Clean-room port of Prism's `RuntimeContext`.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RuntimeContext {
    pub system: System,
    /// Architecture string as reported by `os.arch`-style JRE properties,
    /// e.g. `amd64`, `aarch64`.
    pub java_real_arch: String,
}

impl RuntimeContext {
    pub fn new(system: impl Into<System>, java_real_arch: impl Into<String>) -> Self {
        Self { system: system.into(), java_real_arch: java_real_arch.into() }
    }

    /// Detects the host context; the Java arch defaults to the Rust target arch.
    pub fn host() -> Self {
        let system = match std::env::consts::OS {
            "windows" => System::Windows,
            "macos" => System::Osx,
            _ => System::Linux,
        };
        Self::new(system, std::env::consts::ARCH)
    }

    /// Qt's `mappedJavaRealArchitecture`: real-arch strings normalized to
    /// Mojang's classifier vocabulary. Unknown values pass through unchanged.
    pub fn mapped_arch(&self) -> String {
        match self.java_real_arch.as_str() {
            "amd64" | "x86_64" => "x86_64".into(),
            "i386" | "i486" | "i586" | "i686" | "x86" => "x86".into(),
            "aarch64" => "arm64".into(),
            "arm" | "armhf" => "arm32".into(),
            other => other.into(),
        }
    }

    /// Precise natives/rules classifier: `[os]-[mapped-arch]`.
    pub fn classifier(&self) -> String {
        format!("{}-{}", self.system, self.mapped_arch())
    }

    /// "Legacy" = Mojang assumed only these two architectures exist, so bare
    /// `[os]` classifiers may match.
    pub fn is_legacy_arch(&self) -> bool {
        matches!(self.mapped_arch().as_str(), "x86_64" | "x86")
    }

    /// Rule/native-classifier matching semantics from `RuntimeContext::classifierMatches`.
    pub fn classifier_matches(&self, target: &str) -> bool {
        if target == self.classifier() {
            return true;
        }
        self.is_legacy_arch() && target == self.system.as_str()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn maps_architectures_like_qt() {
        for (input, want) in [
            ("amd64", "x86_64"),
            ("x86_64", "x86_64"),
            ("i686", "x86"),
            ("x86", "x86"),
            ("aarch64", "arm64"),
            ("arm", "arm32"),
            ("armhf", "arm32"),
            ("riscv64", "riscv64"), // unknown values pass through
        ] {
            assert_eq!(RuntimeContext::new("linux", input).mapped_arch(), want, "{input}");
        }
    }

    #[test]
    fn classifier_formatting() {
        assert_eq!(RuntimeContext::new("windows", "amd64").classifier(), "windows-x86_64");
        assert_eq!(RuntimeContext::new("osx", "aarch64").classifier(), "osx-arm64");
        assert_eq!(RuntimeContext::new("linux", "riscv64").classifier(), "linux-riscv64");
    }

    #[test]
    fn classifier_matching_semantics() {
        let ctx = RuntimeContext::new("linux", "x86_64");
        assert!(ctx.classifier_matches("linux-x86_64"));
        assert!(ctx.classifier_matches("linux")); // imprecise, legacy arch
        assert!(!ctx.classifier_matches("windows-x86_64"));
        assert!(!ctx.classifier_matches("osx"));
        let arm = RuntimeContext::new("linux", "aarch64");
        assert!(arm.classifier_matches("linux-arm64"));
        assert!(!arm.classifier_matches("linux")); // bare-OS match only for x86 flavours
    }
}
