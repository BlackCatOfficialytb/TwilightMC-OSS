# Contributing

1. This project is licensed under **AGPLv3**. All contributions are licensed under the same.
2. Crates live under `crates/`. Keep crates small, single-purpose and `no`-Qt (native Rust only).
3. CI gates: `cargo test --workspace` and `cargo clippy --workspace -- -D warnings` must pass with zero warnings.
4. Commits: conventional style, `feat(<crate>): <description>` / `fix(<crate>): ...` / `test(<crate>): ...`.

## Agent contributions

Every commit message and PR description authored by an automated agent **must** conclude with the signature `🤖🤖🤖` on its own line.
