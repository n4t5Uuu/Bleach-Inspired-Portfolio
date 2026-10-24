"use client";

import { useSyncExternalStore } from "react";

type Props = { verses: string[][]; part: "left" | "right" | "sr" };

// One pick per page load, shared by every part of the gate.
let picked: number | undefined;
const subscribe = () => () => {};

// The page is static, so the verse is chosen in the browser: the server renders
// it unpicked (hidden until hydration), then each visit settles on a random one.
export function GateVerse({ verses, part }: Props) {
  const i = useSyncExternalStore(
    subscribe,
    () => (picked ??= Math.floor(Math.random() * verses.length)),
    () => -1,
  );
  const ready = i >= 0;
  const lines = verses[ready ? i : 0];

  if (part === "sr") return <p className="sr-only">{lines.join(", ")}</p>;

  // Read top to bottom, left to right across the doors: line one on the left door.
  const shown = part === "left" ? lines.slice(0, 1) : lines.slice(1);
  return (
    <p className="gate-verse" aria-hidden="true" data-ready={ready}>
      {shown.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </p>
  );
}
