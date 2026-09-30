const Header = (props) => {
  const name = props.data ? props.data.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 bg-[#143d57]/70 backdrop-blur-md rounded-2xl border border-[#407294]/30 shadow-lg mb-6'>
      <div className='flex items-center gap-3'>
        <div className='w-12 h-12 rounded-xl bg-gradient-to-tr from-[#407294] to-[#a29890] flex items-center justify-center text-[#d6cbc4] text-xl font-bold shadow-md'>
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <span className='text-xs font-semibold tracking-wider text-[#cbbeb5] uppercase'>Welcome back</span>
          <h1 className='text-xl sm:text-2xl font-bold text-[#d6cbc4] flex items-center gap-1.5'>
            <span>Hello, {name}</span>
            <span className='animate-bounce inline-block'>👋</span>
          </h1>
        </div>
      </div>

      <button 
        onClick={logOutUser} 
        className='bg-[#a29890]/20 hover:bg-[#a29890] text-[#d6cbc4] hover:text-[#0e2f44] border border-[#a29890]/50 font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-sm text-sm'
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span>Log Out</span>
      </button>
    </div>
  )
}

export default Header