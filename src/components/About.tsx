import Image from "next/image";
import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { Butterfly } from "./Butterfly";

// a part of About's own stretch of the gate's passage, from --a to --b (see .about-k)
const k = (a: number, b: number) => ({ "--a": a, "--b": b }) as CSSProperties;

// a butterfly's flight in: its stretch of the passage, where it comes from (dx, dy) and its heading
const fly = (a: number, b: number, dx: string, dy: string, sway: string, turn: string) =>
  ({ ...k(a, b), "--dx": dx, "--dy": dy, "--sway": sway, "--turn": turn }) as CSSProperties;

// What the gate opens onto: the portrait and the reading, brought in by the gate's butterflies.
export function About() {
  return (
    <section id="about" className="about" aria-label="About">
      <div className="about-stage">
        <span className="about-fly about-fly-1 about-k" style={fly(0.56, 0.78, "-18vw", "-80vh", "-6vw", "-160deg")} aria-hidden="true">
          <Butterfly />
        </span>
        <figure className="portrait about-k" style={k(0.72, 0.86)}>
          {site.about.portrait ? (
            <Image src={site.about.portrait} alt={`Portrait of ${site.name}`} fill sizes="(min-width: 901px) 34vw, 260px" loading="eager" />
          ) : (
            <div className="portrait-empty">
              <span>Portrait</span>
              <span className="placeholder-note">Placeholder portrait</span>
            </div>
          )}
        </figure>
        <div className="about-text">
          <header className="about-id about-k" style={k(0.78, 0.92)}>
            <span className="about-fly about-fly-2 about-k" style={fly(0.6, 0.84, "22vw", "-85vh", "5vw", "150deg")} aria-hidden="true">
              <Butterfly />
            </span>
            <h1>{site.name}</h1>
            <p className="about-role">{site.role}</p>
          </header>
          <p className="about-lead about-k" style={k(0.82, 0.92)}>{site.about.lead}</p>
          <p className="about-body about-k" style={k(0.84, 0.94)}>{site.about.body}</p>
          <dl className="about-facts about-k" style={k(0.86, 0.96)}>
            {site.about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="about-open about-k" style={k(0.88, 0.98)}>
            <span className="about-fly about-fly-3 about-k" style={fly(0.64, 0.9, "-30vw", "-95vh", "8vw", "-170deg")} aria-hidden="true">
              <Butterfly />
            </span>
            <span>Open to</span>
            <b>{site.about.openTo}</b>
          </p>
          <p className="about-tagline about-k" style={k(0.88, 0.98)}>
            {site.tagline}
            {site.taglinePlaceholder && <span className="placeholder-note"> Placeholder</span>}
          </p>
          {site.aboutPlaceholder && <p className="placeholder-note">Placeholder biography</p>}
        </div>
      </div>
    </section>
  );
}
