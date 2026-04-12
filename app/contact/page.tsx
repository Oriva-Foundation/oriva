'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
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
      icon: '📧',
      title: 'Email',
      value: 'hello@oriva.org',
      link: 'mailto:hello@oriva.org',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: '@soghayarmahmoud',
      link: 'https://github.com/soghayarmahmoud',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Oriva Foundation',
      link: 'https://linkedin.com',
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@oriva_foundation',
      link: 'https://twitter.com',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Get In Touch"
        subtitle="Have questions, want to contribute, or interested in partnering with us? We'd love to hear from you."
        backgroundVariant="minimal"
      />

      {/* Contact Methods */}
      <SectionWrapper className="bg-white dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose your preferred way to reach out
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
              className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 rounded-xl p-6 text-center border border-red-200 dark:border-red-900/50 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{option.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {option.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {option.value}
              </p>
            </motion.a>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We're usually pretty quick to respond. Give us some details about what you'd like to discuss, and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Questions?',
                  description: 'Got a question about Oriva? We have answers.',
                },
                {
                  title: 'Want to Contribute?',
                  description: 'Let us know how you\'d like to contribute to our mission.',
                },
                {
                  title: 'Partnership?',
                  description: 'Interested in partnering with Oriva Foundation?',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-red-600 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
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
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Received!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Thank you for reaching out. We'll get back to you soon!
                </p>
                <div className="text-red-600 text-lg">
                  We appreciate your interest.
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder="Tell us more about what you'd like to discuss..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Location Info */}
      <SectionWrapper className="bg-white dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Global Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're a distributed team working with communities around the world. No matter where you are, we're here to connect and collaborate.
          </p>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
