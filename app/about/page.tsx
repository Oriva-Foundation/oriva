'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About Oriva Foundation"
        subtitle="We're building the future through innovative digital solutions rooted in community values and Islamic principles."
        backgroundVariant="minimal"
      />

      {/* Mission & Vision */}
      <SectionWrapper className="bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-8 border border-red-200 dark:border-red-900/50"
          >
            <h3 className="text-3xl font-bold text-red-600 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To build impactful Islamic applications and community-driven digital solutions that empower people to make a positive difference in their lives and communities. We believe in the transformative power of technology when guided by community values and inclusive principles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-900/50"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              A world where technology serves the community, strengthens cultural and religious ties, and creates opportunities for everyone. We envision a future where digital innovation is accessible, ethical, and centered on human dignity.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🤝',
              title: 'Community',
              description: 'We prioritize the needs and voices of the people we serve.',
            },
            {
              icon: '🔒',
              title: 'Trust',
              description: 'We build with transparency, integrity, and accountability.',
            },
            {
              icon: '🚀',
              title: 'Innovation',
              description: 'We embrace new ideas and technologies to solve problems creatively.',
            },
            {
              icon: '♾️',
              title: 'Sustainability',
              description: 'We create solutions built to last and make lasting impact.',
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800"
            >
              <div className="text-4xl mb-3">{value.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Focus */}
      <SectionWrapper className="bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Islamic Technology',
              description: 'Developing applications that serve Islamic communities, from prayer apps to educational platforms.',
              icon: '✨',
            },
            {
              title: 'Community Impact',
              description: 'Creating solutions that directly address community challenges and opportunities.',
              icon: '🌍',
            },
            {
              title: 'Digital Excellence',
              description: 'Delivering high-quality, modern, and user-friendly digital solutions.',
              icon: '💎',
            },
          ].map((focus, index) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 rounded-xl p-8 border border-red-200 dark:border-red-900/50"
            >
              <div className="text-5xl mb-4">{focus.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {focus.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {focus.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Get Involved */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a developer, designer, or community advocate, there's a place for you in Oriva Foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get Involved
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
