// fly: where it goes when the gate opens, as "dx,dy" in vw and vh (read by GateMotion)
type Props = { className?: string; fly?: string };

// Original ink butterfly, a nod to the guides that cross between worlds.
export function Butterfly({ className, fly }: Props) {
  return (
    <svg className={className} data-fly={fly} viewBox="0 0 48 36" aria-hidden="true" focusable="false">
      <g className="wing wing-l">
        <path d="M23 17C17 4 5-1 2 4c-3 6 6 13 21 13Z" />
        <path d="M23 19C13 19 5 25 7 31c2 5 11 1 16-12Z" />
      </g>
      <g className="wing wing-r">
        <path d="M25 17C31 4 43-1 46 4c3 6-6 13-21 13Z" />
        <path d="M25 19c10 0 18 6 16 12-2 5-11 1-16-12Z" />
      </g>
      <path className="body" d="M23 12h2v16h-2z" />
    </svg>
  );
}
