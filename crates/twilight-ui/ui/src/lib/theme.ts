// XMCL-style dynamic accent engine: one user-chosen color drives every
// interactive surface via the color-mix() derivations in app.css, and the
// readable text-on-accent ink is recalculated on each change. Presets are
// named after Minecraft ores. Also hosts the theme-preset registry (nine
// built-ins plus user-built custom themes): built-ins are applied to <html>
// as dark/light + preset-* token classes, custom themes paint their tokens
// inline, and every theme declares its own default accent so a theme
// switch re-homes the accent instead of leaking the previous pick.

const ACCENT_KEY = 'twilight_user_accent';
const CUSTOM_KEY = 'twilight_custom_themes';

export const DEFAULT_ACCENT = '#06B6D4'; // Diamond Cyan

/** Minecraft ore-themed accent suggestions for the Twilight pair. */
const ORE_ACCENTS = [
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

/**
 * All 14 official Catppuccin accent colors per flavor, transcribed from
 * `upstream/catppuccin-palette/palette.json` (v1.8.0) in the palette's own
 * accent order: rosewater, flamingo, pink, mauve, red, maroon, peach,
 * yellow, green, teal, sky, sapphire, blue, lavender.
 */
const CATPPUCCIN_ACCENTS = {
  latte: [
    { name: 'Rosewater', hex: '#dc8a78' },
    { name: 'Flamingo', hex: '#dd7878' },
    { name: 'Pink', hex: '#ea76cb' },
    { name: 'Mauve', hex: '#8839ef' },
    { name: 'Red', hex: '#d20f39' },
    { name: 'Maroon', hex: '#e64553' },
    { name: 'Peach', hex: '#fe640b' },
    { name: 'Yellow', hex: '#df8e1d' },
    { name: 'Green', hex: '#40a02b' },
    { name: 'Teal', hex: '#179299' },
    { name: 'Sky', hex: '#04a5e5' },
    { name: 'Sapphire', hex: '#209fb5' },
    { name: 'Blue', hex: '#1e66f5' },
    { name: 'Lavender', hex: '#7287fd' },
  ],
  frappe: [
    { name: 'Rosewater', hex: '#f2d5cf' },
    { name: 'Flamingo', hex: '#eebebe' },
    { name: 'Pink', hex: '#f4b8e4' },
    { name: 'Mauve', hex: '#ca9ee6' },
    { name: 'Red', hex: '#e78284' },
    { name: 'Maroon', hex: '#ea999c' },
    { name: 'Peach', hex: '#ef9f76' },
    { name: 'Yellow', hex: '#e5c890' },
    { name: 'Green', hex: '#a6d189' },
    { name: 'Teal', hex: '#81c8be' },
    { name: 'Sky', hex: '#99d1db' },
    { name: 'Sapphire', hex: '#85c1dc' },
    { name: 'Blue', hex: '#8caaee' },
    { name: 'Lavender', hex: '#babbf1' },
  ],
  macchiato: [
    { name: 'Rosewater', hex: '#f4dbd6' },
    { name: 'Flamingo', hex: '#f0c6c6' },
    { name: 'Pink', hex: '#f5bde6' },
    { name: 'Mauve', hex: '#c6a0f6' },
    { name: 'Red', hex: '#ed8796' },
    { name: 'Maroon', hex: '#ee99a0' },
    { name: 'Peach', hex: '#f5a97f' },
    { name: 'Yellow', hex: '#eed49f' },
    { name: 'Green', hex: '#a6da95' },
    { name: 'Teal', hex: '#8bd5ca' },
    { name: 'Sky', hex: '#91d7e3' },
    { name: 'Sapphire', hex: '#7dc4e4' },
    { name: 'Blue', hex: '#8aadf4' },
    { name: 'Lavender', hex: '#b7bdf8' },
  ],
  mocha: [
    { name: 'Rosewater', hex: '#f5e0dc' },
    { name: 'Flamingo', hex: '#f2cdcd' },
    { name: 'Pink', hex: '#f5c2e7' },
    { name: 'Mauve', hex: '#cba6f7' },
    { name: 'Red', hex: '#f38ba8' },
    { name: 'Maroon', hex: '#eba0ac' },
    { name: 'Peach', hex: '#fab387' },
    { name: 'Yellow', hex: '#f9e2af' },
    { name: 'Green', hex: '#a6e3a1' },
    { name: 'Teal', hex: '#94e2d5' },
    { name: 'Sky', hex: '#89dceb' },
    { name: 'Sapphire', hex: '#74c7ec' },
    { name: 'Blue', hex: '#89b4fa' },
    { name: 'Lavender', hex: '#b4befe' },
  ],
};

/** The 14-accent suggested palette for a Catppuccin flavor id. */
function catppuccinAccents(flavor) {
  return CATPPUCCIN_ACCENTS[flavor] ?? [];
}

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
 * while dragging the color input and during theme re-homing). Returns
 * false for invalid hex.
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

/** Restores the active theme's built-in accent (drops the saved pick). */
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

/** Re-applies the saved accent; call once on app mount, before applyTheme. */
export function loadSavedAccent() {
  const saved = getSavedAccent();
  if (saved) applyAccentColor(saved);
}

// ---- theme presets ----
// Twilight Dark/Light keep their legacy grounds (no preset class needed);
// every other preset carries a `cls` that app.css maps to a full token
// block. `accent` is the theme's built-in accent — the default the accent
// re-homes to on a theme switch — and `suggested` is the palette shown in
// Settings for that theme. An explicit user pick always overrides.

export const THEME_PRESETS = [
  {
    id: 'twilight-dark',
    label: 'Twilight Dark',
    dark: true,
    cls: null,
    swatch: ['#0b0f19', '#182234', '#06B6D4'],
    accent: '#06B6D4',
    suggested: ORE_ACCENTS,
  },
  {
    id: 'twilight-light',
    label: 'Twilight Light',
    dark: false,
    cls: null,
    swatch: ['#f1f5f9', '#ffffff', '#0891b2'],
    accent: '#0891b2',
    suggested: [{ name: 'Diamond Cyan', hex: '#0891B2' }, ...ORE_ACCENTS.slice(1)],
  },
  {
    id: 'catppuccin-latte',
    label: 'Catppuccin Latte',
    dark: false,
    cls: 'preset-catppuccin-latte',
    swatch: ['#eff1f5', '#e6e9ef', '#8839ef'],
    accent: '#8839ef',
    suggested: catppuccinAccents('latte'),
  },
  {
    id: 'catppuccin-frappe',
    label: 'Catppuccin Frappé',
    dark: true,
    cls: 'preset-catppuccin-frappe',
    swatch: ['#303446', '#414559', '#ca9ee6'],
    accent: '#ca9ee6',
    suggested: catppuccinAccents('frappe'),
  },
  {
    id: 'catppuccin-macchiato',
    label: 'Catppuccin Macchiato',
    dark: true,
    cls: 'preset-catppuccin-macchiato',
    swatch: ['#24273a', '#363a4f', '#c6a0f6'],
    accent: '#c6a0f6',
    suggested: catppuccinAccents('macchiato'),
  },
  {
    id: 'catppuccin-mocha',
    label: 'Catppuccin Mocha',
    dark: true,
    cls: 'preset-catppuccin-mocha',
    swatch: ['#1e1e2e', '#313244', '#cba6f7'],
    accent: '#cba6f7',
    suggested: catppuccinAccents('mocha'),
  },
  {
    id: 'nord',
    label: 'Nord',
    dark: true,
    cls: 'preset-nord',
    swatch: ['#2e3440', '#3b4252', '#88c0d0'],
    accent: '#88c0d0',
    suggested: [
      { name: 'Frost Cyan', hex: '#88c0d0' },
      { name: 'Frost Blue', hex: '#81a1c1' },
      { name: 'Frost Steel', hex: '#5e81ac' },
      { name: 'Aurora Green', hex: '#a3be8c' },
      { name: 'Aurora Yellow', hex: '#ebcb8b' },
      { name: 'Aurora Red', hex: '#bf616a' },
      { name: 'Aurora Mauve', hex: '#b48ead' },
    ],
  },
  {
    id: 'tokyo-night',
    label: 'Tokyo Night',
    dark: true,
    cls: 'preset-tokyo-night',
    swatch: ['#1a1b26', '#24283b', '#7aa2f7'],
    accent: '#7aa2f7',
    suggested: [
      { name: 'Storm Blue', hex: '#7aa2f7' },
      { name: 'Cyan', hex: '#7dcfff' },
      { name: 'Purple', hex: '#bb9af7' },
      { name: 'Green', hex: '#9ece6a' },
      { name: 'Orange', hex: '#ff9e64' },
      { name: 'Red', hex: '#f7768e' },
    ],
  },
  {
    id: 'high-contrast',
    label: 'High Contrast',
    dark: true,
    cls: 'preset-high-contrast',
    swatch: ['#000000', '#0a0a0a', '#00ffff'],
    accent: '#00ffff',
    suggested: [
      { name: 'Neon Cyan', hex: '#00ffff' },
      { name: 'Neon Yellow', hex: '#ffff00' },
      { name: 'Neon Green', hex: '#00ff00' },
      { name: 'Neon Magenta', hex: '#ff00ff' },
    ],
  },
];

export const DEFAULT_THEME = 'twilight-dark';

// ---- custom themes ----
// Stored in localStorage only (`twilight_custom_themes`); the backend keeps
// recording just the dark/light ground. The token set mirrors the core
// custom properties in app.css.

const TOKEN_FALLBACK = {
  bg1: '#0b0f19',
  bg2: '#111827',
  bg3: '#182234',
  border1: '#2d3a4f',
  fg1: '#f8fafc',
  fg2: '#94a3b8',
  accent1: '#06b6d4',
  accent2: '#f59e0b',
};

/** The eight builder fields, in display order. */
export const TOKEN_FIELDS = [
  { key: 'bg1', label: 'Canvas' },
  { key: 'bg2', label: 'Surface' },
  { key: 'bg3', label: 'Subtle' },
  { key: 'border1', label: 'Border' },
  { key: 'fg1', label: 'Text' },
  { key: 'fg2', label: 'Muted text' },
  { key: 'accent1', label: 'Accent' },
  { key: 'accent2', label: 'Star accent' },
];

function slugify(name) {
  let slug = '';
  for (const ch of name) {
    const code = ch.codePointAt(0);
    if (code >= 65 && code <= 90) slug += String.fromCharCode(code + 32);
    else if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57) || ch === '-' || ch === '_')
      slug += ch;
    else if (ch === ' ' || ch === '.') slug += '-';
  }
  return slug.replace(/^-+|-+$/g, '');
}

function normalizeTokens(raw) {
  const t = raw && typeof raw === 'object' ? raw : {};
  const out = {};
  for (const [key, fallback] of Object.entries(TOKEN_FALLBACK)) {
    out[key] = normalizeHex(t[key] ?? '') ?? fallback;
  }
  return out;
}

function isCustomId(id) {
  return typeof id === 'string' && id.startsWith('custom:');
}

function customById(id) {
  return listCustomThemes().find((t) => t.id === id) ?? null;
}

/** Every saved custom theme; malformed entries are dropped on read. */
export function listCustomThemes() {
  try {
    const raw = JSON.parse(localStorage.getItem(CUSTOM_KEY) ?? '[]');
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((t) => t && typeof t === 'object' && isCustomId(t.id))
      .map((t) => ({
        id: t.id,
        name: String(t.name ?? 'Custom theme'),
        dark: !!t.dark,
        tokens: normalizeTokens(t.tokens),
      }));
  } catch {
    return [];
  }
}

/** Inserts (or replaces, same slug) a custom theme and returns its record. */
export function saveCustomTheme({ name, dark, tokens }) {
  const label = String(name ?? '').trim() || 'Custom theme';
  const theme = {
    id: `custom:${slugify(label) || 'theme'}`,
    name: label,
    dark: !!dark,
    tokens: normalizeTokens(tokens),
  };
  const list = [...listCustomThemes().filter((t) => t.id !== theme.id), theme];
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
  return theme;
}

/** Drops one custom theme; returns the remaining list. */
export function deleteCustomTheme(id) {
  const list = listCustomThemes().filter((t) => t.id !== id);
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
  return list;
}

/** The active theme's live tokens — the builder's starting point. */
export function currentTokens() {
  try {
    const cs = getComputedStyle(document.documentElement);
    const read = (name, fallback) => {
      const value = cs.getPropertyValue(name).trim();
      return normalizeHex(value) ?? fallback;
    };
    const out = {};
    for (const [key, fallback] of Object.entries(TOKEN_FALLBACK)) {
      const cssVar = `--${key.replace(/(\d)$/, '-$1')}`; // bg1 -> --bg-1
      out[key] = read(cssVar, fallback);
    }
    return out;
  } catch {
    return { ...TOKEN_FALLBACK };
  }
}

const PRESET_IDS = new Set(THEME_PRESETS.map((p) => p.id));

/**
 * Maps a stored theme id to a live theme id: legacy `"dark"`/`"light"`
 * (settings.json and old localStorage values) become the Twilight presets,
 * custom ids survive while their theme is registered, unknown values
 * return null so callers can fall back.
 */
export function normalizeThemeId(value) {
  const id = (value ?? '').trim();
  if (id === 'dark') return DEFAULT_THEME;
  if (id === 'light') return 'twilight-light';
  if (PRESET_IDS.has(id)) return id;
  return customById(id) ? id : null;
}

/** Shapes a custom theme record into a preset-shaped object. */
function customPresetOf(custom) {
  const t = custom.tokens;
  return {
    id: custom.id,
    label: custom.name,
    dark: custom.dark,
    cls: null,
    swatch: [t.bg1, t.bg3, t.accent1],
    accent: t.accent1,
    suggested: [{ name: custom.name, hex: t.accent1 }],
    tokens: t,
  };
}

/** The preset definition for `id` (legacy and custom ids accepted). */
export function themePreset(id) {
  const norm = normalizeThemeId(id);
  if (!norm) return null;
  return THEME_PRESETS.find((p) => p.id === norm) ?? customPresetOf(customById(norm));
}

/** True when `id` paints a dark ground; unknown ids read as dark. */
export function isDarkTheme(id) {
  return themePreset(id)?.dark ?? true;
}

/** The theme's built-in accent hex (an explicit user pick overrides it). */
export function builtinAccent(id) {
  return themePreset(id)?.accent ?? DEFAULT_ACCENT;
}

// Inline custom-theme tokens painted on <html>; cleared on every applyTheme
// so the builtin preset classes rule again.
const CUSTOM_VARS = [
  '--bg-1',
  '--bg-2',
  '--bg-3',
  '--border-1',
  '--fg-1',
  '--fg-2',
  '--accent-1',
  '--accent-2',
];

// The theme applyTheme last settled on; empty until the first call, whose
// accent handling stays hands-off so a restored pick survives reloads.
let lastThemeId = '';

/**
 * Applies the theme to <html>: syncs the `dark`/`light` ground class with
 * the preset's flag and swaps the `preset-*` token class (twilight presets
 * run class-free on the default grounds). Custom themes paint their token
 * set inline instead. On an actual theme switch the accent re-homes to the
 * new theme's builtin — a stale pick from the old palette would otherwise
 * stick around. Returns the resolved preset.
 */
export function applyTheme(id) {
  const resolved = themePreset(id) ?? themePreset(DEFAULT_THEME);
  if (!resolved || resolved.id === lastThemeId) return resolved;
  const firstApply = lastThemeId === '';
  lastThemeId = resolved.id;

  const root = document.documentElement;
  for (const v of CUSTOM_VARS) root.style.removeProperty(v);
  root.classList.toggle('dark', resolved.dark);
  root.classList.toggle('light', !resolved.dark);
  for (const p of THEME_PRESETS) {
    if (p.cls) root.classList.toggle(p.cls, resolved.cls === p.cls);
  }

  if (resolved.tokens) {
    // custom theme: paint its tokens inline and let its own accent lead
    const t = resolved.tokens;
    root.style.setProperty('--bg-1', t.bg1);
    root.style.setProperty('--bg-2', t.bg2);
    root.style.setProperty('--bg-3', t.bg3);
    root.style.setProperty('--border-1', t.border1);
    root.style.setProperty('--fg-1', t.fg1);
    root.style.setProperty('--fg-2', t.fg2);
    root.style.setProperty('--accent-1', t.accent1);
    root.style.setProperty('--accent-2', t.accent2);
    localStorage.removeItem(ACCENT_KEY);
    applyAccentColor(t.accent1, { persist: false });
  } else if (!firstApply) {
    // theme switch: forget the old palette's pick and re-home on the new
    // builtin (persist:false — the default shows again after a reload)
    localStorage.removeItem(ACCENT_KEY);
    applyAccentColor(resolved.accent, { persist: false });
  }
  return resolved;
}
