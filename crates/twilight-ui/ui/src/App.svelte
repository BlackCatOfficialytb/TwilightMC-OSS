<script>
  import { onMount } from 'svelte';

  let version = $state('…');
  let active = $state('instances');

  // No crutch states or animations: a busy desktop reads one crisp status word.
  let status = $state('Ready');

  const nav = [
    { id: 'instances', label: 'Instances' },
    { id: 'accounts', label: 'Accounts' },
    { id: 'settings', label: 'Settings' },
    { id: 'logs', label: 'Logs' },
  ];

  const sections = {
    instances: ['Instances', 'Instance install and management arrive in an upcoming alpha build.'],
    accounts: ['Accounts', 'Offline and Microsoft profile management arrive in alpha-v0.1.1.'],
    settings: ['Settings', 'Java discovery, metadata and storage paths land over alpha-v0.1.2–0.1.5.'],
    logs: ['Logs', 'Live game output streaming arrives with the launch pipeline bridge.'],
  };

  onMount(async () => {
    try {
      version = await window.__TAURI__.core.invoke('get_version');
    } catch {
      // Opened as a plain web build — the embedded version is unknown.
      version = 'dev';
    }
  });
</script>

<div class="flex h-full flex-col bg-[#1b1c1f] text-sm text-neutral-300">
  <header class="flex h-11 shrink-0 items-center justify-between border-b border-black/50 bg-[#222328] px-4">
    <div class="flex items-center gap-2.5">
      <h1 class="text-[15px] font-semibold tracking-wide text-neutral-100">TwilightMC</h1>
      <span class="rounded bg-indigo-500/15 px-2 py-0.5 text-xs font-medium text-indigo-300">Bolide v{version}</span>
    </div>
    <span class="text-xs text-neutral-500">{status}</span>
  </header>

  <div class="flex min-h-0 flex-1">
    <nav class="flex w-44 shrink-0 flex-col gap-0.5 border-r border-black/50 bg-[#202124] p-2">
      {#each nav as item (item.id)}
        <button
          class="rounded px-3 py-1.5 text-left text-[13px] {active === item.id
            ? 'bg-indigo-600 font-medium text-white'
            : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-200'}"
          onclick={() => (active = item.id)}
        >
          {item.label}
        </button>
      {/each}
    </nav>

    <main class="min-w-0 flex-1 overflow-y-auto p-6">
      <h2 class="text-lg font-semibold text-neutral-100">{sections[active][0]}</h2>
      <p class="mt-1 text-neutral-500">{sections[active][1]}</p>
    </main>
  </div>
</div>
