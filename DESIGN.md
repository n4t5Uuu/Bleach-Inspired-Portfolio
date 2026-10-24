---
name: Senkaimon Verse
description: A developer portfolio entered through a lacquer-and-paper gate; the work waits beyond it as numbered volumes.
colors:
  lacquer: "#0b0b0c"
  lacquer-2: "#1c1c1e"
  void: "#050506"
  washi: "#f3f3ef"
  washi-hi: "#fbfbf8"
  cord: "#d2381e"
  cord-lit: "#ff6a4d"
  cord-deep: "#b8301a"
  seam: "#e9e3ff"
  ghost: "#8e8e8b"
  mist: "#bdbdb7"
  mist-hi: "#cfcfca"
  ink-soft: "#5c5c58"
typography:
  display:
    fontFamily: "Dela Gothic One, Yu Gothic, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1
  numeral:
    fontFamily: "Dela Gothic One, Yu Gothic, sans-serif"
    fontSize: "clamp(5rem, 11vw, 10rem)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.02em"
  verse:
    fontFamily: "Shippori Mincho B1, Yu Mincho, serif"
    fontSize: "clamp(2.25rem, min(9.6vh, 5.4vw), 6.5rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Dela Gothic One, Yu Gothic, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.02
  title:
    fontFamily: "Dela Gothic One, Yu Gothic, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.15
  lead:
    fontFamily: "Shippori Mincho B1, Yu Mincho, serif"
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Zen Kaku Gothic New, Yu Gothic UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  nav:
    fontFamily: "Zen Kaku Gothic New, Yu Gothic UI, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 1.05vw, 1rem)"
    fontWeight: 700
    letterSpacing: "0.14em"
  label:
    fontFamily: "Zen Kaku Gothic New, Yu Gothic UI, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  hairline: "2px"
spacing:
  gutter: "clamp(16px, 4.4vw, 72px)"
  post: "clamp(10px, 3.4vw, 56px)"
  measure: "62ch"
  container: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.cord-deep}"
    textColor: "{colors.washi-hi}"
    rounded: "{rounded.none}"
    padding: "18px 28px"
  button-primary-hover:
    backgroundColor: "{colors.cord}"
  resume-tag:
    backgroundColor: "{colors.washi-hi}"
    textColor: "{colors.lacquer}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "14px 18px 12px"
  resume-tag-hover:
    textColor: "{colors.cord-deep}"
  link-strike:
    textColor: "{colors.cord-lit}"
  link-strike-hover:
    textColor: "{colors.washi}"
  nav-item:
    textColor: "{colors.ghost}"
    typography: "{typography.nav}"
    height: "44px"
  nav-item-hover:
    textColor: "{colors.cord-lit}"
  volume-cover:
    backgroundColor: "{colors.washi}"
    textColor: "{colors.lacquer}"
    rounded: "{rounded.none}"
  index-row:
    textColor: "{colors.washi}"
    typography: "{typography.title}"
    padding: "14px 0"
    height: "44px"
---

# Design System: Senkaimon Verse

## Overview

**Creative North Star: "The Senkaimon Verse"**

The site is a passage through a gate. Black lacquer frames every region, cool washi paper fills the surfaces that carry words, and the space beyond the gate is a velvet black lit only by taking darkness away. One vermilion cord runs through the whole system: it is the primary control at the gate, it becomes the experience timeline, and its colour marks every action a visitor can take. Everything else is held in ghosted greys until it is struck.

Density is low and deliberate. Sections are tall, type is large, and the content holds one world at a time: on the gate the doors and their verse; in the work, one lit volume while the others sink into shade. Motion is heavy and decisive, like weighted wood; ghost-to-struck states snap with no transition. Bleach is evoked through original material (gate, paper, lacquer, cord, ink butterflies), never through borrowed artwork.

All copy and project data in the shipped build is placeholder by design and is marked as such in the interface; nothing here describes real projects, employers, or biography.

**Key Characteristics:**
- Three materials: lacquer frames, washi surfaces, void depth.
- One accent, vermilion, reserved for controls and the cord line.
- Three type voices: heavy display gothic, vertical-capable Mincho for verse, quiet gothic for UI and prose.
- Square forms, structural borders, no card rounding.
- Light and focus conveyed by removing darkness, not by adding colour.

## Colors

A near-monochrome lacquer-and-paper palette with a single vermilion accent and a faint violet light.

### Primary
- **Cord Vermilion** (cord): the cord line, the tassel, the experience timeline and its diamond knots, text selection, and the scrollbar thumb. The hover state of the solid resume button.
- **Lit Vermilion** (cord-lit): vermilion as it reads on black. Inline action links, struck nav items, focus rings, the struck butterfly guide, caret colour.
- **Deep Vermilion** (cord-deep): solid vermilion fills that carry white text (the close resume button), and the struck state on paper (resume tag hover).

### Secondary
- **Seam Light** (seam): pale violet-white light leaking at the gate seam and flooding the passage; also the faint under-glow beneath volume covers. Used only as light, never as a fill for text or controls.

### Neutral
- **Black Lacquer** (lacquer): the frame. Gate lintel and posts, door borders, the fixed bar, the close section, the cover spine, text on paper.
- **Lacquer Edge** (lacquer-2): the lacquer's top beam (8px border on lintel and close), hairline rules between index rows, bar border, and the close credit rule.
- **Void** (void): the Dangai. Page background, work and experience sections, the black beat, the shade over unlit covers.
- **Washi** (washi): cool paper, never cream. Gate doors, volume covers, the About section ground, primary text on black.
- **Bright Washi** (washi-hi): the brightest paper, for the hanging resume tag and text on vermilion.
- **Ghost** (ghost): dim, unstruck state. Nav items, index numerals, field labels, periods, pending links, credit line.
- **Mist** (mist) and **Mist High** (mist-hi): secondary prose on black (summaries, role line, index stacks) and organisation names under timeline titles.
- **Soft Ink** (ink-soft): secondary text on paper (labels, placeholder notes, tag sub-label).

### Named Rules
**The One Cord Rule.** Vermilion marks only what can be acted on (controls, links, focus) and the cord line itself, including its continuation as the timeline. It never decorates headings, fills sections, or tints imagery.

**The Removal of Darkness Rule.** Focus and arrival are shown by lifting a void shade (unlit covers sit under a 60% void overlay) or by the seam flood, not by adding colour or brightness to the focused thing.

**The Cool Paper Rule.** Paper is washi (cool, slightly green-grey). Never warm it toward cream or parchment.

## Typography

**Display Font:** Dela Gothic One (with Yu Gothic, sans-serif)
**Verse Font:** Shippori Mincho B1 (with Yu Mincho, serif), weights 500 and 800
**UI / Body Font:** Zen Kaku Gothic New (with Yu Gothic UI, system-ui), weights 400, 500, 700

**Character:** A blunt, heavy gothic for names, numerals and section titles against a sharp-serifed Mincho that carries anything spoken as verse; a calm gothic handles reading and controls so the two loud voices never compete with the prose.

### Hierarchy
- **Verse** (800, clamp(2.25rem, min(9.6vh, 5.4vw), 6.5rem), 1.15): the gate verse, set vertically (`writing-mode: vertical-rl`), one column per line. The largest type at the gate.
- **Numeral** (400, clamp(5rem, 11vw, 10rem), 0.8, -0.02em): volume numbers on covers; the giant 01 in the passage scales further (clamp(9rem, 26vw, 24rem)).
- **Display** (400, clamp(2.5rem, 6vw, 5.5rem), 1): section titles (Projects, About, the close). Experience uses a smaller step (clamp(2.25rem, 3.6vw, 3.75rem)) because it sits sticky beside the timeline.
- **Name** (400, clamp(1.75rem, 3.2vw, 3.25rem), 0.95): the developer's name on the lintel; deliberately smaller than the verse.
- **Headline** (400, clamp(2rem, 4vw, 3.5rem), 1.02): project titles beside their covers.
- **Title** (400, clamp(1.125rem, 1.6vw, 1.5rem), 1.15): index rows, resume tag; timeline role titles at clamp(1.5rem, 2.6vw, 2.25rem).
- **Lead** (Mincho 500, clamp(1.5rem, 3vw, 2.5rem), 1.4, max 30ch): the About lead. Cover poems and timeline organisations use the same Mincho 500 at smaller sizes.
- **Body** (400, 1.0625rem, 1.7, max 62ch): summaries and prose.
- **Nav** (700, clamp(0.8125rem, 1.05vw, 1rem), 0.14em, uppercase): registry items, with display-font numerals at zero tracking.
- **Label** (700, 0.75rem, 0.16em, uppercase): field labels in definition lists, placeholder notes, sub-labels. The role line under the name uses a wider-tracked variant (0.32em).

### Named Rules
**The Spoken Line Rule.** Mincho is for lines that are voiced (verse, cover poems, the About lead, organisation names). It never sets UI, labels or buttons.

**The Numbered Registry Rule.** Destinations and volumes carry two-digit display numerals (01, 02...). Numbers are part of the name, set in the display face.

**The Label Is Data Rule.** Uppercase tracked labels name a field, a status, or a destination. They never sit above a heading as an eyebrow.

## Layout

Full-bleed bands stacked vertically, each with side padding of the gutter (clamp(16px, 4.4vw, 72px)) and content capped at 1240px centred. Sections breathe on viewport-relative vertical padding (roughly clamp(96px, 16-20vh, 180-220px)); volumes are separated by clamp(80px, 13vh, 150px).

The gate is a sticky 100svh stage (min 560px) inside a 170svh track when motion is allowed: lacquer lintel on top, then a two-column frame of paper doors between lacquer posts (post width clamp(10px, 3.4vw, 56px)). The work section overlaps the end of the track so its head arrives with the black beat.

Content grids use a 5:7 asymmetric split (index head, volume spreads) and 4:7 for the experience timeline. Volume spreads mirror on even entries so the cover always keeps the narrow column. Prose holds to a 62ch measure.

At 760px and below every split collapses to one column, covers cap at 360px wide, the lintel stacks, the registry becomes a two-column grid, and the fixed bar drops the name and numerals to fit one row of 44px targets. All interactive elements keep a 44px minimum height.

## Elevation & Depth

Depth is material, not floating. Lacquer, paper and void sit in planes: doors slide behind lacquer posts, covers carry a lacquer spine, the lintel casts a short shadow onto the doors. Shadows are soft and directional, never hard-offset, and two of them are light rather than shadow (the seam glow and the violet under-glow on covers).

### Shadow Vocabulary
- **Lintel drop** (`box-shadow: 0 18px 30px -12px rgb(0 0 0 / 0.65)`): the lintel over the doors.
- **Door edge** (`box-shadow: ±18px 0 40px -18px rgb(0 0 0 / calc(0.7 * var(--door)))`): grows on the inner edge as doors part.
- **Hanging tag** (`box-shadow: 0 10px 18px -8px rgb(0 0 0 / 0.35)`): the resume tag on paper.
- **Seam glow** (`box-shadow: 0 0 70px 22px rgb(233 227 255 / 0.55)`): light at the gate seam.
- **Cover glow** (`box-shadow: 0 40px 90px -30px rgb(233 227 255 / 0.22)`): faint violet light under volume covers on void.
- **Cord glow** (`box-shadow: 0 14px 28px -12px rgb(210 56 30 / 0.55)`): the solid resume button.

### Named Rules
**The Planes Not Cards Rule.** Elevation comes from one material sitting in front of another (lacquer over paper, paper over void). Do not add generic card shadows to lift content off a background.

## Shapes

Square by default. Corners are 0 everywhere a surface or control lives; the only softening is a 2px radius on the focus ring and the cord's foot. Borders are structural lacquer: 8px top beams, 10-18px door frames, a 3px tag border, 2px About rule, 1px hairlines between rows. The kumiko lattice on the doors is a coarse 3 by 4 grid of lacquer-tinted bars (clamp(5px, 0.55vw, 9px)). Timeline knots are 14px squares rotated 45 degrees. Covers are 3:4 portrait rectangles.

## Components

### Buttons
Heavy, square, and few.
- **Shape:** square corners (0).
- **Primary (close resume):** Deep Vermilion fill, Bright Washi text, 700 at 1.25rem, padding 18px 28px, cord glow beneath. Hover lifts the fill to Cord Vermilion.
- **Unavailable:** when the resume file is missing, the same shape renders as a non-link with transparent fill, Mist text, and a 2px Lacquer Edge inset outline, with a "Coming soon" sub-label.

### Resume Tag
A paper tag hung from a 2px lacquer string on the right door. Bright Washi, 3px lacquer border, display face at title size with a Soft Ink label sub-line (PDF / Coming soon). Hover turns border and text Deep Vermilion.

### Links
- **Strike links:** Lit Vermilion, 700, 2px underline offset 0.28em; hover flips text to Washi while the underline stays vermilion.
- **Pending stand-ins:** where a link does not exist yet, Ghost text at 0.9375rem says so plainly ("add later"). Never render a dead link.

### Navigation (Registry)
Numbered destinations in a row on the lintel and in the fixed bar. Ghost at rest, 700 uppercase at 0.14em; numerals in the display face. Hover and focus snap the item to Lit Vermilion and reveal a small ink butterfly at its top-left corner. The fixed lacquer bar slides down (0.4s ease-out) once the gate has been passed.

### Index
Volume rows at the top of the work section: numeral, title, stack, separated by Lacquer Edge hairlines. Numeral and title strike to Lit Vermilion on hover or focus.

### Volume Cover (signature)
A 3:4 washi cover with a lacquer spine on the left, the volume numeral at the foot, the title set vertically in Mincho at the top right, and the volume's poem in the middle. Only the cover nearest the viewport centre is lit; the others sit under a 60% void shade (0.7s ease-out). Placeholder notes stay legible above the shade.

### Gate and Cord (signature)
Two kumiko paper doors carrying the vertical verse, meeting at a glowing seam. The vermilion cord and tassel hang at the seam with a narrow vertical lacquer label strip; hover or focus drops the tassel 14px and lights it. Scrolling parts the doors on a weighted cubic curve, floods the seam light, holds a full black beat, then reveals the work. With reduced motion or without JavaScript the gate stays whole and the page reads straight down.

### Timeline
The cord continues as a 4px vermilion line down the experience section, with rotated-square knots ringed in void at each role. Role in display face, organisation in Mincho, period as a tabular uppercase label.

### Placeholder Note
A Label-style status marker (Ghost on black, Soft Ink on paper) attached wherever content is not real yet. It is part of the system, not a temporary hack: placeholders stay visibly placeholders.

## Do's and Don'ts

### Do:
- **Do** frame every region in lacquer and put words that are meant to be read slowly on washi paper.
- **Do** keep vermilion to controls, links, focus and the cord line; use Lit Vermilion on black and Deep Vermilion under white text or on paper.
- **Do** show state by snapping ghost to struck, with no colour transition on hover.
- **Do** show focus or arrival by lifting darkness (void shade, seam flood) rather than adding colour.
- **Do** number destinations and volumes with two-digit display numerals.
- **Do** honour reduced motion: the gate stays whole and nothing parts, flaps, or dims.
- **Do** keep every interactive target at least 44px tall and every placeholder visibly labelled.

### Don't:
- **Don't** warm the paper toward cream or parchment.
- **Don't** introduce a second accent colour or use vermilion on headings or backgrounds.
- **Don't** round surfaces or controls; corners stay square apart from the 2px focus ring.
- **Don't** set UI, buttons or labels in Mincho.
- **Don't** place uppercase tracked labels above headings as eyebrows.
- **Don't** use official Bleach artwork, logos, characters or quoted text; butterflies, gate and cord are original drawings.
- **Don't** use bouncy or elastic easing; motion is weighted and decisive.
