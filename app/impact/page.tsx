'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/translations';
import type { Language } from '@/context/LanguageContext';

const impactMetricsKeys = [
  { numKey: 'impact.projectsLaunched', descKey: 'impact.projectsDesc', num: '15+' },
  { numKey: 'impact.peopleReached', descKey: 'impact.peopleDesc', num: '1000+' },
  { numKey: 'impact.contributors', descKey: 'impact.contributorsDesc', num: '50+' },
  { numKey: 'impact.communitySupport', descKey: 'impact.supportDesc', num: '24/7' },
];

const impactStoriesKeys = [
  { titleKey: 'impact.storyOne', descKey: 'impact.storyOneDesc', metricKey: 'impact.storyOneMetric' },
  { titleKey: 'impact.storyTwo', descKey: 'impact.storyTwoDesc', metricKey: 'impact.storyTwoMetric' },
  { titleKey: 'impact.storyThree', descKey: 'impact.storyThreeDesc', metricKey: 'impact.storyThreeMetric' },
  { titleKey: 'impact.storyFour', descKey: 'impact.storyFourDesc', metricKey: 'impact.storyFourMetric' },
];

const impactApproachKeys = [
  { step: '01', titleKey: 'impact.identify', descKey: 'impact.activelyListen' },
  { step: '02', titleKey: 'impact.buildSolutions', descKey: 'impact.usingModern' },
  { step: '03', titleKey: 'impact.engageCommunity', descKey: 'impact.involveMembers' },
  { step: '04', titleKey: 'impact.measureImpact', descKey: 'impact.continuouslyTrack' },
];

export default function Impact() {
  const { language } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={getTranslation(language as Language, 'impact.hero.title')}
        subtitle={getTranslation(language as Language, 'impact.hero.subtitle')}
      />

      {/* Impact Stats */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetricsKeys.map((metric, index) => (
            <motion.div
              key={metric.numKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border border-red-200"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-3">
                {metric.num}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {getTranslation(language as Language, metric.numKey)}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {getTranslation(language as Language, metric.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Impact Stories */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation(language as Language, 'impact.impactStories')}
          </h2>
          <p className="text-xl text-gray-600">
            {getTranslation(language as Language, 'impact.seeHow')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactStoriesKeys.map((story, index) => (
            <motion.div
              key={story.titleKey}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {getTranslation(language as Language, story.titleKey)}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {getTranslation(language as Language, story.descKey)}
              </p>
              <div className="inline-block bg-red-50 text-red-700 px-4 py-2 rounded-full font-semibold">
                {getTranslation(language as Language, story.metricKey)}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Our Approach */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {getTranslation(language as Language, 'impact.howCreate')}
          </h2>

          <div className="space-y-6">
            {impactApproachKeys.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-600 text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {getTranslation(language as Language, item.titleKey)}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation(language as Language, item.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 text-center border border-gray-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {getTranslation(language as Language, 'impact.bePart')}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {getTranslation(language as Language, 'impact.joinCreating')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/support" variant="primary" size="lg">
              {getTranslation(language as Language, 'impact.supportMission')}
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              {getTranslation(language as Language, 'impact.exploreProjects')}
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

