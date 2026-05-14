'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import InspectionModal from './InspectionModal';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <InspectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-green-700/80 shadow-sm border-b border-green-600/30">
      <div className="flex justify-between items-center h-auto py-3 px-6 sm:px-8 w-full">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 ml-28">
            <Image
              src="/opm-logo.svg"
              alt="Ogden Pest Management"
              width={140}
              height={140}
              className="h-32 w-auto"
              style={{filter: 'invert(1)'}}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-white px-4 py-2 rounded-full transition-all hover:bg-white/20 hover:text-white"
              style={{fontSize: '30px', fontWeight: 800}}
            >
              Services
            </Link>
            <Link
              href="/#why"
              className="text-white px-4 py-2 rounded-full transition-all hover:bg-white/20 hover:text-white"
              style={{fontSize: '30px', fontWeight: 800}}
            >
              Why Us
            </Link>
            <Link
              href="/#areas"
              className="text-white px-4 py-2 rounded-full transition-all hover:bg-white/20 hover:text-white"
              style={{fontSize: '30px', fontWeight: 800}}
            >
              Service Areas
            </Link>
            <a
              href="tel:+15415551234"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-7 py-2 text-white transition-all hover:bg-white hover:text-gray-900"
              style={{fontSize: '30px', fontWeight: 800}}
            >
              <Phone size={28} />
              Call Now
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-2 text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
              style={{fontSize: '30px', fontWeight: 800}}
            >
              Free Inspection
            </button>
          </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-4 space-y-2 bg-green-300 px-6 sm:px-8">
          <Link
            href="/#services"
            className="block px-4 py-2 text-white hover:bg-green-500 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#why"
            className="block px-4 py-2 text-white hover:bg-green-500 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Why Us
          </Link>
          <Link
            href="/#areas"
            className="block px-4 py-2 text-white hover:bg-green-500 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Service Areas
          </Link>
          <a
            href="tel:+15415551234"
            className="block px-4 py-2 bg-gray-900 text-white rounded-lg font-medium text-center hover:bg-gray-800"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
    </>
  );
}
