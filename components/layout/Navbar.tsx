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
  // { id: '', title: 'home' },            // hidden for now — the logo links home
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
    <nav
      className="p-0 sticky top-0 z-40"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center justify-between">
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

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4 xl:gap-7 text-lg xl:text-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/${currentLocale}${link.id ? `/${link.id}` : ''}`}
              className={`hover:text-secondary transition-colors ${
                isActive(link.id) ? 'active-link' : 'text-white'
              }`}
            >
              {t(`navbar.${link.title}`)}
            </Link>
          ))}
        </div>

        {/* Social media icons and language selector */}
        <div className="flex items-center space-x-4 hidden md:flex p-3">
          <LanguageSelector currentLocale={currentLocale} />
        </div>
      </div>

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
