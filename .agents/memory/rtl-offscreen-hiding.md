---
name: RTL off-screen hiding pitfall
description: Why huge negative-left offsets break RTL pages and what to use instead
---

Rule: never hide elements with large negative offsets (e.g. `-left-[9999px]`, `text-indent: -9999px`) in a site that has any RTL locale. Use clip-based visually-hidden CSS instead (`position:absolute; width/height:1px; margin:-1px; overflow:hidden; clip-path:inset(50%); white-space:nowrap`).

**Why:** In `dir="rtl"` documents, overflow to the LEFT is scrollable (unlike LTR, where negative-left overflow is ignored). A `-left-9999px` honeypot made `body.scrollWidth` ~11,000px on the Arabic page; headless capture rendered the document's top-left region → the page appeared completely blank, with zero console errors. Extremely hard to diagnose: DOM inspection showed content positioned correctly at the viewport.

**How to apply:** For honeypots, skip-links, and sr-only content, always use the clip pattern. When an RTL page looks blank or has a giant horizontal scrollbar, check `document.body.scrollWidth` and look for absolutely positioned elements with large negative offsets.

Related Arabic/RTL rules from the same project:
- Zero out letter-spacing for ALL tracked text under `html[lang="ar"]`, but exempt Latin brand lettering: `html[lang="ar"] *:not(.wordmark) { letter-spacing: 0 !important }` — a blanket rule silently strips intentional wordmark tracking.
- Tailwind physical gradient directions (`bg-gradient-to-r`) don't flip in RTL; add an `rtl:bg-gradient-to-l` variant when the gradient exists for text readability.
- In an SPA, hash deep-links (`/ar#contact`) need a post-render `scrollIntoView` retry — the browser's native anchor jump fires before React renders the target.

## Animated numbers inside RTL sentences
When JS re-renders numeric substrings (count-up effects) as spans inside Arabic text, wrap each number in `dir="ltr"` + `unicode-bidi: isolate` so the digit run keeps the same bidi ordering as the original plain text. Use `font-variant-numeric: tabular-nums` to stop width jitter while counting.

## Motion + RTL rule of thumb
Scroll reveals that move only on the Y axis (translateY) are RTL-neutral — prefer them over X-axis slides, which need logical-direction handling. Underline hover effects that grow from `transform-origin: center` avoid the left/right origin problem entirely.
