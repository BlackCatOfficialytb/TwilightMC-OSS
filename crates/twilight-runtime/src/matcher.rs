//! Compatibility matching between installed JVMs and a manifest's
//! `compatibleJavaMajors` (`VersionFile::compatible_java_majors`).

use crate::version::JavaInstallation;

/// `true` when the installation's major satisfies any of `required_majors`.
/// Manifests without a compatible-java list accept every major.
pub fn is_compatible(installation: &JavaInstallation, required_majors: &[i32]) -> bool {
    required_majors.is_empty() || required_majors.contains(&installation.version.major)
}

/// Picks the best installed JVM for the required majors:
/// - only candidates compatible with `required_majors` are considered;
/// - earlier entries win across *different* majors (callers pre-rank the list,
///   e.g. discovery order PATH-then-JAVA_HOME-then-system-roots);
/// - among candidates on the *same* major, the newest patch/build (largest
///   version string) wins.
pub fn select_best_java<'a>(
    installed: &'a [JavaInstallation],
    required_majors: &[i32],
) -> Option<&'a JavaInstallation> {
    let mut best: Option<&JavaInstallation> = None;
    for candidate in installed {
        if !is_compatible(candidate, required_majors) {
            continue;
        }
        best = Some(match best {
            None => candidate,
            Some(current)
                if candidate.version.major == current.version.major
                    && candidate.version.full.as_str() > current.version.full.as_str() =>
            {
                candidate
            }
            Some(current) => current,
        });
    }
    best
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::version::JavaVersion;
    use std::path::PathBuf;

    fn install(major: i32, full: &str) -> JavaInstallation {
        JavaInstallation {
            executable: PathBuf::from(format!("/jvm/{full}/bin/java")),
            jvm_home: PathBuf::from(format!("/jvm/{full}")),
            version: JavaVersion {
                major,
                full: full.into(),
            },
        }
    }

    #[test]
    fn selects_first_compatible_major_then_newest_build() {
        let installed = [
            install(21, "21.0.1"),
            install(17, "17.0.9"),
            install(21, "21.0.6"),
            install(11, "11.0.21"),
        ];
        // requires 21: both 21-builds are candidates and the newest one wins
        let best = select_best_java(&installed, &[21]).unwrap();
        assert_eq!(best.version.full, "21.0.6");
        // ...but the newest 21 build wins among same-major candidates
        let all = [
            install(17, "17.0.7"),
            install(21, "21.0.1"),
            install(21, "21.0.6"),
        ];
        let newest = select_best_java(&all, &[21]).unwrap();
        assert_eq!(newest.version.full, "21.0.6");
    }

    #[test]
    fn honors_multi_major_lists_and_rank_order() {
        let installed = [
            install(11, "11.0.11"),
            install(8, "1.8.0_392"),
            install(17, "17.0.9"),
        ];
        // requires 8|17: 11 is skipped, 8 (earlier rank) wins over 17
        let best = select_best_java(&installed, &[8, 17]).unwrap();
        assert_eq!(best.version.major, 8);
    }

    #[test]
    fn empty_required_list_accepts_anything_and_none_when_compatible_runs_out() {
        let installed = [install(29, "29.0.0")];
        assert_eq!(select_best_java(&installed, &[]).unwrap().version.major, 29);
        assert!(select_best_java(&installed, &[8]).is_none());
        assert!(select_best_java(&[], &[8]).is_none());
    }
}
