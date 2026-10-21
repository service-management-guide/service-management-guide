---
name: service-management-guide-maintainer-skill
description: Use when asked to write, review, or update a topic, glossary entry, skill link, or reference in the Service Management Guide monorepo and keep it consistent with spec/index.md — as distinct from reading or applying the guide (see service-management-guide-skill).
---

# Service Management Guide (maintainer skill)

Read in order: `spec/index.md`, `AGENTS.md`, then the role card in `AGENTS/` for the task. The spec wins where files disagree. The topic template is in `spec/topic-template/index.md` and the manifest is §4 of the spec.

## Writing or changing a topic

1. Work serially, one topic at a time. Do not fan out unless the maintainer asks.
2. Research first. Read the sources this session and record what you read in `_sources/research-notes.md` (source URL, what it says, what it does not say). Never invent sources, quotations, figures, or Wikipedia slugs. Mark anything unverified.
3. Use the 16 sections in the template, in order, with the exact headings. The first line is `# Title`: it is the source of truth for the title. Follow with a bold one-sentence thesis.
4. Follow `STYLE_GUIDE.md`: en-001 spelling, second person, no banned words, acronyms expanded on first use in each topic, cross-references as "Topic N.N — Title" with the exact title.
5. Examples are fictional and set in a named type of organization. State what remained hard.
6. Prompts have a bold purpose, a fenced `text` block, `[placeholders]`, a request for clarifying questions, and "List what you are unsure of." Never ask an AI to invent metrics, sources, or compliance claims.
7. Link only skills that exist in `skills/`, with a sentence on when to use each (1 to 5 per topic).
8. Summarize frameworks and standards; quote only a phrase or one sentence with a citation. State ITIL version caveats and trademark accuracy. For ITIL 5, state only what `_sources/research-notes.md` records as verified from peoplecert.org. In the AI, automation, and analytics lens, name an owner, a human oversight point, and a rollback or error check.

## Checks before committing

1. Run `bin/check --links` (structure, counts, skill links, cross-references, Wikipedia slugs) and fix every failure.
2. Run `bin/build-llms`, and `bin/build-readme` if titles or the manifest changed.
3. Update `glossary/index.md`, `index/index.md`, `_sources/research-notes.md`, and `tasks.md` in the same commit as the topic.
4. In `service-management-guide.github.io/`, run `pnpm sync`, `pnpm check`, and `pnpm build` (pnpm only).
5. Commit one logical change per commit, with the `Co-Authored-By` trailer the harness specifies.

## Reviewing

Check sources against what the topic claims, check that nothing from a secondary source is presented as the framework owner's wording, and confirm cross-references, acronyms, and counts (six questions, 8 to 12 best practices, 5 to 8 failure modes, 6 to 12 checklist items, 3 to 5 prompts).
