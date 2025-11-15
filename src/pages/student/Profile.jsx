const StudentProfile = () => {
  const studentData = {
    name: 'Alex Johnson',
    class: 'Class 10',
    rollNo: '23',
    section: 'A',
    fatherName: 'Michael Johnson',
    motherName: 'Sarah Johnson',
    dateOfBirth: 'March 15, 2008',
    contact: '+1 (555) 123-4567',
    email: 'alex@school.com',
    address: '123 Education Street, Learning City, LC 12345',
    attendance: '92%'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Student Profile 👨‍🎓
        </h1>
        <p className="text-gray-600 text-lg">Manage your personal and academic information</p>
      </div>
      
      {/* Profile Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
        {/* Profile Header with Avatar */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8">
          <div className="relative mb-6 lg:mb-0 lg:mr-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-4xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-3">
              {studentData.name.split(' ').map(n => n[0]).join('')}
            </div>
            {/* Online Status Indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow-lg"></div>
          </div>
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              {studentData.name}
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
              <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm shadow-md">
                {studentData.class}
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 px-4 py-2 rounded-full font-semibold text-sm shadow-md">
                Section {studentData.section}
              </span>
              <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 px-4 py-2 rounded-full font-semibold text-sm shadow-md">
                Roll No: {studentData.rollNo}
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start text-gray-600">
              <i className="fas fa-user-check text-green-500 mr-2"></i>
              <span>Active Student • Verified Profile</span>
            </div>
          </div>
        </div>
        
        {/* Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                <i className="fas fa-user text-white text-lg"></i>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Personal Information
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                <label className="block text-gray-500 font-medium text-sm mb-1 flex items-center">
                  <i className="fas fa-male mr-2 text-blue-500"></i>
                  Father's Name
                </label>
                <p className="text-gray-800 font-semibold">{studentData.fatherName}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                <label className="block text-gray-500 font-medium text-sm mb-1 flex items-center">
                  <i className="fas fa-female mr-2 text-pink-500"></i>
                  Mother's Name
                </label>
                <p className="text-gray-800 font-semibold">{studentData.motherName}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                <label className="block text-gray-500 font-medium text-sm mb-1 flex items-center">
                  <i className="fas fa-birthday-cake mr-2 text-yellow-500"></i>
                  Date of Birth
                </label>
                <p className="text-gray-800 font-semibold">{studentData.dateOfBirth}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                <label className="block text-gray-500 font-medium text-sm mb-1 flex items-center">
                  <i className="fas fa-phone mr-2 text-green-500"></i>
                  Contact Number
                </label>
                <p className="text-gray-800 font-semibold">{studentData.contact}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                <label className="block text-gray-500 font-medium text-sm mb-1 flex items-center">
                  <i className="fas fa-envelope mr-2 text-red-500"></i>
                  Email Address
                </label>
                <p className="text-gray-800 font-semibold">{studentData.email}</p>
              </div>
            </div>
          </div>
          
          {/* Academic Information */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mr-3">
                <i className="fas fa-graduation-cap text-white text-lg"></i>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Academic Information
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                <label className="block text-gray-500 font-medium text-sm mb-1 flex items-center">
                  <i className="fas fa-school mr-2 text-indigo-500"></i>
                  Current Class
                </label>
                <p className="text-gray-800 font-semibold">{studentData.class}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                <label className="block text-gray-500 font-medium text-sm mb-1 flex items-center">
                  <i className="fas fa-users mr-2 text-blue-500"></i>
                  Section
                </label>
                <p className="text-gray-800 font-semibold">{studentData.section}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                <label className="block text-gray-500 font-medium text-sm mb-1 flex items-center">
                  <i className="fas fa-hashtag mr-2 text-gray-500"></i>
                  Roll Number
                </label>
                <p className="text-gray-800 font-semibold">{studentData.rollNo}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                <label className="block text-gray-500 font-medium text-sm mb-1 flex items-center">
                  <i className="fas fa-calendar-check mr-2 text-green-500"></i>
                  Attendance
                </label>
                <div className="flex items-center justify-between">
                  <p className="text-gray-800 font-semibold">{studentData.attendance}</p>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" 
                      style={{ width: studentData.attendance }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Address Section */}
            <div className="mt-6 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <i className="fas fa-home mr-2 text-orange-500"></i>
                Residential Address
              </h4>
              <p className="text-gray-600 leading-relaxed">{studentData.address}</p>
              <div className="mt-3 flex space-x-2">
                <button className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md">
                  <i className="fas fa-map-marker-alt mr-1"></i> View on Map
                </button>
                <button className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md">
                  <i className="fas fa-copy mr-1"></i> Copy Address
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default StudentProfile