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
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const onCloseRef = React.useRef(onClose);
  const onPrevRef = React.useRef(onPrev);
  const onNextRef = React.useRef(onNext);

  useEffect(() => {
    onCloseRef.current = onClose;
    onPrevRef.current = onPrev;
    onNextRef.current = onNext;
  }, [onClose, onPrev, onNext]);

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // Blur after activating: on touch devices the tapped button would otherwise
  // keep focus (and its highlight) until somewhere else is tapped
  const handleNavClick = (handler: () => void) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    handler();
  };

  // A newly selected service (next/prev) starts scrolled to the top — the
  // description area is the element that actually scrolls inside the modal.
  // 'instant' overrides the global smooth scrolling (content is replaced, not
  // navigated, so the jump should be immediate).
  useEffect(() => {
    descriptionRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    containerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [service.id]);

  // Keep keyboard handling and body scroll locking stable while the selected
  // item changes inside the same modal.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
      if (e.key === 'ArrowLeft') onPrevRef.current();
      if (e.key === 'ArrowRight') onNextRef.current();
    };

    const scrollY = window.scrollY;
    const previousBodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousBodyStyles.overflow;
      document.body.style.position = previousBodyStyles.position;
      document.body.style.top = previousBodyStyles.top;
      document.body.style.width = previousBodyStyles.width;
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus({ preventScroll: true });

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !containerRef.current) return;

      const focusable = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute('disabled'));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={containerRef}
        className="modal-container"
        onClick={handleModalClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-header">
          <div
            className="modal-image"
            style={{ backgroundImage: `url(${service.imageh})` }}
          >
            <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
          <button
            ref={closeButtonRef}
            className="modal-close-btn"
            onClick={handleNavClick(onClose)}
            aria-label="Close service details"
            type="button"
          >
            <FontAwesomeIcon icon={faXmark} className="text-xl text-secondary" />
          </button>
          <h3 id="modal-title" className="modal-service-title">
            {service.title}
          </h3>
        </div>

        <div className="modal-content">
          <div ref={descriptionRef} id="modal-description" className="modal-description">
            {service.description}
          </div>
        </div>

        <div className="modal-nav">
          <button className="modal-nav-btn" onClick={handleNavClick(onPrev)} aria-label="Previous service" type="button">
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-secondary" />
          </button>
          <button className="modal-nav-btn" onClick={handleNavClick(onNext)} aria-label="Next service" type="button">
            <FontAwesomeIcon icon={faChevronRight} className="text-xl text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
