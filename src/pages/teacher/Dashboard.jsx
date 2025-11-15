import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBookOpen,
  faUsers,
  faTasks,
  faCalendarCheck,
  faPercentage,
  faFileAlt,
  faCheck,
  faCalendar,
  faPlus,
  faUpload,
  faChartBar,
  faBell,
  faChartLine,
  faUserCheck,
  faBolt,
  faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons'

const TeacherDashboard = () => {
  const teacherData = {
    name: 'Mr. Smith',
    subject: 'Mathematics',
    classes: ['Class 9A', 'Class 9B', 'Class 10A'],
    timetable: [
      { day: 'Monday', period: '1', class: 'Class 9A', subject: 'Mathematics', time: '9:00-9:45' },
      { day: 'Monday', period: '3', class: 'Class 9B', subject: 'Mathematics', time: '10:45-11:30' },
      { day: 'Tuesday', period: '2', class: 'Class 10A', subject: 'Mathematics', time: '9:45-10:30' },
      { day: 'Wednesday', period: '1', class: 'Class 9A', subject: 'Mathematics', time: '9:00-9:45' }
    ],
    students: [
      { id: 1, name: 'Alex Johnson', class: 'Class 9A', rollNo: '15', attendance: '92%', marks: 85 },
      { id: 2, name: 'Emma Wilson', class: 'Class 9A', rollNo: '16', attendance: '95%', marks: 92 },
      { id: 3, name: 'Michael Brown', class: 'Class 9B', rollNo: '12', attendance: '88%', marks: 78 },
      { id: 4, name: 'Sarah Davis', class: 'Class 10A', rollNo: '8', attendance: '96%', marks: 89 }
    ],
    assignments: [
      { id: 1, title: 'Algebra Problems', class: 'Class 9A', dueDate: 'Dec 16, 2024', submissions: 28, total: 35 },
      { id: 2, title: 'Geometry Project', class: 'Class 9B', dueDate: 'Dec 18, 2024', submissions: 22, total: 32 },
      { id: 3, title: 'Trigonometry Test', class: 'Class 10A', dueDate: 'Dec 20, 2024', submissions: 0, total: 30 }
    ],
    announcements: [
      { id: 1, title: 'Math Olympiad Registration', message: 'Register for the upcoming Math Olympiad by Dec 20', date: 'Dec 10, 2024', priority: 'high' },
      { id: 2, title: 'Parent Teacher Meeting', message: 'PTM scheduled for Dec 25, 2024', date: 'Dec 8, 2024', priority: 'medium' }
    ]
  }
  
  const performanceData = [
    { class: '9A', average: 82 },
    { class: '9B', average: 78 },
    { class: '10A', average: 85 }
  ]
  
  const attendanceData = [
    { name: 'Present', value: 94, color: '#10b981' },
    { name: 'Absent', value: 6, color: '#ef4444' }
  ]

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'from-red-500 to-red-600'
      case 'medium': return 'from-yellow-500 to-yellow-600'
      case 'low': return 'from-green-500 to-green-600'
      default: return 'from-blue-500 to-blue-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Welcome back, {teacherData.name}! <FontAwesomeIcon icon={faChalkboardTeacher} className="ml-2" />
            </h1>
            <p className="text-gray-600 text-lg flex items-center">
              <FontAwesomeIcon icon={faBookOpen} className="text-purple-500 mr-2" />
              Teaching {teacherData.subject} • {teacherData.classes.join(', ')}
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
              <p className="text-gray-600 text-sm">Today's Schedule</p>
              <p className="text-gray-800 font-semibold">4 Classes • Next: Class 9A</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center">
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <FontAwesomeIcon icon={faUsers} className="text-2xl" />
            </div>
            <div className="ml-4">
              <p className="text-purple-100 text-sm font-medium">Total Students</p>
              <p className="text-3xl font-bold">97</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-purple-400/30">
            <p className="text-purple-100 text-sm">Across all classes</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center">
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <FontAwesomeIcon icon={faTasks} className="text-2xl" />
            </div>
            <div className="ml-4">
              <p className="text-blue-100 text-sm font-medium">Active Assignments</p>
              <p className="text-3xl font-bold">3</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-400/30">
            <p className="text-blue-100 text-sm">2 pending review</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center">
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <FontAwesomeIcon icon={faCalendarCheck} className="text-2xl" />
            </div>
            <div className="ml-4">
              <p className="text-green-100 text-sm font-medium">Classes Today</p>
              <p className="text-3xl font-bold">4</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-green-400/30">
            <p className="text-green-100 text-sm">Next: 10:45 AM</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl shadow-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center">
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <FontAwesomeIcon icon={faPercentage} className="text-2xl" />
            </div>
            <div className="ml-4">
              <p className="text-orange-100 text-sm font-medium">Avg Attendance</p>
              <p className="text-3xl font-bold">94%</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-orange-400/30">
            <p className="text-orange-100 text-sm">Excellent rate</p>
          </div>
        </div>
      </div>
      
      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Class Performance <FontAwesomeIcon icon={faChartBar} className="ml-2" />
            </h3>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-3 py-1 rounded-full">
              <span className="text-purple-600 text-sm font-semibold">Math Scores</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="class" 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  background: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              />
              <Bar 
                dataKey="average" 
                fill="url(#performanceGradient)"
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Attendance Overview <FontAwesomeIcon icon={faChartLine} className="ml-2" />
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1 rounded-full">
              <span className="text-green-600 text-sm font-semibold">94% Present</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={attendanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                innerRadius={60}
                fill="#8884d8"
                dataKey="value"
                paddingAngle={2}
              >
                {attendanceData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    stroke="white"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  background: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Recent Activity <FontAwesomeIcon icon={faBell} className="ml-2" />
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 rounded-full">
              <span className="text-blue-600 text-sm font-semibold">3 New</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                <FontAwesomeIcon icon={faFileAlt} className="text-white text-lg" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800">New assignment submitted</p>
                <p className="text-gray-600 text-sm">Algebra Problems - 28 submissions</p>
                <p className="text-blue-600 text-xs font-semibold mt-1">10 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="text-white text-lg" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800">Attendance marked</p>
                <p className="text-gray-600 text-sm">Class 9A - 35 present, 2 absent</p>
                <p className="text-green-600 text-xs font-semibold mt-1">1 hour ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center">
                <FontAwesomeIcon icon={faCalendar} className="text-white text-lg" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800">Upcoming class</p>
                <p className="text-gray-600 text-sm">Class 9B - 10:45 AM (Mathematics)</p>
                <p className="text-purple-600 text-xs font-semibold mt-1">Starts in 30 min</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Quick Actions <FontAwesomeIcon icon={faBolt} className="ml-2" />
            </h3>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 px-3 py-1 rounded-full">
              <span className="text-orange-600 text-sm font-semibold">4 Options</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform text-center">
              <FontAwesomeIcon 
                icon={faPlus} 
                className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" 
              />
              <p className="font-semibold text-sm">Add Assignment</p>
            </button>
            
            <button className="group bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform text-center">
              <FontAwesomeIcon 
                icon={faUserCheck} 
                className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" 
              />
              <p className="font-semibold text-sm">Mark Attendance</p>
            </button>
            
            <button className="group bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform text-center">
              <FontAwesomeIcon 
                icon={faUpload} 
                className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" 
              />
              <p className="font-semibold text-sm">Upload Material</p>
            </button>
            
            <button className="group bg-gradient-to-br from-orange-500 to-amber-600 text-white p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform text-center">
              <FontAwesomeIcon 
                icon={faChartBar} 
                className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" 
              />
              <p className="font-semibold text-sm">View Reports</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard