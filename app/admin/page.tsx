'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendar, faBook, faFolder, faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface Stats {
  applications: number;
  events: number;
  courses: number;
  projects: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    applications: 0,
    events: 0,
    courses: 0,
    projects: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch stats from API
    // For now, we'll use mock data
    setStats({
      applications: 24,
      events: 8,
      courses: 12,
      projects: 15,
    });
    setLoading(false);
  }, []);

  const statCards = [
    {
      title: 'Total Applications',
      value: stats.applications,
      icon: faUsers,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Active Events',
      value: stats.events,
      icon: faCalendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Published Courses',
      value: stats.courses,
      icon: faBook,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Total Projects',
      value: stats.projects,
      icon: faFolder,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Oriva admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Mock recent applications */}
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsers} className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Ahmed Mohamed</p>
                  <p className="text-xs text-gray-500">Applied for Frontend Developer</p>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsers} className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">Applied for Volunteer - Content Writer</p>
                </div>
                <span className="text-xs text-gray-500">4 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Mock upcoming events */}
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCalendar} className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">React Workshop</p>
                  <p className="text-xs text-gray-500">March 15, 2024 • 25 registered</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCalendar} className="h-4 w-4 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Hackathon 2024</p>
                  <p className="text-xs text-gray-500">March 20, 2024 • 50 registered</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}