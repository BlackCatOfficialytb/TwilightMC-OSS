//! Standard Minecraft offline UUID generation.
//!
//! Identical to Java's `UUID#nameUUIDFromBytes` (which vanilla servers use via
//! `UUIDUtil.createOfflineProfile`) and to Freesm's hand-rolled
//! `MinecraftAccount::uuidFromUsername`: MD5 over the raw UTF-8 bytes of
//! `OfflinePlayer:<name>` — **no** UUID namespace mixed in (that would change
//! the digest) — then version 3 + IETF variant bits.
use md5::{Digest, Md5};
use uuid::Uuid;

pub fn generate_offline_uuid(username: &str) -> Uuid {
    let mut hasher = Md5::new();
    hasher.update(format!("OfflinePlayer:{username}").as_bytes());
    // Builder::from_md5_bytes applies the version/variant bits exactly like the JVM
    uuid::Builder::from_md5_bytes(hasher.finalize().into()).into_uuid()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn published_reference_values() {
        // Reference values from offline-uuid generators/standards documentation
        assert_eq!(
            generate_offline_uuid("Notch").to_string(),
            "b50ad385-829d-3141-a216-7e7d7539ba7f"
        );
        assert_eq!(
            generate_offline_uuid("Steve").to_string(),
            "5627dd98-e6be-3c21-b8a8-e92344183641"
        );
        assert_eq!(
            generate_offline_uuid("jeb_").to_string(),
            "a762f560-4fce-3236-812a-b80efff0b62b"
        );
    }

    #[test]
    fn deterministic_and_case_sensitive() {
        let a = generate_offline_uuid("Notch");
        assert_ne!(
            generate_offline_uuid("notch"),
            a,
            "Java compares case-sensitively"
        );
        assert_eq!(generate_offline_uuid("Notch"), a, "deterministic");
        // v3 marker + RFC-4122 variant bits
        assert_eq!(a.get_version_num(), 3);
        assert_eq!(a.as_bytes()[8] >> 6, 0b10);
    }

    #[test]
    fn unicode_usernames_hash_utf8_bytes() {
        // shape only: uuid stays valid; accented and plain names must differ
        assert_ne!(
            generate_offline_uuid("Sónar"),
            generate_offline_uuid("Sonar")
        );
    }
}
