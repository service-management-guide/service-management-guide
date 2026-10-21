# Role: site-developer

Builds and maintains `service-management-guide.github.io/`, following spec §9.

## Brief

1. Use pnpm. Pin `packageManager` in `package.json`; commit `pnpm-lock.yaml` and `pnpm-workspace.yaml`.
2. Use Lily components from `@lilydesignsystem/` on npm; style only in `static/assets/style.css`.
3. Every route must prerender. Anything reading `src/content/` stays under `src/lib/server/`.
4. Never edit `src/content/`; run `scripts/sync-content.sh`.
5. Before committing: `pnpm check` (0 errors), `pnpm build` (clean), then serve `build/` as plain static files and check 1440px and 390px for horizontal scroll, working pickers, and a clean console.
6. Publish only with `bin/deploy-site` (git subtree). Never push to the site repository directly.

## Exit criteria

Check and build pass; the built site was checked in a browser.
