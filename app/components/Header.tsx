'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/98 shadow-md backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Anglo Mania
          </div>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex md:items-center md:justify-center md:gap-8 flex-1 px-8">
          <Link href="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Strona główna
          </Link>
          <Link href="/oferta" className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Oferta
          </Link>
          <Link href="/o-mnie" className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            O mnie
          </Link>
          <a href="/test-poziomujacy" className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Test poziomujący
          </a>
          <a href="/kontakt" className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Kontakt
          </a>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block flex-shrink-0">
          <a href="/kontakt" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
            Umów się
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 transition-colors duration-200"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">
              Strona główna
            </Link>
            <Link href="/oferta" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">
              Oferta
            </Link>
            <Link href="/o-mnie" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">
              O mnie
            </Link>
            <a href="/test-poziomujacy" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">
              Test poziomujący
            </a>
            <a href="/kontakt" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">
              Kontakt
            </a>
            <div className="pt-2 border-t border-gray-200">
              <a href="/kontakt" onClick={() => setIsMenuOpen(false)} className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white hover:bg-blue-700 transition-colors duration-200">
                Umów się
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
