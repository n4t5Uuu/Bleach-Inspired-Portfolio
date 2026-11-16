import Image from "next/image";
import type { Project } from "@/content/site";

export type Shot = NonNullable<Project["images"]>[number];

type Props = { project: Project; id: string; labelledBy: string; hidden: boolean; onView: (shot: Shot) => void };

// One volume's details, opened under the shelf: summary, role, links and screenshots.
export function ProjectPanel({ project: p, id, labelledBy, hidden, onView }: Props) {
  return (
    <article id={id} role="tabpanel" aria-labelledby={labelledBy} hidden={hidden} className="panel" data-shots={p.images ? "true" : undefined}>
      <h3>{p.title}</h3>
      <p className="panel-stack">{p.stack.join(" · ")}</p>
      <p className="panel-summary">{p.summary}</p>
      <dl className="panel-meta">
        <div>
          <dt>Role</dt>
          <dd>{p.role}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{p.year}</dd>
        </div>
      </dl>
      <p className="panel-links">
        {p.caseStudyUrl && (
          <a className="strike" href={p.caseStudyUrl}>
            Read the case study<span className="sr-only"> for {p.title}</span>
          </a>
        )}
        {p.liveUrl ? (
          <a className="strike" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Site<span className="sr-only"> for {p.title}</span>
          </a>
        ) : (
          p.placeholder && <span className="pending">Live link, add later</span>
        )}
        {p.extraLinks?.map((l) => (
          <a key={l.href} className="strike" href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}<span className="sr-only"> for {p.title}</span>
          </a>
        ))}
        {p.sourceUrl ? (
          <a className="strike" href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
            Source<span className="sr-only"> for {p.title}</span>
          </a>
        ) : (
          p.placeholder && <span className="pending">Source link, add later</span>
        )}
      </p>
      {p.images && (
        <div className="panel-shots">
          {p.images.map((img) => (
            <button key={img.src} type="button" className="shot" onClick={() => onView(img)}>
              <Image src={img.src} alt={img.alt} width={1200} height={img.height ?? 678} sizes="(min-width: 1000px) 45vw, 90vw" />
              <span className="sr-only">View full size</span>
            </button>
          ))}
        </div>
      )}
    </article>
  );
}
