import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { routing } from '@/lib/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/lib/fontawesome';
import '../globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'de' | 'en')) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} className={poppins.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/prge.svg" />
      </head>
      <body style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
        <NextIntlClientProvider messages={messages}>
          <div style={{ minHeight: '100vh' }}>
            <Navbar currentLocale={locale} />
            <main>{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
