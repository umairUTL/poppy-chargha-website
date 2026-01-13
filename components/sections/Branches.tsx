import { FiPhone, FiMapPin, FiClock, FiTruck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

interface Branch {
  id: number
  name: string
  address: string
  plusCode?: string
  phone: string
  phoneAlt?: string[]
  status: string
  services: string[]
  delivery?: boolean
}

const branches: Branch[] = [
  {
    id: 1,
    name: 'Mughalpura Branch',
    address: '9-B Shalimar Link Road, Mughalpura, Lahore, 54810, Pakistan',
    plusCode: 'H9HJ+CH Lahore',
    phone: '+92 42 36846681',
    status: 'Open · Closes 1:30 AM',
    services: ['Dine-in', 'Takeout'],
  },
  {
    id: 2,
    name: 'GT Road / Daroghawala Branch',
    address: 'GT Road, Slamatpura, Wahga Town, Lahore',
    phone: '042-36546143',
    phoneAlt: ['0321-0888901', '0321-0888902'],
    status: 'Open',
    services: ['Dine-in', 'Takeout', 'Home Delivery'],
    delivery: true,
  },
]

export default function Branches() {
  return (
    <section id="branches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
            Our Branches
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at one of our two convenient locations in Lahore
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-primary-maroon/20"
            >
              {/* Branch Header */}
              <div className="bg-gradient-to-r from-primary-maroon to-primary-black p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{branch.name}</h3>
                <div className="flex items-center space-x-2">
                  <FiClock />
                  <span className="font-semibold">{branch.status}</span>
                </div>
              </div>

              {/* Branch Details */}
              <div className="p-6">
                {/* Address */}
                <div className="mb-4">
                  <div className="flex items-start space-x-3">
                    <FiMapPin className="text-primary-maroon mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-700 font-medium">{branch.address}</p>
                      {branch.plusCode && (
                        <p className="text-sm text-gray-500 mt-1">Plus Code: {branch.plusCode}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <div className="flex items-center space-x-3">
                    <FiPhone className="text-primary-black flex-shrink-0" size={20} />
                    <div>
                      <a
                        href={`tel:${branch.phone.replace(/\s/g, '')}`}
                        className="text-gray-900 font-semibold hover:text-primary-maroon transition-colors"
                      >
                        {branch.phone}
                      </a>
                      {branch.phoneAlt && (
                        <div className="mt-1 space-y-1">
                          {branch.phoneAlt.map((phone, idx) => (
                            <a
                              key={idx}
                              href={`tel:${phone.replace(/\s/g, '')}`}
                              className="block text-gray-600 hover:text-primary-maroon transition-colors text-sm"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {branch.services.map((service) => (
                      <span
                        key={service}
                        className="bg-primary-black text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                    {branch.delivery && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <FiTruck size={14} />
                        <span>Home Delivery</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, '')}`}
                    className="flex-1 bg-primary-maroon text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-maroonDark transition-colors text-center flex items-center justify-center space-x-2 border-2 border-primary-black/20"
                  >
                    <FiPhone />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blackLight transition-colors text-center flex items-center justify-center space-x-2 border-2 border-primary-maroon/20"
                  >
                    <FiMapPin />
                    <span>Get Directions</span>
                  </a>
                  {branch.delivery && (
                    <a
                      href="https://wa.me/923210888901"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center flex items-center justify-center space-x-2"
                    >
                      <FaWhatsapp />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder Note */}
        <div className="mt-12 text-center bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto border-2 border-primary-maroon/20">
          <p className="text-gray-700">
            <strong>Note:</strong> You can integrate Google Maps API to show interactive maps for each branch location.
          </p>
        </div>
      </div>
    </section>
  )
}
