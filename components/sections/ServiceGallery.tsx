'use client';

import React, { useState, ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ServiceModal from '@/components/ui/ServiceModal';

import bg from '@/public/images/bgsections.webp';
import serv1 from '@/public/images/services/serv1.webp';
import serv2 from '@/public/images/services/serv2.webp';
import serv3 from '@/public/images/services/serv3.webp';
import serv4 from '@/public/images/services/serv4.webp';
import serv5 from '@/public/images/services/serv5.webp';
import serv6 from '@/public/images/services/serv6.webp';
import serv7 from '@/public/images/services/serv7.webp';
import serv8 from '@/public/images/services/serv8.webp';
import serv9 from '@/public/images/services/serv9.webp';
import serv10 from '@/public/images/services/serv10.webp';
import serv11 from '@/public/images/services/serv11.webp';
import serv12 from '@/public/images/services/serv12.webp';
import serv13 from '@/public/images/services/serv13.webp';
import serv14 from '@/public/images/services/serv14.webp';
import serv15 from '@/public/images/services/serv15.webp';
import serv16 from '@/public/images/services/serv16.webp';
import mask from '@/public/images/services/sservmask.webp';
import sserv1 from '@/public/images/services/sserv1.webp';
import sserv2 from '@/public/images/services/sserv2.webp';
import sserv3 from '@/public/images/services/sserv3.webp';
import sserv4 from '@/public/images/services/sserv4.webp';
import sserv5 from '@/public/images/services/sserv5.webp';
import sserv6 from '@/public/images/services/sserv6.webp';
import sserv7 from '@/public/images/services/sserv7.webp';
import sserv8 from '@/public/images/services/sserv8.webp';
import sserv9 from '@/public/images/services/sserv9.webp';
import sserv10 from '@/public/images/services/sserv10.webp';
import sserv11 from '@/public/images/services/sserv11.webp';
import sserv12 from '@/public/images/services/sserv12.webp';
import sserv13 from '@/public/images/services/sserv13.webp';
import sserv14 from '@/public/images/services/sserv14.webp';
import sserv15 from '@/public/images/services/sserv15.webp';
import sserv16 from '@/public/images/services/sserv16.webp';

interface ServiceItem {
  id: number;
  title: string;
  image: typeof serv1;
  imageh: typeof sserv1;
  description: ReactNode;
}

interface ServiceCardProps {
  title: string;
  image: typeof serv1;
  onClick: () => void;
}

const ServiceCard = ({ title, image, onClick }: ServiceCardProps) => {
  return (
    <div
      className="desktop-card-hover relative overflow-hidden rounded-lg transition transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="desktop-card-mask relative w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="desktop-card-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <p className="text-white text-2xl font-semibold text-center z-10">
          {title}
        </p>
      </div>
      {/* Always-visible caption on touch devices (no hover available) */}
      <div className="touch-caption absolute inset-x-0 bottom-0 z-10">
        <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent px-3 pb-3 pt-10 text-center">
          <p className="text-white text-lg font-semibold">{title}</p>
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

const ServiceGallery = () => {
  const t = useTranslations('serv');

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

  const servicesList: ServiceItem[] = [
    { id: 1, title: t('title1'), image: serv1, imageh: sserv1, description: renderRichDescription('des1') },
    { id: 2, title: t('title2'), image: serv2, imageh: sserv2, description: renderRichDescription('des2') },
    { id: 3, title: t('title3'), image: serv3, imageh: sserv3, description: renderRichDescription('des3') },
    { id: 4, title: t('title4'), image: serv4, imageh: sserv4, description: renderRichDescription('des4') },
    { id: 5, title: t('title5'), image: serv5, imageh: sserv5, description: renderRichDescription('des5') },
    { id: 6, title: t('title6'), image: serv6, imageh: sserv6, description: renderRichDescription('des6') },
    { id: 7, title: t('title7'), image: serv7, imageh: sserv7, description: renderRichDescription('des7') },
    { id: 8, title: t('title8'), image: serv8, imageh: sserv8, description: renderRichDescription('des8') },
    { id: 9, title: t('title9'), image: serv9, imageh: sserv9, description: renderRichDescription('des9') },
    { id: 10, title: t('title10'), image: serv10, imageh: sserv10, description: renderRichDescription('des10') },
    { id: 11, title: t('title11'), image: serv11, imageh: sserv11, description: renderRichDescription('des11') },
    { id: 12, title: t('title12'), image: serv12, imageh: sserv12, description: renderRichDescription('des12') },
    { id: 13, title: t('title13'), image: serv13, imageh: sserv13, description: renderRichDescription('des13') },
    { id: 14, title: t('title14'), image: serv14, imageh: sserv14, description: renderRichDescription('des14') },
    { id: 15, title: t('title15'), image: serv15, imageh: sserv15, description: renderRichDescription('des15') },
    { id: 16, title: t('title16'), image: serv16, imageh: sserv16, description: renderRichDescription('des16') },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const openModal = (service: ServiceItem) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const nextService = () => {
    if (!selectedService) return;
    const currentIndex = servicesList.findIndex(service => service.id === selectedService.id);
    const nextIndex = (currentIndex + 1) % servicesList.length;
    setSelectedService(servicesList[nextIndex]);
  };

  const prevService = () => {
    if (!selectedService) return;
    const currentIndex = servicesList.findIndex(service => service.id === selectedService.id);
    const prevIndex = (currentIndex - 1 + servicesList.length) % servicesList.length;
    setSelectedService(servicesList[prevIndex]);
  };

  return (
    <div>
      <div className="py-16">
        <div
          className="container mx-auto px-4 sm:px-8 rounded-lg overflow-hidden shadow-lg bg-white p-6 sm:p-8 w-full sm:w-10/12 flex lg:flex-row flex-col-reverse items-center"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl text-white font-semibold mb-4">{t('title')}</h2>
            <p className="text-white text-lg mb-8">{renderRichText('des')}</p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {servicesList.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  image={service.image}
                  onClick={() => openModal(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {modalOpen && selectedService && (
        <ServiceModal
          service={{
            ...selectedService,
            imageh: selectedService.imageh.src,
            image: typeof selectedService.image === 'string' ? selectedService.image : selectedService.image.src,
          }}
          onClose={closeModal}
          onNext={nextService}
          onPrev={prevService}
        />
      )}
    </div>
  );
};

export default ServiceGallery;
