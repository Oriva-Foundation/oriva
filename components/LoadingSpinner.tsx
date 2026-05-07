'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({
  size = 'md',
  message = 'Loading...',
  fullScreen = false,
}: LoadingSpinnerProps) {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const containerClass = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50'
    : 'flex items-center justify-center';

  return (
    <div className={containerClass}>
      <motion.div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className={`${sizeMap[size]} border-4 border-gray-200 border-t-red-600 border-r-red-600 rounded-full`}
        />

        {/* Message */}
        {message && (
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-600 font-medium text-sm"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
