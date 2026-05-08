'use client';

import { useState, type FormEvent } from 'react';
import Button from './Button';

interface EventRegistrationFormProps {
  eventId: string;
  eventTitle: string;
}

export default function EventRegistrationForm({ eventId, eventTitle }: EventRegistrationFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experienceLevel, setExperienceLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [expectations, setExpectations] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`/api/events/${eventId}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phone, experienceLevel, expectations }),
      });

      const data = await response.json();
      if (!response.ok) {
        setStatus('error');
        setErrorMessage(data.message || 'Unable to submit registration.');
        return;
      }

      setStatus('success');
      setFullName('');
      setEmail('');
      setPhone('');
      setExperienceLevel('beginner');
      setExpectations('');
    } catch {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 lg:p-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-red-600 font-semibold">Event Registration</p>
        <h2 className="text-3xl font-semibold text-gray-900 mt-3">Register for {eventTitle}</h2>
        <p className="text-gray-600 mt-2">Please complete the form below to reserve your place at this event.</p>
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
            <span className="text-sm font-medium text-gray-700">Experience Level</span>
            <select
              value={experienceLevel}
              onChange={(event) => setExperienceLevel(event.target.value as 'beginner' | 'intermediate' | 'advanced')}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:bg-white"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700">What do you want to learn?</span>
          <textarea
            value={expectations}
            onChange={(event) => setExpectations(event.target.value)}
            placeholder="Describe your goals or expectations"
            className="w-full min-h-[130px] rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:bg-white"
          />
        </label>

        {status === 'error' && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
        {status === 'success' && (
          <p className="text-sm text-green-600">Registration submitted successfully. You will receive confirmation soon.</p>
        )}

        <Button type="submit" disabled={status === 'loading'} variant="primary" size="lg" className="w-full">
          {status === 'loading' ? 'Submitting...' : 'Register Now'}
        </Button>
      </form>
    </div>
  );
}
