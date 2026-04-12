'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/translations';
import type { Language } from '@/context/LanguageContext';

const coreValues = [
  { key: 'about.community', descKey: 'about.prioritize' },
  { key: 'about.trust', descKey: 'about.buildTransparency' },
  { key: 'about.innovation', descKey: 'about.embraceNew' },
  { key: 'about.sustainability', descKey: 'about.createLasting' },
];

const teamFocusAreas = [
  { keyTitle: 'about.islamicTechnology', keyDesc: 'about.developingApplications' },
  { keyTitle: 'about.impact', keyDesc: 'about.creatingDirectly' },
  { keyTitle: 'about.excellence', keyDesc: 'about.deliveringQuality' },
];

export default function About() {
  const { language } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={getTranslation(language as Language, 'about.hero.title')}
        subtitle={getTranslation(language as Language, 'about.hero.subtitle')}
      />

      {/* Mission & Vision */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-2xl p-8 border border-red-200"
          >
            <h3 className="text-3xl font-bold text-red-600 mb-4">
              {getTranslation(language as Language, 'about.ourMission')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {getTranslation(language as Language, 'about.buildImpactful')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 border border-blue-200"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-4">
              {getTranslation(language as Language, 'about.ourVision')}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {getTranslation(language as Language, 'about.worldTechnology')}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation(language as Language, 'about.coreValues')}
          </h2>
          <p className="text-xl text-gray-600">
            {getTranslation(language as Language, 'about.valuesPrinciples')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center border border-gray-200"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {getTranslation(language as Language, value.key)}
              </h4>
              <p className="text-gray-600">
                {getTranslation(language as Language, value.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Focus */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation(language as Language, 'about.teamFocus')}
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamFocusAreas.map((focus, index) => (
            <motion.div
              key={focus.keyTitle}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border border-red-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {getTranslation(language as Language, focus.keyTitle)}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {getTranslation(language as Language, focus.keyDesc)}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Get Involved */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation(language as Language, 'about.joinMission')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {getTranslation(language as Language, 'about.whetherDeveloper')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              {getTranslation(language as Language, 'common.getInvolved')}
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              {getTranslation(language as Language, 'common.viewAll')}
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

