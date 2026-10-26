"use client";

import { useSyncExternalStore } from "react";
import { Moon } from "./Moon";

type Theme = "light" | "dark";

const EVENT = "themechange";
const read = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
const subscribe = (onChange: () => void) => {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
};

// The crescent is dark mode, the full moon is light mode; the shade slides across between them.
// layout.tsx sets the starting theme before paint, so this only reads and flips it.
export function ThemeToggle({ id }: { id: string }) {
  const theme = useSyncExternalStore(subscribe, read, (): Theme => "dark");
  const next: Theme = theme === "dark" ? "light" : "dark";

  const flip = () => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage blocked: the choice lasts for this visit only
    }
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <button type="button" className="theme-toggle" onClick={flip} aria-label={`Switch to ${next} mode`}>
      <Moon id={id} />
    </button>
  );
}
