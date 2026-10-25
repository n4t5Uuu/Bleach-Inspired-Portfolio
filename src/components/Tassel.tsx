// The vermilion tassel that opens the gate and closes the page.
export function Tassel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 112" aria-hidden="true" focusable="false">
      <path d="M20 0c7 0 12 5 12 12v10H8V12C8 5 13 0 20 0Z" />
      <rect className="tassel-knot" x="6" y="22" width="28" height="9" rx="3" />
      <path d="M9 33h22l5 75H4Z" />
      <path
        className="tassel-strands"
        d="M12 36l-3 70M16 36l-1 70M20 36v70M24 36l1 70M28 36l3 70"
      />
    </svg>
  );
}
