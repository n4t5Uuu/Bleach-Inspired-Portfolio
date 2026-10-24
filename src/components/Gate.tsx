import { site } from "@/content/site";
import { Butterfly } from "./Butterfly";
import { Registry, ResumeLink } from "./Registry";
import { GateMotion } from "./GateMotion";
import { GateVerse } from "./GateVerse";

export function Gate() {
  return (
    <header id="gate" className="gate">
      <div className="gate-stage">
        <div className="gate-lintel">
          <div className="gate-id">
            <h1>{site.name}</h1>
            <p className="gate-role">{site.role}</p>
            <p className="gate-tagline">
              {site.tagline}
              {site.taglinePlaceholder && <span className="placeholder-note"> Placeholder</span>}
            </p>
          </div>
          <Registry />
        </div>

        <div className="gate-frame">
          <div className="gate-dangai" aria-hidden="true">
            <span className="gate-dangai-n">01</span>
          </div>

          <GateVerse verses={site.verses} part="sr" />
          {/* without JavaScript nothing picks a verse, so show the first one */}
          <noscript>
            <style>{`.gate-verse[data-ready="false"] { opacity: 1; }`}</style>
          </noscript>

          <div className="gate-door gate-door-l">
            <GateVerse verses={site.verses} part="left" />
            {site.versePlaceholder && <p className="placeholder-note gate-note">Placeholder verse</p>}
          </div>

          <div className="gate-door gate-door-r">
            <GateVerse verses={site.verses} part="right" />
            <div className="gate-tag">
              <ResumeLink variant="tag" />
            </div>
          </div>

          <div className="gate-seam" aria-hidden="true" />

          <a className="gate-cord" href="#work">
            <span className="gate-cord-line" aria-hidden="true" />
            <svg className="gate-cord-tassel" viewBox="0 0 40 112" aria-hidden="true" focusable="false">
              <path className="tassel-cap" d="M20 0c7 0 12 5 12 12v10H8V12C8 5 13 0 20 0Z" />
              <rect className="tassel-knot" x="6" y="22" width="28" height="9" rx="3" />
              <path className="tassel-fringe" d="M9 33h22l5 75H4Z" />
              <path
                className="tassel-strands"
                d="M12 36l-3 70M16 36l-1 70M20 36v70M24 36l1 70M28 36l3 70"
              />
            </svg>
            <span className="gate-cord-label">Open the gate to the work</span>
          </a>

          <Butterfly className="drift drift-a" />
          <Butterfly className="drift drift-b" />
        </div>

        <div className="gate-black" aria-hidden="true" />
      </div>
      <GateMotion />
    </header>
  );
}
