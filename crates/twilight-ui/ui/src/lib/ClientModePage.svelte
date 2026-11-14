<script>
  // Client mode: a Lunar/Dawn-style minimal dashboard — zero ads, zero bloat,
  // zero sponsored servers. Center stage is the active account's 3D character;
  // beside it a quick-launch hub, the user's own pinned servers (quick-join)
  // and a fast skin/cape switcher. Fully theme-adaptive through the standard
  // tokens, so it follows Twilight/Catppuccin/Nord/High-Contrast alike.
  import SkinViewer3D from './SkinViewer3D.svelte';

  let {
    instances = [],
    active = null,
    gameRunning = false,
    status = 'Ready',
    onlaunch,
    onopenconsole,
    onrefresh,
    onopenaccounts,
  } = $props();

  function invoke(cmd, args) {
    const core = window.__TAURI__?.core;
    if (!core) return Promise.reject(new Error('Tauri backend unavailable in this preview.'));
    return core.invoke(cmd, args);
  }

  // ---- pinned servers: strictly user-owned, stored locally, deletable ----
  const PIN_KEY = 'twilight-pinned-servers';
  let pins = $state(loadPins());
  let pinName = $state('');
  let pinAddress = $state('');
  let pinError = $state('');

  function loadPins() {
    try {
      const parsed = JSON.parse(localStorage.getItem(PIN_KEY) ?? '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function savePins() {
    localStorage.setItem(PIN_KEY, JSON.stringify(pins));
  }

  function addPin(e) {
    e.preventDefault();
    pinError = '';
    const address = pinAddress.trim();
    if (!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(address)) {
      pinError = 'Address must be a hostname (optionally host:port).';
      return;
    }
    pins = [
      ...pins,
      { name: pinName.trim() || address.split(':')[0], address },
    ];
    savePins();
    pinName = '';
    pinAddress = '';
  }

  function removePin(index) {
    pins = pins.filter((_, i) => i !== index);
    savePins();
  }

  // ---- quick launch hub ----
  let selectedInstance = $state('');
  $effect(() => {
    // keep a valid selection as the library changes
    if (selectedInstance && instances.some((i) => i.id === selectedInstance)) return;
    selectedInstance = instances[0]?.id ?? '';
  });

  const selectedLabel = $derived(
    instances.find((i) => i.id === selectedInstance)?.name ?? 'no instance selected'
  );

  function quickJoin(pin) {
    if (!selectedInstance || gameRunning) return;
    onlaunch?.(selectedInstance, pin.address);
  }

  // ---- quick cosmetics switcher ----
  let cosmeticError = $state('');
  let cosmeticBusy = $state(false);

  async function pickTexture(kind) {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      cosmeticError = 'File picker unavailable in this build.';
      return;
    }
    try {
      const picked = await open({
        multiple: false,
        title: kind === 'skin' ? 'Choose a skin PNG' : 'Choose a cape PNG',
        filters: [{ name: 'PNG textures', extensions: ['png'] }],
      });
      if (!picked) return;
      cosmeticBusy = true;
      cosmeticError = '';
      await invoke('set_account_textures', {
        id: active.id,
        skin: kind === 'skin' ? String(picked) : null,
        cape: kind === 'cape' ? String(picked) : null,
      });
      await onrefresh?.();
    } catch (e) {
      cosmeticError = String(e);
    } finally {
      cosmeticBusy = false;
    }
  }

  async function clearCape() {
    if (!active) return;
    try {
      cosmeticBusy = true;
      await invoke('set_account_textures', { id: active.id, skin: null, cape: null });
      await onrefresh?.();
    } catch (e) {
      cosmeticError = String(e);
    } finally {
      cosmeticBusy = false;
    }
  }

  function typeLabel(account) {
    return { offline: 'Offline', microsoft: 'Microsoft' }[account.account_type.type] ?? 'Yggdrasil';
  }
</script>

<div class="mx-auto flex w-full max-w-4xl flex-col gap-6">
  {#if !active}
    <div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center">
      <span class="text-3xl">👤</span>
      <p class="text-sm font-medium">No account selected</p>
      <p class="max-w-sm text-[12px] text-(--text-muted)">
        Pick or create an account to see your character here.
      </p>
      <button
        class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
        onclick={() => onopenaccounts?.()}>Open account manager</button
      >
    </div>
  {:else}
    <div class="grid gap-6 md:grid-cols-[auto_1fr]">
      <!-- center stage: the active character -->
      <div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5">
        <SkinViewer3D skin={active.skin} cape={active.cape} width={220} height={300} />
        <div class="text-center">
          <p class="text-sm font-semibold">{active.username}</p>
          <p class="text-[11px] text-(--text-muted)">{typeLabel(active)}</p>
        </div>
        <div class="flex gap-2">
          <button
            class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)"
            title="Swap the skin PNG"
            disabled={cosmeticBusy}
            onclick={() => pickTexture('skin')}>Skin…</button
          >
          <button
            class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)"
            title="Swap the cape PNG"
            disabled={cosmeticBusy}
            onclick={() => pickTexture('cape')}>Cape…</button
          >
          {#if active.cape || active.skin}
            <button
              class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)"
              title="Back to the default look"
              disabled={cosmeticBusy}
              onclick={clearCape}>Reset</button
            >
          {/if}
        </div>
        {#if cosmeticError}
          <p class="text-center text-[11px] text-red-400">{cosmeticError}</p>
        {/if}
      </div>

      <div class="flex min-w-0 flex-col gap-6">
        <!-- quick launch hub -->
        <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5">
          <h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3>
          <div class="mt-3 flex items-center gap-2">
            <select
              class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"
              bind:value={selectedInstance}
            >
              {#each instances as inst (inst.id)}
                <option value={inst.id}>{inst.name}</option>
              {:else}
                <option value="">No instances yet</option>
              {/each}
            </select>
            <button
              class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"
              title="Open the console drawer"
              onclick={() => onopenconsole?.()}>▶ Console</button
            >
          </div>
          <button
            class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!selectedInstance || gameRunning}
            onclick={() => onlaunch?.(selectedInstance, null)}
          >
            {gameRunning ? 'GAME RUNNING…' : 'LAUNCH GAME'}
          </button>
          <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)">
            {gameRunning ? status : selectedLabel}
          </p>
        </div>

        <!-- my favorite servers: user-owned only -->
        <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5">
          <div class="flex items-center justify-between">
            <h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3>
            <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span>
          </div>
          {#each pins as pin, i (pin.address)}
            <div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2">
              <span class="min-w-0 flex-1">
                <span class="block truncate text-[13px] font-medium">{pin.name}</span>
                <span class="block truncate text-[11px] text-(--text-muted)">{pin.address}</span>
              </span>
              <button
                class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40"
                disabled={!selectedInstance || gameRunning}
                title={`Join ${pin.address} with ${selectedLabel}`}
                onclick={() => quickJoin(pin)}>Join</button
              >
              <button
                class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400"
                title="Remove from my servers"
                onclick={() => removePin(i)}>✕</button
              >
            </div>
          {:else}
            <p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>
          {/each}
          <form class="mt-3 flex flex-wrap gap-2" onsubmit={addPin}>
            <input
              class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
              placeholder="Name"
              bind:value={pinName}
            />
            <input
              class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
              placeholder="host.or.ip[:port]"
              bind:value={pinAddress}
            />
            <button
              type="submit"
              class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button
            >
          </form>
          {#if pinError}
            <p class="mt-2 text-[11px] text-red-400">{pinError}</p>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
