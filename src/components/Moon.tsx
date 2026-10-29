// An original moon: a disc with a shade circle masked across it. Theme CSS slides the shade
// to leave a crescent (dark mode) or clears it for a full moon (light mode).
export function Moon({ id, toneId, className }: { id: string; toneId?: string; className?: string }) {
  return (
    <svg className={className ? `moon ${className}` : "moon"} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs>
        <mask id={id}>
          <rect width="100" height="100" fill="#fff" />
          <circle className="moon-shade" cx="50" cy="50" r="45" fill="#000" />
        </mask>
        {toneId && (
          // a halftone screen, like the tone on a printed manga page
          <pattern id={toneId} width="2" height="2" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.42" />
          </pattern>
        )}
      </defs>
      <g mask={`url(#${id})`}>
        <circle className="moon-disc" cx="50" cy="50" r="44" />
        {/* its seas and craters, darker patches that only show where the moon is lit */}
        <g className="moon-maria">
          {/* the seas: broad and soft */}
          <g fillOpacity="0.5">
            <ellipse cx="40" cy="36" rx="15" ry="11" transform="rotate(-20 40 36)" />
            <ellipse cx="60" cy="60" rx="12" ry="9" transform="rotate(25 60 60)" />
            <circle cx="31" cy="63" r="7" />
          </g>
          {/* the craters: small and sharper */}
          <circle cx="67" cy="31" r="4.5" />
          <circle cx="75" cy="48" r="3" />
          <circle cx="48" cy="78" r="3.5" />
          <circle cx="21" cy="45" r="2.5" />
          <circle cx="56" cy="20" r="1.8" />
          <circle cx="80" cy="64" r="2" />
        </g>
      </g>
    </svg>
  );
}
