// Alert & toast store (Svelte 5 runes): one module drives the modal alert
// dialog (confirm/alert/prompt) and the non-blocking toasts. Every surface
// imports these helpers, so a notification raised anywhere re-renders the
// mounted `AlertDialog` / `ToastContainer` together.

/** Shared state: `dialog` = the open modal request (or null), `toasts` =
 *  the bottom-right stack (newest last). */
export const alertState = $state({ dialog: null, toasts: [] });

function openDialog(opts) {
  return new Promise((resolve) => {
    alertState.dialog = { ...opts, resolve };
  });
}

/** Closes the open dialog with `result` (the AlertDialog calls this). */
export function closeDialog(result) {
  const dialog = alertState.dialog;
  alertState.dialog = null;
  dialog?.resolve?.(result);
}

/** Non-blocking modal alert. `variant`: info | success | warning | error. */
export function appAlert(opts = {}) {
  return openDialog({ variant: 'info', ...opts });
}

/** Modal yes/no question; resolves `true` only on the confirm button. */
export function confirmAlert(opts = {}) {
  return openDialog({ variant: 'confirm', ...opts });
}

/** Modal text prompt; resolves the string (or `null` on cancel). */
export function promptAlert(opts = {}) {
  return openDialog({ variant: 'prompt', ...opts });
}

// ---- toasts ----

let toastSeq = 0;

/** Pushes a non-blocking toast. `kind`: info | success | warning | error.
 *  `duration` defaults to 4.5s; returns the id for early dismissal. */
export function toast(message, kind = 'info', { title = '', duration = 4500 } = {}) {
  const id = ++toastSeq;
  alertState.toasts.push({ id, message, kind, title, duration });
  if (alertState.toasts.length > 6) alertState.toasts.shift();
  return id;
}

/** Removes one toast early (click, timer or programmatic dismiss). */
export function dismissToast(id) {
  const at = alertState.toasts.findIndex((t) => t.id === id);
  if (at !== -1) alertState.toasts.splice(at, 1);
}
