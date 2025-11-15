import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password, role) => {
    // Simulate login - in real app, this would be an API call
    const mockUsers = {
      student: {
        id: 1,
        name: 'Alex Johnson',
        email: 'alex@school.com',
        role: 'student',
        class: 'Class 10',
        rollNo: '23'
      },
      teacher: {
        id: 2,
        name: 'Mr. Smith',
        email: 'smith@school.com',
        role: 'teacher',
        subject: 'Mathematics'
      },
      admin: {
        id: 3,
        name: 'Admin User',
        email: 'admin@school.com',
        role: 'admin'
      }
    }

    const userData = mockUsers[role]
    if (userData) {
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true }
    }
    
    return { success: false, error: 'Invalid credentials' }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    login,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}