//! Mojang's content-addressed object store (`objects/xx/<sha1>`), shared by
//! the JVM launch path and the Horizon resource preparation. Nothing here is
//! bundled: objects are fetched from Mojang's CDN on demand and verified
//! against the asset index before use.

use std::collections::HashSet;
use std::path::{Path, PathBuf};

use twilight_downloader::{
    AssetIndex, AssetObject, DownloadError, DownloadRequest, MOJANG_RESOURCES_BASE,
    ParallelDownloader,
};

use crate::error::HorizonError;

/// The verified asset store root.
pub struct AssetStore {
    pub root: PathBuf,
}

impl AssetStore {
    pub fn new(root: impl Into<PathBuf>) -> Self {
        Self { root: root.into() }
    }

    /// Content-addressed path of one object inside the store.
    pub fn object_path(&self, hash: &str) -> PathBuf {
        object_rel_path(hash).map_or_else(
            |_| self.root.join("objects").join(hash),
            |p| self.root.join(p),
        )
    }

    /// Composes download requests for the whole index from Mojang's CDN; each
    /// already carries its own expected sha1.
    ///
    /// Asset indexes map many resource names onto one hash (the 1.8 index
    /// reuses sounds hundreds of times); one request per unique hash — more
    /// would have concurrent downloads racing on the same `.part` file.
    pub fn download_requests(&self, index: &AssetIndex) -> Vec<DownloadRequest> {
        let mut seen = HashSet::new();
        index
            .objects
            .values()
            .filter(|AssetObject { hash, .. }| seen.insert(hash.clone()))
            .filter(|AssetObject { hash, .. }| object_rel_path(hash).is_ok())
            .map(|AssetObject { hash, .. }| DownloadRequest {
                url: format!("{MOJANG_RESOURCES_BASE}{}/{hash}", &hash[..2]),
                dest: self.object_path(hash),
                sha1: Some(hash.clone()),
            })
            .collect()
    }

    /// Verifies every object against its sha1. Missing files surface as
    /// `MissingObject`, corrupted ones as `CorruptObject`.
    pub async fn verify_all(&self, index: &AssetIndex) -> Result<(), HorizonError> {
        for (resource, obj) in &index.objects {
            if object_rel_path(&obj.hash).is_err() {
                return Err(HorizonError::CorruptObject {
                    resource: resource.clone(),
                    expected: obj.hash.clone(),
                    actual: "not a 40-hex sha1".to_owned(),
                });
            }
            let actual = match twilight_downloader::sha1_of_file(&self.object_path(&obj.hash)).await
            {
                Ok(actual) => actual,
                Err(DownloadError::Io { source, .. }) => {
                    return Err(HorizonError::MissingObject {
                        resource: resource.clone(),
                        source,
                    });
                }
                Err(e) => return Err(e.into()),
            };
            if actual != obj.hash.to_lowercase() {
                return Err(HorizonError::CorruptObject {
                    resource: resource.clone(),
                    expected: obj.hash.clone(),
                    actual,
                });
            }
        }
        Ok(())
    }

    /// Downloads every index object and verifies the store. No Horizon
    /// manifest is written: the prepared resources' manifest describes the
    /// game-readable layout, while this store stays a plain Mojang object pool.
    pub async fn ensure_objects(
        &self,
        index: &AssetIndex,
        downloader: &ParallelDownloader,
    ) -> Result<(), HorizonError> {
        self.ensure_objects_with_progress(index, downloader, None)
            .await
    }

    /// Like [`ensure_objects`], but forwards download progress to a callback.
    pub async fn ensure_objects_with_progress(
        &self,
        index: &AssetIndex,
        downloader: &ParallelDownloader,
        progress: Option<
            std::sync::Arc<dyn Fn(twilight_downloader::DownloadProgress) + Send + Sync>,
        >,
    ) -> Result<(), HorizonError> {
        let dl = if let Some(progress) = progress {
            downloader.clone().with_progress(move |p| progress(p))
        } else {
            downloader.clone()
        };
        dl.download_all(&self.download_requests(index)).await?;
        self.verify_all(index).await
    }

    /// Copies every object to `resources_root/<index key>` (needed for
    /// `map_to_resources` and legacy `virtual` indexes). Returns how many
    /// files were written; already-present identical files are skipped by
    /// content hash.
    pub async fn export_to_resources(
        &self,
        index: &AssetIndex,
        resources_root: &Path,
    ) -> Result<usize, HorizonError> {
        tokio::fs::create_dir_all(resources_root).await?;
        let mut written = 0usize;
        for (resource, obj) in &index.objects {
            let Some(relative) = safe_relative(resource) else {
                continue;
            };
            let source = self.object_path(&obj.hash);
            let target = resources_root.join(relative);
            if let Some(parent) = target.parent() {
                tokio::fs::create_dir_all(parent).await?;
            }
            // identical copies are skipped by content hash
            if twilight_downloader::sha1_of_file(&target)
                .await
                .as_deref()
                .is_ok_and(|h| h.eq_ignore_ascii_case(&obj.hash))
            {
                continue;
            }
            tokio::fs::copy(&source, &target).await?;
            written += 1;
        }
        Ok(written)
    }
}

/// `objects/xx/<sha1>` for a valid 40-hex hash.
pub fn object_rel_path(hash: &str) -> Result<PathBuf, HorizonError> {
    if hash.len() != 40 || !hash.bytes().all(|b| b.is_ascii_hexdigit()) {
        return Err(HorizonError::CorruptObject {
            resource: hash.to_owned(),
            expected: "a 40-hex sha1".to_owned(),
            actual: hash.to_owned(),
        });
    }
    Ok(Path::new("objects").join(&hash[..2]).join(hash))
}

/// A resource path is accepted only when it is relative, uses forward slashes
/// and contains no `..`/drive/UNC segments.
pub fn safe_relative(raw: &str) -> Option<PathBuf> {
    if raw.is_empty()
        || raw.starts_with('/')
        || raw.starts_with('\\')
        || raw.contains(['\\', '\0', ':'])
    {
        return None;
    }
    let mut out = PathBuf::new();
    for part in raw.split('/') {
        match part {
            "" | "." => continue,
            ".." => return None,
            _ => out.push(part),
        }
    }
    (!out.as_os_str().is_empty()).then_some(out)
}
