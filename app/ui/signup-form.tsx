'use client';

import { useState } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

export default function SignupForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.error || 'Signup failed');
        setIsSubmitting(false);
      } else {
        router.push(data.redirectTo || '/login');
      }
    } catch (error) {
      console.error('Database Error:', error);
      setErrorMessage('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Signup</h1>
        <div className="w-full">
          <div>
            <label className="mb-3 block text-xs font-medium text-gray-900" htmlFor="name">
              Name
            </label>
            <input
              className="block w-full rounded-md border-gray-200 py-[9px] px-3 text-sm"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="mb-3 block text-xs font-medium text-gray-900" htmlFor="email">
              Email
            </label>
            <input
              className="block w-full rounded-md border-gray-200 py-[9px] px-3 text-sm"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="mb-3 block text-xs font-medium text-gray-900" htmlFor="password">
              Password
            </label>
            <input
              className="block w-full rounded-md border-gray-200 py-[9px] px-3 text-sm"
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>
          <div className="mt-4">
            <label className="mb-3 block text-xs font-medium text-gray-900" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="block w-full rounded-md border-gray-200 py-[9px] px-3 text-sm"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>
        </div>
        <Button className="mt-4 w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Signing up...' : 'Sign up'}
        </Button>
        <div className="mt-2 text-sm text-red-500">{errorMessage}</div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm">
            Already have an account? <Link href="/login" className="text-blue-600">Login here</Link>
          </p>
        </div>
      </div>
    </form>
  );
}