'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

export default function SponsorCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-8 md:p-12 text-center shadow-lg"
    >
      <div className="mb-6">
        <FontAwesomeIcon icon={faHeart} className="text-4xl md:text-5xl text-white" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        Support Our Mission
      </h3>
      <p className="text-red-50 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
        Help us build impactful digital solutions for the community. Your support enables us to create more Islamic applications and community-driven projects.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          href="https://github.com/sponsors/soghayarmahmoud"
          variant="secondary"
          size="lg"
        >
          Become a Sponsor
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Get Involved
        </Button>
      </div>
      <p className="text-red-100 text-sm mt-8">
        Every contribution makes a difference in building better digital solutions.
      </p>
    </motion.div>
  );
}

