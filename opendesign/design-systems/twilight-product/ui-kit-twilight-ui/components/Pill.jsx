// Pill — 10px uppercase tracked micro-label. Grounds: brand tint (light
// loader families), star tint (heavy loaders / warnings), neutral well
// (versions and everything else).
function Pill({ tone = "neutral", children }) {
  const grounds = {
    brand: { background: "var(--brand-tint)", color: "var(--accent-1)" },
    star: { background: "var(--star-tint)", color: "var(--accent-2)" },
    neutral: { background: "var(--bg-3)", color: "var(--fg-2)" },
  };
  return (
    <span
      style={{
        ...grounds[tone],
        fontFamily: "var(--font-sans)",
        fontSize: "var(--step-caption)",
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        borderRadius: 999,
        padding: "2px 8px",
        lineHeight: 1.4,
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
