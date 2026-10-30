"use client";

import { useSyncExternalStore } from "react";
import { Moon } from "./Moon";

type Theme = "light" | "dark";
type Source = "user" | "system";

const EVENT = "themechange";
const systemLight = () => matchMedia("(prefers-color-scheme: light)");
const root = () => document.documentElement.dataset;

// layout.tsx sets data-theme and data-theme-source before first paint; this keeps them in step.
const read = () => `${root().themeSource === "system" ? "system" : "user"}:${root().theme === "light" ? "light" : "dark"}`;

const apply = (theme: Theme, source: Source) => {
  // The tab underlines rest in a different state in each theme, so without this they would animate from one
  // rest state to the other and every tab would flash. The flag stops their transitions for the change only.
  root().themeSwitching = "";
  requestAnimationFrame(() => requestAnimationFrame(() => delete root().themeSwitching));
  root().theme = theme;
  root().themeSource = source;
  try {
    if (source === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {
    // storage blocked: the choice lasts for this visit only
  }
  window.dispatchEvent(new Event(EVENT));
};

// Switching by hand cuts the page over with a Getsuga Tensho: a crescent of energy crosses the screen,
// black edged in red into the dark, reishi white-blue into the light, and the new theme is revealed
// along the line it has passed. The old page is a view-transition snapshot, the blade an element that
// exists only in the new state, so it gets its own transition group (globals.css, "the slash").
// Only past the gate: on the gate itself, without view transitions, or with reduced motion, the theme
// simply changes.
const slash = (theme: Theme) => {
  const passed = document.documentElement.dataset.passed === "true";
  if (!passed || !document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    apply(theme, "user");
    return;
  }
  const W = innerWidth, H = innerHeight;
  const dx = Math.round(W * 0.22); // the cut leans: its top runs this far ahead of its foot
  const h = H * 1.15; // the blade is a little taller than the screen, so its points are never seen
  const B = Math.round(Math.min(W * 0.16, 240)); // how far the crescent bulges forward
  const lean = dx / H;
  const base = 24; // room behind the blade's foot
  const w = Math.ceil(base + lean * h + B * 1.2);
  const x = (y: number) => base + lean * (h - y); // the blade's spine, leaning with the cut
  const mid = x(h / 2);
  // the leading edge bulges B forward, the trailing edge less, so it is thickest at the middle
  const blade = `M${x(0)} 0Q${mid + 2 * B} ${h / 2} ${x(h)} ${h}Q${mid + 0.9 * B} ${h / 2} ${x(0)} 0Z`;
  // The blade travels from wholly off the left edge (left at L0) to wholly off the right (L1). The new
  // theme is revealed up to a curve inside the blade, a little behind its leading edge, so the cut
  // follows the crescent's bend and the seam is always under the blade.
  const top = -0.075 * H; // the blade hangs this far above the screen (see .getsuga)
  const L0 = -(Math.max(mid + B, x(0)) + 20), L1 = W + 20;
  const edge = (L: number) => {
    const pts = [];
    for (let i = 0; i <= 12; i++) {
      const t = i / 12, u = 1 - t;
      const px = u * u * x(0) + 2 * u * t * (mid + 1.7 * B) + t * t * x(h);
      pts.push(`${(L + px).toFixed(1)}px ${(top + t * h).toFixed(1)}px`);
    }
    return `polygon(-200vw ${top}px, ${pts.join(", ")}, -200vw ${top + h}px)`;
  };

  const root = document.documentElement.style;
  root.setProperty("--slash-clip-from", edge(L0));
  root.setProperty("--slash-clip-to", edge(L1));
  root.setProperty("--slash-from", `${L0}px`);
  root.setProperty("--slash-to", `${L1}px`);

  const el = document.createElement("div");
  el.className = "getsuga";
  el.dataset.to = theme;
  el.setAttribute("aria-hidden", "true");
  el.innerHTML = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><path class="getsuga-trail" d="${blade}" transform="translate(${-0.06 * W} 0)"/><path class="getsuga-glow getsuga-glow-wide" d="${blade}"/><path class="getsuga-glow" d="${blade}"/><path class="getsuga-blade" d="${blade}"/></svg>`;

  const t = document.startViewTransition(() => {
    apply(theme, "user");
    document.body.append(el);
  });
  t.finished.finally(() => el.remove());
};

const subscribe = (onChange: () => void) => {
  // while following the system, a change of system setting changes the page too
  const onSystem = () => {
    if (root().themeSource === "system") apply(systemLight().matches ? "light" : "dark", "system");
  };
  const media = systemLight();
  media.addEventListener("change", onSystem);
  window.addEventListener(EVENT, onChange);
  return () => {
    media.removeEventListener("change", onSystem);
    window.removeEventListener(EVENT, onChange);
  };
};

// System first, marked with a screen; then the moon: the crescent is dark mode, the full moon is light mode.
export function ThemeToggle({ id }: { id: string }) {
  const [source, theme] = useSyncExternalStore(subscribe, read, () => "user:dark").split(":") as [Source, Theme];
  const name = theme === "light" ? "Light" : "Dark";
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <div className="theme" role="group" aria-label="Theme">
      <button
        type="button"
        className="theme-system"
        aria-pressed={source === "system"}
        onClick={() => apply(systemLight().matches ? "light" : "dark", "system")}
      >
        <svg className="theme-system-icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" />
          <path d="M9 20h6M12 16v4" />
        </svg>
        <span className="theme-label">System</span>
      </button>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => slash(next)}
        aria-label={`${name} mode. Switch to ${next} mode`}
      >
        <Moon id={id} />
        <span className="theme-name">{name}</span>
      </button>
    </div>
  );
}
