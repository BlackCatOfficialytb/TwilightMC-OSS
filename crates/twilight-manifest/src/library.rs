use std::collections::HashMap;

use serde::{Deserialize, Serialize};

use crate::download::LibraryDownloads;
use crate::gradle::GradleSpecifier;
use crate::rule::{eval_rule_list, Rule, RuleResult};
use crate::{MOJANG_LIBRARY_BASE, RuntimeContext};

/// A single resolved artifact to fetch: URL, optional expected sha1 and the
/// relative storage path under the library store.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ResolvedDownload {
    pub url: String,
    pub sha1: Option<String>,
    /// Path relative to the storage prefix (e.g. `org/lwjgl/.../lwjgl-3.3.3.jar`).
    pub storage: String,
}

/// One manifest library entry. Clean-room port of Prism's `Library`;
/// deprecated fields are carried (and round-tripped) rather than dropped.
#[derive(Debug, Clone, Default, PartialEq, Serialize, Deserialize)]
pub struct Library {
    pub name: GradleSpecifier,
    /// Deprecated: repository base prefix for the implicit maven layout.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub url: Option<String>,
    /// Deprecated Prism extension: complete URL taking precedence over the maven layout.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub absolute_url: Option<String>,
    /// Prism extension: filename override.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub filename: Option<String>,
    /// `local` = vendored in the instance; `always-stale` = always re-fetch from origin.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub hint: Option<String>,
    /// Native classifier per OS (`{"linux": "natives-linux"}`); presence marks a native lib.
    #[serde(default, skip_serializing_if = "HashMap::is_empty")]
    pub natives: HashMap<String, String>,
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub rules: Vec<Rule>,
    /// Mojang download metadata.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub downloads: Option<LibraryDownloads>,
    /// Filters applied when natives are extracted (kept for round-trip).
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub extract_excludes: Vec<String>,
}

impl Library {
    pub fn is_native(&self) -> bool {
        !self.natives.is_empty()
    }

    /// Native classifier matching the context, or `None` when this platform is not covered.
    ///
    /// `${arch}` placeholders inside the classifier are kept — callers expand them.
    pub fn compatible_native(&self, ctx: &RuntimeContext) -> Option<&str> {
        // try "[os]-[arch]" first, then the bare "[os]" fallback on legacy archs
        let classifier = ctx.classifier();
        if let Some(n) = self.natives.get(&classifier).or_else(|| {
            ctx.is_legacy_arch().then(|| self.natives.get(ctx.system.as_str())).flatten()
        }) {
            return Some(n.as_str());
        }
        None
    }

    /// Rules from `Library::isActive`: default `Disallow`, last non-deferring
    /// rule wins; natives additionally require this platform to be covered.
    pub fn is_active(&self, ctx: &RuntimeContext, features: &std::collections::BTreeSet<String>) -> bool {
        let active = if self.rules.is_empty() {
            true
        } else {
            eval_rule_list(&self.rules, ctx, features) == RuleResult::Allow
        };
        if self.is_native() {
            active && self.compatible_native(ctx).is_some()
        } else {
            active
        }
    }

    pub fn is_local(&self) -> bool {
        self.hint.as_deref() == Some("local")
    }

    pub fn is_always_stale(&self) -> bool {
        self.hint.as_deref() == Some("always-stale")
    }

    /// Relative storage path under the library root for this context
    /// (`storageSuffix(storagePrefix())` in Qt terms).
    pub fn storage_spec(&self, ctx: &RuntimeContext) -> Option<crate::gradle::PathSpec> {
        let spec = if self.is_native() {
            let native = self
                .compatible_native(ctx)
                // Mojang HACK: natives without a usable classifier get a marker leaf name
                .unwrap_or("INVALID");
            let mut name = self.name.clone();
            name.set_classifier(native);
            name
        } else {
            self.name.clone()
        };
        spec.to_path(self.filename.as_deref())
    }

    fn url_for_storage(&self, storage: &str) -> String {
        if let Some(absolute) = &self.absolute_url {
            // absolute_url is used verbatim (no storage appended), like Qt
            return absolute.clone();
        }
        let base = self.url.as_deref().unwrap_or(MOJANG_LIBRARY_BASE);
        format!("{}/{}", base.trim_end_matches('/'), storage)
    }

    /// Mirrors `Library::getDownloads`: decides which files must be present for
    /// this library in `ctx`, expanding `${arch}` natives into both 32/64 bit
    /// downloads and preferring Mojang-supplied checksums.
    pub fn resolve_downloads(&self, ctx: &RuntimeContext) -> Vec<ResolvedDownload> {
        let Some(spec) = self.storage_spec(ctx) else {
            return Vec::new();
        };
        let raw_storage = spec.storage;

        let mut out = Vec::new();
        if let Some(downloads) = &self.downloads {
            if self.is_native() {
                let Some(native) = self.compatible_native(ctx) else {
                    // ignoring native without a classifier for this OS
                    return out;
                };
                if let Some((stem, tail)) = native.split_once("${arch}") {
                    for arch in ["32", "64"] {
                        let Some(info) = downloads.classifiers.get(&format!("{stem}{arch}{tail}")) else {
                            continue;
                        };
                        out.push(ResolvedDownload {
                            url: info.url.clone(),
                            sha1: Some(info.sha1.clone()),
                            storage: raw_storage.replace("${arch}", arch),
                        });
                    }
                } else if let Some(info) = downloads.classifiers.get(native) {
                    out.push(ResolvedDownload {
                        url: info.url.clone(),
                        sha1: Some(info.sha1.clone()),
                        storage: raw_storage.clone(),
                    });
                }
            } else if let Some(artifact) = &downloads.artifact {
                out.push(ResolvedDownload {
                    url: artifact.url.clone(),
                    sha1: Some(artifact.sha1.clone()),
                    storage: raw_storage.clone(),
                });
            }
            return out;
        }

        // No Mojang metadata: fall back to the (deprecated) implicit maven layout.
        let raw_url = self.url_for_storage(&raw_storage);
        if raw_storage.contains("${arch}") {
            for arch in ["32", "64"] {
                let url = raw_url.replace("${arch}", arch);
                out.push(ResolvedDownload { url, sha1: None, storage: raw_storage.replace("${arch}", arch) });
            }
        } else {
            out.push(ResolvedDownload { url: raw_url, sha1: None, storage: raw_storage });
        }
        out
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::BTreeSet;

    const FEATURES: BTreeSet<String> = BTreeSet::new();

    fn parse(json: &str) -> Library {
        serde_json::from_str(json).expect("parse library")
    }

    fn linux() -> RuntimeContext {
        RuntimeContext::new("linux", "x86_64")
    }

    static GUAVA: &str = r#"{
        "name": "com.google.guava:guava:33.0.0-jre:linux-x86_64",
        "url": "https://example.com/maven/"
    }"#;

    #[test]
    fn active_library_resolves_implicit_maven_url() {
        let lib: Library = serde_json::from_str(GUAVA).unwrap();
        assert!(lib.is_active(&linux(), &FEATURES));
        let dl = lib.resolve_downloads(&linux());
        assert_eq!(dl.len(), 1);
        assert_eq!(dl[0].url, "https://example.com/maven/com/google/guava/guava/33.0.0-jre/guava-33.0.0-jre-linux-x86_64.jar");
        assert_eq!(dl[0].sha1, None);
        assert_eq!(dl[0].storage, "com/google/guava/guava/33.0.0-jre/guava-33.0.0-jre-linux-x86_64.jar");
    }

    #[test]
    fn mojang_downloads_prefer_artifact_with_sha1() {
        let lib = parse(
            r#"{
            "name": "org.lwjgl:lwjgl-glfw:3.3.3",
            "downloads": {
                "artifact": {
                    "url": "https://libraries.minecraft.net/org/lwjgl/lwjgl-glfw/3.3.3/lwjgl-glfw-3.3.3.jar",
                    "sha1": "5b5c9c...",
                    "size": 1234
                }
            }
        }"#,
        );
        let dl = lib.resolve_downloads(&linux());
        assert_eq!(dl.len(), 1);
        assert_eq!(dl[0].sha1.as_deref(), Some("5b5c9c..."));
        assert_eq!(dl[0].storage, "org/lwjgl/lwjgl-glfw/3.3.3/lwjgl-glfw-3.3.3.jar");
    }

    #[test]
    fn native_library_inactive_without_os_classifier() {
        // windows-only native: inactive on linux
        let lib = parse(
            r#"{
            "name": "org.lwjgl:lwjgl:3.3.3:natives-windows-x86_64",
            "natives": { "windows-x86_64": "natives-windows-x86_64" },
            "downloads": {
                "classifiers": {
                    "natives-windows-x86_64": { "url": "https://example.com/w.jar", "sha1": "a", "size": 1 }
                }
            }
        }"#,
        );
        assert!(!lib.is_active(&linux(), &FEATURES));
        assert!(lib.resolve_downloads(&linux()).is_empty());
        let win = RuntimeContext::new("windows", "amd64");
        assert!(lib.is_active(&win, &FEATURES));
        let dl = lib.resolve_downloads(&win);
        assert_eq!(dl[0].url, "https://example.com/w.jar");
        assert_eq!(dl[0].storage, "org/lwjgl/lwjgl/3.3.3/lwjgl-3.3.3-natives-windows-x86_64.jar");
    }

    #[test]
    fn bare_os_natives_match_only_legacy_arch() {
        let lib = parse(
            r#"{
            "name": "tv.twitch:twitch-platform:5.16:natives-linux",
            "natives": { "linux": "natives-linux" },
            "downloads": {
                "classifiers": { "natives-linux": { "url": "https://example.com/l.jar", "sha1": "b", "size": 1 } }
            }
        }"#,
        );
        assert!(lib.is_active(&linux(), &FEATURES));
        assert!(!lib.is_active(&RuntimeContext::new("linux", "aarch64"), &FEATURES));
    }

    #[test]
    fn arch_placeholder_expands_to_32_and_64() {
        let lib = parse(
            r#"{
            "name": "tv.twitch:twitch-external-platform:4.5:natives-linux",
            "natives": { "linux": "natives-linux-${arch}" },
            "downloads": {
                "classifiers": {
                    "natives-linux-32": { "url": "https://example.com/32.jar", "sha1": "c32", "size": 1 },
                    "natives-linux-64": { "url": "https://example.com/64.jar", "sha1": "c64", "size": 1 }
                }
            }
        }"#,
        );
        let dl = lib.resolve_downloads(&linux());
        assert_eq!(dl.len(), 2);
        assert_eq!(dl[0].storage, "tv/twitch/twitch-external-platform/4.5/twitch-external-platform-4.5-natives-linux-32.jar");
        assert_eq!(dl[1].url, "https://example.com/64.jar");
    }

    #[test]
    fn rules_gate_download_set() {
        let lib = parse(
            r#"{
            "name": "org.jline:jline-terminal-ffm:3.26.3",
            "rules": [
                { "action": "allow" },
                { "action": "disallow", "os": { "name": "linux-arm64" } }
            ]
        }"#,
        );
        // x86_64: allow rule wins (disallow defers) -> active
        assert!(lib.is_active(&linux(), &FEATURES));
        // arm64: the disallow rule decides last -> inactive
        assert!(!lib.is_active(&RuntimeContext::new("linux", "aarch64"), &FEATURES));

        // C++ quirk, preserved: a LONE disallow rule without an allow is the
        // final word on every non-matching OS too (fold starts at Disallow).
        let lone = parse(
            r#"{ "name": "x:y:1", "rules": [{ "action": "disallow", "os": { "name": "linux-arm64" } }] }"#,
        );
        assert!(!lone.is_active(&linux(), &FEATURES));
    }

    #[test]
    fn natives_without_matching_url_use_invalid_marker() {
        let lib = parse(
            r#"{
            "name": "com.example:native:1.0",
            "natives": { "osx": "natives-osx" }
        }"#,
        );
        let spec = lib.storage_spec(&linux()).unwrap();
        assert_eq!(spec.storage, "com/example/native/1.0/native-1.0-INVALID.jar");
    }

    #[test]
    fn defaults_round_trip_through_json() {
        let lib = parse(GUAVA);
        assert_eq!(lib.url.as_deref(), Some("https://example.com/maven/"));
        assert!(lib.natives.is_empty());
        assert!(lib.downloads.is_none());
        assert!(lib.rules.is_empty());
        assert!(!lib.is_local());
        let hint_lib = parse(r#"{ "name": "x:y:1", "hint": "always-stale" }"#);
        assert!(hint_lib.is_always_stale());
    }
}
