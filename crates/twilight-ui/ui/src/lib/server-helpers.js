// Shared formatting helpers for the server control panel tabs.

/** Bytes → compact human size (`1.2 GiB`, `340 MiB`, `12 KiB`). */
export function formatBytes(bytes) {
  const b = Number(bytes) || 0;
  if (b >= 1024 * 1024 * 1024) return `${(b / (1024 * 1024 * 1024)).toFixed(1)} GiB`;
  if (b >= 1024 * 1024) return `${(b / (1024 * 1024)).toFixed(1)} MiB`;
  if (b >= 1024) return `${(b / 1024).toFixed(1)} KiB`;
  return `${b} B`;
}

/** Unix seconds → `1d 04:23:59` style uptime. */
export function formatUptime(secs) {
  const s = Math.max(0, Math.floor(Number(secs) || 0));
  const days = Math.floor(s / 86_400);
  const h = String(Math.floor((s % 86_400) / 3_600)).padStart(2, '0');
  const m = String(Math.floor((s % 3_600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return days > 0 ? `${days}d ${h}:${m}:${sec}` : `${h}:${m}:${sec}`;
}

/** Unix seconds → localized date-time. */
export function formatTimestamp(secs) {
  const s = Number(secs) || 0;
  if (!s) return '—';
  return new Date(s * 1000).toLocaleString();
}
