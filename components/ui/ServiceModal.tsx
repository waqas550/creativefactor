'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

import nextIcon from '@/public/images/icons/nexticon.png';
import prevIcon from '@/public/images/icons/previousicon.png';
import exitIcon from '@/public/images/icons/closeicon.png';

interface Service {
  id: number;
  title: string;
  image: string;
  imageh: string;
  description: React.ReactNode;
}

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ServiceModal = ({ service, onClose, onPrev, onNext }: ServiceModalProps) => {
  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // Close on Escape key + lock body scroll while modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={service.title}>
      <div className="modal-container" onClick={handleModalClick}>
        <div className="modal-header">
          <div
            className="modal-image"
            style={{ backgroundImage: `url(${service.imageh})` }}
          >
            <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
          <h3 className="modal-service-title">
            {service.title}
          </h3>
        </div>

        <div className="modal-content">
          <div className="modal-description">
            {service.description}
          </div>
        </div>

        <div className="modal-nav">
          <button className="modal-nav-btn" onClick={onPrev} aria-label="Previous" type="button">
            <Image src={prevIcon} alt="Previous" width={28} height={28} />
          </button>
          <button className="modal-nav-btn modal-nav-btn--close" onClick={onClose} aria-label="Close" type="button">
            <Image src={exitIcon} alt="Close" width={28} height={28} />
          </button>
          <button className="modal-nav-btn" onClick={onNext} aria-label="Next" type="button">
            <Image src={nextIcon} alt="Next" width={28} height={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
