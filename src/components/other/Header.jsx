const Header = (props) => {
  const name = props.data ? props.data.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-[#FFCCB8] shadow-md mb-6'>
      <div className='flex items-center gap-3.5'>
        <div className='w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FFB1B1] to-[#FFDBB0] flex items-center justify-center text-[#4A2E2B] text-xl font-black shadow-md border border-[#FFCCB8]'>
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <span className='text-xs font-bold tracking-wider text-[#8C5A55] uppercase'>Welcome back</span>
          <h1 className='text-xl sm:text-2xl font-extrabold text-[#4A2E2B] flex items-center gap-1.5'>
            <span>Hello, {name}</span>
            <span className='animate-bounce inline-block'>👋</span>
          </h1>
        </div>
      </div>

      <button 
        onClick={logOutUser} 
        className='bg-[#FFB1B1] hover:bg-[#FFB1B1]/90 text-[#4A2E2B] border border-[#FFCCB8] font-bold px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-sm text-sm cursor-pointer'
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span>Log Out</span>
      </button>
    </div>
  )
}

export default Header