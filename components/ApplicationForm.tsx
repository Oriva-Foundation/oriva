'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import Button from './Button';
import LoadingSpinner from './LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

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

  const handleBlur = () => {
    // Blur handling can be expanded for field-level validation later.
  };

  // Basic validation
  const validateForm = () => {
    const requiredFields = ['fullName', 'email', 'phone', 'message'];
    if (type === 'job') requiredFields.push('position');
    if (type === 'volunteer') requiredFields.push('availability');

    return requiredFields.every(field => formData[field as keyof typeof formData].trim() !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitError(t.forms.errorMessage || 'Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
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
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setSubmitError(data.message || t.forms.errorMessage);
      }
    } catch (error) {
      setSubmitError(t.forms.errorMessage || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isJob = type === 'job';
  const messageLabel = isJob ? t.forms.message : t.forms.volunteerMessage;
  const submitLabel = isJob ? t.forms.submit : t.forms.submitVolunteer;

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      {isSubmitting && <LoadingSpinner fullScreen message="Submitting..." />}
      
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
            {t.forms.fullName} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
              formData.fullName ? 'border-green-300' : 'border-gray-300'
            } ${isArabic ? 'text-right' : ''}`}
            placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
            dir={dir}
            aria-required="true"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            {t.forms.email} <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
              formData.email && formData.email.includes('@') ? 'border-green-300' : 'border-gray-300'
            } ${isArabic ? 'text-right' : ''}`}
            placeholder="your.email@example.com"
            dir={dir}
            aria-required="true"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
            {t.forms.phone} <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
              formData.phone ? 'border-green-300' : 'border-gray-300'
            } ${isArabic ? 'text-right' : ''}`}
            placeholder="+1 (555) 000-0000"
            dir={dir}
            aria-required="true"
          />
        </div>

        {/* Position - Job Only */}
        {isJob && (
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-900 mb-2">
              {t.forms.position} <span className="text-red-600">*</span>
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                formData.position ? 'border-green-300' : 'border-gray-300'
              } ${isArabic ? 'text-right' : ''}`}
              dir={dir}
              aria-required="true"
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
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${isArabic ? 'text-right' : ''} border-gray-300`}
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
            onBlur={handleBlur}
            rows={3}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${isArabic ? 'text-right' : ''}`}
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
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${isArabic ? 'text-right' : ''}`}
              placeholder="https://yourportfolio.com"
              dir={dir}
            />
          </div>
        )}

        {/* Availability - Volunteer Only */}
        {!isJob && (
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-900 mb-2">
              {t.forms.availability} <span className="text-red-600">*</span>
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                formData.availability ? 'border-green-300' : 'border-gray-300'
              } ${isArabic ? 'text-right' : ''}`}
              dir={dir}
              aria-required="true"
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
            {messageLabel} <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            rows={5}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
              formData.message ? 'border-green-300' : 'border-gray-300'
            } ${isArabic ? 'text-right' : ''}`}
            placeholder={isArabic ? 'اكتب رسالتك' : 'Write your message'}
            dir={dir}
            aria-required="true"
          />
        </div>

        {/* Success Message */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-300 rounded-lg flex items-center gap-3"
            role="alert"
            aria-live="polite"
          >
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-lg flex-shrink-0" />
            <p className="text-green-800">{submitMessage}</p>
          </motion.div>
        )}

        {/* Error Message */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-300 rounded-lg flex items-center gap-3"
            role="alert"
            aria-live="polite"
          >
            <FontAwesomeIcon icon={faExclamationCircle} className="text-red-600 text-lg flex-shrink-0" />
            <p className="text-red-800">{submitError}</p>
          </motion.div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || !validateForm()}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? 'Submitting...' : submitLabel}
        </Button>
      </form>
    </div>
  );
}

