'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Prayer Times App',
    description: 'A comprehensive Islamic application providing accurate prayer times across locations, Quranic features, and community engagement tools.',
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
    title: 'Quran Learning Platform',
    description: 'An interactive platform for learning Quranic content with modern pedagogical approaches and accessible design.',
    tags: ['Islamic', 'Education', 'AI'],
    link: 'https://github.com',
  },
  {
    title: 'Community Volunteer Hub',
    description: 'Connect community members with volunteering opportunities and track social impact initiatives.',
    tags: ['Community', 'Web', 'Impact'],
    link: 'https://github.com',
  },
  {
    title: 'Islamic Events Calendar',
    description: 'A centralized calendar for Islamic events, holidays, and community gatherings with notifications and sharing features.',
    tags: ['Islamic', 'Calendar', 'Web'],
    link: 'https://github.com',
  },
  {
    title: 'Community Analytics Dashboard',
    description: 'Real-time insights and analytics for tracking community health, growth metrics, and engagement patterns.',
    tags: ['Analytics', 'Tech', 'Platform'],
    link: 'https://github.com',
  },
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags))
  );

  const filteredProjects = selectedFilter
    ? projects.filter((p) => p.tags.includes(selectedFilter))
    : projects;

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Projects"
        subtitle="Explore the innovative digital solutions we've built to create impact in communities."
      />

      {/* Projects Grid */}
      <SectionWrapper className="bg-white">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedFilter(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedFilter === null
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedFilter(tag)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedFilter === tag
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              {...project}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Open Source Info */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            All Projects Are Open Source
          </h2>
          <p className="text-lg text-red-50 mb-8 max-w-2xl mx-auto">
            We believe in transparency and community collaboration. All our projects are open source and available on GitHub for you to explore, contribute, and learn from.
          </p>
          <Button
            href="https://github.com/soghayarmahmoud"
            variant="secondary"
            size="lg"
          >
            View on GitHub
          </Button>
        </motion.div>
      </SectionWrapper>

      {/* Contribute Section */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Want to Contribute?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            We welcome contributions from developers, designers, and community members. Whether it's fixing bugs, adding features, or improving documentation, there's always something you can help with.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get In Touch
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

