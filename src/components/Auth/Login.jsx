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
    <div className='min-h-screen w-full flex items-center justify-center p-4 bg-[#0e2f44] relative overflow-hidden'>
      {/* Decorative Glow Elements */}
      <div className='absolute -top-20 -left-20 w-72 h-72 bg-[#407294] rounded-full blur-[120px] opacity-30 pointer-events-none'></div>
      <div className='absolute -bottom-20 -right-20 w-80 h-80 bg-[#a29890] rounded-full blur-[140px] opacity-20 pointer-events-none'></div>

      <div className='w-full max-w-md bg-[#143d57]/80 backdrop-blur-md border border-[#407294]/40 p-8 sm:p-10 rounded-2xl shadow-2xl z-10'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#407294] text-[#d6cbc4] text-2xl font-bold mb-3 shadow-lg shadow-[#407294]/30'>
            EMS
          </div>
          <h2 className='text-3xl font-bold text-[#d6cbc4] tracking-tight'>Welcome Back</h2>
          <p className='text-sm text-[#cbbeb5] mt-1'>Employee Management & Task Portal</p>
        </div>

        {/* Quick Demo Fill Buttons */}
        <div className='mb-6 p-3 bg-[#0e2f44]/60 rounded-xl border border-[#407294]/30'>
          <p className='text-xs font-medium text-[#cbbeb5] mb-2 text-center'>⚡ Quick Demo Fill:</p>
          <div className='flex gap-2 justify-center'>
            <button 
              type='button' 
              onClick={() => fillCredentials('admin')}
              className='px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#407294]/30 hover:bg-[#407294] text-[#d6cbc4] border border-[#407294]/50 transition-all duration-200'
            >
              Admin Demo
            </button>
            <button 
              type='button' 
              onClick={() => fillCredentials('employee')}
              className='px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#a29890]/30 hover:bg-[#a29890] text-[#d6cbc4] border border-[#a29890]/50 transition-all duration-200'
            >
              Employee Demo
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
          <div>
            <label className='block text-xs font-semibold text-[#cbbeb5] mb-1 uppercase tracking-wider'>Email Address</label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              type="email" 
              placeholder='Enter your email' 
              className='w-full outline-none bg-[#0e2f44]/80 border border-[#407294]/50 focus:border-[#d6cbc4] text-[#d6cbc4] font-medium text-sm py-3 px-4 rounded-xl placeholder:text-[#a29890] transition-colors duration-200 shadow-inner'
            />
          </div>

          <div>
            <label className='block text-xs font-semibold text-[#cbbeb5] mb-1 uppercase tracking-wider'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              type="password" 
              placeholder='Enter password' 
              className='w-full outline-none bg-[#0e2f44]/80 border border-[#407294]/50 focus:border-[#d6cbc4] text-[#d6cbc4] font-medium text-sm py-3 px-4 rounded-xl placeholder:text-[#a29890] transition-colors duration-200 shadow-inner' 
            />
          </div>

          <button 
            type="submit"
            className='mt-4 w-full bg-[#407294] hover:bg-[#407294]/80 active:scale-[0.99] text-[#d6cbc4] font-semibold text-base py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-[#407294]/30 flex items-center justify-center gap-2'
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