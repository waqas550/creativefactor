'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
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

const socialLinks = [
  { icon: faFacebookF, href: '#', label: 'Facebook' },
  { icon: faXTwitter, href: '#', label: 'X' },
  { icon: faInstagram, href: '#', label: 'Instagram' },
  { icon: faYoutube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer
      className="text-white py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(25, 25, 112, 0.7), rgba(0, 0, 0, 0.9)), url(${hfbg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex flex-col items-center px-4">
        <Link href={`/${locale}`} aria-label="Home">
          <img src={logo.src} alt="Creative Factor logo" className="h-14 md:h-20 w-auto" />
        </Link>

        {/* Social media (links to be filled in later) */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 rounded-full border border-secondary/60 text-secondary flex items-center justify-center hover:bg-secondary/10 transition-colors"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
          <a
            href="#"
            aria-label="Email"
            className="w-10 h-10 rounded-full border border-secondary/60 text-secondary flex items-center justify-center hover:bg-secondary/10 transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        {/* Contact */}
        <div className="text-sm text-gray-300 mt-6 text-center leading-relaxed">
          {t('foot.address')}: Altvaterstraße 11, 85107 Baar-Ebenhausen, Germany
          <span className="mx-2">·</span>
          {t('foot.phone')}:{' '}
          <a href="tel:+498453336820" className="hover:text-blue-200">
            +49-(0)-8453-336820
          </a>
          <span className="mx-2">·</span>
          <a href="mailto:info@creative-factor.com" className="hover:text-blue-200">
            info@creative-factor.com
          </a>
        </div>

        {/* Legal links (required in Germany) */}
        <div className="text-sm text-gray-400 mt-4 text-center">
          <Link href={`/${locale}/terms`} className="hover:text-blue-200">
            {t('foot.tac')}
          </Link>
          <span className="mx-2">|</span>
          <Link href={`/${locale}/privacy`} className="hover:text-blue-200">
            {t('foot.pp')}
          </Link>
          <span className="mx-2">|</span>
          <Link href={`/${locale}/imprint`} className="hover:text-blue-200">
            {t('foot.imprint')}
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 mt-6 text-center">
          © 2000 - {new Date().getFullYear()} Creative Factor. {t('foot.right')}
          <span className="mx-2">·</span>
          Designed by Zeeteck
        </div>
      </div>
    </footer>
  );
};

export default Footer;
