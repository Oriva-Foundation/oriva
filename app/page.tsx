'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import SponsorCard from '@/components/SponsorCard';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'Prayer Times App',
    description: 'A comprehensive Islamic application providing accurate prayer times with Quranic features and community engagement.',
    tags: ['Islamic', 'Mobile', 'React Native'],
    link: 'https://github.com',
  },
  {
    title: 'Community Forum',
    description: 'A safe and inclusive platform for community discussions, knowledge sharing, and collaborative problem-solving.',
    tags: ['Community', 'Web', 'Next.js'],
    link: 'https://github.com',
  },
  {
    title: 'Digital Solutions Platform',
    description: 'An integrated platform delivering innovative digital solutions tailored for social impact and community benefit.',
    tags: ['Tech', 'Platform', 'AI'],
    link: 'https://github.com',
  },
];

const stats = [
  { number: '15+', label: 'Projects Built' },
  { number: '1000+', label: 'People Reached' },
  { number: '50+', label: 'Contributors' },
  { number: '24/7', label: 'Community Support' },
];

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Building Impactful Digital Solutions"
        subtitle="Oriva Foundation creates Islamic applications and community-driven projects that make a real difference."
        primaryCTA={{
          label: 'Explore Projects',
          href: '/projects',
        }}
        secondaryCTA={{
          label: 'Learn More',
          href: '/about',
        }}
      />

      <SectionWrapper id="projects" className="bg-white">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover the innovative digital solutions we have built for the community.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
        <div className="text-center">
          <Button href="/projects" variant="primary" size="lg">
            View All Projects
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper id="impact" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Making a tangible difference in the community through technology.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center border border-gray-200"
            >
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="about" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Oriva Foundation
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Passionate about building impactful Islamic applications and community-driven projects.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team comprises talented developers, designers, and community advocates.
            </p>
            <Button href="/about" variant="primary" size="lg">
              Read Our Story
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl h-80 shadow-lg flex items-center justify-center"
          >
            <div className="text-center text-white">
              <div className="text-6xl font-bold mb-4">O</div>
              <p className="text-xl font-semibold">Oriva Foundation</p>
              <p className="text-red-100 mt-2">Digital Solutions for Community</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Oriva
            </h2>
            <p className="text-xl text-gray-600">
              We combine modern technology with community values
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '⚙️',
              title: 'Modern Tech Stack',
              description: 'Built with latest technologies and best practices for reliability.',
            },
            {
              icon: '❤️',
              title: 'Community First',
              description: 'Our projects are designed with community needs at heart.',
            },
            {
              icon: '🌍',
              title: 'Impactful Solutions',
              description: 'We create digital solutions that make a real difference.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <SponsorCard />
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 text-center border border-gray-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in building digital solutions that matter. Get in touch with our team today.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
