'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

interface Project {
  _id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  status: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
  featured: boolean;
  tags: string[];
}

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

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
        title={t.projects.hero.title}
        subtitle={t.projects.hero.subtitle}
      />

      {/* Featured Projects Section */}
      <SectionWrapper className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.projects.filterCategory}
          </h2>
          <p className="text-xl text-gray-600">
            {t.projects.openSource}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedFilter(null)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedFilter === null
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            {t.projects.allProjects}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedFilter(tag)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedFilter === tag
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project._id}
                index={index}
                title={language === 'ar' ? project.titleAr : project.title}
                description={language === 'ar' ? project.descriptionAr : project.description}
                tags={project.technologies}
                link={project.githubUrl || project.liveUrl || '#'}
                images={project.images}
              />
            ))}
          </div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found</p>
          </div>
        )}
      </SectionWrapper>

      {/* Open Source Section */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.projects.wantContribute}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.projects.welcomeContributions}
          </p>
          <Button href="https://github.com" variant="primary" size="lg">
            {t.projects.viewGitHub}
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
    {
      title: 'Al-Buckary App',
      description: 'A modern Islamic application connecting believers with authentic Islamic content, including authentic hadith collections and community resources.',
      tags: ['Islamic', 'Mobile', 'Featured'],
      link: 'https://github.com/soghayarmahmoud/Al-Buckary',
      images: [
        '/imgs/buckary/1.jpg',
        '/imgs/buckary/2.jpg',
        '/imgs/buckary/3.jpg',
      ],
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
  ],
  ar: [
    {
      title: 'تطبيق أوقات الصلاة',
      description: 'تطبيق إسلامي شامل يوفر أوقات صلاة دقيقة عبر المواقع المختلفة، بميزات قرآنية وأدوات التفاعل المجتمعي.',
      tags: ['إسلامي', 'موبايل', 'React Native'],
      link: 'https://github.com',
    },
    {
      title: 'منتدى المجتمع',
      description: 'منصة آمنة وشاملة للنقاشات المجتمعية ومشاركة المعرفة والحل التعاوني للمشاكل.',
      tags: ['مجتمع', 'ويب', 'Next.js'],
      link: 'https://github.com',
    },
    {
      title: 'أكاديمية بروكود - منصة التعليم الإلكتروني',
      description: 'منصة تعليمية شاملة مصممة لجعل التعليم الجودة متاحاً للجميع. تتضمن دورات تفاعلية وفصول حية ومجتمع تعليمي داعم.',
      tags: ['تعليم', 'منصة', 'مميز'],
      link: 'https://github.com/soghayarmahmoud/procode-edu-pulse-lms',
      images: [
        '/imgs/procode/1.PNG',
        '/imgs/procode/2.PNG',
        '/imgs/procode/3.PNG',
      ],
    },
    {
      title: 'تطبيق البخاري',
      description: 'تطبيق إسلامي حديث يربط المؤمنين بمحتوى إسلامي أصيل، بما في ذلك مجموعات الأحاديث الأصيلة وموارد المجتمع.',
      tags: ['إسلامي', 'موبايل', 'مميز'],
      link: 'https://github.com/soghayarmahmoud/Al-Buckary',
      images: [
        '/imgs/buckary/1.jpg',
        '/imgs/buckary/2.jpg',
        '/imgs/buckary/3.jpg',
      ],
    },
    {
      title: 'منصة تعلم القرآن',
      description: 'منصة تفاعلية لتعلم محتوى القرآني مع أساليب تعليمية حديثة وتصميم سهل الوصول.',
      tags: ['إسلامي', 'تعليم', 'الذكاء الاصطناعي'],
      link: 'https://github.com',
    },
    {
      title: 'مركز التطوع المجتمعي',
      description: 'ربط أعضاء المجتمع بفرص التطوع وتتبع المبادرات ذات التأثير الاجتماعي.',
      tags: ['مجتمع', 'ويب', 'تأثير'],
      link: 'https://github.com',
    },
  ],
};

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const projects = projectsData[language];
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
        title={t.projects.hero.title}
        subtitle={t.projects.hero.subtitle}
      />

      {/* Featured Projects Section */}
      <SectionWrapper className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Our flagship projects making impact
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.tags.includes('Featured'))
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  {/* Image Gallery */}
                  {project.images && (
                    <div className="relative w-full h-64 bg-gradient-to-br from-red-100 to-red-50 overflow-auto">
                      <div className="flex gap-2 p-4">
                        {project.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            className="h-56 w-auto rounded-lg shadow-md object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags
                        .filter((tag) => tag !== 'Featured')
                        .map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                    <Button
                      href={project.link}
                      target="_blank"
                      variant="primary"
                      size="sm"
                    >
                      {t.projects.viewGitHub}
                    </Button>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* All Projects Grid */}
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
            {t.projects.filterCategory}
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
              {t.projects.allProjects}
            </button>
            {allTags
              .filter((tag) => tag !== 'Featured')
              .map((tag) => (
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
          {filteredProjects
            .filter((p) => !p.tags.includes('Featured'))
            .map((project, index) => (
              <ProjectCard
                key={project.title}
                index={index}
                title={project.title}
                description={project.description}
                tags={project.tags.filter((tag) => tag !== 'Featured')}
                link={project.link}
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
            {t.projects.openSource}
          </h2>
          <p className="text-lg text-red-50 mb-8 max-w-2xl mx-auto">
            {t.projects.believeTransparency}
          </p>
          <Button
            href="https://github.com/soghayarmahmoud"
            target="_blank"
            variant="secondary"
            size="lg"
          >
            {t.projects.viewGitHub}
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
            {t.projects.wantContribute}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            {t.projects.welcomeContributions}
          </p>
          <Button href="/contact" variant="primary" size="lg">
            {t.common.getInTouch}
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

