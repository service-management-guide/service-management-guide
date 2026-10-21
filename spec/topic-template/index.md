# Topic template

Governed by `spec/index.md`. Every topic has exactly these sections, in this order, with these exact headings:

1. `# Title`: the first headline of the topic's `index.md` is the title and the single source of truth for it.
2. A bold one-sentence thesis (no heading above it).
3. `## Why this matters`
4. `## Core concepts`
5. `## Best practices`: numbered, 8–12 items, each with a bold lead-in and 2–4 sentences.
6. `## Questions to discuss with your team`: **exactly six** bold questions, each followed by a 3–6 sentence briefing for a facilitator.
7. `## In practice: a service management example`: one fictional scenario in a named *type* of organization, never a real company. Say what remained hard.
8. `## Four perspectives`: `### Product and delivery teams`, `### Service and operations teams`, `### Leadership and governance`, `### Customers and users`.
9. `## Agile, AI, automation, and analytics`: exactly four subsections, in this order, each a short paragraph with one concrete practice and one caution:
   - `### Agile`: how continuous delivery, stakeholder involvement, and improvement apply.
   - `### AI`: where AI helps, who owns it, where a human decides, how errors are caught.
   - `### Automation`: what to automate, what not to, rollback and audit trail.
   - `### Analytics`: which data, which questions, which limits. Point to the companion *Service Management Metrics* book for metric definitions.
10. `## Common failure modes`: 5–8 bullets, each with what to do instead.
11. `## Maturity model`: table with columns **Initiate / Develop / Standardize / Manage / Orchestrate** (see `spec/maturity-model.md`), 3–5 rows.
12. `## Checklist`: 6–12 `- [ ]` items.
13. `## AI prompts`: 3–5 prompts, each with a bold purpose and a fenced `text` block with `[placeholders]`. No prompt asks an AI to invent metrics, sources, or compliance claims.
14. `## AI skills`: 1–5 relative links to existing skills (`[itil-5](../../../../skills/itil-5/SKILL.md)`), each with a sentence on when to use it.
15. `## Key sources`: 3–6 works, each with a sentence on why it is useful.
16. `## References`: numbered, `Title — Publisher/Author — URL`, including every Wikipedia link used.

No section may be renamed, reordered, merged, or left out.
