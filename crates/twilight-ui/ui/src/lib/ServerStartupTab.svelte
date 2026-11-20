<script>
  // Startup tab: memory, port, custom JVM flags, java runtime and the EULA
  // switch, with a computed startup-command preview. Saving is blocked while
  // the server runs — the backend enforces it too.
  import { onMount } from 'svelte';
  import { toast } from './alerts.svelte.js';
  import { t } from './i18n.svelte.ts';

  let { server } = $props();

  let minMemory = $state(0);
  let maxMemory = $state(0);
  let port = $state(25565);
  let jvmFlags = $state('');
  let javaPath = $state('');
  let autoEula = $state(true);
  let javaList = $state([]);
  let busy = $state(false);

  function api(cmd, args) {
    return window.__TAURI__.core.invoke(cmd, args);
  }

  onMount(() => {
    minMemory = server.min_memory_mb || 0;
    maxMemory = server.max_memory_mb || 0;
    port = server.port || 25565;
    jvmFlags = server.jvm_flags ?? '';
    javaPath = server.java_path ?? '';
    autoEula = server.auto_eula !== false;
    (async () => {
      try {
        javaList = await api('discover_java_installations');
      } catch {}
    })();
  });

  const native = $derived(server.software === 'pumpkin' || server.software === 'steel');
  const running = $derived(server.state === 'Running' || server.state === 'Starting' || server.state === 'Stopping');

  // computed startup-command preview (mirrors the backend launch line)
  const preview = $derived.by(() => {
    if (native) return server.software === 'pumpkin' ? '.\\pumpkin.exe' : '.\\steel.exe';
    const flags = jvmFlags.trim();
    const mem = [
      minMemory > 0 ? `-Xms${minMemory}M` : '',
      maxMemory > 0 ? `-Xmx${maxMemory}M` : '',
    ]
      .filter(Boolean)
      .join(' ');
    const java = javaPath.trim() || 'java';
    return [java, flags, mem, '-jar', 'server.jar', 'nogui'].filter(Boolean).join(' ');
  });

  const dirty = $derived(
    minMemory !== (server.min_memory_mb || 0) ||
      maxMemory !== (server.max_memory_mb || 0) ||
      port !== (server.port || 25565) ||
      jvmFlags !== (server.jvm_flags ?? '') ||
      javaPath !== (server.java_path ?? '') ||
      autoEula !== (server.auto_eula !== false),
  );

  async function save() {
    busy = true;
    try {
      await api('set_server_startup', {
        id: server.id,
        config: {
          minMemoryMb: Math.max(0, Math.floor(Number(minMemory) || 0)),
          maxMemoryMb: Math.max(0, Math.floor(Number(maxMemory) || 0)),
          port: Math.floor(Number(port) || 0),
          jvmFlags: jvmFlags.trim() || null,
          javaPath: javaPath.trim() || null,
          autoEula,
        },
      });
      toast(t('server-startup-saved'), 'success');
    } catch (e) {
      toast(String(e), 'error', { title: t('server-save-failed') });
    } finally {
      busy = false;
    }
  }
</script>

<div class="mx-auto flex w-full max-w-xl flex-col gap-4 overflow-y-auto p-4">
  <div class="rounded-lg border border-(--border) bg-(--bg-subtle) p-3">
    <div class="text-[10px] font-medium tracking-wide text-(--text-muted) uppercase">
      {t('server-startup-preview')}
    </div>
    <code class="mt-1.5 block break-all font-mono text-[11.5px] text-(--accent)">{preview}</code>
  </div>

  <div class="grid grid-cols-2 gap-3">
    <label class="flex flex-col gap-1">
      <span class="text-[11.5px] font-medium">{t('server-startup-memory-min')}</span>
      <input
        type="number"
        min="0"
        step="256"
        class="h-8 rounded border border-(--border) bg-(--bg-2) px-2 text-[12px] outline-none focus:border-(--accent) disabled:opacity-40"
        bind:value={minMemory}
        disabled={running || busy}
        placeholder="0"
      />
    </label>
    <label class="flex flex-col gap-1">
      <span class="text-[11.5px] font-medium">{t('server-startup-memory-max')}</span>
      <input
        type="number"
        min="0"
        step="256"
        class="h-8 rounded border border-(--border) bg-(--bg-2) px-2 text-[12px] outline-none focus:border-(--accent) disabled:opacity-40"
        bind:value={maxMemory}
        disabled={running || busy}
        placeholder="0"
      />
    </label>
  </div>

  <label class="flex flex-col gap-1">
    <span class="text-[11.5px] font-medium">{t('server-startup-port')}</span>
    <input
      type="number"
      min="1"
      max="65535"
      class="h-8 rounded border border-(--border) bg-(--bg-2) px-2 text-[12px] outline-none focus:border-(--accent) disabled:opacity-40"
      bind:value={port}
      disabled={running || busy}
    />
  </label>

  {#if !native}
    <label class="flex flex-col gap-1">
      <span class="text-[11.5px] font-medium">{t('server-startup-jvm-flags')}</span>
      <input
        class="h-8 rounded border border-(--border) bg-(--bg-2) px-2 font-mono text-[11.5px] outline-none focus:border-(--accent) disabled:opacity-40"
        bind:value={jvmFlags}
        disabled={running || busy}
        placeholder="-XX:+UseG1GC -Dfile.encoding=UTF8"
      />
      <span class="text-[10.5px] text-(--text-muted)">{t('server-startup-jvm-hint')}</span>
    </label>

    <label class="flex flex-col gap-1">
      <span class="text-[11.5px] font-medium">{t('server-startup-java')}</span>
      <input
        class="h-8 rounded border border-(--border) bg-(--bg-2) px-2 font-mono text-[11.5px] outline-none focus:border-(--accent) disabled:opacity-40"
        bind:value={javaPath}
        disabled={running || busy}
        list="server-java-list"
        placeholder=""
      />
      <datalist id="server-java-list">
        {#each javaList as j (j.executable)}
          <option value={j.executable}>{j.version}</option>
        {/each}
      </datalist>
      <span class="text-[10.5px] text-(--text-muted)">{t('server-startup-java-hint')}</span>
    </label>

    <label class="flex items-center justify-between gap-3 rounded-lg border border-(--border) bg-(--bg-subtle) p-3">
      <span class="min-w-0">
        <span class="block text-[11.5px] font-medium">{t('server-startup-eula')}</span>
        <span class="mt-0.5 block text-[10.5px] text-(--text-muted)">{t('server-startup-eula-hint')}</span>
      </span>
      <input type="checkbox" class="h-4 w-4 accent-(--accent)" bind:checked={autoEula} disabled={running || busy} />
    </label>
  {/if}

  {#if running}
    <p class="text-[11.5px] text-amber-500">{t('server-startup-running-block')}</p>
  {/if}

  <div class="flex justify-end">
    <button
      class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
      disabled={running || busy || !dirty}
      onclick={save}
    >
      {t('common-save')}
    </button>
  </div>
</div>
