'use client';

import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import SponsorCard from '@/components/SponsorCard';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faLaptop, faBullhorn, faHandshake, faWrench, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons';

const supportWays = [
  {
    icon: faDollarSign,
    title: 'Financial Support',
    description: 'Contribute financially to support our projects and community initiatives.',
    links: [
      { label: 'GitHub Sponsors', url: 'https://github.com/sponsors/soghayarmahmoud' },
      { label: 'One-time Donation', url: '#' },
    ],
  },
  {
    icon: faLaptop,
    title: 'Contribution',
    description: 'Contribute your skills as a developer, designer, or community advocate.',
    links: [
      { label: 'View Open Issues', url: 'https://github.com' },
      { label: 'Get Involved', url: '/contact' },
    ],
  },
  {
    icon: faBullhorn,
    title: 'Advocacy',
    description: 'Help spread the word about Oriva Foundation and our mission.',
    links: [
      { label: 'Share Our Work', url: '#' },
      { label: 'Follow Us', url: '#' },
    ],
  },
  {
    icon: faHandshake,
    title: 'Partnership',
    description: 'Partner with us to create impact at scale and reach more communities.',
    links: [
      { label: 'Contact Us', url: '/contact' },
      { label: 'Learn More', url: '#' },
    ],
  },
];

const tiers = [
  {
    name: 'Supporter',
    amount: '$5',
    frequency: 'Monthly',
    benefits: [
      'Special recognition in our community',
      'Early access to new features',
      'Monthly updates and insights',
    ],
  },
  {
    name: 'Champion',
    amount: '$25',
    frequency: 'Monthly',
    benefits: [
      'All Supporter benefits',
      'Name/logo in our sponsors section',
      'Priority support and feedback',
      'Quarterly calls with the team',
    ],
    featured: true,
  },
  {
    name: 'Partner',
    amount: 'Custom',
    frequency: 'Flexible',
    benefits: [
      'All Champion benefits',
      'Custom partnership opportunities',
      'Co-marketing opportunities',
      'Direct impact on roadmap',
    ],
  },
];

export default function Support() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Support Oriva Foundation"
        subtitle="Help us create impactful digital solutions for communities around the world."
      />

      {/* Main Sponsor Card */}
      <SectionWrapper className="bg-white">
        <SponsorCard />
      </SectionWrapper>

      {/* Ways to Support */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ways to Support
          </h2>
          <p className="text-xl text-gray-600">
            There are many ways to contribute to our mission
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportWays.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <div className="text-5xl mb-4 text-red-600">
                <FontAwesomeIcon icon={way.icon} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {way.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {way.description}
              </p>
              <div className="space-y-2">
                {way.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="inline-block text-red-600 hover:text-red-700 font-semibold transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Sponsorship Tiers */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sponsorship Tiers
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect way to support our mission
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 border transition-all ${
                tier.featured
                  ? 'bg-gradient-to-br from-red-600 to-red-700 text-white border-red-600 shadow-xl scale-105'
                  : 'bg-white border-gray-200 text-gray-900'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold">{tier.amount}</div>
                <div className={tier.featured ? 'text-red-100' : 'text-gray-600'}>
                  {tier.frequency}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className={tier.featured ? 'text-red-200' : 'text-red-600'}>
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="https://github.com/sponsors/soghayarmahmoud"
                variant={tier.featured ? 'secondary' : 'primary'}
                size="lg"
              >
                Become a {tier.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Impact of Support */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Your Support Makes an Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: faWrench,
                title: 'Better Tools',
                description: 'Helps us build and maintain high-quality applications and infrastructure.',
              },
              {
                icon: faUsers,
                title: 'Growing Team',
                description: 'Enables us to hire and support talented developers and designers.',
              },
              {
                icon: faGlobe,
                title: 'Wider Reach',
                description: 'Allows us to reach more communities and scale our impact.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-center border border-gray-200"
              >
                <div className="text-5xl mb-4 text-red-600">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* FAQ / Transparency */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Support & Transparency
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How is my contribution used?',
                a: 'All funds go directly to supporting project development, infrastructure, and community initiatives. We maintain full transparency on how contributions are allocated.',
              },
              {
                q: 'Can I get a receipt?',
                a: 'Yes! GitHub Sponsors provides receipts for all contributions. We can also provide additional documentation if needed.',
              },
              {
                q: 'Is my sponsorship anonymous?',
                a: 'You can choose to make your sponsorship public or private. We respect your privacy preferences.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, you can cancel your sponsorship at any time without any penalties or complications.',
              },
            ].map((item) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-600">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every contribution, big or small, makes a difference in our mission to build impactful digital solutions for communities.
          </p>
          <Button href="https://github.com/sponsors/soghayarmahmoud" variant="primary" size="lg">
            💫 Become a Sponsor
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

