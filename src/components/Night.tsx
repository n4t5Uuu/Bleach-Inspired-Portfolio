import type { CSSProperties } from "react";
import { Moon } from "./Moon";

// [left %, rise seconds, delay seconds, size px]: most motes keep to the side margins
const MOTES = [
  [2, 26, -4, 3],
  [5, 34, -19, 2],
  [8, 29, -11, 4],
  [11, 38, -27, 2],
  [14, 31, -7, 3],
  [27, 44, -33, 2],
  [73, 40, -15, 2],
  [86, 33, -23, 3],
  [89, 27, -2, 2],
  [92, 36, -30, 4],
  [95, 30, -9, 2],
  [98, 41, -21, 3],
] as const;

// The sky behind the page: a faint moon that follows the theme, and spirit motes drifting up.
export function Night() {
  return (
    <div className="night" aria-hidden="true">
      <Moon id="sky-moon" toneId="sky-tone" className="sky-moon" />
      {MOTES.map(([x, rise, delay, size]) => (
        <span
          key={x}
          className="mote"
          style={{ "--x": `${x}%`, "--rise": `${rise}s`, "--delay": `${delay}s`, "--size": `${size}px` } as CSSProperties}
        />
      ))}
    </div>
  );
}
