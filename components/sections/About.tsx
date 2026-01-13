export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
              About Poppy Chargha House
            </h2>
            <div className="w-24 h-1 bg-primary-maroon mx-auto mb-6"></div>
          </div>

          {/* Story */}
          <div className="bg-gradient-to-br from-primary-maroon/5 to-primary-black/5 rounded-lg p-8 md:p-12 mb-8 border-2 border-primary-maroon/20">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
              Poppy Chargha House is one of Lahore's oldest and most loved desi restaurants, 
              serving since <strong className="text-primary-maroon">1979</strong>. Famous for its 
              signature Chargha, BBQ, and authentic Karahi dishes, we focus on quality, fresh 
              ingredients, traditional spices, and a family-friendly atmosphere with complete 
              privacy cabins.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              With thousands of loyal customers and two active branches, we continue to serve 
              Lahore with passion and unmatched flavor.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-primary-maroon/20">
              <div className="text-4xl font-bold text-primary-maroon mb-2">1979</div>
              <p className="text-gray-600 font-semibold">Years Serving</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-primary-black/20">
              <div className="text-4xl font-bold text-primary-black mb-2">40+</div>
              <p className="text-gray-600 font-semibold">Years of Excellence</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-primary-maroon/20">
              <div className="text-4xl font-bold text-primary-maroon mb-2">1,299+</div>
              <p className="text-gray-600 font-semibold">Happy Customers</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-primary-black/20">
              <div className="text-4xl font-bold text-primary-black mb-2">2</div>
              <p className="text-gray-600 font-semibold">Branches</p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-maroon/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-maroon/20">
                <svg className="w-8 h-8 text-primary-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Quality First</h3>
              <p className="text-gray-600">
                We use only the freshest ingredients and traditional spices in every dish.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-black/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-black/20">
                <svg className="w-8 h-8 text-primary-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Family Friendly</h3>
              <p className="text-gray-600">
                Complete privacy cabins and comfortable seating for families.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-maroon/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-maroon/20">
                <svg className="w-8 h-8 text-primary-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Authentic Taste</h3>
              <p className="text-gray-600">
                Traditional recipes passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
