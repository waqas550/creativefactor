'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import Image, { type StaticImageData } from 'next/image';

import fbIcon from '@/public/images/icons/fbicon.webp';
import twitterIcon from '@/public/images/icons/twittericon.webp';
import instaIcon from '@/public/images/icons/instaicon.webp';
import youtubeIcon from '@/public/images/icons/youtubeicon.webp';
import tiktokIcon from '@/public/images/icons/tiktokicon.webp';

// Plain URLs instead of static imports: 16 imported image modules slowed down
// bundling/compiling without any benefit (dimensions are irrelevant with fill).
const images = Array.from({ length: 16 }, (_, i) => `/images/hero/cas${i + 1}.webp`);

const socialLinks = [
  { icon: fbIcon, href: 'https://www.facebook.com/Roland.Gropp.ProEntertainment', label: 'Facebook' },
  { icon: twitterIcon, href: 'https://www.x.com/roland_gropp', label: 'X' },
  { icon: instaIcon, href: 'https://www.instagram.com/rolandgroppproentertainment/', label: 'Instagram' },
  { icon: youtubeIcon, href: 'https://www.youtube.com/@RGProEntertainment0142', label: 'YouTube' },
  { icon: tiktokIcon, href: 'https://tiktok.com/@creative.factor', label: 'TikTok' },
];

const SocialLink = memo(({ icon, href, label }: { icon: StaticImageData; href: string; label: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-link">
    <img src={icon.src} alt={label} className="hero-icon" />
  </a>
));

SocialLink.displayName = 'SocialLink';

// Slides stay mounted as stacked layers once loaded; the active one is faded
// in via opacity. Only the current slide and the next two are mounted at a
// time, so phones download roughly one small image per 5s interval instead of
// the whole set up front — an image then has ~10s to load before its turn.
const HeroSlide = memo(({ src, active, priority }: { src: string; active: boolean; priority?: boolean }) => (
  <Image
    src={src}
    alt=""
    fill
    priority={priority}
    // Cap large screens at the 1920px variant: a background carousel gains
    // nothing from the 3840px files, which are ~3x heavier.
    sizes="(max-width: 767px) 100vw, 1920px"
    aria-hidden={!active}
    className="object-cover transition-opacity duration-1000 ease-in-out"
    style={{ opacity: active ? 1 : 0 }}
  />
));

HeroSlide.displayName = 'HeroSlide';

const SLIDE_INTERVAL_MS = 5000;
const SLIDES_LOADED_AHEAD = 2;

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const heroRef = React.useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    if (carouselPaused) return;
    const interval = setInterval(next, SLIDE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [next, carouselPaused]);

  // Don't fetch or cycle slides in a hidden tab.
  useEffect(() => {
    const onVisibilityChange = () => setCarouselPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  // Pause while the hero is scrolled out of view: no crossfades, no new
  // slide downloads while the visitor is reading lower sections.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCarouselPaused(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Respect users who ask for less motion: show a static hero.
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Monotonically non-decreasing: loaded layers stay mounted (cached by the
  // browser), so after one full loop nothing ever loads again.
  const renderedCount = reducedMotion
    ? 1
    : Math.min(images.length, currentImageIndex + 1 + SLIDES_LOADED_AHEAD);

  return (
    <div ref={heroRef} className="relative w-full h-svh overflow-hidden mt-[-6rem]">
      <div className="absolute inset-0">
        {images.slice(0, renderedCount).map((src, index) => (
          <HeroSlide key={src} src={src} active={reducedMotion ? index === 0 : index === currentImageIndex} priority={index === 0} />
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
