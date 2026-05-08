'use client';

import { useState, type FormEvent } from 'react';
import Button from './Button';

interface CourseEnrollmentFormProps {
  courseId: string;
  courseTitle: string;
}

export default function CourseEnrollmentForm({ courseId, courseTitle }: CourseEnrollmentFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`/api/courses/${courseId}/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phone, message }),
      });

      const data = await response.json();
      if (!response.ok) {
        setStatus('error');
        setErrorMessage(data.message || 'Unable to submit enrollment request.');
        return;
      }

      setStatus('success');
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 lg:p-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold">Course Enrollment</p>
        <h2 className="text-3xl font-semibold text-gray-900 mt-3">Enroll in {courseTitle}</h2>
        <p className="text-gray-600 mt-2">Complete this secure enrollment request and our team will confirm your registration.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Full Name</span>
            <input
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:bg-white"
              required
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Email Address</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:bg-white"
              required
            />
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700">Phone Number</span>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Enter your phone number"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:bg-white"
            required
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700">How can this course help you?</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Share your goals or questions"
            className="w-full min-h-[130px] rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:bg-white"
          />
        </label>

        {status === 'error' && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
        {status === 'success' && (
          <p className="text-sm text-green-600">Enrollment request submitted. We will contact you soon.</p>
        )}

        <Button type="submit" disabled={status === 'loading'} variant="primary" size="lg" className="w-full">
          {status === 'loading' ? 'Submitting...' : 'Submit Enrollment'}
        </Button>
      </form>
    </div>
  );
}
