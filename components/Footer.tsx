'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/translations';
import type { Language } from '@/context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white mt-20 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">Oriva Foundation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {getTranslation(language as Language, 'about.passionateBuilding')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(language as Language, 'nav.projects')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-red-500 transition-colors">
                  {getTranslation(language as Language, 'nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-red-500 transition-colors">
                  {getTranslation(language as Language, 'nav.projects')}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-red-500 transition-colors">
                  {getTranslation(language as Language, 'nav.team')}
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-red-500 transition-colors">
                  {getTranslation(language as Language, 'nav.impact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(language as Language, 'support.followUs')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://github.com/soghayarmahmoud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(language as Language, 'contact.hero.title')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:hello@oriva.org" className="hover:text-red-500 transition-colors">
                  hello@oriva.org
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors">
                  {getTranslation(language as Language, 'contact.hero.title')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {getTranslation(language as Language, 'common.copyright')}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-red-500 transition-colors">
                {getTranslation(language as Language, 'common.privacy')}
              </Link>
              <Link href="/terms" className="hover:text-red-500 transition-colors">
                {getTranslation(language as Language, 'common.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

