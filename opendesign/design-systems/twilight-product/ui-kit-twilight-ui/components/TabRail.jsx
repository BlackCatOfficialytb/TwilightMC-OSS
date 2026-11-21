// TabRail — left rail of the edit-instance sheet: active tab gets the brand
// tint fill + accent text; inactive tabs are muted and hover to primary text.
// Optional per-tab counts and a bottom-pinned Close entry.
function TabRail({ tabs, active, counts = {}, onSelect, onClose }) {
  return (
    <div
      style={{
        width: 176,
        flex: "none",
        alignSelf: "stretch",
        background: "var(--bg-3)",
        borderRight: "1px solid var(--border-1)",
        padding: 8,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <button
            key={t.id}
            onClick={() => onSelect && onSelect(t.id)}
            style={{
              textAlign: "left",
              border: "none",
              cursor: "pointer",
              borderRadius: 4,
              padding: "6px 8px",
              fontSize: "var(--step-body)",
              fontFamily: "var(--font-sans)",
              background: on ? "var(--brand-tint)" : "transparent",
              color: on ? "var(--accent-1)" : "var(--fg-2)",
              fontWeight: on ? 500 : 400,
            }}
          >
            {t.label}
            {counts[t.id] != null ? (
              <span style={{ opacity: 0.7 }}> ({counts[t.id]})</span>
            ) : null}
          </button>
        );
      })}
      {onClose ? (
        <button
          onClick={onClose}
          style={{
            marginTop: "auto",
            textAlign: "left",
            border: "none",
            cursor: "pointer",
            borderRadius: 4,
            padding: "6px 8px",
            fontSize: "var(--step-body)",
            fontFamily: "var(--font-sans)",
            background: "transparent",
            color: "var(--fg-2)",
          }}
        >
          Close
        </button>
      ) : null}
    </div>
  );
}
