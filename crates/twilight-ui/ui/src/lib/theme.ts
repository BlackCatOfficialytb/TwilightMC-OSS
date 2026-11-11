// XMCL-style dynamic accent engine: one user-chosen color drives every
// interactive surface via the color-mix() derivations in app.css, and the
// readable text-on-accent ink is recalculated on each change. Presets are
// named after Minecraft ores.

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
