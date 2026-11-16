# Frontend rules

- **Semantic class names, styled in `src/app/globals.css`.** Components use names like
  `about-stage` or `book-cover`, never Tailwind utility strings in JSX; Tailwind is only the
  CSS pipeline here. JSX should read as structure, not styling. Put a new component's styles
  in `globals.css` beside its section, on the tokens defined at the top of that file.
- **Keep components small**, well under 150 lines. Split along the page's own seams: one
  component per section (`About`, `Experience`, `Technologies`, `Close`), a repeated item into
  its own file (`ProjectPanel`). Exceptions: `GateMotion.tsx` and `Companion.tsx`, each a single
  effect around one animation loop that would only be spread thinner by splitting.
- **No component library.** There is no shadcn, Radix or Base UI here and no `cn` helper. Add
  one only when a primitive is genuinely needed (see the root `CLAUDE.md`), restyled to the
  tokens in `DESIGN.md`.
- Read [`../DESIGN.md`](../DESIGN.md) before styling or adding a component: colors, type,
  spacing, motion and the section list live there. All copy lives in `src/content/site.ts`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
