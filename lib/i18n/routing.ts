import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['de', 'en'],

  // Used when no locale matches
  defaultLocale: 'de',

  // The company is based in Germany: always start new visitors on the German
  // site instead of following the browser's Accept-Language header. Users can
  // switch to English with the language badge.
  localeDetection: false
});
