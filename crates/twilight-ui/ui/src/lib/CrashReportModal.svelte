<script>
  // Crash report review: the exact scrubbed text is shown before anything
  // happens. Nothing leaves the machine without an explicit click — copy and
  // the issue tracker link are local actions, and the report is only POSTed
  // when a send endpoint is configured and the user presses "send".
  import { onMount } from 'svelte';
  import { tauriInvoke } from './tauri';
  import { pushOverlay, popOverlay } from './overlays.js';
  import { t } from './i18n.svelte.ts';

  let { report = '', canSend = false, onclose, ondisable } = $props();

  let status = $state(''); // '' | 'copied' | 'sending' | 'sent'
  let sendError = $state('');

  function close() {
    if (status === 'sending') return;
    onclose?.();
  }

  onMount(() => {
    const closer = pushOverlay(() => (status === 'sending' ? undefined : onclose?.()));
    return () => popOverlay(closer);
  });

  async function copyReport() {
    try {
      await navigator.clipboard.writeText(report);
      sendError = '';
      status = 'copied';
    } catch {
      // Clipboard can be unavailable in a web preview or insecure context;
      // the full report stays visible and selectable in the panel.
    }
  }

  function openIssues() {
    tauriInvoke('open_external_url', {
      url: 'https://github.com/BlackCatOfficialytb/TwilightMC-OSS/issues/new',
    }).catch((e) => (sendError = String(e)));
  }

  async function sendReport() {
    if (!canSend || status === 'sending') return;
    status = 'sending';
    sendError = '';
    try {
      await tauriInvoke('send_crash_report', { report });
      status = 'sent';
    } catch (e) {
      status = '';
      sendError = String(e);
    }
  }
</script>

<div
  class="fixed inset-0 z-[70] flex items-center justify-center"
  style="background: var(--scrim)"
  role="presentation"
  onclick={(e) => {
    if (e.target === e.currentTarget) close();
  }}
>
  <div
    role="dialog"
    aria-modal="true"
    aria-label={t('crash-title')}
    class="flex h-[560px] w-[720px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"
  >
    <div class="flex items-start justify-between gap-3 border-b border-(--border-1) px-4 py-3">
      <div class="min-w-0">
        <h3 class="text-(--step-heading) font-semibold text-(--fg-1)">{t('crash-title')}</h3>
        <p class="mt-1 text-[12px] text-(--fg-2)">{t('crash-warning')}</p>
      </div>
      <button
        class="shrink-0 text-(--fg-2) hover:text-(--fg-1) disabled:opacity-40"
        disabled={status === 'sending'}
        aria-label={t('crash-close')}
        onclick={close}
      >
        ✕
      </button>
    </div>

    <div class="flex min-h-0 flex-1 flex-col gap-2 px-4 py-3">
      <pre
        class="min-h-0 flex-1 overflow-auto whitespace-pre-wrap break-words select-text rounded border border-(--border-1) bg-(--bg-3) p-3 font-mono text-[11px] leading-relaxed text-(--fg-1)">{report}</pre>
      {#if !canSend}
        <p class="shrink-0 text-[11px] text-(--fg-2)">{t('crash-no-endpoint')}</p>
      {/if}
    </div>

    <div class="flex items-center justify-between gap-3 border-t border-(--border-1) px-4 py-3">
      <div class="min-w-0 flex-1 text-[11px] text-(--fg-2)">
        {#if sendError}
          <p class="truncate text-rose-400" title={sendError}>
            {t('crash-error', { error: sendError })}
          </p>
        {:else if status === 'sending'}
          <p class="text-(--accent-1)">{t('crash-sending')}</p>
        {:else if status === 'sent'}
          <p class="text-(--accent-1)">{t('crash-sent')}</p>
        {:else if status === 'copied'}
          <p class="text-(--accent-1)">{t('crash-copied')}</p>
        {/if}
      </div>
      <div class="flex shrink-0 flex-wrap items-center justify-end gap-2">
        <label class="flex items-center gap-1.5 text-[11px] text-(--fg-2)">
          <input
            type="checkbox"
            class="h-3.5 w-3.5 accent-(--accent-1)"
            onchange={(e) => {
              if (e.currentTarget.checked) ondisable?.();
            }}
          />
          {t('crash-disable')}
        </label>
        <button
          class="rounded border border-(--border-1) px-3 py-1.5 text-[12px] text-(--fg-1) hover:border-(--accent-1) disabled:opacity-40"
          disabled={status === 'sending'}
          onclick={copyReport}
        >
          {t('crash-copy')}
        </button>
        <button
          class="rounded border border-(--border-1) px-3 py-1.5 text-[12px] text-(--fg-1) hover:border-(--accent-1) disabled:opacity-40"
          disabled={status === 'sending'}
          onclick={openIssues}
        >
          {t('crash-issues')}
        </button>
        {#if canSend}
          <button
            class="rounded bg-(--accent-1) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40"
            disabled={status === 'sending'}
            onclick={sendReport}
          >
            {t('crash-send')}
          </button>
        {/if}
        <button
          class="rounded px-3 py-1.5 text-[12px] text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40"
          disabled={status === 'sending'}
          onclick={close}
        >
          {t('crash-close')}
        </button>
      </div>
    </div>
  </div>
</div>

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
