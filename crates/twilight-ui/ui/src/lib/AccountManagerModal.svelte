<script>
  // Account manager: three sign-in tabs (offline with live UUID preview,
  // Microsoft device-code flow, custom Yggdrasil / Ely.by) plus the saved
  // account list with activate/remove and an inline skin/cape editor with a
  // live 3D preview.
  import { onMount, onDestroy } from 'svelte';
  import { pushOverlay, popOverlay } from './overlays.js';
  import SkinViewer3D from './SkinViewer3D.svelte';

  let { accounts = [], active = null, onclose, onrefresh } = $props();

  let tab = $state('offline'); // offline | microsoft | custom
  let error = $state('');
  let busy = $state(false);

  // ---- offline tab ----
  let offlineName = $state('');
  let offlineUuid = $state('');

  // ---- microsoft tab ----
  let msState = $state('idle'); // idle | requesting | code | signedin
  let msError = $state('');
  let deviceCode = $state(null);
  let copied = $state(false);
  let pollTimer = null;

  // ---- custom / ely.by tab ----
  let customName = $state('');
  let customUrl = $state('');
  let customSkin = $state('');
  let customCape = $state('');

  // ---- saved list: per-account texture editor ----
  let editingId = $state(null);
  let editSkin = $state('');
  let editCape = $state('');

  function invoke(cmd, args) {
    const core = window.__TAURI__?.core;
    if (!core) return Promise.reject(new Error('Tauri backend unavailable in this preview.'));
    return core.invoke(cmd, args);
  }

  onMount(() => {
    const closer = pushOverlay(() => onclose?.());
    return () => popOverlay(closer);
  });

  onDestroy(() => stopPolling());

  function stopPolling() {
    if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = null;
    }
  }

  // live offline UUID v3 preview (debounced)
  $effect(() => {
    const name = offlineName.trim();
    const timer = setTimeout(async () => {
      if (!name) {
        offlineUuid = '';
        return;
      }
      try {
        offlineUuid = await invoke('offline_uuid', { username: name });
      } catch (e) {
        offlineUuid = '';
      }
    }, 200);
    return () => clearTimeout(timer);
  });

  async function addOffline(e) {
    e.preventDefault();
    error = '';
    busy = true;
    try {
      await invoke('add_offline_account', { username: offlineName.trim() });
      offlineName = '';
      offlineUuid = '';
      await onrefresh?.();
    } catch (err) {
      error = String(err);
    } finally {
      busy = false;
    }
  }

  // ---- microsoft device flow ----
  async function startMicrosoft() {
    msError = '';
    copied = false;
    msState = 'requesting';
    try {
      deviceCode = await invoke('start_microsoft_device_code');
      msState = 'code';
      stopPolling();
      pollTimer = setInterval(pollMicrosoft, (deviceCode.interval || 5) * 1000);
    } catch (e) {
      msState = 'idle';
      msError = String(e);
    }
  }

  async function pollMicrosoft() {
    if (!deviceCode) return;
    try {
      const result = await invoke('poll_microsoft_device_code', { device: deviceCode });
      if (result.state === 'pending') return;
      if (result.state === 'slow_down') {
        // Microsoft asked for a slower cadence: +5 seconds
        stopPolling();
        pollTimer = setInterval(pollMicrosoft, ((deviceCode.interval || 5) + 5) * 1000);
        return;
      }
      stopPolling();
      if (result.state === 'failed') {
        msError = result.reason;
        deviceCode = null;
        msState = 'idle';
        return;
      }
      // completed: account persisted and activated by the backend
      deviceCode = null;
      msState = 'signedin';
      await onrefresh?.();
    } catch (e) {
      msError = String(e);
    }
  }

  async function copyUserCode() {
    if (!deviceCode) return;
    try {
      await navigator.clipboard.writeText(deviceCode.user_code);
      copied = true;
      setTimeout(() => (copied = false), 1600);
    } catch {
      /* clipboard unavailable: the code stays selectable on screen */
    }
  }

  // ---- custom / ely.by ----
  async function addCustom(e) {
    e.preventDefault();
    error = '';
    busy = true;
    try {
      const account = await invoke('add_custom_yggdrasil_account', {
        username: customName.trim(),
        serverUrl: customUrl.trim(),
      });
      if (customSkin.trim() || customCape.trim()) {
        await invoke('set_account_textures', {
          id: account.id,
          skin: customSkin.trim() || null,
          cape: customCape.trim() || null,
        });
      }
      customName = '';
      customUrl = '';
      customSkin = '';
      customCape = '';
      await onrefresh?.();
    } catch (err) {
      error = String(err);
    } finally {
      busy = false;
    }
  }

  const ELYBY_URL = 'https://authserver.ely.by/api/authlib-injector';

  async function pickTexture(target) {
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
      const path = String(picked);
      if (target === 'skin') customSkin = path;
      else customCape = path;
      error = '';
    } catch (e) {
      error = String(e);
    }
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
      { offline: 'Offline', microsoft: 'Microsoft' }[account.account_type.type] ?? 'Yggdrasil'
    );
  }

  const editingAccount = $derived(accounts.find((a) => a.id === editingId) ?? null);
</script>

<!-- backdrop click closes; panel click does not -->
<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  onclick={(e) => {
    if (e.target === e.currentTarget) onclose?.();
  }}
>
  <div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl">
    <div class="flex items-center justify-between border-b border-(--border) px-4 py-3">
      <h3 class="text-sm font-semibold">Accounts</h3>
      <button class="text-(--text-muted) hover:text-(--text-main)" onclick={() => onclose?.()}>✕</button>
    </div>

    <!-- tab bar -->
    <div class="flex gap-1 border-b border-(--border) px-3 pt-2.5">
      {#each [['offline', 'Offline'], ['microsoft', 'Microsoft'], ['custom', 'Custom / Ely.by']] as [id, label]}
        <button
          class="rounded-t px-3 py-1.5 text-[12px] font-medium {tab === id
            ? 'bg-(--bg-subtle) text-(--text-main)'
            : 'text-(--text-muted) hover:text-(--text-main)'}"
          onclick={() => {
            tab = id;
            error = '';
          }}
        >
          {label}
        </button>
      {/each}
    </div>

    <div class="min-h-0 flex-1 overflow-y-auto">
      {#if tab === 'offline'}
        <form class="flex items-center gap-2 p-4" onsubmit={addOffline}>
          <input
            class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder="Offline username (3-16 letters, digits, _)"
            bind:value={offlineName}
          />
          <button
            type="submit"
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={!offlineName.trim() || busy}>Add</button
          >
        </form>
        {#if offlineUuid}
          <div class="px-4 pb-4 -mt-1">
            <span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span>
            <code class="ml-1 select-all text-[11px] text-(--accent)">{offlineUuid}</code>
          </div>
        {/if}
        <p class="px-4 pb-4 text-[11px] text-(--text-muted)">
          No password, no validation — the game runs as this username with a deterministic offline UUID.
        </p>
      {:else if tab === 'microsoft'}
        <div class="p-4">
          {#if msState === 'idle'}
            <button
              class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
              disabled={busy}
              onclick={startMicrosoft}>Sign in with Microsoft</button
            >
            <p class="mt-2 text-[11px] text-(--text-muted)">
              A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.
            </p>
          {:else if msState === 'requesting'}
            <p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>
          {:else if msState === 'code' && deviceCode}
            <div class="flex flex-col items-center gap-2 py-2">
              <span class="text-[11px] text-(--text-muted)">Enter this code at</span>
              <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]">{deviceCode.verification_uri}</code>
              <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span>
              <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)">
                {deviceCode.user_code}
              </code>
              <div class="mt-1 flex gap-2">
                <button
                  class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"
                  onclick={copyUserCode}>
                  {copied ? 'Copied ✓' : 'Copy code'}
                </button>
                <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)" onclick={startMicrosoft}>
                  Restart
                </button>
              </div>
              <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)">
                <span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span>
                Waiting for you to finish signing in…
              </p>
            </div>
          {:else if msState === 'signedin'}
            <p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p>
            <button
              class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)"
              onclick={() => {
                msState = 'idle';
                msError = '';
              }}>Sign in another account</button
            >
          {/if}
          {#if msError}
            <p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400">{msError}</p>
          {/if}
        </div>
      {:else if tab === 'custom'}
        <form class="flex flex-col gap-3 p-4" onsubmit={addCustom}>
          <div class="flex gap-2">
            <input
              class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
              placeholder="Server URL (authlib-injector)"
              bind:value={customUrl}
            />
            <button
              type="button"
              class="shrink-0 rounded border border-(--border) px-2.5 text-[11px] hover:bg-(--bg-subtle)"
              title="Use the Ely.by authlib-injector endpoint"
              onclick={() => (customUrl = ELYBY_URL)}>Ely.by</button
            >
          </div>
          <input
            class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder="Username (3-16 letters, digits, _)"
            bind:value={customName}
          />
          <div class="grid grid-cols-2 gap-2">
            <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)" onclick={() => pickTexture('skin')}>
              Skin PNG: <span class="truncate text-(--accent)">{customSkin || 'none'}</span>
            </button>
            <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)" onclick={() => pickTexture('cape')}>
              Cape PNG: <span class="truncate text-(--accent)">{customCape || 'none'}</span>
            </button>
          </div>
          <button
            type="submit"
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={!customName.trim() || !customUrl.trim() || busy}>Add custom account</button
          >
          <p class="text-[11px] text-(--text-muted)">
            The launcher auto-fetches the SHA-256 verified authlib-injector agent into
            <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.
          </p>
        </form>
      {/if}

      {#if error}
        <p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400">{error}</p>
      {/if}

      <!-- saved accounts -->
      <div class="border-t border-(--border)">
        {#each accounts as account (account.id)}
          <div class="border-b border-(--border) px-4 py-2.5 {active?.id === account.id ? 'bg-(--accent)/10' : ''}">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-sm font-bold text-(--accent)">
                {account.username[0]?.toUpperCase()}
              </span>
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
                  onclick={() => toggleEditor(account)}>🎨</button
                >
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
                <SkinViewer3D skin={editSkin} cape={editCape} width={110} height={150} />
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
      </div>
    </div>
  </div>
</div>
