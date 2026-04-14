'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Contact() {
  const { language, isArabic, dir } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactOptions = [
    {
      icon: faEnvelope,
      title: 'Email',
      value: 'orivafoundation@gmail.com',
      link: 'mailto:orivafoundation@gmail.com',
    },
    {
      icon: faGithub,
      title: 'GitHub',
      value: '@soghayarmahmoud',
      link: 'https://github.com/soghayarmahmoud',
    },
    {
      icon: faBriefcase,
      title: 'LinkedIn',
      value: 'Oriva Foundation',
      link: 'https://linkedin.com',
    },
    {
      icon: faTwitter,
      title: 'Twitter',
      value: '@oriva_foundation',
      link: 'https://twitter.com',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={t.contact.hero.title}
        subtitle={t.contact.hero.subtitle}
      />

      {/* Contact Methods */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.connectWith}
          </h2>
          <p className="text-xl text-gray-600">
            {t.contact.choosePreferred}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option, index) => (
            <motion.a
              key={option.title}
              href={option.link}
              target={option.link.startsWith('http') ? '_blank' : undefined}
              rel={option.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center border border-red-200 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3 text-red-600">
                <FontAwesomeIcon icon={option.icon} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {option.title}
              </h3>
              <p className="text-sm text-gray-600">
                {option.value}
              </p>
            </motion.a>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.contact.sendMessage}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t.contact.usuallyQuick}
            </p>

            <div className="space-y-6">
              {[
                {
                  title: t.contact.gotQuestion,
                  description: t.contact.questionAnswer,
                },
                {
                  title: t.contact.wantJoin,
                  description: t.contact.letKnow,
                },
                {
                  title: t.contact.interestedPartner,
                  description: t.contact.interestedPartnering,
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-red-600 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.contact.messageReceived}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.contact.thankYouReaching}
                </p>
                <div className="text-red-600 text-lg">
                  {t.contact.weAppreciate}
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    {t.contact.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-red-600 transition-colors ${isArabic ? 'text-right' : ''}`}
                    placeholder={isArabic ? 'اسمك' : 'Your name'}
                    dir={dir}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-red-600 transition-colors ${isArabic ? 'text-right' : ''}`}
                    placeholder="your@email.com"
                    dir={dir}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-red-600 transition-colors resize-none ${isArabic ? 'text-right' : ''}`}
                    placeholder={isArabic ? 'أخبرنا المزيد...' : 'Tell us more about what you\'d like to discuss...'}
                    dir={dir}
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {t.contact.sendMessage}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Location Info */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.contact.global}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contact.distributedTeam}
          </p>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

