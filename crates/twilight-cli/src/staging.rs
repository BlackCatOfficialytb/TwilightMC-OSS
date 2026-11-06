//! Isolated artifact staging: natives scratch-dirs and download spills root
//! under `<temp>/twilightmc_staging` (override via `--temp-dir`), so instance
//! directories and the shared artifact store stay pristine.

use std::path::{Path, PathBuf};

/// Every transient artifact TwilightMC writes while launching a game.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ArtifactStaging {
    root: PathBuf,
}

impl ArtifactStaging {
    /// `temp_root` defaults to the system temp dir; the staging root is
    /// `<temp_root>/twilightmc_staging` in every case.
    pub fn new(temp_root: Option<PathBuf>) -> Self {
        let root = temp_root
            .unwrap_or_else(std::env::temp_dir)
            .join("twilightmc_staging");
        Self { root }
    }

    pub fn root(&self) -> &Path {
        &self.root
    }

    /// Parallel-downloader spill directory: `staging/downloads/`.
    pub fn downloads_dir(&self) -> PathBuf {
        self.root.join("staging").join("downloads")
    }

    /// Per-instance natives scratchpad: `staging/natives/<instance_id>/`.
    pub fn natives_dir(&self, instance_id: &str) -> PathBuf {
        self.root.join("staging").join("natives").join(instance_id)
    }

    /// Creates the `downloads` and `natives` sub-roots.
    pub async fn ensure_dirs(&self) -> std::io::Result<()> {
        tokio::fs::create_dir_all(self.downloads_dir()).await?;
        tokio::fs::create_dir_all(self.root.join("staging").join("natives")).await?;
        Ok(())
    }

    /// Purges the whole staging area (the before-launch hook); missing roots
    /// are tolerated, so repeated calls are idempotent.
    pub async fn clean(&self) -> std::io::Result<()> {
        match tokio::fs::remove_dir_all(&self.root).await {
            Ok(()) => Ok(()),
            Err(e) if e.kind() == std::io::ErrorKind::NotFound => Ok(()),
            Err(e) => Err(e),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn fresh_dir(tag: &str) -> PathBuf {
        let nanos = std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .map(|d| d.subsec_nanos())
            .unwrap_or(0);
        std::env::temp_dir().join(format!("cli-{tag}-{}-{nanos}", std::process::id()))
    }

    #[test]
    fn default_root_is_the_system_temp_dir() {
        let staging = ArtifactStaging::new(None);
        assert_eq!(
            staging.root(),
            std::env::temp_dir().join("twilightmc_staging").as_path()
        );
    }

    #[test]
    fn staging_paths_are_isolated_per_instance() {
        let temp = fresh_dir("paths");
        let staging = ArtifactStaging::new(Some(temp.clone()));
        assert_eq!(staging.root(), temp.join("twilightmc_staging").as_path());
        assert_eq!(
            staging.natives_dir("26.3"),
            temp.join("twilightmc_staging")
                .join("staging")
                .join("natives")
                .join("26.3")
        );
        assert_eq!(
            staging.downloads_dir(),
            temp.join("twilightmc_staging")
                .join("staging")
                .join("downloads")
        );
        // different instance ids never share a natives scratchpad
        assert_ne!(staging.natives_dir("a"), staging.natives_dir("b"));
    }

    #[tokio::test]
    async fn ensure_then_clean_purges_everything() {
        let temp = fresh_dir("clean");
        let staging = ArtifactStaging::new(Some(temp.clone()));
        staging.ensure_dirs().await.unwrap();
        tokio::fs::write(staging.downloads_dir().join("x.part"), b"y")
            .await
            .unwrap();
        // per-instance natives dirs are the extractor's responsibility
        tokio::fs::create_dir_all(staging.natives_dir("inst"))
            .await
            .unwrap();
        tokio::fs::write(staging.natives_dir("inst").join("b.dll"), b"c")
            .await
            .unwrap();
        assert!(staging.downloads_dir().is_dir());
        assert!(staging.natives_dir("inst").is_dir());

        staging.clean().await.unwrap();
        assert!(
            !staging.root().exists(),
            "clean purges the whole staging root"
        );
        // idempotent on a missing root
        staging.clean().await.unwrap();
        let _ = tokio::fs::remove_dir_all(&temp).await;
    }
}
