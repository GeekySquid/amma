'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <span className="font-bold text-xl gradient-text">Academic Companion</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <button className="btn-primary">
              Get Started Free
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Team
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <div className="px-3 py-2">
              <button className="btn-primary w-full">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}