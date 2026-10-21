# Style guide

Subordinate to `spec/index.md`. Where the two disagree, the spec wins.

## Voice

- Practical, calm, and plain. Show evidence and name the trade-off rather than hiding it.
- Never say "agile delivery": it is wrong, misleading, and cargo cult. Say "continuous delivery" (or "continuous software delivery"). Proper names and titles that contain the words, such as the Disciplined Agile Delivery article, are quoted as written.
- De-emphasize "sprint", "Scrum", and "Kanban": treating them as the substance of agile is wrong and cargo cult. Emphasize continuous stakeholder involvement, continuous improvement, ongoing evolution, a sustainable pace, motivated people, and continuous software delivery. Mention the three only where a topic is about them, where readers may meet them in practice, or where a source names them, and describe them as particular frameworks, never as what agile is.
- Prefer conditional phrasing when you mention them: "If your team chooses to use sprints", "If your team chooses to use Scrum", "If your team chooses to use Kanban". It shows that the practice is a choice, not a requirement of agile.
- Neutral between frameworks. Do not write "agile good, ITIL bad" or the reverse. Say what each is good at and where it is weak.
- Second person ("you") when guiding the reader. Third person when describing how practice works in general. No first person.
- Banned words: revolutionary, game-changing, cutting-edge, seamless, disruptive, best-in-class, robust (as filler), leverage (as a verb), synergy.
- Short words over long ones. Prefer "use" to "utilize", "start" to "commence".

## Worldwide framing

- Name the jurisdiction or organization type when a claim is specific to one ("in the UK", "in a regulated bank"). Do not present one country's arrangement as universal.
- Vary the worked examples: size of organization, industry, public and private sector, and region.
- Quote currency in its original currency and year. Show the conversion date if you convert.

## Language (en-001)

- English (World), CLDR conventions: American-adjacent spelling (`-ize`, `color`, `program`, `catalog`), dates as DD/MM/YYYY or written out ("9 October 2026"), Monday-first week, metric units, `US$` for dollars.
- ITIL's own term "service catalogue" appears once in parentheses on first use in a topic, then "service catalog".
- Double quotation marks for quotations; punctuation outside the quotation marks unless it belongs to the quotation.

## Acronyms

Expand every acronym on first use *in each topic*, because topics are read on their own: "service level agreement (SLA)". Re-expand in each topic, even if an earlier topic did.

## Numbers and punctuation

- Words for one through nine in running prose; numerals from 10 up, and always for units, percentages, and money.
- Spaced em dash ( — ) for a break in a sentence; en dash for a range (2019–2023).
- Serial (Oxford) comma.

## Formatting

- Markdown only. One `#` (H1) per file. A blank line between blocks. No trailing whitespace. No hard-wrapped lines.
- 2–4 sentence paragraphs.
- Tables for comparisons, typologies, and the maturity model.
- Cross-references always give number *and* title: "(see Topic 3.4 — Change Enablement)".
- Relative links between files. Wikipedia links are full `https://en.wikipedia.org/wiki/…` URLs.

## Worked examples

- Fictional, in a named *type* of organization ("a regional hospital's IT department"). Never a real company.
- Give the situation, what the team tried, what changed, and what remained hard. A happy ending with no remaining problem is a warning sign.
- Do not invent statistics for the example. Use plain counts and sequences of events ("the second incident took two hours to close") only where they illustrate a point and are clearly part of the story.

## Discussion questions

- Six per topic. Each is bold, open-ended, and can be answered by a team from its own experience ("What do we do today when…?", "Where does … slow us down?").
- Each briefing is 3–6 sentences for a facilitator: why the question matters, what answers you may hear, and one follow-up.

## AI prompts

- 3–5 per topic. Each starts with a bold one-line purpose, then a fenced `text` block.
- Write placeholders as `[square brackets]` and say what to put in them.
- Tell the AI to ask clarifying questions when information is missing, and to mark assumptions.
- Never ask an AI to invent metrics, sources, quotations, or compliance claims. Ask it to work from material the reader pastes in.
- End each prompt with a verification step: "List what you are unsure of."
- Prompts must be self-contained. They may name a skill from `skills/` but must still work without it.

## AI skills

- Link only skills that exist in `skills/`. Use a relative link to the skill's `SKILL.md`, and add one sentence on when to use it.

## Trademarks

ITIL® and SAFe® are registered trademarks of their owners. Use the names accurately and do not imply endorsement. `README.md` carries the one trademark notice.

## Copyright

Summarize and cite frameworks and standards. Do not reproduce long passages of ITIL publications, ISO standards, or the Scrum Guide. Short quotations (a phrase or one sentence) with a citation are acceptable.

## AI, automation, and analytics

- Write about AI the way you write about any tool: what it does, who owns it, where a person decides, how its errors are caught. Never write that AI "understands", "knows", or "decides" on its own; say what the system does.
- Never present AI output, a model's accuracy, or a vendor claim as established fact without a source.
- For automation, name what is automated, what stays manual, the rollback, and the audit trail.
- For analytics, name the data source and its limits. Prefer distributions to averages. Metrics describe teams, services, and systems, never individuals; point to the *Service Management Metrics* book for definitions.
- Each topic's "Agile, AI, automation, and analytics" section has four short subsections, each with one concrete practice and one caution.
