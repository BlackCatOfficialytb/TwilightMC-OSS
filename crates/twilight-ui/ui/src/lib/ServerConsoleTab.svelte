<script>
  import { tauriInvoke } from './tauri';
  // Terminal / Console tab: live metric cards with SVG sparklines (polled
  // every 2s while mounted), the colorized console output and the sticky
  // stdin input with Up/Down command history, plus the address & Minekube
  // Connect share panel.
  import { onMount } from 'svelte';
  import ServerSparkline from './ServerSparkline.svelte';
  import { toast } from './alerts.svelte.js';
  import { t } from './i18n.svelte.ts';
  import { formatBytes, formatUptime } from './server-helpers.js';

  let { server, logs = [], connect = null } = $props();

  let metrics = $state(null);
  let cpuHistory = $state([]);
  let memHistory = $state([]);
  let consoleInput = $state('');
  let consoleBox = $state(null);
  let commandHistory = $state([]);
  let historyIndex = $state(-1);

  const MAX_POINTS = 60;

  function api(cmd, args) {
    return tauriInvoke(cmd, args);
  }

  async function poll() {
    try {
      const m = await api('get_server_metrics', { id: server.id });
      metrics = m;
      cpuHistory = [...cpuHistory, m.cpu_percent].slice(-MAX_POINTS);
      memHistory = [...memHistory, m.memory_bytes / (1024 * 1024)].slice(-MAX_POINTS);
    } catch {}
  }

  onMount(() => {
    poll();
    const timer = setInterval(poll, 2000);
    return () => clearInterval(timer);
  });

  const cpuPercent = $derived(Math.min(100, metrics?.cpu_percent ?? 0));
  const memMiB = $derived((metrics?.memory_bytes ?? 0) / (1024 * 1024));
  const maxMiB = $derived(server.max_memory_mb || 0);

  // console output auto-scroll
  $effect(() => {
    logs.length;
    queueMicrotask(() => consoleBox?.scrollTo({ top: consoleBox.scrollHeight }));
  });

  function lineClass(line) {
    if (line.startsWith('[TwilightMC]')) return 'text-(--accent)';
    if (/ERROR|Exception|SEVERE|FATAL/i.test(line)) return 'text-rose-400';
    if (/WARN/i.test(line)) return 'text-amber-500';
    return 'text-(--text-main)';
  }

  async function send(e) {
    e?.preventDefault();
    if (!consoleInput.trim()) return;
    const cmd = consoleInput;
    consoleInput = '';
    commandHistory = [...commandHistory.filter((c) => c !== cmd), cmd].slice(-50);
    historyIndex = -1;
    try {
      await api('send_server_command', { id: server.id, command: cmd });
    } catch (err) {
      toast(String(err), 'error');
    }
  }

  function onHistoryKey(e) {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
    e.preventDefault();
    if (commandHistory.length === 0) return;
    if (e.key === 'ArrowUp') {
      historyIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
    } else {
      historyIndex = historyIndex === -1 ? -1 : historyIndex + 1;
      if (historyIndex >= commandHistory.length) {
        historyIndex = -1;
        consoleInput = '';
        return;
      }
    }
    consoleInput = commandHistory[historyIndex] ?? '';
  }

  async function copy(text, okKey) {
    try {
      await navigator.clipboard.writeText(text);
      toast(t(okKey), 'success');
    } catch {
      toast(t('server-share-copy-failed'), 'warning');
    }
  }
</script>

<div class="flex min-h-0 flex-1 gap-3 overflow-y-auto p-4">
  <div class="flex min-w-0 flex-1 flex-col gap-3">
    <!-- metric cards -->
    <div class="grid gap-2.5" style="grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));">
      <div class="rounded-lg border border-(--border) bg-(--bg-subtle) p-3">
        <div class="text-[10px] font-medium tracking-wide text-(--text-muted) uppercase">{t('server-metric-cpu')}</div>
        <div class="mt-1 flex items-baseline gap-1">
          <span class="text-[20px] font-semibold">{cpuPercent.toFixed(1)}</span>
          <span class="text-[11px] text-(--text-muted)">%</span>
        </div>
        <div class="mt-1"><ServerSparkline values={cpuHistory} height={28} /></div>
      </div>
      <div class="rounded-lg border border-(--border) bg-(--bg-subtle) p-3">
        <div class="text-[10px] font-medium tracking-wide text-(--text-muted) uppercase">{t('server-metric-memory')}</div>
        <div class="mt-1 flex items-baseline gap-1">
          <span class="text-[20px] font-semibold">{memMiB.toFixed(0)}</span>
          <span class="text-[11px] text-(--text-muted)">MiB{maxMiB ? ` / ${maxMiB}` : ''}</span>
        </div>
        <div class="mt-1"><ServerSparkline values={memHistory} height={28} color="#38bdf8" /></div>
      </div>
      <div class="rounded-lg border border-(--border) bg-(--bg-subtle) p-3">
        <div class="text-[10px] font-medium tracking-wide text-(--text-muted) uppercase">{t('server-metric-disk')}</div>
        <div class="mt-1 flex items-baseline gap-1">
          <span class="text-[20px] font-semibold">{formatBytes(metrics?.disk_bytes ?? 0)}</span>
        </div>
        <div class="mt-2 text-[11px] text-(--text-muted)">{t('server-metric-disk-hint')}</div>
      </div>
      <div class="rounded-lg border border-(--border) bg-(--bg-subtle) p-3">
        <div class="text-[10px] font-medium tracking-wide text-(--text-muted) uppercase">{t('server-metric-uptime')}</div>
        <div class="mt-1 text-[20px] font-semibold">{formatUptime(metrics?.uptime_secs ?? 0)}</div>
        <div class="mt-2 text-[11px] text-(--text-muted)">
          {t('server-metric-state')}: {server.state}
        </div>
      </div>
    </div>

    <!-- console -->
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-2)">
      <div bind:this={consoleBox} class="min-h-[160px] flex-1 overflow-y-auto p-2.5 font-mono text-[11px] leading-relaxed">
        {#if logs.length === 0}
          <span class="text-(--text-muted)">{t('server-no-output')}</span>
        {:else}
          {#each logs as line, i (i)}
            <div class="whitespace-pre-wrap break-all {lineClass(line)}">{line}</div>
          {/each}
        {/if}
      </div>
      <form class="flex items-center gap-1.5 border-t border-(--border) px-2.5 py-1.5" onsubmit={send}>
        <span class="text-[12px] font-semibold text-(--accent)">&gt;</span>
        <input
          class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-3) px-2 font-mono text-[11.5px] outline-none focus:border-(--accent)"
          placeholder={server.state === 'Running' ? t('server-console-running') : t('server-console-stopped')}
          bind:value={consoleInput}
          onkeydown={onHistoryKey}
          disabled={server.state !== 'Running'}
        />
      </form>
    </div>
  </div>

  <!-- address & connect share panel -->
  <div class="flex w-[230px] shrink-0 flex-col gap-2.5">
    <div class="rounded-lg border border-(--border) bg-(--bg-subtle) p-3">
      <div class="text-[11px] font-medium">{t('server-address-label')}</div>
      <div class="mt-2 flex items-center gap-1.5">
        <code class="min-w-0 flex-1 truncate rounded bg-(--bg-3) px-2 py-1 text-[11px]">localhost:{server.port}</code>
        <button
          class="shrink-0 rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)"
          title={t('server-copy-address')}
          onclick={() => copy(`localhost:${server.port}`, 'server-address-copied')}
        >
          {t('common-copy')}
        </button>
      </div>
    </div>

    {#if server.connect}
      <div class="rounded-lg border border-(--border) bg-(--bg-subtle) p-3">
        <div class="flex items-center justify-between gap-2">
          <span class="text-[11px] font-medium">{t('server-connect')}</span>
          <span class="text-[10px] {connect?.endpoint ? 'text-green-500' : 'text-(--text-muted)'}">
            {connect?.endpoint ? t('server-tunnel-active') : server.state === 'Running' ? t('server-waiting-endpoint') : t('server-offline')}
          </span>
        </div>
        {#if connect?.endpoint}
          <div class="mt-2 flex items-center gap-1.5">
            <code class="min-w-0 flex-1 truncate rounded bg-(--bg-3) px-2 py-1 text-[11px]" title={connect.endpoint}>
              {connect.endpoint}
            </code>
            <button
              class="shrink-0 rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)"
              onclick={() => copy(connect.endpoint, 'server-share-copied')}
            >
              {t('common-copy')}
            </button>
          </div>
        {/if}
      </div>
    {/if}

    {#if server.offline_mode}
      <div class="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3">
        <p class="text-[11px] text-amber-500">{t('server-offline-notice')}</p>
      </div>
    {/if}
  </div>
</div>
