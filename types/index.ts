import { ReactNode } from 'react';

// Navigation types
export interface NavLink {
  id: string;
  title: string;
}

// Service/Event types
export interface ServiceItem {
  id: number;
  title: string;
  image: string;
  imageh: string;
  description: ReactNode;
}

// Modal props
export interface ServiceModalProps {
  service: ServiceItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

// Language selector
export interface LanguageSelectorProps {
  currentLocale: string;
}

// Footer modal content
export type ModalContentType = 'imprint' | 'terms' | 'privacy';

// Carousel/Hero image
export interface HeroImage {
  src: string;
  alt: string;
}

// Translation keys type (partial - extend as needed)
export type TranslationNamespace =
  | 'navbar'
  | 'home'
  | 'abus'
  | 'serv'
  | 'eve'
  | 'foot';
