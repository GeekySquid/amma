export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform education with AI? Contact us to learn more about 
            our Academic Companion solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Project Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">🏆</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Competition</div>
                    <div className="text-gray-600">Trithon 2026 Hackathon</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600">🎯</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Theme</div>
                    <div className="text-gray-600">Educational Innovation using AI/ML/DL/LLM</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600">👥</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Team</div>
                    <div className="text-gray-600">CHAKADOLA - 6 Members + 1 Mentor</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600">🏛️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Institute</div>
                    <div className="text-gray-600">Gandhi Institute of Technology and Management</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-4 gradient-text">
                Contact Team Leader
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">👤</span>
                  <span className="font-medium">Rama Krishna Sahoo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-600">📧</span>
                  <a href="mailto:ramakrishnasahoo2525@gmail.com" className="text-blue-600 hover:underline">
                    ramakrishnasahoo2525@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-purple-600">📱</span>
                  <a href="tel:8594844784" className="text-blue-600 hover:underline">
                    +91 8594844784
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Education?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join us in revolutionizing how students learn and grow with our AI-powered 
              Academic Companion. Together, we can make personalized education accessible to all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Presentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}