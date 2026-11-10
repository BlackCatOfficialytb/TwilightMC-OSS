// Nested-modal Escape handling: every open modal (deepest first) registers a
// closer here. App's single global keydown handler pops the top entry so
// Escape always dismisses only the frontmost surface.

const stack = [];

/** Registers `onEscape` (a closer); returns the same fn for convenience. */
export function pushOverlay(onEscape) {
  stack.push(onEscape);
  return onEscape;
}

/** Removes a previously pushed closer (identity-based, safe for duplicates). */
export function popOverlay(onEscape) {
  const at = stack.lastIndexOf(onEscape);
  if (at !== -1) stack.splice(at, 1);
}

/** The color/depth-aware check used by global handlers. */
export function topOverlay() {
  return stack[stack.length - 1] ?? null;
}
