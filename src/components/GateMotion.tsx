"use client";

import { useEffect } from "react";

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const span = (p: number, from: number, to: number) => clamp((p - from) / (to - from));
// Heavy wood: slow to start, decisive at the end.
const weighted = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

// Links the gate's doors to scroll. Without JS, or with reduced motion,
// the gate stays whole and the page reads straight down.
export function GateMotion() {
  useEffect(() => {
    const gate = document.getElementById("gate");
    if (!gate) return;
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = gate.getBoundingClientRect();
      if (gate.dataset.armed !== "true") {
        root.dataset.passed = String(rect.bottom < 1);
        return;
      }
      const travel = gate.offsetHeight - window.innerHeight;
      const p = travel > 0 ? clamp(-rect.top / travel) : 0;
      // Set on the root so the work section can fade its head in with the black beat.
      // The screen holds fully black (p .6 to .77, about 12svh of scroll) before the head arrives.
      const head = span(p, 0.77, 0.88);
      root.style.setProperty("--pull", span(p, 0, 0.12).toFixed(4));
      root.style.setProperty("--door", weighted(span(p, 0.03, 0.4)).toFixed(4));
      root.style.setProperty("--flood", span(p, 0.1, 0.42).toFixed(4));
      root.style.setProperty("--black", span(p, 0.4, 0.6).toFixed(4));
      root.style.setProperty("--head", head.toFixed(4));
      root.dataset.beat = String(head > 0.5);
      root.dataset.passed = String(p > 0.98);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const arm = () => {
      gate.dataset.armed = String(!reduced.matches);
      if (reduced.matches) {
        for (const v of ["--pull", "--door", "--flood", "--black", "--head"]) {
          root.style.removeProperty(v);
        }
        delete root.dataset.beat;
      }
      update();
    };

    arm();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", arm);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", arm);
    };
  }, []);

  return null;
}
