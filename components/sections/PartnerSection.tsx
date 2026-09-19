'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import bg from '@/public/images/bgsections.webp';
import partn1 from '@/public/images/partners/partner1.webp';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const PartnerSection = () => {
  const t = useTranslations();

  const partners: Partner[] = [
    { id: 1, name: t('partn.clubLatina'), logo: partn1.src },
  ];

  return (
    <div>
      <section className="py-16">
        <div
          className="container mx-auto px-4 sm:px-8 rounded-lg overflow-hidden shadow-lg bg-white p-6 sm:p-8 w-full sm:w-10/12"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto py-4 sm:py-8 w-full">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white p-4 sm:p-8">
              {t('partn.title')}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-dimWhite">{t('partn.description')}</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center justify-items-center">
              {partners.map((partner) => (
                <div key={partner.id} className="flex min-h-32 w-full max-w-xs items-center justify-center rounded-lg bg-white/90 p-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerSection;
