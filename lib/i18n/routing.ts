import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['de', 'en'],

  // Used when no locale matches
  defaultLocale: 'de',

  // Detect a visitor's preferred language from the browser when no locale is
  // included in the URL. German remains the fallback.
  localeDetection: true
});
