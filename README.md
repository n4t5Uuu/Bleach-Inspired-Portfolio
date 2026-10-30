<div align="center">

# Bleach-Inspired Portfolio

**The personal portfolio of Alden Olmedo, a software developer, entered through a lacquer-and-paper gate.**

![Next.js](https://img.shields.io/badge/Next.js-16.4-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-11-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

</div>

---

## About

A developer portfolio styled after the manga *Bleach*. The homepage is a gate of paper doors: scroll, drag the scrollbar or pick a tab to part them, and the work waits beyond as numbered volumes on a shelf, hung on a single vermilion cord. Everything on screen is original work; this site is not affiliated with the series.

It is built to be read quickly by recruiters and hiring managers: the projects, experience, technologies and resume are never more than one tab away.

## Key Features

- **The gate:** a locked passage that opens on the cord, a scroll or any tab. The numeral in the light is the number of the tab you chose, and you land on that section.
- **Projects shelf:** books with screenshots, live and source links, and a swipe row on phones.
- **Live GitHub contributions:** a year of activity pulled from the GitHub API and refreshed daily.
- **Three themes:** dark, light (a "2004 broadcast" look) or follow the system. The choice is remembered, and switching past the gate plays a Getsuga Tensho slash.
- **Responsive navigation:** six numbered tabs that fold into a full-screen menu on phones.
- **Motion that respects you:** every link and button has a hover animation, and reduced motion keeps the gate whole so the page reads straight down.
- **Custom error pages:** a Bleach-inspired 404 and error page.
- **Accessible by default:** keyboard focus on every control, 44px touch targets and semantic markup.

## Sections

| # | Tab | What it shows |
|---|---|---|
| 01 | About | portrait, lead, facts and what the owner is open to |
| 02 | Projects | the shelf of projects with screenshots and links |
| 03 | Experience | roles and organisations on the cord |
| 04 | Stack | technologies grouped by area |
| 05 | GitHub | the contributions calendar |
| 06 | Contact | email and profile links, plus the resume |

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, cache components)
- **UI:** React 19, Tailwind CSS 4
- **Language:** TypeScript 5
- **Content:** a single typed file, [`src/content/site.ts`](src/content/site.ts)
- **Data:** GitHub GraphQL API (contributions)
- **Tooling:** pnpm, ESLint, React Doctor, Dependabot

## Quick Start

### Prerequisites

- Node.js 20.19 or later
- [pnpm](https://pnpm.io) (the only supported package manager; `pnpm-lock.yaml` is the lockfile)

### Installation

```bash
git clone https://github.com/n4t5Uuu/Bleach-Inspired-Portfolio.git
cd Bleach-Inspired-Portfolio
pnpm install
```

### Environment variables

The contributions section reads GitHub and needs a token. Create `.env.local` in the project root:

```env
GITHUB_TOKEN=your_github_token
```

Use a fine-grained token with read-only access to public repositories and no other permissions. Without a token, or if GitHub is unreachable, the section is simply left out.

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | start the development server |
| `pnpm build` | create a production build |
| `pnpm start` | serve the production build |
| `pnpm lint` | run ESLint |
| `pnpm react-doctor` | run a React Doctor scan |

There is no test runner. Check changes with `pnpm lint`, `pnpm build` and a look at the dev server.

## Project Structure

```
.
├── public/                 # resume PDF, portrait and project screenshots (webp)
├── src/
│   ├── app/                # page, layout, error pages and all styles (globals.css)
│   ├── components/         # gate, navigation, menu, shelf, themes and scroll effects
│   └── content/
│       └── site.ts         # all copy, links and project data
├── .github/                # Dependabot configuration
├── DESIGN.md               # the "Senkaimon Verse" design system
├── PRODUCT.md              # who the site is for and what it must do
└── CLAUDE.md               # instructions for coding agents working in this repo
```

## Editing the Content

Everything on the site lives in [`src/content/site.ts`](src/content/site.ts): name, tagline, gate verses, tabs, projects, experience, technologies, about and contact links.

- **Projects:** add an entry with a title, summary, role, stack, year, links and an optional list of screenshots.
- **Images:** put them in `public/` (project screenshots in `public/projects/`) as webp.
- **Resume:** replace `public/Olmedo_Resume.pdf`, keeping the same file name.
- **Gate verses:** three short lines of about 14 characters each; set `versePlaceholder` to `false` once they are your own.

## Design

The visual system is documented in [DESIGN.md](DESIGN.md): four materials (lacquer, washi paper, grained wood, void), a single vermilion accent, three type voices and a rule that every link and button answers a hover.

## Contact

- **Email:** olmedoalden4@gmail.com
- **LinkedIn:** [alden-olmedo](https://www.linkedin.com/in/alden-olmedo-b85375295/)
- **GitHub:** [@n4t5Uuu](https://github.com/n4t5Uuu)

---

<div align="center">

Inspired by *Bleach* by Tite Kubo. Everything drawn here is original; this site is not affiliated with the series.

</div>
