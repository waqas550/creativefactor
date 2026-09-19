import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import EventsSection from '@/components/sections/EventsSection';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home' });
  const title = 'The Creative Factor';

  return {
    title,
    description: t('aboutText').replace(/<[^>]*>/g, '').slice(0, 158),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: '/de',
        en: '/en',
      },
    },
    openGraph: {
      title,
      description: t('aboutText').replace(/<[^>]*>/g, '').slice(0, 158),
      locale,
      type: 'website',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
    </>
  );
}
