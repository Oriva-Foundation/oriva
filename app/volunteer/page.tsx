'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import ApplicationForm from '@/components/ApplicationForm';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRocket, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const opportunitiesData = {
  en: [
    {
      title: 'Content Writer',
      description: 'Help create engaging content for our blog, social media, and community platforms.',
    },
    {
      title: 'Community Outreach',
      description: 'Help us reach and engage communities through events, workshops, and awareness campaigns.',
    },
    {
      title: 'Translator',
      description: 'Help translate our content, documentation, and projects into different languages.',
    },
    {
      title: 'Community Moderator',
      description: 'Help maintain our community forums and support channels to foster a welcoming environment.',
    },
  ],
  ar: [
    {
      title: 'كاتب محتوى',
      description: 'ساعد في إنشاء محتوى جذاب لمدونتنا ووسائل التواصل الاجتماعي ومنصات المجتمع.',
    },
    {
      title: 'التواصل المجتمعي',
      description: 'ساعدنا في الوصول إلى المجتمعات والتفاعل معها من خلال الفعاليات والورش والحملات التوعية.',
    },
    {
      title: 'المترجم',
      description: 'ساعد في ترجمة محتوانا والتوثيق والمشاريع إلى لغات مختلفة.',
    },
    {
      title: 'مدير المجتمع',
      description: 'ساعد في الحفاظ على منتديات المجتمع وقنوات الدعم لدينا لتعزيز بيئة ترحيبية.',
    },
  ],
};

export default function Volunteer() {
  const { language } = useLanguage();
  const t = translations[language];
  const opportunities = opportunitiesData[language];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={t.volunteer.hero.title}
        subtitle={t.volunteer.hero.subtitle}
      />

      {/* Why Volunteer */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.volunteer.whyVolunteer}
          </h2>
          <p className="text-xl text-gray-600">
            {t.volunteer.completeForm}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: faGlobe,
              title: t.volunteer.makeImpact,
              description: t.volunteer.voluntary,
            },
            {
              icon: faRocket,
              title: t.volunteer.learnGrow,
              description: t.volunteer.developYourself,
            },
            {
              icon: faHandshake,
              title: t.volunteer.buildCommunity,
              description: t.volunteer.connectWithLikeMinds,
            },
            {
              icon: faLightbulb,
              title: t.volunteer.flexibleCommitment,
              description: t.volunteer.chooseYourTime,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border border-red-200"
            >
              <div className="text-5xl mb-4 text-red-600">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Volunteer Opportunities */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.volunteer.volunteerOpportunities}
          </h2>
          <p className="text-xl text-gray-600">
            {t.volunteer.alwaysLookingVolunteers}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {opportunity.title}
              </h3>
              <p className="text-gray-600">
                {opportunity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Volunteer Form */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            {t.volunteer.readyHelp}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t.volunteer.completeForm}
          </p>
        </motion.div>

        <ApplicationForm type="volunteer" />
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Every Hour Counts
          </h2>
          <p className="text-lg text-red-50 mb-8 max-w-2xl mx-auto">
            Whether you can give an hour a week, a few hours a month, or more, your volunteer work makes a tangible difference in our mission to create impactful digital solutions for communities.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
          >
            {t.common.getInTouch}
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
