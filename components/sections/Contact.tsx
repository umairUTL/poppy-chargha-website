'use client'

import { useState } from 'react'
import { FiPhone, FiMail, FiClock, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or want to make a reservation? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary-black mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-maroon/10 p-3 rounded-lg border-2 border-primary-maroon/20">
                  <FiPhone className="text-primary-maroon" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-1">Phone</h4>
                  <a href="tel:+924236846681" className="text-gray-600 hover:text-primary-maroon">
                    +92 42 36846681 (Mughalpura)
                  </a>
                  <br />
                  <a href="tel:04236546143" className="text-gray-600 hover:text-primary-maroon">
                    042-36546143 (GT Road)
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg border-2 border-green-300">
                  <FaWhatsapp className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/923210888901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600"
                  >
                    0321-0888901 / 0321-0888902
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-black/10 p-3 rounded-lg border-2 border-primary-black/20">
                  <FiMapPin className="text-primary-black" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-1">Address</h4>
                  <p className="text-gray-600">
                    9-B Shalimar Link Road, Mughalpura, Lahore, 54810, Pakistan
                  </p>
                  <p className="text-gray-600 mt-1">
                    GT Road, Slamatpura, Wahga Town, Lahore
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-maroon/10 p-3 rounded-lg border-2 border-primary-maroon/20">
                  <FiClock className="text-primary-maroon" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-1">Operating Hours</h4>
                  <p className="text-gray-600">Open until 1:30 AM</p>
                  <p className="text-gray-600">Dine-in & Takeout Available</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+924236846681"
                className="block w-full bg-primary-maroon text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-maroonDark transition-colors text-center flex items-center justify-center space-x-2 border-2 border-primary-black/20"
              >
                <FiPhone />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/923210888901"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center flex items-center justify-center space-x-2"
              >
                <FaWhatsapp />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="#branches"
                className="block w-full bg-primary-black text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-blackLight transition-colors text-center flex items-center justify-center space-x-2 border-2 border-primary-maroon/20"
              >
                <FiMapPin />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-primary-black mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-maroon focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-maroon focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary-black mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-maroon focus:outline-none transition-colors"
                  placeholder="+92 300 1234567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-maroon focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-maroon text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-maroonDark transition-colors border-2 border-primary-black/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
