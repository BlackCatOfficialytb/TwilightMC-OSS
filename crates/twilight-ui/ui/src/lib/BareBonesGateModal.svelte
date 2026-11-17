<script>
  // The mandatory BareBones Template gate dialog: when a Cleanroom launch is
  // blocked by the pre-flight check, this offers the three install flows
  // instead of a bare error toast — open the pack on CurseForge, 1-click the
  // Modrinth-hosted core mods (no key needed), or import a downloaded zip.
  import LauncherIcon from './LauncherIcon.svelte';

  const GATE_MESSAGE =
    'CleanroomMC requires the BareBones Template (Cleanroom) mods (Fugue, MixinBooter, ConfigAnytime, Scalar Legacy) to boot 1.12.2 safely.';
  const CF_FILES_URL = 'https://www.curseforge.com/minecraft/modpacks/barebones-template-cleanroom/files';

  let { instanceId, onclose, onlaunch } = $props();

  let busy = $state('');
  let error = $state('');
  let done = $state(null); // { title, note } once a flow unblocked the gate

  function openCurseForge() {
    window.__TAURI__?.core.invoke('open_external_url', { url: CF_FILES_URL }).catch((e) => (error = String(e)));
  }

  async function installCoreMods() {
    error = '';
    busy = 'install';
    try {
      const installed = await window.__TAURI__.core.invoke('install_cleanroom_core_mods', { instanceId });
      done = {
        title: `Installed ${installed.length} core mod${installed.length === 1 ? '' : 's'}: Fugue, MixinBooter, ConfigAnytime.`,
        note: 'Scalar Legacy is CurseForge-only and was skipped — the gate is satisfied without it. Import the full BareBones zip if you want it too.',
      };
    } catch (e) {
      error = String(e);
    } finally {
      busy = '';
    }
  }

  async function importPack() {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) {
      error = 'File picker unavailable in this build.';
      return;
    }
    error = '';
    try {
      const picked = await open({
        multiple: false,
        title: 'Import a CurseForge modpack zip',
        filters: [{ name: 'CurseForge modpack', extensions: ['zip'] }],
      });
      if (!picked) return;
      busy = 'import';
      const report = await window.__TAURI__.core.invoke('import_curseforge_pack', {
        zipPath: String(picked),
        instanceId,
      });
      done = {
        title: `Imported ${report.name} ${report.version}: ${report.overrides_extracted} override file${report.overrides_extracted === 1 ? '' : 's'}.`,
        note:
          report.mods_skipped > 0
            ? `${report.mods_skipped} listed mod file${report.mods_skipped === 1 ? ' was' : 's were'} not downloaded — add a CurseForge API key in Settings → API Keys to fetch them automatically.`
            : '',
      };
    } catch (e) {
      error = String(e);
    } finally {
      busy = '';
    }
  }

  function launch() {
    onlaunch?.(instanceId);
  }
</script>

<div
  class="fixed inset-0 z-[70] flex items-center justify-center"
  style="background: var(--scrim)"
  onclick={(e) => {
    if (e.target === e.currentTarget && !busy) onclose?.();
  }}
>
  <div
    role="dialog"
    aria-modal="true"
    aria-label="BareBones Template required"
    class="w-[440px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"
  >
    <div class="flex items-start gap-3 p-4">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)">
        <LauncherIcon name="mods" size={17} />
      </span>
      <div class="min-w-0 flex-1">
        <h3 class="text-(--step-heading) font-semibold text-(--fg-1)">BareBones Template required</h3>
        <p class="mt-1 text-[12px] text-(--fg-2)">{GATE_MESSAGE}</p>
      </div>
    </div>

    <div class="px-4 pb-4">
      {#if !done}
        <div class="grid gap-2">
          <button
            class="flex items-center gap-2.5 rounded border border-(--accent) bg-(--brand-tint) px-3 py-2 text-left text-[12px] font-medium text-(--accent) hover:bg-(--accent-hover) disabled:opacity-40"
            disabled={busy !== ''}
            onclick={installCoreMods}
          >
            <span class="w-4 shrink-0 text-center" aria-hidden="true">{busy === 'install' ? '…' : '⚡'}</span>
            <span class="min-w-0">
              Install core mods from Modrinth — no key needed
              <span class="block font-normal text-(--text-muted)">Fugue, MixinBooter, ConfigAnytime for 1.12.2 (forge)</span>
            </span>
          </button>
          <button
            class="flex items-center gap-2.5 rounded border border-(--border) px-3 py-2 text-left text-[12px] text-(--text-main) hover:border-(--accent) disabled:opacity-40"
            disabled={busy !== ''}
            onclick={importPack}
          >
            <span class="w-4 shrink-0 text-center" aria-hidden="true">{busy === 'import' ? '…' : '📦'}</span>
            <span class="min-w-0">
              Import Downloaded .zip…
              <span class="block font-normal text-(--text-muted)">CurseForge pack zip (manifest.json + overrides/)</span>
            </span>
          </button>
          <button
            class="flex items-center gap-2.5 rounded border border-(--border) px-3 py-2 text-left text-[12px] text-(--text-main) hover:border-(--accent) disabled:opacity-40"
            disabled={busy !== ''}
            onclick={openCurseForge}
          >
            <span class="w-4 shrink-0 text-center" aria-hidden="true">↗</span>
            <span class="min-w-0">
              Open BareBones Template on CurseForge
              <span class="block font-normal text-(--text-muted)">Download the zip there, then import it above</span>
            </span>
          </button>
        </div>
        <p class="mt-3 text-[11px] text-(--text-muted)">
          Scalar Legacy is CurseForge-only: the 1-click install covers the other three and the gate passes without it.
        </p>
      {:else}
        <div class="rounded border border-(--border) bg-(--bg-3) p-3">
          <p class="text-[12px] text-green-500">{done.title}</p>
          {#if done.note}
            <p class="mt-1 text-[11px] text-(--text-muted)">{done.note}</p>
          {/if}
        </div>
        <div class="mt-4 flex justify-end gap-2">
          <button
            class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
            onclick={() => onclose?.()}
          >
            Close
          </button>
          <button
            class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
            onclick={launch}
          >
            Launch 1.12.2
          </button>
        </div>
      {/if}
      {#if error}
        <p class="mt-3 text-[11px] text-rose-400">{error}</p>
      {/if}
    </div>
  </div>
</div>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
