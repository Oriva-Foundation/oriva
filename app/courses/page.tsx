'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClock, faUsers, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/translations';

interface Course {
  _id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  instructor: string;
  instructorAr: string;
  duration: string;
  level: string;
  price: number;
  currency: string;
  maxStudents?: number;
  enrolledCount: number;
  status: string;
  tags: string[];
}

export default function CoursesPage() {
  const { language } = useLanguage();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();
      if (data.success) {
        setCourses(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter(course =>
    filter === 'all' || course.level === filter
  );

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800',
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <HeroSection
        title="Courses"
        subtitle="Learn new skills with our comprehensive courses taught by industry experts"
      />

      <SectionWrapper>
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                  filter === level
                    ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                    <span className="text-lg font-bold text-red-600">
                      {course.price === 0 ? 'Free' : `${course.currency} ${course.price}`}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {language === 'ar' ? course.titleAr : course.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {language === 'ar' ? course.descriptionAr : course.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FontAwesomeIcon icon={faBook} className="h-4 w-4 mr-2 text-red-600" />
                      {language === 'ar' ? course.instructorAr : course.instructor}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-2 text-red-600" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FontAwesomeIcon icon={faUsers} className="h-4 w-4 mr-2 text-red-600" />
                      {course.enrolledCount} enrolled
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    href={`/courses/${course._id}`}
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    {course.price === 0 ? 'Enroll Free' : 'View Course'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No courses found</p>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}