'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/translations';
import type { Language } from '@/context/LanguageContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { label: 'nav.home', href: '/' },
    { label: 'nav.about', href: '/about' },
    { label: 'nav.projects', href: '/projects' },
    { label: 'nav.events', href: '/events' },
    { label: 'nav.courses', href: '/courses' },
    { label: 'nav.hackathons', href: '/hackathons' },
    { label: 'nav.team', href: '/team' },
    { label: 'nav.impact', href: '/impact' },
    { label: 'nav.joinUs', href: '/join' },
    { label: 'nav.volunteer', href: '/volunteer' },
    { label: 'nav.support', href: '/support' },
    { label: 'nav.contact', href: '/contact' },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 relative">
              <Image
                src="/imgs/oriva.png"
                alt="Oriva Foundation Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-red-600">Oriva</span>
          </Link>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="flex items-center gap-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="px-2 py-1 rounded text-xs bg-red-50 text-red-600 hover:bg-red-100 transition-colors font-medium border border-red-200"
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1.5 w-6 h-6"
              aria-label="Toggle mobile menu"
              title="Toggle mobile menu"
            >
              <div className="w-full h-0.5 bg-gray-800 rounded transition-all" />
              <div className="w-full h-0.5 bg-gray-800 rounded transition-all" />
              <div className="w-full h-0.5 bg-gray-800 rounded transition-all" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="pb-4 border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {getTranslation(language as Language, item.label)}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

