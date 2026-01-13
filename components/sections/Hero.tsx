'use client'

import { FiPhone, FiMapPin, FiStar } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-maroon/95 via-primary-black/90 to-primary-maroon/95 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80)',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <FiStar className="text-accent-gold" />
            <span className="text-sm font-semibold">4.0 ⭐ (1,299+ reviews)</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
            Poppy Chargha House
          </h1>
          <p className="text-2xl md:text-3xl mb-2 text-accent-gold font-semibold">
            Taste the Tradition Since 1979
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Traditional Desi Cuisine • Famous for Chargha, BBQ, Karahi & Steam Roast
          </p>

          {/* Trust Badge */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block">
            <p className="text-lg font-semibold">
              Trusted by thousands of customers for over 40 years
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+924236846681"
              className="bg-primary-maroon hover:bg-primary-maroonDark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg border-2 border-white/20"
            >
              <FiPhone />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/923210888901"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg border-2 border-white/20"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
            <a
              href="#branches"
              className="bg-white text-primary-maroon hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg border-2 border-primary-maroon"
            >
              <FiMapPin />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="font-semibold text-lg mb-1">Dine-in</p>
              <p className="text-sm text-gray-300">Indoor & Outdoor Booking Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="font-semibold text-lg mb-1">Takeout</p>
              <p className="text-sm text-gray-300">Fresh & Hot Meals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="font-semibold text-lg mb-1">Home Delivery</p>
              <p className="text-sm text-gray-300">Available at GT Road Branch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
