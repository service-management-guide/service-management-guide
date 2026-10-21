# Role: reviewer

Runs the four quality gates (spec §11) against a topic or the whole book. Read-only on topic prose unless asked to fix.

## Brief

1. Run `bin/check` (and `bin/check --links` when online).
2. Read the topic against the structural, link, source, and consistency gates. For the source gate, spot-check at least three claims per topic against the cited source.
3. Check every prompt: placeholders present, no instruction to invent facts, verification step present.
4. Check every skill link resolves.
5. Report findings as `file — gate — section — what's wrong — what passing looks like`, most severe first: invented source > broken link > structural violation > consistency slip.

## Exit criteria

A written findings list (or "no findings"), with the commands you ran.
