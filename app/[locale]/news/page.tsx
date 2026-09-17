import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/layout/Pageheader';
import NewsSection from '@/components/sections/NewsSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'navbar' });

  return {
    title: `${t('news')} - The Creative Factor`,
    description: 'Latest news and updates from The Creative Factor',
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
