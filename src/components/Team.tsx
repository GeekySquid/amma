export default function Team() {
  const teamMembers = [
    {
      name: "Rama Krishna Sahoo",
      role: "Team Leader",
      email: "ramakrishnasahoo2525@gmail.com",
      phone: "8594844784",
      gender: "Male",
      avatar: "RK"
    },
    {
      name: "Sonali Subhadarshini Moharana",
      role: "Team Member",
      email: "moharanas912@gmail.com",
      phone: "8093956716",
      gender: "Female",
      avatar: "SS"
    },
    {
      name: "Rojalin Nayak",
      role: "Team Member",
      email: "rojalinn75@gmail.com",
      phone: "8763174954",
      gender: "Female",
      avatar: "RN"
    },
    {
      name: "Pratikshya Sahoo",
      role: "Team Member",
      email: "pratikshyasahooguddy@gmail.com",
      phone: "8895515012",
      gender: "Female",
      avatar: "PS"
    },
    {
      name: "Sangram Sahoo",
      role: "Team Member",
      email: "pradeep9583945043@gmail.com",
      phone: "6371669168",
      gender: "Male",
      avatar: "SS"
    },
    {
      name: "Santa Basant Mohanty",
      role: "Team Member",
      email: "abhihsekmohanty180@gmail.com",
      phone: "9668164164",
      gender: "Male",
      avatar: "SB"
    }
  ]

  const mentor = {
    name: "Amit Mohapatra",
    role: "Mentor/Guide",
    email: "amitmohapatra264@gmail.com",
    phone: "9090703406",
    gender: "Male",
    avatar: "AM"
  }

  const getAvatarColor = (index: number) => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500',
      'bg-green-500',
      'bg-orange-500',
      'bg-red-500',
      'bg-indigo-500',
      'bg-pink-500'
    ]
    return colors[index % colors.length]
  }

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Meet Team CHAKADOLA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Gandhi Institute of Technology and Management - A passionate team 
            dedicated to revolutionizing education through AI innovation.
          </p>
        </div>

        {/* Mentor Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Project Mentor
          </h3>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 card-hover max-w-sm">
              <div className="text-center">
                <div className={`w-20 h-20 ${getAvatarColor(6)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-2xl font-bold">{mentor.avatar}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {mentor.name}
                </h4>
                <p className="text-blue-600 font-medium mb-3">{mentor.role}</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>📧 {mentor.email}</p>
                  <p>📱 {mentor.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Team Members
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover">
                <div className="text-center">
                  <div className={`w-16 h-16 ${getAvatarColor(index)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white text-lg font-bold">{member.avatar}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className={`font-medium mb-3 ${index === 0 ? 'text-purple-600' : 'text-blue-600'}`}>
                    {member.role}
                    {index === 0 && ' 👑'}
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>📧 {member.email}</p>
                    <p>📱 {member.phone}</p>
                    <p>👤 {member.gender}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institute Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            🏛️ Gandhi Institute of Technology and Management
          </h3>
          <p className="text-blue-100 mb-4">
            Participating in Trithon 2026 - Innovation in Education using AI/ML/DL/LLM Technologies
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="font-semibold">Theme: Educational Innovation with AI</span>
          </div>
        </div>
      </div>
    </section>
  )
}