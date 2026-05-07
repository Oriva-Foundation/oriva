'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import OfflineDetector from '@/components/OfflineDetector';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <OfflineDetector />
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}