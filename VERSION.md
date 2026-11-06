# VERSION.md — TwilightMC Release & Deprecation Policy

TwilightMC versions every published artifact — crates, the CLI executable and
release tags — with **SemVer 2.0.0**. Channel names are astronomical: a
launcher for a game about stars deserves star names.

## 1. Version format

```
v<MAJOR>.<MINOR>.<PATCH>
```

SemVer 2.0.0 applies verbatim, including build metadata (`+sha.abcdef0`) and
pre-release precedence (`-alpha.N` / `-beta.N` / `-star.N` / `-bolide.N` /
`-snapshot.R` all sort *before* the same `X.Y.Z` without a pre-release).

All crates in the workspace share one release train (`version.workspace =
true` in every crate): a release bumps every crate together, so the workspace
version *is* the product version. Per-crate incompatibilities are avoided by
design.

## 2. Release channels

| Channel   | Tag format                 | Meaning |
|-----------|----------------------------|---------|
| **Stable**  | `vX.Y.Z`                   | No pre-release suffix. Fully supported: bug-fix releases are cut against the latest Stable minor only. |
| **Star**    | `vX.Y.Z-star.N`, `N >= 1`  | *Beta*. Feature-complete for the upcoming `X.Y` milestone. Public API and on-disk formats are frozen; only bug fixes and user-experience polish land. |
| **Bolide**  | `vX.Y.Z-bolide.N`, `N >= 1`| *Alpha*. May crash, may rewrite formats. APIs, CLI flags and staging layouts can change without notice between Bolide numbers. |
| **Snapshot**| `vX.Y.Z-snapshot.R`        | *Rolling*. Continuous builds from `main`, at least one per week while development is active. `X.Y.Z` is the milestone **target** (it may not exist yet) and must be `>=` the highest published version. `R` increments per snapshot build. **Snapshots are never patched** — a bad snapshot is superseded by the next one. |

Examples of ascending order for the same milestone:

```
v0.1.0-bolide.1 < v0.1.0-bolide.2 < v0.1.0-star.1 < v0.1.0-snapshot.3 < v0.1.0
```

Wait — per SemVer, `-snapshot.3` sorts **before** the bare `v0.1.0`: the last
snapshot of a milestone is the last thing you test *before* it goes Stable.

## 3. Bump rules

- **PATCH** — bug fixes and identical-behaviour repairs. No new CLI flags, no
  new public crate functions beyond trivial additions.
- **MINOR** — backwards-compatible features: new subcommand, new flag, new
  public crate API, staging-layout *extensions* that older versions tolerate.
- **MAJOR** — breaking change: renamed or removed subcommand, changed flag
  semantics, changed staging/shared-directory layout in a way an older
  version cannot read, MSRV bump.
- **0.x caveat** — before `1.0.0`, MINOR bumps may carry breaking CLI changes
  (SemVer's own 0.x allowance), but they must be flagged `⚠ BREAKING` in the
  changelog and follow the notice period in §4.

## 4. Deprecation policy

1. A deprecated CLI subcommand/flag or a deprecated public crate API is
   **announced in the changelog** of the channel where the deprecation
   appears, and keeps functioning unchanged.
2. For Stable releases, removal happens **no earlier than two MINOR versions
   later** (`X.Y` → `X.(Y+2)`), and always in a MINOR (0.x: `X.(Y+1)`).
3. Bolide and Snapshot builds offer no deprecation window — anything can
   change or vanish without notice.
4. On-disk compatibility (instance directories, `horizon-assets.json`,
   staging layout) follows the same ramp: reading is permissive, writing a
   format an older release cannot read counts as a breaking change.
5. Release tags and their binary checksums are **immutable**. A broken
   release is fixed by a new PATCH/tag; force-updating an existing tag is
   only tolerated for a confirmed supply-chain/security incident, and must be
   disclosed in the changelog.

## 5. Current version

- Latest Stable: `v0.1.0` (pre-history; workspace `version = "0.1.0"`).
- The next release train starts from `0.1.0-snapshot.R`.
