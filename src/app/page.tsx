import Image from "next/image";
import { site } from "@/content/site";
import { Gate } from "@/components/Gate";
import { Registry, ResumeLink } from "@/components/Registry";
import { Shelf } from "@/components/Shelf";
import { Companion } from "@/components/Companion";
import { Tassel } from "@/components/Tassel";

export default function Home() {
  return (
    <>
      <a className="skip" href="#about">
        Skip to the content
      </a>

      <div className="bar">
        <a className="bar-name" href="#gate">
          {site.name}
        </a>
        <Registry />
      </div>

      <Companion />

      <Gate />

      <main>
        <section id="about" className="about" aria-label="About">
          <div className="scroll">
            <div className="scroll-paper">
              <header className="about-id">
                <h1>{site.name}</h1>
                <p className="about-role">{site.role}</p>
                <p className="about-tagline">
                  {site.tagline}
                  {site.taglinePlaceholder && <span className="placeholder-note"> Placeholder</span>}
                </p>
              </header>
              <div className="about-grid">
                <figure className="portrait">
                  {site.about.portrait ? (
                    <Image src={site.about.portrait} alt={`Portrait of ${site.name}`} fill sizes="320px" />
                  ) : (
                    <div className="portrait-empty">
                      <span>Portrait</span>
                      <span className="placeholder-note">Placeholder portrait</span>
                    </div>
                  )}
                </figure>
                <div>
                  <p className="about-lead">{site.about.lead}</p>
                  <dl className="about-facts">
                    {site.about.facts.map((f) => (
                      <div key={f.label}>
                        <dt>{f.label}</dt>
                        <dd>{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                  {site.aboutPlaceholder && (
                    <p className="placeholder-note">Placeholder biography</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="dangai" aria-labelledby="work-title">
          <h2 id="work-title" className="dangai-title">
            Projects
          </h2>
          <Shelf projects={site.projects} placeholder={site.projectsPlaceholder} />
        </section>

        <div className="thread">
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
            <div className="stack-groups">
              {site.technologies.map((g) => (
                <div key={g.label} className="stack-group">
                  <h3>{g.label}</h3>
                  <ul>
                    {g.items.map((item) => (
                      <li key={item}>
                        <span className="strip">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {site.technologiesPlaceholder && (
                <p className="placeholder-note">Placeholder technologies</p>
              )}
            </div>
          </section>
        </div>
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
          <p className="close-credit">
            Inspired by <cite>Bleach</cite> by Tite Kubo. Everything drawn here is original; this
            site is not affiliated with the series.
          </p>
        </div>
      </footer>
    </>
  );
}
