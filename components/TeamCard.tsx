'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

interface TeamCardProps {
  name: string;
  role?: string;
  image?: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  whatsapp?: string;
  portfolio?: string;
  index?: number;
}

export default function TeamCard({
  name,
  role,
  bio,
  github,
  linkedin,
  whatsapp,
  portfolio,
  index = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(198, 40, 40, 0.15)' }}
      className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-600 transition-all duration-300 text-center"
    >
      {/* Avatar */}
      <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
        {name.charAt(0)}
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {name}
      </h3>

      {/* Role */}
      {role && (
        <p className="text-red-600 font-semibold mb-3">
          {role}
        </p>
      )}

      {/* Bio */}
      {bio && (
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {bio}
        </p>
      )}

      {/* Social Links */}
      <div className="flex justify-center gap-4 flex-wrap">
        {github && (
          <motion.a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={`GitHub: @${github}`}
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
          </motion.a>
        )}
        {linkedin && (
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
          </motion.a>
        )}
        {whatsapp && (
          <motion.a
            href={`https://wa.me/${whatsapp.replace(/\s+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
          </motion.a>
        )}
        {portfolio && (
          <motion.a
            href={portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Portfolio"
          >
            <FontAwesomeIcon icon={faGlobe} className="text-lg" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

