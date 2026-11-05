use serde::de::Visitor;
use serde::{Deserialize, Deserializer, Serialize, Serializer};

/// Relative path + optional filename override decided by a [`crate::GradleSpecifier`].
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub struct PathSpec {
    /// Maven-style relative storage path, e.g. `org/ow2/asm/asm/9.7/asm-9.7.jar`.
    pub storage: String,
    /// Bare file name, e.g. `asm-9.7.jar`.
    pub filename: String,
}

/// Gradle-style artifact coordinate: `group:artifact:version[:classifier][@extension]`.
///
/// Clean-room port of Prism's `GradleSpecifier` (regex replaced by a manual
/// parser; every segment must be non-empty and free of `:`/`@`).
#[derive(Debug, Clone, Default, PartialEq, Eq, Hash)]
pub struct GradleSpecifier {
    valid: bool,
    group_id: String,
    artifact_id: String,
    version: String,
    classifier: String,
    extension: Option<String>,
    invalid_value: String,
}

fn invalid(value: &str) -> GradleSpecifier {
    // Preserve the raw value so serialization round-trips losslessly, like Qt's m_invalidValue.
    GradleSpecifier::default().with_invalid(value)
}

impl GradleSpecifier {
    fn with_invalid(mut self, value: &str) -> Self {
        self.invalid_value = value.to_owned();
        self
    }

    pub fn parse(value: &str) -> Self {
        // group:artifact:version(:classifier)?(@ext)? — anchored, segments are [^:@]+
        let (base, ext) = match value.split_once('@') {
            None => (value, None),
            Some((b, e)) => {
                if e.is_empty() || e.contains(':') || e.contains('@') {
                    return invalid(value);
                }
                (b, Some(e.to_owned()))
            }
        };

        let parts: Vec<&str> = base.split(':').collect();
        let len = parts.len();
        if !matches!(len, 3 | 4) || parts.iter().any(|p| p.is_empty()) {
            return invalid(value);
        }

        let spec = GradleSpecifier {
            valid: true,
            group_id: parts[0].to_owned(),
            artifact_id: parts[1].to_owned(),
            version: parts[2].to_owned(),
            classifier: if len == 4 {
                parts[3].to_owned()
            } else {
                String::new()
            },
            extension: ext,
            invalid_value: String::new(),
        };
        if spec.extension.is_some() {
            return spec;
        }
        spec
    }

    pub fn is_valid(&self) -> bool {
        self.valid
    }

    pub fn group_id(&self) -> &str {
        &self.group_id
    }

    pub fn artifact_id(&self) -> &str {
        &self.artifact_id
    }

    pub fn version(&self) -> &str {
        &self.version
    }

    pub fn classifier(&self) -> Option<&str> {
        if self.classifier.is_empty() {
            None
        } else {
            Some(&self.classifier)
        }
    }

    /// Full group and artifact prefix, e.g. `org.lwjgl:lwjgl`.
    pub fn artifact_prefix(&self) -> Option<String> {
        self.valid
            .then(|| format!("{}:{}", self.group_id, self.artifact_id))
    }

    pub fn set_classifier(&mut self, classifier: impl Into<String>) {
        self.classifier = classifier.into();
    }

    /// `artifact-version[-classifier].extension` (extension defaults to `jar`).
    pub fn file_name(&self) -> Option<String> {
        if !self.valid {
            return None;
        }
        let mut name = format!("{}-{}", self.artifact_id, self.version);
        if !self.classifier.is_empty() {
            name.push('-');
            name.push_str(&self.classifier);
        }
        name.push('.');
        name.push_str(self.extension.as_deref().unwrap_or("jar"));
        Some(name)
    }

    /// Re-serialize to the canonical `group:artifact:version[:classifier][@ext]` form.
    pub fn serialize(&self) -> String {
        if !self.valid {
            return self.invalid_value.clone();
        }
        let mut s = format!("{}:{}:{}", self.group_id, self.artifact_id, self.version);
        if !self.classifier.is_empty() {
            s.push(':');
            s.push_str(&self.classifier);
        }
        if let Some(ext) = &self.extension {
            s.push('@');
            s.push_str(ext);
        }
        s
    }

    /// Maven-repo relative path: `group/slashes/artifact/version/<file>`.
    ///
    /// Passing a filename override keeps it as the leaf name, mirroring `toPath(filenameOverride)`.
    pub fn to_path(&self, filename_override: Option<&str>) -> Option<PathSpec> {
        let filename = match filename_override {
            Some(f) if !f.is_empty() => f.to_owned(),
            _ => self.file_name()?,
        };
        if !self.valid {
            return None;
        }
        Some(PathSpec {
            storage: format!(
                "{}/{}/{}/{}",
                self.group_id.replace('.', "/"),
                self.artifact_id,
                self.version,
                filename
            ),
            filename,
        })
    }

    /// True if group, artifact *and* classifier all match.
    pub fn matches_name(&self, other: &GradleSpecifier) -> bool {
        self.group_id == other.group_id
            && self.artifact_id == other.artifact_id
            && self.classifier == other.classifier
    }
}

impl std::fmt::Display for GradleSpecifier {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str(&self.serialize())
    }
}

mod gradle_serde {
    use super::{GradleSpecifier, Visitor};
    use serde::de::Error as DeError;

    pub fn deserialize<'de, D: serde::Deserializer<'de>>(
        d: D,
    ) -> Result<GradleSpecifier, D::Error> {
        d.deserialize_str(GradleVisitor)
    }

    pub fn serialize<S: serde::Serializer>(g: &GradleSpecifier, s: S) -> Result<S::Ok, S::Error> {
        s.serialize_str(&g.serialize())
    }

    struct GradleVisitor;

    impl Visitor<'_> for GradleVisitor {
        type Value = GradleSpecifier;

        fn expecting(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.write_str("a gradle artifact coordinate string")
        }

        fn visit_str<E: DeError>(self, v: &str) -> Result<Self::Value, E> {
            let spec = GradleSpecifier::parse(v);
            if spec.is_valid() {
                Ok(spec)
            } else {
                Err(E::custom(crate::error::ManifestError::InvalidSpecifier(
                    v.to_owned(),
                )))
            }
        }
    }
}

impl Serialize for GradleSpecifier {
    fn serialize<S: Serializer>(&self, s: S) -> Result<S::Ok, S::Error> {
        gradle_serde::serialize(self, s)
    }
}

impl<'de> Deserialize<'de> for GradleSpecifier {
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        gradle_serde::deserialize(d)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn spec(s: &str) -> GradleSpecifier {
        GradleSpecifier::parse(s)
    }

    #[test]
    fn parses_full_coordinate() {
        let s = spec("org.gradle.test.classifiers:service:1.0:jdk15@jar");
        assert!(s.is_valid());
        assert_eq!(
            s.serialize(),
            "org.gradle.test.classifiers:service:1.0:jdk15@jar"
        );
        assert_eq!(s.group_id(), "org.gradle.test.classifiers");
        assert_eq!(s.artifact_id(), "service");
        assert_eq!(s.version(), "1.0");
        assert_eq!(s.classifier(), Some("jdk15"));
        assert_eq!(s.extension, Some("jar".into()));
    }

    #[test]
    fn parses_coordinate_without_classifier_or_extension() {
        let s = spec("org.lwjgl:lwjgl:3.3.3");
        assert_eq!(s.classifier(), None);
        assert_eq!(s.extension, None);
        assert_eq!(s.file_name().as_deref(), Some("lwjgl-3.3.3.jar"));
        let ps = s.to_path(None).unwrap();
        assert_eq!(ps.storage, "org/lwjgl/lwjgl/3.3.3/lwjgl-3.3.3.jar");
        assert_eq!(ps.filename, "lwjgl-3.3.3.jar");
    }

    #[test]
    fn filename_with_classifier_and_default_extension() {
        let s = spec("it.unimi.dsi:fastutil:8.5.3");
        assert_eq!(s.file_name().as_deref(), Some("fastutil-8.5.3.jar"));
        let n = spec("org.lwjgl:lwjgl:3.3.3:natives-linux");
        assert_eq!(
            n.file_name().as_deref(),
            Some("lwjgl-3.3.3-natives-linux.jar")
        );
    }

    #[test]
    fn filename_override_changes_leaf_only() {
        let s = spec("org.lwjgl:lwjgl-glfw:3.3.3");
        let ps = s.to_path(Some("glfw-remapped.jar")).unwrap();
        assert_eq!(ps.storage, "org/lwjgl/lwjgl-glfw/3.3.3/glfw-remapped.jar");
    }

    #[test]
    fn invalid_specifiers_keep_raw_value() {
        for (bad, raw) in [
            ("foo", "foo"),                     // not a coordinate
            ("a:b:c:", "a:b:c:"),               // empty classifier
            ("a:b:c@", "a:b:c@"),               // hungarian empty extension kills whole match
            ("a:b:c:styles@", "a:b:c:styles@"), // empty extension
            (":b:c:d", ":b:c:d"),               // empty group
            ("a:b:c:d@", "a:b:c:d@"),           // deep empty ext
            ("a:b:c:d@x:y", "a:b:c:d@x:y"),     // ':' in extension
        ] {
            let s = spec(bad);
            assert!(!s.is_valid(), "{bad:?} should be invalid");
            assert_eq!(s.serialize(), raw);
            assert_eq!(s.to_path(None), None);
        }
    }

    #[test]
    fn matches_name_ignores_version() {
        let a = spec("org.lwjgl:lwjgl:3.2.2:natives-linux");
        let b = spec("org.lwjgl:lwjgl:3.3.3:natives-linux");
        let c = spec("org.lwjgl:lwjgl:3.3.3");
        assert!(a.matches_name(&b));
        assert!(!a.matches_name(&c));
        assert_eq!(a.artifact_prefix().as_deref(), Some("org.lwjgl:lwjgl"));
    }

    #[test]
    fn serde_round_trip() {
        let orig = spec("org.lwjgl:lwjgl:3.3.3:natives-linux@zip");
        let json = serde_json::to_string(&orig).unwrap();
        assert_eq!(json, r#""org.lwjgl:lwjgl:3.3.3:natives-linux@zip""#);
        let back: GradleSpecifier = serde_json::from_str(&json).unwrap();
        assert_eq!(back, orig);
    }

    #[test]
    fn serde_rejects_broken_coordinate() {
        let err = serde_json::from_str::<GradleSpecifier>("\"not:::valid\"").unwrap_err();
        assert!(
            err.to_string().contains("invalid gradle specifier"),
            "{err}"
        );
    }
}
