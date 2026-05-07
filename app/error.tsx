'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Animated Warning Icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-7xl text-red-600 opacity-80"
          />
        </motion.div>

        {/* Content */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Something Went Wrong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mb-4 leading-relaxed"
        >
          We encountered an unexpected error on our end. Our team has been notified and is working on a fix.
        </motion.p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 p-4 bg-red-50 rounded-lg border border-red-200 text-left"
          >
            <p className="text-sm font-mono text-red-800 break-words">
              {error.message}
            </p>
          </motion.div>
        )}

        {/* Support Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-gray-700 mb-3">What you can do:</h2>
          <ul className="text-left space-y-2 text-gray-600 text-sm">
            <li>✓ Try refreshing the page</li>
            <li>✓ Clear your browser cache</li>
            <li>✓ Come back in a few moments</li>
            <li>✓ Contact us if the problem persists</li>
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" size="lg" onClick={() => reset()}>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="secondary" size="lg">
              <FontAwesomeIcon icon={faHome} />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              <FontAwesomeIcon icon={faEnvelope} />
              Contact Support
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
