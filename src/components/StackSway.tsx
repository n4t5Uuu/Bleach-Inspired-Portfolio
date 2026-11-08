"use client";

import { useEffect } from "react";

// One loop of wind, as angles in degrees every STEP ms: a hanging sign is a damped pendulum (a period
// of 1.3s, lightly damped) pushed by a steady breeze that leans it over, slow swells and sharp gusts
// that kick it further and let it swing back past rest. The breeze is built from whole cycles of the
// loop, so after the simulation settles, one loop of it repeats without a seam.
const LOOP = 24000;
const STEP = 100;
const windLoop = () => {
  const w = (2 * Math.PI) / 1.3; // natural frequency
  const c = 2 * 0.12 * w; // damping
  const lean = -1.5; // degrees the steady breeze holds it at; negative leans its foot to the right
  const L = LOOP / 1000;
  const breeze = (t: number) => {
    const p = (2 * Math.PI * t) / L;
    const gust = Math.max(0, Math.sin(3 * p + 1)) ** 3 + 0.7 * Math.max(0, Math.sin(5 * p + 4)) ** 4;
    return 1 + 0.5 * Math.sin(p) + 0.9 * gust + 0.2 * Math.sin(11 * p + 2) + 0.12 * Math.sin(17 * p + 0.5);
  };
  const dt = 1 / 240;
  let a = lean, v = 0;
  const out: number[] = [];
  const start = Math.round((2 * L) / dt), every = Math.round(STEP / 1000 / dt);
  for (let i = 0, n = Math.round((3 * L) / dt); i < n; i++) {
    const t = i * dt;
    if (i >= start && (i - start) % every === 0) out.push(a);
    v += (-w * w * (a - lean * breeze(t)) - c * v) * dt;
    a += v * dt;
  }
  return out.slice(0, LOOP / STEP);
};

// the wind's angle at a moment of its loop
const angleAt = (loop: number[], ms: number) => {
  const i = (((ms % LOOP) + LOOP) % LOOP) / STEP;
  const j = Math.floor(i);
  return loop[j] + (loop[(j + 1) % loop.length] - loop[j]) * (i - j);
};

// The technology strips: each moves in the wind, the wind reaching one a little after the strip to its
// left; a mouse over a strip catches it and holds it still, and letting go lets the wind take it again;
// a tap swings it away from where it was touched. Nothing moves with reduced motion.
export function StackSway() {
  useEffect(() => {
    const list = document.querySelector<HTMLElement>(".stack-groups");
    if (!list || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const loop = windLoop();
    const frames = loop.concat(loop[0]).map((deg) => ({ rotate: `${deg.toFixed(2)}deg` }));
    const left = list.getBoundingClientRect().left;
    type Sign = { wind: Animation; hold?: Animation };
    const signs = new Map<Element, Sign>();
    for (const gust of list.querySelectorAll<HTMLElement>(".gust")) {
      const box = gust.getBoundingClientRect();
      // the wind front crosses at about 400px a second; rows lower down are reached a little later still
      const lag = (box.left - left) * 2.5 + (box.top % 997) * 0.6;
      const wind = gust.animate(frames, { duration: LOOP, iterations: Infinity, delay: -lag });
      signs.set(gust, { wind });
    }

    const signOf = (target: EventTarget | null) => (target as Element | null)?.closest?.(".gust") ?? null;

    const onOver = (e: PointerEvent) => {
      const gust = signOf(e.target) as HTMLElement | null;
      const sign = gust && signs.get(gust);
      if (e.pointerType !== "mouse" || !gust || !sign || signOf(e.relatedTarget) === gust) return;
      // caught: from wherever it is, it comes to rest in a moment
      const now = getComputedStyle(gust).rotate;
      sign.hold?.cancel();
      sign.wind.pause();
      sign.hold = gust.animate([{ rotate: now === "none" ? "0deg" : now }, { rotate: "0deg" }], {
        duration: 450,
        easing: "cubic-bezier(0.2, 0.8, 0.3, 1)",
        fill: "forwards",
      });
    };

    const onOut = (e: PointerEvent) => {
      const gust = signOf(e.target) as HTMLElement | null;
      const sign = gust && signs.get(gust);
      if (e.pointerType !== "mouse" || !gust || !sign || signOf(e.relatedTarget) === gust) return;
      // let go: from wherever it is, it leans back to the angle the wind was holding it at when caught (the
      // wind is paused there; its progress through the loop already counts the strip's head start), then
      // the wind carries on from that same moment, so nothing jumps
      const progress = sign.wind.effect?.getComputedTiming().progress ?? 0;
      const to = angleAt(loop, progress * LOOP);
      const now = getComputedStyle(gust).rotate;
      sign.hold?.cancel();
      const hold = gust.animate([{ rotate: now === "none" ? "0deg" : now }, { rotate: `${to.toFixed(2)}deg` }], {
        duration: 700,
        easing: "ease-in-out",
        fill: "forwards",
      });
      sign.hold = hold;
      hold.onfinish = () => {
        sign.wind.play();
        hold.cancel();
        if (sign.hold === hold) sign.hold = undefined;
      };
    };

    // a tap is a click from a finger or pen (Safari's click carries no pointerType): the strip swings away
    // from where it was touched, a pendulum's equal swings each smaller than the last, on top of the wind
    const onClick = (e: MouseEvent) => {
      if ((e as PointerEvent).pointerType === "mouse") return;
      const hang = (e.target as Element).closest<HTMLElement>(".hang");
      if (!hang || hang.getAnimations().some((a) => a.id === "sway" && a.playState === "running")) return;
      const box = hang.getBoundingClientRect();
      // pushed on its left side its foot swings right, which is a turn anticlockwise
      const a = e.clientX < box.left + box.width / 2 ? -11 : 11;
      hang.animate(
        [0, a, -a * 0.6, a * 0.32, -a * 0.12, 0].map((deg) => ({ rotate: `${deg}deg`, easing: "ease-in-out" })),
        { id: "sway", duration: 1700 },
      );
    };

    list.addEventListener("pointerover", onOver);
    list.addEventListener("pointerout", onOut);
    list.addEventListener("click", onClick);
    return () => {
      list.removeEventListener("pointerover", onOver);
      list.removeEventListener("pointerout", onOut);
      list.removeEventListener("click", onClick);
      for (const { wind, hold } of signs.values()) {
        wind.cancel();
        hold?.cancel();
      }
    };
  }, []);

  return null;
}
