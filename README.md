# Bleach-inspired portfolio

A personal portfolio for a software developer, styled after the manga *Bleach*. The homepage is a lacquer-and-paper gate: scroll to part the doors and the work waits beyond them as numbered volumes. Everything on screen is original work; this site is not affiliated with the series.

All copy is placeholder until real content replaces it.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, pnpm.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

| Command | What it does |
|---|---|
| `pnpm build` | production build |
| `pnpm start` | serve the production build |
| `pnpm lint` | ESLint |
| `pnpm doctor` | React Doctor scan |

## Edit the content

Every word on the site lives in [`src/content/site.ts`](src/content/site.ts): name, role, tagline, the twelve gate verses, projects, experience, technologies and about. Each section has a `...Placeholder` flag; set it to `false` once the content is real. For the resume, put the PDF in `public/` and set `resumeHref` to `"/resume.pdf"`.

## Where things are

- `src/app/` – the page, layout and all styles (`globals.css`)
- `src/components/` – the gate, nav, butterfly group and scroll effects
- [`PRODUCT.md`](PRODUCT.md) – who the site is for and what it must do
- [`DESIGN.md`](DESIGN.md) – the "Senkaimon Verse" design system
- [`CLAUDE.md`](CLAUDE.md) – instructions for coding agents working in this repo
