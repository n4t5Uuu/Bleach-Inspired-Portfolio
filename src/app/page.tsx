import { site } from "@/content/site";
import { VolumeFocus } from "@/components/VolumeFocus";

const volumeNumber = (i: number) => String(i + 1).padStart(2, "0");

export default function Home() {
  return (
    <>
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
      </main>
    </>
  );
}
