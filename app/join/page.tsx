'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import ApplicationForm from '@/components/ApplicationForm';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRocket, faLightbulb, faHandshake, faBook, faBullseye, faBriefcase, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const positionsData = {
  en: [
    {
      title: 'Full Stack Developer',
      description: 'Build full-featured applications using Next.js, React, and modern backend technologies.',
      requirements: ['React/Next.js', 'TypeScript', 'Node.js', 'Database design'],
    },
    {
      title: 'Front-end Developer',
      description: 'Create beautiful, responsive, and accessible user interfaces for our Islamic applications.',
      requirements: ['React', 'Tailwind CSS', 'UI/UX Design', 'Mobile Responsive'],
    },
    {
      title: 'Back-end Developer',
      description: 'Design and build robust backend systems and APIs for our applications.',
      requirements: ['Node.js', 'Database Design', 'APIs', 'Cloud Services'],
    },
    {
      title: 'UI/UX Designer',
      description: 'Design intuitive and beautiful interfaces for our community-driven projects.',
      requirements: ['Figma/Design Tools', 'User Research', 'Prototyping', 'Design Systems'],
    },
    {
      title: 'Community Manager',
      description: 'Help manage and grow our community through engagement and support.',
      requirements: ['Community Building', 'Communication', 'Social Media', 'Event Planning'],
    },
  ],
  ar: [
    {
      title: 'مطور ملء الكومة',
      description: 'بناء تطبيقات مميزة باستخدام Next.js و React والتقنيات الحديثة.',
      requirements: ['React/Next.js', 'TypeScript', 'Node.js', 'تصميم قواعد البيانات'],
    },
    {
      title: 'مطور الواجهة الأمامية',
      description: 'إنشاء واجهات مستخدم جميلة وسريعة الاستجابة وسهلة الوصول لتطبيقاتنا الإسلامية.',
      requirements: ['React', 'Tailwind CSS', 'تصميم واجهة المستخدم', 'الجوال المتجاوب'],
    },
    {
      title: 'مطور الخادم',
      description: 'تصميم وبناء أنظمة خادم قوية وواجهات برمجية لتطبيقاتنا.',
      requirements: ['Node.js', 'تصميم قواعد البيانات', 'APIs', 'خدمات السحابة'],
    },
    {
      title: 'مصمم واجهة المستخدم',
      description: 'تصميم واجهات بديهية وجميلة لمشاريعنا المجتمعية.',
      requirements: ['Figma/أدوات التصميم', 'ابحاث المستخدم', 'النماذج الأولية', 'أنظمة التصميم'],
    },
    {
      title: 'مدير المجتمع',
      description: 'ساعد في إدارة وتنمية مجتمعنا من خلال الانخراط والدعم.',
      requirements: ['بناء المجتمع', 'التواصل', 'وسائل التواصل الاجتماعي', 'تخطيط الفعاليات'],
    },
  ],
};

export default function Join() {
  const { language } = useLanguage();
  const t = translations[language];
  const positions = positionsData[language];
  const positionTitles = positions.map(p => p.title);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={t.join.hero.title}
        subtitle={t.join.hero.subtitle}
      />

      {/* Why Join */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.join.whyJoin}
          </h2>
          <p className="text-xl text-gray-600">
            {t.join.bePartSomething}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: faGlobe,
              title: t.join.globalImpact,
              description: t.join.workWillImpact,
            },
            {
              icon: faRocket,
              title: t.join.growSkills,
              description: t.join.workCutting,
            },
            {
              icon: faLightbulb,
              title: t.join.meaningfulWork,
              description: t.join.everyProject,
            },
            {
              icon: faHandshake,
              title: t.join.supportive,
              description: t.join.joinVibrant,
            },
            {
              icon: faBook,
              title: t.join.continuousLearning,
              description: t.join.investTeam,
            },
            {
              icon: faBullseye,
              title: t.join.clearMission,
              description: t.join.workTowards,
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

      {/* Open Positions */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.join.openPositions}
          </h2>
          <p className="text-xl text-gray-600">
            {t.join.alwaysLookingTalented}
          </p>
        </motion.div>

        <div className="space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {position.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {position.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {position.requirements.map((req) => (
                  <span
                    key={req}
                    className="bg-red-50 text-red-700 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Application Form */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            {t.join.applicationProcess}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t.join.review}
          </p>
        </motion.div>

        <ApplicationForm
          type="job"
          positions={positionTitles}
        />
      </SectionWrapper>

      {/* Contact Info */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 text-center border border-gray-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.join.readyApply}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.join.sendApplication}
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mahmoud Elsoghayar</h4>
              <p className="text-gray-600">{t.join.founder}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="https://wa.me/201019593092"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
              >
                <FontAwesomeIcon icon={faCommentDots} /> WhatsApp: +201019593092
              </a>
              <a
                href="https://www.linkedin.com/in/elsoghayar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
              >
                <FontAwesomeIcon icon={faBriefcase} /> LinkedIn Profile
              </a>
              <a
                href="https://github.com/soghayarmahmoud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              {t.join.contactUs}
            </Button>
            <Button href="/team" variant="outline" size="lg">
              {t.common.meetTheTeam}
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

