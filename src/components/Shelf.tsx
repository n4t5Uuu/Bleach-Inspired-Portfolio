"use client";

import Image from "next/image";
import { useId, useRef, useState, useSyncExternalStore, type KeyboardEvent, type UIEvent } from "react";
import { flushSync } from "react-dom";
import type { Project } from "@/content/site";
import { ProjectPanel, type Shot } from "./ProjectPanel";

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
  // a screenshot opened full size, over the page; a click on it, Esc or (where supported) the backdrop closes it
  const viewer = useRef<HTMLDialogElement>(null);
  const [shot, setShot] = useState<Shot | null>(null);
  const view = (img: Shot) => {
    flushSync(() => setShot(img));
    viewer.current?.showModal();
  };

  // choosing a book scrolls the row (when it is longer than the screen) to where that book snaps:
  // its start on wider screens, its centre on phones
  const choose = (i: number) => {
    setActive(i);
    const book = tabs.current[i];
    const shelf = book?.parentElement;
    if (!book || !shelf) return;
    const b = book.getBoundingClientRect();
    const s = shelf.getBoundingClientRect();
    const centre = getComputedStyle(book).scrollSnapAlign.includes("center");
    const left = shelf.scrollLeft + (centre ? b.left + b.width / 2 - (s.left + s.width / 2) : b.left - s.left);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    shelf.scrollTo({ left, behavior: reduce ? "instant" : "smooth" });
  };

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
    choose(next);
    tabs.current[next]?.focus({ preventScroll: true });
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
            onClick={() => choose(i)}
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
            {/* the nudge moves this wrapper: Chrome cannot run an animation on an svg off the main thread */}
            <span className="shelf-hint-arrow">
              <svg viewBox="0 0 24 12">
                <path d="M0 6h22M16 1l6 5-6 5" />
              </svg>
            </span>
          </span>
          <span className="shelf-hint-ticks">
            {projects.map((p, i) => (
              <span key={p.slug} className="shelf-hint-tick" data-on={i === seen} />
            ))}
          </span>
        </p>
      )}

      {projects.map((p, i) => (
        <ProjectPanel
          key={p.slug}
          project={p}
          id={`${uid}-panel-${i}`}
          labelledBy={`${uid}-tab-${i}`}
          hidden={ready && i !== active}
          onView={view}
        />
      ))}

      <dialog ref={viewer} className="viewer" aria-label="Screenshot" {...{ closedby: "any" }}>
        {shot && (
          <form method="dialog">
            <button type="submit" className="viewer-close">
              <Image src={shot.src} alt={shot.alt} width={1200} height={shot.height ?? 678} sizes="94vw" />
              <span className="sr-only">Close</span>
            </button>
          </form>
        )}
      </dialog>
    </div>
  );
}
