'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/Button';

interface Application {
  _id: string;
  type: 'volunteer' | 'job';
  fullName: string;
  email: string;
  phone: string;
  position?: string;
  experience?: string;
  skills?: string;
  message: string;
  availability?: string;
  portfolio?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: string;
}

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'reviewed' | 'accepted' | 'rejected'>('all');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/applications');
      const data = await response.json();
      if (data.success) {
        setApplications(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    // In a real app, you'd have an API endpoint for this
    console.log('Updating application', id, 'to status', status);
    // For now, just update locally
    setApplications(prev =>
      prev.map(app =>
        app._id === id ? { ...app, status: status as any } : app
      )
    );
  };

  const filteredApplications = applications.filter(app =>
    filter === 'all' || app.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
          <p className="text-gray-600">Manage volunteer and job applications</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex space-x-2">
        {['all', 'pending', 'reviewed', 'accepted', 'rejected'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
              filter === status
                ? 'bg-red-100 text-red-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((application) => (
          <Card key={application._id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{application.fullName}</CardTitle>
                  <p className="text-sm text-gray-600">{application.email}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(application.status)}>
                    {application.status}
                  </Badge>
                  <Badge variant="outline">
                    {application.type}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Phone</p>
                  <p className="text-sm text-gray-600">{application.phone}</p>
                </div>
                {application.position && (
                  <div>
                    <p className="text-sm font-medium text-gray-700">Position</p>
                    <p className="text-sm text-gray-600">{application.position}</p>
                  </div>
                )}
                {application.experience && (
                  <div>
                    <p className="text-sm font-medium text-gray-700">Experience</p>
                    <p className="text-sm text-gray-600">{application.experience} years</p>
                  </div>
                )}
                {application.availability && (
                  <div>
                    <p className="text-sm font-medium text-gray-700">Availability</p>
                    <p className="text-sm text-gray-600">{application.availability}</p>
                  </div>
                )}
              </div>

              {application.skills && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">Skills</p>
                  <p className="text-sm text-gray-600">{application.skills}</p>
                </div>
              )}

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700">Message</p>
                <p className="text-sm text-gray-600">{application.message}</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  Applied on {new Date(application.createdAt).toLocaleDateString()}
                </p>
                <div className="flex space-x-2">
                  {application.status === 'pending' && (
                    <>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => updateApplicationStatus(application._id, 'accepted')}
                      >
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateApplicationStatus(application._id, 'rejected')}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                  {application.status !== 'pending' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateApplicationStatus(application._id, 'pending')}
                    >
                      Reset to Pending
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No applications found</p>
        </div>
      )}
    </div>
  );
}