import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import deMessages from '@/messages/de.json';
import enMessages from '@/messages/en.json';

const messagesByLocale: Record<string, typeof deMessages> = {
  de: deMessages,
  en: enMessages
};

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  const locale = await requestLocale;

  // Validate that the incoming locale is valid
  if (!locale || !routing.locales.includes(locale as 'de' | 'en')) {
    return {
      locale: routing.defaultLocale,
      messages: messagesByLocale[routing.defaultLocale]
    };
  }

  return {
    locale,
    messages: messagesByLocale[locale] || messagesByLocale['de']
  };
});
