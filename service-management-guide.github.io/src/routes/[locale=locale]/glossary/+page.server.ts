import { error } from '@sveltejs/kit';
import { isLocale, LOCALE_SLUGS } from '#lib/book.js';
import { isTranslated } from '#lib/segments.js';
import { glossary } from '#lib/server/book.js';

/** One glossary page per locale. */
export function entries() {
  return LOCALE_SLUGS.filter((locale) => !isTranslated(locale, 'glossary')).map((locale) => ({ locale }));
}

export function load({ params }) {
  if (!isLocale(params.locale)) error(404, `No locale named "${params.locale}"`);
  return { doc: glossary(params.locale) };
}
