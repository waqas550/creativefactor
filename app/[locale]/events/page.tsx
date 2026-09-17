import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/layout/Pageheader';
import EventSection from '@/components/sections/EventSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'eve' });

  return {
    title: `${t('title')} - The Creative Factor`,
    description: t('des'),
  };
}

export default function EventsPage() {
  return (
    <>
      <PageHeader />
      <EventSection />
    </>
  );
}
