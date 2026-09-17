import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import EventsSection from '@/components/sections/EventsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roland Gropp Pro-Entertainment - The Creative Factor',
  description: 'Welcome to The Creative Factor - Where creativity knows no limits',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
    </>
  );
}
