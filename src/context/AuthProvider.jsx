import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage, updateLocalStorageEmployees } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees } = getLocalStorage()
        setUserData(employees)
    }, [])

    const updateUserData = (newData) => {
        setUserData(newData)
        updateLocalStorageEmployees(newData)
    }

    return (
        <AuthContext.Provider value={[userData, updateUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider