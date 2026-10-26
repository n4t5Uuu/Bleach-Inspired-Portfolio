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
      <circle className="moon-disc" cx="50" cy="50" r="44" mask={`url(#${id})`} />
    </svg>
  );
}
