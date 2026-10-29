"use client";

import { useEffect } from "react";

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const span = (p: number, from: number, to: number) => clamp((p - from) / (to - from));
// Heavy wood: slow to start, decisive at the end.
const weighted = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const OPEN_MS = 3200; // closed gate to the work arriving; the doors take about half of it
const SCROLL_KEYS = new Set([" ", "PageDown", "ArrowDown", "End"]);

// Links the gate's doors to scroll. Without JS, or with reduced motion,
// the gate stays whole and the page reads straight down.
export function GateMotion() {
  useEffect(() => {
    const gate = document.getElementById("gate");
    if (!gate) return;
    const root = document.documentElement;
    const main = gate.nextElementSibling as HTMLElement | null;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    // Each moving piece gets its own transform and opacity. A custom property on the gate would
    // be inherited, so every element inside it would be restyled on every frame of the opening.
    const style = (selector: string) => gate.querySelector<HTMLElement>(selector)!.style;
    const doorL = style(".gate-door-l");
    const doorR = style(".gate-door-r");
    const seam = style(".gate-seam");
    const cord = style(".gate-cord");
    const stage = style(".gate-dangai"); // its glow is a pseudo-element, so it reads --flood
    const black = style(".gate-black");
    // the gate's butterflies: each leaves along its own path (data-fly, "dx,dy" in vw and vh),
    // turned towards where it is going
    const flights = [...gate.querySelectorAll<SVGElement>(".drift")].map((el) => {
      const [dx, dy] = (el.dataset.fly ?? "0,-80").split(",").map(Number);
      return { style: el.style, dx, dy, turn: (Math.atan2(dx, -dy) * 180) / Math.PI };
    });
    const moving = [doorL, doorR, seam, cord, black, ...flights.map((f) => f.style)];

    // a flag on an element is only written when it changes, so an unchanged frame invalidates nothing
    const flag = (el: HTMLElement, key: string, on: boolean) => {
      if (el.dataset[key] !== String(on)) el.dataset[key] = String(on);
    };

    // the gate's look at progress p through the passage: writes only, no layout reads
    const apply = (p: number) => {
      // Doors part slowly over most of the passage, then a short black hold (p .7 to .8) before the
      // head; the work section gets --head to fade its head in with the black beat.
      const pull = span(p, 0, 0.12);
      const door = weighted(span(p, 0.03, 0.55));
      const flood = span(p, 0.1, 0.58);
      const head = span(p, 0.8, 0.9);
      doorL.transform = `translateX(${(-104 * door).toFixed(3)}%)`;
      doorR.transform = `translateX(${(104 * door).toFixed(3)}%)`;
      seam.transform = `translateX(-50%) scaleX(${(1 + flood * 3).toFixed(4)})`;
      seam.opacity = (1 - door * 0.85).toFixed(4);
      cord.transform = `translate(-50%, ${(-70 * door).toFixed(3)}%)`;
      cord.opacity = (1 - pull).toFixed(4);
      stage.setProperty("--flood", flood.toFixed(4));
      black.opacity = span(p, 0.55, 0.7).toFixed(4);
      // they gather speed as the doors part, and are gone by the time the light is full
      const away = flood ** 1.6;
      const turn = Math.min(1, flood * 4);
      for (const f of flights) {
        f.style.transform = `translate(${(f.dx * away).toFixed(2)}vw, ${(f.dy * away).toFixed(2)}vh) rotate(${(f.turn * turn).toFixed(1)}deg)`;
      }
      main?.style.setProperty("--head", head.toFixed(4));
      flag(gate, "parting", door > 0);
      flag(root, "beat", head > 0.5);
      flag(root, "passed", p > 0.98);
    };

    const update = () => {
      frame = 0;
      const rect = gate.getBoundingClientRect();
      if (gate.dataset.armed !== "true") {
        flag(root, "passed", rect.bottom < 1);
        return;
      }
      const travel = gate.offsetHeight - window.innerHeight;
      apply(travel > 0 ? clamp(-rect.top / travel) : 0);
    };

    // while the opening plays, its own frames draw the gate (see open)
    const schedule = () => {
      if (!frame && !opening) frame = requestAnimationFrame(update);
    };

    // The page is locked at the closed gate. The cord, a scroll attempt, or an in-page
    // link plays the opening over OPEN_MS by scrolling the passage itself; then it unlocks.
    let locked = false;
    let opening = 0;
    let pending: string | null = null; // in-page link clicked while the gate was shut
    const travel = () => gate.offsetHeight - window.innerHeight;

    const unlock = () => {
      locked = false;
      root.dataset.gate = "open";
      if (pending) document.querySelector(pending)?.scrollIntoView();
      pending = null;
    };

    const open = () => {
      if (!locked || opening) return;
      const from = window.scrollY;
      const to = travel();
      const ms = OPEN_MS * Math.max(0, 1 - from / to);
      const start = performance.now();
      const step = (t: number) => {
        const k = ms > 0 ? Math.min(1, (t - start) / ms) : 1;
        const top = from + (to - from) * k;
        // style first, then scroll: the one layout the scroll needs then covers both, and the doors
        // move in the same frame as the page instead of one behind it
        apply(to > 0 ? top / to : 1);
        window.scrollTo({ top, behavior: "instant" });
        if (k < 1) {
          opening = requestAnimationFrame(step);
        } else {
          opening = 0;
          unlock();
        }
      };
      opening = requestAnimationFrame(step);
    };

    const block = (e: Event) => {
      if (!locked) return;
      e.preventDefault();
      open();
    };

    // only a downward push opens the gate: upward momentum arriving after you scroll back
    // to the top must not replay the opening
    const onWheel = (e: WheelEvent) => {
      if (locked && e.deltaY > 0) block(e);
    };

    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (locked && touchY - e.touches[0].clientY > 8) block(e);
    };

    const onKey = (e: KeyboardEvent) => {
      if (locked && SCROLL_KEYS.has(e.key)) block(e);
    };

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!locked || !link) return;
      pending = link.getAttribute("href");
      block(e);
    };

    // scrollbar drags and focus jumps can still move the page: treat them as intent
    const onScroll = () => {
      if (opening) return;
      // back at the closed gate (the home link, or scrolling up): lock it again
      if (!locked) {
        if (window.scrollY <= 0 && gate.dataset.armed === "true") {
          locked = true;
          root.dataset.gate = "closed";
        }
        return;
      }
      if (window.scrollY >= travel()) unlock();
      else open();
    };

    const arm = () => {
      gate.dataset.armed = String(!reduced.matches);
      if (reduced.matches) {
        for (const s of moving) {
          s.removeProperty("transform");
          s.removeProperty("opacity");
        }
        stage.removeProperty("--flood");
        main?.style.removeProperty("--head");
        delete gate.dataset.parting;
        delete root.dataset.beat;
      }
      locked = !reduced.matches && window.scrollY < travel();
      root.dataset.gate = locked ? "closed" : "open";
      update();
    };

    arm();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    reduced.addEventListener("change", arm);
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(opening);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      reduced.removeEventListener("change", arm);
    };
  }, []);

  return null;
}
