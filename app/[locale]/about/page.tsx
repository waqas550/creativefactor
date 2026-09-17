import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/layout/Pageheader';
import Aboutus from '@/components/sections/Aboutus';

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').trim();

// Search engines truncate meta descriptions around 155-160 characters
const toMetaDescription = (value: string) =>
  value.length > 158 ? `${value.slice(0, 155).trimEnd()}…` : value;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'abus' });
  const heading = t('heading');
  const description = toMetaDescription(stripHtml(t.raw('paragraph1')));

  return {
    title: `${heading} - The Creative Factor`,
    description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        de: '/de/about',
        en: '/en/about',
      },
    },
    openGraph: {
      title: `${heading} - The Creative Factor`,
      description,
      locale,
      type: 'website',
    },
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
