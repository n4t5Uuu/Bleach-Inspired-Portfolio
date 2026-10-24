"use client";

import { useEffect } from "react";

// One world held at a time: the volume nearest the centre of the screen is lit,
// the others' covers dim. Without JS every cover stays lit.
export function VolumeFocus() {
  useEffect(() => {
    const volumes = Array.from(document.querySelectorAll<HTMLElement>(".volume"));
    if (!volumes.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          (entry.target as HTMLElement).dataset.lit = String(entry.isIntersecting);
        }
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    for (const v of volumes) {
      v.dataset.lit = "false";
      observer.observe(v);
    }
    return () => observer.disconnect();
  }, []);

  return null;
}
