<script>
  import { tauriInvoke } from './tauri';
  // Network tab: Minekube Connect tunnel — install / enable / disable /
  // remove any time after creation, with live status and the
  // *.connect.minekube.* share address — plus the offline-mode guard
  // with the AuthMe suggestion.
  import { toast } from './alerts.svelte.js';
  import { t } from './i18n.svelte.ts';

  let { server, connect = null, busy = '' } = $props();

  function api(cmd, args) {
    return tauriInvoke(cmd, args);
  }

  async function act(name, okKey, args = {}) {
    try {
      await api(name, { id: server.id, ...args });
      if (okKey) toast(t(okKey), 'success');
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function copyShare() {
    const endpoint = connect?.endpoint;
    if (!endpoint) return;
    try {
      await navigator.clipboard.writeText(endpoint);
      toast(t('server-share-copied'), 'success');
    } catch {
      toast(t('server-share-copy-failed'), 'warning');
    }
  }

  const isJavaAuthmeTarget = $derived(
    server.software === 'paper' || server.software === 'purpur' || server.software === 'vanilla',
  );
</script>

<div class="mx-auto flex w-full max-w-xl flex-col gap-3 overflow-y-auto p-4">
  <!-- address -->
  <div class="rounded-lg border border-(--border) bg-(--bg-subtle) p-3">
    <div class="text-[11.5px] font-medium">{t('server-address-label')}</div>
    <div class="mt-2 flex items-center gap-1.5">
      <code class="min-w-0 flex-1 truncate rounded bg-(--bg-3) px-2 py-1 text-[11.5px]">localhost:{server.port}</code>
      <button
        class="shrink-0 rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)"
        onclick={async () => {
          try {
            await navigator.clipboard.writeText(`localhost:${server.port}`);
            toast(t('server-address-copied'), 'success');
          } catch {
            toast(t('server-share-copy-failed'), 'warning');
          }
        }}
      >
        {t('common-copy')}
      </button>
    </div>
  </div>

  <!-- Minekube Connect (install / enable / disable / remove any time) -->
  <div class="rounded-lg border border-(--border) bg-(--bg-subtle) p-3">
    <div class="flex items-center justify-between gap-2">
      <span class="text-[11.5px] font-medium">{t('server-connect')}</span>
      <span class="text-[10.5px] {server.connect && connect?.endpoint ? 'text-green-500' : 'text-(--text-muted)'}">
        {server.connect
          ? connect?.endpoint
            ? t('server-tunnel-active')
            : server.state === 'Running'
              ? t('server-waiting-endpoint')
              : t('server-offline')
          : t('server-connect-status-disabled')}
      </span>
    </div>
    <p class="mt-1.5 text-[11px] text-(--text-muted)">{t('server-connect-instructions')}</p>

    {#if server.connect && connect?.endpoint}
      <div class="mt-2 flex items-center gap-1.5">
        <code class="min-w-0 flex-1 truncate rounded bg-(--bg-3) px-2 py-1 text-[11.5px]" title={connect.endpoint}>
          {connect.endpoint}
        </code>
        <button
          class="shrink-0 rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)"
          onclick={copyShare}
        >
          {t('common-copy')}
        </button>
      </div>
    {:else if server.connect && server.state === 'Stopped'}
      <button
        class="mt-2 w-full rounded border border-(--border) px-2 py-1.5 text-[11.5px] hover:border-(--accent) disabled:opacity-40"
        disabled={busy !== ''}
        onclick={() => act('start_server')}
      >
        {t('server-start-tunnel')}
      </button>
    {/if}

    <div class="mt-1.5 grid grid-cols-2 gap-1.5">
      {#if server.connect}
        <button
          class="rounded border border-(--border) px-2 py-1.5 text-[11px] hover:border-(--accent) disabled:opacity-40"
          disabled={busy !== ''}
          onclick={() => act('set_connect_enabled', 'server-connect-disabled-toast', { enabled: false })}
        >
          {t('server-connect-disable')}
        </button>
        <button
          class="rounded border border-rose-500/40 px-2 py-1.5 text-[11px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
          disabled={busy !== ''}
          onclick={() => act('remove_connect', 'server-connect-removed')}
        >
          {t('server-connect-remove')}
        </button>
      {:else}
        <button
          class="rounded border border-(--accent) px-2 py-1.5 text-[11px] font-medium text-(--accent) hover:bg-(--accent-hover) disabled:opacity-40"
          disabled={busy !== ''}
          onclick={() => act('set_connect_enabled', 'server-connect-enabled-toast', { enabled: true })}
        >
          {t('server-connect-enable')}
        </button>
        <button
          class="rounded border border-(--border) px-2 py-1.5 text-[11px] hover:border-(--accent) disabled:opacity-40"
          disabled={busy !== ''}
          onclick={() => act('install_connect', 'server-connect-installed')}
        >
          {t('server-connect-install')}
        </button>
      {/if}
    </div>

    {#if server.connect && server.state === 'Stopped'}
      <button
        class="mt-1.5 w-full rounded border border-(--border) px-2 py-1.5 text-[11.5px] hover:border-(--accent) disabled:opacity-40"
        disabled={busy !== ''}
        onclick={() => act('install_connect', 'server-connect-installed')}
      >
        {t('server-reinstall-connect')}
      </button>
    {/if}
  </div>

  {#if server.offline_mode}
    <div class="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3">
      <p class="text-[11.5px] text-amber-500">{t('server-offline-notice')}</p>
      {#if isJavaAuthmeTarget}
        <button
          class="mt-2 w-full rounded border border-amber-500/50 px-2 py-1.5 text-[11.5px] font-medium text-amber-500 hover:bg-amber-500/10 disabled:opacity-40"
          disabled={busy !== ''}
          onclick={() => act('install_authme', 'server-authme-installed')}
        >
          {t('server-install-authme')}
        </button>
      {/if}
    </div>
  {/if}
</div>
