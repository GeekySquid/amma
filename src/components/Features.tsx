export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Learning",
      description: "AI understands each student's academic history, goals, strengths, and challenges to deliver deeply personalized guidance."
    },
    {
      icon: "🗣️",
      title: "Voice-Enabled Interaction",
      description: "Natural voice conversations make learning feel like talking to a caring friend who's always there to help."
    },
    {
      icon: "🕐",
      title: "24/7 Availability",
      description: "Round-the-clock support ensures students never feel alone when they need guidance the most."
    },
    {
      icon: "💝",
      title: "Emotional Support",
      description: "Provides empathy, encouragement, and motivation to help students overcome academic stress and challenges."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Continuous monitoring of academic progress with intelligent insights and recommendations."
    },
    {
      icon: "🎓",
      title: "Career Guidance",
      description: "Helps students explore career paths, set goals, and develop the right skills for their future."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Powerful Features for Every Student
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI companion combines cutting-edge technology with emotional intelligence 
            to provide comprehensive academic support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Technology Stack
              </h3>
              <p className="text-gray-600 mb-6">
                Built with cutting-edge AI and cloud technologies to ensure scalability, 
                security, and reliability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-semibold text-gray-900">Vertex AI</div>
                  <div className="text-sm text-gray-600">Gemini Model</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-semibold text-gray-900">BigQuery</div>
                  <div className="text-sm text-gray-600">Data Storage</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-semibold text-gray-900">Cloud Functions</div>
                  <div className="text-sm text-gray-600">Backend APIs</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="font-semibold text-gray-900">Speech APIs</div>
                  <div className="text-sm text-gray-600">Voice Interaction</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">AI-Powered Intelligence</h4>
                <p className="text-gray-600">
                  Advanced machine learning algorithms provide personalized recommendations 
                  and adaptive learning experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}