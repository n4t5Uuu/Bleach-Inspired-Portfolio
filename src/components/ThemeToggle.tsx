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

// The crescent is dark mode, the full moon is light mode; the shade slides across between them.
export function ThemeToggle({ id }: { id: string }) {
  const [source, theme] = useSyncExternalStore(subscribe, read, () => "user:dark").split(":") as [Source, Theme];
  const name = theme === "light" ? "Light" : "Dark";
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <div className="theme" role="group" aria-label="Theme">
      <button
        type="button"
        className="theme-toggle"
        onClick={() => apply(next, "user")}
        aria-label={`${name} mode. Switch to ${next} mode`}
      >
        <Moon id={id} />
        <span className="theme-name">{name}</span>
      </button>
      <button
        type="button"
        className="theme-system"
        aria-pressed={source === "system"}
        onClick={() => apply(systemLight().matches ? "light" : "dark", "system")}
      >
        System
      </button>
    </div>
  );
}
