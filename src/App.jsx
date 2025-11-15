import React from 'react'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import StudentDashboard from './pages/student/Dashboard'
import Layout from './components/Layout'
import StudentProfile from './pages/student/Profile'
import TeacherDashboard from './pages/teacher/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
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

        {/* Teacher Routes */}
        <Route path="/teacher" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <Layout role="teacher">
              <TeacherDashboard />
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

        <Route path="*" element={<NotFound />} />

        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
