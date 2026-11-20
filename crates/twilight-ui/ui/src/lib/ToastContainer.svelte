<script>
  // The toast half of the alert store: a fixed bottom-right stack of
  // non-blocking notifications. Timers pause while hovered; click dismisses;
  // styled with the OpenDesign tokens and a 120ms fade (no bouncy springs).
  import { alertState, dismissToast } from './alerts.svelte.js';
  import LauncherIcon from './LauncherIcon.svelte';
  import { t } from './i18n.svelte.ts';

  const KINDS = {
    info: { icon: 'about', tint: 'border-(--accent-1)/50' },
    success: { icon: 'success', tint: 'border-green-500/60' },
    warning: { icon: 'warning', tint: 'border-(--accent-2)/60' },
    error: { icon: 'error', tint: 'border-rose-500/60' },
  };

  let hovered = $state(false);
  // one timer per toast; hovering pauses (clears) and un-hovering re-arms
  const timers = new Map();
  const armed = new Set();

  function armPending() {
    if (hovered) return;
    for (const t of alertState.toasts) {
      if (armed.has(t.id)) continue;
      armed.add(t.id);
      timers.set(
        t.id,
        setTimeout(() => {
          armed.delete(t.id);
          timers.delete(t.id);
          dismissToast(t.id);
        }, t.duration),
      );
    }
  }

  function pauseAll() {
    hovered = true;
    for (const timer of timers.values()) clearTimeout(timer);
    timers.clear();
    armed.clear();
  }

  function resumeAll() {
    hovered = false;
    armPending();
  }

  $effect(() => {
    alertState.toasts.length; // new toasts arm on arrival
    armPending();
  });
</script>

<div
  class="pointer-events-none fixed right-4 bottom-4 z-[80] flex w-80 flex-col gap-2"
  onmouseenter={pauseAll}
  onmouseleave={resumeAll}
>
  {#each alertState.toasts as t (t.id)}
    <button
      class="pointer-events-auto flex w-full items-start gap-2.5 rounded-lg border {(
        KINDS[t.kind] ?? KINDS.info
      ).tint} bg-(--bg-2) p-3 text-left shadow-xl animate-[fade-in_120ms_ease-out] hover:bg-(--bg-3)"
      title={t('toast-dismiss')}
      onclick={() => dismissToast(t.id)}
    >
      <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-(--bg-3)">
        <LauncherIcon name={(KINDS[t.kind] ?? KINDS.info).icon} size={14} />
      </span>
      <span class="min-w-0 flex-1">
        {#if t.title}
          <span class="block truncate text-(--step-body) font-semibold text-(--fg-1)">{t.title}</span>
        {/if}
        <span class="block text-(--step-meta) break-words text-(--fg-2)">{t.message}</span>
      </span>
      <span class="shrink-0 text-(--step-caption) text-(--fg-2)">✕</span>
    </button>
  {/each}
</div>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
