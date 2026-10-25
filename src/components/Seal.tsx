import { site } from "@/content/site";

// An original hanko-style seal: a vermilion disc stamped with the owner's initials.
export function Seal() {
  return (
    <svg className="seal" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <defs>
        <filter id="seal-rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" />
        </filter>
      </defs>
      <g filter="url(#seal-rough)">
        <circle className="seal-disc" cx="60" cy="60" r="56" />
        <circle className="seal-ring" cx="60" cy="60" r="47" />
        <text className="seal-text" x="60" y="77" textAnchor="middle">
          {site.initials}
        </text>
      </g>
    </svg>
  );
}
