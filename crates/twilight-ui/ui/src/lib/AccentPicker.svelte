<script>
  // Accent color controls for Settings: the active theme's suggested
  // palette + a custom hex/color picker. Every change re-derives the whole
  // accent family live (buttons, pills, tint fills, focus rings) through
  // app.css color-mix() formulas. The section label lives in SettingsPage —
  // this component renders only the swatches and inputs.
  import {
    DEFAULT_ACCENT,
    applyAccentColor,
    resetAccent,
    getSavedAccent,
    normalizeHex,
    themePreset,
  } from './theme';

  // The active theme id: its builtin accent and suggested palette drive
  // everything here, and a theme switch re-grounds the picker.
  let { theme = 'twilight-dark' } = $props();

  const builtin = $derived(themePreset(theme)?.accent ?? DEFAULT_ACCENT);
  const suggested = $derived.by(() => {
    const list = themePreset(theme)?.suggested ?? [];
    const base = (themePreset(theme)?.accent ?? DEFAULT_ACCENT).toLowerCase();
    return list.map((p) => ({ ...p, isBuiltin: p.hex.toLowerCase() === base }));
  });

  let current = $state(getSavedAccent());
  let customHex = $state(current ?? builtin);
  let invalid = $state(false);

  // a theme switch re-grounds the hex field (applyTheme already re-homed
  // the live accent and dropped the stale saved pick)
  $effect(() => {
    theme;
    current = getSavedAccent();
    customHex = current ?? builtin;
    invalid = false;
  });

  function isActive(p) {
    return current === null ? p.isBuiltin : current === p.hex.toLowerCase();
  }

  function pickPreset(p) {
    if (p.isBuiltin) {
      resetAccent();
      current = null;
    } else if (applyAccentColor(p.hex)) {
      current = p.hex.toLowerCase();
    }
    customHex = current ?? builtin;
    invalid = false;
  }

  function applyCustom(hex, persist) {
    const norm = applyAccentColor(hex, { persist }) ? normalizeHex(hex) : null;
    if (norm) {
      current = norm;
      invalid = false;
    } else {
      invalid = true;
    }
  }
</script>

<div class="flex flex-wrap items-center gap-2">
  {#each suggested as p (p.hex)}
    <button
      class="h-7 w-7 rounded-full {isActive(p)
        ? 'ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)'
        : 'border border-(--border) hover:opacity-80'}"
      style="background:{p.hex}"
      title="{p.name}{p.isBuiltin ? ' (built-in)' : ''}"
      aria-label="{p.name} accent"
      aria-pressed={isActive(p)}
      onclick={() => pickPreset(p)}
    ></button>
  {/each}
</div>
<div class="mt-2 flex items-center gap-2">
  <input
    type="color"
    value={customHex}
    oninput={(e) => {
      customHex = e.currentTarget.value;
      applyCustom(customHex, false);
    }}
    onchange={(e) => applyCustom(e.currentTarget.value, true)}
    class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5"
    title="Custom accent color"
    aria-label="Custom accent color"
  />
  <input
    value={customHex}
    oninput={(e) => {
      customHex = e.currentTarget.value;
      applyCustom(customHex, false);
    }}
    onchange={(e) => applyCustom(e.currentTarget.value, true)}
    class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
    spellcheck="false"
    placeholder={builtin}
    aria-label="Accent hex value"
    title="Accent hex value"
  />
  {#if invalid}
    <span class="text-[11px] text-rose-400">invalid hex</span>
  {:else}
    <span class="text-[11px] text-(--text-muted)">live preview</span>
  {/if}
</div>
