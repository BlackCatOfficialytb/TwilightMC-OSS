<script>
  // Full-page settings: a left navigation rail over four sections and a
  // spacious content column. Input values are $bindable so App.svelte keeps
  // owning persistence; actions bubble up as callbacks.
  import AccentPicker from './AccentPicker.svelte';
  import {
    DEFAULT_THEME,
    THEME_PRESETS,
    TOKEN_FIELDS,
    currentTokens,
    deleteCustomTheme,
    listCustomThemes,
    saveCustomTheme,
  } from './theme';

  let {
    version = '',
    theme = $bindable('twilight-dark'),
    storage = null,
    runtimes = [],
    scanning = false,
    javaError = '',
    javaPath = $bindable(''),
    minMem = $bindable(0),
    maxMem = $bindable(0),
    sharedInput = $bindable(''),
    instancesInput = $bindable(''),
    storageBusy = false,
    storageMsg = '',
    javaMsg = '',
    gameRunning = false,
    onback,
    onscanjava,
    onsaveprefs,
    onsaveshared,
    onresetshared,
    onsaveinstances,
    onresetinstances,
    oncleanstaging,
    onopenurl,
  } = $props();

  const sections = [
    { id: 'appearance', label: 'Appearance', icon: '🎨' },
    { id: 'java', label: 'Java & Memory', icon: '☕' },
    { id: 'storage', label: 'Storage & Staging', icon: '📁' },
    { id: 'about', label: 'About & Updates', icon: 'ℹ️' },
  ];
  let section = $state('appearance');

  // ---- custom themes (localStorage-backed) ----
  let customs = $state(listCustomThemes());
  let builderName = $state('');
  let builderDark = $state(true);
  let builderTokens = $state(currentTokens());
  let themeJson = $state('');
  let customMsg = $state('');

  function cloneCurrentTheme() {
    builderTokens = currentTokens();
    customMsg = 'Loaded the active theme’s tokens — tweak and save.';
  }

  function saveTheme() {
    try {
      const saved = saveCustomTheme({
        name: builderName,
        dark: builderDark,
        tokens: builderTokens,
      });
      customs = listCustomThemes();
      theme = saved.id;
      customMsg = `Saved “${saved.name}”.`;
    } catch (e) {
      customMsg = String(e);
    }
  }

  function removeTheme(id) {
    deleteCustomTheme(id);
    customs = listCustomThemes();
    if (theme === id) theme = DEFAULT_THEME;
    customMsg = 'Theme deleted.';
  }

  function exportTheme() {
    themeJson = JSON.stringify(
      {
        name: builderName.trim() || 'My theme',
        dark: builderDark,
        tokens: builderTokens,
      },
      null,
      2,
    );
    customMsg = 'Theme JSON written below — copy it to share.';
  }

  function importTheme() {
    try {
      const raw = JSON.parse(themeJson);
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
        throw new Error('Expected a theme object.');
      }
      const saved = saveCustomTheme(raw);
      customs = listCustomThemes();
      theme = saved.id;
      customMsg = `Imported “${saved.name}”.`;
      themeJson = '';
    } catch (e) {
      customMsg = `Import failed: ${e}`;
    }
  }

  // Native directory picker; the chosen path lands in the bound input and
  // the Save button persists it.
  async function browseDir(current) {
    const open = window.__TAURI__?.dialog?.open;
    if (!open) return null;
    try {
      const picked = await open({
        directory: true,
        multiple: false,
        defaultPath: current && current.trim() ? current.trim() : undefined,
      });
      return typeof picked === 'string' ? picked : null;
    } catch {
      return null;
    }
  }

  const REPO = 'https://github.com/BlackCatOfficialytb/TwilightMC-OSS';
</script>

<div class="flex h-full">
  <!-- left navigation rail -->
  <nav
    class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3"
    aria-label="Settings sections"
  >
    <button
      class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"
      title="Back to the instance library"
      onclick={onback}
    >
      <span class="w-5 shrink-0 text-center text-[15px]">←</span>
      <span class="truncate">Back to Instances</span>
    </button>
    <div class="flex flex-col gap-0.5">
      {#each sections as s (s.id)}
        <button
          class="flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] {section === s.id
            ? 'bg-(--brand-tint) font-medium text-(--accent)'
            : 'text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)'}"
          aria-current={section === s.id ? 'true' : undefined}
          onclick={() => (section = s.id)}
        >
          <span class="w-5 shrink-0 text-center text-[15px]">{s.icon}</span>
          <span class="truncate">{s.label}</span>
        </button>
      {/each}
    </div>
  </nav>

  <!-- content column -->
  <div class="min-w-0 flex-1 overflow-y-auto">
    <div class="mx-auto max-w-2xl p-8">
      {#if section === 'appearance'}
        <h2 class="text-[16px] font-semibold">Appearance</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          Theme mode and the accent that recolors the entire launcher.
        </p>

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3>
        <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {#each THEME_PRESETS as p (p.id)}
            <button
              class="flex flex-col gap-1.5 rounded border p-2.5 text-left {theme === p.id
                ? 'border-(--accent) bg-(--brand-tint)'
                : 'border-(--border) hover:border-(--text-muted)'}"
              aria-pressed={theme === p.id}
              title="{p.label}: {p.dark ? 'dark' : 'light'} ground"
              onclick={() => (theme = p.id)}
            >
              <span class="flex gap-1" aria-hidden="true">
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{p.swatch[0]}"></span>
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{p.swatch[1]}"></span>
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{p.swatch[2]}"></span>
              </span>
              <span class="text-[12px] font-medium">{p.label}</span>
              <span class="text-[10px] text-(--text-muted)">{p.dark ? 'Dark ground' : 'Light ground'}</span>
            </button>
          {/each}
          {#each customs as c (c.id)}
            <!-- card is a div (a real button would nest the delete button) -->
            <div
              class="relative flex flex-col gap-1.5 rounded border p-2.5 text-left {theme === c.id
                ? 'border-(--accent) bg-(--brand-tint)'
                : 'border-(--border) hover:border-(--text-muted)'}"
              role="button"
              tabindex="0"
              title="{c.name}: {c.dark ? 'dark' : 'light'} ground"
              onclick={() => (theme = c.id)}
              onkeydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  theme = c.id;
                }
              }}
            >
              <span class="flex gap-1" aria-hidden="true">
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{c.tokens.bg1}"></span>
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{c.tokens.bg3}"></span>
                <span class="h-4 w-4 rounded-full border border-black/20" style="background:{c.tokens.accent1}"></span>
              </span>
              <span class="truncate pr-4 text-[12px] font-medium">{c.name}</span>
              <span class="text-[10px] text-(--text-muted)">Custom · {c.dark ? 'Dark' : 'Light'} ground</span>
              <button
                class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400"
                title="Delete {c.name}"
                aria-label="Delete {c.name}"
                onclick={(e) => {
                  e.stopPropagation();
                  removeTheme(c.id);
                }}
              >
                ✕
              </button>
            </div>
          {/each}
        </div>

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3>
        <div class="mt-3">
          <AccentPicker {theme} />
        </div>

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          Build your own palette; it lives in this browser and joins the grid above.
        </p>
        <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <div class="flex flex-wrap items-center gap-2">
            <input
              class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
              placeholder="Theme name"
              bind:value={builderName}
              aria-label="Theme name"
            />
            <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type">
              <button
                type="button"
                class="px-3 py-1.5 text-[12px] {builderDark
                  ? 'bg-(--accent) font-medium text-(--on-accent)'
                  : 'text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)'}"
                aria-pressed={builderDark}
                onclick={() => (builderDark = true)}
              >
                Dark
              </button>
              <button
                type="button"
                class="px-3 py-1.5 text-[12px] {!builderDark
                  ? 'bg-(--accent) font-medium text-(--on-accent)'
                  : 'text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)'}"
                aria-pressed={!builderDark}
                onclick={() => (builderDark = false)}
              >
                Light
              </button>
            </div>
          </div>
          <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {#each TOKEN_FIELDS as f (f.key)}
              <label class="flex flex-col gap-1">
                <span class="text-[10px] uppercase tracking-wide text-(--text-muted)">{f.label}</span>
                <span class="flex items-center gap-1">
                  <input
                    type="color"
                    value={builderTokens[f.key]}
                    oninput={(e) => (builderTokens = { ...builderTokens, [f.key]: e.currentTarget.value })}
                    class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"
                    title="{f.label} color"
                    aria-label="{f.label} color"
                  />
                  <input
                    value={builderTokens[f.key]}
                    oninput={(e) => (builderTokens = { ...builderTokens, [f.key]: e.currentTarget.value })}
                    class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)"
                    spellcheck="false"
                    aria-label="{f.label} hex"
                  />
                </span>
              </label>
            {/each}
          </div>
          <div class="mt-3 flex flex-wrap gap-2">
            <button
              class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
              title="Copy the active theme's colors into the builder"
              onclick={cloneCurrentTheme}
            >
              Clone active theme
            </button>
            <button
              class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
              onclick={saveTheme}
            >
              Save theme
            </button>
          </div>
        </div>

        <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3>
        <div class="mt-2">
          <textarea
            bind:value={themeJson}
            rows="5"
            spellcheck="false"
            class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
            placeholder="Paste an exported theme JSON here"
            aria-label="Theme JSON"
          ></textarea>
          <div class="mt-2 flex gap-2">
            <button
              class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
              title="Writes the builder draft into the field"
              onclick={exportTheme}
            >
              ⤒ Export draft
            </button>
            <button
              class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
              title="Saves the JSON in the field as a custom theme and applies it"
              onclick={importTheme}
            >
              ⤓ Import from JSON
            </button>
          </div>
        </div>
        {#if customMsg}
          <p class="mt-2 text-[12px] text-(--text-muted)">{customMsg}</p>
        {/if}
      {:else if section === 'java'}
        <h2 class="text-[16px] font-semibold">Java &amp; Memory</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          Which JVM runs the game and how much memory it gets.
        </p>

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3>
        <select
          class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"
          bind:value={javaPath}
        >
          <option value="">Auto-discovery (recommended)</option>
          {#each runtimes as r (r.executable)}
            <option value={r.executable}>Java {r.major} — {r.home}</option>
          {/each}
        </select>
        {#if !runtimes.length}
          <p class="mt-2 text-[12px] text-(--text-muted)">
            {scanning ? 'Probing system roots…' : 'No runtimes detected.'}
          </p>
        {/if}
        {#if javaError}
          <p class="mt-2 text-[12px] text-rose-400">{javaError}</p>
        {/if}
        <button
          class="mt-3 text-[12px] text-(--text-muted) hover:text-(--text-main)"
          disabled={scanning}
          onclick={onscanjava}
        >
          ↻ Rescan JREs
        </button>

        <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3>
        <div class="mt-3 flex items-center gap-3">
          <span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span>
          <input type="range" min="0" max="16384" step="256" bind:value={minMem} class="flex-1 accent-[var(--accent)]" />
          <input
            type="number"
            min="0"
            max="65536"
            step="256"
            bind:value={minMem}
            class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"
          />
          <span class="w-8 text-[11px] text-(--text-muted)">MiB</span>
        </div>
        <div class="mt-3 flex items-center gap-3">
          <span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span>
          <input type="range" min="0" max="16384" step="256" bind:value={maxMem} class="flex-1 accent-[var(--accent)]" />
          <input
            type="number"
            min="0"
            max="65536"
            step="256"
            bind:value={maxMem}
            class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"
          />
          <span class="w-8 text-[11px] text-(--text-muted)">MiB</span>
        </div>
        <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p>

        <button
          class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"
          onclick={onsaveprefs}
        >
          Save Java settings
        </button>
      {:else if section === 'storage'}
        <h2 class="text-[16px] font-semibold">Storage &amp; Staging</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">
          Where the shared artifact library lives and where launch scratch files stage.
        </p>

        {#if storage}
          <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4">
            <div class="text-[12px] font-medium">Shared library <span class="font-normal text-(--text-muted)">{storage.is_default_shared ? '(default)' : '(custom)'}</span></div>
            <div class="mt-3 flex gap-2">
              <input
                class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
                placeholder={storage.shared_dir}
                bind:value={sharedInput}
              />
              <button
                class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                title="Pick the shared libraries directory"
                onclick={async () => {
                  const picked = await browseDir(sharedInput);
                  if (picked) sharedInput = picked;
                }}
              >
                Browse…
              </button>
              <button
                class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
                disabled={storageBusy}
                onclick={onsaveshared}
              >
                Save
              </button>
              {#if !storage.is_default_shared}
                <button
                  class="rounded px-4 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40"
                  disabled={storageBusy}
                  onclick={onresetshared}
                >
                  Reset
                </button>
              {/if}
            </div>
          </div>

          <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4">
            <div class="text-[12px] font-medium">Instances library <span class="font-normal text-(--text-muted)">{storage.is_default_instances ? '(default)' : '(override)'}</span></div>
            <div class="mt-3 flex gap-2">
              <input
                class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"
                placeholder={storage.instances_dir}
                bind:value={instancesInput}
              />
              <button
                class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)"
                title="Pick the instances directory"
                onclick={async () => {
                  const picked = await browseDir(instancesInput);
                  if (picked) instancesInput = picked;
                }}
              >
                Browse…
              </button>
              <button
                class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"
                disabled={storageBusy}
                title="Rescans the grid from this directory"
                onclick={onsaveinstances}
              >
                Save
              </button>
              {#if !storage.is_default_instances}
                <button
                  class="rounded px-4 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40"
                  disabled={storageBusy}
                  onclick={onresetinstances}
                >
                  Reset
                </button>
              {/if}
            </div>
            <p class="mt-2 text-[11px] text-(--text-muted)">
              Without an override the grid adopts an existing Prism or FreesmLauncher library when one is present.
            </p>
          </div>

          <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4">
            <div class="flex items-center justify-between gap-3">
              <div class="min-w-0">
                <div class="text-[12px] font-medium">Staging area</div>
                <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)" title={storage.staging_root}>
                  {storage.staging_root}
                </div>
              </div>
              <button
                class="shrink-0 rounded px-4 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40"
                disabled={storageBusy || gameRunning}
                title={gameRunning ? 'Unavailable while a game is running' : 'Purges the staging area'}
                onclick={oncleanstaging}
              >
                Purge staging
              </button>
            </div>
          </div>
        {/if}
      {:else}
        <h2 class="text-[16px] font-semibold">About &amp; Updates</h2>
        <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p>

        <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4">
          <div class="flex items-center gap-2">
            <img src="/logo.png" alt="" draggable="false" class="h-10 w-10" />
            <div>
              <div class="text-[13px] font-semibold">TwilightMC <span class="font-normal text-(--text-muted)">v{version}</span></div>
              <div class="mt-0.5 text-[12px] text-(--text-muted)">
                pre-release UI · snapshot channel (built from every push)
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 flex flex-col items-start gap-2">
          <button class="text-[12px] text-(--accent) hover:underline" onclick={() => onopenurl?.(`${REPO}`)}>
            ↗ GitHub repository
          </button>
          <button class="text-[12px] text-(--accent) hover:underline" onclick={() => onopenurl?.(`${REPO}/releases`)}>
            ↗ Releases (stable builds)
          </button>
          <button class="text-[12px] text-(--accent) hover:underline" onclick={() => onopenurl?.(`${REPO}/issues`)}>
            ↗ Report an issue
          </button>
        </div>
        <p class="mt-6 text-[12px] text-(--text-muted)">
          An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.
        </p>
      {/if}

      {#if javaMsg || storageMsg}
        <p class="mt-5 text-[12px] {javaMsg ? 'text-(--accent)' : 'text-(--text-muted)'}">{javaMsg || storageMsg}</p>
      {/if}
    </div>
  </div>
</div>
