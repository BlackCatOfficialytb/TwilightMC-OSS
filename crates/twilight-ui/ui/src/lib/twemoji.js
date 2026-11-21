// Emoji → Twemoji asset resolution.
//
// System emoji fonts render inconsistently (and miss glyphs entirely on many
// Linux distros), so the UI paints Twitter Twemoji SVGs instead. Only the
// glyphs the interface actually uses are vendored under `public/twemoji/`;
// `emojiAsset()` returns the local URL (or null when a glyph has no asset, in
// which case callers fall back to the raw character).

// Canonical Twemoji filename: lowercase hex codepoints joined with '-',
// variation selectors (FE0F) dropped. Mirrors twemoji's `toCodePoint`.
export function emojiCodePoints(emoji) {
  const points = [];
  for (const char of String(emoji ?? '')) {
    const cp = char.codePointAt(0);
    if (cp === 0xfe0f || cp === 0xfe0e) continue; // variation selectors
    if (cp === 0x200d) {
      points.push('200d'); // zero-width joiner keeps its slot
      continue;
    }
    points.push(cp.toString(16));
  }
  return points.join('-');
}

// Glyphs vendored in `public/twemoji/` (see that folder's README).
export const TWEMOJI_ASSETS = new Set([
  '2699', // ⚙ gear
  '1f4c2', // 📂 open folder
  '1f4c1', // 📁 folder
  '2600', // ☀ sun
  '1f319', // 🌙 crescent moon
  '1f3a8', // 🎨 palette
  '2615', // ☕ coffee
  '2139', // ℹ info
  '1f9f1', // 🧱 bricks
  '1f9e9', // 🧩 puzzle
  '1f5bc', // 🖼 picture
  '1f4dc', // 📜 scroll
  '1f464', // 👤 bust
  '2705', // ✅ check
  '2714', // ✔ checkmark
  '267b', // ♻ recycle
  '1f504', // 🔄 refresh
  '1f517', // 🔗 link
  '1f4e6', // 📦 package
  '1f5d1', // 🗑 wastebasket
  '1f512', // 🔒 lock
  '1f310', // 🌐 globe
  '23f9', // ⏹ stop button
  '2b07', // ⬇ download
  '1f50d', // 🔍 magnifier
  // ---- gaming / Minecraft icon-picker set ----
  '2694',
  '1f6e1',
  '26cf',
  '1f3f9',
  '1f48e',
  '1f525',
  '1f680',
  '1f980',
  '2b50',
  '1f9ed',
  '1f5e1',
  '1f52e',
  '1f409',
  '1f47e',
  '2693',
  '1f3b2',
  '1f4a3',
  '1f36a',
  '1f331',
  '1f9bb',
  '1f4da',
  '2696',
  '1f3c6',
  '1f451',
  '1f9ea',
  '1f52d',
  '1f6e9',
]);

// Curated subset offered by the instance icon picker, in display order. The
// full set above stays available to `emojiAsset` for interface glyphs.
export const ICON_PICKER_TWEMOJI = [
  '1f980',
  '2694',
  '1f6e1',
  '26cf',
  '1f3f9',
  '1f48e',
  '1f525',
  '1f680',
  '2b50',
  '1f9ed',
  '1f310',
  '1f409',
  '1f47e',
  '1f4a3',
  '1f36a',
  '1f331',
  '1f9ea',
  '1f52e',
  '1f52d',
  '2693',
  '1f3b2',
  '1f4da',
  '2696',
  '1f3c6',
  '1f451',
  '1f5e1',
  '1f9f1',
  '1f9e9',
];

// Flat Prism/MultiMC instance icons vendored under
// `public/instance-icons/prism/` (see CREDITS.md). Keys match the SVG
// basenames upstream.
export const PRISM_INSTANCE_ICONS = [
  'grass',
  'dirt',
  'stone',
  'diamond',
  'gold',
  'iron',
  'brick',
  'planks',
  'creeper',
  'squarecreeper',
  'enderman',
  'skeleton',
  'steve',
  'herobrine',
  'chicken',
  'fox',
  'bee',
  'meat',
  'enderpearl',
  'netherstar',
  'flame',
  'tnt',
  'gear',
  'magitech',
  'fabricmc',
  'quiltmc',
  'neoforged',
  'modrinth',
  'ftb_logo',
  'prismlauncher',
];

// Classic pixel-art instance icons from FreesmLauncher's
// `launcher/resources/multimc/32x32/instances/<icon>_legacy.png` (GPL-3.0).
// Vendored verbatim under `public/instance-icons/legacy/` so the picker works
// fully offline. Keys are the PNG basenames.
export const LEGACY_INSTANCE_ICONS = [
  'grass_legacy',
  'dirt_legacy',
  'stone_legacy',
  'brick_legacy',
  'planks_legacy',
  'diamond_legacy',
  'gold_legacy',
  'iron_legacy',
  'tnt_legacy',
  'creeper_legacy',
  'squarecreeper_legacy',
  'skeleton_legacy',
  'chicken_legacy',
  'steve_legacy',
  'herobrine_legacy',
  'enderpearl_legacy',
  'netherstar_legacy',
  'meat_legacy',
  'gear_legacy',
  'magitech_legacy',
  'ftb_logo_legacy',
  'ftb_glow',
  'infinity_legacy',
];

// Absolute base so the shared panel and the console drawer resolve equally.
const BASE = import.meta.env.BASE_URL ?? '/';

/** Local Twemoji SVG URL for `emoji`, or null when the glyph isn't vendored. */
export function emojiAsset(emoji) {
  const cp = emojiCodePoints(emoji);
  if (!TWEMOJI_ASSETS.has(cp)) return null;
  return `${BASE}twemoji/${cp}.svg`.replace(/\/{2,}/g, '/');
}

/**
 * Resolves a stored instance `iconKey` into a UI image URL.
 *
 * Keys are namespaced so the same string travels through `instance.cfg`
 * (Prism interop) and our own metadata:
 *   `prism:grass`      → bundled flat Prism/MultiMC instance icon
 *   `freesm:grass_legacy` → bundled classic Freesm pixel-art PNG
 *   `twemoji:1f980`    → bundled Twemoji glyph
 *   anything else      → a bare Prism iconKey (a user's `icons/` drop-in),
 *                        resolved by the backend to an absolute path.
 * Returns null when the key cannot be rendered client-side; callers fall back
 * to the instance's `icon_path` or the brand mark.
 */
export function iconKeyAsset(iconKey) {
  const key = String(iconKey ?? '').trim();
  if (!key) return null;
  if (key.startsWith('twemoji:')) {
    const cp = key.slice('twemoji:'.length);
    if (!TWEMOJI_ASSETS.has(cp)) return null;
    return `${BASE}twemoji/${cp}.svg`.replace(/\/{2,}/g, '/');
  }
  if (key.startsWith('prism:')) {
    const name = key.slice('prism:'.length);
    if (!PRISM_INSTANCE_ICONS.includes(name)) return null;
    return `${BASE}instance-icons/prism/${name}.svg`.replace(/\/{2,}/g, '/');
  }
  if (key.startsWith('freesm:')) {
    const name = key.slice('freesm:'.length);
    if (!LEGACY_INSTANCE_ICONS.includes(name)) return null;
    return `${BASE}instance-icons/legacy/${name}.png`.replace(/\/{2,}/g, '/');
  }
  return null;
}

/** True when `iconKey` is renderable without touching the filesystem. */
export function isBundledIconKey(iconKey) {
  return iconKeyAsset(iconKey) !== null;
}

