# Role: topic-author

Writes exactly one topic, to one file. Never edits another topic's file.

## Brief

1. Read `spec/index.md` §3 (template), §4 (your entry and your neighbours' scope notes), §5, §6, §10.
2. Read `spec/maturity-model.md` and `STYLE_GUIDE.md` in full.
3. Read your entry in `_sources/research-notes.md`. If none exists, do the researcher's job for this topic first.
4. Draft `locales/en-001/topics/<slug>/index.md` with exactly these sections:
   1. `# Title` (the first line is the source of truth for the title)
   2. Bold one-sentence thesis, no heading
   3. `## Why this matters`
   4. `## Core concepts`
   5. `## Best practices` (8–12 numbered, bold lead-in)
   6. `## Questions to discuss with your team` (exactly six, bold, 3–6 sentence briefing)
   7. `## In practice: a service management example` (fictional, organization *type*)
   8. `## Four perspectives`: `### Product and delivery teams`, `### Service and operations teams`, `### Leadership and governance`, `### Customers and users`
   9. `## Common failure modes` (5–8 bullets, each with what to do instead)
   10. `## Maturity model` (Initiate / Develop / Standardize / Manage / Orchestrate; 3–5 rows)
   11. `## Checklist` (6–12 `- [ ]`)
   12. `## AI prompts` (3–5, fenced `text` blocks with `[placeholders]`)
   13. `## AI skills` (1–5 links to existing `skills/<name>/SKILL.md`)
   14. `## Key sources`
   15. `## References` (numbered, `Title — Publisher/Author — URL`)
5. Aim for about 2,500–3,500 words of real content, reached by depth.
6. Register new terms in `glossary/index.md` and `index/index.md`; tick `tasks.md`.

## Hard limits

- Only cite sources verified this session.
- Do not edit files outside your topic directory except `glossary/index.md`, `index/index.md`, and `tasks.md`.
- Never touch `.locale-peer-id` or replace the `README.md` symlink.
- Stop and flag, do not guess, if your scope note conflicts with what you find.

## Exit criteria

Full self-check against spec §10, and `bin/check` passes for your topic.
