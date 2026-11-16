"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { destinations, site } from "@/content/site";

// Phones: the registry folds into a "Menu" button that opens a full-screen contents sheet.
// A native modal dialog traps focus, closes on Esc and hands focus back to the button.
export function MobileMenu() {
  const sheet = useRef<HTMLDialogElement>(null);

  const open = () => {
    delete sheet.current?.dataset.closing;
    sheet.current?.showModal();
  };

  // plays the exit animation, then closes; with reduced motion it closes at once
  const close = () => {
    const el = sheet.current;
    if (!el?.open || el.dataset.closing !== undefined) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return el.close();
    el.dataset.closing = "";
  };

  // the sheet belongs to phones and upright tablets (the menu-toggle rules in globals.css): leaving that
  // layout closes the sheet, or the full-screen modal would stay over the wide page
  useEffect(() => {
    const el = sheet.current;
    if (!el) return;
    const narrow = matchMedia(
      "(max-width: 760px), (max-width: 1024px) and (orientation: portrait), (max-width: 1366px) and (pointer: coarse)",
    );
    const onChange = () => {
      if (!narrow.matches) el.close();
    };
    // the exit animation ends on the sheet itself (not its list items): now really close it
    const onEnd = (e: AnimationEvent) => {
      if (e.target === el && el.dataset.closing !== undefined) el.close();
    };
    narrow.addEventListener("change", onChange);
    el.addEventListener("animationend", onEnd);
    return () => {
      narrow.removeEventListener("change", onChange);
      el.removeEventListener("animationend", onEnd);
    };
  }, []);

  return (
    <>
      <button type="button" className="menu-toggle" aria-haspopup="dialog" onClick={open}>
        <span className="menu-word">Menu</span>
      </button>
      {/* Esc plays the exit animation too, instead of closing the sheet at once */}
      <dialog
        ref={sheet}
        className="menu-sheet"
        aria-label="Menu"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
      >
        <div className="menu-head">
          <span className="menu-name">{site.name}</span>
          <button type="button" className="menu-close" onClick={close}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav aria-label="Menu">
          <ol className="menu-list">
            {destinations.map((d, i) => (
              <li key={d.href} style={{ "--i": i } as CSSProperties}>
                {/* following a link closes the sheet; the gate still sees the click and handles the jump */}
                <a href={d.href} data-n={d.n} onClick={close}>
                  <span className="menu-n">{d.n}</span>
                  {d.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </dialog>
    </>
  );
}
