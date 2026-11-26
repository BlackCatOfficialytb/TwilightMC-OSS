<script>
  import { tauriInvoke, tauriListen } from './lib/tauri';
  import { onMount } from 'svelte';
  import InstanceGrid from './lib/InstanceGrid.svelte';
  import EditInstancePage from './lib/EditInstancePage.svelte';
  import MrpackInstallModal from './lib/MrpackInstallModal.svelte';
  import NewInstanceModal from './lib/NewInstanceModal.svelte';
  import InstanceContextPanel from './lib/InstanceContextPanel.svelte';
  import TwpackInstallModal from './lib/TwpackInstallModal.svelte';
  import SettingsPage from './lib/SettingsPage.svelte';
  import AccountManagerModal from './lib/AccountManagerModal.svelte';
  import AccountsPage from './lib/AccountsPage.svelte';
  import ClientModePage from './lib/ClientModePage.svelte';
  import ServersPage from './lib/ServersPage.svelte';
  import SkinFace from './lib/SkinFace.svelte';
  import LauncherIcon from './lib/LauncherIcon.svelte';
  import Twemoji from './lib/Twemoji.svelte';
  import AlertDialog from './lib/AlertDialog.svelte';
  import BareBonesGateModal from './lib/BareBonesGateModal.svelte';
  import CrashReportModal from './lib/CrashReportModal.svelte';
  import JavaDownloadModal from './lib/JavaDownloadModal.svelte';
  import ToastContainer from './lib/ToastContainer.svelte';
  import { toast, promptAlert } from './lib/alerts.svelte.js';
  import { topOverlay } from './lib/overlays.js';
  import { isDarkTheme, loadSavedAccent, normalizeThemeId, applyTheme } from './lib/theme';
  import { syncIconTheme } from './lib/icons';
  import { initLocale, t } from './lib/i18n.svelte.ts';
  // shared account state: one store drives the sidebar chip, the client
  // dashboard and the account manager modal
  import {
    accounts as accountStore,
    refreshAccounts,
    skinSource,
  } from './lib/accounts.svelte.js';

  let version = $state('…');
  let active = $state('instances');

  // Theme preset: persisted locally (fast first paint) with legacy
  // "dark"/"light" values mapped; settings.json keeps recording just the
  // light/dark ground so the backend contract stays unchanged.
  let theme = $state(
    normalizeThemeId(localStorage.getItem('twilight-theme')) ??
      (matchMedia('(prefers-color-scheme: light)').matches
        ? 'twilight-light'
        : 'twilight-dark')
  );

  $effect(() => {
    applyTheme(theme); // dark/light ground + preset-* token classes
    localStorage.setItem('twilight-theme', theme);
    // fluent-auto icons flip packs with the theme ground
    syncIconTheme(theme);
    window.__TAURI__?.core
      .invoke('set_theme_config', { theme: isDarkTheme(theme) ? 'dark' : 'light' })
      .catch(() => {});
  });

  // Restore the user's accent color pick before first interactive paint.
  loadSavedAccent();

  // No crutch states or animations: a busy desktop reads one crisp status word.
  // Statuses hold a message key + arguments (not a frozen string) so a live
  // language switch also re-renders the header and client dashboard.
  let status = $state({ key: 'status-ready', args: {} });
  const statusText = $derived(status.key ? t(status.key, status.args) : status.text);

  function setStatus(key, args = {}) {
    status = { key, args };
  }

  function setStatusError(error) {
    status = { key: null, args: {}, text: String(error) };
  }

  // ---- sidebar / navigation ----
  let sidebarExpanded = $state(false);

  // Launcher (full library) vs Client (minimal dashboard) mode; persisted in
  // localStorage for fast first paint and mirrored into settings.json.
  let mode = $state(
    localStorage.getItem('twilight-mode') === 'client' ? 'client' : 'launcher'
  );

  $effect(() => {
    localStorage.setItem('twilight-mode', mode);
    window.__TAURI__?.core.invoke('set_mode_config', { mode }).catch(() => {});
  });

  // Accessibility profiles: Blind Mode (screen reader & audio navigation) and
  // Deaf Mode (closed captions & visual sound cues); same local-first +
  // settings.json mirror pattern as the launcher/client mode above.
  let blindMode = $state(localStorage.getItem('twilight-blind-mode') === 'true');
  let deafMode = $state(localStorage.getItem('twilight-deaf-mode') === 'true');

  // App Developer Mode: unlocked in Settings → About, persisted in settings.json.
  let devSettings = $state({
    devMode: false,
    horizonDevOffline: false,
    horizonDevSinglePlayer: false,
    horizonAllowUnsignedLocal: false,
    jdwpEnabled: false,
    jdwpPort: 5005,
    mixinDebug: false,
  });
  let devMode = $derived(devSettings.devMode);

  $effect(() => {
    localStorage.setItem('twilight-dev-mode', String(devSettings.devMode));
    window.__TAURI__?.core
      .invoke('set_dev_settings', { settings: devSettings })
      .catch(() => {});
  });

  $effect(() => {
    localStorage.setItem('twilight-blind-mode', String(blindMode));
    localStorage.setItem('twilight-deaf-mode', String(deafMode));
    window.__TAURI__?.core
      .invoke('set_accessibility_config', { blindMode, deafMode })
      .catch(() => {});
  });

  const nav = [
    { id: 'instances', label: 'nav-instances', icon: 'instances' },
    { id: 'worlds', label: 'nav-servers', icon: 'worlds' },
    { id: 'downloads', label: 'nav-downloads', icon: 'download' },
    { id: 'settings', label: 'nav-settings', icon: 'settings' },
    { id: 'accounts', label: 'nav-accounts', icon: 'accounts' },
  ];

  const sections = {
    instances: ['page-instances-title', 'page-instances-subtitle'],
    worlds: ['page-servers-title', 'page-servers-subtitle'],
    downloads: ['page-downloads-title', 'page-downloads-subtitle'],
  };

  // ---- auth state ----

  // `accountStore` (lib/accounts.svelte.js) owns the list + active pointer;
  // everything reads it through this derived alias.
  const activeAccount = $derived(accountStore.active);
  let modalOpen = $state(false);

  // ---- java discovery state ----
  let runtimes = $state([]);
  let scanning = $state(false);
  let javaScanned = $state(false);
  let javaError = $state('');

  // ---- new instance wizard (layout lives in NewInstanceModal) ----
  let wizardOpen = $state(false);
  let wizardImportPath = $state('');

  // ---- install modpack modal (path/URL + drop target) ----
  let modpackOpen = $state(false);
  let modpackTarget = $state('');
  let modpackBusy = $state(false);
  let modpackError = $state('');

  // ---- edit instance (full-page view on the `edit` route) ----
  let editFor = $state(null);
  let editSection = $state('mods');

  // View routing: the sidebar nav selects a surface; an open editor takes
  // over the whole main column ('instances' | 'settings' | 'edit').
  let currentView = $derived(editFor ? 'edit' : active);

  // ---- global .mrpack / .twpack drag-and-drop ----
  let mrpackFor = $state(null);
  let twpackFor = $state(null);

  // ---- BareBones gate (Cleanroom launches blocked by the pre-flight check) ----
  let barebonesFor = $state(null);

  // ---- Java recovery: missing compatible major -> Adoptium one-click install ----
  let javaRecovery = $state(null); // { instanceId, majors }

  // ---- Crash review: non-zero exit; sending only on an explicit click ----
  let crashReport = $state(null); // { report, canSend, config }
  let crashPromptDisabled = $state(false);

  async function offerCrashReport(instanceId, exitCode) {
    if (crashPromptDisabled || exitCode === 0 || !Number.isFinite(exitCode)) return;
    try {
      const config = await api('get_crash_report_config');
      if (!config.promptEnabled) return;
      const prepared = await api('prepare_crash_report', {
        instanceId,
        exitCode,
      });
      crashReport = {
        report: prepared.report,
        canSend: Boolean(config.enabled && config.endpoint),
        config,
      };
    } catch (e) {
      // A preview failure must never crash the launcher shell.
      console.warn('[crash] preview unavailable:', e);
    }
  }

  async function offerJavaDownload(errorText, instanceId) {
    const text = String(errorText);
    if (!text.includes('no compatible Java runtime found')) return false;
    const match = text.match(/\[([0-9,\s]+)\]/);
    const majors = match
      ? match[1]
          .split(',')
          .map((part) => Number(part.trim()))
          .filter((major) => [8, 17, 21, 25].includes(major))
      : [];
    javaRecovery = { instanceId, majors: majors.length ? majors : [21] };
    return true;
  }

  // ---- settings page state (full-page view on the `settings` nav route) ----
  let storage = $state(null);
  let storageBusy = $state(false);
  let storageMsg = $state('');
  let javaPrefs = $state(null);
  let javaPath = $state('');
  let javaCustomPaths = $state([]);
  let minMem = $state(0);
  let maxMem = $state(0);
  let gcPreset = $state('Default');
  let customGcFlags = $state([]);
  let extraJvmArgs = $state('');
  let javaMsg = $state('');

  async function api(cmd, args) {
    return tauriInvoke(cmd, args);
  }

  // ---- theme / chrome ----

  async function scanJava() {
    if (scanning) return;
    scanning = true;
    javaError = '';
    try {
      runtimes = await api('discover_java_installations');
      javaScanned = true;
    } catch (e) {
      javaError = String(e);
    } finally {
      scanning = false;
    }
  }

  // Mode switches drop editor state: leaving the launcher must never leave a
  // hidden Edit page (or its delete/menu popovers) armed when the user comes
  // back from the Client dashboard.
  function setMode(next) {
    if (next === mode) return;
    mode = next;
    editFor = null;
    menuFor = null;
    deleteFor = null;
    deleteError = '';
  }

  // ---- wizard flow ----

  function openWizard() {
    wizardImportPath = '';
    wizardOpen = true;
  }

  async function installFromWizard() {
    if (!modpackTarget.trim()) return;
    modpackBusy = true;
    modpackError = '';
    try {
      const id = await api('install_modpack', { pathOrUrl: modpackTarget.trim() });
      modpackOpen = false;
      modpackTarget = '';
      await loadInstances();
      if (id) selectedId = id;
      setStatus('status-modpack-installed');
    } catch (e) {
      modpackError = String(e);
    } finally {
      modpackBusy = false;
    }
  }

  // ---- console drawer state ----
  let consoleLines = $state([]);
  let drawerOpen = $state(false);
  let gameRunning = $state(false);
  let consoleEl = $state(null);

  // Keep the newest line in view while the game streams output.
  $effect(() => {
    consoleLines.length;
    if (consoleEl) consoleEl.scrollTop = consoleEl.scrollHeight;
  });

  function logLine(entry) {
    consoleLines.push(entry);
    if (consoleLines.length > 5000) consoleLines.splice(0, consoleLines.length - 5000);
  }

  function clearLogs() {
    consoleLines = [];
  }

  // Minecraft log levels (`[time] [thread/LEVEL]:`) beat the raw stream.
  function lineClass(entry) {
    if (entry.stream === 'stderr' || entry.line.includes('/ERROR]')) return 'text-rose-400';
    if (entry.line.includes('/WARN]')) return 'text-(--accent-star)';
    if (entry.line.includes('/INFO]')) return 'text-(--accent)/80';
    return 'text-(--text-main)';
  }

  async function copyLogs() {
    const text = consoleLines.map((l) => l.line).join('\n');
    try {
      await navigator.clipboard.writeText(text);
      toast('Logs copied to clipboard.', 'success');
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.append(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
  }

  async function killGame() {
    if (!gameRunning) return;
    try {
      await api('kill_instance');
      logLine({ stream: 'stdout', line: t('console-kill-requested') });
    } catch (e) {
      logLine({ stream: 'stderr', line: String(e) });
    }
  }

  // ---- instance grid state ----
  let instances = $state([]);
  let instancesError = $state('');
  let menuFor = $state(null);
  let instanceQuery = $state('');
  let selectedId = $state(null);
  // delete confirmation modal (targets the id being removed)
  let deleteFor = $state(null);
  let deleteError = $state('');
  let deleteBusy = $state(false);

  function visibleInstances() {
    const q = instanceQuery.trim().toLowerCase();
    if (!q) return instances;
    return instances.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.minecraft_version.toLowerCase().includes(q) ||
        i.id.toLowerCase().includes(q),
    );
  }

  async function loadInstances() {
    try {
      instances = await api('scan_instances');
      instancesError = '';
    } catch (e) {
      instancesError = String(e);
    }
  }

  function selectInstance(id) {
    selectedId = id;
  }

  async function launchInstance(id, server = null, world = null) {
    if (gameRunning) return;
    const inst = instances.find((i) => i.id === id);
    const label = inst ? inst.name : id;
    gameRunning = true;
    if (world) setStatus('status-launching-world', { name: label, world });
    else if (server) setStatus('status-launching-server', { name: label, server });
    else setStatus('status-launching', { name: label });
    drawerOpen = true;
    try {
      const code = await api('launch_instance', { instanceId: id, server, world });
      logLine({ stream: 'stdout', line: t('console-exit-code', { code }) });
      await loadInstances();
      setStatus('status-ready');
      await offerCrashReport(id, Number(code));
    } catch (e) {
      // every backend failure surfaces here: bright red in the auto-opened
      // drawer, never a silent no-op
      console.error('Launch failed:', e);
      logLine({ stream: 'stderr', line: `[ERROR] ${t('status-launch-failed')}: ${e}` });
      if (String(e).includes('BareBones Template')) {
        // the mandatory Cleanroom gate: offer the install flows in a dialog
        // instead of a bare toast
        barebonesFor = id;
      } else if (!(await offerJavaDownload(e, id))) {
        toast(t('toast-launch-failed', { error: String(e) }), 'error');
      }
      setStatus('status-launch-failed');
    } finally {
      gameRunning = false;
      if (status.key !== 'status-launch-failed') setStatus('status-ready');
    }
  }

  function openInstanceDir() {
    if (!storage) return;
    api('open_path', { path: storage.instances_dir }).catch((e) => setStatusError(e));
  }

  function openInstanceFolder(id) {
    if (!storage) return;
    api('open_path', { path: [storage.instances_dir.replace(/\\/g, '/'), id].join('/') }).catch(
      (e) => setStatusError(e),
    );
  }

  function requestDelete(id) {
    deleteError = '';
    deleteFor = id;
  }

  async function confirmDelete(toTrash) {
    if (!deleteFor || deleteBusy) return;
    deleteBusy = true;
    deleteError = '';
    try {
      await api('delete_instance', { instanceId: deleteFor, toTrash });
      if (selectedId === deleteFor) selectedId = null;
      deleteFor = null;
      await loadInstances();
      setStatus(toTrash ? 'status-instance-trash' : 'status-instance-deleted');
    } catch (e) {
      deleteError = String(e);
    } finally {
      deleteBusy = false;
    }
  }

  // ---- Prism-order context panel actions ----

  // Groups live in the root's shared `instgroups.json`; the wizard and panel
  // both read the labels straight off the scanned rows.
  const groupList = $derived(
    [...new Set(instances.map((i) => i.group).filter(Boolean))].sort((a, b) => a.localeCompare(b))
  );

  async function changeGroup(group) {
    if (!selectedInst) return;
    const label = selectedInst.name;
    try {
      await api('set_instance_group', { instanceId: selectedInst.id, group });
      await loadInstances();
      if (group) setStatus('status-moved-group', { name: label, group });
      else setStatus('status-ungrouped', { name: label });
    } catch (e) {
      setStatusError(e);
    }
  }

  async function copyInstance() {
    if (!selectedInst) return;
    const label = selectedInst.name;
    try {
      const row = await api('duplicate_instance', { instanceId: selectedInst.id });
      await loadInstances();
      selectedId = row.id;
      toast(t('status-copied', { name: label }), 'success');
      setStatus('status-copied', { name: label });
    } catch (e) {
      setStatusError(e);
      toast(t('status-copy-failed', { error: String(e) }), 'error');
    }
  }

  async function renameInstance(target) {
    // the context panel sends the new value directly; the card menu sends
    // the instance row and gets the native prompt first
    const inst = typeof target === 'string' ? selectedInst : target;
    if (!inst) return;
    let value = typeof target === 'string' ? target : null;
    if (value == null) {
      value = await promptAlert({
        title: t('prompt-rename-title'),
        message: t('prompt-rename-message', { name: inst.name }),
        value: inst.name,
        placeholder: t('prompt-rename-placeholder'),
        confirmLabel: t('prompt-rename-confirm'),
      });
      if (value == null || !value.trim() || value.trim() === inst.name) return;
    }
    const label = inst.name;
    try {
      const row = await api('rename_instance', {
        instanceId: inst.id,
        newName: value,
      });
      await loadInstances();
      // keep the panel on this instance with its fresh row
      selectedId = row.id;
      setStatus('status-renamed', { name: label, newName: row.name });
      toast(t('toast-renamed', { name: row.name }), 'success');
    } catch (e) {
      setStatusError(e);
      toast(t('toast-rename-failed', { error: String(e) }), 'error');
    }
  }

  async function exportInstance() {
    if (!selectedInst) return;
    const save = window.__TAURI__?.dialog?.save;
    if (!save) {
      setStatus('status-file-picker-unavailable');
      return;
    }
    try {
      const dest = await save({
        title: t('dialog-export-instance'),
        defaultPath: `${selectedInst.name.replace(/[\\/:*?"<>|]/g, '_')}.zip`,
        filters: [{ name: t('filter-zip-archive'), extensions: ['zip'] }],
      });
      if (!dest) return;
      const path = await api('export_instance_zip', {
        instanceId: selectedInst.id,
        destPath: dest,
      });
      setStatus('status-exported', { path });
    } catch (e) {
      setStatusError(e);
    }
  }

  async function exportInstanceTwpack() {
    if (!selectedInst) return;
    const save = window.__TAURI__?.dialog?.save;
    if (!save) {
      setStatus('status-file-picker-unavailable');
      return;
    }
    try {
      const dest = await save({
        title: t('dialog-export-twpack'),
        defaultPath: `${selectedInst.name.replace(/[\\/:*?"<>|]/g, '_')}.twpack`,
        filters: [{ name: t('filter-twilight-pack'), extensions: ['twpack'] }],
      });
      if (!dest) return;
      setStatus('status-packing');
      const path = await api('export_instance_twpack', {
        instanceId: selectedInst.id,
        destPath: dest,
      });
      setStatus('status-exported', { path });
      toast(t('toast-exported-twpack', { name: selectedInst.name }), 'success');
    } catch (e) {
      setStatusError(e);
      toast(t('toast-export-failed', { error: String(e) }), 'error');
    }
  }

  async function shortcutInstance() {
    if (!selectedInst) return;
    try {
      const path = await api('create_desktop_shortcut', { instanceId: selectedInst.id });
      toast(t('toast-shortcut-created', { path }), 'success');
      setStatus('status-shortcut-created', { path });
    } catch (e) {
      setStatusError(e);
      toast(t('toast-shortcut-failed', { error: String(e) }), 'error');
    }
  }

  async function onWizardCreated(row, warning) {
    wizardOpen = false;
    await loadInstances();
    if (row?.id) selectedId = row.id;
    if (warning) setStatusError(warning);
    else setStatus('status-instance-created', { name: row?.name ?? '' });
  }

  // ---- edit instance (mods) ----

  function openEdit(inst) {
    editFor = inst;
    editSection = 'mods';
  }

  // The grid card's Logs action opens the selected instance's real Logs tab
  // (the console drawer below is reserved for live launch output).
  function viewInstanceLogs(inst) {
    if (!inst) return;
    editFor = inst;
    editSection = 'logs';
  }
  // ---- right context panel (Yardarm grammar: selection drives it) ----

  const selectedInst = $derived(instances.find((i) => i.id === selectedId) ?? null);
  const deleteTarget = $derived(instances.find((i) => i.id === deleteFor) ?? null);
  let ctxMods = $state(null);
  let ctxModsToken = 0;
  $effect(() => {
    const inst = selectedInst;
    editFor; // re-run when the edit modal closes to refresh the count
    const token = ++ctxModsToken;
    ctxMods = null;
    if (!inst) return;
    api('list_instance_mods', { instanceId: inst.id })
      .then((mods) => {
        if (token === ctxModsToken) ctxMods = mods.length;
      })
      .catch(() => {
        if (token === ctxModsToken) ctxMods = null;
      });
  });

  // ---- java / memory prefs ----

  async function loadPrefs() {
    try {
      javaPrefs = await api('get_java_prefs');
      javaPath = javaPrefs.java_path ?? '';
      javaCustomPaths = javaPrefs.custom_java_paths ?? [];
      minMem = javaPrefs.min_memory_mb;
      maxMem = javaPrefs.max_memory_mb;
      javaMsg = '';
      try {
        const gc = await api('get_gc_prefs');
        gcPreset = gc.gc_preset ?? 'Default';
        customGcFlags = gc.custom_gc_flags ?? [];
        extraJvmArgs = gc.extra_jvm_args ?? '';
      } catch {
        // plain web build
      }
      try {
        const dev = await api('get_dev_settings');
        devSettings = {
          devMode: dev.devMode ?? false,
          horizonDevOffline: dev.horizonDevOffline ?? false,
          horizonDevSinglePlayer: dev.horizonDevSinglePlayer ?? false,
          horizonAllowUnsignedLocal: dev.horizonAllowUnsignedLocal ?? false,
          jdwpEnabled: dev.jdwpEnabled ?? false,
          jdwpPort: dev.jdwpPort ?? 5005,
          mixinDebug: dev.mixinDebug ?? false,
        };
      } catch {
        // plain web build: developer tools stay off
      }
      // lazy, once: the first Settings visit may kick off the disk scan, but
      // the page renders instantly and later visits reuse the cached list
      if (!javaScanned && runtimes.length === 0) void scanJava();
    } catch {
      // plain web build: no backend
    }
  }

  async function savePrefs() {
    javaMsg = '';
    try {
      await api('set_java_prefs', {
        javaPath: javaPath.trim() || null,
        minMemoryMb: Number(minMem) || 0,
        maxMemoryMb: Number(maxMem) || 0,
      });
      await api('set_gc_prefs', {
        gcPreset,
        customGcFlags,
        extraJvmArgs,
      });
      javaMsg = 'Java settings saved.';
    } catch (e) {
      javaMsg = String(e);
    }
  }

  // Registers a probed custom Java executable and returns the saved list.
  async function addCustomJava(path) {
    javaCustomPaths = await api('add_custom_java', { path });
    return javaCustomPaths;
  }

  // Applies (or clears) the runtime launches use.
  async function applyJavaRuntime(path) {
    await api('apply_java_runtime', { path: path || null });
    javaPath = path || '';
    javaMsg = '';
  }

  // ---- folders settings ----

  async function loadStorage() {
    storageBusy = true;
    try {
      storage = await api('get_storage');
    } catch (e) {
      storageMsg = String(e);
    } finally {
      storageBusy = false;
    }
  }

  // Saves one Folders-page entry. Instances/shared changes move the grid:
  // rescan and drop a selection that no longer exists.
  async function saveFolder(kind, value) {
    storageBusy = true;
    storageMsg = '';
    try {
      await api('set_folder_dir', { kind, path: value?.trim() || null });
      storage = await api('get_storage');
      storageMsg = 'Folders updated.';
      if (kind === 'instances' || kind === 'shared') {
        await loadInstances();
        if (selectedId && !instances.some((i) => i.id === selectedId)) selectedId = null;
      }
    } catch (e) {
      storageMsg = String(e);
    } finally {
      storageBusy = false;
    }
  }

  function openFolder(path) {
    api('open_path', { path }).catch((e) => setStatusError(e));
  }

  async function cleanStaging() {
    storageBusy = true;
    storageMsg = '';
    try {
      await api('clean_staging');
      storageMsg = 'Staging cleaned.';
    } catch (e) {
      storageMsg = String(e);
    } finally {
      storageBusy = false;
    }
  }

  function typeLabel(account) {
    return t(
      {
        offline: 'account-type-offline',
        microsoft: 'account-type-microsoft',
        ely_by: 'account-type-elyby',
      }[account.account_type.type] ?? 'account-type-yggdrasil'
    );
  }

  // Keep the window title and <html lang> in sync with live language changes.
  $effect(() => {
    document.title = t('app-document-title');
  });

  onMount(() => {
    const unlisteners = [];
    const onKey = (e) => {
      if (e.key === 'Escape') {
        // frontend modals own their closers; pop the frontmost one
        const top = topOverlay();
        if (top) {
          top();
          return;
        }
        if (menuFor) menuFor = null;
        else if (deleteFor) (deleteFor = null), (deleteError = '');
        else if (editFor) editFor = null;
        else if (selectedId) selectedId = null;
        else if (modalOpen) modalOpen = false;
        else if (modpackOpen) modpackOpen = false;
        else if (drawerOpen) drawerOpen = false;
        return;
      }
      // arrow-key grid navigation while the desktop is the active surface:
      // no modal/menu open and focus not inside a text field or a select.
      if (
        menuFor ||
        deleteFor ||
        modalOpen ||
        modpackOpen ||
        editFor ||
        drawerOpen ||
        topOverlay()
      )
        return;
      const field = e.target?.closest?.('input, textarea, select, [contenteditable]');
      if (field) return;
      const rows = visibleInstances();
      if (!rows.length) return;
      const cur = rows.findIndex((i) => i.id === selectedId);
      let next = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = cur + 1;
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = cur < 0 ? 0 : cur - 1;
      else if (e.key === 'Enter' && cur >= 0 && document.activeElement === document.body) {
        e.preventDefault();
        launchInstance(rows[cur].id);
        return;
      }
      if (next != null && rows[next]) {
        e.preventDefault();
        selectedId = rows[next].id;
      }
    };
    window.addEventListener('keydown', onKey);
    (async () => {
      // restore the persisted language in the background; local first paint
      // already has a valid locale from detectLocale()
      void initLocale();
      try {
        version = await api('get_version');
      } catch {
        version = 'dev';
      }
      try {
        unlisteners.push(
          await tauriListen('launch-log', (e) => logLine(e.payload)),
        );
        unlisteners.push(
          await tauriListen('tauri://drag-drop', (e) => {
            const path = e.payload?.paths?.[0];
            if (!path) return;
            const lower = path.toLowerCase();
            if (lower.endsWith('.mrpack')) {
              // install modal open: it owns the path; anywhere else:
              // intercept into the dedicated install modal
              if (modpackOpen) modpackTarget = path;
              else mrpackFor = path;
            } else if (lower.endsWith('.twpack')) {
              twpackFor = path;
            } else if (lower.endsWith('.zip')) {
              // Prism/MultiMC and CurseForge exports: open the wizard's
              // Import tab, which inspects the archive before installing.
              wizardImportPath = path;
              wizardOpen = true;
            }
          }),
        );
      } catch {
        // plain web build: no event pane
      }
      await Promise.all([refreshAccounts(), loadInstances(), loadStorage()]);
      // desktop shortcut boot: auto-launch the instance the shortcut names
      try {
        const pending = await api('get_startup_launch');
        if (pending && instances.some((i) => i.id === pending)) launchInstance(pending);
      } catch {
        // plain web build: no startup flag
      }
    })();
    return () => unlisteners.forEach((off) => off());
  });
</script>

<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)">
  <!-- ==================== SIDEBAR ==================== -->
  <nav
    class="group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 {sidebarExpanded
      ? 'w-60'
      : 'w-16'}"
  >
    <div
      class="flex h-10 cursor-pointer items-center gap-2 border-b border-(--border) px-1 select-none"
      role="button"
      tabindex="0"
      aria-expanded={sidebarExpanded}
      ondblclick={() => (sidebarExpanded = !sidebarExpanded)}
      onkeydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          sidebarExpanded = !sidebarExpanded;
        }
      }}
    >
      <img src="/logo.png" alt={t('app-name')} draggable="false" class="h-7 w-7 shrink-0" />
      {#if sidebarExpanded}
        <span class="flex min-w-0 items-center gap-1.5">
          <span class="truncate text-[13px] font-semibold">{t('app-name')}</span>
          <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">{t('app-channel')}</span>
        </span>
      {/if}
    </div>

    <div class="mt-1 flex flex-1 flex-col gap-0.5">
      {#each nav as item (item.id)}
        <button
          class="flex h-9 items-center gap-2.5 rounded px-2.5 text-left {sidebarExpanded ? '' : 'justify-center'} {active
          === item.id
            ? 'bg-(--accent) font-medium text-(--on-accent)'
            : 'text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)'}"
          title={t(item.label)}
          onclick={() => {
            active = item.id;
            editFor = null;
            mode = 'launcher'; // navigation lives in the launcher dashboard
            if (item.id === 'settings') {
              loadPrefs();
              if (!storage) loadStorage();
            }
          }}
        >
          <span class="flex w-5 shrink-0 items-center justify-center">
            <LauncherIcon name={item.icon} size={15} />
          </span>
          {#if sidebarExpanded}
            <span class="truncate text-[13px]">{t(item.label)}</span>
          {/if}
        </button>
      {/each}
    </div>

    <!-- account card: navigates to the dedicated Accounts page -->
    <button
      class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 {sidebarExpanded
        ? ''
        : 'justify-center'}"
      title={activeAccount ? activeAccount.username : t('nav-manage-accounts')}
      onclick={() => {
        active = 'accounts';
        editFor = null;
        mode = 'launcher'; // the accounts page lives in the launcher dashboard
      }}
    >
      <SkinFace
        source={skinSource(activeAccount)}
        size={28}
        letter={activeAccount ? activeAccount.username[0]?.toUpperCase() : '?'}
        class="rounded bg-(--accent)/20 text-(--accent)"
      />
      {#if sidebarExpanded}
        <span class="min-w-0 flex-1 text-left">
          <span class="block truncate text-[12px] font-medium">{activeAccount ? activeAccount.username : t('nav-accounts')}</span>
          <span class="block text-[10px] text-(--text-muted)">
            {activeAccount ? typeLabel(activeAccount) : t('nav-manage-signin')}
          </span>
        </span>
      {/if}
    </button>

    {#if devMode}
      <div
        class="mt-2 flex items-center justify-center gap-1 rounded border border-(--accent)/50 bg-(--accent)/10 px-2 py-1 text-[10px] text-(--accent)"
        title={t('dev-mode-active')}
      >
        <span aria-hidden="true">🛠</span>
        {#if sidebarExpanded}
          <span class="truncate">{t('dev-mode-badge')}</span>
        {/if}
      </div>
    {/if}

    <!-- collapse (expanded) / expand-on-hover (compact) trigger at the logo edge -->
    <button
      class="absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) {sidebarExpanded
        ? ''
        : 'opacity-0 group-hover/nav:opacity-100'}"
      onclick={() => (sidebarExpanded = !sidebarExpanded)}
      title={sidebarExpanded ? t('nav-collapse-sidebar') : t('nav-expand-sidebar')}
      aria-label={sidebarExpanded ? t('nav-collapse-sidebar') : t('nav-expand-sidebar')}
    >
      {sidebarExpanded ? '«' : '»'}
    </button>
  </nav>

  <!-- ==================== RIGHT COLUMN ==================== -->
  <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
    <header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4">
      <div class="flex min-w-0 items-center gap-2.5">
        {#if currentView === 'edit'}
          <button
            class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"
            title={t('nav-back-instances-title')}
            onclick={() => (editFor = null)}
          >
            ← {t('header-back-instances')}
          </button>
          <span class="truncate text-[12px] font-medium text-(--text-muted)" title={editFor?.name}>{editFor?.name}</span>
        {:else}
          <span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)">{t('app-version', { version })}</span>
          <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">{t('app-channel')}</span>
          <!-- Launcher | Client mode toggle -->
          <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist">
            {#each [['launcher', 'mode-launcher'], ['client', 'mode-client']] as [id, label]}
              <button
                class="px-3 py-1 text-[11px] font-semibold tracking-wide {mode === id
                  ? 'bg-(--accent) text-(--on-accent)'
                  : 'text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)'}"
                role="tab"
                aria-selected={mode === id}
                onclick={() => setMode(id)}
              >
                {t(label)}
              </button>
            {/each}
          </div>
        {/if}
      </div>
      {#if devMode}
        <span class="shrink-0 rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)">
          {t('dev-mode-active')}
        </span>
      {/if}
      <span class="text-xs text-(--text-muted)" aria-live="polite">{statusText}</span>
    </header>

    {#if devMode}
      <div
        role="alert"
        class="flex shrink-0 items-center gap-2 border-b border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-[11.5px] leading-snug text-amber-500"
      >
        <span aria-hidden="true">⚠</span>
        <span>{t('dev-warning-banner')}</span>
      </div>
    {/if}

    <main class="min-h-0 min-w-0 flex-1 overflow-y-auto p-6">
      {#if currentView === 'accounts'}
        <!-- dedicated accounts page: shows in both launcher and client modes -->
        <AccountsPage onback={() => (active = 'instances')} onrefresh={refreshAccounts} />
      {:else if mode === 'client'}
        <!-- client dashboard: minimal quick-launch hub -->
        <ClientModePage
          instances={instances}
          active={activeAccount}
          {gameRunning}
          {statusText}
          onlaunch={launchInstance}
          onopenconsole={() => (drawerOpen = true)}
          onrefresh={refreshAccounts}
          onopenaccounts={() => {
            active = 'accounts';
            mode = 'launcher';
          }}
        />
      {:else if currentView === 'edit' && editFor}
        <!-- full-page instance editor: grid and context panel stay behind -->
        <EditInstancePage
          instance={editFor}
          {storage}
          {blindMode}
          {deafMode}
          {devMode}
          bind:section={editSection}
          onback={() => (editFor = null)}
          onopenconsole={() => (drawerOpen = true)}
          onlaunch={launchInstance}
        />
      {:else if active === 'settings'}
        <!-- full-page settings: the grid and context panel stay behind -->
        <SettingsPage
          {version}
          bind:theme
          bind:blindMode
          bind:deafMode
          bind:devSettings
          {storage}
          {runtimes}
          {scanning}
          {javaError}
          bind:javaPath
          bind:javaCustomPaths
          bind:minMem
          bind:maxMem
          bind:gcPreset
          bind:customGcFlags
          bind:extraJvmArgs
          {storageBusy}
          {storageMsg}
          {javaMsg}
          {gameRunning}
          onback={() => (active = 'instances')}
          onscanjava={scanJava}
          ondownloadjava={(major) => (javaRecovery = { instanceId: null, majors: [major] })}
          onsaveprefs={savePrefs}
          onaddjava={addCustomJava}
          onapplyjava={applyJavaRuntime}
          onsavefolder={saveFolder}
          onopenfolder={openFolder}
          oncleanstaging={cleanStaging}
          onopenaccounts={() => {
            active = 'accounts';
            mode = 'launcher';
          }}
          onopenurl={(url) => api('open_external_url', { url }).catch((e) => setStatusError(e))}
        />
      {:else if active === 'instances'}
        <!-- action toolbar -->
        <div class="mb-4 flex items-center gap-2">
          <button
            class="flex items-center gap-1.5 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
            onclick={openWizard}
          >
            <LauncherIcon name="new" size={13} /> {t('action-add-instance')}
          </button>
          <button
            class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
            disabled={!storage}
            title={storage ? storage.instances_dir : ''}
            onclick={openInstanceDir}
          >
            <LauncherIcon name="folder" size={14} /> {t('action-instance-folder')}
          </button>
          <button
            class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
            title={t('action-install-mrpack-title')}
            onclick={() => (modpackOpen = true)}
          >
            <LauncherIcon name="package" size={14} /> {t('action-install-mrpack')}
          </button>
          <button
            class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
            onclick={() => {
              active = 'settings';
              loadPrefs();
              if (!storage) loadStorage();
            }}
          >
            <LauncherIcon name="settings" size={14} /> {t('action-settings')}
          </button>
          <input
            class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder={t('filter-instances')}
            bind:value={instanceQuery}
          />
        </div>

        <!-- instance grid -->
        <InstanceGrid
          instances={visibleInstances()}
          error={instancesError}
          query={instanceQuery}
          {selectedId}
          {gameRunning}
          {menuFor}
          onselect={selectInstance}
          onplay={launchInstance}
          ontogglemenu={(id) => (menuFor = menuFor === id ? null : id)}
          onedit={openEdit}
          onrename={renameInstance}
          onopenfolder={openInstanceFolder}
          onviewlogs={(inst) => viewInstanceLogs(inst ?? selectedInst)}
          ondelete={requestDelete}
          onclosemenu={() => (menuFor = null)}
          onadd={openWizard}
        />
      {:else if active === 'worlds'}
        <ServersPage />
      {:else}
        <h2 class="text-lg font-semibold">{t(sections[active][0])}</h2>
        <p class="mt-1 text-(--text-muted)">{t(sections[active][1])}</p>
      {/if}
    </main>

    <!-- always-present collapsible console drawer: h-10 bar ⇄ h-48 terminal -->
    <section
      class="flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 {drawerOpen
        ? 'h-48'
        : 'h-10'}"
    >
      <div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3">
        <button
          class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"
          title={drawerOpen ? t('console-collapse') : t('console-expand')}
          onclick={() => (drawerOpen = !drawerOpen)}
        >
          <span
            class="h-2 w-2 shrink-0 rounded-full {gameRunning ? 'animate-pulse bg-green-500' : 'bg-(--border)'}"
          ></span>
          <LauncherIcon name="log" size={13} />
          <span class="truncate">{t('console-title')}</span>
          {#if gameRunning}
            <span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">{t('console-running')}</span>
          {/if}
        </button>
        <div class="flex shrink-0 items-center gap-3 text-[11px]">
          <button
            class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40"
            disabled={!consoleLines.length}
            onclick={(e) => {
              e.stopPropagation();
              clearLogs();
            }}
          >
            {t('console-clear')}
          </button>
          <button
            class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40"
            disabled={!consoleLines.length}
            onclick={(e) => {
              e.stopPropagation();
              copyLogs();
            }}
          >
            {t('console-copy')}
          </button>
          <button
            class="text-rose-400 hover:text-rose-300 disabled:opacity-40"
            disabled={!gameRunning}
            title={t('console-kill-title')}
            onclick={(e) => {
              e.stopPropagation();
              killGame();
            }}
          >
            {t('console-kill')}
          </button>
          {#if drawerOpen}
            <button
              class="text-(--text-muted) hover:text-(--text-main)"
              title={t('console-collapse-short')}
              onclick={() => (drawerOpen = false)}
            >
              {t('console-hide')}
            </button>
          {/if}
        </div>
      </div>
      <div bind:this={consoleEl} class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5">
        {#each consoleLines as entry, i (i)}
          <div class="whitespace-pre-wrap break-all {lineClass(entry)}">
            {entry.line}
          </div>
        {:else}
          <div class="text-(--text-muted)">{t('console-empty')}</div>
        {/each}
      </div>
    </section>
  </div>

  <!-- Yardarm-style right context panel: selection drives it, Escape clears -->
  {#if currentView === 'instances' && selectedInst}
    <InstanceContextPanel
      instance={selectedInst}
      {storage}
      {gameRunning}
      {devMode}
      modsCount={ctxMods}
      groups={groupList}
      onlaunch={() => launchInstance(selectedInst.id)}
      onkill={killGame}
      onedit={() => openEdit(selectedInst)}
      onchangegroup={changeGroup}
      onopenfolder={() => openInstanceFolder(selectedInst.id)}
      onexport={exportInstance}
      ontwpack={exportInstanceTwpack}
      oncopy={copyInstance}
      ondelete={() => requestDelete(selectedInst.id)}
      onshortcut={shortcutInstance}
      onrename={renameInstance}
      onclose={() => (selectedId = null)}
    />
  {/if}

  {#if mrpackFor}
    <MrpackInstallModal
      path={mrpackFor}
      onclose={() => (mrpackFor = null)}
      oninstalled={async (id) => {
        mrpackFor = null;
        await loadInstances();
        selectedId = id;
        setStatus('status-modpack-installed');
      }}
    />
  {/if}

  {#if twpackFor}
    <TwpackInstallModal
      path={twpackFor}
      onclose={() => (twpackFor = null)}
      oninstalled={async (id) => {
        twpackFor = null;
        await loadInstances();
        selectedId = id;
        setStatus('status-twpack-imported');
      }}
    />
  {/if}

  {#if modalOpen}
    <AccountManagerModal
      accounts={accountStore.list}
      active={activeAccount}
      onclose={() => {
        modalOpen = false;
        // resync: texture edits and sign-ins inside the modal update the
        // shared store, but a fresh read guarantees consistency
        refreshAccounts();
      }}
      onrefresh={refreshAccounts}
    />
  {/if}

  {#if wizardOpen}
    <NewInstanceModal
      groups={groupList}
      {blindMode}
      {deafMode}
      importPath={wizardImportPath}
      onclose={() => (wizardOpen = false)}
      oncreated={onWizardCreated}
    />
  {/if}

  {#if modpackOpen}
    <!-- Install Modpack: drop target + path/URL -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="presentation"
      onclick={(e) => {
        if (e.target === e.currentTarget && !modpackBusy) modpackOpen = false;
      }}
      onkeydown={(e) => {
        if (e.key === 'Escape' && !modpackBusy) modpackOpen = false;
      }}
    >
      <div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl">
        <div class="flex items-center justify-between border-b border-(--border) px-4 py-3">
          <h3 class="text-sm font-semibold">{t('install-modpack-title')}</h3>
          <button
            class="text-(--text-muted) hover:text-(--text-main)"
            onclick={() => (modpackOpen = false)}>✕</button
          >
        </div>
        <div class="p-4">
          <div
            class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"
            role="region"
            aria-label={t('install-modpack-drop')}
            ondragover={(e) => e.preventDefault()}
            ondrop={(e) => {
              e.preventDefault();
              const path = e.dataTransfer?.files?.[0]?.path;
              if (path) modpackTarget = path;
            }}
          >
            <span class="text-xl">⤓</span>
            <span class="mt-2 text-[12px]">{t('install-modpack-drop')}</span>
            <span class="text-[11px]">{t('install-modpack-or-paste')}</span>
          </div>
          <input
            class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder={t('install-modpack-placeholder')}
            bind:value={modpackTarget}
          />
          {#if modpackError}
            <p class="mt-2 text-[12px] text-red-400">{modpackError}</p>
          {/if}
        </div>
        <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3">
          <button
            class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)"
            onclick={() => (modpackOpen = false)}
          >
            {t('common-cancel')}
          </button>
          <button
            class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={modpackBusy || !modpackTarget.trim()}
            onclick={installFromWizard}
          >
            {modpackBusy ? t('install-modpack-installing') : t('install-modpack-install')}
          </button>
        </div>
      </div>
    </div>
  {/if}

  {#if deleteFor}
    <!-- Delete instance confirmation -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="presentation"
      onclick={(e) => {
        if (e.target === e.currentTarget && !deleteBusy) deleteFor = null;
      }}
      onkeydown={(e) => {
        if (e.key === 'Escape' && !deleteBusy) deleteFor = null;
      }}
    >
      <div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl">
        <h3 class="text-[14px] font-semibold">{t('delete-title')}</h3>
        <p class="mt-2 text-[12px] text-(--text-muted)">
          {t('delete-body', { name: deleteTarget?.name ?? deleteFor })}
        </p>
        {#if deleteError}
          <p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400">{deleteError}</p>
        {/if}
        <div class="mt-4 flex justify-end gap-2">
          <button
            class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"
            disabled={deleteBusy}
            onclick={() => (deleteFor = null)}
          >
            {t('common-cancel')}
          </button>
          <button
            class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40"
            disabled={deleteBusy}
            title={t('delete-move-trash-title')}
            onclick={() => confirmDelete(true)}
          >
            <Twemoji emoji="♻" /> {t('delete-move-trash')}
          </button>
          <button
            class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40"
            disabled={deleteBusy}
            title={t('delete-permanently-title')}
            onclick={() => confirmDelete(false)}
          >
            ✕ {t('delete-permanently')}
          </button>
        </div>
      </div>
    </div>
  {/if}

  <!-- the one mounted alert dialog + toast stack (alerts.svelte.js drives both) -->
  <AlertDialog />
  {#if barebonesFor}
    <BareBonesGateModal
      instanceId={barebonesFor}
      onclose={() => (barebonesFor = null)}
      onlaunch={(iid) => {
        barebonesFor = null;
        launchInstance(iid);
      }}
    />
  {/if}
  {#if javaRecovery}
    <JavaDownloadModal
      majors={javaRecovery.majors}
      onclose={() => (javaRecovery = null)}
      oninstalled={async () => {
        const instanceId = javaRecovery?.instanceId ?? null;
        await scanJava();
        await loadPrefs();
        if (instanceId) {
          // Recovery flow: close the dialog and relaunch the instance.
          javaRecovery = null;
          launchInstance(instanceId);
        } else {
          // Settings flow: keep the dialog open so the install path stays
          // visible; the user closes it explicitly.
          setStatus('status-ready');
        }
      }}
    />
  {/if}
  {#if crashReport}
    <CrashReportModal
      report={crashReport.report}
      canSend={crashReport.canSend}
      onclose={() => (crashReport = null)}
      ondisable={async () => {
        crashPromptDisabled = true;
        const config = crashReport.config;
        try {
          await api('set_crash_report_config', {
            enabled: config.enabled,
            endpoint: config.endpoint,
            promptEnabled: false,
          });
        } catch (e) {
          console.warn('[crash] could not persist dialog preference:', e);
        }
      }}
    />
  {/if}
  <ToastContainer />
</div>
