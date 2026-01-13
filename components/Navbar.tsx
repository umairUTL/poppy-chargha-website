'use client'

import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#about', label: 'About' },
    { href: '#branches', label: 'Branches' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3 border-b-2 border-primary-maroon'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-primary-maroon to-primary-black p-2 rounded-lg">
              <span className="text-white font-bold text-xl">PCH</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary-maroon">
                Poppy Chargha House
              </h1>
              <p className="text-xs text-gray-600">Since 1979</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-maroon font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+924236846681"
              className="bg-primary-maroon text-white px-4 py-2 rounded-lg hover:bg-primary-maroonDark transition-colors flex items-center space-x-2 border-2 border-primary-black/20"
            >
              <FiPhone />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 text-2xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-primary-maroon font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+924236846681"
                className="bg-primary-maroon text-white px-4 py-2 rounded-lg hover:bg-primary-maroonDark transition-colors flex items-center justify-center space-x-2 border-2 border-primary-black/20"
              >
                <FiPhone />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
