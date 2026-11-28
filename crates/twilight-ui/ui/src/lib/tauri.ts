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

let debugCaptureEnabled = false;

export function setDebugCaptureEnabled(enabled: boolean) {
  debugCaptureEnabled = enabled;
}

function summarizeArg(value: unknown): string {
  try {
    const text = JSON.stringify(value);
    if (!text) return '';
    return text.length > 300 ? `${text.slice(0, 300)}...` : text;
  } catch {
    return '[unserializable]';
  }
}

function reportDebug(kind: string, source: string, summary: string) {
  if (!debugCaptureEnabled) return;
  const global = globalThis as typeof globalThis & { __TAURI__?: TauriGlobal };
  const core = global.__TAURI__?.core;
  if (!core) return;
  void core
    .invoke('report_ui_error', { kind, source, summary })
    .catch(() => {
      /* never break UI on debug reporting */
    });
}

export function tauriInvoke<T = unknown>(
  command: string,
  args?: Record<string, unknown>,
): Promise<T> {
  const global = globalThis as typeof globalThis & { __TAURI__?: TauriGlobal };
  const core = global.__TAURI__?.core;
  if (!core) {
    return Promise.reject(new Error('Tauri backend unavailable in this preview.'));
  }
  const started = performance.now();
  return core.invoke<T>(command, args).then(
    (value) => {
      reportDebug(
        'ipc_ok',
        `invoke:${command}`,
        `${command} ok ${Math.round(performance.now() - started)}ms args=${summarizeArg(args)}`,
      );
      return value;
    },
    (error) => {
      const message = error instanceof Error ? error.message : String(error);
      reportDebug(
        'ipc_err',
        `invoke:${command}`,
        `${command} err ${Math.round(performance.now() - started)}ms ${message}`,
      );
      throw error;
    },
  );
}

export function installDebugErrorCapture() {
  if (typeof window === 'undefined') return () => {};
  const onError = (event: ErrorEvent) => {
    reportDebug('ui_error', 'window.error', `${event.message} @ ${event.filename}:${event.lineno}:${event.colno}`);
  };
  const onRejection = (event: PromiseRejectionEvent) => {
    const reason = event.reason instanceof Error ? `${event.reason.name}: ${event.reason.message}` : String(event.reason);
    reportDebug('ui_error', 'window.unhandledrejection', reason);
  };
  window.addEventListener('error', onError);
  window.addEventListener('unhandledrejection', onRejection);
  return () => {
    window.removeEventListener('error', onError);
    window.removeEventListener('unhandledrejection', onRejection);
  };
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
