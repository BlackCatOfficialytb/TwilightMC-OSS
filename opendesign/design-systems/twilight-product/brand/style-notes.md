# Style notes — visual foundations

## Color roles (not swatches)

| Role | Dark | Light | Notes |
|---|---|---|---|
| Canvas `--bg-1` | `#0b0f19` | `#f1f5f9` | app ground, drawer wells, scrims sit on it |
| Surface `--bg-2` | `#111827` | `#ffffff` | cards, modals, sidebar, menus |
| Well `--bg-3` | `#182234` | `#f8fafc` | inputs, table bodies, hover fills, tab rail |
| Border `--border-1` | `#2d3a4f` | `#e2e8f0` | the only chrome line; 1px, full-opacity |
| Text primary `--fg-1` | `#f8fafc` | `#0f172a` | names, values |
| Text muted `--fg-2` | `#94a3b8` | `#64748b` | meta, captions, ghost-button text |
| Brand `--accent-1` | `#06b6d4` cyan-500 | `#0891b2` cyan-600 | interactive signal |
| Brand hover | `#22d3ee` cyan-400 | `#0e7490` cyan-700 | |
| Star `--accent-2` | `#f59e0b` amber-500 | `#d97706` amber-600 | warnings, pre-release badges, disabled/pinned states |
| On-accent `--on-accent` | `#0f172a` | `#0f172a` | dark ink on solid cyan in both modes |
| Destructive | rose-400 text, rose-500/10 fill | | deletes/permanent actions only |

Cyan/amber are the only brand hues. Rose is a codebase-inherited destructive
exception. Never indigo, never blue, never purple gradients.

## Type

- `--font-sans`: system stack (`ui-sans-serif, system-ui, …`). Nothing shipped.
- `--font-mono` **(new for the rewrite)**: `JetBrains Mono → ui-monospace` for
  instance ids, version strings, file paths, console output. It is the
  identifier voice; body copy never switches to mono.
- Scale is the five shipped steps (10/11/12/13/14px, see SKILL.md). Line
  heights 1.4–1.5. Nothing above 14px in the shell — hierarchy comes from
  weight, tracking, and color, not size.

## Spacing & radius

- Gap rhythm inside cards/panels: 4px grid; `gap-2` (8px) for related
  controls, `gap-3` (12px) for groups, `mt-3` between stacked sections.
- Panel padding: 16px (`p-4`) standard; 12px in the tab rail.
- Radius: 4–6px controls, 8px modal panels, full for pills/toggles.
- Icon chips: 36×36px, radius 6px, `--brand-tint` ground.

## Backgrounds & elevation

1. Canvas → Surface → Well, value-only elevation. No shadows except the
   modal `shadow-2xl` (the single allowed elevation cue, inherited).
2. Scrims: solid black 60%, no blur.
3. Selected/hovered accent contexts use `--brand-tint` (15% cyan wash);
   solid cyan only for primary buttons.

## Borders, states, focus

- Hover on cards: border `--border-1 → --accent-1`.
- Hover on ghost controls: fill `--bg-3`, text muted → primary.
- Selected: 1px accent border (+ optional tint fill).
- Disabled: opacity 40%.
- Focus-visible: `0 0 0 1px` accent ring, always visible for keyboard users.
- Press: no scale; fill darkens one step.

## Motion grammar

- Durations 100–150ms; easing default; properties limited to color, opacity,
  height (drawer collapse), and (rewrite-only) 200ms panel slides for the
  sidebar rail.
- The console drawer's collapsible bar is the one structural animation.
- Hover scrims (▶ Play) fade 150ms opacity.
- No page transitions, no springs, no parallax, no confetti.

## Iconography

- Unicode glyphs are the icon set: `＋ ✕ ♻ ▶ ⋯ ⤓ ⚙ 📂 ▤ ⌗ ⦚ ▸`.
- 12–14px, muted by default; active entries take accent tint text.
- Emoji-as-icon is forbidden; the 📂/⚙ glyphs read as pictograms, which the
  codebase already ships.
- The logomark (`assets/logos/logo.png`) appears in the sidebar and empty
  states, never as a button icon.

## Density

- Grid cards: `minmax(230px, 1fr)` columns, 12px gaps; card padding 12px.
- Mods table rows: 34–36px, hairline separators, name + filename/size on two
  lines, controls right-aligned.
- Modals are fixed-size sheets: 640×480 edit-instance, 520px settings,
  380px confirmations.
