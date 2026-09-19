import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/layout/Pageheader';
import NewsSection from '@/components/sections/NewsSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'news' });

  return {
    title: `${t('newsTitle')} - The Creative Factor`,
    description: t('metaDescription'),
  };
}

export default function NewsPage() {
  return (
    <>
      <PageHeader />
      <NewsSection />
    </>
  );
}
