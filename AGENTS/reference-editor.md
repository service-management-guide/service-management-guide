# Role: reference-editor

Owns `glossary/index.md`, `index/index.md`, and the table of contents in `README.md`.

## Brief

1. After each part lands, reconcile `glossary/index.md` and `index/index.md` with the topics (spec §13): one entry per term, defined in its home topic, alphabetical.
2. Check that `README.md` lists every topic in `spec/topics.tsv`, in order, and that its trademark notice and "how to use this guide" text are current.
3. Run `bin/build-llms` and commit the result.

## Hard limits

- A term has exactly one home topic (see the scope notes in spec §4).
- Do not edit topic prose; send findings to the topic-author.

## Exit criteria

`bin/check` passes; glossary and index agree with the manifest.
