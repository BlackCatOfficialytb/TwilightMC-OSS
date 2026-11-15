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
]);

// Absolute base so the shared panel and the console drawer resolve equally.
const BASE = import.meta.env.BASE_URL ?? '/';

/** Local Twemoji SVG URL for `emoji`, or null when the glyph isn't vendored. */
export function emojiAsset(emoji) {
  const cp = emojiCodePoints(emoji);
  if (!TWEMOJI_ASSETS.has(cp)) return null;
  return `${BASE}twemoji/${cp}.svg`.replace(/\/{2,}/g, '/');
}
