# CLAUDE.md

This repository is the *Service Management Guide* (65 topics in 8 parts, locale `en-001`, plus AI skills and the `service-management-guide.github.io/` website subproject). All operating instructions live in [`AGENTS.md`](AGENTS.md); the governing specification is [`spec/index.md`](spec/index.md), which wins wherever any file disagrees with it. Its companion is the *Service Management Metrics* book (`~/git/service-management-metrics/service-management-metrics`).

Read in this order: `spec/index.md` → `AGENTS.md` → the role card in `AGENTS/` for your task.

- Work serially. Do not use subagents, workflows, or fan-outs unless the maintainer asks.
- Commit as work progresses, one logical change per commit, ending with the `Co-Authored-By` trailer the harness specifies.
- Use pnpm, never npm or yarn, in `service-management-guide.github.io/`.
- After changing any topic, title, or skill, run `bin/build-llms` and `bin/check`.
