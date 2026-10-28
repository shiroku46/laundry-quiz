# ChatGPT → GitHub direct-write smoke test

Date: 2026-10-28

This file is a harmless write/read-back test for making GitHub changes from an ordinary ChatGPT conversation using a connected GitHub tool. It is isolated from the default branch.

## Scope
- Repository: `shiroku46/laundry-quiz`
- Branch: `experiment/chatgpt-direct-github-20261028`
- The game's existing HTML, CSS, JavaScript and images are unchanged.
- No deployment or production branch updates are part of this test.

## Checks
1. Create this file through the GitHub connection.
2. Read back this exact file from the test branch.
3. Run a branch-only GitHub Actions smoke check:
   - `node --check script.js`
   - Verify `index.html` and `style.css` are non-empty.

This establishes that GitHub writing and automated static checks can be orchestrated through ChatGPT. It does not independently prove whether a ChatGPT plan's Codex/Work usage counters changed; check account usage separately.

Do not merge this experiment into `main`. Delete the branch after evaluation if it is no longer useful.
