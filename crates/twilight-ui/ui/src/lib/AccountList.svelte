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
  import { confirmAlert, toast } from './alerts.svelte.js';
  import { t } from './i18n.svelte.ts';

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
    if (!core) return Promise.reject(new Error(t('backend-unavailable')));
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

  async function removeAccount(account) {
    const confirmed = await confirmAlert({
      title: t('accounts-remove-confirm-title', { name: account.username }),
      message: t('accounts-remove-confirm'),
      confirmText: t('account-remove'),
    });
    if (!confirmed) return;
    error = '';
    try {
      await invoke('remove_account', { id: account.id });
      if (editingId === account.id) editingId = null;
      await onrefresh?.();
      toast(t('accounts-removed'), 'success');
    } catch (e) {
      error = String(e);
      toast(String(e), 'error');
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
      error = t('status-file-picker-unavailable');
      return;
    }
    try {
      const picked = await open({
        multiple: false,
        title: target === 'skin' ? t('choose-skin') : t('choose-cape'),
        filters: [{ name: t('filter-png-textures'), extensions: ['png'] }],
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
    return t(
      { offline: 'account-type-offline', microsoft: 'account-type-microsoft', ely_by: 'account-type-elyby' }[account.account_type.type] ??
        'account-type-yggdrasil'
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
              <span class="text-[10px] font-semibold tracking-wide text-(--accent)">{t('accounts-active-badge')}</span>
            {/if}
          </div>
          <div class="truncate text-[11px] text-(--text-muted)">{account.uuid}</div>
        </div>
        <div class="flex shrink-0 gap-1">
          <button
            class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
            title={t('account-skin-cape-title')}
            onclick={() => toggleEditor(account)}><Twemoji emoji="🎨" /></button
          >
          {#if refreshKind(account)}
            <button
              class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
              title={t('account-refresh-title')}
              disabled={refreshingId !== null}
              onclick={() => refreshAccount(account)}
            >
              {refreshingId === account.id ? t('account-refreshing') : t('account-refresh')}
            </button>
          {/if}
          {#if active?.id !== account.id}
            <button
              class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
              onclick={() => setActive(account.id)}>{t('account-set-active')}</button
            >
          {/if}
          <button
            class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400"
            onclick={() => removeAccount(account)}>{t('account-remove')}</button
          >
        </div>
      </div>

      {#if editingId === account.id && editingAccount}
        <div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3">
          <SkinViewer3D skin={editSkin} cape={editCape} model={editingAccount?.model} width={110} height={150} />
          <div class="flex min-w-0 flex-1 flex-col gap-2">
            <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)" onclick={() => pickEditTexture('skin')}>
              {t('account-skin-label')} <span class="truncate text-(--accent)">{editSkin || t('accounts-skin-default')}</span>
            </button>
            <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)" onclick={() => pickEditTexture('cape')}>
              {t('account-cape-label')} <span class="truncate text-(--accent)">{editCape || t('accounts-none')}</span>
            </button>
            <div class="flex gap-2">
              <button
                class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
                disabled={busy}
                onclick={saveTextures}>{t('account-editor-save')}</button
              >
              <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)" onclick={clearTextures}>
                {t('account-editor-clear')}
              </button>
            </div>
          </div>
        </div>
      {/if}
    </div>
  {:else}
    <p class="px-4 py-3 text-[12px] text-(--text-muted)">{t('account-no-accounts')}</p>
  {/each}

  {#if error}
    <p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400">{error}</p>
  {/if}
</div>
