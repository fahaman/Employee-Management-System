import { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  const fillCredentials = (type) => {
    if (type === 'admin') {
      setEmail('admin@me.com')
      setPassword('123')
    } else {
      setEmail('e@e.com')
      setPassword('123')
    }
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 bg-[#FFFAD3] relative overflow-hidden'>
      {/* Decorative Glow Elements */}
      <div className='absolute -top-20 -left-20 w-80 h-80 bg-[#FFB1B1] rounded-full blur-[140px] opacity-40 pointer-events-none'></div>
      <div className='absolute -bottom-20 -right-20 w-80 h-80 bg-[#FFDBB0] rounded-full blur-[140px] opacity-50 pointer-events-none'></div>

      <div className='w-full max-w-md bg-white/90 backdrop-blur-md border border-[#FFCCB8] p-8 sm:p-10 rounded-3xl shadow-2xl z-10'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FFB1B1] text-[#4A2E2B] text-2xl font-black mb-3 shadow-md shadow-[#FFB1B1]/40 border border-[#FFCCB8]'>
            EMS
          </div>
          <h2 className='text-3xl font-extrabold text-[#4A2E2B] tracking-tight'>Welcome Back</h2>
          <p className='text-sm text-[#8C5A55] mt-1 font-medium'>Employee Management & Task Portal</p>
        </div>

        {/* Quick Demo Fill Buttons */}
        <div className='mb-6 p-3.5 bg-[#FFFAD3]/80 rounded-2xl border border-[#FFCCB8] shadow-inner'>
          <p className='text-xs font-bold text-[#8C5A55] mb-2 text-center uppercase tracking-wider'>⚡ Quick Demo Fill</p>
          <div className='flex gap-2.5 justify-center'>
            <button 
              type='button' 
              onClick={() => fillCredentials('admin')}
              className='px-4 py-2 text-xs font-bold rounded-xl bg-[#FFB1B1] hover:bg-[#FFB1B1]/90 text-[#4A2E2B] transition-all duration-200 shadow-sm cursor-pointer border border-[#FFCCB8]'
            >
              Admin Demo
            </button>
            <button 
              type='button' 
              onClick={() => fillCredentials('employee')}
              className='px-4 py-2 text-xs font-bold rounded-xl bg-[#FFDBB0] hover:bg-[#FFDBB0]/90 text-[#4A2E2B] transition-all duration-200 shadow-sm cursor-pointer border border-[#FFCCB8]'
            >
              Employee Demo
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
          <div>
            <label className='block text-xs font-bold text-[#8C5A55] mb-1.5 uppercase tracking-wider'>Email Address</label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              type="email" 
              placeholder='Enter your email' 
              className='w-full outline-none bg-[#FFFAD3]/60 border border-[#FFCCB8] focus:border-[#FFB1B1] text-[#4A2E2B] font-semibold text-sm py-3 px-4 rounded-xl placeholder:text-[#8C5A55]/50 transition-colors duration-200 shadow-sm'
            />
          </div>

          <div>
            <label className='block text-xs font-bold text-[#8C5A55] mb-1.5 uppercase tracking-wider'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              type="password" 
              placeholder='Enter password' 
              className='w-full outline-none bg-[#FFFAD3]/60 border border-[#FFCCB8] focus:border-[#FFB1B1] text-[#4A2E2B] font-semibold text-sm py-3 px-4 rounded-xl placeholder:text-[#8C5A55]/50 transition-colors duration-200 shadow-sm' 
            />
          </div>

          <button 
            type="submit"
            className='mt-4 w-full bg-[#FFB1B1] hover:bg-[#FFB1B1]/90 active:scale-[0.99] text-[#4A2E2B] font-extrabold text-base py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-[#FFB1B1]/30 flex items-center justify-center gap-2 cursor-pointer border border-[#FFCCB8]'
          >
            <span>Log In to Dashboard</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login