'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const NewsSection = () => {
  const t = useTranslations('news');

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl rounded-lg border border-dimBlue bg-primary/80 p-8 text-center shadow-lg sm:p-12">
        <h2 className="mb-4 text-3xl font-bold text-white">{t('title')}</h2>
        <p className="text-lg leading-relaxed text-dimWhite">{t('emptyText')}</p>
      </div>
    </section>
  );
};

export default NewsSection;
