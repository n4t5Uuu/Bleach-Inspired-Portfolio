---
name: Senkaimon Verse
description: A developer portfolio entered through a lacquer-and-paper gate; the work waits beyond it as books on a shelf, hung on a single vermilion cord.
colors:
  lacquer: "#0b0b0c"
  lacquer-2: "#1c1c1e"
  void: "#050506"
  washi: "#f3f3ef"
  washi-hi: "#fbfbf8"
  cord: "#d2381e"
  cord-lit: "#ff6a4d"
  cord-deep: "#b8301a"
  tassel-knot: "#9e2814"
  seam: "#e9e3ff"
  ghost: "#8e8e8b"
  mist: "#bdbdb7"
  mist-hi: "#cfcfca"
  ink-soft: "#5c5c58"
  wood: "#2b2521"
  wood-deep: "#1d1916"
  wood-pull: "#26211e"
  navy: "#0a2260"
typography:
  display: { fontFamily: "Dela Gothic One, Yu Gothic, sans-serif", fontSize: "clamp(2.25rem, 4.6vw, 4.5rem)", fontWeight: 400, lineHeight: 1 }
  headline: { fontFamily: "Dela Gothic One, Yu Gothic, sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.02 }
  title: { fontFamily: "Dela Gothic One, Yu Gothic, sans-serif", fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)", fontWeight: 400, lineHeight: 1.1 }
  numeral-book: { fontFamily: "Dela Gothic One, Yu Gothic, sans-serif", fontSize: "clamp(3.5rem, 7vw, 6.5rem)", fontWeight: 400, lineHeight: 0.8 }
  verse: { fontFamily: "Shippori Mincho B1, Yu Mincho, serif", fontSize: "clamp(1.75rem, min(6.6vh, 3.9vw), 4.5rem)", fontWeight: 800, lineHeight: 1.18 }
  poem: { fontFamily: "Shippori Mincho B1, Yu Mincho, serif", fontSize: "clamp(1.375rem, 2.3vw, 2rem)", fontWeight: 500, lineHeight: 1.25 }
  body: { fontFamily: "Zen Kaku Gothic New, Yu Gothic UI, system-ui, sans-serif", fontSize: "1.0625rem", fontWeight: 400, lineHeight: 1.7 }
  action: { fontFamily: "Zen Kaku Gothic New, Yu Gothic UI, system-ui, sans-serif", fontSize: "1.25rem", fontWeight: 700 }
  nav: { fontFamily: "Zen Kaku Gothic New, Yu Gothic UI, system-ui, sans-serif", fontSize: "clamp(0.6875rem, 0.95vw, 0.9375rem)", fontWeight: 700, letterSpacing: "0.1em" }
  label: { fontFamily: "Zen Kaku Gothic New, Yu Gothic UI, system-ui, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em" }
rounded: { none: "0px", focus: "2px", pull: "3px", roller: "13px" }
spacing: { gutter: "clamp(16px, 4.4vw, 72px)", measure: "62ch", container: "1240px", thread: "1100px" }
components:
  button-primary: { backgroundColor: "{colors.washi}", textColor: "{colors.lacquer}", typography: "{typography.action}", rounded: "{rounded.none}", padding: "18px 28px" }
  button-primary-hover: { textColor: "{colors.washi-hi}", backgroundColor: "{colors.cord-deep}" }
  resume-tag: { backgroundColor: "{colors.washi-hi}", textColor: "{colors.lacquer}", typography: "{typography.title}", rounded: "{rounded.none}" }
  link-strike: { textColor: "{colors.cord-lit}" }
  nav-item: { textColor: "{colors.ghost}", typography: "{typography.nav}", height: "44px" }
  nav-item-hover: { textColor: "{colors.cord-lit}" }
  book-cover: { backgroundColor: "{colors.washi}", textColor: "{colors.lacquer}", rounded: "{rounded.none}" }
---

# Design System: Senkaimon Verse

## Overview

A passage through a gate into a room of paper and wood. Black lacquer frames every region, cool washi paper carries the words, dark grained wood holds what is shelved or rolled, and beyond the gate is a velvet black lit only by taking darkness away. One vermilion cord runs through the system: the control at the gate, the line Experience and Technologies hang from, and the colour of everything a visitor can act on. Everything else is ghosted grey until struck.

Density is low and deliberate: large type, tall sections, one thing at a time (the gate and its verse, one pulled-forward book, one unrolled scroll). The gate is locked until the visitor pulls the cord, pushes down, drags the scrollbar or follows a tab; then a timed opening plays. Motion is heavy and decisive, like weighted wood. Bleach is evoked through original material (gate, paper, lacquer, cord, hanko seal, ink butterflies), never borrowed artwork. Copy is real except the gate verses, which are marked as placeholder.

**Key characteristics:** four materials (lacquer, washi, grained wood, void); one accent, vermilion; three type voices (display gothic, Mincho for what is written or spoken on paper, quiet gothic for UI and prose); square surfaces (rounding only on turned wood and the focus ring); texture from two tiling SVG grains, never images; light and focus conveyed by removing darkness.

## Colors

Near-monochrome lacquer and paper, warm-brown wood, one vermilion, a faint violet light.

- **Cord** (cord): the cord, the thread with its diamond knots, the tassel, selection, scrollbar. **Lit** (cord-lit): vermilion on black (links, struck nav, focus, chosen book title). **Deep** (cord-deep): vermilion on paper (hanko, stamp borders, button bottom rules, tag hover). **Tassel Knot**: inside the tassel drawing only.
- **Seam** (seam): pale violet-white light at the gate seam and under covers. Light only, never a fill for text or controls.
- **Lacquer** (frame: lintel, posts, door borders, fixed bar, close, spine, text on paper), **Lacquer Edge** (8px top beam, hairlines), **Void** (page ground), **Washi** (cool paper, never cream), **Bright Washi** (verse slips, resume tag, text on vermilion), **Ghost** (unstruck state), **Mist / Mist High** (secondary prose on black), **Soft Ink** (secondary text on paper).
- **Wood, Deep Wood, Pull Wood**: lattice bars, shelf planks and rollers, door pulls. Always carry the wood grain. Translucent paper-shade browns age paper edges only.

**The One Cord Rule.** Vermilion marks the cord and what hangs from it, what can be acted on, and the owner's red ink (seal, stamps). It never decorates headings, fills sections or tints imagery.
**The Removal of Darkness Rule.** Focus and arrival lift a shade (unchosen books dimmed to 55%, the passage flooding with seam light), not add colour or brightness.
**The Cool Paper Rule.** Paper is cool washi; browns only age its edges.

### Light theme
A "2004 broadcast" day look: sunlit paper, a printed white page, navy (#0a2260) and cobalt in place of the night violet. Paper takes a 2px navy edge, unchosen books fade to 50% opacity, the shelf plank is pale wood with a navy foot, and the close rises on a blue-white fire band. A timecode, margin numerals and scan lines mark the broadcast frame. The lacquer frame never changes. Switching theme past the gate cuts with a Getsuga Tensho slash and never stalls or flashes: tab underlines snap to the new theme's rest state with no transition.

## Typography

Display **Dela Gothic One**; verse **Shippori Mincho B1** (500, 800); UI and body **Zen Kaku Gothic New** (400, 500, 700). A blunt heavy gothic for names, numerals, dates and titles against a sharp Mincho for paper, with a calm gothic so the two loud voices never compete with prose. All sizes are fluid clamp() values.

- **Display** (section titles), **Headline** (the open project's title), **Title** (resume tag; book titles slightly smaller), role titles and periods in display too.
- **Verse** (Mincho 800): the gate verse on paper slips, sized from both axes so a 14-character line fits the door; steps down at 760px. **Poem** (Mincho 500, 22-32px): the title on a book cover, using the cover's full width. **Lead** and organisation names are Mincho 500.
- **Body** (1.0625rem, 1.7, 62ch); body small 0.9375rem; **Action** 1.25rem (close buttons).
- **Nav** (700, 0.69-0.94rem, 0.1em, uppercase; numerals in the display face); **Label** (700, 0.75rem, 0.16em, uppercase) for fields, status and group plates.

**The Spoken Line Rule.** Mincho is for lines written or voiced on paper. It never sets UI, labels or buttons.
**The Numbered Registry Rule.** Destinations and volumes carry two-digit display numerals; the number is part of the name.
**The Label Is Data Rule.** Uppercase tracked labels name a field, status, group or destination. Never an eyebrow above a heading.

## Layout

Full-bleed bands, side padding of the gutter; work content capped at 1240px, the thread and About scroll at 1100px; prose at 62ch.

**Gate:** a sticky 100svh stage inside a 170svh track when motion is allowed: lacquer lintel (your name and the theme switch left, the tabs right), then two paper doors between lacquer posts. The left door carries the three-line verse; the right the resume tag hanging from the top and the hanko seal at the foot. The work section is pulled up 70svh over the track.

**Opening:** scroll-locked while closed. The cord, a downward wheel, touch or key push, or a tab plays the opening (3.2s, scrolling the passage itself) and then unlocks; dragging the scrollbar unlocks it directly and the doors follow. The numeral in the light is the destination's own number (01 for the cord). Scrolling back to the top locks it again. With reduced motion or no JavaScript the gate stays whole and the page reads straight down.

**Sections:** Projects is a wrapping shelf of 3:4 books (up to 340px, three across) and one detail panel; with screenshots the panel is text on the left and tilted paper slips on the right at 1000px and up. Experience and Technologies share a three-column grid (dates, the cord, content). About is a 3:7 grid (portrait, text) on the scroll paper. The close fills the screen between two door panels.

**Tabs:** six numbered destinations (About, Projects, Experience, Stack, GitHub, Contact). Short names in the header and bar, full names in the Menu sheet. The resume is not a tab: it is the tag on the gate door, the closing button and a Menu entry.

**Breakpoints:** to 1680px the header's tabs become a full-width rail of equal slats under the name; the fixed bar drops its numerals below 1000px. At 760px and below the tabs fold into a **Menu** button (header and bar) opening a full-screen lacquer sheet with the destinations set large (a native dialog); the shelf becomes a swipe row with a "Swipe" cue and one tick per book; the thread moves to the left edge; the portrait centres at 200px. Every interactive target keeps a 44px minimum.

## Elevation & Depth

Depth is material, not floating: doors slide behind posts, books stand on planks, slips and strips are pasted or hung in front of what they sit on, the scroll hangs between rollers. Shadows are soft and directional, never hard-offset; two are light (seam glow, violet cover under-glow). Texture is two tiling SVG tokens, `--grain-paper` and `--grain-wood`. Shadows in use: lintel drop `0 18px 30px -12px`, paper age inset `0 0 70px`, slip `0 8px 14px -8px`, plank `0 20px 28px -12px`, roller `0 8px 18px -6px`, close button `0 14px 24px -12px`, seal ink drop-shadow.

**The Planes Not Cards Rule.** Elevation is one material in front of another. No generic card shadows.
**The Two Grains Rule.** Paper takes the paper grain, wood the wood grain, nothing else is textured; never over text-bearing vermilion or void.

## Shapes

Square by default. Softening only on the 2px focus ring, 3px door pulls and 13px scroll roller ends. Borders are structural lacquer (8px beams, 10-18px door frames, 3px tag and portrait border, 2px stamp borders, 4px button rules, 1px hairlines). The kumiko lattice is a coarse 3 by 4 grid of wood bars masked over paper. Slips and strips are rectangles rotated up to about 1.2 degrees (screenshot slips about 0.8). Timeline knots are rotated 14px squares. The hanko seal is the one circle, roughened and tilted -7 degrees. Covers are 3:4.

## Components

- **Buttons:** square paper with grain, Lacquer text, 700, a Deep Vermilion bottom rule. Hover: red rises from the foot until it fills the button and the ink turns to paper; a press sinks it. Unavailable resume renders as a ghost non-link with "Coming soon". The closing profile links are equal outlined slips that lift.
- **Resume tag:** a Bright Washi tag on a 2px string at the top of the right door; it sways 3 degrees when reached for. Hover turns border and text Deep Vermilion.
- **Hanko seal:** an original vermilion disc with inner ring and the owner's initials, roughened and tilted. Decorative only; never a control.
- **Links:** strike links are Lit Vermilion, 700, 2px underline; they strike forward on hover. Where a link does not exist yet, Ghost text says "add later". Never a dead link.
- **Navigation:** Ghost at rest, snapping to Lit Vermilion; a red stroke cuts in under the tab by night (a small fire lights by day). The fixed lacquer bar slides down once the gate is passed. The theme switch reads a monitor icon and System, a hairline, then the moon with Light or Dark.
- **Menu sheet:** lacquer over the whole screen, name and a close mark at the top, destinations as large display type with vermilion numerals; links step forward and the close mark turns on hover.
- **Companion:** three original ink butterflies follow the pointer, flap while it moves, turn Lit Vermilion and slow when perched on a destination.
- **Gate and cord:** two kumiko doors with a recessed pull each; the vermilion cord and tassel hang at the seam with a vertical label strip, and the tassel drops 14px on hover. The opening parts the doors on a weighted curve, floods the seam light, holds a black beat, then reveals the work.
- **Shelf and books:** 3:4 washi covers with a lacquer spine (crease and lit ridge at the hinge, shaded fore-edge), a Mincho poem filling the top, the numeral at the foot, title and stack beneath, standing on a 22px plank (shaded top, lit front edge, darkened grain). One tablist with roving tabindex. The chosen book stays on the plank and lights its fire band, its title turns Lit Vermilion and underlined; the rest dim. The panel shows title, stack, summary, role, year, links (Live Site, Admin Site, Source, only those that exist) and screenshots. Without JavaScript every panel stays open.
- **Thread:** the cord continues as a 4px line that draws itself down. Experience: date left of the cord, a knot on it, role and Mincho organisation right. Technologies: a plate and 2px rail per group, grained paper strips hung on 1px strings that swing to rest.
- **About scroll:** a washi scroll between two wood rollers unrolling from the top: portrait in a 3px lacquer frame, the Mincho lead, facts as stamped boxes with 2px Deep Vermilion borders tilted alternately.
- **Contributions:** a year of GitHub activity from the API, cached daily, left out when the token is missing or the call fails.
- **Close:** the gate from behind: lacquer, a door each side sliding shut, the cord ending in the tassel, the closing line, the paper buttons, the email with an envelope mark, profile slips, and a credit line. It fills one screen.
- **Error pages:** the 404 and error page reuse the close (doors, cord, tassel) with a large outlined numeral, a display headline and a way back to the gate (plus "Try again" on the error page).
- **Placeholder note:** a Label-style marker (Ghost on black, Soft Ink on paper). Placeholders stay visibly placeholders.

## Do's and Don'ts

### Do:
- **Do** frame every region in lacquer, put words meant to be read slowly on washi, and shelve or roll things on grained wood.
- **Do** keep vermilion to the cord, controls, links, focus and the owner's red ink; Lit Vermilion on black, Deep Vermilion on paper.
- **Do** give every link and button a hover animation, never a colour change alone, from the page's vocabulary: a red stroke cuts in or a seam opens under it; it strikes forward; it lifts and red rises from its foot; or its mark turns. Keyboard focus gets the same answer. Movement runs only with a real pointer and motion allowed; colour still changes under reduced motion. Entrances ease out over 0.25-0.35s, exits are quicker, a press sinks the control.
- **Do** show focus or arrival by lifting darkness rather than adding colour, with a non-colour cue (underline) wherever colour marks the chosen item.
- **Do** number destinations and volumes with two-digit display numerals; apply the grain tokens to the right material; use a clamp() from the ramp for any new type size.
- **Do** honour reduced motion: the gate stays whole, the page is unlocked, and nothing parts, swings, draws or unrolls.
- **Do** keep every interactive target at least 44px tall, and never let a theme change animate hover states.

### Don't:
- **Don't** warm the paper toward cream, add a second accent, or use vermilion on headings or section backgrounds.
- **Don't** round surfaces or controls beyond the focus ring, door pulls and roller ends.
- **Don't** set UI, buttons or labels in Mincho, or place tracked labels above headings.
- **Don't** use official Bleach artwork, logos, characters or quoted text; everything drawn is original.
- **Don't** use images or photography for texture, or bouncy and elastic easing for state changes.
