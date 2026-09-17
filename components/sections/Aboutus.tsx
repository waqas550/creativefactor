'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import bg from '@/public/images/bgsections.webp';
import abp1 from '@/public/images/abp11.webp';
import abp2 from '@/public/images/abp12.webp';

// Downloadable documents, one entry per button; file names differ per locale
// and must exist in public/pdf/<locale>/<fileName>
const downloads: { en: string; de: string }[] = [
  {
    en: 'Schedule_Event_Organization_ENG_2025.pdf',
    de: 'Ablaufplanung_Event_Organisation_DEU_2025.pdf',
  },
  {
    en: 'Wedding_Anniversary_Checklist_ENG_2025.pdf',
    de: 'Hochzeits_Jubilaeums_Checkliste_DEU_2025.pdf',
  },
  {
    en: 'Wedding_Anniversary_Cost_Planner_ENG_2025.pdf',
    de: 'Hochzeits_Jubilaeums_Kostenplaner_DEU_2025.pdf',
  },
];

const Aboutus = () => {
  const t = useTranslations('abus');
  const locale = useLocale();

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
              alt={`${t('heading')} - event impressions by The Creative Factor`}
              className="rounded-lg w-full lg:w-[125%] lg:-ml-[12.5%] max-w-none"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{t('heading')}</h2>
            <p className="text-white mb-6 sm:mb-8 text-base sm:text-lg">{renderRichText('paragraph1')}</p>
            <p className="text-white mb-6 sm:mb-8 text-base sm:text-lg">{renderRichText('paragraph2')}</p>
            <p className="text-white mb-6 sm:mb-8 text-base sm:text-lg">{renderRichText('paragraph3')}</p>

            <div className="flex flex-wrap justify-center lg:justify-center gap-2 sm:gap-3">
              {downloads.map((file, index) => (
                <a
                  key={index}
                  href={`/pdf/${locale}/${locale === 'de' ? file.de : file.en}`}
                  download
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-250 inline-flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-sm" />
                  {t(`button${index + 1}`)}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 mt-4 lg:mb-0">
            <Image
              src={abp2}
              alt={`${t('heading')} - show and dance performances by The Creative Factor`}
              className="rounded-lg w-full lg:w-[125%] lg:-ml-[12.5%] max-w-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
