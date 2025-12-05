import React from 'react'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import StudentDashboard from './pages/student/Dashboard'
import Layout from './components/Layout'
import StudentProfile from './pages/student/Profile'
import StudentAcademic from './pages/student/Academic'
import StudentFees from './pages/student/Fees'
import StudentEvents from './pages/student/Events'
import StudentLearning from './pages/student/Learning'
import StudentAssignments from './pages/student/Assignments'
import TeacherDashboard from './pages/teacher/Dashboard'
import TeacherStudents from './pages/teacher/Students'
import TeacherAssignments from './pages/teacher/Assignments'
import TeacherTimetable from './pages/teacher/Timetable'
import TeacherMaterials from './pages/teacher/Materials'
import TeacherAnnouncements from './pages/teacher/Announcements'
import TeacherAttendance from './pages/teacher/Attendance'
import AdminDashboard from './pages/admin/Dashboard'
import AdminAdmissions from './pages/admin/Admissions'
import AdminFees from './pages/admin/Fees'
import AdminUsers from './pages/admin/Users'
import AdminClasses from './pages/admin/Classes'
import AdminReports from './pages/admin/Reports'
import AdminSettings from './pages/admin/Settings'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/student" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Layout role="student">
                  <StudentDashboard />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/student/profile" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Layout role="student">
                  <StudentProfile />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/student/academics" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Layout role="student">
                  <StudentAcademic />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/student/fees" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Layout role="student">
                  <StudentFees />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/student/events" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Layout role="student">
                  <StudentEvents />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/student/learning" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Layout role="student">
                  <StudentLearning />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/student/assignments" element={
              <ProtectedRoute allowedRoles={['student']}>
                <Layout role="student">
                  <StudentAssignments />
                </Layout>
              </ProtectedRoute>
            } />

            {/* Teacher Routes */}
            <Route path="/teacher" element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <Layout role="teacher">
                  <TeacherDashboard />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/students" element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <Layout role="teacher">
                  <TeacherStudents />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/assignments" element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <Layout role="teacher">
                  <TeacherAssignments />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/timetable" element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <Layout role="teacher">
                  <TeacherTimetable />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/materials" element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <Layout role="teacher">
                  <TeacherMaterials />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/announcements" element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <Layout role="teacher">
                  <TeacherAnnouncements />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/teacher/attendance" element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <Layout role="teacher">
                  <TeacherAttendance />
                </Layout>
              </ProtectedRoute>
            } />

            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Layout role="admin">
                  <AdminDashboard />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/admin/admissions" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Layout role="admin">
                  <AdminAdmissions />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/admin/fees" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Layout role="admin">
                  <AdminFees />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Layout role="admin">
                  <AdminUsers />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/admin/classes" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Layout role="admin">
                  <AdminClasses />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/admin/reports" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Layout role="admin">
                  <AdminReports />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/admin/settings" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Layout role="admin">
                  <AdminSettings />
                </Layout>
              </ProtectedRoute>
            } />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
