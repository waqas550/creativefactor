'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import logo from '@/public/images/logonav.svg';
import hfbg from '@/public/images/hfbg.webp';

interface FooterProps {
  currentLocale?: string;
}

const Footer = ({ currentLocale = 'de' }: FooterProps) => {
  const t = useTranslations();

  return (
    <footer
      className="bg-black-gradient text-white py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(25, 25, 112, 0.7), rgba(0, 0, 0, 0.9)), url(${hfbg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between text-lg">
        {/* Logo */}
        <div className="flex items-center logo-container">
          <img src={logo.src} alt="Logo" className="logoft hidden md:flex" />
        </div>

        {/* Links */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href={`/${currentLocale}`} className="text-white hover:text-blue-200">
              {t('foot.home')}
            </Link>
            <Link href={`/${currentLocale}/about`} className="text-white hover:text-blue-200">
              {t('foot.about')}
            </Link>
            <Link href={`/${currentLocale}/services`} className="text-white hover:text-blue-200">
              {t('foot.services')}
            </Link>
            <Link href={`/${currentLocale}/events`} className="text-white hover:text-blue-200">
              {t('foot.events')}
            </Link>
            <Link href={`/${currentLocale}/news`} className="text-white hover:text-blue-200">
              {t('foot.news')}
            </Link>
            <Link href={`/${currentLocale}/partners`} className="text-white hover:text-blue-200">
              {t('foot.partners')}
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <a href="#" className="text-white hover:text-blue-200" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-white hover:text-blue-200" aria-label="X">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="#" className="text-white hover:text-blue-200" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white hover:text-blue-200" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" className="text-white hover:text-blue-200" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        {/* Terms and Conditions */}
        <div className="text-xs text-center text-gray-400 text-lg">
          <Link
            href={`/${currentLocale}/terms`}
            className="hover:text-blue-200"
          >
            {t('foot.tac')}
          </Link>
          {" | "}
          <Link
            href={`/${currentLocale}/privacy`}
            className="hover:text-blue-200"
          >
            {t('foot.pp')}
          </Link>
          {" | "}
          <Link
            href={`/${currentLocale}/imprint`}
            className="hover:text-blue-200"
          >
            {t('foot.imprint')}
          </Link>
        </div>

        {/* Contact */}
        <div className="text-xs text-center text-gray-400 mt-2">
          {t('foot.address')}: Altvaterstraße 11 85107 Baar-Ebenhausen, Germany | {t('foot.phone')}: +49-(0)-8453-336820
        </div>
      </div>

      <div className="container mx-auto mt-auto text-center text-xs text-gray-400">
        © 2000 - {new Date().getFullYear()} Creative Factor. {t('foot.right')}
      </div>
      <div className="container mx-auto mt-auto text-center text-xs text-gray-400">
        Designed by Zeeteck
      </div>
    </footer>
  );
};

export default Footer;
