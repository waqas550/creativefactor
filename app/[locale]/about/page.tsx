import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/layout/Pageheader';
import Aboutus from '@/components/sections/Aboutus';

// Strip HTML tags from a translation so it can be used as a plain-text meta description
const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').trim();

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'abus' });

  return {
    title: `${t('heading')} - The Creative Factor`,
    description: stripHtml(t.raw('paragraph1')),
  };
}

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <Aboutus />
    </>
  );
}
