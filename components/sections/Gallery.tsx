'use client'

import { useState } from 'react'
import { FiX } from 'react-icons/fi'

const galleryImages = [
  {
    id: 1,
    category: 'Food & Dishes',
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    title: 'Chargha',
  },
  {
    id: 2,
    category: 'BBQ & Grills',
    url: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
    title: 'BBQ Platter',
  },
  {
    id: 3,
    category: 'Karahi',
    url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
    title: 'Chicken Karahi',
  },
  {
    id: 4,
    category: 'Food & Dishes',
    url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
    title: 'Steam Roast',
  },
  {
    id: 5,
    category: 'BBQ & Grills',
    url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80',
    title: 'Seekh Kabab',
  },
  {
    id: 6,
    category: 'Restaurant Interiors',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    title: 'Family Cabin',
  },
  {
    id: 7,
    category: 'Food & Dishes',
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    title: 'Mutton Karahi',
  },
  {
    id: 8,
    category: 'BBQ & Grills',
    url: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80',
    title: 'Tikka Boti',
  },
  {
    id: 9,
    category: 'Restaurant Interiors',
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    title: 'Dining Area',
  },
  {
    id: 10,
    category: 'Food & Dishes',
    url: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&q=80',
    title: 'Tandoori Chicken',
  },
  {
    id: 11,
    category: 'BBQ & Grills',
    url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
    title: 'Grilled Chicken',
  },
  {
    id: 12,
    category: 'Karahi',
    url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
    title: 'Butter Karahi',
  },
]

const categories = ['All', 'Food & Dishes', 'BBQ & Grills', 'Karahi', 'Restaurant Interiors']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = galleryImages.filter(
    (img) => selectedCategory === 'All' || img.category === selectedCategory
  )

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Feast your eyes on our delicious dishes and warm restaurant atmosphere
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all border-2 ${
                selectedCategory === category
                  ? 'bg-primary-maroon text-white shadow-lg border-primary-black'
                  : 'bg-gray-100 text-primary-black hover:bg-gray-200 border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-primary-maroon/20"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback image if URL fails
                  const target = e.target as HTMLImageElement
                  target.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-primary-maroon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium mb-1">{image.category}</p>
                  <p className="text-lg font-bold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-primary-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary-maroon z-10 bg-primary-maroon/20 p-2 rounded-full"
            >
              <FiX size={32} />
            </button>
            <img
              src={galleryImages.find((img) => img.id === selectedImage)?.url}
              alt={galleryImages.find((img) => img.id === selectedImage)?.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80'
              }}
            />
          </div>
        )}
      </div>
    </section>
  )
}
