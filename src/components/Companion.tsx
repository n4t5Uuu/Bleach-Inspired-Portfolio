"use client";

import { useEffect, useRef } from "react";
import { Butterfly } from "./Butterfly";

const LINKS = ".registry a";

// The group flies in a loose cluster beside the pointer. Each butterfly: its place in
// the cluster, how slowly it catches up (ms time constant, free and perched; kept close
// so they move as one), and where it settles around a perched link.
const ANCHOR = { x: 20, y: 16 };
const SWARM = [
  { dx: 0, dy: 0, lag: 170, perchLag: 110, perch: (r: DOMRect) => [r.left - 10, r.top - 16] },
  { dx: 22, dy: -10, lag: 195, perchLag: 140, perch: (r: DOMRect) => [r.right - 4, r.top - 12] },
  { dx: 10, dy: 16, lag: 220, perchLag: 170, perch: (r: DOMRect) => [r.left + r.width * 0.45, r.top - 30] },
] as const;

// A small group of ink butterflies that flies together beside the pointer and
// settles around a hovered or focused registry link.
// Mouse only, and only when motion is allowed; otherwise the static guides remain.
export function Companion() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = refs.current.filter((el): el is HTMLDivElement => el !== null);
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (els.length !== SWARM.length || !fine || reduced) return;

    const root = document.documentElement;
    root.dataset.companion = "on";

    const pos = SWARM.map(() => ({ x: 0, y: 0 }));
    let px = 0, py = 0; // last pointer position
    let perch: HTMLElement | null = null;
    let shown = false;
    let frame = 0;
    let last = 0;

    const target = (i: number): [number, number] => {
      const b = SWARM[i];
      if (perch) {
        const [x, y] = b.perch(perch.getBoundingClientRect());
        return [x, y];
      }
      return [px + ANCHOR.x + b.dx, py + ANCHOR.y + b.dy];
    };

    const tick = (t: number) => {
      const dt = last ? Math.min(t - last, 64) : 16;
      last = t;
      let anyMoving = false;
      SWARM.forEach((b, i) => {
        const [tx, ty] = target(i);
        const p = pos[i];
        const dx = tx - p.x;
        const dy = ty - p.y;
        const k = 1 - Math.exp(-dt / (perch ? b.perchLag : b.lag));
        p.x += dx * k;
        p.y += dy * k;
        const tilt = Math.max(-28, Math.min(28, dx * 0.35));
        els[i].style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${tilt}deg)`;
        const moving = Math.abs(dx) + Math.abs(dy) > 0.6;
        els[i].dataset.state = perch && !moving ? "perched" : "flying";
        anyMoving ||= moving;
      });
      if (anyMoving) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        last = 0;
      }
    };

    const kick = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const show = (on: boolean) => {
      if (on && !shown) {
        // appear beside the pointer or link rather than flying in from a corner
        SWARM.forEach((_, i) => {
          const [x, y] = target(i);
          pos[i].x = x;
          pos[i].y = y;
        });
      }
      shown = on;
      for (const el of els) el.dataset.shown = String(on);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      px = e.clientX;
      py = e.clientY;
      show(true);
      kick();
    };

    const onOver = (e: PointerEvent) => {
      const link = (e.target as Element).closest<HTMLElement>(LINKS);
      if (link) {
        perch = link;
        kick();
      }
    };

    const onOut = (e: PointerEvent) => {
      if (!perch) return;
      const to = e.relatedTarget as Node | null;
      if (to && perch.contains(to)) return;
      perch = null;
      kick();
    };

    const onFocusIn = (e: FocusEvent) => {
      const link = (e.target as Element).closest<HTMLElement>(LINKS);
      if (!link) return;
      perch = link;
      show(true);
      kick();
    };

    const onFocusOut = () => {
      perch = null;
      kick();
    };

    const onLeave = () => show(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    root.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", kick, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", kick);
      delete root.dataset.companion;
    };
  }, []);

  return (
    <>
      {SWARM.map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`companion companion-${i + 1}`}
          aria-hidden="true"
          data-shown="false"
        >
          <Butterfly />
        </div>
      ))}
    </>
  );
}
