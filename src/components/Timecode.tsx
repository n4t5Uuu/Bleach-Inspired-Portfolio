"use client";

import { useEffect, useRef } from "react";

const LENGTH = 23 * 60 + 40; // seconds: the page runs as one episode, about 24 minutes
const pad = (n: number) => String(n).padStart(2, "0");

// The broadcast's running time in the corner of the screen: it advances as the page scrolls, to
// hours:minutes:seconds:frames. Decoration only, so it is hidden from assistive tech.
export function Timecode() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const draw = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      const s = (max > 0 ? scrollY / max : 0) * LENGTH;
      el.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(Math.floor(s) % 60)}:${pad(Math.floor((s * 24) % 24))}`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <p className="timecode" aria-hidden="true">
      <span>EP 01</span>
      <span ref={ref}>00:00:00:00</span>
    </p>
  );
}
