// Button — three intents from the shipped codebase grammar.
// primary: solid cyan + dark ink | ghost: muted, well-fill hover | danger: rose ghost.
function Button({ children, variant = "ghost", size = "md", disabled, title, onClick }) {
  const base = {
    fontFamily: "var(--font-sans)",
    borderRadius: 4,
    border: "none",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.4 : 1,
    fontSize: "var(--step-body)",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: size === "sm" ? "4px 10px" : "6px 12px",
  };
  const skins = {
    primary: { background: "var(--accent-1)", color: "var(--on-accent)" },
    ghost: { background: "transparent", color: "var(--fg-2)" },
    danger: { background: "transparent", color: "#fb7185" },
  };
  const hovers = {
    primary: "var(--accent-1-hover)",
    ghost: "var(--bg-3)",
    danger: "rgba(244,63,94,0.1)",
  };
  return (
    <button
      title={title}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.background = hovers[variant]; if (variant === "ghost") e.currentTarget.style.color = "var(--fg-1)"; } }}
      onMouseLeave={(e) => { e.currentTarget.style.background = skins[variant].background; if (variant === "ghost") e.currentTarget.style.color = "var(--fg-2)"; }}
    >
      {children}
    </button>
  );
}
