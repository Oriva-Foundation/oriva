'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRocket, faLightbulb, faHandshake, faBook, faTarget, faBriefcase, faComment, faGithub } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons';

export default function Join() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Join Oriva Foundation"
        subtitle="Be part of a mission to create impactful digital solutions for communities around the world."
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
            Why Join Oriva?
          </h2>
          <p className="text-xl text-gray-600">
            Be part of something meaningful
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: faGlobe,
              title: 'Make Global Impact',
              description: 'Your work will directly impact communities around the world through our Islamic applications and digital solutions.',
            },
            {
              icon: faRocket,
              title: 'Grow Your Skills',
              description: 'Work with cutting-edge technologies and learn from talented developers and designers in a collaborative environment.',
            },
            {
              icon: faLightbulb,
              title: 'Meaningful Work',
              description: 'Every project we build is designed to serve communities and make a real difference in people\'s lives.',
            },
            {
              icon: faHandshake,
              title: 'Supportive Community',
              description: 'Join a vibrant community of passionate individuals who share your values and vision for positive change.',
            },
            {
              icon: faBook,
              title: 'Continuous Learning',
              description: 'We invest in our team members through mentorship, training, and opportunities to expand your knowledge.',
            },
            {
              icon: faTarget,
              title: 'Clear Mission',
              description: 'Work towards a clear, meaningful mission: building Islamic applications and community-driven projects.',
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
            Open Positions
          </h2>
          <p className="text-xl text-gray-600">
            We're always looking for passionate individuals to join our team
          </p>
        </motion.div>

        <div className="space-y-6">
          {[
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
          ].map((position, index) => (
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

      {/* Application Process */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How to Apply
          </h2>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Review Positions',
                description: 'Check out our open positions and find the role that best matches your skills and interests.',
              },
              {
                step: '02',
                title: 'Prepare Application',
                description: 'Gather your resume, portfolio, and any relevant work samples that showcase your abilities.',
              },
              {
                step: '03',
                title: 'Contact Us',
                description: 'Reach out to our team with your application and let us know why you\'d be a great fit.',
              },
              {
                step: '04',
                title: 'Interview Process',
                description: 'We\'ll schedule calls to get to know you better and discuss your experience and goals.',
              },
              {
                step: '05',
                title: 'Join the Team',
                description: 'After selection, we\'ll onboard you and you\'ll start making an impact with us!',
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Contact for Applications */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 text-center border border-gray-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Apply?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Send your application to Mahmoud Elsoghayar. We're excited to hear from you!
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mahmoud Elsoghayar</h4>
              <p className="text-gray-600">Founder & Lead Developer</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="https://wa.me/201019593092"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
              >
                <FontAwesomeIcon icon={faComment} /> WhatsApp: +201019593092
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
                <FontAwesomeIcon icon={faGithubBrand} /> GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Send Message
            </Button>
            <Button href="/team" variant="outline" size="lg">
              Meet the Team
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

