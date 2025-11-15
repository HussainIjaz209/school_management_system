import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUserGraduate,
  faChalkboardTeacher,
  faUserTie,
  faCreditCard,
  faCalendarAlt,
  faChartBar,
  faStar,
  faArrowRight,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'

const FeaturesSection = () => {
  const features = [
    {
      icon: faUserGraduate,
      title: 'Student Portal',
      description: 'Complete student dashboard with academic records, fee management, and learning resources.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-400'
    },
    {
      icon: faChalkboardTeacher,
      title: 'Teacher Management',
      description: 'Comprehensive tools for teachers to manage classes, assignments, and student progress.',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-400'
    },
    {
      icon: faUserTie,
      title: 'Admin Dashboard',
      description: 'Powerful administrative controls for school operations and user management.',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      iconColor: 'text-green-400'
    },
    {
      icon: faCreditCard,
      title: 'Fee Management',
      description: 'Automated fee collection, payment tracking, and financial reporting system.',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      iconColor: 'text-orange-400'
    },
    {
      icon: faCalendarAlt,
      title: 'Event Management',
      description: 'School event calendar, activity planning, and participation tracking.',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
      iconColor: 'text-red-400'
    },
    {
      icon: faChartBar,
      title: 'Analytics & Reports',
      description: 'Comprehensive analytics and reporting for data-driven decision making.',
      color: 'teal',
      gradient: 'from-teal-500 to-teal-600',
      iconColor: 'text-teal-400'
    }
  ]

  return (
    <section id="features" className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
            <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-2" />
            <span className="text-white font-semibold">Everything You Need</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Powerful <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage your school efficiently, from admissions to graduation and beyond
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl transform"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{padding: '2px'}}>
                <div className="w-full h-full bg-slate-900 rounded-3xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`relative mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon 
                    icon={feature.icon} 
                    className="text-2xl text-white" 
                  />
                  
                  {/* Floating Animation */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping opacity-60"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-gray-400 group-hover:text-white transition-colors duration-300 cursor-pointer">
                  <span className="font-semibold text-sm mr-2">Learn more</span>
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="text-xs transform group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </div>
              </div>

              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
              Ready to Transform Your School?
            </h3>
            <p className="text-gray-300 mb-6">Join thousands of educational institutions already using our platform</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 transform">
                Start Free Trial
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-white/10 hover:scale-105 transform">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection