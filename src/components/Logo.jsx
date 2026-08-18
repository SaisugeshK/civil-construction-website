export default function Logo({ variant = "dark", className = "h-10 w-10" }) {
  const mark = variant === "light" ? "#ffffff" : "#2FA968";

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 3 92 27v46L50 97 8 73V27z"
        fill="none"
        stroke={mark}
        strokeWidth="4"
      />
      <path fill={mark} d="M30 62 50 30l20 32h-11L50 47 40.5 62z" />
      <rect x="30" y="66" width="40" height="6" fill={mark} />
    </svg>
  );
}

export function Wordmark({ variant = "dark", className = "" }) {
  const textColor = variant === "light" ? "text-white" : "text-ink-900";
  const subColor = variant === "light" ? "text-white/70" : "text-ink-400";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo variant={variant} className="h-9 w-9 shrink-0" />
      <div className="leading-none">
        <div className={`font-display text-xl tracking-wide ${textColor}`}>
          MERIDIAN
        </div>
        <div className={`text-[0.6rem] tracking-[0.35em] font-medium ${subColor}`}>
          CONSTRUCTION
        </div>
      </div>
    </div>
  );
}
