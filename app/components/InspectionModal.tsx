'use client';

import { X } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InspectionModal({ isOpen, onClose }: InspectionModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Free Inspection</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {submitted && (
            <div className="p-4 bg-green-100 border border-green-400 rounded-lg">
              <p className="text-green-800 font-semibold">✓ Request submitted! We'll contact you soon.</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Phone
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
              placeholder="(541) 555-1234"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Address
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
              placeholder="Your address"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Service Needed
            </label>
            <select
              required
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors bg-white"
            >
              <option value="">Select a service...</option>
              <option value="ants">Ant Control</option>
              <option value="roaches">Roach Elimination</option>
              <option value="rodents">Rodent Prevention</option>
              <option value="spiders">Spider & Wasp Control</option>
              <option value="yard">Yard Pest Treatment</option>
              <option value="maintenance">Annual Maintenance</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-800 transition-colors mt-6"
          >
            Request Free Inspection
          </button>
        </form>
      </div>
    </div>
  );
}
