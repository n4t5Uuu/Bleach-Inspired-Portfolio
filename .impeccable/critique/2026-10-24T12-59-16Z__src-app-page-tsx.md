---
target: portfolio homepage
total_score: 21
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\Alden Olmedo\\Documents\\VSCode\\bleach-inspired-portfolio\\src\\app\\page.tsx"
target_fingerprint: "sha256:cfe1f8bab05089f6aa89bd2487c083267d8b1e863dc39be403a31eb6ddd5187f"
target_path: "C:\\Users\\Alden Olmedo\\Documents\\VSCode\\bleach-inspired-portfolio\\src\\app\\page.tsx"
timestamp: 2026-10-24T12-59-16Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score (heuristic 10 n/a; max 36)

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Fully open frame is pure black; post-gate bar has no current-section state |
| 2 | Match System / Real World | 2 | Theme labels instead of recruiter words; sideways English verse |
| 3 | User Control and Freedom | 2 | 250svh passage only skippable via cord/skip link; nav leaves page for stubs |
| 4 | Consistency and Standards | 2 | Two 01–04 numbering systems; Volume 02 cover larger; case-study link looks live while siblings pending |
| 5 | Error Prevention | 2 | Case-study links lead to empty stubs; long verse clipped silently |
| 6 | Recognition Rather Than Recall | 3 | Numbered labelled nav visible after gate |
| 7 | Flexibility and Efficiency | 2 | No one-glance index of the work; no skip on return visit |
| 8 | Aesthetic and Minimalist Design | 3 | Disciplined palette; inflated gaps; left door mostly empty |
| 9 | Error Recovery | 3 | Stubs state what is missing and link back |
| 10 | Help and Documentation | n/a | Single reading page |
| **Total** | | **21/36** | **Acceptable (58%)** |

## Design Specificity Verdict
Gate, cord-as-timeline, lacquer-spined covers and the washi About wall are authored for this product. Below the gate the work section is a standard zigzag; the build is timider than the chosen sketch (verse ~59px vs ~110px). Detector: CLI 0 findings; URL scans flag low-contrast on the dimmed "Placeholder cover" note (state-dependent, aria-hidden) and stragglers in placeholder paragraphs. No console errors, no overflow, focus rings everywhere.

## Priority Issues
1. [P1] Nav and case-study links lead to empty stub pages while the content is on the homepage. Fix: in-page anchors, pending case-study state. (clarify)
2. [P1] Gate verse breaks with real content (slides under resume tag on desktop, clipped on mobile; butterfly overlaps). Fix: width-aware sizing, desktop tag band, line budget, butterflies off the text. (harden)
3. [P1] Passage too long for a 30-second scan (first project title at 3.1 viewports, Experience at 6). Fix: shorter gate, tighter gaps, compact project index after the black beat. (layout)
4. [P2] Hierarchy for non-fans: sideways verse dominates, door order fights LTR scanning, role is 13px caps. Fix: plain one-line descriptor ≥18px, verse reads left to right across doors. (typeset)
5. [P2] Mobile tap targets 26–36px; bar wraps to two rows. Fix: 44px targets, single-row bar. (adapt)

## Persona Red Flags
- Jordan: "01 Projects" leads to a stub; two meanings of 01; black frame reads as broken.
- Riley: long verse clipped; Volume 02 size mismatch; three identical case-study links to one stub; single global placeholder flag.
- Casey: ~2.5 screens before work; 31–34px targets; cord crowds the verse.
- Recruiter new to Bleach: verse carries no candidate information; stack keywords small and three screens down.

## Minor Observations
- Close headline promises a resume while the button is disabled.
- aria-disabled on a span does nothing.
- No text-wrap: pretty on body copy.

## Questions to Consider
- Who is the verse for, if the decision-maker cannot read it at scanning speed?
- Should a passed gate stay open for the session?
- When real screenshots arrive, what keeps a volume a tankobon rather than a card?
