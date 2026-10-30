---
name: handoff
description: Write handoff.md, a summary of the current session that a fresh session can pick up cold: goal, current state, decisions made, next steps, constraints and preferences, key files, and open questions. Use when the user says "handoff", "hand off", "write a handoff", "summarize this session for a new one", "I'm running out of context", or runs /handoff.
argument-hint: "[optional focus, e.g. 'only the gate work']"
---

# Handoff

Write `handoff.md` in the repo root so a new session can continue without this one. The reader has none of this conversation: no files read, no decisions seen, no corrections heard. Write for that reader.

## 1. Gather facts before writing

Do not write from memory alone. Run these and use the real output:

```bash
git branch --show-current
git status --short --untracked-files=all
git log --oneline -10
git diff --stat
```

Add anything the session left running or half-done: dev servers, background commands, scratch files, a failing build or lint. Read a file before quoting it.

## 2. Write handoff.md

Use exactly these seven sections, in this order, with these headings. Skip none; write "None" under a section with nothing to say.

```markdown
# Handoff

## Goal
What is being accomplished, in 1-2 sentences.

## Current state
- Done: what is finished and verified (say how it was verified).
- In progress: what is started and not finished, and where it stopped.
- Broken: what fails, with the exact error or symptom.
Include the branch, whether the tree is clean, and what is committed versus not pushed.

## Decisions made
Each settled choice and why, one line each, so the new session does not reopen it. Include what was rejected.

## Next steps
A numbered, prioritized list. The very next action is item 1 and is concrete enough to run without thinking: a command, a file, a change.

## Constraints and preferences
How the user wants answers (concise, drop-in code), deadlines, and things to avoid. Include rules from CLAUDE.md that bit this session and corrections the user gave.

## Key files and artifacts
Paths with a clause on why each matters. Snippets and error messages that matter, verbatim, short.

## Open questions
What is still unresolved, and who has to answer it.
```

## 3. Rules

- Concrete over general: paths, commands, values, error text. Never "see above" or "as discussed".
- Facts only. Do not invent state, file paths, hashes, or results; if you did not check it, say "not checked".
- State what is not committed or not pushed, and what is running.
- Short. A page or two. Cut narration of how the session went; keep what the next session needs to act.
- Never write secrets: tokens, keys, passwords, `.env` values. Name the variable and where it lives ("`GITHUB_TOKEN` in `.env.local`, not committed"), not its value.
- If the user gave an argument, focus the file on that part of the work and say so in Goal.
- If `handoff.md` already exists, read it first and replace it with the current picture; do not append a second one.

## 4. Finish

Tell the user the path, and in two lines: what is next, and what is not committed. Do not commit `handoff.md` or push unless asked. It holds session specifics, so offer to add it to `.gitignore` if the user does not want it tracked.
