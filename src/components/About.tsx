export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold gradient-text mb-6">
              About Our Solution
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              The Personalized Academic Companion transforms AI from a simple question-answering 
              tool into a continuous, voice-enabled personal mentor that understands, supports, 
              and guides students throughout their academic journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The Problem</h3>
                  <p className="text-gray-600">
                    Students face academic pressure, confusion, and stress without personalized 
                    attention. Generic advice doesn't fit individual needs, and help is limited 
                    to school hours.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Innovation</h3>
                  <p className="text-gray-600">
                    We combine deep personalization, emotional intelligence, and smart task 
                    automation in one scalable, voice-enabled system that feels truly personal 
                    and supportive.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The Impact</h3>
                  <p className="text-gray-600">
                    Students receive individual support at scale, learning with confidence 
                    and never feeling alone in their academic journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Monetization Strategy
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Freemium subscription model</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Institutional licensing for schools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Government & NGO partnerships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Premium add-ons and white-label solutions</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Growth Plan
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900">Stability</div>
                  <p className="text-sm text-gray-600">
                    Scalable cloud infrastructure with 24/7 reliability and continuous AI improvements
                  </p>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Expansion</div>
                  <p className="text-sm text-gray-600">
                    Start with pilot institutions, expand through partnerships, and scale globally
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">
                Revenue Projection
              </h3>
              <p className="text-blue-100 mb-4">
                Sustainable recurring income within 24 months through phased rollout
              </p>
              <div className="text-2xl font-bold">
                📈 Scalable Growth Model
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}