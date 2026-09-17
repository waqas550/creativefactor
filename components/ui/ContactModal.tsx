'use client';

import React, { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
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
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className="modal-container max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto pt-2 pb-4">
        <h2 className="text-2xl font-bold text-white text-center mb-1">{t('title') || 'Kontakt'}</h2>

        {submitStatus === 'success' && (
          <div className="mb-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
            {t('success') || 'Nachricht erfolgreich gesendet!'}
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
            {t('error') || 'Fehler beim Senden. Bitte versuchen Sie es erneut.'}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dimWhite mb-1">
              {t('name') || 'Name'}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-primary border border-dimBlue rounded-lg text-white focus:outline-none focus:border-secondary"
              placeholder={t('namePlaceholder') || 'Ihr Name'}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dimWhite mb-1">
              {t('email') || 'E-Mail'}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-primary border border-dimBlue rounded-lg text-white focus:outline-none focus:border-secondary"
              placeholder={t('emailPlaceholder') || 'ihre@email.de'}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-dimWhite mb-1">
              {t('subject') || 'Betreff'}
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-primary border border-dimBlue rounded-lg text-white focus:outline-none focus:border-secondary"
            >
              <option value="">{t('selectSubject') || 'Bitte wählen'}</option>
              <option value="general">{t('general') || 'Allgemeine Anfrage'}</option>
              <option value="booking">{t('booking') || 'Buchung'}</option>
              <option value="events">{t('events') || 'Events'}</option>
              <option value="production">{t('production') || 'Produktion'}</option>
              <option value="other">{t('other') || 'Sonstiges'}</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dimWhite mb-1">
              {t('message') || 'Nachricht'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-primary border border-dimBlue rounded-lg text-white focus:outline-none focus:border-secondary resize-none"
              placeholder={t('messagePlaceholder') || 'Ihre Nachricht...'}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-blue-gradient text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? t('sending') || 'Wird gesendet...'
              : t('send') || 'Absenden'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
