import type { ReactNode } from "react";
import { Tassel } from "./Tassel";

type Props = { code: string; title: string; body: string; children: ReactNode };

// The error pages: the gate seen from behind, as at the close, with a ghosted numeral where the way through should be.
export function Lost({ code, title, body, children }: Props) {
  return (
    <main className="close lost">
      <div className="close-door close-door-l" aria-hidden="true" />
      <div className="close-door close-door-r" aria-hidden="true" />
      <div className="close-center">
        <Tassel className="close-tassel" />
        <p className="lost-n" aria-hidden="true">
          {code}
        </p>
        <h1>{title}</h1>
        <p className="lost-body">{body}</p>
        <div className="close-actions">{children}</div>
      </div>
    </main>
  );
}
