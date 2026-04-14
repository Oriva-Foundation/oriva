'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div>
      {/* Page Title */}
      <SectionWrapper className="bg-gradient-to-b from-red-50 to-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: April 2024
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Content */}
      <SectionWrapper className="bg-white max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Oriva Foundation ("we," "our," or "us") operates the Oriva Foundation website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Information Collection and Use
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Types of Data Collected:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Personal Data: Name, email address, contact information</li>
                <li>Usage Data: Browser type, pages visited, time and date of visits</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Use of Data
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Oriva Foundation uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To respond to your inquiries and requests</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues and fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Security of Data
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at orivafoundation@gmail.com
              </p>
            </section>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}

