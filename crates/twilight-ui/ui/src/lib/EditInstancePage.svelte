<script>
  // Full-page edit-instance view (SettingsPage grammar): left navigation
  // rail over five sections and a spacious content column. The mods tab is
  // fully live (list/toggle/delete/add + Modrinth browser); screenshots and
  // logs browse the instance's game folders through the new listing
  // commands; components and settings keep their milestone placeholders.
  import { onMount } from 'svelte';
  import Twemoji from './Twemoji.svelte';
  import { pushOverlay, popOverlay } from './overlays.js';
  import { iconKeyAsset } from './twemoji.js';
  import InstanceIconPicker from './InstanceIconPicker.svelte';
  import ModrinthBrowserModal from './ModrinthBrowserModal.svelte';
  import { t } from './i18n.svelte.ts';

  let { instance, storage = null, blindMode = false, deafMode = false, onback, onopenconsole } = $props();

  const sections = [
    { id: 'components', label: 'edit-components', icon: '🧱' },
    { id: 'mods', label: 'edit-mods', icon: '🧩' },
    { id: 'screenshots', label: 'edit-screenshots', icon: '🖼' },
    { id: 'logs', label: 'edit-logs', icon: '📜' },
    { id: 'settings', label: 'edit-settings', icon: '⚙' },
  ];
  let section = $state('mods');

  // ---- mods state ----
  let mods = $state([]);
  let modsBusy = $state(false);
  let modsMsg = $state('');
  let modsQuery = $state('');
  let browserOpen = $state(false);

  // ---- icon state ----
  let iconPickerOpen = $state(false);
  let iconKey = $state(instance.icon_key ?? '');
  let iconNotice = $state('');

  // ---- export state ----
  let exportNotice = $state('');
  let exportBusy = $state(false);

  async function exportAs(kind) {
    const save = window.__TAURI__?.dialog?.save;
    if (!save) {
      exportNotice = t('status-file-picker-unavailable');
      return;
    }
    exportBusy = true;
    exportNotice = '';
    try {
      const base = instance.name.replace(/[\\/:*?"<>|]/g, '_');
      const ext = kind === 'twpack' ? 'twpack' : 'zip';
      const dest = await save({
        title: kind === 'twpack' ? t('dialog-export-twpack') : t('dialog-export-zip'),
        defaultPath: `${base}.${ext}`,
        filters: [
          {
            name: kind === 'twpack' ? t('filter-twilight-pack') : t('filter-zip-archive'),
            extensions: [ext],
          },
        ],
      });
      if (!dest) return;
      const cmd = kind === 'twpack' ? 'export_instance_twpack' : 'export_instance_zip';
      const path = await window.__TAURI__.core.invoke(cmd, {
        instanceId: instance.id,
        destPath: dest,
      });
      exportNotice = t('status-exported', { path });
    } catch (e) {
      exportNotice = String(e);
    } finally {
      exportBusy = false;
    }
  }

  // ---- rename state ----
  let draftName = $state(instance.name);
  let nameNotice = $state('');

  async function commitNameEdit() {
    const value = draftName.trim();
    if (!value || value === instance.name) return;
    nameNotice = '';
    try {
      const row = await window.__TAURI__.core.invoke('rename_instance', {
        instanceId: instance.id,
        newName: value,
      });
      // the parent grid re-reads on navigation; mirror the accepted name
      instance.name = row.name;
      draftName = row.name;
      nameNotice = t('status-renamed', { name: instance.name, newName: row.name });
    } catch (e) {
      nameNotice = String(e);
    }
  }

  function iconSrc() {
    const bundled = iconKeyAsset(iconKey);
    if (bundled) return bundled;
    return instance.icon_path ? assetSrc(instance.icon_path) : '/logo.png';
  }

  async function applyIconKey(key) {
    iconNotice = '';
    try {
      await window.__TAURI__.core.invoke('set_instance_icon_key', {
        instanceId: instance.id,
        iconKey: key,
      });
      iconKey = key;
      instance.icon_key = key;
      instance.icon_path = null;
    } catch (e) {
      iconNotice = String(e);
    }
  }

  async function applyCustomIcon() {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) throw new Error(t('status-file-picker-unavailable'));
    const picked = await open({
      multiple: false,
      title: t('wizard-choose-icon'),
      filters: [{ name: t('filter-images'), extensions: ['png', 'jpg', 'jpeg', 'webp', 'ico'] }],
    });
    if (!picked) return null;
    const path = await window.__TAURI__.core.invoke('set_instance_icon', {
      instanceId: instance.id,
      imagePath: String(picked),
    });
    iconKey = '';
    instance.icon_key = null;
    instance.icon_path = path;
    return path;
  }

  // ---- screenshots / logs state ----
  let screenshots = $state([]);
  let logs = $state([]);
  let filesBusy = $state(false);
  let filesMsg = $state('');

  // forward-slash joined game paths (open_path + asset URLs both want them)
  function gamePath(...parts) {
    const root = storage ? storage.instances_dir.replace(/\\/g, '/') : '';
    return [root, instance.id, 'minecraft', ...parts].filter(Boolean).join('/');
  }

  // tauri asset-protocol URL for a full filesystem path (thumbnails)
  function assetSrc(path) {
    const convert = window.__TAURI__?.core?.convertFileSrc;
    return convert ? convert(path) : path;
  }

  function fmtSize(bytes) {
    if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${bytes} B`;
  }

  function fmtTime(unixSeconds) {
    if (!unixSeconds) return '';
    return formatDate(unixSeconds * 1000);
  }

  function visibleMods() {
    const q = modsQuery.trim().toLowerCase();
    if (!q) return mods;
    return mods.filter(
      (m) => m.display_name.toLowerCase().includes(q) || m.filename.toLowerCase().includes(q),
    );
  }

  async function listMods() {
    modsBusy = true;
    try {
      mods = await window.__TAURI__.core.invoke('list_instance_mods', {
        instanceId: instance.id,
      });
      modsMsg = '';
    } catch (e) {
      modsMsg = String(e);
    } finally {
      modsBusy = false;
    }
  }

  // ---- accessibility (Blind/Deaf Mode) ----

  const ASSIST_LABELS = { 'minecraft-access': 'Minecraft Access', echosight: 'EchoSight' };

  // key mods of each active profile that are missing from the mods folder
  const missingKeyMods = $derived([
    ...(blindMode && !mods.some((m) => m.filename.toLowerCase().includes('minecraft-access'))
      ? ['minecraft-access']
      : []),
    ...(deafMode && !mods.some((m) => m.filename.toLowerCase().includes('echosight'))
      ? ['echosight']
      : []),
  ]);

  let assistInstalling = $state(false);

  async function installKeyMods() {
    assistInstalling = true;
    try {
      for (const projectId of missingKeyMods) {
        await window.__TAURI__.core.invoke('install_mod_with_deps', {
          instanceId: instance.id,
          projectId,
          gameVersion: instance.minecraft_version,
          loader: instance.loader_type.toLowerCase(),
        });
      }
      modsMsg = t('edit-assist-installed');
    } catch (e) {
      modsMsg = String(e);
    } finally {
      assistInstalling = false;
    }
    await listMods();
  }

  async function toggleMod(mod) {
    modsBusy = true;
    try {
      await window.__TAURI__.core.invoke('toggle_mod', {
        instanceId: instance.id,
        filename: mod.filename,
        enable: !mod.is_enabled,
      });
      if (modsMsg) modsMsg = '';
    } catch (e) {
      modsMsg = String(e);
    } finally {
      modsBusy = false;
    }
    await listMods();
  }

  async function deleteMod(mod) {
    modsBusy = true;
    try {
      await window.__TAURI__.core.invoke('delete_mod', {
        instanceId: instance.id,
        filename: mod.filename,
      });
      modsMsg = '';
    } catch (e) {
      modsMsg = String(e);
    } finally {
      modsBusy = false;
    }
    await listMods();
  }

  // Native OS picker (tauri-plugin-dialog); choices go straight into the mods dir.
  async function addMod() {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      modsMsg = t('status-file-picker-unavailable');
      return;
    }
    let picked;
    try {
      picked = await open({
        multiple: true,
        title: t('edit-add-mods-title'),
        filters: [{ name: t('filter-mods'), extensions: ['jar'] }],
      });
    } catch (e) {
      modsMsg = String(e);
      return;
    }
    const paths = picked ? [].concat(picked) : [];
    if (!paths.length) return;
    modsBusy = true;
    try {
      for (const path of paths) {
        await window.__TAURI__.core.invoke('import_mod', { instanceId: instance.id, jarPath: path });
      }
      modsMsg = '';
    } catch (e) {
      modsMsg = String(e);
    } finally {
      modsBusy = false;
    }
    await listMods();
  }

  async function listFiles(which) {
    filesBusy = true;
    try {
      const rows = await window.__TAURI__.core.invoke(which, { instanceId: instance.id });
      if (which === 'list_screenshots') screenshots = rows;
      else logs = rows;
      filesMsg = '';
    } catch (e) {
      filesMsg = String(e);
    } finally {
      filesBusy = false;
    }
  }

  function openFolder(path) {
    window.__TAURI__.core.invoke('open_path', { path }).catch((e) => (filesMsg = String(e)));
  }

  function openScreenshot(name) {
    openFolder(gamePath('screenshots', name));
  }

  onMount(() => {
    listMods();
    listFiles('list_screenshots');
    listFiles('list_logs');
  });
</script>

<div class="flex h-full">
  <!-- left navigation rail -->
  <nav
    class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3"
    aria-label={t('edit-sections-aria')}
  >
    <button
      class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"
      title={t('settings-back-title')}
      onclick={onback}
    >
      <span class="w-5 shrink-0 text-center text-[15px]">←</span>
      <span class="truncate">{t('edit-back')}</span>
    </button>
    <div class="mb-3 border-b border-(--border) px-2.5 pb-3">
      <div class="truncate text-[13px] font-semibold" title={instance.name}>{instance.name}</div>
      <div class="mt-0.5 truncate text-[11px] text-(--text-muted)">
        {instance.minecraft_version} · {instance.loader_type}
      </div>
    </div>
    <div class="flex flex-col gap-0.5">
      {#each sections as s (s.id)}
        <button
          class="flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] {section === s.id
            ? 'bg-(--brand-tint) font-medium text-(--accent)'
            : 'text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)'}"
          aria-current={section === s.id ? 'true' : undefined}
          onclick={() => (section = s.id)}
        >
          <span class="flex w-5 shrink-0 items-center justify-center text-[15px]">
            <Twemoji emoji={s.icon} size={15} />
          </span>
          <span class="truncate">{t(s.label)}</span>
        </button>
      {/each}
    </div>
  </nav>

  <!-- content column -->
  <div class="min-w-0 flex-1 overflow-y-auto">
    <div class="mx-auto max-w-2xl p-8">
      {#if section === 'components'}
        <h2 class="text-[16px] font-semibold">{t('edit-components-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('edit-components-desc')}
        </p>

        <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]">
          <div class="font-medium">{t('edit-components-mc', { version: instance.minecraft_version })}</div>
          <div class="mt-1 text-(--text-muted)">{t('edit-components-loader', { loader: instance.loader_type })}</div>
          <div class="mt-1 text-(--text-muted)">
            {instance.last_played
              ? t('edit-components-last', { date: formatDate(instance.last_played * 1000) })
              : t('instance-never-played')}
          </div>
          <p class="mt-3 text-[11px] text-(--text-muted)">{t('edit-components-future')}</p>
        </div>
      {:else if section === 'mods'}
        <h2 class="text-[16px] font-semibold">{t('edit-mods')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('edit-mods-desc')}
        </p>

        {#if (blindMode || deafMode) && (instance.loader_type === 'Fabric' || instance.loader_type === 'Quilt') && missingKeyMods.length}
          <div
            class="mt-4 rounded border border-amber-500/30 bg-amber-500/10 p-3"
            role="status"
            aria-live="polite"
          >
            <p class="text-[12px] text-amber-400">
              <strong>{missingKeyMods.map((id) => ASSIST_LABELS[id] ?? id).join(' and ')}</strong>
              {t('edit-assist-missing', {
                mods: missingKeyMods.map((id) => ASSIST_LABELS[id] ?? id).join(' and '),
                count: missingKeyMods.length,
              })}
            </p>
            <button
              class="mt-2 rounded border border-amber-500/40 px-3 py-1.5 text-[12px] font-medium text-amber-400 hover:bg-amber-500/20 disabled:opacity-40"
              disabled={modsBusy || assistInstalling}
              onclick={installKeyMods}
            >
              {assistInstalling ? t('edit-assist-installing') : t('edit-assist-install')}
            </button>
          </div>
        {/if}

        <div class="mt-6 flex items-center justify-between">
          <span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('edit-mods-installed', { count: mods.length })}</span>
          <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40" disabled={modsBusy} onclick={listMods}>
            ↻ {t('common-refresh')}
          </button>
        </div>
        <input
          class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
          placeholder={t('edit-filter-mods')}
          bind:value={modsQuery}
          aria-label={t('edit-filter-mods')}
        />
        <button
          class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)"
          title={t('edit-get-more-mods-title')}
          onclick={() => (browserOpen = true)}
        >
          ⤓ {t('edit-get-more-mods')}
        </button>
        <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]">
          <tbody>
            {#each visibleMods() as mod (mod.filename)}
              <tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0">
                <td class="min-w-0 flex-1">
                  <div class="truncate" class:opacity-50={!mod.is_enabled}>{mod.display_name}</div>
                  <div class="truncate text-[10px] text-(--text-muted)">{mod.filename} · {fmtSize(mod.file_size)}</div>
                </td>
                <td class="shrink-0">
                  <button
                    class="flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 {mod.is_enabled
                      ? 'justify-end bg-(--accent)'
                      : 'justify-start bg-(--bg-canvas)'}"
                    title={mod.is_enabled ? t('edit-disable') : t('edit-enable')}
                    disabled={modsBusy}
                    onclick={() => toggleMod(mod)}
                  >
                    <span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span>
                  </button>
                </td>
                <td class="shrink-0">
                  <button
                    class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
                    title={t('edit-delete-mod', { name: mod.display_name })}
                    aria-label={t('edit-delete-mod', { name: mod.display_name })}
                    disabled={modsBusy}
                    onclick={() => deleteMod(mod)}
                  >
                    ✕
                  </button>
                </td>
              </tr>
            {:else}
              <tr>
                <td class="px-3 py-3 text-(--text-muted)">
                  {#if modsBusy}
                    {t('edit-mods-loading')}
                  {:else}
                    {t('edit-mods-empty')}
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
        {#if modsMsg}
          <p class="mt-2 text-[12px] text-rose-400">{modsMsg}</p>
        {/if}
        <div class="mt-3 flex items-center gap-2">
          <button
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={modsBusy}
            onclick={addMod}
          >
            ＋ {t('edit-add-mod')}
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
            disabled={!storage}
            title={storage ? t('edit-open-mods-title') : t('common-unknown')}
            onclick={() => openFolder(gamePath('mods'))}
          >
            <Twemoji emoji="📂" /> {t('edit-open-mods')}
          </button>
        </div>
      {:else if section === 'screenshots'}
        <h2 class="text-[16px] font-semibold">{t('edit-screenshots-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('edit-screenshots-desc')}
        </p>

        <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {#each screenshots as shot (shot.name)}
            <!-- card is a div: a real button would nest nothing here, keep it simple -->
            <div
              class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)"
              role="button"
              tabindex="0"
              title="{shot.name} · {fmtSize(shot.size)} · {fmtTime(shot.modified)}"
              onclick={() => openScreenshot(shot.name)}
              onkeydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openScreenshot(shot.name);
                }
              }}
            >
              <img
                src={assetSrc(gamePath('screenshots', shot.name))}
                alt={shot.name}
                loading="lazy"
                class="aspect-video w-full object-cover"
              />
              <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)" title={shot.name}>
                {shot.name}
              </div>
            </div>
          {:else}
            <p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)">
              {#if filesBusy}
                {t('edit-screenshots-loading')}
              {:else}
                {t('edit-screenshots-empty')}
              {/if}
            </p>
          {/each}
        </div>
        {#if filesMsg}
          <p class="mt-2 text-[12px] text-rose-400">{filesMsg}</p>
        {/if}
        <button
          class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
          title={t('edit-open-screenshots-title')}
          onclick={() => openFolder(gamePath('screenshots'))}
        >
          <Twemoji emoji="📂" /> {t('edit-open-screenshots')}
        </button>
      {:else if section === 'logs'}
        <h2 class="text-[16px] font-semibold">{t('edit-logs-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('edit-logs-desc')}
        </p>

        <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]">
          <tbody>
            {#each logs as log (log.name)}
              <tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0">
                <td class="min-w-0 flex-1">
                  <div class="truncate" title={log.name}>{log.name}</div>
                  <div class="text-[10px] text-(--text-muted)">{fmtSize(log.size)} · {fmtTime(log.modified)}</div>
                </td>
                <td class="shrink-0">
                  <button
                    class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)"
                    title={t('edit-open-log-title')}
                    onclick={() => openFolder(gamePath('logs', log.name))}
                  >
                    {t('common-open')}
                  </button>
                </td>
              </tr>
            {:else}
              <tr>
                <td class="px-3 py-3 text-(--text-muted)">
                  {#if filesBusy}
                    {t('edit-logs-loading')}
                  {:else}
                    {t('edit-logs-empty')}
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
        {#if filesMsg}
          <p class="mt-2 text-[12px] text-rose-400">{filesMsg}</p>
        {/if}
        <div class="mt-3 flex items-center gap-2">
          <button
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
            onclick={() => onopenconsole?.()}
          >
            ▤ {t('edit-open-console')}
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
            title={t('edit-open-logs-title')}
            onclick={() => openFolder(gamePath('logs'))}
          >
            <Twemoji emoji="📂" /> {t('edit-open-logs')}
          </button>
        </div>
      {:else}
        <h2 class="text-[16px] font-semibold">{t('edit-settings-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">{t('edit-settings-desc')}</p>

        <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]">
          <div class="font-medium">{t('edit-name')}</div>
          <p class="mt-1 text-[11px] text-(--text-muted)">
            {t('edit-name-desc')}
          </p>
          <div class="mt-3 flex items-center gap-2">
            <input
              class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-2) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"
              bind:value={draftName}
              aria-label={t('edit-name')}
              onkeydown={(e) => {
                if (e.key === 'Enter') commitNameEdit();
              }}
            />
            <button
              type="button"
              class="rounded bg-(--accent-1) px-3 py-1.5 font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40"
              disabled={!draftName.trim() || draftName.trim() === instance.name}
              onclick={commitNameEdit}
            >
              {t('common-rename')}
            </button>
          </div>
          {#if nameNotice}
            <p class="mt-2 text-[11px] text-(--fg-2)">{nameNotice}</p>
          {/if}
          <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)" title={gamePath()}>
            <div class="break-all">{t('edit-game-folder', { path: gamePath() })}</div>
            <div class="break-all">{t('edit-mods-folder', { path: gamePath('mods') })}</div>
          </div>
        </div>

        <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]">
          <div class="font-medium">{t('edit-icon-title')}</div>
          <p class="mt-1 text-[11px] text-(--text-muted)">
            {t('edit-icon-desc')}
          </p>
          <div class="mt-3 flex items-center gap-3">
            <span
              class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded border border-(--border) bg-(--accent)/10"
            >
              <img src={iconSrc()} alt="" draggable="false" class="h-full w-full object-cover" />
            </span>
            <button
              type="button"
              class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-[12px] font-medium text-(--accent) hover:bg-(--accent)/25"
              onclick={() => (iconPickerOpen = true)}
            >
              {t('edit-change-icon')}
            </button>
            {#if iconKey}
              <button
                type="button"
                class="rounded px-2.5 py-1.5 text-[11px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"
                onclick={() => applyIconKey('')}
              >
                {t('common-reset')}
              </button>
            {/if}
          </div>
          {#if iconNotice}
            <p role="alert" class="mt-2 text-[11px] text-red-400">{iconNotice}</p>
          {/if}
        </div>

        <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]">
          <div class="font-medium">{t('edit-export-title')}</div>
          <p class="mt-1 text-[11px] text-(--text-muted)">
            {t('edit-export-desc')}
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"
              disabled={exportBusy}
              onclick={() => exportAs('zip')}
            >
              {t('edit-export-zip')}
            </button>
            <button
              type="button"
              class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-[12px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-50"
              disabled={exportBusy}
              onclick={() => exportAs('twpack')}
            >
              {t('edit-export-twpack')}
            </button>
          </div>
          {#if exportNotice}
            <p class="mt-2 break-all text-[11px] text-(--text-muted)">{exportNotice}</p>
          {/if}
        </div>

        {#if instance.loader_type === 'Cleanroom'}
          <div
            role="alert"
            class="mt-4 rounded border border-red-500/40 bg-red-500/10 p-3 text-[11px] leading-relaxed text-red-300"
          >
            <p class="font-semibold text-red-400">{t('edit-cleanroom-title')}</p>
            <p class="mt-1">
              {t('edit-cleanroom-body')}
            </p>
          </div>
        {/if}

        <p class="mt-3 text-[11px] text-(--text-muted)">{t('edit-future')}</p>
      {/if}
    </div>
  </div>

  {#if iconPickerOpen}
    <InstanceIconPicker
      currentKey={iconKey}
      currentPath={iconKey ? '' : iconSrc()}
      onpick={(key) => {
        applyIconKey(key);
        iconPickerOpen = false;
      }}
      oncustom={applyCustomIcon}
      onclose={() => (iconPickerOpen = false)}
    />
  {/if}

  {#if browserOpen}
    <!-- stacked above the page; Escape pops this one first -->
    <ModrinthBrowserModal
      {instance}
      onclose={() => (browserOpen = false)}
      oninstalled={() => listMods()}
    />
  {/if}
</div>
