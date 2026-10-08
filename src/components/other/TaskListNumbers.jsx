const TaskListNumbers = ({ data }) => {
  const counts = data?.taskCounts || { newTask: 0, completed: 0, active: 0, failed: 0 }

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8'>
      {/* New Task Card */}
      <div className='bg-white/90 backdrop-blur-md border border-[#FFCCB8] p-5 sm:p-6 rounded-2xl shadow-md relative overflow-hidden group hover:border-[#FFB1B1] transition-all duration-200'>
        <div className='absolute -right-4 -bottom-4 w-20 h-20 bg-[#FFB1B1]/20 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-xs font-bold tracking-wider text-[#8C5A55] uppercase'>New Tasks</span>
          <span className='p-2 rounded-xl bg-[#FFB1B1]/30 text-[#4A2E2B] border border-[#FFCCB8]'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </span>
        </div>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-[#4A2E2B]'>{counts.newTask}</h2>
      </div>

      {/* Active Task Card */}
      <div className='bg-white/90 backdrop-blur-md border border-[#FFCCB8] p-5 sm:p-6 rounded-2xl shadow-md relative overflow-hidden group hover:border-[#FFDBB0] transition-all duration-200'>
        <div className='absolute -right-4 -bottom-4 w-20 h-20 bg-[#FFDBB0]/30 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-xs font-bold tracking-wider text-[#8C5A55] uppercase'>Active Tasks</span>
          <span className='p-2 rounded-xl bg-[#FFDBB0]/40 text-[#4A2E2B] border border-[#FFCCB8]'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
        </div>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-[#4A2E2B]'>{counts.active}</h2>
      </div>

      {/* Completed Task Card */}
      <div className='bg-white/90 backdrop-blur-md border border-emerald-300 p-5 sm:p-6 rounded-2xl shadow-md relative overflow-hidden group hover:border-emerald-400 transition-all duration-200'>
        <div className='absolute -right-4 -bottom-4 w-20 h-20 bg-emerald-100 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-xs font-bold tracking-wider text-emerald-800 uppercase'>Completed</span>
          <span className='p-2 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-[#4A2E2B]'>{counts.completed}</h2>
      </div>

      {/* Failed Task Card */}
      <div className='bg-white/90 backdrop-blur-md border border-rose-300 p-5 sm:p-6 rounded-2xl shadow-md relative overflow-hidden group hover:border-rose-400 transition-all duration-200'>
        <div className='absolute -right-4 -bottom-4 w-20 h-20 bg-rose-100 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-xs font-bold tracking-wider text-rose-800 uppercase'>Failed</span>
          <span className='p-2 rounded-xl bg-rose-100 text-rose-800 border border-rose-300'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </div>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-[#4A2E2B]'>{counts.failed}</h2>
      </div>
    </div>


  )
}

export default TaskListNumbers