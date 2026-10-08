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
    <div className='min-h-screen w-full flex items-center justify-center p-4 bg-[#092328] relative overflow-hidden'>
      {/* Decorative Glow Elements */}
      <div className='absolute -top-20 -left-20 w-80 h-80 bg-[#12544F] rounded-full blur-[140px] opacity-40 pointer-events-none'></div>
      <div className='absolute -bottom-20 -right-20 w-80 h-80 bg-[#247B62] rounded-full blur-[140px] opacity-30 pointer-events-none'></div>

      <div className='w-full max-w-md bg-[#12544F]/80 backdrop-blur-md border border-[#247B62]/40 p-8 sm:p-10 rounded-2xl shadow-2xl z-10'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#247B62] text-[#e2f1e7] text-2xl font-bold mb-3 shadow-lg shadow-[#247B62]/30 border border-[#85BB92]/30'>
            EMS
          </div>
          <h2 className='text-3xl font-bold text-[#e2f1e7] tracking-tight'>Welcome Back</h2>
          <p className='text-sm text-[#85BB92] mt-1 font-medium'>Employee Management & Task Portal</p>
        </div>

        {/* Quick Demo Fill Buttons */}
        <div className='mb-6 p-3 bg-[#092328]/70 rounded-xl border border-[#247B62]/30'>
          <p className='text-xs font-semibold text-[#85BB92] mb-2 text-center uppercase tracking-wider'>⚡ Quick Demo Fill</p>
          <div className='flex gap-2 justify-center'>
            <button 
              type='button' 
              onClick={() => fillCredentials('admin')}
              className='px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#247B62] hover:bg-[#247B62]/80 text-[#e2f1e7] border border-[#85BB92]/40 transition-all duration-200 shadow-sm cursor-pointer'
            >
              Admin Demo
            </button>
            <button 
              type='button' 
              onClick={() => fillCredentials('employee')}
              className='px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#85BB92]/20 hover:bg-[#85BB92]/30 text-[#85BB92] border border-[#85BB92]/40 transition-all duration-200 cursor-pointer'
            >
              Employee Demo
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
          <div>
            <label className='block text-xs font-semibold text-[#85BB92] mb-1.5 uppercase tracking-wider'>Email Address</label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              type="email" 
              placeholder='Enter your email' 
              className='w-full outline-none bg-[#092328]/90 border border-[#247B62]/50 focus:border-[#85BB92] text-[#e2f1e7] font-medium text-sm py-3 px-4 rounded-xl placeholder:text-[#85BB92]/60 transition-colors duration-200 shadow-inner'
            />
          </div>

          <div>
            <label className='block text-xs font-semibold text-[#85BB92] mb-1.5 uppercase tracking-wider'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              type="password" 
              placeholder='Enter password' 
              className='w-full outline-none bg-[#092328]/90 border border-[#247B62]/50 focus:border-[#85BB92] text-[#e2f1e7] font-medium text-sm py-3 px-4 rounded-xl placeholder:text-[#85BB92]/60 transition-colors duration-200 shadow-inner' 
            />
          </div>

          <button 
            type="submit"
            className='mt-4 w-full bg-[#247B62] hover:bg-[#247B62]/90 active:scale-[0.99] text-[#e2f1e7] font-bold text-base py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-[#247B62]/30 flex items-center justify-center gap-2 cursor-pointer border border-[#85BB92]/30'
          >
            <span>Log In to Dashboard</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login