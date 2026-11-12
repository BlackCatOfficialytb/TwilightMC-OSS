<script>
  // Accent color section for Settings: ore presets + a custom hex/color
  // picker. Every change re-derives the whole accent family live (buttons,
  // pills, tint fills, focus rings) through app.css color-mix() formulas.
  import {
    ACCENT_PRESETS,
    DEFAULT_ACCENT,
    applyAccentColor,
    resetAccent,
    getSavedAccent,
    normalizeHex,
  } from './theme';

  // The active theme's built-in accent (from its preset definition); when
  // no user pick is saved the shell runs on it and null tracks that state.
  let { builtin = DEFAULT_ACCENT } = $props();
  let current = $state(getSavedAccent());
  let customHex = $state(current ?? builtin);
  let invalid = $state(false);

  // switching themes while the picker is open re-grounds the hex field
  $effect(() => {
    if (current === null) customHex = builtin;
  });

  function isActive(hex) {
    return current === null ? hex === builtin : current === hex.toLowerCase();
  }

  function pickPreset(preset) {
    if (preset.hex === builtin) {
      resetAccent();
      current = null;
    } else if (applyAccentColor(preset.hex)) {
      current = preset.hex.toLowerCase();
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

<h4 class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h4>
<div class="mt-2 flex items-center gap-2">
  {#each ACCENT_PRESETS as p (p.hex)}
    <button
      class="h-7 w-7 rounded-full {isActive(p.hex)
        ? 'ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)'
        : 'border border-(--border) hover:opacity-80'}"
      style="background:{p.hex}"
      title="{p.name}{p.hex === builtin ? ' (built-in)' : ''}"
      aria-label="{p.name} accent"
      aria-pressed={isActive(p.hex)}
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
    placeholder="#06b6d4"
    aria-label="Accent hex value"
    title="Accent hex value"
  />
  {#if invalid}
    <span class="text-[11px] text-rose-400">invalid hex</span>
  {:else}
    <span class="text-[11px] text-(--text-muted)">live preview</span>
  {/if}
</div>
