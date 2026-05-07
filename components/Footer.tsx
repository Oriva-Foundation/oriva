'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/translations';
import type { Language } from '@/context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white mt-20 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-red-500">Oriva Foundation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {getTranslation(language as Language, 'about.passionateBuilding')}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">{getTranslation(language as Language, 'nav.projects')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1">
                  {getTranslation(language as Language, 'nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1">
                  {getTranslation(language as Language, 'nav.projects')}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1">
                  {getTranslation(language as Language, 'nav.team')}
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1">
                  {getTranslation(language as Language, 'nav.impact')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">{getTranslation(language as Language, 'support.followUs')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://github.com/soghayarmahmoud" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1" aria-label="Follow us on GitHub">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61570850696332" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1" aria-label="Follow us on Facebook">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Oriva4u" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1" aria-label="Follow us on YouTube">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1" aria-label="Follow us on LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">{getTranslation(language as Language, 'contact.hero.title')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:orivafoundation@gmail.com" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1" aria-label="Email: orivafoundation@gmail.com">
                  orivafoundation@gmail.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1">
                  {getTranslation(language as Language, 'contact.hero.title')}
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div className="border-t border-gray-800 pt-8" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {getTranslation(language as Language, 'common.copyright')}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1">
                {getTranslation(language as Language, 'common.privacy')}
              </Link>
              <Link href="/terms" className="hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 -mx-2 -my-1">
                {getTranslation(language as Language, 'common.termsOfService')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
