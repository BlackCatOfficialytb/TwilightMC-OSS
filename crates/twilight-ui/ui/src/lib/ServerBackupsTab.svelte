<script>
  // Backups tab: timestamped zip archives of world/ + identity configs,
  // created on demand and restored over the server directory (backend blocks
  // restore while the server runs).
  import { onMount } from 'svelte';
  import { toast, confirmAlert } from './alerts.svelte.js';
  import { t } from './i18n.svelte.ts';
  import { formatBytes, formatTimestamp } from './server-helpers.js';

  let { server } = $props();

  let backups = $state([]);
  let loading = $state(true);
  let busy = $state('');

  function api(cmd, args) {
    return window.__TAURI__.core.invoke(cmd, args);
  }

  async function load() {
    loading = true;
    try {
      backups = await api('list_server_backups', { id: server.id });
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      loading = false;
    }
  }

  async function create() {
    busy = 'create';
    try {
      await api('create_server_backup', { id: server.id });
      toast(t('server-backups-created-toast'), 'success');
      await load();
    } catch (e) {
      toast(String(e), 'error', { title: t('server-action-failed') });
    } finally {
      busy = '';
    }
  }

  async function restore(name) {
    const ok = await confirmAlert({
      title: t('server-backups-restore'),
      message: t('server-backups-restore-confirm', { name }),
    });
    if (!ok) return;
    busy = 'restore';
    try {
      await api('restore_server_backup', { id: server.id, backupName: name });
      toast(t('server-backups-restored'), 'success');
    } catch (e) {
      toast(String(e), 'error', { title: t('server-action-failed') });
    } finally {
      busy = '';
    }
  }

  async function remove(name) {
    const ok = await confirmAlert({
      title: t('common-delete'),
      message: t('server-backups-delete-confirm', { name }),
    });
    if (!ok) return;
    busy = 'delete';
    try {
      await api('delete_server_backup', { id: server.id, backupName: name });
      await load();
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      busy = '';
    }
  }

  onMount(load);
</script>

<div class="flex min-h-0 flex-1 flex-col p-4">
  <div class="flex items-center justify-between gap-2">
    <p class="text-[11.5px] text-(--text-muted)">{t('server-backups-desc')}</p>
    <button
      class="shrink-0 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
      disabled={busy !== ''}
      onclick={create}
    >
      {t('server-backups-create')}
    </button>
  </div>

  <div class="mt-2.5 min-h-0 flex-1 overflow-y-auto rounded-lg border border-(--border)">
    <table class="w-full text-left text-[12px]">
      <thead class="sticky top-0 bg-(--bg-2) text-[10.5px] tracking-wide text-(--text-muted) uppercase">
        <tr>
          <th class="px-2.5 py-2 font-medium">{t('server-files-name')}</th>
          <th class="w-24 px-2.5 py-2 font-medium">{t('server-files-size')}</th>
          <th class="w-44 px-2.5 py-2 font-medium">{t('server-backups-created')}</th>
          <th class="w-40 px-2.5 py-2"></th>
        </tr>
      </thead>
      <tbody>
        {#if loading}
          <tr><td colspan="4" class="px-2.5 py-4 text-(--text-muted)">{t('common-loading')}</td></tr>
        {:else if backups.length === 0}
          <tr><td colspan="4" class="px-2.5 py-4 text-(--text-muted)">{t('server-backups-empty')}</td></tr>
        {:else}
          {#each backups as b (b.name)}
            <tr class="border-t border-(--border) hover:bg-(--bg-subtle)">
              <td class="px-2.5 py-1.5 font-mono text-[11.5px]">{b.name}</td>
              <td class="px-2.5 py-1.5 text-(--text-muted)">{formatBytes(b.size)}</td>
              <td class="px-2.5 py-1.5 text-(--text-muted)">{formatTimestamp(b.created)}</td>
              <td class="px-2.5 py-1.5">
                <div class="flex justify-end gap-1.5">
                  <button
                    class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40"
                    disabled={busy !== ''}
                    onclick={() => restore(b.name)}
                  >
                    {t('common-restore')}
                  </button>
                  <button
                    class="rounded border border-rose-500/40 px-2 py-1 text-[11px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
                    disabled={busy !== ''}
                    onclick={() => remove(b.name)}
                  >
                    {t('common-delete')}
                  </button>
                </div>
              </td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
</div>
