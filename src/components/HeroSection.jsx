import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUsers,
  faChalkboardTeacher,
  faMoneyBillWave,
  faChartLine,
  faArrowRight,
  faPlayCircle,
  faShieldAlt,
  faChevronDown,
  faRocket,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {
  const features = [
    { 
      icon: faUsers, 
      title: 'Student Management', 
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-300'
    },
    { 
      icon: faChalkboardTeacher, 
      title: 'Teacher Portal', 
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-300'
    },
    { 
      icon: faMoneyBillWave, 
      title: 'Fee Management', 
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      iconColor: 'text-green-300'
    },
    { 
      icon: faChartLine, 
      title: 'Analytics', 
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      iconColor: 'text-orange-300'
    }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                <FontAwesomeIcon icon={faRocket} className="mr-2" />
                Next Generation Education Platform
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                School Experience
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
              Comprehensive school management system designed to streamline operations, 
              enhance communication, and empower every stakeholder in the educational ecosystem.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform flex items-center justify-center">
                <span>Get Started Free</span>
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                />
              </button>
              
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105 transform flex items-center justify-center backdrop-blur-sm">
                <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-blue-200 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-blue-200 text-sm">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-blue-200 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="relative">
            {/* Floating Animation Container */}
            <div className="animate-float">
              {/* Main Glass Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                    Everything You Need
                  </h3>
                  <p className="text-blue-200">All-in-one platform for modern education</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl transform"
                    >
                      {/* Background Gradient on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                      
                      {/* Icon Container */}
                      <div className={`relative z-10 w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <FontAwesomeIcon 
                          icon={feature.icon} 
                          className="text-2xl text-white" 
                        />
                      </div>
                      
                      {/* Title */}
                      <p className="relative z-10 text-white font-semibold text-lg group-hover:text-white/90">
                        {feature.title}
                      </p>
                      
                      {/* Hover Arrow */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <FontAwesomeIcon 
                          icon={faArrowRight} 
                          className="text-white/60 text-sm" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center text-blue-200 text-sm">
                    <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                    <span>Trusted by educational institutions worldwide</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-sm mb-2">Scroll to explore</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection