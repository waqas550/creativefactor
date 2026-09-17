'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import bg from '@/public/images/bgsections.webp';
import partn1 from '@/public/images/partners/partner1.webp';
import partn2 from '@/public/images/partners/partner2.webp';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const PartnerSection = () => {
  const t = useTranslations();

  const partners: Partner[] = [
    { id: 1, name: 'Partner 1', logo: partn1.src },
    { id: 2, name: 'Partner 2', logo: partn2.src },
    { id: 3, name: 'Partner 3', logo: partn2.src },
    { id: 4, name: 'Partner 4', logo: partn2.src },
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
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white p-4 sm:p-8">
              {t('partn.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {partners.map((partner) => (
                <div key={partner.id} className="flex items-center justify-center p-4">
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
