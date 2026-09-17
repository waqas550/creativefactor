'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import bgsections from '@/public/images/bgsections.webp';
import servicesImg from '@/public/images/2.webp';

const ServicesSection = () => {
  const t = useTranslations('home');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <section className="py-8">
      <div
        className="container mx-auto px-8 rounded-lg overflow-hidden shadow-lg bg-white p-8 w-10/12 flex flex-col lg:flex-row-reverse lg:items-center"
        style={{
          backgroundImage: `url(${bgsections.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="lg:w-auto">
          <Image
            src={servicesImg}
            alt={t('servicesHeading')}
            className="mx-auto rounded-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              {t('servicesHeading')}
            </h2>
            <p className="text-white mb-8 text-lg">
              {t.rich('servicesText', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
            <Link href={`/${locale}/services`}>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-250">
                {t('exploreServices')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
