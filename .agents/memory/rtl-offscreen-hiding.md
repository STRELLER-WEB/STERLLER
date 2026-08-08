---
name: RTL off-screen hiding pitfall
description: Why huge negative-left offsets break RTL pages and what to use instead
---

Rule: never hide elements with large negative offsets (e.g. `-left-[9999px]`, `text-indent: -9999px`) in a site that has any RTL locale. Use clip-based visually-hidden CSS instead (`position:absolute; width/height:1px; margin:-1px; overflow:hidden; clip-path:inset(50%); white-space:nowrap`).

**Why:** In `dir="rtl"` documents, overflow to the LEFT is scrollable (unlike LTR, where negative-left overflow is ignored). A `-left-9999px` honeypot made `body.scrollWidth` ~11,000px on the Arabic page; headless capture rendered the document's top-left region → the page appeared completely blank, with zero console errors. Extremely hard to diagnose: DOM inspection showed content positioned correctly at the viewport.

**How to apply:** For honeypots, skip-links, and sr-only content, always use the clip pattern. When an RTL page looks blank or has a giant horizontal scrollbar, check `document.body.scrollWidth` and look for absolutely positioned elements with large negative offsets.
