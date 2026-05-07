'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/translations';
import type { Language } from '@/context/LanguageContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

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
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Skip to content link for accessibility */}
      <Link
        href="#main-content"
        className="absolute left-0 top-0 px-4 py-2 bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 -translate-y-full focus:translate-y-0 transition-transform z-40"
      >
        Skip to main content
      </Link>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 rounded-lg px-2 py-1"
            aria-label="Oriva Foundation - Go to homepage"
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
              className="px-2 py-1 rounded text-xs bg-red-50 text-red-600 hover:bg-red-100 transition-colors font-medium border border-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              aria-label={`Switch language to ${language === 'en' ? 'Arabic' : 'English'}`}
              title={`Switch language to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1.5 w-6 h-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 rounded-lg px-1"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              title={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div
                className={`w-full h-0.5 bg-gray-800 rounded transition-all transform ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <div
                className={`w-full h-0.5 bg-gray-800 rounded transition-all ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <div
                className={`w-full h-0.5 bg-gray-800 rounded transition-all transform ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="pb-4 border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 px-2 text-gray-700 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 rounded"
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

