// Project Fluent runtime for the launcher UI.
//
// The catalogs are compiled into the bundle with Vite `?raw` imports, so the
// launcher never fetches translations at runtime and works fully offline.
// `activeLocale` is a Svelte 5 rune: every `t()` call reads it, so switching
// languages re-renders all visible messages immediately.
import { FluentBundle, FluentResource, type FluentVariable } from '@fluent/bundle';
import enUSSource from '../../../../../locales/en-US/main.ftl?raw';
import viVNSource from '../../../../../locales/vi-VN/main.ftl?raw';

export const SUPPORTED_LOCALES = [
  { id: 'en-US', label: 'language-en-US' },
  { id: 'vi-VN', label: 'language-vi-VN' },
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number]['id'];
export type MessageArgs = Record<string, FluentVariable>;

const FALLBACK_LOCALE: Locale = 'en-US';
const STORAGE_KEY = 'twilight_locale';
const SOURCES: Record<Locale, string> = {
  'en-US': enUSSource,
  'vi-VN': viVNSource,
};

function isLocale(value: unknown): value is Locale {
  return SUPPORTED_LOCALES.some((locale) => locale.id === value);
}

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // localStorage can be unavailable (privacy modes); fall through.
  }
  if (typeof navigator !== 'undefined') {
    const languages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];
    for (const language of languages) {
      const tag = language.toLowerCase();
      if (tag.startsWith('vi')) return 'vi-VN';
      if (tag.startsWith('en')) return 'en-US';
    }
  }
  return FALLBACK_LOCALE;
}

function createBundle(locale: Locale): FluentBundle {
  const bundle = new FluentBundle(locale, { useIsolating: false });
  const errors = bundle.addResource(new FluentResource(SOURCES[locale]));
  if (errors.length) {
    console.error(`[i18n] ${locale} catalog errors`, errors);
  }
  return bundle;
}

const bundles: Record<Locale, FluentBundle> = {
  'en-US': createBundle('en-US'),
  'vi-VN': createBundle('vi-VN'),
};

const numberFormats = new Map<Locale, Intl.NumberFormat>();
const dateFormats = new Map<Locale, Intl.DateTimeFormat>();

let activeLocale = $state<Locale>(detectLocale());

if (typeof document !== 'undefined') {
  // reactive: keeps <html lang> in sync on every locale switch
  $effect.root(() => {
    $effect(() => {
      document.documentElement.lang = activeLocale;
    });
  });
}

/** Current UI locale (reactive when read inside components). */
export function getLocale(): Locale {
  return activeLocale;
}

/** Switch the UI language immediately and remember it for the next launch. */
export function setLocale(locale: Locale): void {
  if (!isLocale(locale)) return;
  activeLocale = locale;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Persistence is best-effort; the switch still applies for this session.
  }
}

function formatWith(bundle: FluentBundle, id: string, args?: MessageArgs): string | null {
  const message = bundle.getMessage(id);
  if (!message || message.value === null) return null;
  const errors: Error[] = [];
  const text = bundle.formatPattern(message.value, args ?? {}, errors);
  if (errors.length) {
    console.warn(`[i18n] ${bundle.locales.join(',')} failed to format "${id}"`, errors);
    return null;
  }
  return text;
}

/**
 * Translate a message id. Missing keys and formatting errors fall back to the
 * canonical en-US catalog; if that also fails the id itself is returned so a
 * bug is visible instead of rendering an empty string.
 */
export function t(id: string, args?: MessageArgs): string {
  const formatted = formatWith(bundles[activeLocale], id, args);
  if (formatted !== null) return formatted;
  if (activeLocale !== FALLBACK_LOCALE) {
    const fallback = formatWith(bundles[FALLBACK_LOCALE], id, args);
    if (fallback !== null) return fallback;
  }
  return id;
}

export function hasMessage(id: string): boolean {
  return bundles[activeLocale].getMessage(id) !== undefined;
}

function numberFormat(): Intl.NumberFormat {
  let format = numberFormats.get(activeLocale);
  if (!format) {
    format = new Intl.NumberFormat(activeLocale);
    numberFormats.set(activeLocale, format);
  }
  return format;
}

/** Format a number with the active locale's grouping rules. */
export function formatNumber(value: number): string {
  return numberFormat().format(value);
}

/**
 * Format a timestamp for "last played" style labels. Accepts epoch
 * milliseconds, a Date, or an ISO string.
 */
export function formatDate(
  value: number | Date | string | null | undefined,
  options: Intl.DateTimeFormatOptions = { dateStyle: 'medium', timeStyle: 'short' },
): string {
  if (value === null || value === undefined || value === '') return '';
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  let format = dateFormats.get(activeLocale);
  if (!format) {
    format = new Intl.DateTimeFormat(activeLocale, options);
    dateFormats.set(activeLocale, format);
  }
  return format.format(date);
}

/**
 * Human-readable playtime using Fluent plural selectors. Hours and minutes
 * are combined for durations above an hour (e.g. "2 hours 5 minutes").
 */
export function formatDuration(totalSeconds: number): string {
  const seconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
  if (seconds < 60) {
    return t('duration-seconds', { seconds });
  }
  const totalMinutes = Math.floor(seconds / 60);
  if (totalMinutes < 60) {
    return t('duration-minutes', { minutes: totalMinutes });
  }
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const hourText = t('duration-hours', { hours });
  if (minutes === 0) return hourText;
  return `${hourText} ${t('duration-minutes', { minutes })}`;
}
