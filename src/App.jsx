import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if (loggedInUser) {
      try {
        const parsedData = JSON.parse(loggedInUser)
        setUser(parsedData.role)
        setLoggedInUserData(parsedData.data)
      } catch (err) {
        localStorage.removeItem('loggedInUser')
      }
    }
  }, [])

  const handleLogin = (email, password) => {
    const cleanEmail = email.trim().toLowerCase()

    if ((cleanEmail === 'admin@me.com' || cleanEmail === 'admin@example.com') && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => e.email.toLowerCase() === cleanEmail && e.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("Invalid Email or Password!")
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  const handleUserChange = (newUser) => {
    setUser(newUser)
    if (!newUser) {
      setLoggedInUserData(null)
      localStorage.removeItem('loggedInUser')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? (
        <AdminDashboard changeUser={handleUserChange} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={handleUserChange} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App