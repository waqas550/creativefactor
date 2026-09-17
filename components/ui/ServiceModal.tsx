'use client';

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';

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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const descriptionRef = React.useRef<HTMLDivElement>(null);

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // A newly selected service (next/prev) starts scrolled to the top — the
  // description area is the element that actually scrolls inside the modal.
  // 'instant' overrides the global smooth scrolling (content is replaced, not
  // navigated, so the jump should be immediate).
  useEffect(() => {
    descriptionRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    containerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [service.id]);

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
      <div ref={containerRef} className="modal-container" onClick={handleModalClick}>
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
          <div ref={descriptionRef} className="modal-description">
            {service.description}
          </div>
        </div>

        <div className="modal-nav">
          <button className="modal-nav-btn" onClick={onPrev} aria-label="Previous" type="button">
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-secondary" />
          </button>
          <button className="modal-nav-btn modal-nav-btn--close" onClick={onClose} aria-label="Close" type="button">
            <FontAwesomeIcon icon={faXmark} className="text-2xl text-secondary" />
          </button>
          <button className="modal-nav-btn" onClick={onNext} aria-label="Next" type="button">
            <FontAwesomeIcon icon={faChevronRight} className="text-xl text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
