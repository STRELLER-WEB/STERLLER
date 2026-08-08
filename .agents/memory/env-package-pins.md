---
name: Environment package pins
description: Packages that must stay pinned due to environment/network constraints
---

`tsx` is pinned at **4.20.5**. **Why:** installing the latest tsx (4.23.x) fails — the registry tarball fetch is blocked by the environment firewall. **How to apply:** don't bump tsx during dependency updates unless a fresh install of the newer version is verified to succeed first.
