'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Animated 404 */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-8"
        >
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700 mb-4">
            404
          </div>
        </motion.div>

        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mb-8"
        >
          <FontAwesomeIcon
            icon={faSearch}
            className="text-6xl text-red-600 opacity-80"
          />
        </motion.div>

        {/* Content */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mb-8 leading-relaxed"
        >
          Sorry! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted. Let&apos;s get you back on track.
        </motion.p>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-gray-700 mb-4">What you can try:</h2>
          <ul className="text-left space-y-2 text-gray-600 text-sm">
            <li>✓ Check the URL for typos</li>
            <li>✓ Go back to the previous page</li>
            <li>✓ Browse our main pages using the navigation menu</li>
            <li>✓ Use search to find what you need</li>
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button variant="primary" size="lg">
              <FontAwesomeIcon icon={faHome} />
              Back to Home
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="secondary" size="lg">
              Browse Projects
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
