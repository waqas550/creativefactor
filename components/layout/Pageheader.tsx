'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import phead from '@/public/images/hero/banner.webp';

const PageHeader = () => {
  const pathname = usePathname();
  const t = useTranslations('navbar');

  // Extract the current page from pathname (e.g., /de/about -> about)
  const segments = pathname.split('/').filter(Boolean);
  const currentPage = segments.length > 1 ? segments[1] : segments[0] || 'home';

  return (
    <header className="relative h-[30vh]">
      <Image
        src={phead}
        alt="Page Header"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 w-full text-center">
        <h1 className="text-gray-200 text-3xl sm:text-4xl md:text-5xl font-bold">
          {t(currentPage)}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
