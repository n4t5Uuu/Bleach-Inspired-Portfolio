import { site } from "@/content/site";
import { Gate } from "@/components/Gate";
import { Registry, ResumeLink } from "@/components/Registry";
import { VolumeFocus } from "@/components/VolumeFocus";
import { Companion } from "@/components/Companion";

const volumeNumber = (i: number) => String(i + 1).padStart(2, "0");

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to the projects
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
        <section id="work" className="dangai" aria-labelledby="work-title">
          <div className="dangai-head">
            <h2 id="work-title" className="dangai-title">
              Projects
            </h2>
            <ol className="index">
              {site.projects.map((p, i) => (
                <li key={p.slug}>
                  <a href={`#${p.slug}`}>
                    <span className="index-n">{volumeNumber(i)}</span>
                    <span className="index-title">{p.title}</span>
                    <span className="index-stack">{p.stack.join(" · ")}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {site.projects.map((p, i) => {
            const n = volumeNumber(i);
            return (
              <article
                key={p.slug}
                id={p.slug}
                className="volume"
                aria-labelledby={`${p.slug}-title`}
              >
                {/* the volume's poem belongs on its cover */}
                <div className="volume-cover">
                  <span className="volume-n" aria-hidden="true">
                    {n}
                  </span>
                  <span className="volume-spine" aria-hidden="true">
                    {p.title}
                  </span>
                  <p className="volume-verse">{p.verse}</p>
                  {site.projectsPlaceholder && (
                    <span className="placeholder-note">Placeholder cover</span>
                  )}
                </div>

                <div className="volume-text">
                  <h3 id={`${p.slug}-title`}>
                    <span className="sr-only">Volume {n}: </span>
                    {p.title}
                  </h3>
                  <p className="volume-stack">{p.stack.join(" · ")}</p>
                  <p className="volume-summary">{p.summary}</p>
                  <dl className="volume-meta">
                    <div>
                      <dt>Role</dt>
                      <dd>{p.role}</dd>
                    </div>
                    <div>
                      <dt>Year</dt>
                      <dd>{p.year}</dd>
                    </div>
                  </dl>
                  <p className="volume-links">
                    {p.caseStudyUrl ? (
                      <a className="strike" href={p.caseStudyUrl}>
                        Read the case study<span className="sr-only"> for {p.title}</span>
                      </a>
                    ) : (
                      <span className="pending">Case study, add later</span>
                    )}
                    {p.liveUrl ? (
                      <a className="strike" href={p.liveUrl}>
                        Live site<span className="sr-only"> for {p.title}</span>
                      </a>
                    ) : (
                      <span className="pending">Live link, add later</span>
                    )}
                    {p.sourceUrl ? (
                      <a className="strike" href={p.sourceUrl}>
                        Source<span className="sr-only"> for {p.title}</span>
                      </a>
                    ) : (
                      <span className="pending">Source link, add later</span>
                    )}
                  </p>
                </div>
              </article>
            );
          })}
          <VolumeFocus />
        </section>

        <section id="path" className="path" aria-labelledby="path-title">
          <h2 id="path-title">Experience</h2>
          <ol className="path-cord">
            {site.experience.map((r) => (
              <li key={r.id}>
                <span className="path-knot" aria-hidden="true" />
                <h3>
                  {r.title}
                  <span>{r.org}</span>
                </h3>
                <p className="path-period">{r.period}</p>
                <p className="path-summary">{r.summary}</p>
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
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {site.technologiesPlaceholder && (
              <p className="placeholder-note">Placeholder technologies</p>
            )}
          </div>
        </section>

        <section id="about" className="about" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          <p className="about-lead">{site.about.lead}</p>
          <dl className="about-facts">
            {site.about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          {site.aboutPlaceholder && <p className="placeholder-note">Placeholder biography</p>}
        </section>
      </main>

      <footer id="close" className="close">
        <h2>{site.resumeHref ? "Take the resume with you." : "The resume is on its way."}</h2>
        <div className="close-actions">
          <ResumeLink variant="close" />
          {site.contactHref ? (
            <a className="close-contact strike" href={site.contactHref}>
              Get in touch
            </a>
          ) : (
            <span className="close-contact pending">Contact method, add later</span>
          )}
        </div>
        <p className="close-credit">
          Inspired by <cite>Bleach</cite> by Tite Kubo. Everything drawn here is original; this site
          is not affiliated with the series.
        </p>
      </footer>
    </>
  );
}
