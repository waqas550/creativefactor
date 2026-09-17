'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import bgsections from '@/public/images/bgsections.webp';

const EventsSection = () => {
  const t = useTranslations('home');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <section className="py-16">
      <div
        className="container mx-auto px-4 sm:px-8 rounded-lg overflow-hidden shadow-lg p-6 sm:p-8 w-full sm:w-10/12 flex flex-col items-center"
        style={{
          backgroundImage: `url(${bgsections.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full lg:w-1/2 text-center lg:text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            {t('eventsHeading')}
          </h2>
          <p className="text-white mb-8 text-base sm:text-lg">
            {t.rich('eventsText', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </p>

          <div className="flex justify-center lg:justify-center">
            <Link
              href={`/${locale}/events`}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded mr-3 transition duration-250"
            >
              {t('viewEvents')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
