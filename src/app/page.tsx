import Image from "next/image";
import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { Gate } from "@/components/Gate";
import { Registry, ResumeLink } from "@/components/Registry";
import { MobileMenu } from "@/components/MobileMenu";
import { Shelf } from "@/components/Shelf";
import { CordFliers } from "@/components/CordFliers";
import { Companion } from "@/components/Companion";
import { Tassel } from "@/components/Tassel";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Night } from "@/components/Night";
import { Timecode } from "@/components/Timecode";
import { HellButterflies } from "@/components/HellButterflies";
import { Contributions } from "@/components/Contributions";
import { TechLogo } from "@/components/TechLogo";
import { StackSway } from "@/components/StackSway";
import { Butterfly } from "@/components/Butterfly";

// a part of About's own stretch of the gate's passage, from --a to --b (see .about-k)
const k = (a: number, b: number) => ({ "--a": a, "--b": b }) as CSSProperties;

// a butterfly's flight in: its stretch of the passage, where it comes from (dx, dy) and its heading
const fly = (a: number, b: number, dx: string, dy: string, sway: string, turn: string) =>
  ({ ...k(a, b), "--dx": dx, "--dy": dy, "--sway": sway, "--turn": turn }) as CSSProperties;

// schema.org data for search engines: who the site is about, and the profiles that are also them
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      image: site.about.portrait ? `${site.url}${site.about.portrait}` : undefined,
      jobTitle: site.role,
      description: site.tagline,
      email: `mailto:${site.email}`,
      sameAs: [`https://github.com/${site.github}`, ...site.socials.map((s) => s.href)],
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: `${site.name} — Portfolio`, about: { "@id": `${site.url}/#person` } },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <a className="skip" href="#about">
        Skip to the content
      </a>

      <div className="bar">
        <div className="bar-start">
          <a className="bar-name" href="#gate">
            {site.name}
          </a>
          <ThemeToggle id="moon-bar" />
        </div>
        <Registry />
        <MobileMenu />
      </div>

      <Night />
      <Timecode />
      <Companion />
      <HellButterflies />

      <Gate />

      <main>
        <section id="about" className="about" aria-label="About">
          <div className="about-stage">
            <span className="about-fly about-fly-1 about-k" style={fly(0.56, 0.78, "-18vw", "-80vh", "-6vw", "-160deg")} aria-hidden="true">
              <Butterfly />
            </span>
            <figure className="portrait about-k" style={k(0.72, 0.86)}>
              {site.about.portrait ? (
                <Image src={site.about.portrait} alt={`Portrait of ${site.name}`} fill sizes="(min-width: 901px) 34vw, 360px" loading="eager" />
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

        <section id="work" className="dangai" aria-labelledby="work-title">
          <h2 id="work-title" className="dangai-title">
            Projects
          </h2>
          <Shelf projects={site.projects} />
        </section>

        <div className="thread">
          {/* a group of ink butterflies rides the tip of the cord as it draws */}
          <CordFliers />

          <section id="path" className="path" aria-labelledby="path-title">
            <h2 id="path-title">Experience</h2>
            <ol className="path-cord">
              {site.experience.map((r) => (
                <li key={r.id}>
                  <span className="path-knot" aria-hidden="true" />
                  <div className="path-body">
                    <h3>
                      {r.title}
                      <span>{r.org}</span>
                    </h3>
                    <p className="path-summary">{r.summary}</p>
                  </div>
                  <p className="path-period">{r.period}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="stack" className="stack" aria-labelledby="stack-title">
            <h2 id="stack-title">Technologies</h2>
            <p className="stack-intro">{site.technologiesIntro}</p>
            <div className="stack-groups">
              {site.technologies.map((g) => (
                <div key={g.label} className="stack-group">
                  <h3>{g.label}</h3>
                  <ul>
                    {g.items.map((item) => (
                      <li key={item}>
                        <span className="hang">
                          <span className="gust">
                            <span className="strip">
                              <TechLogo name={item} />
                              {item}
                            </span>
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {site.technologiesPlaceholder && (
                <p className="placeholder-note">Placeholder technologies</p>
              )}
            </div>
            <StackSway />
          </section>
        </div>

        <Contributions />
      </main>

      <footer id="close" className="close">
        <div className="close-door close-door-l" aria-hidden="true" />
        <div className="close-door close-door-r" aria-hidden="true" />
        <div className="close-center">
          <Tassel className="close-tassel" />
          <h2>Let&apos;s talk.</h2>
          <div className="close-actions">
            {site.contactHref ? (
              <a className="close-contact" href={site.contactHref}>
                Get in touch
              </a>
            ) : (
              <span className="close-contact pending">Contact method, add later</span>
            )}
            <ResumeLink variant="close" />
          </div>
          <a className="close-email" href={`mailto:${site.email}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" />
              <path d="m3 6 9 7 9-7" />
            </svg>
            {site.email}
          </a>
          <ul className="close-links">
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="close-credit">
            Inspired by <cite>Bleach</cite> by Tite Kubo. Everything drawn here is original; this
            site is not affiliated with the series.
          </p>
        </div>
      </footer>
    </>
  );
}
