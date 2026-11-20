<script>
  // Dedicated full-page account management (the modal stays as a thin
  // overlay for quick switches): a left navigation rail over three
  // sections — Overview (the active/selected character on a 3D stage with
  // the outer-layer toggle and identity facts), Add Account (the shared
  // sign-in panels) and Saved Accounts (rows with set-active/refresh/
  // remove plus the inline texture editor). Layout mirrors SettingsPage.
  import { accounts as accountStore } from './accounts.svelte.js';
  import { skinSource } from './accounts.svelte.js';
  import { t } from './i18n.svelte.ts';
  import SkinViewer3D from './SkinViewer3D.svelte';
  import SkinFace from './SkinFace.svelte';
  import SignInPanels from './SignInPanels.svelte';
  import AccountList from './AccountList.svelte';

  let { onback, onrefresh } = $props();

  const sections = [
    { id: 'overview', label: 'accounts-overview' },
    { id: 'add', label: 'accounts-add' },
    { id: 'saved', label: 'accounts-saved' },
  ];
  let section = $state('overview');

  // which account the 3D stage shows: the explicitly picked one, else the
  // active one; falls back to the first saved account for discovery
  let pickedId = $state(null);
  const preview = $derived.by(() => {
    const list = accountStore.list;
    return (
      list.find((a) => a.id === pickedId) ??
      list.find((a) => a.id === accountStore.active?.id) ??
      list[0] ??
      null
    );
  });

  // outer (hat/jacket) layer visibility for the 3D stage
  let outerLayer = $state(true);

  function typeLabel(account) {
    return t(
      { offline: 'account-type-offline', microsoft: 'account-type-microsoft', ely_by: 'account-type-elyby' }[account.account_type.type] ??
        'account-type-yggdrasil'
    );
  }
</script>

<div class="flex h-full">
  <!-- left navigation rail -->
  <nav
    class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3"
    aria-label={t('accounts-sections-aria')}
  >
    <button
      class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"
      title={t('settings-back-title')}
      onclick={onback}
    >
      <span class="w-5 shrink-0 text-center text-[15px]">←</span>
      <span class="truncate">{t('header-back-instances')}</span>
    </button>
    <div class="flex flex-col gap-0.5">
      {#each sections as s (s.id)}
        <button
          class="flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] {section === s.id
            ? 'bg-(--brand-tint) font-medium text-(--accent)'
            : 'text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)'}"
          aria-current={section === s.id ? 'true' : undefined}
          onclick={() => (section = s.id)}
        >
          <span class="truncate">{t(s.label)}</span>
        </button>
      {/each}
    </div>
  </nav>

  <!-- content column -->
  <div class="min-w-0 flex-1 overflow-y-auto">
    <div class="mx-auto max-w-2xl p-8">
      {#if section === 'overview'}
        <h2 class="text-[16px] font-semibold">{t('accounts-overview-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('accounts-overview-desc')}
        </p>

        {#if accountStore.list.length}
          <!-- account picker: 2D faces (base + hat layer) -->
          <div class="mt-6 flex flex-wrap gap-2">
            {#each accountStore.list as account (account.id)}
              <button
                class="flex items-center gap-2 rounded border px-2 py-1.5 text-left {preview?.id === account.id
                  ? 'border-(--accent) bg-(--brand-tint)'
                  : 'border-(--border) hover:border-(--text-muted)'}"
                title={t('accounts-preview-title', { name: account.username })}
                onclick={() => (pickedId = account.id)}
              >
                <SkinFace
                  source={skinSource(account)}
                  size={24}
                  letter={account.username[0]?.toUpperCase() ?? '?'}
                  class="rounded bg-(--accent)/20 text-(--accent)"
                />
                <span class="text-[12px] font-medium">{account.username}</span>
                {#if accountStore.active?.id === account.id}
                  <span class="text-[9px] font-semibold tracking-wide text-(--accent)">{t('accounts-active-badge')}</span>
                {/if}
              </button>
            {/each}
          </div>

          {#if preview}
            <div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-6">
              <SkinViewer3D
                skin={skinSource(preview)}
                cape={preview.cape}
                model={preview.model}
                width={230}
                height={310}
                bind:outerLayer
                showToggle
              />
              <div class="text-center">
                <p class="text-sm font-semibold">{preview.username}</p>
                <p class="text-[11px] text-(--text-muted)">{typeLabel(preview)}</p>
              </div>
              <dl class="mt-1 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]">
                <dt class="text-(--text-muted)">{t('accounts-uuid')}</dt>
                <dd class="min-w-0 truncate font-mono" title={preview.uuid}>{preview.uuid}</dd>
                <dt class="text-(--text-muted)">{t('accounts-skin-source')}</dt>
                <dd class="min-w-0 truncate" title={preview.skin ?? t('accounts-skin-default')}>
                  {preview.skin ? t('accounts-skin-custom') : t('accounts-skin-default')}
                </dd>
                <dt class="text-(--text-muted)">{t('accounts-cape')}</dt>
                <dd class="min-w-0 truncate">{preview.cape ? t('accounts-cape-custom') : t('accounts-none')}</dd>
                <dt class="text-(--text-muted)">{t('accounts-renewable')}</dt>
                <dd class="min-w-0 truncate">{preview.refresh_token ? t('accounts-token-yes') : t('accounts-token-no')}</dd>
              </dl>
            </div>
          {/if}
        {:else}
          <div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center">
            <p class="text-sm font-medium">{t('accounts-empty-title')}</p>
            <p class="max-w-sm text-[12px] text-(--text-muted)">
              {t('accounts-empty-body')}
            </p>
            <button
              class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
              onclick={() => (section = 'add')}>{t('accounts-add-one')}</button
            >
          </div>
        {/if}
      {:else if section === 'add'}
        <h2 class="text-[16px] font-semibold">{t('accounts-add-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('accounts-add-desc')}
        </p>
        <div class="mt-6 overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface)">
          <SignInPanels {onrefresh} />
        </div>
      {:else}
        <h2 class="text-[16px] font-semibold">{t('accounts-saved-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('accounts-saved-desc')}
        </p>
        <div class="mt-6 rounded-lg border border-(--border) bg-(--bg-surface)">
          <AccountList accounts={accountStore.list} active={accountStore.active} {onrefresh} />
        </div>
      {/if}
    </div>
  </div>
</div>
