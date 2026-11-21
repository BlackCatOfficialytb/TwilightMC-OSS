# twilight-shell-rewrite — direction notes

Three hi-fi directions for the TwilightMC shell (v0.4.0-alpha), all anchored
to the `twilight-product` design system (tokens verbatim from
`crates/twilight-ui/ui/src/app.css`). Every page carries a Dark/Light toggle;
the mockup backdrops (`--plate-bg`) are review chrome, not product tokens.

## Shared, fixed across all directions

- Cosmic Cyan tokens, three-ground elevation (canvas → surface → well),
  1px hairline borders, scrim-only overlays, no gradients, no shadow-cards
  (modal panel keeps the single inherited shadow).
- Unicode glyph iconography (`＋ ✕ ♻ ▶ ⋯ ⤓ ⚙ 📂 ▤ ⌗ ⦚`), JetBrains Mono
  as the identifier voice (paths, filenames, versions, console).
- Copy voice: operational, terse, sentence case, status-as-word
  (Ready / Running X… / Instance deleted.), errors shown verbatim in rose.
- Keyboard grammar: Escape pops the frontmost overlay (browser above edit
  sheet above shell); grid answers Arrows/Enter/Space.
- Amber "pre-release" badge stays until 1.0.

## Direction ↔ variation axis map

| Axis | A · Harbor | B · Yardarm | C · Dawnline |
|---|---|---|---|
| **Visuals** | tokens verbatim, +1 density step, mono identifiers formalized | tokens verbatim (inherits A) | light-first default, 14px body step (meta 12, cards 15, headings 16), tint-fill accents replace outline accents |
| **Layout** | current grammar refined: 192px labeled sidebar / topbar / grid / status bar | 56px glyph rail + 280px right context panel + ⌘K palette hint | current grammar, airier (+4px paddings, 16px grid gaps) |
| **Interactions** | current: hover-border → cyan, tint selection, context menus, ▶ scrim | palette-first: selection drives the context panel (200ms slide); right-click menus retained | unchanged grammar, larger targets (≥32px), tint-fill hover/selection |
| **Copy & microcopy** | standardized status words, `.mrpack` import named on nav | same voice; palette rows carry shortcut keys (N / I / E / T) | same voice; settings theme order leads with ☀ Light |
| **Motion** | 100–150ms, color/opacity/height only (status quo codified) | only addition: 200ms context-panel slide | modals fade-through 120ms (scrim + panel opacity, no scale) |

## What each page shows (identical plate order)

1. Shell — instances home: nav, topbar, toolbar, 6-card grid, status bar
2. Wizard — step 2 of 2 (version & loader)
3. Edit Instance — mods tab: filter, table, toggles, delete, add/import row
4. Modrinth browser — overlay above the edit sheet; install-state row set
5. Console drawer — running state, level-colored logs, stdin prompt
6. Settings — appearance / memory / java / launcher
7. `.mrpack` dropzone confirm (Task 3 surface: meta + target + warning)
8. Micro-states strip — buttons, pills, toggles, install states, context
   menu, empty grid, status words, progress-as-text, verbatim error line
   (Yardarm swaps in the ⌘K command palette as its 8th-plate centerpiece)

## Decision guide

- Choose **Harbor** if the milestone should land with minimum delta: it is
  the shipped UI with its rough edges filed down; lowest re-implementation
  cost, nothing conceptually new to build.
- Choose **Yardarm** if the launcher should feel keyboard-native: the rail +
  context panel + palette are one coherent bet on power users, but it is the
  largest Svelte rework (new shell components, selection model, palette).
- Choose **Dawnline** if the product should feel calmer and more readable:
  mostly a token/scale pass plus tint-fill CSS, but it changes the brand's
  default presentation to light and needs the contrast audits noted per page.
- Hybrids are cheap in one place: Dawnline's type scale + tint fills can ride
  on Harbor's layout with no structural change.
