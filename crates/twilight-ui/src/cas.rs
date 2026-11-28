//! Minecraft-specific CAS wrappers: instance scanning lives here so
//! `twilight-cas` itself stays game-agnostic.

use std::path::{Path, PathBuf};

/// All instance dirs under the instances root.
fn instance_dirs(instances_dir: &Path) -> Vec<PathBuf> {
    std::fs::read_dir(instances_dir)
        .map(|entries| {
            entries
                .flatten()
                .map(|e| e.path())
                .filter(|p| p.is_dir())
                .collect::<Vec<_>>()
        })
        .unwrap_or_default()
}

/// Scans active instances' `mods/`, `resourcepacks/`, `shaderpacks/` dirs.
pub(crate) fn scan_active_dirs(instances_dir: &Path) -> Vec<PathBuf> {
    let mut dirs = Vec::new();
    for instance in instance_dirs(instances_dir) {
        for sub in ["mods", "resourcepacks", "shaderpacks"] {
            let dir = instance.join(sub);
            if dir.is_dir() {
                dirs.push(dir);
            }
        }
    }
    dirs
}

/// Dedupes jars/zips across active instance dirs into the global CAS.
pub async fn deduplicate_instances(
    instances_dir: &Path,
    cas_root: &Path,
) -> Result<twilight_cas::DedupeReport, String> {
    let dirs = scan_active_dirs(instances_dir);
    twilight_cas::deduplicate_dirs(&dirs, cas_root, Some(&["jar", "zip"]))
        .await
        .map_err(|e| e.to_string())
}

/// Removes CAS blobs referenced by no active instance file.
pub async fn cas_garbage_collect(
    cas_root: &Path,
    instances_dir: &Path,
) -> Result<twilight_cas::GcReport, String> {
    let active = scan_active_dirs(instances_dir);
    twilight_cas::cas_garbage_collect_dirs(cas_root, &active)
        .await
        .map_err(|e| e.to_string())
}
