<script>
  // All sign-in surfaces, extracted from the account manager modal so the
  // dedicated Accounts page hosts the same machine: offline with a live UUID
  // preview, first-class Ely.by OAuth2 (direct browser or device code) with
  // a collapsed classic username/password fallback, the Microsoft device
  // flow, and any other custom Yggdrasil server. Owns its own state and
  // polling timers; results bubble up through `onrefresh`.
  import { onDestroy } from 'svelte';

  let { onrefresh } = $props();

  let tab = $state('offline'); // offline | elyby | microsoft | custom
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

  // ---- ely.by tab (first-class: no server URL to type) ----
  // OAuth2 (primary): direct browser sign-in or the RFC 8628 device code,
  // mirroring the Microsoft machine; the username/password form stays as the
  // collapsed classic fallback.
  let elyMode = $state('idle'); // idle | requesting | code | signedin
  let elyError = $state('');
  let elyDone = $state(false);
  let elyBrowserBusy = $state(false);
  let elyDevice = $state(null);
  let elyCopied = $state(false);
  let elyPollTimer = null;
  let elyUser = $state('');
  let elyPassword = $state('');
  let elyBusy = $state(false);

  // ---- custom tab (any other authlib-injector server) ----
  let customName = $state('');
  let customUrl = $state('');
  let customSkin = $state('');
  let customCape = $state('');

  function invoke(cmd, args) {
    const core = window.__TAURI__?.core;
    if (!core) return Promise.reject(new Error('Tauri backend unavailable in this preview.'));
    return core.invoke(cmd, args);
  }

  onDestroy(() => {
    stopPolling();
    stopElyPolling();
  });

  function stopPolling() {
    if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = null;
    }
  }

  function stopElyPolling() {
    if (elyPollTimer) {
      clearInterval(elyPollTimer);
      elyPollTimer = null;
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

  // ---- ely.by: OAuth2 (primary) ----
  async function elyBrowser() {
    elyError = '';
    elyDone = false;
    elyBrowserBusy = true;
    try {
      // long-running: opens the browser, waits for the loopback redirect,
      // then persists the account (backend caps the wait at 5 minutes)
      await invoke('elyby_browser_login');
      elyDone = true;
      await onrefresh?.();
    } catch (e) {
      elyError = String(e);
    } finally {
      elyBrowserBusy = false;
    }
  }

  async function startElyDevice() {
    elyError = '';
    elyCopied = false;
    elyMode = 'requesting';
    try {
      elyDevice = await invoke('start_elyby_device_code');
      elyMode = 'code';
      stopElyPolling();
      elyPollTimer = setInterval(pollElyDevice, (elyDevice.interval || 5) * 1000);
    } catch (e) {
      elyMode = 'idle';
      elyError = String(e);
    }
  }

  async function pollElyDevice() {
    if (!elyDevice) return;
    try {
      const result = await invoke('poll_elyby_device_code', { device: elyDevice });
      if (result.state === 'pending') return;
      if (result.state === 'slow_down') {
        // Ely.by asked for a slower cadence: +5 seconds
        stopElyPolling();
        elyPollTimer = setInterval(pollElyDevice, ((elyDevice.interval || 5) + 5) * 1000);
        return;
      }
      stopElyPolling();
      if (result.state === 'failed') {
        elyError = result.reason;
        elyDevice = null;
        elyMode = 'idle';
        return;
      }
      // completed: account persisted and activated by the backend
      elyDevice = null;
      elyMode = 'signedin';
      await onrefresh?.();
    } catch (e) {
      elyError = String(e);
    }
  }

  async function copyElyCode() {
    if (!elyDevice) return;
    try {
      await navigator.clipboard.writeText(elyDevice.user_code);
      elyCopied = true;
      setTimeout(() => (elyCopied = false), 1600);
    } catch {
      /* clipboard unavailable: the code stays selectable on screen */
    }
  }

  /// Sends the user to the Ely.by verification page (or the click-through
  /// URL when the server pre-fills the code) in the system web browser —
  /// never the platform file opener (query parameters mangle there).
  function openElyVerification() {
    const url = elyDevice?.verification_uri_complete ?? elyDevice?.verification_uri;
    if (url) invoke('open_external_url', { url }).catch(() => {});
  }

  // ---- ely.by: classic credentials (fallback) ----
  async function addElyby(e) {
    e.preventDefault();
    error = '';
    elyBusy = true;
    elyDone = false;
    try {
      await invoke('add_elyby_account', {
        username: elyUser.trim(),
        password: elyPassword,
      });
      elyUser = '';
      elyPassword = '';
      elyDone = true;
      await onrefresh?.();
    } catch (err) {
      error = String(err);
    } finally {
      elyBusy = false;
    }
  }

  // ---- custom ----
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
</script>

<!-- tab bar -->
<div class="flex gap-1 border-b border-(--border) px-3 pt-2.5">
  {#each [['offline', 'Offline'], ['elyby', 'Ely.by'], ['microsoft', 'Microsoft'], ['custom', 'Custom']] as [id, label]}
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

<div>
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
  {:else if tab === 'elyby'}
    <div class="flex flex-col gap-3 p-4">
      <div class="flex items-center gap-2">
        <span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span>
        <span class="text-[12px] font-medium">Sign in with Ely.by</span>
      </div>

      {#if elyMode === 'idle'}
        <button
          class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
          disabled={elyBrowserBusy}
          onclick={elyBrowser}
        >
          {elyBrowserBusy ? 'Waiting for the browser…' : 'Sign in with browser (recommended)'}
        </button>
        <p class="text-[11px] text-(--text-muted)">
          Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
          automatically — no password ever enters the launcher.
        </p>
        <button
          class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40"
          disabled={elyBrowserBusy}
          onclick={startElyDevice}
        >
          Use a device code instead
        </button>
      {:else if elyMode === 'requesting'}
        <p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>
      {:else if elyMode === 'code' && elyDevice}
        <div class="flex flex-col items-center gap-2 py-2">
          <span class="text-[11px] text-(--text-muted)">Enter this code at</span>
          <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]">{elyDevice.verification_uri}</code>
          <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span>
          <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)">
            {elyDevice.user_code}
          </code>
          <div class="mt-1 flex gap-2">
            <button
              class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"
              onclick={copyElyCode}>
              {elyCopied ? 'Copied ✓' : 'Copy code'}
            </button>
            {#if elyDevice.verification_uri || elyDevice.verification_uri_complete}
              <button
                class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"
                onclick={openElyVerification}>
                Open page
              </button>
            {/if}
            <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)" onclick={startElyDevice}>
              Restart
            </button>
          </div>
          <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)">
            <span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span>
            Waiting for you to finish signing in…
          </p>
        </div>
      {:else if elyMode === 'signedin'}
        <p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p>
        <button
          class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)"
          onclick={() => {
            elyMode = 'idle';
            elyError = '';
          }}>Sign in another account</button
        >
      {/if}

      {#if elyError}
        <p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400">{elyError}</p>
      {/if}
      {#if elyDone && elyMode === 'idle'}
        <p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">
          Signed in — the Ely.by account is saved and active.
        </p>
      {/if}

      <!-- classic credentials: collapsed fallback -->
      <details class="rounded border border-(--border)">
        <summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">
          Classic login (fallback) — username &amp; password
        </summary>
        <form class="flex flex-col gap-3 p-3 pt-1" onsubmit={addElyby}>
          <input
            class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder="Ely.by username or email"
            autocomplete="username"
            bind:value={elyUser}
          />
          <input
            type="password"
            class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder="Password"
            autocomplete="current-password"
            bind:value={elyPassword}
          />
          <button
            type="submit"
            class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={!elyUser.trim() || !elyPassword || elyBusy}
          >
            {elyBusy ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </details>
      <p class="text-[11px] text-(--text-muted)">
        Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
        authlib-injector agent aimed at
        <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.
      </p>
    </div>
  {:else if tab === 'custom'}
    <form class="flex flex-col gap-3 p-4" onsubmit={addCustom}>
      <input
        class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
        placeholder="Server URL (authlib-injector)"
        bind:value={customUrl}
      />
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
</div>
