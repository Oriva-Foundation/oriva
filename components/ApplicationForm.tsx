'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import Button from './Button';

interface ApplicationFormProps {
  type: 'job' | 'volunteer';
  positions?: string[];
}

export default function ApplicationForm({ type, positions = [] }: ApplicationFormProps) {
  const { language, isArabic, dir } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    skills: '',
    message: '',
    availability: '',
    portfolio: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    try {
      // Simulate form submission - in production, send to backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitMessage(t.forms.successMessage);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        skills: '',
        message: '',
        availability: '',
        portfolio: '',
      });

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      setSubmitError(t.forms.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isJob = type === 'job';
  const messageLabel = isJob ? t.forms.message : t.forms.volunteerMessage;
  const submitLabel = isJob ? t.forms.submit : t.forms.submitVolunteer;

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
            {t.forms.fullName} *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${isArabic ? 'text-right' : ''}`}
            placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
            dir={dir}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            {t.forms.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${isArabic ? 'text-right' : ''}`}
            placeholder="your.email@example.com"
            dir={dir}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
            {t.forms.phone} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${isArabic ? 'text-right' : ''}`}
            placeholder="+1 (555) 000-0000"
            dir={dir}
          />
        </div>

        {/* Position - Job Only */}
        {isJob && (
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-900 mb-2">
              {t.forms.position} *
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${isArabic ? 'text-right' : ''}`}
              dir={dir}
            >
              <option value="">{t.forms.selectPosition}</option>
              {positions.map(pos => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Experience */}
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-900 mb-2">
            {t.forms.experience}
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${isArabic ? 'text-right' : ''}`}
            dir={dir}
          >
            <option value="">Select experience level</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-900 mb-2">
            {t.forms.skills}
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows={3}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${isArabic ? 'text-right' : ''}`}
            placeholder={isArabic ? 'اذكر مهاراتك' : 'List your skills'}
            dir={dir}
          />
        </div>

        {/* Portfolio - Job Only */}
        {isJob && (
          <div>
            <label htmlFor="portfolio" className="block text-sm font-medium text-gray-900 mb-2">
              {t.forms.portfolio}
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${isArabic ? 'text-right' : ''}`}
              placeholder="https://yourportfolio.com"
              dir={dir}
            />
          </div>
        )}

        {/* Availability - Volunteer Only */}
        {!isJob && (
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-900 mb-2">
              {t.forms.availability} *
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${isArabic ? 'text-right' : ''}`}
              dir={dir}
            >
              <option value="">{t.forms.selectAvailability}</option>
              <option value="full-time">{t.forms.fullTime}</option>
              <option value="part-time">{t.forms.partTime}</option>
              <option value="flexible">{t.forms.flexible}</option>
            </select>
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            {messageLabel} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${isArabic ? 'text-right' : ''}`}
            placeholder={isArabic ? 'اكتب رسالتك' : 'Write your message'}
            dir={dir}
          />
        </div>

        {/* Success Message */}
        {submitMessage && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800">{submitMessage}</p>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{submitError}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          onClick={() => {}}
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : submitLabel}
        </Button>
      </form>
    </div>
  );
}
