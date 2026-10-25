import { site } from "@/content/site";
import { Butterfly } from "./Butterfly";
import { Registry, ResumeLink } from "./Registry";
import { GateMotion } from "./GateMotion";
import { GateVerse } from "./GateVerse";
import { Tassel } from "./Tassel";

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
            <Tassel className="gate-cord-tassel" />
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
