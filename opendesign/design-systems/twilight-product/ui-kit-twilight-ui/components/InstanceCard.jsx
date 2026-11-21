// InstanceCard — the grid unit: surface card, hairline border; hover turns
// the border cyan and reveals a ▶ Play scrim (canvas at 80%). Selected keeps
// the cyan border without hovering. Icon chip 36px on brand tint; name
// 13px/500 truncated; version + loader pills; last-played meta line.
function InstanceCard({
  name,
  version,
  loader,
  loaderTone = "brand",
  lastPlayed,
  icon = "⌗",
  selected = false,
  onPlay,
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        width: 260,
        padding: 12,
        borderRadius: 8,
        background: "var(--bg-2)",
        border:
          "1px solid " +
          (hover || selected ? "var(--accent-1)" : "var(--border-1)"),
        transition: "border-color 120ms ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            flex: "none",
            borderRadius: 6,
            background: "var(--brand-tint)",
            color: "var(--accent-1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
          }}
        >
          {icon}
        </div>
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: "var(--step-card)",
              fontWeight: 500,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 3 }}>
            <Pill tone="neutral">{version}</Pill>
            <Pill tone={loaderTone}>{loader}</Pill>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 10, fontSize: "var(--step-meta)", color: "var(--fg-2)" }}>
        {lastPlayed}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "color-mix(in srgb, var(--bg-1) 80%, transparent)",
          opacity: hover ? 1 : 0,
          transition: "opacity 150ms ease",
          pointerEvents: hover ? "auto" : "none",
        }}
      >
        <button
          onClick={onPlay}
          style={{
            background: "var(--accent-1)",
            color: "var(--on-accent)",
            border: "none",
            borderRadius: 4,
            padding: "6px 14px",
            fontSize: "var(--step-body)",
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "var(--font-sans)",
          }}
        >
          ▶ Play
        </button>
      </div>
    </div>
  );
}
