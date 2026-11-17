//! The mandatory Cleanroom pre-launch gate: CleanroomMC cannot boot 1.12.2
//! on Java 21/25+ without the BareBones Template core compatibility mods
//! (Fugue, MixinBooter, ConfigAnytime, Scalar Legacy — CurseForge modpack
//! `barebones-template-cleanroom`). The gate scans the instance's `mods/`
//! directory before any download or native work runs and blocks the launch
//! cleanly with the requirement message when they are missing.

use std::path::Path;

/// Lowercase markers a required compat mod jar must contain in its filename.
pub const CLEANROOM_REQUIRED_MODS: &[&str] = &["fugue", "mixinbooter", "configanytime", "scalar"];

/// The user-facing requirement message (CLI + UI dialog).
pub const CLEANROOM_GATE_MESSAGE: &str = "CleanroomMC requires the BareBones Template (Cleanroom) mods (Fugue, MixinBooter, \
     ConfigAnytime, Scalar Legacy) to boot 1.12.2 safely.";

/// The modpack's CurseForge page, linked from the CLI output and the UI dialog.
pub const BAREBONES_CURSEFORGE_URL: &str =
    "https://www.curseforge.com/minecraft/modpacks/barebones-template-cleanroom";

/// A verified BareBones import drops this marker into `mods/`; it satisfies
/// the gate on its own (the pack's `overrides/mods/` carries the real jars).
pub const BAREBONES_MARKER_FILE: &str = "barebones-template-cleanroom.marker";

/// `Ok(())` when every required compat mod is present (or the BareBones
/// marker is), else `Err` with the lowercase markers that are missing.
pub fn check_cleanroom_gate(mods_dir: &Path) -> Result<(), Vec<String>> {
    if !mods_dir.is_dir() {
        return Err(CLEANROOM_REQUIRED_MODS
            .iter()
            .map(|m| m.to_string())
            .collect());
    }
    let mut present = Vec::new();
    for entry in std::fs::read_dir(mods_dir).map_err(|_| {
        CLEANROOM_REQUIRED_MODS
            .iter()
            .map(|m| m.to_string())
            .collect::<Vec<_>>()
    })? {
        let Ok(entry) = entry else { continue };
        let name = entry.file_name().to_string_lossy().to_lowercase();
        if name == BAREBONES_MARKER_FILE {
            return Ok(());
        }
        // enabled jars only: a `.jar.disabled` file does not load
        for required in CLEANROOM_REQUIRED_MODS {
            if name.contains(required) && name.ends_with(".jar") && !present.contains(required) {
                present.push(*required);
            }
        }
    }
    let missing: Vec<String> = CLEANROOM_REQUIRED_MODS
        .iter()
        .filter(|required| !present.contains(required))
        .map(|required| (*required).to_string())
        .collect();
    if missing.is_empty() {
        Ok(())
    } else {
        Err(missing)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn scratch(tag: &str) -> std::path::PathBuf {
        let dir = std::env::temp_dir().join(format!(
            "gate-{tag}-{}-{:?}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .map(|d| d.subsec_nanos())
                .unwrap_or_default()
        ));
        std::fs::create_dir_all(&dir).unwrap();
        dir
    }

    #[test]
    fn missing_mods_block_the_gate_with_the_full_list() {
        let dir = scratch("empty");
        let missing = check_cleanroom_gate(&dir).unwrap_err();
        assert_eq!(missing.len(), CLEANROOM_REQUIRED_MODS.len());
        std::fs::remove_dir_all(&dir).ok();
        // an absent mods dir blocks too
        assert!(check_cleanroom_gate(&dir).is_err());
    }

    #[test]
    fn every_required_mod_present_passes() {
        let dir = scratch("full");
        for marker in CLEANROOM_REQUIRED_MODS {
            std::fs::write(dir.join(format!("{marker}-1.0.0.jar")), b"jar").unwrap();
        }
        assert!(check_cleanroom_gate(&dir).is_ok());
        std::fs::remove_dir_all(&dir).ok();
    }

    #[test]
    fn disabled_and_foreign_jars_do_not_count() {
        let dir = scratch("disabled");
        std::fs::write(dir.join("fugue.jar.disabled"), b"jar").unwrap();
        std::fs::write(dir.join("sodium.jar"), b"jar").unwrap();
        assert!(check_cleanroom_gate(&dir).is_err());
        std::fs::remove_dir_all(&dir).ok();
    }

    #[test]
    fn the_barebones_marker_satisfies_the_gate_on_its_own() {
        let dir = scratch("marker");
        std::fs::write(dir.join(BAREBONES_MARKER_FILE), b"verified import").unwrap();
        assert!(check_cleanroom_gate(&dir).is_ok());
        std::fs::remove_dir_all(&dir).ok();
    }
}
