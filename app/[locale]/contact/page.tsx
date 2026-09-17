'use client';

import React, { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faPaperPlane,
  faUser,
  faTag,
  faChevronDown,
  faComment,
  faCircleCheck,
  faCircleExclamation,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '@/components/layout/Pageheader';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: { icon: IconDefinition; label: string; value: string; href: string }[] = [
    {
      icon: faLocationDot,
      label: t('address') || 'Adresse',
      value: 'Altvaterstraße 11, 85107 Baar-Ebenhausen, Germany',
      href: 'https://maps.google.com/?q=Altvaterstraße+11,+85107+Baar-Ebenhausen,+Germany',
    },
    {
      icon: faPhone,
      label: t('phone') || 'Telefon',
      value: '+49 (0) 8453 336820',
      href: 'tel:+498453336820',
    },
    {
      icon: faEnvelope,
      label: t('email') || 'E-Mail',
      value: 'info@creative-factor.com',
      href: 'mailto:info@creative-factor.com',
    },
  ];

  const socialLinks: { icon: IconDefinition; href: string; label: string }[] = [
    { icon: faFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: faXTwitter, href: 'https://x.com', label: 'X' },
    { icon: faInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: faYoutube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <main className="min-h-screen">
      <PageHeader />

      {/* Contact Content - Side by Side Layout */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Company Info */}
            <div className="space-y-6">
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-dimBlue h-full">
                {/* Company Title */}
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    THE CREATIVE FACTOR
                  </h2>
                  <p className="text-dimWhite text-base sm:text-lg">Roland Gropp Pro-Entertainment</p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4 sm:space-y-5">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-3 sm:p-4 rounded-xl bg-black/30 border border-dimBlue/30 hover:border-secondary/50 hover:bg-black/40 transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/40 text-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-dimWhite/70 mb-1">{item.label}</p>
                        <p className="text-white text-sm sm:text-base font-medium break-words">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-dimBlue/30">
                  <p className="text-dimWhite text-sm mb-4 text-center lg:text-left">
                    {t('followUs') || 'Folgen Sie uns'}
                  </p>
                  <div className="flex justify-center lg:justify-start gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full border border-secondary/60 text-secondary flex items-center justify-center hover:bg-secondary/10 hover:scale-110 transition-all duration-300"
                      >
                        <FontAwesomeIcon icon={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-6 p-4 rounded-xl bg-black/30 border border-dimBlue/30">
                  <div className="flex items-center gap-3 mb-3">
                    <FontAwesomeIcon icon={faClock} className="text-secondary" />
                    <span className="text-white font-medium text-sm sm:text-base">
                      {t('businessHours') || 'Geschäftszeiten'}
                    </span>
                  </div>
                  <p className="text-dimWhite text-xs sm:text-sm">
                    {t('businessHoursText') || 'Mo - Fr: 09:00 - 18:00 Uhr'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-dimBlue">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/40 text-secondary flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {t('sendMessage') || 'Nachricht senden'}
                  </h3>
                  <p className="text-dimWhite/70 text-xs sm:text-sm">
                    {t('formSubtitle') || 'Wir melden uns so schnell wie möglich'}
                  </p>
                </div>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 flex items-center gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-lg flex-shrink-0" />
                  <span className="text-sm sm:text-base">{t('success') || 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.'}</span>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300 flex items-center gap-3">
                  <FontAwesomeIcon icon={faCircleExclamation} className="text-lg flex-shrink-0" />
                  <span className="text-sm sm:text-base">{t('error') || 'Fehler beim Senden. Bitte versuchen Sie es erneut.'}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dimWhite mb-2">
                      {t('name') || 'Name'} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 -translate-y-1/2 text-dimWhite/50 text-sm" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-dimBlue rounded-lg text-white text-sm sm:text-base placeholder:text-dimWhite/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        placeholder={t('namePlaceholder') || 'Ihr Name'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dimWhite mb-2">
                      {t('email') || 'E-Mail'} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon icon={faEnvelope} className="absolute left-4 top-1/2 -translate-y-1/2 text-dimWhite/50 text-sm" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-dimBlue rounded-lg text-white text-sm sm:text-base placeholder:text-dimWhite/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        placeholder={t('emailPlaceholder') || 'ihre@email.de'}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dimWhite mb-2">
                    {t('subject') || 'Betreff'} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faTag} className="absolute left-4 top-1/2 -translate-y-1/2 text-dimWhite/50 text-sm" />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-10 py-3 bg-black/50 border border-dimBlue rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none cursor-pointer"
                    >
                      <option value="">{t('selectSubject') || 'Bitte wählen'}</option>
                      <option value="general">{t('general') || 'Allgemeine Anfrage'}</option>
                      <option value="booking">{t('booking') || 'Buchung'}</option>
                      <option value="events">{t('events') || 'Events'}</option>
                      <option value="production">{t('production') || 'Produktion'}</option>
                      <option value="other">{t('other') || 'Sonstiges'}</option>
                    </select>
                    <FontAwesomeIcon icon={faChevronDown} className="absolute right-4 top-1/2 -translate-y-1/2 text-dimWhite/50 pointer-events-none text-sm" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dimWhite mb-2">
                    {t('message') || 'Nachricht'} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faComment} className="absolute left-4 top-4 text-dimWhite/50 text-sm" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-black/50 border border-dimBlue rounded-lg text-white text-sm sm:text-base placeholder:text-dimWhite/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"
                      placeholder={t('messagePlaceholder') || 'Ihre Nachricht...'}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 px-6 bg-blue-gradient text-primary font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base sm:text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin />
                      <span>{t('sending') || 'Wird gesendet...'}</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      <span>{t('send') || 'Absenden'}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
