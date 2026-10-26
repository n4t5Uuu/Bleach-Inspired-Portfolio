import type { CSSProperties } from "react";
import { Butterfly } from "./Butterfly";

// One large guide on the tip of the cord and a stream of smaller ones winding round the line behind it.
// Each follower trails the tip by --k and flies a loop of radius --r round the cord every 2 x --p seconds.
// Its phase is offset by --k, so the loops follow one another down the line.
const FOLLOWERS = Array.from({ length: 13 }, (_, i) => {
  const k = i + 1;
  return {
    k,
    s: 20 + ((k * 7) % 5) * 4,
    r: Math.round(18 + k * 2.6),
    p: +(1.1 + (k % 4) * 0.28).toFixed(2),
    o: +Math.max(0.28, 1 - k * 0.055).toFixed(2),
    w: +(0.3 + (k % 3) * 0.07).toFixed(2),
  };
});

export function CordFliers() {
  return (
    <div className="cord-fliers" aria-hidden="true">
      <div className="fliers">
        <span className="fly fly-lead">
          <Butterfly />
        </span>
        {FOLLOWERS.map((f) => (
          <span
            key={f.k}
            className="fly"
            style={{ "--k": f.k, "--s": `${f.s}px`, "--r": `${f.r}px`, "--p": `${f.p}s`, "--o": f.o, "--w": `${f.w}s` } as CSSProperties}
          >
            <Butterfly />
          </span>
        ))}
      </div>
    </div>
  );
}
