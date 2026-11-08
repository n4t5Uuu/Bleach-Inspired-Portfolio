type Props = { verses: string[][]; part: "all" | "sr" };

// The page is static, so each visit's verse is picked in the browser, by a script in the head before the
// first paint (verseScript in layout.tsx sets data-verse on <html>). Every verse is rendered and the CSS
// from verseRules shows only the picked one, so the verse is on screen without waiting for JavaScript.
export function GateVerse({ verses, part }: Props) {
  return verses.map((lines, i) =>
    part === "sr" ? (
      <p key={i} className="sr-only" data-v={i}>
        {lines.join(", ")}
      </p>
    ) : (
      <p key={i} className="gate-verse" aria-hidden="true" data-v={i}>
        {lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    ),
  );
}

// hides every verse but the picked one; with no pick (no JavaScript), the first one shows
export const verseRules = (count: number) =>
  [...Array(count).keys()].map((i) => `:root[data-verse="${i}"] [data-v]:not([data-v="${i}"])`).join(",") +
  `,:root:not([data-verse]) [data-v]:not([data-v="0"]){display:none}`;
