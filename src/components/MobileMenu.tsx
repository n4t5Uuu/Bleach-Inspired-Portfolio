"use client";

import { useEffect, useRef } from "react";
import { destinations, site } from "@/content/site";
import { ResumeLink } from "./Registry";

// Phones: the registry folds into a "Menu" button that opens a full-screen contents sheet.
// A native modal dialog traps focus, closes on Esc and hands focus back to the button.
export function MobileMenu() {
  const sheet = useRef<HTMLDialogElement>(null);
  const close = () => sheet.current?.close();

  // the sheet belongs to the phone layout: widening the window past it closes the sheet,
  // or the full-screen modal would stay over the desktop page
  useEffect(() => {
    const wide = matchMedia("(min-width: 761px)");
    const onChange = () => {
      if (wide.matches) close();
    };
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button type="button" className="menu-toggle" aria-haspopup="dialog" onClick={() => sheet.current?.showModal()}>
        Menu
      </button>
      <dialog ref={sheet} className="menu-sheet" aria-label="Menu">
        <div className="menu-head">
          <span className="menu-name">{site.name}</span>
          <button type="button" className="menu-close" onClick={() => sheet.current?.close()}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav aria-label="Menu">
          <ol className="menu-list">
            {destinations.map((d) => (
              <li key={d.href}>
                {/* following a link closes the sheet; the gate still sees the click and handles the jump */}
                <a href={d.href} data-n={d.n} onClick={close}>
                  <span className="menu-n">{d.n}</span>
                  {d.label}
                </a>
              </li>
            ))}
            <li>
              <ResumeLink variant="menu" />
            </li>
          </ol>
        </nav>
      </dialog>
    </>
  );
}
