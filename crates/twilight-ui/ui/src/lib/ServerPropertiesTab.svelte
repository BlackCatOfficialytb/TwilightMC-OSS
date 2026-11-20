<script>
  // Properties tab: the ordered server.properties editor (key=value lines
  // reach the backend; comments stay untouched). Native servers keep their
  // port in Pumpkin.toml — only server-port is applied there.
  import { toast } from './alerts.svelte.js';
  import { t } from './i18n.svelte.ts';

  let { server } = $props();

  let propsText = $state('');
  let loading = $state(true);
  let busy = $state(false);

  function api(cmd, args) {
    return window.__TAURI__.core.invoke(cmd, args);
  }

  async function load() {
    loading = true;
    try {
      const lines = await api('get_server_properties', { id: server.id });
      propsText = lines.join('\n');
    } catch (e) {
      toast(String(e), 'error');
    } finally {
      loading = false;
    }
  }

  async function save() {
    // only key=value lines reach the backend; comments stay untouched
    const properties = {};
    for (const line of propsText.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq > 0) properties[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
    }
    busy = true;
    try {
      await api('update_server_properties', { id: server.id, properties });
      toast(t('server-props-saved'), 'success');
    } catch (e) {
      toast(String(e), 'error', { title: t('server-save-failed') });
    } finally {
      busy = false;
    }
  }

  const native = $derived(server.software === 'pumpkin' || server.software === 'steel');
</script>

<div class="flex min-h-0 flex-1 flex-col p-4">
  {#if native}
    <div class="mb-2.5 rounded border border-amber-500/40 bg-amber-500/10 p-2.5">
      <p class="text-[11.5px] text-amber-500">{t('server-props-native-hint')}</p>
    </div>
  {/if}
  {#if loading}
    <p class="text-[12.5px] text-(--text-muted)">{t('common-loading')}</p>
  {:else}
    <textarea
      class="min-h-0 flex-1 resize-none rounded-lg border border-(--border) bg-(--bg-2) p-3 font-mono text-[12px] leading-relaxed outline-none focus:border-(--accent)"
      bind:value={propsText}
      spellcheck="false"
      aria-label={t('server-props-aria')}
    ></textarea>
    <div class="mt-3 flex justify-end">
      <button
        class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
        disabled={busy}
        onclick={save}
      >
        {t('common-save')}
      </button>
    </div>
  {/if}
</div>
