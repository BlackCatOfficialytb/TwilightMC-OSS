<script>
  // The modal half of the alert store: renders the single open dialog
  // request (confirm / alert / prompt) with the OpenDesign tokens — scrim,
  // bg surface, hairline border and the 120ms fade (no bouncy springs).
  import { alertState, closeDialog } from './alerts.svelte.js';
  import LauncherIcon from './LauncherIcon.svelte';

  // variant → glyph + tint
  const VARIANTS = {
    info: { icon: 'about', tint: 'text-(--accent)' },
    success: { icon: 'success', tint: 'text-green-500' },
    warning: { icon: 'warning', tint: 'text-(--accent-star)' },
    error: { icon: 'error', tint: 'text-rose-400' },
    confirm: { icon: 'help', tint: 'text-(--accent)' },
    prompt: { icon: 'edit', tint: 'text-(--accent)' },
  };

  const dialog = $derived(alertState.dialog);
  const look = $derived(VARIANTS[dialog?.variant] ?? VARIANTS.info);

  let value = $state('');
  // each fresh dialog starts from its requested value
  $effect(() => {
    dialog;
    value = dialog?.value ?? '';
  });

  function accept() {
    if (dialog?.variant === 'prompt') closeDialog(value);
    else closeDialog(true);
  }

  function cancel() {
    if (dialog?.variant === 'prompt') closeDialog(null);
    else closeDialog(false);
  }

  function onKeydown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      // prompts accept on Enter as well; empty values resolve unchanged and
      // the caller treats them as no-ops
      accept();
    }
  }
</script>

{#if dialog}
  <div
    class="fixed inset-0 z-[70] flex items-center justify-center"
    style="background: var(--scrim)"
    onclick={(e) => {
      if (e.target === e.currentTarget) cancel();
    }}
  >
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
      role="alertdialog"
      aria-modal="true"
      aria-label={dialog.title || 'Alert'}
      class="w-[380px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"
      onkeydown={onKeydown}
    >
      <div class="flex items-start gap-3 p-4">
        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)">
          <LauncherIcon name={dialog.icon || look.icon} size={17} />
        </span>
        <div class="min-w-0 flex-1">
          {#if dialog.title}
            <h3 class="text-(--step-heading) font-semibold text-(--fg-1)">{dialog.title}</h3>
          {/if}
          <p class="mt-1 text-(--step-body) break-words text-(--fg-2) {dialog.title ? '' : 'font-medium text-(--fg-1)'}">
            {dialog.message}
          </p>
          {#if dialog.variant === 'prompt'}
            <input
              class="mt-3 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"
              bind:value
              placeholder={dialog.placeholder ?? ''}
              autofocus
            />
          {/if}
        </div>
      </div>
      <div class="flex items-center justify-end gap-2 border-t border-(--border-1) px-4 py-3">
        {#if dialog.variant !== 'alert'}
          <button
            class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1)"
            onclick={cancel}
          >
            {dialog.cancelLabel ?? 'Cancel'}
          </button>
        {/if}
        <button
          class="rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover)"
          onclick={accept}
        >
          {dialog.confirmLabel ?? 'OK'}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
