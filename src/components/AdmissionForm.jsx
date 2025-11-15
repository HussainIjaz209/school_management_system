import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUserGraduate,
  faAddressCard,
  faFileUpload,
  faCircle,
  faRocket,
  faBirthdayCake,
  faMale,
  faFemale,
  faGraduationCap,
  faEnvelope,
  faPhone,
  faHome,
  faFileUpload as faCloudUploadAlt,
  faListCheck,
  faCheckCircle,
  faArrowRight,
  faArrowLeft,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    class: '',
    email: '',
    phone: '',
    address: '',
    documents: []
  })
  
  const [currentStep, setCurrentStep] = useState(1)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    alert('Application submitted successfully! You will receive login credentials via email once approved.')
    setFormData({
      studentName: '',
      fatherName: '',
      motherName: '',
      dateOfBirth: '',
      class: '',
      email: '',
      phone: '',
      address: '',
      documents: []
    })
    setCurrentStep(1)
  }

  const getStepColor = (step) => {
    return currentStep >= step 
      ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25' 
      : 'bg-gray-500/50'
  }

  const getStepIcon = (step) => {
    switch(step) {
      case 1: return faUserGraduate
      case 2: return faAddressCard
      case 3: return faFileUpload
      default: return faCircle
    }
  }

  return (
    <section id="admission" className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
            <FontAwesomeIcon icon={faRocket} className="text-yellow-400 mr-2" />
            <span className="text-white font-semibold">Start Your Journey</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Online <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Admission</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Start your journey with us - simple, transparent admission process designed for modern education
          </p>
        </div>
        
        {/* Main Form Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`flex flex-col items-center transition-all duration-500 ${currentStep === step ? 'scale-110' : ''}`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${getStepColor(step)}`}>
                      <FontAwesomeIcon 
                        icon={getStepIcon(step)} 
                        className={`text-white text-lg ${currentStep === step ? 'scale-110' : ''}`} 
                      />
                    </div>
                    <span className={`text-sm font-semibold mt-2 transition-colors duration-300 ${
                      currentStep >= step ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step === 1 && 'Student Info'}
                      {step === 2 && 'Contact Info'}
                      {step === 3 && 'Documents'}
                    </span>
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 rounded-full transition-all duration-500 ${
                      currentStep > step ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-500/50'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Student Information */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    Student Information
                  </h3>
                  <p className="text-gray-300">Tell us about the student</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-white font-semibold mb-3 flex items-center">
                      <FontAwesomeIcon icon={faUserGraduate} className="text-blue-400 mr-2" />
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter student name"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-white font-semibold mb-3 flex items-center">
                      <FontAwesomeIcon icon={faBirthdayCake} className="text-purple-400 mr-2" />
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-white font-semibold mb-3 flex items-center">
                      <FontAwesomeIcon icon={faMale} className="text-blue-400 mr-2" />
                      Father's Name *
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter father's name"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-white font-semibold mb-3 flex items-center">
                      <FontAwesomeIcon icon={faFemale} className="text-pink-400 mr-2" />
                      Mother's Name *
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter mother's name"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2 group">
                    <label className="block text-white font-semibold mb-3 flex items-center">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-green-400 mr-2" />
                      Class Applying For *
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      required
                    >
                      <option value="" className="text-gray-800">Select Class</option>
                      <option value="Nursery" className="text-gray-800">Nursery</option>
                      <option value="LKG" className="text-gray-800">LKG</option>
                      <option value="UKG" className="text-gray-800">UKG</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i+1} value={i+1} className="text-gray-800">Class {i+1}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 transform flex items-center"
                  >
                    Continue to Contact Info
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-300">How can we reach you?</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-white font-semibold mb-3 flex items-center">
                      <FontAwesomeIcon icon={faEnvelope} className="text-red-400 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-white font-semibold mb-3 flex items-center">
                      <FontAwesomeIcon icon={faPhone} className="text-green-400 mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2 group">
                    <label className="block text-white font-semibold mb-3 flex items-center">
                      <FontAwesomeIcon icon={faHome} className="text-orange-400 mr-2" />
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Enter complete address"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 transform flex items-center border border-white/20"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 transform flex items-center"
                  >
                    Continue to Documents
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Document Upload */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    Document Upload
                  </h3>
                  <p className="text-gray-300">Upload required documents</p>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-white font-semibold mb-3 flex items-center">
                      <FontAwesomeIcon icon={faFileUpload} className="text-yellow-400 mr-2" />
                      Upload Documents
                    </label>
                    <div className="border-2 border-dashed border-white/30 rounded-2xl p-12 text-center transition-all duration-300 hover:border-white/50 hover:bg-white/5 cursor-pointer">
                      <FontAwesomeIcon 
                        icon={faCloudUploadAlt} 
                        className="text-5xl text-white/50 mb-4 transition-transform duration-300 group-hover:scale-110" 
                      />
                      <p className="text-white text-lg font-semibold mb-2">Drop files here or click to upload</p>
                      <p className="text-white/70 text-sm">Supported formats: PDF, JPG, JPEG, PNG (Max: 5MB each)</p>
                      <input
                        type="file"
                        multiple
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/20">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center">
                      <FontAwesomeIcon icon={faListCheck} className="text-green-400 mr-2" />
                      Required Documents:
                    </h4>
                    <ul className="text-white/90 space-y-3">
                      <li className="flex items-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-3" />
                        Birth Certificate (Mandatory)
                      </li>
                      <li className="flex items-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-3" />
                        Passport Size Photographs (3 copies)
                      </li>
                      <li className="flex items-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-3" />
                        Previous School Transfer Certificate (if applicable)
                      </li>
                      <li className="flex items-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-3" />
                        Address Proof (Aadhar Card/Utility Bill)
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 transform flex items-center border border-white/20"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 transform flex items-center"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default AdmissionForm