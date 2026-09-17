'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import bg from '@/public/images/bgsections.jpg';
import abp1 from '@/public/images/abp11.png';
import abp2 from '@/public/images/abp12.png';

const Aboutus = () => {
  const t = useTranslations('abus');

  const renderRichText = (key: string) => {
    return t.rich(key, {
      strong: (chunks) => <strong>{chunks}</strong>
    });
  };

  return (
    <div>
      <section className="py-16">
        <div
          className="container mx-auto px-4 sm:px-8 rounded-lg overflow-hidden shadow-lg bg-white p-6 sm:p-8 w-full sm:w-10/12 flex lg:flex-row flex-col-reverse items-center"
          style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
            <Image
              src={abp1}
              alt="AboutPage"
              className="mx-auto lg:ml-0 lg:mr-auto rounded-lg w-full"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{t('heading')}</h2>
            <p className="text-white mb-6 sm:mb-8 text-base sm:text-lg">{renderRichText('paragraph1')}</p>
            <p className="text-white mb-6 sm:mb-8 text-base sm:text-lg">{renderRichText('paragraph2')}</p>
            <p className="text-white mb-6 sm:mb-8 text-base sm:text-lg">{renderRichText('paragraph3')}</p>

            <div className="flex flex-wrap justify-center lg:justify-center gap-2 sm:gap-3">
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-250">
                {t('button1')}
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-250">
                {t('button2')}
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-250">
                {t('button3')}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 mt-4 lg:mb-0">
            <Image
              src={abp2}
              alt="AboutPage"
              className="mx-auto lg:ml-0 lg:mr-auto rounded-lg w-full"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
