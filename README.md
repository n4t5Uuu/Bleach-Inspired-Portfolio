# Bleach-inspired portfolio

The personal portfolio of Alden Olmedo, a software developer, styled after the manga *Bleach*. The homepage is a lacquer-and-paper gate: scroll, drag the scrollbar or pick a tab to part the doors, and the work waits beyond them as numbered volumes. Everything on screen is original work; this site is not affiliated with the series.

## Features

- **The gate:** a locked passage that opens on the cord, a scroll, or any tab. The numeral in the light is the number of the tab you chose.
- **Sections:** About, Projects (a shelf of books with screenshots and links), Experience, Technologies, Contributions (a live GitHub calendar) and a closing Contact section.
- **Themes:** dark, light (a "2004 broadcast" look) or follow the system. The choice is remembered in the browser, and switching past the gate plays a Getsuga Tensho slash.
- **Navigation:** six numbered tabs, which fold into a full-screen Menu on phones. The resume is on the gate door and the closing section.
- **Error pages:** a Bleach-inspired 404 and error page.
- Reduced motion keeps the gate whole and the page reads straight down.

## Stack

Next.js 16 (App Router, cache components), React 19, TypeScript, Tailwind CSS 4, pnpm.

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
| `pnpm react-doctor` | React Doctor scan |

There is no test runner; check changes with `pnpm lint`, `pnpm build` and a look at the dev server.

## Environment

The Contributions section reads GitHub's GraphQL API and needs a token. Create `.env.local` (it is gitignored):

```
GITHUB_TOKEN=your_token_here
```

Use a fine-grained token with **public repositories, read-only** access and no other permissions, and set an expiry. Without a token, or if GitHub fails, the section is left out. Never prefix the name with `NEXT_PUBLIC_`, which would send it to every visitor's browser.

## Edit the content

Everything on the site lives in [`src/content/site.ts`](src/content/site.ts): name, tagline, the gate verses, tabs, projects (with screenshots and links), experience, technologies, about and contact links. The gate verses are still sample lines; replace them and keep `versePlaceholder` at `false`. Images go in `public/` (screenshots in `public/projects/`, as webp). The resume is `public/Olmedo_Resume.pdf`; replace the file and keep the name.

## Security

`next.config.ts` sends a content security policy, frame blocking, `nosniff`, a referrer policy, a permissions policy, a cross-origin opener policy and HSTS on every page. The policy keeps `'unsafe-inline'` for scripts, because the static page streams inline data that changes every build; see the note in that file before changing it. Dependabot opens weekly update pull requests ([`.github/dependabot.yml`](.github/dependabot.yml)).

## Where things are

- `src/app/`: the page, layout, error pages and all styles (`globals.css`)
- `src/components/`: the gate, nav, menu, shelf, themes, butterflies and scroll effects
- `src/content/site.ts`: all copy and links
- [`PRODUCT.md`](PRODUCT.md): who the site is for and what it must do
- [`DESIGN.md`](DESIGN.md): the "Senkaimon Verse" design system
- [`CLAUDE.md`](CLAUDE.md): instructions for coding agents working in this repo
