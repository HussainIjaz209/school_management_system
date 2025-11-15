import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUserCheck, 
  faCalendarCheck, 
  faReceipt, 
  faTrophy,
  faClock,
  faChalkboardTeacher,
  faTrophy as faTrophySolid,
  faCalendarDay,
  faUsers,
  faGraduationCap,
  faChartLine,
  faBullseye,
  faCalendar,
  faBook
} from '@fortawesome/free-solid-svg-icons'

const StudentDashboard = () => {
  
  const studentData = {
    name: 'Alex Johnson',
    class: 'Class 10',
    rollNo: '23',
    section: 'A',
    attendance: '92%',
    nextExam: 'Mathematics - Dec 20, 2024',
    upcomingEvents: [
      { name: 'Science Fair', date: 'Dec 15, 2024', type: 'competition' },
      { name: 'Annual Sports Day', date: 'Dec 22, 2024', type: 'event' },
      { name: 'Parent-Teacher Meeting', date: 'Dec 25, 2024', type: 'meeting' }
    ],
    fees: {
      total: 2500,
      paid: 2000,
      pending: 500,
      dueDate: 'Dec 30, 2024'
    },
    subjects: [
      { name: 'Mathematics', marks: 85, grade: 'A', teacher: 'Mr. Smith' },
      { name: 'Science', marks: 92, grade: 'A', teacher: 'Ms. Johnson' },
      { name: 'English', marks: 78, grade: 'B', teacher: 'Mr. Davis' },
      { name: 'History', marks: 88, grade: 'A', teacher: 'Ms. Wilson' },
      { name: 'Geography', marks: 75, grade: 'B', teacher: 'Mr. Brown' }
    ],
    assignments: [
      { subject: 'Mathematics', title: 'Algebra Problems', dueDate: 'Dec 16, 2024', status: 'pending' },
      { subject: 'Science', title: 'Chemistry Lab Report', dueDate: 'Dec 18, 2024', status: 'submitted' },
      { subject: 'English', title: 'Essay Writing', dueDate: 'Dec 20, 2024', status: 'pending' }
    ],
    learningMaterials: [
      { subject: 'Mathematics', title: 'Quadratic Equations Video', type: 'video', url: '#' },
      { subject: 'Science', title: 'Photosynthesis Notes', type: 'pdf', url: '#' },
      { subject: 'History', title: 'World War II Presentation', type: 'ppt', url: '#' }
    ]
  }
  
  const performanceData = [
    { month: 'Jan', marks: 78 },
    { month: 'Feb', marks: 82 },
    { month: 'Mar', marks: 85 },
    { month: 'Apr', marks: 88 },
    { month: 'May', marks: 92 },
    { month: 'Jun', marks: 89 }
  ]
  
  const gradeData = [
    { name: 'A', value: 3, color: '#10b981' },
    { name: 'B', value: 2, color: '#3b82f6' },
    { name: 'C', value: 0, color: '#f59e0b' },
    { name: 'D', value: 0, color: '#ef4444' }
  ]
  
  const getGradeColor = (grade) => {
    switch(grade) {
      case 'A': return 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/25'
      case 'B': return 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25'
      case 'C': return 'bg-gradient-to-br from-yellow-500 to-amber-600 shadow-lg shadow-yellow-500/25'
      case 'D': return 'bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/25'
      default: return 'bg-gradient-to-br from-blue-500 to-blue-600'
    }
  }

  const getEventIcon = (type) => {
    switch(type) {
      case 'competition': return faTrophySolid
      case 'event': return faCalendarDay
      case 'meeting': return faUsers
      default: return faCalendar
    }
  }

  const getEventIconColor = (type) => {
    switch(type) {
      case 'competition': return 'text-blue-600'
      case 'event': return 'text-green-600'
      case 'meeting': return 'text-purple-600'
      default: return 'text-gray-600'
    }
  }

  const getEventBg = (type) => {
    switch(type) {
      case 'competition': return 'bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500'
      case 'event': return 'bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500'
      case 'meeting': return 'bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500'
      default: return 'bg-gradient-to-br from-gray-50 to-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Welcome back, {studentData.name}! 
        </h1>
        <p className="text-gray-600 text-lg">
          Class {studentData.class} • Section {studentData.section} • Roll No: {studentData.rollNo}
        </p>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center">
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <FontAwesomeIcon icon={faUserCheck} className="text-2xl" />
            </div>
            <div className="ml-4">
              <p className="text-blue-100 text-sm font-medium">Attendance</p>
              <p className="text-3xl font-bold">{studentData.attendance}</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-400/30">
            <p className="text-blue-100 text-sm">Excellent attendance!</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center">
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <FontAwesomeIcon icon={faCalendarCheck} className="text-2xl" />
            </div>
            <div className="ml-4">
              <p className="text-green-100 text-sm font-medium">Next Exam</p>
              <p className="text-lg font-bold">Mathematics</p>
              <p className="text-green-100 text-sm">Dec 20, 2024</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl shadow-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center">
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <FontAwesomeIcon icon={faReceipt} className="text-2xl" />
            </div>
            <div className="ml-4">
              <p className="text-orange-100 text-sm font-medium">Pending Fees</p>
              <p className="text-3xl font-bold">${studentData.fees.pending}</p>
              <p className="text-orange-100 text-sm">Due: {studentData.fees.dueDate}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center">
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <FontAwesomeIcon icon={faTrophy} className="text-2xl" />
            </div>
            <div className="ml-4">
              <p className="text-purple-100 text-sm font-medium">Grade Average</p>
              <p className="text-3xl font-bold">A</p>
              <p className="text-purple-100 text-sm">Outstanding!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Performance Trend <FontAwesomeIcon icon={faChartLine} className="ml-2" />
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 rounded-full">
              <span className="text-blue-600 text-sm font-semibold">+14% Growth</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
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
              <Line 
                type="monotone" 
                dataKey="marks" 
                stroke="url(#gradient)" 
                strokeWidth={4}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, fill: '#1d4ed8' }}
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Grade Distribution <FontAwesomeIcon icon={faBullseye} className="ml-2" />
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1 rounded-full">
              <span className="text-green-600 text-sm font-semibold">3 A Grades</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={gradeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={100}
                innerRadius={60}
                fill="#8884d8"
                dataKey="value"
                paddingAngle={2}
              >
                {gradeData.map((entry, index) => (
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
      
      {/* Upcoming Events & Recent Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Upcoming Events <FontAwesomeIcon icon={faCalendar} className="ml-2" />
            </h3>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1 rounded-full">
              <span className="text-purple-600 text-sm font-semibold">{studentData.upcomingEvents.length} Events</span>
            </div>
          </div>
          <div className="space-y-4">
            {studentData.upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className={`${getEventBg(event.type)} rounded-2xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center">
                    <FontAwesomeIcon 
                      icon={getEventIcon(event.type)} 
                      className={`text-lg ${getEventIconColor(event.type)}`} 
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">{event.name}</p>
                    <p className="text-gray-600 text-sm flex items-center">
                      <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500" />
                      {event.date}
                    </p>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Performance */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Subject Performance <FontAwesomeIcon icon={faBook} className="ml-2" />
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 rounded-full">
              <span className="text-blue-600 text-sm font-semibold">5 Subjects</span>
            </div>
          </div>
          <div className="space-y-4">
            {studentData.subjects.slice(0, 4).map((subject, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800 text-lg">{subject.name}</p>
                    <p className="text-gray-600 text-sm flex items-center">
                      <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2 text-gray-500" />
                      {subject.teacher}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`px-4 py-2 rounded-xl text-white font-bold ${getGradeColor(subject.grade)}`}>
                      {subject.grade}
                    </div>
                    <p className="text-gray-600 text-sm mt-2 font-semibold">{subject.marks}%</p>
                  </div>
                </div>
                <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      subject.grade === 'A' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                      subject.grade === 'B' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      'bg-gradient-to-r from-yellow-500 to-amber-600'
                    }`}
                    style={{ width: `${subject.marks}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard