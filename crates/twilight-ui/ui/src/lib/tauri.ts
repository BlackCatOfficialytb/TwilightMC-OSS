//! Safe IPC bridge for the Svelte frontend.
//!
//! Tauri injects `window.__TAURI__` before the page scripts when the binary
//! starts, but the same bundle is also served as a plain web preview (and a
//! page can briefly render before the bridge is attached). Reading `.core`
//! directly then throws `TypeError: Cannot read properties of undefined`,
//! which aborts the whole render pass. Every component goes through this
//! helper instead, so a missing bridge becomes a normal rejected promise that
//! the existing `try/catch` blocks can handle.

type TauriCore = {
  invoke<T>(command: string, args?: Record<string, unknown>): Promise<T>;
};

type TauriEventApi = {
  listen<T>(
    event: string,
    handler: (event: { payload: T }) => void,
  ): Promise<() => void>;
};

type TauriGlobal = { core?: TauriCore; event?: TauriEventApi };

export function tauriInvoke<T = unknown>(
  command: string,
  args?: Record<string, unknown>,
): Promise<T> {
  const global = globalThis as typeof globalThis & { __TAURI__?: TauriGlobal };
  const core = global.__TAURI__?.core;
  if (!core) {
    return Promise.reject(new Error('Tauri backend unavailable in this preview.'));
  }
  return core.invoke<T>(command, args);
}

/** Subscribes to a Tauri event; returns a no-op unsubscriber in web preview. */
export async function tauriListen<T = unknown>(
  event: string,
  handler: (event: { payload: T }) => void,
): Promise<() => void> {
  const global = globalThis as typeof globalThis & { __TAURI__?: TauriGlobal };
  const events = global.__TAURI__?.event;
  if (!events) return () => {};
  return events.listen<T>(event, handler);
}
