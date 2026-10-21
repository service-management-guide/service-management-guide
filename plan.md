# Build plan

## What we are building

The *Service Management Guide*: 8 parts, 65 topics (no preface), in the canonical locale `en-001`, on service management in the age of ITIL 5, with agile, AI, automation, and analytics as the four lenses. The monorepo also holds AI skills (`skills/`), tooling (`bin/`), and the reading website (`service-management-guide.github.io/`), deployed by git subtree. Everything follows `spec/index.md`.

## Reference implementation

`~/git/agile-itil-guide/agile-itil-guide` is the model: spec-first authoring, `AGENTS.md` plus role cards, `bin/check` gates, `bin/build-llms`, reader and maintainer skills, and the SvelteKit + Lily Design System site. Copy its patterns; do not copy its content. Differences on purpose:

- ITIL 5 is the frame, not an afterthought (Topic 1.3 — ITIL 5; Part 1).
- Three new parts: AI in service management (Part 5), Automation (Part 6), Analytics (Part 7).
- A ninth template section: "Agile, AI, automation, and analytics".
- Service management beyond IT (Topic 1.9 — Enterprise Service Management).
- A companion metrics book: `~/git/service-management-metrics/service-management-metrics`.

## Phases

**Phase 0 — Scaffolding** (done in this commit): layout, spec, manifest, stubs, tooling, skills, site skeleton.
**Phase 1 — Research:** read the core sources in `_sources/research-notes.md`; re-verify ITIL 5 against peoplecert.org; confirm the manifest before prose is written.
**Phase 2 — Topics, part by part:** Part 1 first (ITIL 5, SVS, principles), then Part 2, Part 3, and so on. Part 8 last. One topic per commit.
**Phase 3 — Reference matter and skills:** glossary, index, prune unlinked copied skills, refine the two original skills.
**Phase 4 — Quality gates:** reviewer runs the four gates on every topic (`bin/check --links --strict`).
**Phase 5 — Website:** install with pnpm, `pnpm sync`, `pnpm check`, `pnpm build`, browser check at 1440px and 390px.
**Phase 6 — Release:** manifest, README, glossary, index, and `llms.*` agree; first subtree deploy.

## Key decisions to confirm with the maintainer

1. **Manifest size.** 65 topics is large; Parts 6 and 7 could be merged into one "Automation and analytics" part for a first release.
2. **GitHub organization and remotes:** `service-management-guide/service-management-guide` and `service-management-guide/service-management-guide.github.io` (remote `site`). Both need creating.
3. **ITIL 5 depth.** Public, owner-verified detail is thin; Topic 1.3 should be rewritten as PeopleCert publishes more.

## Risks

Copyrighted framework text (summarize and cite); ITIL 5 claims from marketing sources (verify on peoplecert.org); AI hype and invented numbers (spec §5, §6); AI regulation changing (date every claim); scope overlap between Parts 5, 6, 7 and Part 3 (each concept has one home topic, named in §4).
