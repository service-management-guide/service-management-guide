# AGENTS.md — Operating instructions for AI agents

This repository is a book and a website: the *Service Management Guide*, 65 Markdown topics in 8 parts (no preface) on service management in the age of ITIL 5, through four lenses (agile, AI, automation, analytics), with AI prompts, AI skills, and a SvelteKit reading site in `service-management-guide.github.io/`. Agents do most of the authoring and checking. This file tells any agent how to work here safely.

## The one rule that governs everything

**`spec/index.md` is the source of truth.** Read it before doing anything. Where any file disagrees with the spec, the spec wins: fix the file, or change the spec on purpose and bring the other files into line in the same commit. Do not improvise structure, style, or citation practice.

## Orientation

| File | What it is |
|---|---|
| `spec/index.md` | The governing specification: manifest, topic template, citation rules, quality gates. |
| `spec/topics.tsv` | Machine-readable manifest (part, number, slug, part title; no topic titles). Keep it in step with spec §4. |
| `spec/maturity-model.md` | The shared five-level maturity scale. |
| `STYLE_GUIDE.md` | Voice, en-001 conventions, prompt-writing rules. |
| `plan.md` | The phased build plan. |
| `tasks.md` | The live checklist. Update it in the same commit as the work it tracks. |
| `AGENTS/` | Role cards: researcher, topic-author, reviewer, reference-editor, site-developer. |
| `_sources/research-notes.md` | Verified research notes. Start here, then verify sources yourself before citing. |
| `skills/README.md` | Which skills are copied from where. |

## Hard rules (violations block "done")

1. **Never invent sources.** No made-up citations, URLs, statistics, survey figures, or quotations. If you cannot verify it, describe the pattern without the number (spec §6).
2. **Verify every Wikipedia link** resolves before linking it. Never guess a slug. 5–12 links per topic, each also listed in `## References`.
3. **Follow the 16-section topic template** (spec §3) exactly: section names, order, and counts (six questions; four perspectives in order; four lenses (Agile, AI, Automation, Analytics) in order; 8–12 best practices; 3–5 maturity rows; 6–12 checklist items; 3–5 AI prompts; 1–5 AI skills).
4. **Directory names are slugs only**, with no numbers. Every topic directory has `index.md`, `README.md -> index.md` (relative symlink), and `.locale-peer-id`.
5. **One writer per file.** Work serially.
6. **Consistency updates travel together** (spec §8): a change that adds, renames, or removes a topic or term updates the manifest, `spec/topics.tsv`, `README.md`, `glossary/index.md`, `index/index.md`, and `llms.*` in the same commit.
7. **Cross-references carry number and title**: "(see Topic 3.4 — Change Enablement)". Never a bare number.
8. **Every `## AI skills` link must resolve** to a real `skills/<name>/SKILL.md`. Copied skills are never edited here; change them upstream and copy again.
9. **AI prompts never ask an AI to invent** metrics, sources, or compliance claims; they use `[placeholders]` and a verification step.
10. **No real named company in a worked example.** Fictional scenarios only.
11. **Do not reproduce copyrighted framework text** (ITIL, ISO, Scrum Guide) beyond short quotations.
12. **`.locale-peer-id` files are immutable** once assigned.
13. **ITIL 5 claims are verified or flagged.** Only state what peoplecert.org supports (spec §6 item 6); mark the rest unconfirmed. AI regulation claims are dated and are never legal advice.
14. **AI, automation, and analytics guidance names an owner, a human oversight point, and a rollback or error check** (spec §5).
15. **Website:** use pnpm. Never edit `service-management-guide.github.io/src/content/`; change the source in the monorepo and run the sync script. Publish only with `bin/deploy-site` (git subtree).

## Roles

- [`AGENTS/researcher.md`](AGENTS/researcher.md): gathers and verifies sources before drafting.
- [`AGENTS/topic-author.md`](AGENTS/topic-author.md): writes one topic to the template.
- [`AGENTS/reviewer.md`](AGENTS/reviewer.md): runs the four quality gates.
- [`AGENTS/reference-editor.md`](AGENTS/reference-editor.md): owns `glossary/index.md`, `index/index.md`, `README.md` coherence.
- [`AGENTS/site-developer.md`](AGENTS/site-developer.md): builds and maintains `service-management-guide.github.io/`.

A single agent may wear several hats but must meet each role's exit criteria.

## Workflow: write one topic

1. Read spec §3–§6 and your topic's manifest entry and its neighbours' scope notes.
2. Read your topic's entry in `_sources/research-notes.md`; verify sources and Wikipedia slugs live.
3. Draft `locales/en-001/topics/<slug>/index.md` to the template. Self-check against spec §10.
4. Register new terms in `glossary/index.md` and `index/index.md`; tick `tasks.md`.
5. Run `bin/check` (and `bin/check --links` when online), then `bin/build-llms`.
6. Commit.

## Cautions

- Before committing topic changes, run `bin/check`. A stub topic (an `index.md` containing "_Not yet written._") is counted as unwritten and skipped by the content gates; `bin/check --strict` fails on any stub, and is used for release.
- Commits may be SSH-signed. If one hangs, ask the maintainer to run `ssh-add`.
- After any interrupted batch, check what reached disk before re-running.
