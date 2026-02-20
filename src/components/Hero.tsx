export default function Hero() {
  return (
    <section className="pt-20 pb-16 gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🎓 First Impression</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI enhances project
              <br />
              <span className="text-yellow-300">Management!</span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Academic Companion simplifies learning, predicts challenges, and improves 
              workflow, helping your students make a greater impact with personalized 24/7 AI mentorship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Get Started Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-purple-600">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center text-white font-semibold">
                  R
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div className="w-10 h-10 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white font-semibold">
                  P
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-300">★</span>
                  <span className="font-semibold">(4.9/5)</span>
                </div>
                <p className="text-sm text-white/80">We've helped 14k+ students</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">AC</span>
                    </div>
                    <span className="text-white font-semibold">Academic Companion</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      <span className="text-white text-sm">Home</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <span className="text-white text-sm">My Tasks</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                      <span className="text-white text-sm">Goals</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Academic Progress</h3>
                  <span className="text-orange-400 text-sm">+6</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="text-white text-sm mb-1">Math Homework</div>
                    <div className="text-xs text-gray-400">Research</div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="text-white text-sm mb-1">Science Project</div>
                    <div className="text-xs text-gray-400">Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}