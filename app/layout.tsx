import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { siteName, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: 'The Creative Factor creates events, productions, performances, and memorable brand experiences.',
  alternates: {
    languages: {
      de: '/de',
      en: '/en',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName,
    type: 'website',
    url: siteUrl,
    images: [{ url: '/images/hero/banner.webp', width: 1920, height: 1080, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // This layout is required by Next.js but we use the [locale] layout for actual content
  return children;
}
