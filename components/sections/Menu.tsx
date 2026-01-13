'use client'

import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

interface MenuItem {
  id: string
  name: string
  category: string
  description?: string
  variants?: string[]
}

const menuItems: MenuItem[] = [
  // Starters & Snacks
  { id: '1', name: 'Chicken Soup', category: 'Starters & Snacks' },
  { id: '2', name: 'Chicken Wings', category: 'Starters & Snacks' },
  { id: '3', name: 'French Fries', category: 'Starters & Snacks', variants: ['Half', 'Full'] },
  
  // Chargha & Roasts
  { id: '4', name: 'Sp. Chargha', category: 'Chargha & Roasts', variants: ['Full', 'Half'] },
  { id: '5', name: 'Steam Roast', category: 'Chargha & Roasts', variants: ['Full', 'Half'] },
  { id: '6', name: 'Chicken Tandoori', category: 'Chargha & Roasts' },
  { id: '7', name: 'Murghe-Musalam', category: 'Chargha & Roasts' },
  { id: '8', name: 'Batair Roast', category: 'Chargha & Roasts' },
  { id: '9', name: 'Chicken Pakora', category: 'Chargha & Roasts' },
  { id: '10', name: 'Mutton Roast', category: 'Chargha & Roasts' },
  { id: '11', name: 'Raan Roast', category: 'Chargha & Roasts' },
  
  // BBQ
  { id: '12', name: 'Chicken Seekh Kabab', category: 'BBQ' },
  { id: '13', name: 'Afghani Seekh Kabab', category: 'BBQ' },
  { id: '14', name: 'Malai Boti / Tikka Boti', category: 'BBQ' },
  { id: '15', name: 'Chicken Chest', category: 'BBQ' },
  { id: '16', name: 'Chicken Leg Piece', category: 'BBQ' },
  { id: '17', name: 'Beef Seekh', category: 'BBQ' },
  { id: '18', name: 'Afghani Beef Seekh', category: 'BBQ' },
  
  // Fish
  { id: '19', name: 'Finger Fish', category: 'Fish', description: '800gm' },
  { id: '20', name: 'Grill Fish', category: 'Fish', description: '1kg' },
  
  // Chicken Karahi
  { id: '21', name: 'Sp. Chicken Karahi', category: 'Chicken Karahi' },
  { id: '22', name: 'Achari Karahi', category: 'Chicken Karahi' },
  { id: '23', name: 'White Karahi', category: 'Chicken Karahi' },
  { id: '24', name: 'Butter Karahi', category: 'Chicken Karahi' },
  { id: '25', name: 'Desi Ghee Karahi', category: 'Chicken Karahi' },
  { id: '26', name: 'Boneless Karahi', category: 'Chicken Karahi' },
  { id: '27', name: 'Mutton Karahi', category: 'Chicken Karahi' },
  
  // Naans
  { id: '28', name: 'Roghni Naan', category: 'Naans' },
  { id: '29', name: 'Garlic Roghni Naan', category: 'Naans' },
  { id: '30', name: 'Kalvanji Roghni Naan', category: 'Naans' },
  { id: '31', name: 'Chicken / Beef Qeema Naan', category: 'Naans' },
  { id: '32', name: 'Cheese Naan', category: 'Naans' },
  { id: '33', name: 'Sada Naan', category: 'Naans' },
  
  // Beverages & Desserts
  { id: '34', name: 'Sheer Khurma', category: 'Beverages & Desserts' },
  { id: '35', name: 'Gulab Jamun', category: 'Beverages & Desserts' },
  { id: '36', name: 'Lemon Green Kahwa', category: 'Beverages & Desserts' },
  { id: '37', name: 'Elaichi Tea', category: 'Beverages & Desserts', description: 'Shukar / Sugar' },
  { id: '38', name: 'Fresh Lime', category: 'Beverages & Desserts' },
  { id: '39', name: 'Coffee', category: 'Beverages & Desserts' },
  
  // Salads
  { id: '40', name: 'Pakistani Salad', category: 'Salads' },
  { id: '41', name: 'Russian Salad', category: 'Salads', variants: ['Full', 'Half'] },
  { id: '42', name: 'Raita', category: 'Salads', description: 'Zeera / Podina' },
]

const categories = [
  'All',
  'Starters & Snacks',
  'Chargha & Roasts',
  'BBQ',
  'Fish',
  'Chicken Karahi',
  'Naans',
  'Beverages & Desserts',
  'Salads',
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, MenuItem[]>)

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our authentic desi cuisine featuring traditional recipes passed down through generations
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 focus:border-primary-maroon focus:outline-none text-lg"
            />
          </div>
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
                  : 'bg-white text-primary-black hover:bg-gray-100 border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-12">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-primary-maroon mb-6 border-b-4 border-primary-maroon pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-primary-maroon"
                  >
                    <h4 className="text-xl font-semibold text-primary-black mb-2">
                      {item.name}
                    </h4>
                    {item.description && (
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    )}
                    {item.variants && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.variants.map((variant) => (
                          <span
                            key={variant}
                            className="bg-primary-black text-white px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {variant}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center bg-primary-maroon/10 rounded-lg p-6 border-2 border-primary-maroon/20">
          <p className="text-gray-700">
            <strong>Note:</strong> Menu images are available. You can upload updated menu images later to replace placeholder content.
          </p>
        </div>
      </div>
    </section>
  )
}
