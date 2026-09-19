'use client';

import React, { useState, ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ServiceModal from '@/components/ui/ServiceModal';

import bg from '@/public/images/bgsections.webp';
import event1 from '@/public/images/services/serv8.webp';
import event2 from '@/public/images/services/serv9.webp';
import event3 from '@/public/images/services/serv10.webp';
import event4 from '@/public/images/services/serv11.webp';
import event5 from '@/public/images/services/serv12.webp';
import event6 from '@/public/images/services/serv13.webp';
import event7 from '@/public/images/services/serv14.webp';
import event8 from '@/public/images/services/serv15.webp';
import event9 from '@/public/images/services/serv16.webp';
import serv8 from '@/public/images/services/sserv8.webp';
import serv9 from '@/public/images/services/sserv9.webp';
import serv10 from '@/public/images/services/sserv10.webp';
import serv11 from '@/public/images/services/sserv11.webp';
import serv12 from '@/public/images/services/sserv12.webp';
import serv13 from '@/public/images/services/sserv13.webp';
import serv14 from '@/public/images/services/sserv14.webp';
import serv15 from '@/public/images/services/sserv15.webp';
import serv16 from '@/public/images/services/sserv16.webp';
import mask from '@/public/images/events/aevemask.webp';

interface EventItem {
  id: number;
  title: string;
  image: typeof event1;
  imageh: typeof serv8;
  description: ReactNode;
}

interface EventCardProps {
  title: string;
  image: typeof event1;
  onClick: () => void;
}

const EventCard = ({ title, image, onClick }: EventCardProps) => {
  return (
    <div
      className="desktop-card-hover relative overflow-hidden rounded-lg transition transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="desktop-card-mask relative aspect-square">
        <Image
          className="object-cover object-center"
          src={image}
          alt={title}
          loading="lazy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="desktop-card-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <p className="text-white text-base sm:text-2xl font-semibold text-center z-10">
          {title}
        </p>
      </div>
      {/* Always-visible caption on touch devices (no hover available) */}
      <div className="touch-caption absolute inset-x-0 bottom-0 z-10">
        <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent px-3 pb-3 pt-10 text-center">
          <p className="text-white text-sm sm:text-lg font-semibold">{title}</p>
        </div>
      </div>
      <style jsx>{`
        .desktop-card-mask {
          mask-image: url(${mask.src});
          mask-size: cover;
          -webkit-mask-image: url(${mask.src});
          -webkit-mask-size: cover;
        }
        .no-mask {
          mask-image: none;
          -webkit-mask-image: none;
        }
      `}</style>
    </div>
  );
};

const EventSection = () => {
  const t = useTranslations('eve');

  const renderRichDescription = (key: string) => {
    return t.rich(key, {
      div: (chunks) => <div>{chunks}</div>,
      h2: (chunks) => <h2>{chunks}</h2>,
      p: (chunks) => <p>{chunks}</p>,
      strong: (chunks) => <strong>{chunks}</strong>
    });
  };

  const renderRichText = (key: string) => {
    return t.rich(key, {
      strong: (chunks) => <strong>{chunks}</strong>
    });
  };

  const eventsList: EventItem[] = [
    { id: 1, title: t('title1'), image: event1, imageh: serv8, description: renderRichDescription('des1') },
    { id: 2, title: t('title2'), image: event2, imageh: serv9, description: renderRichDescription('des2') },
    { id: 3, title: t('title3'), image: event3, imageh: serv10, description: renderRichDescription('des3') },
    { id: 4, title: t('title4'), image: event4, imageh: serv11, description: renderRichDescription('des4') },
    { id: 5, title: t('title5'), image: event5, imageh: serv12, description: renderRichDescription('des5') },
    { id: 6, title: t('title6'), image: event6, imageh: serv13, description: renderRichDescription('des6') },
    { id: 7, title: t('title7'), image: event7, imageh: serv14, description: renderRichDescription('des7') },
    { id: 8, title: t('title8'), image: event8, imageh: serv15, description: renderRichDescription('des8') },
    { id: 9, title: t('title9'), image: event9, imageh: serv16, description: renderRichDescription('des9') },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const openModal = (event: EventItem) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const nextEvent = () => {
    if (!selectedEvent) return;
    const currentIndex = eventsList.findIndex((event) => event.id === selectedEvent.id);
    const nextIndex = (currentIndex + 1) % eventsList.length;
    setSelectedEvent(eventsList[nextIndex]);
  };

  const prevEvent = () => {
    if (!selectedEvent) return;
    const currentIndex = eventsList.findIndex((event) => event.id === selectedEvent.id);
    const prevIndex = (currentIndex - 1 + eventsList.length) % eventsList.length;
    setSelectedEvent(eventsList[prevIndex]);
  };

  return (
    <div>
      <div className="py-16">
        <div
          className="container mx-auto px-4 sm:px-8 rounded-lg overflow-hidden shadow-lg bg-white p-6 sm:p-8 w-full sm:w-10/12 flex lg:flex-row flex-col-reverse items-center"
          style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl text-white font-semibold mb-4">{t('title')}</h2>
            <p className="text-white text-lg mb-8">{renderRichText('des')}</p>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 w-full">
              {eventsList.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  image={event.image}
                  onClick={() => openModal(event)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {modalOpen && selectedEvent && (
        <ServiceModal
          service={{
            ...selectedEvent,
            imageh: selectedEvent.imageh.src,
            image: typeof selectedEvent.image === 'string' ? selectedEvent.image : selectedEvent.image.src,
          }}
          onClose={closeModal}
          onNext={nextEvent}
          onPrev={prevEvent}
        />
      )}
    </div>
  );
};

export default EventSection;
