<script>
  // Adoptium Java downloader: pick one of the majors offered by the backend
  // and fetch a runtime through the Rust command. The parent owns applying
  // the returned path; this dialog only reports it back via `oninstalled`.
  import { onMount } from 'svelte';
  import { tauriInvoke, tauriListen } from './tauri';
  import { pushOverlay, popOverlay } from './overlays.js';
  import ProgressBar from './ProgressBar.svelte';
  import { t } from './i18n.svelte.ts';

  let { majors = [], instanceId = '', onclose, oninstalled } = $props();

  const FALLBACK_MAJORS = [8, 17, 21, 25];
  const options = $derived(
    Array.isArray(majors) && majors.length
      ? [...new Set(majors.map((m) => Number(m)))].sort((a, b) => a - b)
      : FALLBACK_MAJORS,
  );

  let major = $state(21);
  let busy = $state(false);
  let installedPath = $state('');
  let error = $state('');
  let progress = $state(null);

  // The caller may narrow the majors (e.g. only the one the instance needs);
  // keep the picker valid if the offered list does not contain the default.
  $effect(() => {
    if (!options.includes(major)) major = options[0] ?? 17;
  });

  function close() {
    if (busy) return;
    onclose?.();
  }

  onMount(() => {
    const closer = pushOverlay(() => (busy ? undefined : onclose?.()));
    return () => popOverlay(closer);
  });

  async function download() {
    if (busy) return;
    busy = true;
    error = '';
    installedPath = '';
    progress = null;
    let unlisten = null;
    try {
      unlisten = await tauriListen('download-progress', (e) => {
        const p = e.payload;
        if (p?.task_id === `adoptium-java-${major}`) progress = p;
      });
      const installed = await tauriInvoke('download_adoptium_java', { major });
      const path = String(installed?.executable ?? installed?.home ?? installed?.path ?? '');
      installedPath = path;
      await oninstalled?.(installed ?? path);
    } catch (e) {
      error = String(e);
    } finally {
      if (unlisten) unlisten();
      busy = false;
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
    aria-label={t('settings-java-autodownload-title')}
    class="w-[480px] max-w-[95vw] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"
  >
    <div class="flex items-start justify-between gap-3 border-b border-(--border-1) px-4 py-3">
      <div class="min-w-0">
        <h3 class="text-(--step-heading) font-semibold text-(--fg-1)">{t('settings-java-autodownload-title')}</h3>
        <p class="mt-1 text-[12px] text-(--fg-2)">{t('settings-java-autodownload-desc')}</p>
      </div>
      <button
        class="shrink-0 text-(--fg-2) hover:text-(--fg-1) disabled:opacity-40"
        disabled={busy}
        aria-label={t('crash-close')}
        onclick={close}
      >
        ✕
      </button>
    </div>

    <div class="px-4 py-4">
      <label class="block text-[11px] font-semibold uppercase tracking-wide text-(--fg-2)" for="java-download-major">
        {t('java-download-major')}
      </label>
      <select
        id="java-download-major"
        class="mt-2 h-9 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-[13px] text-(--fg-1) outline-none focus:border-(--accent-1) disabled:opacity-40"
        bind:value={major}
        disabled={busy}
      >
        {#each options as m (m)}
          <option value={m}>{m}</option>
        {/each}
      </select>

      {#if error}
        <p class="mt-3 rounded border border-rose-500/30 bg-rose-500/10 p-2 text-[11px] text-rose-400">
          {t('java-download-error', { error })}
        </p>
      {:else if busy}
        <div class="mt-3 space-y-2">
          <p class="text-[12px] text-(--accent-1)">{t('java-download-working', { major })}</p>
          {#if progress}
            <ProgressBar
              label={progress.label}
              percent={progress.percent}
              indeterminate={progress.indeterminate}
              stage={progress.stage}
              detail={`${progress.completed_files ?? 0}/${progress.total_files ?? 0}`}
            />
          {/if}
        </div>
      {:else if installedPath}
        <p class="mt-3 break-all text-[12px] text-(--accent-1)" title={installedPath}>
          {t('java-download-done', { major, path: installedPath })}
        </p>
      {/if}
    </div>

    <div class="flex items-center justify-end gap-2 border-t border-(--border-1) px-4 py-3">
      <button
        class="rounded px-3 py-1.5 text-[12px] text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40"
        disabled={busy}
        onclick={close}
      >
        {t('crash-close')}
      </button>
      <button
        class="rounded bg-(--accent-1) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40"
        disabled={busy || !options.length}
        onclick={download}
      >
        {t('java-download-action')}
      </button>
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
