'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';

import hfbg from '@/public/images/hfbg.jpg';
import logo from '@/public/images/logonav.svg';
import menuIcon from '@/public/images/icons/menuicon.png';
import closeIcon from '@/public/images/icons/closeicon.png';

const navLinks = [
  { id: '', title: 'home' },
  { id: 'about', title: 'about' },
  { id: 'services', title: 'services' },
  { id: 'events', title: 'events' },
  { id: 'news', title: 'news' },
  { id: 'partners', title: 'partners' },
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
            className={`focus:outline-none ${menuOpen ? 'transform scale-110' : ''}`}
          >
            <img
              src={menuOpen ? closeIcon.src : menuIcon.src}
              alt="Menu"
              className="h-8 w-8 icon icon-link"
            />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-3 text-lg xl:text-2xl xl:mr-52">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/${currentLocale}${link.id ? `/${link.id}` : ''}`}
              className={`hover:text-blue-300 ${
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
              className={`block mb-4 p-2 text-center text-xl hover:text-blue-300 ${
                isActive(link.id) ? 'bg-gray-600' : 'text-white'
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
