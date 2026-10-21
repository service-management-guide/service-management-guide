// Server-only access to the guide's markdown.
//
// Living under `#lib/server/` means SvelteKit refuses to bundle this into
// client code. The site is fully prerendered, so this module runs at build time
// and each page ships only its own rendered HTML.

import { parse, type Document, type Heading } from '#lib/markdown.js';
import { LOCALE_SLUGS, SOURCE_REPO, type Part, type TopicRef } from '#lib/book.js';

/**
 * Raw markdown for every written topic, keyed by module path, e.g.
 * `../../content/locales/en-001/topics/scrum/index.md`. Unwritten topics are
 * not synced (scripts/sync-content.sh), so a file's presence means "written".
 */
const topicFiles = import.meta.glob('../../content/locales/*/topics/*/index.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

const manifestFile = import.meta.glob('../../content/topics.tsv', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

const glossaryFile = import.meta.glob('../../content/glossary/index.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

const indexFile = import.meta.glob('../../content/index/index.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

/** Translated reference files, `content/locales/<locale>/glossary/index.md` and `index/index.md`, where a locale has them. */
const localeReferenceFiles = import.meta.glob('../../content/locales/*/{glossary,index}/index.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

function localeReference(locale: string | undefined, file: 'GLOSSARY' | 'INDEX'): string | undefined {
  if (!locale) return undefined;
  const name = file === 'GLOSSARY' ? 'glossary/index' : 'index/index';
  return localeReferenceFiles[`../../content/locales/${locale}/${name}.md`];
}

/** `locale -> canonical slug -> that locale's directory name`, from the sync script's slugs.tsv. Absent means the slugs are the canonical ones. */
const slugFiles = import.meta.glob('../../content/locales/*/slugs.tsv', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;
const localSlug: Record<string, Record<string, string>> = {};
for (const [path, tsv] of Object.entries(slugFiles)) {
  const locale = path.match(/\/locales\/([^/]+)\/slugs\.tsv$/)?.[1];
  if (!locale) continue;
  for (const line of tsv.trim().split('\n')) {
    const [canonical, local] = line.split('\t');
    (localSlug[locale] ??= {})[canonical] = local;
  }
}

type ManifestRow = { part: number; number: string; slug: string; title: string; partTitle: string };

/** The manifest (spec/topics.tsv): order, numbers, and parts. Its title column is a fallback copied by the sync script from each topic's first headline. */
const manifest: ManifestRow[] = Object.values(manifestFile)[0]
  .trim()
  .split('\n')
  .slice(1)
  .map((line) => {
    const [part, number, slug, title, partTitle] = line.split('\t');
    return { part: Number(part), number, slug, title, partTitle };
  });

/** `locale -> slug -> markdown` for every written topic. */
const written: Record<string, Record<string, string>> = {};
for (const [path, markdown] of Object.entries(topicFiles)) {
  const match = path.match(/\/locales\/([^/]+)\/topics\/([^/]+)\/index\.md$/);
  if (!match) throw new Error(`Unrecognized topic content path: ${path}`);
  (written[match[1]] ??= {})[match[2]] = markdown;
}

/** Table-of-contents entries for one locale, in manifest order, written or not. */
export function toc(locale: string): TopicRef[] {
  const have = written[locale] ?? {};
  return manifest.map(({ slug: canonical, number, title, part }) => {
    const slug = localSlug[locale]?.[canonical] ?? canonical;
    return {
      slug,
      number,
      // The topic's own first headline is its title; the manifest copy is for unwritten topics.
      title: have[slug]?.match(/^# (.+)$/m)?.[1].trim() ?? title,
      part,
      written: slug in have
    };
  });
}

/** The parts, in order, from the manifest. */
export function parts(): Part[] {
  const seen = new Map<number, string>();
  for (const row of manifest) if (!seen.has(row.part)) seen.set(row.part, row.partTitle);
  return [...seen].map(([number, title]) => ({ number, title }));
}

/**
 * Point links to skills at the site's own skills pages.
 * Topics link `../../../../skills/<name>/SKILL.md` so the links also work on GitHub.
 */
function rewriteLinks(markdown: string): string {
  return markdown.replace(/\]\((?:\.\.\/)+skills\/([\w-]+)\/SKILL\.md\)/g, '](/skills/$1/)');
}

/** A rendered topic plus its written neighbours, or `null` if it is not written. */
export function topic(
  locale: string,
  slug: string
): { ref: TopicRef; doc: Document; previous: TopicRef | null; next: TopicRef | null } | null {
  const markdown = written[locale]?.[slug];
  if (markdown === undefined) return null;
  const list = toc(locale).filter((candidate) => candidate.written);
  const at = list.findIndex((candidate) => candidate.slug === slug);
  return {
    ref: list[at],
    doc: parse(rewriteLinks(markdown)),
    previous: list[at - 1] ?? null,
    next: list[at + 1] ?? null
  };
}

/** `{ locale, slug }` for every written topic in every locale, for prerender entries. */
export function localeTopicEntries(): Array<{ locale: string; slug: string }> {
  return LOCALE_SLUGS.flatMap((locale) =>
    Object.keys(written[locale] ?? {}).map((slug) => ({ locale, slug }))
  );
}

/** Written topic slugs for one locale. */
export function slugs(locale: string): string[] {
  return toc(locale).filter((t) => t.written).map((t) => t.slug);
}

/**
 * Maps a topic number to its slug in each locale, so the locale picker can jump
 * to the equivalent topic after a switch. Keyed by number, not slug, because a
 * translated locale may have translated slugs.
 */
export function localeSlugMap(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {};
  for (const locale of Object.keys(written)) {
    for (const ref of toc(locale)) {
      if (ref.written) (map[ref.number] ??= {})[locale] = ref.slug;
    }
  }
  return map;
}

/** Render a reference document (glossary or index) with its A–Z letter headings. */
function reference(markdown: string): Document & { letters: Heading[] } {
  const repointed = markdown.replace(/\]\(spec\/index\.md\)/g, `](${SOURCE_REPO}/blob/main/spec/index.md)`);
  const doc = parse(repointed);
  return { ...doc, letters: doc.headings.filter((heading) => heading.depth === 2) };
}

/** The A–Z glossary: the locale's translation when it has one, else the English root copy. */
export function glossary(locale?: string) {
  return reference(localeReference(locale, 'GLOSSARY') ?? Object.values(glossaryFile)[0]);
}

/** The concept index: the locale's translation when it has one, else the English root copy. */
export function conceptIndex(locale?: string) {
  return reference(localeReference(locale, 'INDEX') ?? Object.values(indexFile)[0]);
}
