import { FiPhone, FiMapPin, FiMail, FiClock } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-maroon mb-4">
              Poppy Chargha House
            </h3>
            <p className="text-gray-400 mb-4">
              Traditional Desi Cuisine Since 1979
            </p>
            <p className="text-sm text-gray-500">
              Trusted by thousands of customers for over 40 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-400 hover:text-primary-maroon transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-primary-maroon transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-primary-maroon transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-maroon transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FiPhone className="mt-1 text-primary-maroon" />
                <div>
                  <p className="text-gray-400">Mughalpura</p>
                  <a href="tel:+924236846681" className="hover:text-primary-maroon">
                    +92 42 36846681
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <FiPhone className="mt-1 text-primary-maroon" />
                <div>
                  <p className="text-gray-400">GT Road</p>
                  <a href="tel:04236546143" className="hover:text-primary-maroon">
                    042-36546143
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <FiClock className="mt-1 text-primary-maroon" />
                <p className="text-gray-400">Open until 1:30 AM</p>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/923210888901"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-maroon/30 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Poppy Chargha House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
