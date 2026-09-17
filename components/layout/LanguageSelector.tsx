'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

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
        aria-label={currentLocale === 'de' ? 'Switch to English' : 'Zur deutschen Version wechseln'}
        className="w-12 h-12 rounded-full border-2 border-secondary text-secondary flex items-center justify-center font-semibold text-lg tracking-wide hover:bg-secondary/10 hover:scale-110 transition-all"
      >
        {currentLocale === 'de' ? 'EN' : 'DE'}
      </a>
    </div>
  );
};

export default LanguageSelector;
