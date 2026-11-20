// Icon pack engine: the vendored SVG packs (Freesm Fluent, Prism Breeze and
// Prism PE) plus the strict Twemoji fallback. One logical name resolves to a
// pack SVG or an emoji glyph everywhere; nothing ever renders broken — a name
// a pack lacks falls through to Twemoji, and a glyph Twemoji doesn't vendor
// falls through to the raw character (see `Twemoji.svelte`).
//
// This module stays plain TypeScript (no runes): it owns the persisted pack
// choice, the theme-aware `fluent-auto` resolution and a tiny pub/sub that
// `LauncherIcon.svelte` subscribes to for reactivity.

import { isDarkTheme, normalizeThemeId } from './theme';

// Absolute base so the packs resolve identically from every surface.
const BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/{2,}/g, '/');

/** The selector options shown in Settings → Appearance. */
export const ICON_PACKS = [
  { id: 'fluent-auto', label: 'Fluent (Auto)' },
  { id: 'fluent', label: 'Fluent Light' },
  { id: 'fluent_dark', label: 'Fluent Dark' },
  { id: 'breeze_dark', label: 'Breeze Dark' },
  { id: 'breeze_light', label: 'Breeze Light' },
  { id: 'pe_colored', label: 'Prism PE Colored' },
  { id: 'twemoji', label: 'Twemoji' },
] as const;

export type IconPackId = (typeof ICON_PACKS)[number]['id'];

const PACK_IDS = new Set<string>(ICON_PACKS.map((p) => p.id));
const PACK_STORAGE_KEY = 'twilight-icon-pack';

/** Logical name → SVG stem shared by every vendored pack (all five ship
 *  these, verified against the upstream `scalable` dirs). */
const STEMS: Record<string, string> = {
  instances: 'viewfolder',
  folder: 'viewfolder',
  server: 'server',
  settings: 'settings',
  accounts: 'accounts',
  new: 'new',
  launch: 'launch',
  edit: 'instance-settings',
  copy: 'copy',
  export: 'export',
  delete: 'delete',
  shortcut: 'shortcut',
  mods: 'centralmods',
  refresh: 'refresh',
  console: 'log',
  tag: 'tag',
  star: 'star',
  help: 'help',
  about: 'about',
  screenshots: 'screenshots',
  worlds: 'worlds',
};

/** Emoji used when a pack lacks the SVG (and as the Twemoji pack's glyphs).
 *  Vendored codepoints render as crisp local SVGs via `Twemoji`; the rest
 *  render as the raw character, which never breaks. */
const EMOJI: Record<string, string> = {
  kill: '⏹', // 23f9 vendored
  download: '⬇', // 2b07 vendored
  search: '🔍', // 1f50d vendored
  sun: '☀', // 2600 vendored
  moon: '🌙', // 1f319 vendored
  package: '📦', // 1f4e6 vendored
  modrinth: '🧩', // 1f9e9 vendored
  // alert dialog variants (raw characters: never broken, any pack):
  success: '✅',
  warning: '⚠',
  error: '⛔',
  // SVG names Twemoji renders as raw characters (no vendored asset needed):
  instances: '📁', // 1f4c1 vendored
  folder: '📁', // 1f4c1 vendored
  server: '🌐', // 1f310 vendored
  settings: '⚙', // 2699 vendored
  accounts: '👤', // 1f464 vendored
  new: '➕',
  launch: '▶',
  edit: '✏',
  copy: '⧉',
  export: '⤓',
  delete: '🗑', // 1f5d1 vendored
  shortcut: '🔗', // 1f517 vendored
  mods: '📦', // 1f4e6 vendored
  refresh: '🔄', // 1f504 vendored
  console: '📜',
  tag: '🏷',
  star: '★',
  help: '❔',
  about: 'ℹ', // 2139 vendored
  screenshots: '🖼', // 1f5bc vendored
  worlds: '🌐', // 1f310 vendored
};

// ---- pack selection (persisted) ----

let currentPack: IconPackId | null = null;

/** The persisted pack id (`fluent-auto` until the user picks otherwise). */
export function getIconPack(): IconPackId {
  if (currentPack) return currentPack;
  const stored = localStorage.getItem(PACK_STORAGE_KEY);
  currentPack = PACK_IDS.has(stored ?? '') ? (stored as IconPackId) : 'fluent-auto';
  return currentPack;
}

/** Persists the pack choice and notifies every mounted icon. */
export function setIconPack(id: string) {
  if (!PACK_IDS.has(id)) return;
  currentPack = id as IconPackId;
  localStorage.setItem(PACK_STORAGE_KEY, id);
  fireChange();
}

// ---- theme-aware auto resolution ----

// The active theme id as App.svelte reports it (empty until first sync; the
// fallback reads dark, matching the default Twilight Dark ground).
let currentTheme = '';

/** App.svelte calls this from its theme effect so `fluent-auto` flips packs
 *  (and re-renders every icon) the moment the theme changes. */
export function syncIconTheme(themeId: string) {
  const next = normalizeThemeId(themeId) ?? String(themeId ?? '');
  if (next === currentTheme) return;
  currentTheme = next;
  fireChange();
}

/** The concrete pack a selector id resolves to. `fluent-auto` reads dark by
 *  default (unknown themes read dark in `isDarkTheme`). */
export function resolvedPack(selector = getIconPack()): 'fluent' | 'fluent_dark' {
  if (selector !== 'fluent-auto') return selector as 'fluent' | 'fluent_dark';
  return isDarkTheme(currentTheme || 'twilight-dark') ? 'fluent_dark' : 'fluent';
}

// ---- change notification ----

type Listener = () => void;
const listeners = new Set<Listener>();

function fireChange() {
  for (const fn of listeners) fn();
}

/** Subscribes to pack/theme changes; returns the unsubscribe fn. */
export function onIconPackChange(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// ---- resolution ----

export type ResolvedIcon =
  | { kind: 'svg'; src: string; label: string }
  | { kind: 'emoji'; emoji: string; label: string };

/** Resolves a logical icon name against a pack (default: the selected one).
 *  Order: pack SVG → Twemoji emoji → raw emoji character; `null` only for
 *  names unknown to the engine (callers pass literals, so never in practice). */
export function resolveIcon(
  name: string,
  packSelector: string | null = null,
): ResolvedIcon | null {
  const selector = packSelector ?? getIconPack();
  const label = name;
  if (selector === 'twemoji') {
    const emoji = EMOJI[name];
    return emoji ? { kind: 'emoji', emoji, label } : null;
  }
  const stem = STEMS[name];
  if (stem) {
    return { kind: 'svg', src: `${BASE}icons/${resolvedPack(selector)}/${stem}.svg`, label };
  }
  const emoji = EMOJI[name];
  return emoji ? { kind: 'emoji', emoji, label } : null;
}
