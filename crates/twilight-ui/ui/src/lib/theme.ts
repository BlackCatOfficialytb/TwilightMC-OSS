// XMCL-style dynamic accent engine: one user-chosen color drives every
// interactive surface via the color-mix() derivations in app.css, and the
// readable text-on-accent ink is recalculated on each change. Presets are
// named after Minecraft ores. Also hosts the theme-preset registry: nine
// presets (legacy "dark"/"light" ids map onto the Twilight pair) applied
// to <html> as dark/light + preset-* token classes.

const ACCENT_KEY = 'twilight_user_accent';

export const DEFAULT_ACCENT = '#06B6D4'; // Cosmic Cyan

/** Minecraft ore-themed presets shown in Settings. */
export const ACCENT_PRESETS = [
  { name: 'Diamond Cyan', hex: '#06B6D4' },
  { name: 'Emerald Green', hex: '#10B981' },
  { name: 'Redstone Crimson', hex: '#EF4444' },
  { name: 'Amethyst Mauve', hex: '#C084FC' },
  { name: 'Gold Amber', hex: '#F59E0B' },
  { name: 'Lapis Azure', hex: '#3B82F6' },
  { name: 'Ender Pearl', hex: '#14B8A6' },
];

const DARK_INK = '#0F172A';
const WHITE_INK = '#FFFFFF';

/** Normalizes `#rgb` / `#rrggbb` to lowercase `#rrggbb`; null when invalid. */
export function normalizeHex(input) {
  let hex = input.trim().replace(/^#/, '');
  if (/^[0-9a-f]{3}$/i.test(hex)) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('');
  }
  return /^[0-9a-f]{6}$/i.test(hex) ? `#${hex.toLowerCase()}` : null;
}

/** WCAG relative luminance of a `#rrggbb` color (0–1). */
function relativeLuminance(hex) {
  const channel = (i) => {
    const v = parseInt(hex.replace('#', '').substring(i, i + 2), 16) / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
}

/**
 * Picks the legible ink for text sitting on `hex`: whichever of dark ink /
 * white has the higher WCAG contrast wins. (A brightness>155 threshold
 * flips light hues like Amethyst to white ink at ~2.6:1; the contrast pick
 * keeps "text on accent is always legible" true for arbitrary custom hex.)
 */
function pickOnAccent(hex) {
  const lum = relativeLuminance(hex);
  const vsWhite = 1.05 / (lum + 0.05);
  const vsInk = (lum + 0.05) / (relativeLuminance(DARK_INK) + 0.05);
  return vsInk >= vsWhite ? DARK_INK : WHITE_INK;
}

/**
 * Applies `hexColor` live: sets `--user-accent` on the root element (the
 * color-mix() formulas in app.css recalculate every derived treatment),
 * updates `--on-accent`, and persists unless `persist` is false (used
 * while dragging the color input). Returns false for invalid hex.
 */
export function applyAccentColor(hexColor, { persist = true } = {}) {
  const hex = normalizeHex(hexColor);
  if (!hex) return false;
  const root = document.documentElement;
  root.style.setProperty('--user-accent', hex);
  root.style.setProperty('--on-accent', pickOnAccent(hex));
  if (persist) localStorage.setItem(ACCENT_KEY, hex);
  return true;
}

/** Restores the built-in per-theme accent (Diamond Cyan / its light twin). */
export function resetAccent() {
  localStorage.removeItem(ACCENT_KEY);
  const root = document.documentElement;
  root.style.removeProperty('--user-accent');
  root.style.removeProperty('--on-accent');
}

/** The saved accent as normalized hex, or null when running the default. */
export function getSavedAccent() {
  return normalizeHex(localStorage.getItem(ACCENT_KEY) ?? '');
}

/** Re-applies the saved accent; call once on app mount. */
export function loadSavedAccent() {
  const saved = getSavedAccent();
  if (saved) applyAccentColor(saved);
}

// ---- theme presets ----
// Twilight Dark/Light keep their legacy grounds (no preset class needed);
// every other preset carries a `cls` that app.css maps to a full token
// block. `accent` is that theme's built-in accent — an explicit user pick
// (inline --user-accent) always overrides it.

export const THEME_PRESETS = [
  {
    id: 'twilight-dark',
    label: 'Twilight Dark',
    dark: true,
    cls: null,
    swatch: ['#0b0f19', '#182234', '#06B6D4'],
    accent: '#06B6D4',
  },
  {
    id: 'twilight-light',
    label: 'Twilight Light',
    dark: false,
    cls: null,
    swatch: ['#f1f5f9', '#ffffff', '#0891b2'],
    accent: '#0891b2',
  },
  {
    id: 'catppuccin-latte',
    label: 'Catppuccin Latte',
    dark: false,
    cls: 'preset-catppuccin-latte',
    swatch: ['#eff1f5', '#e6e9ef', '#8839ef'],
    accent: '#8839ef',
  },
  {
    id: 'catppuccin-frappe',
    label: 'Catppuccin Frappé',
    dark: true,
    cls: 'preset-catppuccin-frappe',
    swatch: ['#303446', '#414559', '#ca9ee6'],
    accent: '#ca9ee6',
  },
  {
    id: 'catppuccin-macchiato',
    label: 'Catppuccin Macchiato',
    dark: true,
    cls: 'preset-catppuccin-macchiato',
    swatch: ['#24273a', '#363a4f', '#c6a0f6'],
    accent: '#c6a0f6',
  },
  {
    id: 'catppuccin-mocha',
    label: 'Catppuccin Mocha',
    dark: true,
    cls: 'preset-catppuccin-mocha',
    swatch: ['#1e1e2e', '#313244', '#cba6f7'],
    accent: '#cba6f7',
  },
  {
    id: 'nord',
    label: 'Nord',
    dark: true,
    cls: 'preset-nord',
    swatch: ['#2e3440', '#3b4252', '#88c0d0'],
    accent: '#88c0d0',
  },
  {
    id: 'tokyo-night',
    label: 'Tokyo Night',
    dark: true,
    cls: 'preset-tokyo-night',
    swatch: ['#1a1b26', '#24283b', '#7aa2f7'],
    accent: '#7aa2f7',
  },
  {
    id: 'high-contrast',
    label: 'High Contrast',
    dark: true,
    cls: 'preset-high-contrast',
    swatch: ['#000000', '#0a0a0a', '#00e5ff'],
    accent: '#00e5ff',
  },
];

export const DEFAULT_THEME = 'twilight-dark';

const PRESET_IDS = new Set(THEME_PRESETS.map((p) => p.id));

/**
 * Maps a stored theme id to a valid preset id: legacy `"dark"`/`"light"`
 * (settings.json and old localStorage values) become the Twilight presets,
 * unknown values return null so callers can fall back.
 */
export function normalizeThemeId(value) {
  const id = (value ?? '').trim();
  if (id === 'dark') return DEFAULT_THEME;
  if (id === 'light') return 'twilight-light';
  return PRESET_IDS.has(id) ? id : null;
}

/** The preset definition for `id` (legacy ids accepted); null if unknown. */
export function themePreset(id) {
  const norm = normalizeThemeId(id);
  return norm ? THEME_PRESETS.find((p) => p.id === norm) ?? null : null;
}

/** True when `id` paints a dark ground; unknown ids read as dark. */
export function isDarkTheme(id) {
  return themePreset(id)?.dark ?? true;
}

/** The theme's built-in accent hex (overridden by any user pick). */
export function builtinAccent(id) {
  return themePreset(id)?.accent ?? DEFAULT_ACCENT;
}

/**
 * Applies the theme to <html>: syncs the `dark`/`light` ground class with
 * the preset's flag and swaps the `preset-*` token class (twilight presets
 * run class-free on the default grounds). Returns the resolved preset.
 */
export function applyTheme(id) {
  const preset = themePreset(id);
  const dark = preset ? preset.dark : true;
  const root = document.documentElement;
  root.classList.toggle('dark', dark);
  root.classList.toggle('light', !dark);
  for (const p of THEME_PRESETS) {
    if (p.cls) root.classList.toggle(p.cls, preset?.cls === p.cls);
  }
  return preset;
}
