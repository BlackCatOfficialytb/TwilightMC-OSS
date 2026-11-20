<script>
  // Thin overlay shell around the two account surfaces — SignInPanels (the
  // four sign-in tabs) and AccountList (the saved rows + texture editor).
  // All sign-in/list state lives in those components; this shell only owns
  // the modal chrome (backdrop, Escape handling, close button) so the same
  // surfaces can also live on the dedicated Accounts page.
  import { onMount } from 'svelte';
  import { pushOverlay, popOverlay } from './overlays.js';
  import SignInPanels from './SignInPanels.svelte';
  import AccountList from './AccountList.svelte';
  import { t } from './i18n.svelte.ts';

  let { accounts = [], active = null, onclose, onrefresh } = $props();

  onMount(() => {
    const closer = pushOverlay(() => onclose?.());
    return () => popOverlay(closer);
  });
</script>

<!-- backdrop click closes; panel click does not -->
<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  role="presentation"
  onclick={(e) => {
    if (e.target === e.currentTarget) onclose?.();
  }}
  onkeydown={(e) => e.key === 'Escape' && onclose?.()}
>
  <div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl">
    <div class="flex items-center justify-between border-b border-(--border) px-4 py-3">
      <h3 class="text-sm font-semibold">{t('nav-accounts')}</h3>
      <button class="text-(--text-muted) hover:text-(--text-main)" onclick={() => onclose?.()}>✕</button>
    </div>

    <div class="min-h-0 flex-1 overflow-y-auto">
      <SignInPanels {onrefresh} />

      <!-- saved accounts -->
      <div class="border-t border-(--border)">
        <AccountList {accounts} {active} {onrefresh} />
      </div>
    </div>
  </div>
</div>
