import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const RegisterEmployee = () => {
    const [userData, setUserData] = useContext(AuthContext)
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState({ text: '', type: '' })

    const handleSubmit = (e) => {
        e.preventDefault()

        const cleanEmail = email.trim().toLowerCase()
        const cleanName = firstName.trim()

        // Check if email already exists
        const exists = userData?.some(emp => emp.email.toLowerCase() === cleanEmail)
        if (exists) {
            setMessage({ text: `An employee with email "${cleanEmail}" already exists.`, type: 'error' })
            return
        }

        const newEmployee = {
            id: Date.now(),
            firstName: cleanName,
            email: cleanEmail,
            password: password,
            taskCounts: {
                active: 0,
                newTask: 0,
                completed: 0,
                failed: 0
            },
            tasks: []
        }

        const updatedData = [...(userData || []), newEmployee]
        setUserData(updatedData)

        setMessage({ text: `Employee ${cleanName} registered successfully!`, type: 'success' })
        setFirstName('')
        setEmail('')
        setPassword('')

        setTimeout(() => setMessage({ text: '', type: '' }), 3500)
    }

    return (
        <div className='p-6 sm:p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-[#FFCCB8] shadow-md mb-8'>
            <div className='flex items-center justify-between mb-6 pb-4 border-b border-[#FFCCB8]'>
                <div>
                    <h2 className='text-xl sm:text-2xl font-extrabold text-[#4A2E2B]'>Register New Employee</h2>
                    <p className='text-xs sm:text-sm text-[#8C5A55] font-medium'>Add a new team member to your organization portal</p>
                </div>
                {message.text && (
                    <div className={`px-4 py-2 rounded-xl text-xs font-bold animate-pulse ${message.type === 'success' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}`}>
                        {message.text}
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className='grid grid-cols-1 sm:grid-cols-3 gap-5 items-end'>
                <div>
                    <label className='block text-xs font-bold text-[#8C5A55] uppercase tracking-wider mb-1.5'>First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder='e.g., Alex'
                        className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-[#FFFAD3]/60 border border-[#FFCCB8] text-[#4A2E2B] focus:border-[#FFB1B1] placeholder:text-[#8C5A55]/50 transition-colors shadow-sm font-semibold'
                    />
                </div>

                <div>
                    <label className='block text-xs font-bold text-[#8C5A55] uppercase tracking-wider mb-1.5'>Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='e.g., alex@company.com'
                        className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-[#FFFAD3]/60 border border-[#FFCCB8] text-[#4A2E2B] focus:border-[#FFB1B1] placeholder:text-[#8C5A55]/50 transition-colors shadow-sm font-semibold'
                    />
                </div>

                <div>
                    <label className='block text-xs font-bold text-[#8C5A55] uppercase tracking-wider mb-1.5'>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Enter password'
                        className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-[#FFFAD3]/60 border border-[#FFCCB8] text-[#4A2E2B] focus:border-[#FFB1B1] placeholder:text-[#8C5A55]/50 transition-colors shadow-sm font-semibold'
                    />
                </div>

                <div className='sm:col-span-3 flex justify-end mt-2'>
                    <button
                        type="submit"
                        className='w-full sm:w-auto bg-[#FFDBB0] hover:bg-[#FFDBB0]/90 active:scale-[0.99] text-[#4A2E2B] font-extrabold text-sm py-2.5 px-6 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#FFCCB8]'
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <span>Register Employee</span>
                    </button>
                </div>
            </form>
        </div>
    )


}

export default RegisterEmployee
