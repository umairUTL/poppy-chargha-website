'use client'

import { FiStar } from 'react-icons/fi'

interface Review {
  id: number
  name: string
  rating: number
  text: string
  date?: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Masood Akhtar',
    rating: 5,
    text: 'Best roasted chicken. Excellent service, perfect for families with full privacy.',
  },
  {
    id: 2,
    name: 'Muhammad Rabee Gull',
    rating: 5,
    text: 'Chicken karahi and BBQ were full of flavor. Worth visiting.',
  },
  {
    id: 3,
    name: 'Umar Faizan',
    rating: 2,
    text: 'Not satisfied with kababs and wings. Taste lacked seasoning.',
  },
  {
    id: 4,
    name: 'Ahmed Ali',
    rating: 5,
    text: 'Amazing naan variety! The garlic roghni naan is a must-try. Service was quick and friendly.',
  },
  {
    id: 5,
    name: 'Fatima Khan',
    rating: 4,
    text: 'Great food quality. The steam roast was perfectly cooked. Family cabin was comfortable.',
  },
  {
    id: 6,
    name: 'Hassan Raza',
    rating: 5,
    text: 'Authentic desi taste! Been coming here for years. The chargha is legendary.',
  },
]

const ratingBreakdown = [
  { stars: 5, count: 850, percentage: 65 },
  { stars: 4, count: 300, percentage: 23 },
  { stars: 3, count: 80, percentage: 6 },
  { stars: 2, count: 50, percentage: 4 },
  { stars: 1, count: 19, percentage: 2 },
]

const highlightTags = [
  { tag: 'naan', count: 34 },
  { tag: 'service', count: 28 },
  { tag: 'BBQ', count: 20 },
  { tag: 'karahi', count: 16 },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-accent-gold fill-accent-gold" size={24} />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary-black">4.0</span>
            <span className="text-gray-600">(1,299+ reviews)</span>
          </div>
          <p className="text-lg text-gray-600">
            Trusted by thousands of customers for over 40 years
          </p>
        </div>

        {/* Rating Breakdown */}
        <div className="max-w-2xl mx-auto mb-12 bg-white rounded-lg shadow-md p-6 border-2 border-primary-maroon/20">
          <h3 className="text-xl font-bold mb-4 text-primary-black">Rating Breakdown</h3>
          <div className="space-y-3">
            {ratingBreakdown.map((item) => (
              <div key={item.stars} className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 w-20">
                  <span className="text-sm font-semibold">{item.stars}</span>
                  <FiStar className="text-accent-gold fill-accent-gold" size={16} />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-primary-maroon h-full rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-16 text-right">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {highlightTags.map((tag) => (
            <div
              key={tag.tag}
              className="bg-primary-maroon text-white px-4 py-2 rounded-full flex items-center space-x-2 border-2 border-primary-black/20"
            >
              <span className="font-semibold">{tag.tag}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                {tag.count}
              </span>
            </div>
          ))}
        </div>

        {/* Featured Reviews */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary-black">
            Featured Reviews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-maroon"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-primary-black">{review.name}</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < review.rating
                            ? 'text-accent-gold fill-accent-gold'
                            : 'text-gray-300'
                        }
                        size={16}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary-maroon text-white px-6 py-3 rounded-lg hover:bg-primary-maroonDark transition-colors font-semibold border-2 border-primary-black/20"
          >
            <span>View All Reviews on Google</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
