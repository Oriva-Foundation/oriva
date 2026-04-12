'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const impactMetrics = [
  {
    number: '15+',
    label: 'Projects Launched',
    description: 'From Islamic apps to community platforms, each creating tangible value.',
  },
  {
    number: '1000+',
    label: 'People Reached',
    description: 'Direct positive impact of our applications and community initiatives.',
  },
  {
    number: '50+',
    label: 'Contributors',
    description: 'Talented team members collaborating to build better digital solutions.',
  },
  {
    number: '24/7',
    label: 'Community Support',
    description: 'Always available to help our users and community partners succeed.',
  },
];

const impactStories = [
  {
    title: 'Prayer Times App Adoption',
    description: 'Our prayer times application has been downloaded by thousands of users across multiple countries, helping them stay connected to their faith through technology.',
    metric: '5000+ users',
    icon: '📱',
  },
  {
    title: 'Community Forum Engagement',
    description: 'The community forum has become a hub for discussion, with thousands of posts and interactions fostering a supportive community environment.',
    metric: '2000+ discussions',
    icon: '💬',
  },
  {
    title: 'Educational Impact',
    description: 'Our Islamic learning platform has provided educational resources to students and learners worldwide, contributing to knowledge sharing and community education.',
    metric: '10,000+ learners',
    icon: '📚',
  },
  {
    title: 'Community Volunteering',
    description: 'Through our volunteer hub, hundreds of community members have connected with meaningful volunteer opportunities, creating positive local impact.',
    metric: '500+ volunteers',
    icon: '🤝',
  },
];

export default function Impact() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Impact"
        subtitle="Real metrics showing how technology is making a difference in communities around the world."
        backgroundVariant="minimal"
      />

      {/* Impact Stats */}
      <SectionWrapper className="bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 rounded-xl p-8 border border-red-200 dark:border-red-900/50"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-3">
                {metric.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Impact Stories */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Impact Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See how our projects are making a real difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800"
            >
              <div className="text-4xl mb-4">{story.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {story.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {story.description}
              </p>
              <div className="inline-block bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-4 py-2 rounded-full font-semibold">
                {story.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Our Approach */}
      <SectionWrapper className="bg-white dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            How We Create Impact
          </h2>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Identify Needs',
                description: 'We actively listen to communities and identify real problems that technology can solve.',
              },
              {
                step: '02',
                title: 'Build Solutions',
                description: 'Using modern tech stack and best practices, we create high-quality, user-centered applications.',
              },
              {
                step: '03',
                title: 'Engage Community',
                description: 'We involve community members in the development process, ensuring solutions meet real needs.',
              },
              {
                step: '04',
                title: 'Measure Impact',
                description: 'Continuously track metrics and gather feedback to understand the real-world impact of our work.',
              },
            ].map((item, index) => (
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-12 text-center border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Be Part of Our Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in creating digital solutions that make a real difference. Whether through contributing, supporting, or using our applications, you can be part of this mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/support" variant="primary" size="lg">
              Support Our Mission
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              Explore Projects
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
