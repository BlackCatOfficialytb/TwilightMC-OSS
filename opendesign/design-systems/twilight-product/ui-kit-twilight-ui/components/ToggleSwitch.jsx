// ToggleSwitch — 36×20 pill, 14px knob. On: cyan track, knob parked right;
// off: canvas ground, knob parked left. Disabled renders at 40% and ignores
// clicks. 120ms background transition, no knob travel animation.
function ToggleSwitch({ on = false, disabled = false, label, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      onClick={() => {
        if (!disabled && onChange) onChange(!on);
      }}
      style={{
        width: 36,
        height: 20,
        borderRadius: 999,
        padding: 3,
        boxSizing: "border-box",
        border: "1px solid var(--border-1)",
        background: on ? "var(--accent-1)" : "var(--bg-1)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: on ? "flex-end" : "flex-start",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "background 120ms ease",
      }}
    >
      <span style={{ width: 14, height: 14, borderRadius: 999, background: "var(--bg-2)" }} />
    </button>
  );
}
