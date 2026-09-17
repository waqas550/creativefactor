'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import Image, { type StaticImageData } from 'next/image';

import fbIcon from '@/public/images/icons/fbicon.png';
import twitterIcon from '@/public/images/icons/twittericon.png';
import instaIcon from '@/public/images/icons/instaicon.png';
import youtubeIcon from '@/public/images/icons/youtubeicon.png';

// Plain URLs instead of static imports: 16 imported image modules slowed down
// bundling/compiling without any benefit (dimensions are irrelevant with fill).
const images = Array.from({ length: 16 }, (_, i) => `/images/hero/cas${i + 1}.jpg`);

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

// All slides stay mounted as stacked layers; the active one is faded in via
// opacity. Swapping src on a single img (old approach) re-fetched every slide
// and repainted without a fade, which read as lag on the front page.
const HeroSlide = memo(({ src, active, priority }: { src: string; active: boolean; priority?: boolean }) => (
  <Image
    src={src}
    alt=""
    fill
    priority={priority}
    sizes="100vw"
    aria-hidden={!active}
    className="object-cover transition-opacity duration-1000 ease-in-out"
    style={{ opacity: active ? 1 : 0 }}
  />
));

HeroSlide.displayName = 'HeroSlide';

const PRELOAD_STEP_MS = 500;

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Warm the image optimizer progressively (one slide at a time) instead of
  // letting every slide hit the cold optimization path on first show.
  const [preloadedCount, setPreloadedCount] = useState(1);

  const next = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  useEffect(() => {
    if (preloadedCount >= images.length) return;
    const timer = setTimeout(() => setPreloadedCount((count) => count + 1), PRELOAD_STEP_MS);
    return () => clearTimeout(timer);
  }, [preloadedCount]);

  const renderedCount = Math.max(preloadedCount, currentImageIndex + 1);

  return (
    <div className="relative w-full h-screen overflow-hidden mt-[-6rem]">
      <div className="absolute inset-0">
        {images.slice(0, renderedCount).map((src, index) => (
          <HeroSlide key={src} src={src} active={index === currentImageIndex} priority={index === 0} />
        ))}
      </div>
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
