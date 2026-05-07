'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Component that shows scroll progress at the top of the page
 * Visual indicator of how much of the page has been scrolled
 */
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}
