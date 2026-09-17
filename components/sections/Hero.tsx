'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import Image, { type StaticImageData } from 'next/image';

import fbIcon from '@/public/images/icons/fbicon.png';
import twitterIcon from '@/public/images/icons/twittericon.png';
import instaIcon from '@/public/images/icons/instaicon.png';
import youtubeIcon from '@/public/images/icons/youtubeicon.png';

import cas1 from '@/public/images/hero/cas1.jpg';
import cas2 from '@/public/images/hero/cas2.jpg';
import cas3 from '@/public/images/hero/cas3.jpg';
import cas4 from '@/public/images/hero/cas4.jpg';
import cas5 from '@/public/images/hero/cas5.jpg';
import cas6 from '@/public/images/hero/cas6.jpg';
import cas7 from '@/public/images/hero/cas7.jpg';
import cas8 from '@/public/images/hero/cas8.jpg';
import cas9 from '@/public/images/hero/cas9.jpg';
import cas10 from '@/public/images/hero/cas10.jpg';
import cas11 from '@/public/images/hero/cas11.jpg';
import cas12 from '@/public/images/hero/cas12.jpg';
import cas13 from '@/public/images/hero/cas13.jpg';
import cas14 from '@/public/images/hero/cas14.jpg';
import cas15 from '@/public/images/hero/cas15.jpg';
import cas16 from '@/public/images/hero/cas16.jpg';

const images = [cas1, cas2, cas3, cas4, cas5, cas6, cas7, cas8, cas9, cas10, cas11, cas12, cas13, cas14, cas15, cas16];

const socialLinks = [
  { icon: fbIcon, href: 'https://facebook.com', label: 'Facebook' },
  { icon: twitterIcon, href: 'https://x.com', label: 'X' },
  { icon: instaIcon, href: 'https://instagram.com', label: 'Instagram' },
  { icon: youtubeIcon, href: 'https://youtube.com', label: 'YouTube' },
];

const SocialLink = memo(({ icon, href, label }: { icon: StaticImageData; href: string; label: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-link">
    <img src={icon.src} alt={label} className="hero-icon" />
  </a>
));

SocialLink.displayName = 'SocialLink';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="relative w-full h-screen overflow-hidden mt-[-6rem]">
      <Image
        src={images[currentImageIndex]}
        alt="Hero"
        priority
        fill
        className="object-cover transition-opacity duration-1000"
        sizes="100vw"
      />
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black opacity-0"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl mb-4 font-semibold text-neon">
            We are The Creative Factor
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl xl:text-5xl italic mt-4 xl:mt-10 text-neon">
            Only the Sky is the Limit
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6 justify-center mt-8 sm:mt-10">
            {socialLinks.map((social) => (
              <SocialLink key={social.label} icon={social.icon} href={social.href} label={social.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
