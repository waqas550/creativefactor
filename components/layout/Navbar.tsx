'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from './LanguageSelector';

import hfbg from '@/public/images/hfbg.webp';
import logo from '@/public/images/logonav.svg';

const navLinks = [
  { id: '', title: 'home' },
  { id: 'about', title: 'about' },
  { id: 'services', title: 'services' },
  { id: 'events', title: 'events' },
  // { id: 'news', title: 'news' },        // hidden for now — coming later
  // { id: 'partners', title: 'partners' }, // hidden for now — coming later
  { id: 'contact', title: 'contact' },
];

interface NavbarProps {
  currentLocale: string;
}

const Navbar = ({ currentLocale }: NavbarProps) => {
  const t = useTranslations();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (id: string) => {
    const path = id === '' ? `/${currentLocale}` : `/${currentLocale}/${id}`;
    return pathname === path || pathname === `/${currentLocale}${id === '' ? '' : `/${id}`}`;
  };

  return (
    <nav className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30">
      <div className="flex items-center">
        <div className="flex items-center logo-container">
          <Link href={`/${currentLocale}`}>
            <img src={logo.src} alt="Logo" className="logo" />
          </Link>
        </div>

        <div className="md:hidden p-4">
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`focus:outline-none w-10 h-10 rounded-full border-2 border-secondary text-secondary flex items-center justify-center hover:bg-secondary/10 transition-colors ${
              menuOpen ? 'transform scale-110' : ''
            }`}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="text-xl" />
          </button>
        </div>

        {/* Desktop navigation - pinned to the right, before the language selector */}
        <div className="hidden md:flex items-center gap-1 text-[1.05rem] ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/${currentLocale}${link.id ? `/${link.id}` : ''}`}
              className={`px-4 py-1.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 ${
                isActive(link.id)
                  ? 'bg-secondary/15 text-secondary font-medium'
                  : 'text-dimWhite hover:text-white hover:bg-white/5'
              }`}
            >
              {t(`navbar.${link.title}`)}
            </Link>
          ))}
        </div>

        {/* Social media icons and language selector */}
        <div className="hidden md:flex items-center p-3 ml-3 pl-5 border-l border-white/10">
          <LanguageSelector currentLocale={currentLocale} />
        </div>
      </div>

      {/* Teal accent line along the bottom edge */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="bg-gray-700 md:hidden fixed left-0 w-full z-10"
          style={{
            backgroundImage: `linear-gradient(rgba(25, 25, 112, 0.2), rgba(25, 25, 112, 0.6)), url(${hfbg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '1',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/${currentLocale}${link.id ? `/${link.id}` : ''}`}
              className={`block mb-1 px-4 py-2.5 mx-6 rounded-lg text-center text-lg transition-colors ${
                isActive(link.id)
                  ? 'bg-secondary/15 text-secondary'
                  : 'text-white hover:text-secondary hover:bg-white/5'
              }`}
              onClick={closeMenu}
            >
              {t(`navbar.${link.title}`)}
            </Link>
          ))}

          <div className="flex items-center justify-center p-4">
            <LanguageSelector currentLocale={currentLocale} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
