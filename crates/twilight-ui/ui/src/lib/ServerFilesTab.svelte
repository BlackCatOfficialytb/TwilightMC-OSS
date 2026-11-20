<script>
  // Files tab: breadcrumb navigation, action bar (new folder / upload /
  // archive / delete selected) and the file table with a built-in text
  // editor for configs (Save/Discard).
  import { onMount } from 'svelte';
  import { toast, confirmAlert, promptAlert } from './alerts.svelte.js';
  import { t } from './i18n.svelte.ts';
  import { formatBytes, formatTimestamp } from './server-helpers.js';

  let { server } = $props();

  let relPath = $state('');
  let entries = $state([]);
  let selected = $state({});
  let loading = $state(true);
  let busy = $state('');
  // built-in editor
  let editorOpen = $state(false);
  let editorRel = $state('');
  let editorText = $state('');
  let editorDirty = $state(false);

  function api(cmd, args) {
    return window.__TAURI__.core.invoke(cmd, args);
  }

  const breadcrumbs = $derived(
    relPath ? ['root', ...relPath.split('/').filter(Boolean)] : ['root'],
  );

  const selectedRels = $derived(
    Object.entries(selected)
      .filter(([, on]) => on)
      .map(([name]) => (relPath ? `${relPath}/${name}` : name)),
  );
  const selectedCount = $derived(selectedRels.length);

  function joinRel(name) {
    return relPath ? `${relPath}/${name}` : name;
  }

  function isEditable(name) {
    return /\.(properties|toml|ya?ml|json|txt|log|cfg|conf|mcmeta)$/i.test(name);
  }

  async function load() {
    loading = true;
    try {
      entries = await api('list_server_files', { id: server.id, relPath });
      selected = {};
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      loading = false;
    }
  }

  function navigate(rel) {
    relPath = rel;
  }

  function openEntry(entry) {
    if (entry.is_dir) {
      navigate(joinRel(entry.name));
    } else if (isEditable(entry.name)) {
      openEditor(joinRel(entry.name));
    } else {
      toast(t('server-files-not-editable'), 'warning');
    }
  }

  async function openEditor(rel) {
    try {
      editorText = await api('read_server_text_file', { id: server.id, relPath: rel });
      editorRel = rel;
      editorDirty = false;
      editorOpen = true;
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function saveEditor() {
    busy = 'save';
    try {
      await api('write_server_text_file', { id: server.id, relPath: editorRel, content: editorText });
      toast(t('server-files-saved'), 'success');
      editorOpen = false;
      await load();
    } catch (e) {
      toast(String(e), 'error', { title: t('server-save-failed') });
    } finally {
      busy = '';
    }
  }

  async function newFolder() {
    const name = await promptAlert({
      title: t('server-files-new-folder'),
      message: t('server-files-folder-name'),
      placeholder: 'plugins',
    });
    if (!name?.trim()) return;
    try {
      await api('create_server_dir', { id: server.id, relPath: joinRel(name.trim()) });
      toast(t('server-files-folder-created'), 'success');
      await load();
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function uploadFiles() {
    const dialog = window.__TAURI__?.dialog;
    if (!dialog) {
      toast(t('status-file-picker-unavailable'), 'warning');
      return;
    }
    try {
      const paths = await dialog.open({ multiple: true });
      if (!paths) return;
      busy = 'upload';
      const count = await api('upload_server_files', {
        id: server.id,
        relDir: relPath,
        sourcePaths: Array.isArray(paths) ? paths : [paths],
      });
      toast(t('server-files-uploaded', { count }), 'success');
      await load();
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      busy = '';
    }
  }

  async function archiveSelected() {
    if (!selectedCount) return;
    busy = 'archive';
    try {
      const archive = await api('archive_server_entries', { id: server.id, relPaths: selectedRels });
      toast(t('server-files-archived', { name: archive }), 'success');
      await load();
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      busy = '';
    }
  }

  async function deleteSelected() {
    if (!selectedCount) return;
    const ok = await confirmAlert({
      title: t('server-files-delete-selected'),
      message: t('server-files-delete-confirm', { count: selectedCount }),
    });
    if (!ok) return;
    busy = 'delete';
    try {
      for (const rel of selectedRels) {
        await api('delete_server_entry', { id: server.id, relPath: rel });
      }
      toast(t('server-files-deleted', { count: selectedRels.length }), 'success');
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
  <!-- breadcrumb -->
  <div class="flex items-center gap-1 text-[12px]">
    {#each breadcrumbs as seg, i (i)}
      {#if i > 0}<span class="text-(--text-muted)">/</span>{/if}
      <button
        class="rounded px-1 py-0.5 hover:bg-(--bg-3) {i === breadcrumbs.length - 1
          ? 'font-medium text-(--text-main)'
          : 'text-(--text-muted) hover:text-(--text-main)'}"
        onclick={() => navigate(i === 0 ? '' : breadcrumbs.slice(1, i + 1).join('/'))}
      >
        {seg}
      </button>
    {/each}
  </div>

  <!-- action bar -->
  <div class="mt-2.5 flex flex-wrap items-center gap-1.5">
    <button
      class="rounded border border-(--border) px-2.5 py-1.5 text-[11.5px] hover:border-(--accent)"
      onclick={newFolder}
    >
      + {t('server-files-new-folder')}
    </button>
    <button
      class="rounded border border-(--border) px-2.5 py-1.5 text-[11.5px] hover:border-(--accent) disabled:opacity-40"
      disabled={busy !== ''}
      onclick={uploadFiles}
    >
      {t('server-files-upload')}
    </button>
    <button
      class="rounded border border-(--border) px-2.5 py-1.5 text-[11.5px] hover:border-(--accent) disabled:opacity-40"
      disabled={busy !== '' || selectedCount === 0}
      onclick={archiveSelected}
    >
      {t('server-files-archive')}
    </button>
    <button
      class="rounded border border-rose-500/40 px-2.5 py-1.5 text-[11.5px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
      disabled={busy !== '' || selectedCount === 0}
      onclick={deleteSelected}
    >
      {t('server-files-delete-selected')}{selectedCount ? ` (${selectedCount})` : ''}
    </button>
  </div>

  <!-- file table -->
  <div class="mt-2.5 min-h-0 flex-1 overflow-y-auto rounded-lg border border-(--border)">
    <table class="w-full text-left text-[12px]">
      <thead class="sticky top-0 bg-(--bg-2) text-[10.5px] tracking-wide text-(--text-muted) uppercase">
        <tr>
          <th class="w-8 px-2.5 py-2"></th>
          <th class="px-2.5 py-2 font-medium">{t('server-files-name')}</th>
          <th class="w-24 px-2.5 py-2 font-medium">{t('server-files-size')}</th>
          <th class="w-44 px-2.5 py-2 font-medium">{t('server-files-modified')}</th>
        </tr>
      </thead>
      <tbody>
        {#if loading}
          <tr><td colspan="4" class="px-2.5 py-4 text-(--text-muted)">{t('common-loading')}</td></tr>
        {:else if entries.length === 0}
          <tr><td colspan="4" class="px-2.5 py-4 text-(--text-muted)">{t('server-files-empty')}</td></tr>
        {:else}
          {#each entries as e (e.name)}
            <tr class="border-t border-(--border) hover:bg-(--bg-subtle)">
              <td class="px-2.5 py-1.5">
                <input
                  type="checkbox"
                  class="accent-(--accent)"
                  checked={!!selected[e.name]}
                  onchange={(ev) => (selected = { ...selected, [e.name]: ev.currentTarget.checked })}
                />
              </td>
              <td class="px-2.5 py-1.5">
                <button class="flex items-center gap-1.5 text-left" onclick={() => openEntry(e)}>
                  <span class={e.is_dir ? 'text-(--accent)' : 'text-(--text-muted)'}>
                    {e.is_dir ? '📁' : isEditable(e.name) ? '📄' : '🗂'}
                  </span>
                  <span class="truncate {isEditable(e.name) || e.is_dir ? 'hover:text-(--accent)' : ''}">{e.name}</span>
                </button>
              </td>
              <td class="px-2.5 py-1.5 text-(--text-muted)">{e.is_dir ? '—' : formatBytes(e.size)}</td>
              <td class="px-2.5 py-1.5 text-(--text-muted)">{formatTimestamp(e.modified)}</td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
</div>

<!-- built-in text editor -->
{#if editorOpen}
  <div
    class="fixed inset-0 z-[70] flex items-center justify-center"
    style="background: var(--scrim)"
    role="presentation"
    onclick={(e) => {
      if (e.target === e.currentTarget) editorOpen = false;
    }}
    onkeydown={(e) => e.key === 'Escape' && (editorOpen = false)}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t('server-files-editor-title')}
      class="flex h-[80vh] w-[80vw] max-w-4xl flex-col rounded-lg border border-(--border) bg-(--bg-2) p-4"
    >
      <div class="flex items-center justify-between gap-2">
        <h3 class="truncate font-mono text-[13px] font-semibold">{editorRel}</h3>
        {#if editorDirty}
          <span class="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-medium text-amber-500">
            {t('server-files-unsaved')}
          </span>
        {/if}
      </div>
      <textarea
        class="mt-3 min-h-0 flex-1 resize-none rounded border border-(--border) bg-(--bg-3) p-3 font-mono text-[12px] leading-relaxed outline-none focus:border-(--accent)"
        bind:value={editorText}
        oninput={() => (editorDirty = true)}
        spellcheck="false"
      ></textarea>
      <div class="mt-3 flex justify-end gap-2">
        <button
          class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent)"
          onclick={() => (editorOpen = false)}
        >
          {t('server-files-discard')}
        </button>
        <button
          class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
          disabled={busy !== '' || !editorDirty}
          onclick={saveEditor}
        >
          {t('common-save')}
        </button>
      </div>
    </div>
  </div>
{/if}
