"use client";

import { useEffect, useRef } from "react";
import { Butterfly } from "./Butterfly";

const MAX = 4; // the largest group
const GAP: [number, number] = [25000, 45000]; // ms between flights
const SPAN: [number, number] = [9000, 13000]; // ms one crossing takes
const rand = ([a, b]: [number, number]) => a + Math.random() * (b - a);
// how many come at once: often one alone, sometimes a small group of two to four
const groupSize = () => {
  const r = Math.random();
  return r < 0.4 ? 1 : r < 0.65 ? 2 : r < 0.85 ? 3 : 4;
};

// Now and then hell butterflies, the messengers between the worlds, cross the page above its content:
// one alone or a group of up to four on a shared route, each a little off the lead's line and behind
// it, in from one side and out by the other, turned to face the way they fly. Never on phones, with
// reduced motion, while the tab is hidden, or before the gate is passed.
// Each carries its own view-transition-name, so a theme switch mid-flight leaves them flying live
// instead of freezing them in the page snapshot (globals.css, "every butterfly through the slash").
// That is also why they fly above the content: a live element is drawn over the page during the cut,
// and flying above it always keeps them in the same place before, during and after.
export function HellButterflies() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = refs.current.filter((el): el is HTMLDivElement => el !== null);
    const allowed = matchMedia("(prefers-reduced-motion: no-preference) and (min-width: 761px)");
    let timer = 0;
    let flights: Animation[] = [];

    const fly = () => {
      if (allowed.matches && !document.hidden && document.documentElement.dataset.passed === "true") {
        const W = innerWidth, H = innerHeight;
        const ltr = Math.random() < 0.5;
        const [x0, x3] = ltr ? [-80, W + 80] : [W + 80, -80];
        const y0 = rand([0.15, 0.9]) * H, y3 = rand([0.05, 0.85]) * H;
        // two free bends between, so no two crossings take the same line
        const p1 = [x0 + (x3 - x0) / 3, rand([0.1, 0.9]) * H];
        const p2 = [x0 + ((x3 - x0) * 2) / 3, rand([0.1, 0.9]) * H];
        const duration = rand(SPAN);
        let lag = 0;
        flights = els.slice(0, groupSize()).map((el, k) => {
          // the lead flies the line; the others keep their own place beside it and their own wingbeat
          const ox = k ? rand([-50, 50]) : 0, oy = k ? rand([-70, 70]) : 0;
          const phase = k ? rand([0, Math.PI * 2]) : 0;
          const frames: Keyframe[] = [];
          for (let i = 0, n = 30; i <= n; i++) {
            const t = i / n, u = 1 - t;
            const x = u * u * u * x0 + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * x3 + ox;
            const y = u * u * u * y0 + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * y3 + oy + Math.sin(t * Math.PI * 7 + phase) * 10;
            const dx = 3 * u * u * (p1[0] - x0) + 6 * u * t * (p2[0] - p1[0]) + 3 * t * t * (x3 - p2[0]);
            const dy = 3 * u * u * (p1[1] - y0) + 6 * u * t * (p2[1] - p1[1]) + 3 * t * t * (y3 - p2[1]);
            const turn = (Math.atan2(dx, -dy) * 180) / Math.PI;
            frames.push({ transform: `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${turn.toFixed(1)}deg)` });
          }
          if (k) lag += rand([220, 560]);
          return el.animate(frames, { duration: duration * (k ? rand([0.94, 1.06]) : 1), delay: lag, easing: "linear" });
        });
      }
      timer = window.setTimeout(fly, rand(GAP));
    };

    // the first comes a little sooner, so a visitor who stays a while sees one
    timer = window.setTimeout(fly, rand([8000, 16000]));
    return () => {
      clearTimeout(timer);
      for (const f of flights) f.cancel();
    };
  }, []);

  return (
    <div className="hell-sky" aria-hidden="true">
      {Array.from({ length: MAX }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`hell hell-${i + 1}`}
          style={{ viewTransitionName: `hell-${i + 1}` }}
        >
          <Butterfly />
        </div>
      ))}
    </div>
  );
}
