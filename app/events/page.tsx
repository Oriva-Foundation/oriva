'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/translations';

interface Event {
  _id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  date: string;
  location: string;
  locationAr: string;
  type: string;
  capacity: number;
  registeredCount: number;
  status: string;
  tags: string[];
}

export default function EventsPage() {
  const { language } = useLanguage();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      if (data.success) {
        setEvents(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const now = new Date();

    if (filter === 'upcoming') return eventDate > now;
    if (filter === 'past') return eventDate < now;
    return true;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      workshop: 'bg-blue-100 text-blue-800',
      hackathon: 'bg-purple-100 text-purple-800',
      meetup: 'bg-green-100 text-green-800',
      competition: 'bg-orange-100 text-orange-800',
      webinar: 'bg-red-100 text-red-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <HeroSection
        title={getTranslation(language, 'nav.events') || 'Events'}
        subtitle="Discover upcoming events, workshops, and hackathons organized by Oriva Foundation"
      />

      <SectionWrapper>
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            {['all', 'upcoming', 'past'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                  filter === filterType
                    ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterType}
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
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {language === 'ar' ? event.titleAr : event.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {language === 'ar' ? event.descriptionAr : event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FontAwesomeIcon icon={faCalendar} className="h-4 w-4 mr-2 text-red-600" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 mr-2 text-red-600" />
                      {language === 'ar' ? event.locationAr : event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FontAwesomeIcon icon={faUsers} className="h-4 w-4 mr-2 text-red-600" />
                      {event.registeredCount}/{event.capacity} registered
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    href={`/events/${event._id}`}
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No events found</p>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}