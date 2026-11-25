<script>
  import { tauriInvoke } from './tauri';
  // Full-page edit-instance view (SettingsPage grammar): left navigation
  // rail over eight sections and a spacious content column. The mods tab is
  // fully live (list/toggle/delete/add + Modrinth browser); worlds manage
  // zip backups and restores with quick-play launch; resource/shader packs
  // list/add/delete/browse Modrinth; screenshots open in a lightbox with
  // copy/delete; logs browse the instance's game folders through the new
  // listing commands; components and settings keep their milestone
  // placeholders.
  import { onMount } from 'svelte';
  import Twemoji from './Twemoji.svelte';
  import { pushOverlay, popOverlay } from './overlays.js';
  import { iconKeyAsset } from './twemoji.js';
  import { toast, confirmAlert } from './alerts.svelte.js';
  import InstanceIconPicker from './InstanceIconPicker.svelte';
  import ModrinthBrowserModal from './ModrinthBrowserModal.svelte';
  import { t, formatDate } from './i18n.svelte.ts';

  let {
    instance,
    storage = null,
    blindMode = false,
    deafMode = false,
    devMode = false,
    section = $bindable('mods'),
    onback,
    onopenconsole,
    onlaunch,
  } = $props();

  const sections = [
    { id: 'components', label: 'edit-components', icon: '🧱' },
    { id: 'mods', label: 'edit-mods', icon: '🧩' },
    { id: 'worlds', label: 'edit-worlds', icon: '🌍' },
    { id: 'resourcepacks', label: 'edit-resourcepacks', icon: '🎨' },
    { id: 'shaderpacks', label: 'edit-shaderpacks', icon: '✨' },
    { id: 'screenshots', label: 'edit-screenshots', icon: '🖼' },
    { id: 'logs', label: 'edit-logs', icon: '📜' },
    { id: 'settings', label: 'edit-settings', icon: '⚙' },
  ];
  // ---- mods state ----
  let mods = $state([]);
  let modsBusy = $state(false);
  let modsMsg = $state('');
  let modsQuery = $state('');
  let browserOpen = $state(false);

  // ---- icon state ----
  let iconPickerOpen = $state(false);
  let iconKey = $state('');
  let iconNotice = $state('');

  // keep the icon draft in sync when the edited instance changes (picking
  // only touches iconKey, so a choice in flight is never clobbered)
  $effect(() => {
    iconKey = instance.icon_key ?? '';
  });

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
      const path = await tauriInvoke(cmd, {
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
  let draftName = $state('');
  let nameNotice = $state('');

  // sync the rename draft when the edited instance changes; typing only
  // touches draftName, so keystrokes survive the sync
  $effect(() => {
    draftName = instance.name;
  });

  async function commitNameEdit() {
    const value = draftName.trim();
    if (!value || value === instance.name) return;
    nameNotice = '';
    try {
      const row = await tauriInvoke('rename_instance', {
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
      await tauriInvoke('set_instance_icon_key', {
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
    const path = await tauriInvoke('set_instance_icon', {
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

  // Bundled/custom icon image URL (the icon may be an absolute file path).
  function assetSrc(path) {
    const convert = window.__TAURI__?.core?.convertFileSrc;
    return convert ? convert(path) : path;
  }

  // Canonical game paths are resolved by the backend (minecraft/, .minecraft/
  // or the bare instance root); the UI never guesses a game-dir layout.
  async function gamePath(sub, name) {
    try {
      return await tauriInvoke('instance_game_path', {
        instanceId: instance.id,
        sub,
        fileName: name ?? null,
      });
    } catch {
      const root = storage ? storage.instances_dir.replace(/\\/g, '/') : '';
      return [root, instance.id, 'minecraft', sub, name].filter(Boolean).join('/');
    }
  }

  async function openGameFolder(sub, name) {
    try {
      await tauriInvoke('open_instance_game_folder', {
        instanceId: instance.id,
        sub,
        fileName: name ?? null,
      });
    } catch (e) {
      filesMsg = String(e);
      toast(String(e), 'error');
    }
  }

  // Screenshot bytes arrive as data URIs through IPC: reliable in Tauri v2
  // regardless of asset-protocol scope or drive letter.
  let screenshotUris = $state({});
  let gameDirDisplay = $state('');

  async function loadGameDirDisplay() {
    gameDirDisplay = await gamePath('');
  }

  async function loadScreenshotUris(rows) {
    const pairs = await Promise.all(
      rows.map(async (row) => {
        try {
          const uri = await tauriInvoke('read_instance_screenshot', {
            instanceId: instance.id,
            fileName: row.name,
          });
          return [row.name, uri];
        } catch {
          return [row.name, ''];
        }
      }),
    );
    screenshotUris = Object.fromEntries(pairs);
  }

  // the backups folder sits next to minecraft, not inside it
  function backupsPath() {
    const root = storage ? storage.instances_dir.replace(/\\/g, '/') : '';
    return [root, instance.id, 'backups'].filter(Boolean).join('/');
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
      mods = await tauriInvoke('list_instance_mods', {
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
        await tauriInvoke('install_mod_with_deps', {
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
      await tauriInvoke('toggle_mod', {
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
      await tauriInvoke('delete_mod', {
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
        await tauriInvoke('import_mod', { instanceId: instance.id, jarPath: path });
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
      const rows = await tauriInvoke(which, { instanceId: instance.id });
      if (which === 'list_screenshots') {
        screenshots = rows;
        await loadScreenshotUris(rows);
      } else {
        logs = rows;
      }
      filesMsg = '';
    } catch (e) {
      filesMsg = String(e);
      toast(String(e), 'error');
    } finally {
      filesBusy = false;
    }
  }

  // ---- worlds / backups state ----
  let worlds = $state([]);
  let worldBackups = $state([]);
  let worldsBusy = $state(false);
  let worldsMsg = $state('');

  async function listWorlds() {
    worldsBusy = true;
    try {
      worlds = await tauriInvoke('list_instance_worlds', { instanceId: instance.id });
      worldBackups = await tauriInvoke('list_world_backups', { instanceId: instance.id });
      worldsMsg = '';
    } catch (e) {
      worldsMsg = String(e);
    } finally {
      worldsBusy = false;
    }
  }

  async function backupWorld(w) {
    worldsBusy = true;
    try {
      const path = await tauriInvoke('backup_instance_world', {
        instanceId: instance.id,
        worldName: w.name,
      });
      toast(t('worlds-backup-done', { name: w.name, path }), 'success');
      await listWorlds();
    } catch (e) {
      worldsMsg = String(e);
      worldsBusy = false;
      return;
    }
    worldsBusy = false;
  }

  async function restoreWorldBackup(b) {
    const ok = await confirmAlert({
      title: t('worlds-restore-confirm-title'),
      message: t('worlds-restore-confirm', { name: b.name }),
      confirmText: t('common-restore'),
    });
    if (!ok) return;
    worldsBusy = true;
    try {
      const name = await tauriInvoke('restore_world_backup', {
        instanceId: instance.id,
        backupName: b.name,
      });
      toast(t('worlds-restore-done', { name }), 'success');
      await listWorlds();
    } catch (e) {
      worldsMsg = String(e);
      worldsBusy = false;
      return;
    }
    worldsBusy = false;
  }

  function launchWorld(w) {
    onlaunch?.(instance.id, null, w.name);
  }

  // ---- resource/shader packs state ----
  let packs = $state([]);
  let packsBusy = $state(false);
  let packsMsg = $state('');
  let packBrowseOpen = $state(false);
  // the pack tab in view ('resourcepacks' | 'shaderpacks'); shared by the
  // list/add/delete handlers and the Modrinth browser
  let packKind = $state('resourcepacks');

  async function listPacks() {
    packsBusy = true;
    try {
      packs = await tauriInvoke('list_instance_packs', {
        instanceId: instance.id,
        projectType: packKind === 'shaderpacks' ? 'shader' : 'resourcepack',
      });
      packsMsg = '';
    } catch (e) {
      packsMsg = String(e);
    } finally {
      packsBusy = false;
    }
  }

  async function addPack() {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      packsMsg = t('status-file-picker-unavailable');
      return;
    }
    let picked;
    try {
      picked = await open({
        multiple: true,
        title: t('packs-add-title'),
        filters: [{ name: t('filter-zip-archive'), extensions: ['zip'] }],
      });
    } catch (e) {
      packsMsg = String(e);
      return;
    }
    const paths = picked ? [].concat(picked) : [];
    if (!paths.length) return;
    packsBusy = true;
    try {
      packsMsg = '';
      for (const path of paths) {
        const name = String(path).split(/[\\/]/).pop() || String(path);
        const args = {
          instanceId: instance.id,
          projectType: packKind === 'shaderpacks' ? 'shader' : 'resourcepack',
          filePath: path,
        };
        const outcome = await tauriInvoke('import_pack', args);
        if (!outcome?.requiresConfirmation) continue;
        // Minecraft2Shell: the backend refused to copy a font-bearing pack
        // until this explicit confirmation; it re-scans again on the retry.
        const fontNames = Array.isArray(outcome.fontEntries) ? outcome.fontEntries : [];
        const listed = fontNames.slice(0, 8).join(', ');
        const fonts = fontNames.length > 8 ? `${listed}, …` : listed;
        const ok = await confirmAlert({
          variant: 'warning',
          title: t('packs-fonts-confirm-title'),
          message: t('packs-fonts-confirm', {
            name,
            count: fontNames.length,
            fonts,
          }),
          confirmText: t('packs-fonts-confirm-action'),
        });
        if (!ok) {
          packsMsg = t('packs-fonts-cancelled', { name });
          continue;
        }
        const confirmed = await tauriInvoke('import_pack', {
          ...args,
          confirmFonts: true,
        });
        if (confirmed?.requiresConfirmation) {
          packsMsg = t('packs-fonts-cancelled', { name });
        }
      }
    } catch (e) {
      packsMsg = String(e);
    } finally {
      packsBusy = false;
    }
    await listPacks();
  }

  async function deletePack(p) {
    const ok = await confirmAlert({
      title: t('packs-delete-confirm-title'),
      message: t('packs-delete-confirm', { name: p.name }),
      confirmText: t('common-delete'),
    });
    if (!ok) return;
    packsBusy = true;
    try {
      await tauriInvoke('delete_pack', {
        instanceId: instance.id,
        projectType: packKind === 'shaderpacks' ? 'shader' : 'resourcepack',
        fileName: p.name,
      });
      packsMsg = '';
    } catch (e) {
      packsMsg = String(e);
    } finally {
      packsBusy = false;
    }
    await listPacks();
  }

  // ---- screenshots lightbox ----
  let lightbox = $state(null); // the open FileEntry (or null)

  function openLightbox(shot) {
    lightbox = shot;
  }

  function closeLightbox() {
    lightbox = null;
  }

  async function copyText(text, key) {
    try {
      await navigator.clipboard.writeText(text);
      toast(t(key), 'success');
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function copyLightboxImage() {
    try {
      const uri = screenshotUris[lightbox.name];
      if (!uri) throw new Error(t('screenshots-copy-image-error'));
      const resp = await fetch(uri);
      const blob = await resp.blob();
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      toast(t('screenshots-copied-image'), 'success');
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function copyScreenshotPath() {
    await copyText(await gamePath('screenshots', lightbox.name), 'screenshots-copied-path');
  }

  async function deleteScreenshot(shot) {
    const ok = await confirmAlert({
      title: t('screenshots-delete-confirm-title'),
      message: t('screenshots-delete-confirm', { name: shot.name }),
      confirmText: t('common-delete'),
    });
    if (!ok) return;
    try {
      await tauriInvoke('delete_screenshot', {
        instanceId: instance.id,
        fileName: shot.name,
      });
      if (lightbox?.name === shot.name) lightbox = null;
      await listFiles('list_screenshots');
      toast(t('screenshots-deleted'), 'success');
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function deleteLightbox() {
    if (lightbox) await deleteScreenshot(lightbox);
  }

  async function openFolder(target) {
    const path = typeof target === 'string' ? target : await target;
    try {
      await tauriInvoke('open_path', { path });
    } catch (e) {
      filesMsg = String(e);
      toast(String(e), 'error');
    }
  }

  // ---- log viewer ----
  let selectedLog = $state(null); // FileEntry
  let logText = $state('');
  let logTextBusy = $state(false);
  let logTextMsg = $state('');

  async function selectLog(entry) {
    selectedLog = entry;
    logTextBusy = true;
    logTextMsg = '';
    try {
      logText = await tauriInvoke('read_instance_log', {
        instanceId: instance.id,
        fileName: entry.name,
        source: entry.source || 'logs',
      });
    } catch (e) {
      logText = '';
      logTextMsg = String(e);
      toast(String(e), 'error');
    } finally {
      logTextBusy = false;
    }
  }

  async function copySelectedLog() {
    if (!selectedLog) return;
    if (!logText) await selectLog(selectedLog);
    await copyText(logText, 'logs-copied-log');
  }

  async function copyDevValue(value, message) {
    try {
      await navigator.clipboard.writeText(value);
      toast(t(message), 'success');
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  async function copyRawLaunchCommand(unredacted = false) {
    if (unredacted && !window.confirm(t('dev-unredacted-warning'))) return;
    try {
      const command = await tauriInvoke('get_raw_launch_command', {
        instanceId: instance.id,
        unredacted,
      });
      await copyDevValue(command, unredacted ? 'dev-copied-command-unredacted' : 'dev-copied-command');
    } catch (e) {
      toast(String(e), 'error');
    }
  }

  // lazy per-tab loads: worlds, packs, screenshots and logs fetch on open
  $effect(() => {
    if (section === 'worlds') listWorlds();
    else if (section === 'resourcepacks' || section === 'shaderpacks') listPacks();
    else if (section === 'screenshots') listFiles('list_screenshots');
    else if (section === 'logs') listFiles('list_logs');
  });

  onMount(() => {
    listMods();
    loadGameDirDisplay();
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
            onclick={() => openGameFolder('mods')}
          >
            <Twemoji emoji="📂" /> {t('edit-open-mods')}
          </button>
        </div>
      {:else if section === 'worlds'}
        <h2 class="text-[16px] font-semibold">{t('edit-worlds-title')}</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t('edit-worlds-desc')}
        </p>

        <div class="mt-6 flex items-center justify-between">
          <span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('worlds-installed', { count: worlds.length })}</span>
          <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40" disabled={worldsBusy} onclick={listWorlds}>
            ↻ {t('common-refresh')}
          </button>
        </div>
        <table class="mt-2 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]">
          <tbody>
            {#each worlds as w (w.name)}
              <tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0">
                <td class="min-w-0 flex-1">
                  <div class="truncate" title={w.name}>{w.name}</div>
                  <div class="text-[10px] text-(--text-muted)">{fmtSize(w.size)} · {fmtTime(w.modified)}</div>
                </td>
                <td class="shrink-0">
                  <button
                    class="rounded px-2 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--brand-tint) disabled:opacity-40"
                    title={t('worlds-launch-title', { name: w.name })}
                    disabled={worldsBusy}
                    onclick={() => launchWorld(w)}
                  >
                    ▶ {t('worlds-launch')}
                  </button>
                </td>
                <td class="shrink-0">
                  <button
                    class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main) disabled:opacity-40"
                    title={t('worlds-backup-title', { name: w.name })}
                    disabled={worldsBusy}
                    onclick={() => backupWorld(w)}
                  >
                    {t('worlds-backup')}
                  </button>
                </td>
              </tr>
            {:else}
              <tr>
                <td class="px-3 py-3 text-(--text-muted)">
                  {#if worldsBusy}
                    {t('worlds-loading')}
                  {:else}
                    {t('worlds-empty')}
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>

        <div class="mt-6 flex items-center justify-between">
          <span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('worlds-backups', { count: worldBackups.length })}</span>
          <button
            class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40"
            title={storage ? t('worlds-open-backups-title') : t('common-unknown')}
            disabled={!storage}
            onclick={() => openFolder(backupsPath())}
          >
            <Twemoji emoji="📂" /> {t('worlds-open-backups')}
          </button>
        </div>
        <table class="mt-2 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]">
          <tbody>
            {#each worldBackups as b (b.name)}
              <tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0">
                <td class="min-w-0 flex-1">
                  <div class="truncate" title={b.name}>{b.name}</div>
                  <div class="text-[10px] text-(--text-muted)">{fmtSize(b.size)} · {fmtTime(b.modified)}</div>
                </td>
                <td class="shrink-0">
                  <button
                    class="rounded px-2 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--brand-tint) disabled:opacity-40"
                    title={t('worlds-restore-title', { name: b.name })}
                    disabled={worldsBusy}
                    onclick={() => restoreWorldBackup(b)}
                  >
                    {t('common-restore')}
                  </button>
                </td>
              </tr>
            {:else}
              <tr>
                <td class="px-3 py-3 text-(--text-muted)">
                  {#if worldsBusy}
                    {t('worlds-loading')}
                  {:else}
                    {t('worlds-backups-empty')}
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
        {#if worldsMsg}
          <p class="mt-2 text-[12px] text-rose-400">{worldsMsg}</p>
        {/if}
      {:else if section === 'resourcepacks' || section === 'shaderpacks'}
        <h2 class="text-[16px] font-semibold">
          {t(section === 'shaderpacks' ? 'edit-shaderpacks-title' : 'edit-resourcepacks-title')}
        </h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          {t(section === 'shaderpacks' ? 'edit-shaderpacks-desc' : 'edit-resourcepacks-desc')}
        </p>

        <div class="mt-6 flex items-center justify-between">
          <span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">{t('packs-installed', { count: packs.length })}</span>
          <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40" disabled={packsBusy} onclick={listPacks}>
            ↻ {t('common-refresh')}
          </button>
        </div>
        <button
          class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)"
          title={t('packs-browse-title')}
          onclick={() => {
            packKind = section;
            packBrowseOpen = true;
          }}
        >
          ⤓ {t(section === 'shaderpacks' ? 'packs-browse-shaders' : 'packs-browse-packs')}
        </button>
        <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]">
          <tbody>
            {#each packs as p (p.name)}
              <tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0">
                <td class="min-w-0 flex-1">
                  <div class="truncate" title={p.name}>{p.name}</div>
                  <div class="text-[10px] text-(--text-muted)">{fmtSize(p.size)} · {fmtTime(p.modified)}</div>
                </td>
                <td class="shrink-0">
                  <button
                    class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40"
                    title={t('packs-delete-title', { name: p.name })}
                    aria-label={t('packs-delete-title', { name: p.name })}
                    disabled={packsBusy}
                    onclick={() => deletePack(p)}
                  >
                    ✕
                  </button>
                </td>
              </tr>
            {:else}
              <tr>
                <td class="px-3 py-3 text-(--text-muted)">
                  {#if packsBusy}
                    {t('packs-loading')}
                  {:else}
                    {t('packs-empty')}
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
        {#if packsMsg}
          <p class="mt-2 text-[12px] text-rose-400">{packsMsg}</p>
        {/if}
        <div class="mt-3 flex items-center gap-2">
          <button
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={packsBusy}
            onclick={addPack}
          >
            ＋ {t('packs-add')}
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
            disabled={!storage}
            title={storage ? (section === 'shaderpacks' ? t('packs-open-shaders-title') : t('packs-open-packs-title')) : t('common-unknown')}
            onclick={() => openGameFolder(section === 'shaderpacks' ? 'shaderpacks' : 'resourcepacks')}
          >
            <Twemoji emoji="📂" /> {t(section === 'shaderpacks' ? 'packs-open-shaders' : 'packs-open-packs')}
          </button>
        </div>
      {:else if section === 'screenshots'}
        <div class="flex items-start justify-between gap-3">
          <div>
            <h2 class="text-[16px] font-semibold">{t('edit-screenshots-title')}</h2>
            <p class="mt-1 text-[12px] text-(--text-muted)">
              {t('edit-screenshots-desc')}
            </p>
          </div>
          <button
            class="shrink-0 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
            disabled={filesBusy}
            title={t('common-refresh')}
            onclick={() => listFiles('list_screenshots')}
          >
            ↻ {t('common-refresh')}
          </button>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {#each screenshots as shot (shot.name)}
            <div
              class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)"
              role="button"
              tabindex="0"
              title="{shot.name} · {fmtSize(shot.size)} · {fmtTime(shot.modified)}"
              onclick={() => openLightbox(shot)}
              onkeydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(shot);
                }
              }}
            >
              {#if screenshotUris[shot.name]}
                <img
                  src={screenshotUris[shot.name]}
                  alt={shot.name}
                  loading="lazy"
                  class="aspect-video w-full object-contain"
                />
              {:else}
                <div class="flex aspect-video w-full items-center justify-center px-2 text-center text-[11px] text-(--text-muted)">
                  {t('screenshots-preview-unavailable')}
                </div>
              {/if}
              <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)" title={shot.name}>
                {shot.name}
              </div>
              <div class="flex items-center gap-1 border-t border-(--border) px-1.5 py-1">
                <button
                  class="rounded px-1.5 py-0.5 text-[10px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)"
                  title={t('screenshots-copy-path')}
                  onclick={async (e) => {
                    e.stopPropagation();
                    await copyText(await gamePath('screenshots', shot.name), 'screenshots-copied-path');
                  }}>{t('screenshots-copy-path')}</button
                >
                <button
                  class="rounded px-1.5 py-0.5 text-[10px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)"
                  title={t('screenshots-open-folder')}
                  onclick={(e) => {
                    e.stopPropagation();
                    openGameFolder('screenshots', shot.name);
                  }}>{t('common-open')}</button
                >
                <button
                  class="ml-auto rounded px-1.5 py-0.5 text-[10px] text-rose-400 hover:bg-rose-500/10"
                  title={t('common-delete')}
                  onclick={async (e) => {
                    e.stopPropagation();
                    await deleteScreenshot(shot);
                  }}>{t('common-delete')}</button
                >
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
          onclick={() => openGameFolder('screenshots')}
        >
          <Twemoji emoji="📂" /> {t('edit-open-screenshots')}
        </button>
      {:else if section === 'logs'}
        <div class="flex items-start justify-between gap-3">
          <div>
            <h2 class="text-[16px] font-semibold">{t('edit-logs-title')}</h2>
            <p class="mt-1 text-[12px] text-(--text-muted)">
              {t('edit-logs-desc')}
            </p>
          </div>
          <button
            class="shrink-0 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
            disabled={filesBusy}
            title={t('common-refresh')}
            onclick={() => listFiles('list_logs')}
          >
            ↻ {t('common-refresh')}
          </button>
        </div>

        <div class="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <table class="w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]">
            <tbody>
              {#each logs as log (log.source + '/' + log.name)}
                <tr
                  class="flex cursor-pointer items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0 {selectedLog?.name ===
                  log.name && selectedLog?.source === log.source
                    ? 'bg-(--accent)/10'
                    : 'hover:bg-(--bg-canvas)'}"
                  onclick={() => selectLog(log)}
                >
                  <td class="min-w-0 flex-1">
                    <div class="truncate" title={log.name}>{log.name}</div>
                    <div class="text-[10px] text-(--text-muted)">
                      {log.source || 'logs'} · {fmtSize(log.size)} · {fmtTime(log.modified)}
                    </div>
                  </td>
                  <td class="shrink-0">
                    <button
                      class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)"
                      title={t('edit-open-log-title')}
                      onclick={(e) => {
                        e.stopPropagation();
                        openGameFolder(log.source || 'logs', log.name);
                      }}
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

          <div class="min-w-0 rounded border border-(--border) bg-(--bg-subtle) p-3">
            {#if selectedLog}
              <div class="flex items-center justify-between gap-2">
                <span class="truncate text-[12px] font-medium" title={selectedLog.name}>{selectedLog.name}</span>
                <button
                  class="shrink-0 rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)"
                  disabled={logTextBusy}
                  onclick={copySelectedLog}>{t('logs-copy-log')}</button
                >
              </div>
              {#if logTextMsg}
                <p role="alert" class="mt-1 text-[11px] text-rose-400">{logTextMsg}</p>
              {/if}
              <pre
                class="mt-2 max-h-72 overflow-auto whitespace-pre-wrap break-all rounded bg-(--bg-canvas) p-2 font-mono text-[11px] leading-5">{#if logTextBusy}{t('edit-logs-loading')}{:else}{logText || t('logs-empty-content')}{/if}</pre>
            {:else}
              <p class="text-[12px] text-(--text-muted)">{t('logs-select-hint')}</p>
            {/if}
          </div>
        </div>
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
            onclick={() => openGameFolder('logs')}
          >
            <Twemoji emoji="📂" /> {t('edit-open-logs')}
          </button>
          <button
            class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
            title={t('edit-open-crash-reports-title')}
            onclick={() => openGameFolder('crash-reports')}
          >
            <Twemoji emoji="📂" /> {t('edit-open-crash-reports')}
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
          <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)" title={gameDirDisplay}>
            <div class="break-all">{t('edit-game-folder', { path: gameDirDisplay })}</div>
            <div class="break-all">{t('edit-mods-folder', { path: `${gameDirDisplay}/mods` })}</div>
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

        {#if devMode}
          <div class="mt-4 rounded border border-(--accent)/40 bg-(--accent)/5 p-4 text-[12px]">
            <p class="font-medium text-(--accent)">{t('dev-actions-title')}</p>
            <div class="mt-2 flex flex-wrap gap-2">
              <button
                class="rounded border border-(--border) px-3 py-1.5 text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                onclick={copyRawLaunchCommand}
              >
                {t('dev-copy-command')}
              </button>
              <button
                class="rounded border border-(--border) px-3 py-1.5 text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                title={t('dev-unredacted-warning')}
                onclick={() => copyRawLaunchCommand(true)}
              >
                {t('dev-copy-command-unredacted')}
              </button>
              <button
                class="rounded border border-(--border) px-3 py-1.5 text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                onclick={() => copyDevValue(instance.id, 'dev-copied-id')}
              >
                {t('dev-copy-id')}
              </button>
              <button
                class="rounded border border-(--border) px-3 py-1.5 text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                onclick={() =>
                  copyDevValue(gameDirDisplay.replace(/\/minecraft$/, ''), 'dev-copied-path')}
              >
                {t('dev-copy-path')}
              </button>
            </div>
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

  {#if packBrowseOpen}
    <!-- pack browsing: resourcepack/shader searches run without loader pins -->
    <ModrinthBrowserModal
      {instance}
      projectType={packKind === 'shaderpacks' ? 'shader' : 'resourcepack'}
      onclose={() => (packBrowseOpen = false)}
      oninstalled={() => listPacks()}
    />
  {/if}

  {#if lightbox}
    <!-- screenshots lightbox: the clicked image at full size -->
    <div
      role="presentation"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center p-8"
      style="background: var(--scrim)"
      onclick={(e) => {
        if (e.target === e.currentTarget) closeLightbox();
      }}
      onkeydown={(e) => e.key === 'Escape' && closeLightbox()}
    >
      {#if screenshotUris[lightbox.name]}
        <img
          src={screenshotUris[lightbox.name]}
          alt={lightbox.name}
          class="max-h-full max-w-full rounded border border-(--border-1) object-contain shadow-2xl"
          draggable="false"
        />
      {:else}
        <p class="rounded border border-(--border-1) bg-(--bg-subtle) px-4 py-3 text-[12px] text-(--text-muted)">
          {t('screenshots-preview-unavailable')}
        </p>
      {/if}
      <div class="mt-3 max-w-full truncate text-[12px] text-(--fg-2)" title={lightbox.name}>
        {lightbox.name}
      </div>
      <div class="mt-2 flex flex-wrap items-center justify-center gap-2">
        <button
          class="rounded bg-(--accent-1) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-1-hover)"
          onclick={copyLightboxImage}
        >
          {t('screenshots-copy-image')}
        </button>
        <button
          class="rounded border border-(--border-1) px-3 py-1.5 text-[12px] text-(--fg-2) hover:text-(--fg-1)"
          onclick={copyScreenshotPath}
        >
          {t('screenshots-copy-path')}
        </button>
        <button
          class="rounded border border-(--border-1) px-3 py-1.5 text-[12px] text-(--fg-2) hover:text-(--fg-1)"
          onclick={() => openGameFolder('screenshots', lightbox.name)}
        >
          {t('screenshots-open-folder')}
        </button>
        <button
          class="rounded px-3 py-1.5 text-[12px] text-rose-400 hover:bg-rose-500/10"
          onclick={deleteLightbox}
        >
          {t('common-delete')}
        </button>
        <button
          class="rounded border border-(--border-1) px-3 py-1.5 text-[12px] text-(--fg-2) hover:text-(--fg-1)"
          onclick={closeLightbox}
        >
          {t('common-close')}
        </button>
      </div>
    </div>
  {/if}
</div>
