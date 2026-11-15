<script>
  // The saved-account list, extracted from the account manager modal so the
  // dedicated Accounts page hosts the same rows: 2D skin faces (base layer
  // AND the hat/outer layer), type badge, active marker, per-row actions
  // (Set active, Refresh token for Microsoft/Ely.by-OAuth accounts, Remove)
  // and the inline skin/cape editor with a live 3D preview.
  import Twemoji from './Twemoji.svelte';
  import SkinViewer3D from './SkinViewer3D.svelte';
  import SkinFace from './SkinFace.svelte';
  import { skinSource } from './accounts.svelte.js';

  let { accounts = [], active = null, onrefresh } = $props();

  let error = $state('');
  let busy = $state(false);

  // ---- per-account texture editor ----
  let editingId = $state(null);
  let editSkin = $state('');
  let editCape = $state('');

  // ---- refresh-in-flight marker (one row at a time) ----
  let refreshingId = $state(null);

  function invoke(cmd, args) {
    const core = window.__TAURI__?.core;
    if (!core) return Promise.reject(new Error('Tauri backend unavailable in this preview.'));
    return core.invoke(cmd, args);
  }

  // ---- saved list actions ----
  async function setActive(id) {
    error = '';
    try {
      await invoke('set_active_account', { id });
      await onrefresh?.();
    } catch (e) {
      error = String(e);
    }
  }

  async function removeAccount(id) {
    error = '';
    try {
      await invoke('remove_account', { id });
      if (editingId === id) editingId = null;
      await onrefresh?.();
    } catch (e) {
      error = String(e);
    }
  }

  /// Silent token renewal for the OAuth account kinds: Microsoft replays its
  /// Xbox/Minecraft chain; Ely.by re-issues tokens from the stored OAuth2
  /// refresh token. Legacy/custom accounts have no refresh path — no button.
  async function refreshAccount(account) {
    const kind = refreshKind(account);
    if (!kind) return;
    error = '';
    refreshingId = account.id;
    try {
      await invoke(kind, { id: account.id });
      await onrefresh?.();
    } catch (e) {
      error = String(e);
    } finally {
      refreshingId = null;
    }
  }

  // The command for an account's refresh button; null hides the button.
  function refreshKind(account) {
    const type = account.account_type?.type;
    if (type === 'microsoft') return 'refresh_microsoft_account';
    if (type === 'ely_by' && account.refresh_token) return 'refresh_elyby_account';
    return null;
  }

  function toggleEditor(account) {
    if (editingId === account.id) {
      editingId = null;
      return;
    }
    editingId = account.id;
    editSkin = account.skin ?? '';
    editCape = account.cape ?? '';
  }

  async function pickEditTexture(target) {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      error = 'File picker unavailable in this build.';
      return;
    }
    try {
      const picked = await open({
        multiple: false,
        title: target === 'skin' ? 'Choose a skin PNG' : 'Choose a cape PNG',
        filters: [{ name: 'PNG textures', extensions: ['png'] }],
      });
      if (!picked) return;
      if (target === 'skin') editSkin = String(picked);
      else editCape = String(picked);
      error = '';
    } catch (e) {
      error = String(e);
    }
  }

  async function saveTextures() {
    error = '';
    busy = true;
    try {
      await invoke('set_account_textures', {
        id: editingId,
        skin: editSkin.trim() || null,
        cape: editCape.trim() || null,
      });
      await onrefresh?.();
      editingId = null;
    } catch (e) {
      error = String(e);
    } finally {
      busy = false;
    }
  }

  async function clearTextures() {
    editSkin = '';
    editCape = '';
    await saveTextures();
  }

  function typeLabel(account) {
    return (
      { offline: 'Offline', microsoft: 'Microsoft', ely_by: 'Ely.by' }[account.account_type.type] ??
      'Yggdrasil'
    );
  }

  const editingAccount = $derived(accounts.find((a) => a.id === editingId) ?? null);
</script>

<div class="flex flex-col">
  {#each accounts as account (account.id)}
    <div class="border-b border-(--border) px-4 py-2.5 {active?.id === account.id ? 'bg-(--accent)/10' : ''}">
      <div class="flex items-center gap-3">
        <!-- 2D avatar: base face + hat/outer layer stacked -->
        <SkinFace
          source={skinSource(account)}
          size={32}
          letter={account.username[0]?.toUpperCase() ?? '?'}
          class="rounded bg-(--accent)/20 text-(--accent)"
        />
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2">
            <span class="truncate text-[13px] font-medium">{account.username}</span>
            <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)">
              {typeLabel(account)}
            </span>
            {#if active?.id === account.id}
              <span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>
            {/if}
          </div>
          <div class="truncate text-[11px] text-(--text-muted)">{account.uuid}</div>
        </div>
        <div class="flex shrink-0 gap-1">
          <button
            class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
            title="Skin & cape"
            onclick={() => toggleEditor(account)}><Twemoji emoji="🎨" /></button
          >
          {#if refreshKind(account)}
            <button
              class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
              title="Silently renew this account's token"
              disabled={refreshingId !== null}
              onclick={() => refreshAccount(account)}
            >
              {refreshingId === account.id ? 'Refreshing…' : 'Refresh token'}
            </button>
          {/if}
          {#if active?.id !== account.id}
            <button
              class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
              onclick={() => setActive(account.id)}>Set active</button
            >
          {/if}
          <button
            class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400"
            onclick={() => removeAccount(account.id)}>Remove</button
          >
        </div>
      </div>

      {#if editingId === account.id && editingAccount}
        <div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3">
          <SkinViewer3D skin={editSkin} cape={editCape} model={editingAccount?.model} width={110} height={150} />
          <div class="flex min-w-0 flex-1 flex-col gap-2">
            <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)" onclick={() => pickEditTexture('skin')}>
              Skin: <span class="truncate text-(--accent)">{editSkin || 'default (Steve/Alex)'}</span>
            </button>
            <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)" onclick={() => pickEditTexture('cape')}>
              Cape: <span class="truncate text-(--accent)">{editCape || 'none'}</span>
            </button>
            <div class="flex gap-2">
              <button
                class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
                disabled={busy}
                onclick={saveTextures}>Save</button
              >
              <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)" onclick={clearTextures}>
                Clear
              </button>
            </div>
          </div>
        </div>
      {/if}
    </div>
  {:else}
    <p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>
  {/each}

  {#if error}
    <p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400">{error}</p>
  {/if}
</div>
