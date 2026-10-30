"use client";

import Image from "next/image";
import { useId, useRef, useState, useSyncExternalStore, type KeyboardEvent, type UIEvent } from "react";
import type { Project } from "@/content/site";

type Props = { projects: Project[] };

const subscribe = () => () => {};
const pad = (i: number) => String(i + 1).padStart(2, "0");

// The volumes stand on a shelf; one is pulled forward and its details open below.
// Without JavaScript every panel stays open, stacked under the shelf.
export function Shelf({ projects }: Props) {
  const [active, setActive] = useState(0);
  // which book the swipe row has reached; drives the hint under it on phones
  const [seen, setSeen] = useState(0);
  const ready = useSyncExternalStore(subscribe, () => true, () => false);
  const uid = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent, i: number) => {
    const last = projects.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const room = el.scrollWidth - el.clientWidth;
    setSeen(room > 0 ? Math.round((el.scrollLeft / room) * (projects.length - 1)) : 0);
  };

  if (!projects.length) return null;

  return (
    <div className="shelf-wrap">
      <div className="shelf" role="tablist" aria-label="Projects" data-ready={ready} onScroll={onScroll}>
        {projects.map((p, i) => (
          <button
            key={p.slug}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`${uid}-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={ready ? i === active : undefined}
            aria-controls={`${uid}-panel-${i}`}
            tabIndex={ready && i !== active ? -1 : 0}
            className="book"
            data-active={i === active}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="book-cover">
              <span className="book-n" aria-hidden="true">
                {pad(i)}
              </span>
              <span className="book-verse">{p.verse}</span>
              {p.placeholder && <span className="placeholder-note">Placeholder cover</span>}
            </span>
            <span className="book-title">
              <span className="sr-only">Volume {pad(i)}: </span>
              {p.title}
            </span>
            <span className="book-stack">{p.stack.join(" · ")}</span>
          </button>
        ))}
      </div>

      {/* phones only: the shelf is a swipe row, so say so and show how far along it is */}
      {projects.length > 1 && (
        <p className="shelf-hint" aria-hidden="true" data-end={seen === projects.length - 1}>
          <span className="shelf-hint-text">
            Swipe
            <svg viewBox="0 0 24 12">
              <path d="M0 6h22M16 1l6 5-6 5" />
            </svg>
          </span>
          <span className="shelf-hint-ticks">
            {projects.map((p, i) => (
              <span key={p.slug} className="shelf-hint-tick" data-on={i === seen} />
            ))}
          </span>
        </p>
      )}

      {projects.map((p, i) => (
        <article
          key={p.slug}
          id={`${uid}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${uid}-tab-${i}`}
          hidden={ready && i !== active}
          className="panel"
          data-shots={p.images ? "true" : undefined}
        >
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
                <Image key={img.src} className="shot" src={img.src} alt={img.alt} width={1200} height={img.height ?? 678} sizes="(min-width: 1000px) 520px, 90vw" />
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
