import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/layout/Pageheader';
import ServiceGallery from '@/components/sections/ServiceGallery';

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').trim();

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'serv' });

  return {
    title: `${t('title')} - The Creative Factor`,
    description: stripHtml(t.raw('des')),
  };
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader />
      <ServiceGallery />
    </>
  );
}
