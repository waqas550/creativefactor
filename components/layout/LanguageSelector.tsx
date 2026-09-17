'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

import enicon from '@/public/images/icons/enicon.png';
import deicon from '@/public/images/icons/deicon.png';

interface LanguageSelectorProps {
  currentLocale: string;
}

const LanguageSelector = ({ currentLocale }: LanguageSelectorProps) => {
  const pathname = usePathname();
  const router = useRouter();

  // Remove the current locale from the pathname and add the new one
  const getNewLocalePath = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    return `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  };

  const targetLocale = currentLocale === 'de' ? 'en' : 'de';
  const newPath = getNewLocalePath(targetLocale);

  const handleLanguageSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    // Use router.push with refresh to ensure the new locale is loaded
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="language-selector">
      <a
        href={newPath}
        onClick={handleLanguageSwitch}
        className="language-button cursor-pointer"
      >
        <img
          src={currentLocale === 'de' ? enicon.src : deicon.src}
          alt={currentLocale === 'de' ? 'English Icon' : 'Deutsch Icon'}
        />
      </a>
    </div>
  );
};

export default LanguageSelector;
