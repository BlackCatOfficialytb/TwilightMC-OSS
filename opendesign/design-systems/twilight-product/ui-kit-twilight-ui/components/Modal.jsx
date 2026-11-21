// Modal — black 60% scrim (no blur) + centered surface panel with hairline
// border. The panel carries the system's one shadow (inherited shadow-2xl).
// Standard widths: 380 confirm · 520 settings · 640 edit-instance · 720
// browser. Embed inside a sized, position:relative container.
function Modal({ width = 520, children }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--scrim)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width,
          maxHeight: "100%",
          overflow: "hidden",
          background: "var(--bg-2)",
          border: "1px solid var(--border-1)",
          borderRadius: 8,
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.45)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
