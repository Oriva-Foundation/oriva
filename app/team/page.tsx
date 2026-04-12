'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import TeamCard from '@/components/TeamCard';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/translations';
import type { Language } from '@/context/LanguageContext';

const teamMembers = [
  {
    name: 'Mahmoud Elsoghayar',
    role: 'Founder & Lead Developer',
    bio: 'Passionate about building impactful Islamic applications and community-driven solutions.',
    github: 'soghayarmahmoud',
    linkedin: 'https://www.linkedin.com/in/elsoghayar/',
    whatsapp: '+201019593092',
    portfolio: 'https://elsoghayar.vercel.app/',
  },
  {
    name: 'Mahmoud Abdelrauf',
    role: 'Full Stack Developer',
    bio: 'Expert in building scalable web applications and modern solutions.',
    github: 'GoldenBoy13420',
    linkedin: 'https://www.linkedin.com/in/mahmoud-abdelrauf/',
    whatsapp: '+20 11 44078696',
  },
  {
    name: 'Ahmed Mahmoud Mostafa',
    role: 'Front-end Developer',
    bio: 'Specialized in creating beautiful and responsive user interfaces.',
    github: 'a7medma7moudmostafa',
    linkedin: 'https://www.linkedin.com/in/ahmed-mahmoud-74983a31a/',
    whatsapp: '+20 10 93358794',
  },
  {
    name: 'Ahmed Shaban',
    role: 'Back-end Developer',
    bio: 'Focused on building robust and efficient backend systems.',
    github: 'Lord-shaban',
    linkedin: 'https://www.linkedin.com/in/ahmed-sha-ban-006a24309/',
    whatsapp: '+20 11 42444136',
  },
];

const teamValues = [
  { keyTitle: 'team.collaboration', keyDesc: 'team.workTogether' },
  { keyTitle: 'team.innovation', keyDesc: 'team.innovationDesc' },
  { keyTitle: 'team.passionTitle', keyDesc: 'team.deeplyPassionate' },
];

export default function Team() {
  const { language } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={getTranslation(language as Language, 'team.hero.title')}
        subtitle={getTranslation(language as Language, 'team.hero.subtitle')}
      />

      {/* Team Members Grid */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation(language as Language, 'team.talentedTeam')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getTranslation(language as Language, 'team.meetPassionate')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} index={index} {...member} />
          ))}
        </div>
      </SectionWrapper>

      {/* Team Values */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation(language as Language, 'team.whatEmbodies')}
          </h2>
          <p className="text-xl text-gray-600">
            {getTranslation(language as Language, 'team.coreValuesGuide')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamValues.map((value, index) => (
            <motion.div
              key={value.keyTitle}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {getTranslation(language as Language, value.keyTitle)}
              </h3>
              <p className="text-gray-600">
                {getTranslation(language as Language, value.keyDesc)}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Join the Team */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation(language as Language, 'team.lookingTalented')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {getTranslation(language as Language, 'team.alwaysLooking')}
          </p>
          <Button href="/join" variant="primary" size="lg">
            {getTranslation(language as Language, 'team.viewPositions')}
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

