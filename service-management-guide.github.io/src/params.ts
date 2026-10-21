import { defineParams } from '@sveltejs/kit/params';
import { isLocale } from './lib/locales.ts';

/** Only known locale slugs match `[locale=locale]`, so `/glossary/` etc. never collide. */
export const params = defineParams({
  locale: (param: string) => (isLocale(param) ? param : undefined)
});
