'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import bgsections from '@/public/images/bgsections.webp';
import evs1 from '@/public/images/eventsection11.webp';
import evs2 from '@/public/images/eventsection12.webp';

const EventsSection = () => {
  const t = useTranslations('home');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <section className="py-8">
      <div
        className="container mx-auto px-8 rounded-lg overflow-hidden shadow-lg bg-white p-8 w-10/12 flex lg:flex-row flex-col-reverse items-center"
        style={{
          backgroundImage: `url(${bgsections.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="lg:w-1/3">
          <Image
            src={evs1}
            alt={t('eventsHeading')}
            className="mx-auto lg:ml-0 lg:mr-auto rounded-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            {t('eventsHeading')}
          </h2>
          <p className="text-white mb-8 text-lg">
            {t.rich('eventsText', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
          <Link href={`/${locale}/events`}>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-250">
              {t('viewEvents')}
            </button>
          </Link>
        </div>
        <div className="lg:w-1/3">
          <Image
            src={evs2}
            alt={t('eventsHeading')}
            className="mx-auto lg:ml-0 lg:mr-auto rounded-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
