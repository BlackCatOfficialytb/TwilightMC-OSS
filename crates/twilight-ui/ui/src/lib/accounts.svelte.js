// Shared account-state store (Svelte 5 runes): the single source of truth for
// the saved accounts, the active one and their proxied skin data URIs. Every
// surface (sidebar chip, client dashboard, account manager) imports this
// module, so one refreshAccounts() call — fired after any sign-in, activation
// or texture edit — re-renders all of them together.

/** Shared account-state object (mutate only through refreshAccounts()):
 *  `list` = saved accounts, `active` = the selected one, `ready` flips after
 *  the first load attempt (backend or plain-web). */
export const accounts = $state({ list: [], active: null, ready: false });

// source (path/URL/nickname) -> `data:image/png;base64` URI
const skinCache = new Map();

function invoke(cmd, args) {
  const core = window.__TAURI__?.core;
  if (!core) return Promise.reject(new Error('Tauri backend unavailable in this preview.'));
  return core.invoke(cmd, args);
}

/** Reloads accounts + the active pointer from the backend store. */
export async function refreshAccounts() {
  try {
    accounts.list = await invoke('get_accounts');
    accounts.active = await invoke('get_active_account');
  } catch {
    // plain web build: no backend pane
  } finally {
    accounts.ready = true;
  }
}

/** The texture source to render for an account: its stored skin when set,
 *  otherwise (classic Ely.by sign-ins) the nickname resolved through the
 *  skinsystem by the backend proxy. */
export function skinSource(account) {
  if (!account) return null;
  return account.skin ?? (account.account_type?.type === 'ely_by' ? account.username : null);
}

/** Inlines a skin texture (data URI, local path, https URL or Ely.by
 *  nickname) as a data URI the webview can render without CORS or
 *  asset-protocol restrictions. Results are cached per source; failures
 *  resolve to null so callers can fall back to direct loading. */
export async function skinDataUri(source) {
  if (!source) return null;
  const key = String(source).trim();
  if (!key || key.startsWith('data:')) return key || null;
  if (skinCache.has(key)) return skinCache.get(key);
  try {
    const uri = await invoke('proxy_skin_png', { source: key });
    skinCache.set(key, uri);
    return uri;
  } catch {
    return null;
  }
}
