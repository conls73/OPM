'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16 px-6 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-green-100">
            We're here to help. Reach out with questions or to schedule your free inspection.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+15415551234"
                className="text-green-700 hover:text-green-800 text-lg font-semibold"
              >
                (541) 555-1234
              </a>
              <p className="text-gray-600 text-sm mt-2">Mon-Fri, 8am-5pm</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:info@ogdenpest.com"
                className="text-green-700 hover:text-green-800 text-lg font-semibold"
              >
                info@ogdenpest.com
              </a>
              <p className="text-gray-600 text-sm mt-2">Response within 24 hours</p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-700 font-semibold">Monday - Friday</p>
              <p className="text-gray-600">8:00 AM - 5:00 PM</p>
              <p className="text-gray-600 text-sm mt-2">Emergency treatments available</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-8 border-2 border-green-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                <p className="text-green-800 font-semibold">✓ Message sent! We'll be in touch soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                  placeholder="(541) 555-1234"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">What's the issue?</label>
                <select
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                >
                  <option>Select a pest type...</option>
                  <option>Ants</option>
                  <option>Roaches</option>
                  <option>Rodents</option>
                  <option>Spiders/Wasps</option>
                  <option>Yard Pests</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:outline-none transition-colors"
                  placeholder="Tell us more about your situation..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-800 transition-colors"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-600 text-center">
                We'll respond within 24 hours during business hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Service Area Map Note */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving All of Central Oregon</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Primary Service Area</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Redmond</li>
                <li>• Bend</li>
                <li>• Prineville</li>
                <li>• Sisters</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Extended Service Area</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• La Pine</li>
                <li>• Powell Butte</li>
                <li>• Terrebonne</li>
                <li>• Deschutes River Woods</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 mt-8">
            <strong>Outside this area?</strong> Contact us anyway—we may be able to help or recommend a trusted local pest control company.
          </p>
        </div>
      </section>
    </div>
  );
}
