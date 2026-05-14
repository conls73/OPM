'use client';

import { ArrowRight, Star, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import InspectionModal from './components/InspectionModal';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const servicesRef = useScrollAnimation();
  const whyRef = useScrollAnimation();
  const areasRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="w-full">
      <InspectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Hero Section */}
      <section className="relative h-screen bg-cover flex items-center" style={{backgroundImage: 'url(/header.jpg)', backgroundPosition: 'center 75%'}}>
        <div className="absolute inset-0" style={{background: 'linear-gradient(90deg, rgba(0, 12, 6, 0.78) 0%, rgba(0, 18, 9, 0.66) 42%, rgba(0, 18, 9, 0.42) 72%, rgba(0, 18, 9, 0.28) 100%)'}}></div>
        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 w-full">
          <div>
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl sm:text-6xl font-bold leading-tight text-white">
                Protect Your Home
                <span className="block text-green-400">From Unwanted Visitors.</span>
              </h1>
              <p className="mb-8 text-white max-w-3xl" style={{fontSize: '1.25rem', lineHeight: '1.65', fontWeight: '600'}}>
                Professional pest control for Central Oregon. Fast response, honest pricing, and solutions that actually work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white hover:bg-green-700 transition-colors"
                >
                  Get Free Inspection
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="tel:+15415551234"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-green-700 transition-colors"
                >
                  <Phone size={20} />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="py-12 px-6 sm:px-8 bg-white flex justify-center">
        <div className="badge-lift inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-5 shadow-lg transition-transform duration-400 hover:cursor-pointer">
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="text-3xl inline-block" style={{animationDelay: `${i * 0.1}s`}}>⭐</span>
            ))}
          </div>
          <span className="text-xl font-bold text-white">Voted Best Pest Control in Burns, Oregon</span>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} id="services" className="py-20 px-6 sm:px-8 bg-white flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Handle</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pest control for all the common issues in Central Oregon
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: "🐜", title: "Ant & Roach Control", desc: "Targeted treatments that eliminate colonies fast" },
              { emoji: "🐭", title: "Rodent Prevention", desc: "Keep mice and rats out with proven methods" },
              { emoji: "🕷️", title: "Yard Pests", desc: "Spiders, wasps, and other outdoor nuisances" },
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-shadow">
                <span className="text-5xl mb-4 block">{service.emoji}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} id="why" className="py-20 px-6 sm:px-8 bg-green-700">
        <style>{`
          @keyframes card-lift {
            to {
              transform: translateY(-12px);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }
          }
          @keyframes star-shake {
            0%, 100% { transform: rotateZ(0deg); }
            15% { transform: rotateZ(-8deg); }
            30% { transform: rotateZ(8deg); }
            45% { transform: rotateZ(-8deg); }
            60% { transform: rotateZ(8deg); }
            75% { transform: rotateZ(-4deg); }
          }
          .review-card:hover {
            animation: card-lift 0.4s ease-out forwards;
          }
          .review-card:hover .star-shake {
            animation: star-shake 0.5s ease-in-out;
          }
          .badge-lift:hover {
            animation: card-lift 0.4s ease-out forwards;
          }
          .badge-lift:hover .flex span {
            animation: star-shake 0.5s ease-in-out forwards;
          }
        `}</style>
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Your Neighbors Trust Us</h2>
              <ul className="space-y-4">
                {[
                  "Personalized attention & accountability for every customer",
                  "Experienced team you can trust to get the job done right",
                  "Honest about what you actually need (no unnecessary treatments)",
                  "Eco-friendly solutions when possible, safe always",
                  "15+ years protecting Central Oregon homes",
                  "No contracts—cancel anytime, stay because we're great",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-lg text-gray-100">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1">
                      <span className="text-green-700 text-sm font-bold">✓</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="review-card bg-white rounded-xl p-8 border-2 border-white shadow-lg transition-transform duration-400">
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-gray-200">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="fill-yellow-400 text-yellow-400 star-shake" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"Fixed our ant problem in one visit. Been clear for 6 months!"</p>
                  <p className="text-sm text-gray-500 mt-2">- Sarah, Redmond</p>
                </div>
                <div className="text-center pb-6 border-b border-gray-200">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="fill-yellow-400 text-yellow-400 star-shake" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"Actually listened to my concerns. No pushy upsells."</p>
                  <p className="text-sm text-gray-500 mt-2">- Mike, Bend</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="fill-yellow-400 text-yellow-400 star-shake" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"Quick, professional, and the price was fair."</p>
                  <p className="text-sm text-gray-500 mt-2">- Lisa, Sisters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section ref={areasRef} id="areas" className="py-20 px-6 sm:px-8 bg-white">
        <style>{`
          @keyframes giggle-bounce {
            0% { transform: translateX(0px) translateY(0px); }
            15% { transform: translateX(-4px) translateY(-6px); }
            30% { transform: translateX(4px) translateY(-8px); }
            45% { transform: translateX(-3px) translateY(-6px); }
            60% { transform: translateX(0px) translateY(-4px); }
            75% { transform: translateX(-1px) translateY(-2px); }
            100% { transform: translateX(0px) translateY(0px); }
          }
          .area-card:hover .pin-dance {
            animation: giggle-bounce 0.8s ease-in-out;
          }
        `}</style>
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Serving Central Oregon</h2>
          <p className="text-xl text-gray-600 mb-12">Based in Redmond • Fast response • Local expert knowledge</p>

          <div className="grid md:grid-cols-4 gap-4">
            {['Redmond', 'Bend', 'Prineville', 'Sisters', 'La Pine', 'Deschutes River Woods', 'Powell Butte', 'Terrebonne'].map((area) => (
              <div key={area} className="area-card p-4 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center gap-2 hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 cursor-pointer">
                <span className="text-xl pin-dance">📍</span>
                <span className="font-semibold text-gray-900">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 px-6 sm:px-8 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Call or Message", desc: "Tell me what you're dealing with" },
              { num: "2", title: "Free Inspection", desc: "I'll come see what's going on" },
              { num: "3", title: "Honest Estimate", desc: "No pressure, straight talk" },
              { num: "4", title: "Treatment & Follow-up", desc: "I handle it, then check back" },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-green-100">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="contact" className="py-20 px-6 sm:px-8 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Reclaim Your Home?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get a free inspection and honest assessment. No pressure, no contracts.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="tel:+15415551234"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-green-700 px-8 py-4 text-lg font-semibold text-white hover:bg-green-800 transition-colors"
            >
              <Phone size={24} />
              (541) 555-1234
            </a>
            <a
              href="mailto:info@ogdenpest.com"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-amber-600 px-8 py-4 text-lg font-semibold text-white hover:bg-amber-700 transition-colors"
            >
              <Mail size={24} />
              Send Message
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-green-100 max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4">
              <span className="font-bold text-gray-900">Pro tip:</span> The best time to deal with pests is before they become a problem. An annual inspection can catch issues early.
            </p>
            <p className="text-sm text-gray-500">
              Available Monday-Friday, 8am-5pm. Emergency treatments available.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="text-white font-bold text-lg mb-2">Ogden Pest Management</h3>
          <p className="mb-4">Central Oregon's trusted local pest control expert</p>
          <p className="text-sm">
            © 2024 Ogden Pest Management. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </footer>
    </div>
  );
}
