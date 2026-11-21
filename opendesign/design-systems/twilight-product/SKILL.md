# SKILL.md — TwilightMC product design system (Cosmic Cyan)

## When to use
Any design or code work on the TwilightMC desktop launcher surfaces: shell
(sidebar/topbar), instance grid, wizard, edit-instance and Modrinth modals,
console drawer, settings. Also any marketing/deck work that must match the
product's identity.

## Anchoring
- Source of truth: `crates/twilight-ui/ui/src/app.css` (tokens) and the
  component classes in `crates/twilight-ui/ui/src/App.svelte`,
  `lib/InstanceCard.svelte`, `lib/InstanceGrid.svelte`,
  `lib/EditInstanceModal.svelte`.
- Tokens: `tokens/colors_and_type.css`. Dual themes via `dark`/`light` class
  on `<html>`; default to dark when a surface is standalone.

## Non-negotiables
1. **Cosmic Cyan is the only accent.** `--accent-1` cyan for interactive
   affordances, `--accent-2` amber (`--star`) reserved for warnings,
   pre-release badges, and disabled/paused states. Never indigo, never blue.
2. **Elevation is value, not shadow.** Three grounds only: canvas (`--bg-1`),
   surface (`--bg-2`), well (`--bg-3`). Cards sit on surface with 1px
   `--border-1`. No drop shadows, no blur, no gradients.
3. **Accent as tint.** Cyan appears as a 15% wash (`--brand-tint`) for
   selected/hovered/on-color contexts; solid cyan is for primary buttons only,
   and always with dark ink (`--on-accent`), never white.
4. **System font stack.** No brand font is shipped; `--font-sans` everywhere.
   `--font-mono` is the single addition, used only for instance ids, version
   strings, paths and console output.
5. **Unicode glyph iconography.** The UI speaks in text glyphs (`＋ ✕ ♻ ▶ ⋯
   ⤓ ⚙ 📂 ▤ ⌗ ⦚`), never emoji-as-icon, never SVG. 12–14px, muted by
   default, tinted only when active.
6. **Anti-animation discipline.** Transitions are 100–150ms, color/opacity/
   height only. No springs, no transforms, no fades on open. Status is text
   ("Ready", "Running X…"), never spinners-as-chrome (spinners only inside
   buttons that started work).
7. **Pre-release honesty.** Amber "pre-release UI" badges remain visible
   (window title, tab title, sidebar + topbar) until 1.0.
8. **Keyboard is first-class.** Every modal joins the overlay Escape stack;
   grid rows answer Arrows/Enter/Space; focus rings are 1px cyan, visible.

## Type scale (shipped steps)
| Token | Size | Weight | Case/tracking | Use |
|---|---|---|---|---|
| `--step-caption` | 10px | 600 | uppercase, +0.05em | section labels, pills |
| `--step-meta` | 11px | 400 | sentence | annotations, dates |
| `--step-body` | 12px | 400–500 | sentence | buttons, cells, body |
| `--step-card` | 13px | 500 | sentence | card/nav titles, inputs |
| `--step-heading` | 14px | 600 | sentence | modal + drawer headings |

## Component vocabulary (see `ui-kit-twilight-ui/`)
- **Button**: `primary` (solid cyan, dark ink), `ghost` (transparent, muted
  text, hover → `--bg-3` + primary text), `danger-ghost` (rose 400, hover
  rose/10). Radius 4–6px, padding 6–10px.
- **Pill**: 10px uppercase tracked label on `--brand-tint` (loader family) or
  `--star-tint` (heavy loaders/warnings) or `--bg-3` (neutral).
- **ToggleSwitch**: 36×20 pill, knob 14px; on = cyan fill, off = canvas ground;
  disabled at 40%.
- **InstanceCard**: surface card, 1px border → cyan border on hover/selected;
  icon 36px on `--brand-tint`, name 13px/500 truncated, version + loader
  pills, meta line 11px muted, hover reveals a ▶ Play scrim (canvas 80%).
- **Modal**: black 60% scrim, centered surface panel, 1px border, radius 8px,
  shadow-2xl allowed by the codebase (largest elevation cue in the system).
  Left tab rail 176px on `--bg-3` for the edit-instance sheet.
- **Context menu**: 176px surface panel, 1px border, entries 12px with 6px
  padding; destructive entries rose-400 text.
