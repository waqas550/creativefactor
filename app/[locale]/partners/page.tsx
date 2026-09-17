import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/layout/Pageheader';
import PartnerSection from '@/components/sections/PartnerSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'navbar' });

  return {
    title: `${t('partners')} - The Creative Factor`,
    description: 'Our partners and collaborators',
  };
}

export default function PartnersPage() {
  return (
    <>
      <PageHeader />
      <PartnerSection />
    </>
  );
}
