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
        <div className='p-6 sm:p-8 bg-[#143d57]/80 backdrop-blur-md rounded-2xl border border-[#407294]/30 shadow-xl mb-8'>
            <div className='flex items-center justify-between mb-6 pb-4 border-b border-[#407294]/30'>
                <div>
                    <h2 className='text-xl sm:text-2xl font-bold text-[#d6cbc4]'>Register New Employee</h2>
                    <p className='text-xs sm:text-sm text-[#cbbeb5]'>Add a new team member to your organization portal</p>
                </div>
                {message.text && (
                    <div className={`px-4 py-2 rounded-xl text-xs font-semibold animate-pulse ${message.type === 'success' ? 'bg-[#407294] text-[#d6cbc4]' : 'bg-rose-500/80 text-white'}`}>
                        {message.text}
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className='grid grid-cols-1 sm:grid-cols-3 gap-5 items-end'>
                <div>
                    <label className='block text-xs font-semibold text-[#cbbeb5] uppercase tracking-wider mb-1.5'>First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder='e.g., Alex'
                        className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-[#0e2f44] border border-[#407294]/40 text-[#d6cbc4] focus:border-[#d6cbc4] placeholder:text-[#a29890] transition-colors'
                    />
                </div>

                <div>
                    <label className='block text-xs font-semibold text-[#cbbeb5] uppercase tracking-wider mb-1.5'>Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='e.g., alex@company.com'
                        className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-[#0e2f44] border border-[#407294]/40 text-[#d6cbc4] focus:border-[#d6cbc4] placeholder:text-[#a29890] transition-colors'
                    />
                </div>

                <div>
                    <label className='block text-xs font-semibold text-[#cbbeb5] uppercase tracking-wider mb-1.5'>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Enter password'
                        className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-[#0e2f44] border border-[#407294]/40 text-[#d6cbc4] focus:border-[#d6cbc4] placeholder:text-[#a29890] transition-colors'
                    />
                </div>

                <div className='sm:col-span-3 flex justify-end mt-2'>
                    <button
                        type="submit"
                        className='w-full sm:w-auto bg-[#a29890] hover:bg-[#a29890]/80 active:scale-[0.99] text-[#0e2f44] font-bold text-sm py-2.5 px-6 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer'
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <span>Register Employee</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterEmployee
