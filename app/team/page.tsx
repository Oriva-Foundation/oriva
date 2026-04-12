'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import TeamCard from '@/components/TeamCard';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

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

export default function Team() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Meet Our Team"
        subtitle="Dedicated individuals working together to build impactful digital solutions for the community."
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
            Our Talented Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the passionate developers and designers behind Oriva Foundation. Each team member brings unique skills and perspective to our mission.
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
            What Our Team Embodies
          </h2>
          <p className="text-xl text-gray-600">
            Core values that drive everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🤝',
              title: 'Collaboration',
              description: 'We work together as one team, combining our strengths to achieve greater impact.',
            },
            {
              icon: '🚀',
              title: 'Innovation',
              description: 'We embrace new ideas and modern technologies to solve problems creatively.',
            },
            {
              icon: '❤️',
              title: 'Passion',
              description: 'We are deeply passionate about our mission and the communities we serve.',
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center border border-gray-200"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
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
            Want to Join Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for building impactful digital solutions.
          </p>
          <Button href="/join" variant="primary" size="lg">
            View Open Positions
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

