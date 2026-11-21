# twilight-product — Cosmic Cyan

The product-surface design system for **TwilightMC**, an open-source
Minecraft launcher (Bolide alpha). Extracted from the shipped Tauri/Svelte
codebase, not from screenshots: every token and component below is observed
in `crates/twilight-ui`.

## Brand understanding

TwilightMC is a Prism-style, keyboard-first desktop launcher written for
technical enthusiasts. Its identity is *restrained night-blue chrome under a
single cyan signal light*: dense surfaces, hairline borders, no shadows, no
gradients, no animation for its own sake. The launcher is honest about being
pre-release — an amber badge rides the window title, the tab title, and the
sidebar until 1.0. Voice is terse and operational ("Ready", "Instance
deleted."); the UI prefers one crisp status word over progress theater.

## Sources consulted

- `crates/twilight-ui/ui/src/app.css` — the 29-line token source of truth
  (both themes).
- `crates/twilight-ui/ui/src/App.svelte` — shell, toolbar, wizard, modals,
  context menus, console drawer, settings, escape/keyboard grammar.
- `crates/twilight-ui/ui/src/lib/InstanceCard.svelte`,
  `InstanceGrid.svelte` — card anatomy, pills, hover play scrim, empty
  states.
- `crates/twilight-ui/ui/src/lib/EditInstanceModal.svelte` — tab rail,
  mods table, toggle switch, action row.
- `crates/twilight-ui/tauri.conf.json` — window title badge, dark default.
- `ui/public/logo.png` — the only shipped brand asset (copied to
  `assets/logos/`).

## Folder index

| Path | Contents |
|---|---|
| `SKILL.md` | Portable agent skill: rules any design/code agent must hold |
| `tokens/colors_and_type.css` | Canonical tokens: raw + semantic, both themes |
| `brand/voice-and-tone.md` | Copy rules: casing, punctuation, status words |
| `brand/style-notes.md` | Visual foundations: color roles, type, spacing, motion, iconography |
| `assets/logos/logo.png` | The shipped logomark |
| `ui-kit-twilight-ui/` | JSX component kit + interactive showcase |

## Canonical decisions to confirm before 1.0

- JetBrains Mono as the identifier voice (ids, versions, console) — the only
  font addition beyond the system stack.
- Rose-400 as the destructive hue (outside the cyan/amber pair) — inherited
  from the codebase, formalized here.
- Unicode glyph icons (no icon font, no SVG set) — workable at this density,
  but revisit if the shell grows artwork-heavy surfaces.
