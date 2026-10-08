const TaskListNumbers = ({ data }) => {
  const counts = data?.taskCounts || { newTask: 0, completed: 0, active: 0, failed: 0 }

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8'>
      {/* New Task Card */}
      <div className='bg-[#12544F]/90 backdrop-blur-md border border-[#247B62]/40 p-5 sm:p-6 rounded-2xl shadow-lg relative overflow-hidden group hover:border-[#85BB92]/50 transition-all duration-200'>
        <div className='absolute -right-4 -bottom-4 w-20 h-20 bg-[#247B62]/20 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-xs font-semibold tracking-wider text-[#85BB92] uppercase'>New Tasks</span>
          <span className='p-2 rounded-xl bg-[#247B62]/30 text-[#85BB92] border border-[#85BB92]/30'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </span>
        </div>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-[#e2f1e7]'>{counts.newTask}</h2>
      </div>

      {/* Active Task Card */}
      <div className='bg-[#12544F]/90 backdrop-blur-md border border-[#247B62]/40 p-5 sm:p-6 rounded-2xl shadow-lg relative overflow-hidden group hover:border-[#85BB92]/50 transition-all duration-200'>
        <div className='absolute -right-4 -bottom-4 w-20 h-20 bg-[#85BB92]/20 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-xs font-semibold tracking-wider text-[#85BB92] uppercase'>Active Tasks</span>
          <span className='p-2 rounded-xl bg-[#85BB92]/20 text-[#85BB92] border border-[#85BB92]/30'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
        </div>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-[#e2f1e7]'>{counts.active}</h2>
      </div>

      {/* Completed Task Card */}
      <div className='bg-[#12544F]/90 backdrop-blur-md border border-emerald-500/40 p-5 sm:p-6 rounded-2xl shadow-lg relative overflow-hidden group hover:border-emerald-500 transition-all duration-200'>
        <div className='absolute -right-4 -bottom-4 w-20 h-20 bg-emerald-500/10 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-xs font-semibold tracking-wider text-[#85BB92] uppercase'>Completed</span>
          <span className='p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-[#e2f1e7]'>{counts.completed}</h2>
      </div>

      {/* Failed Task Card */}
      <div className='bg-[#12544F]/90 backdrop-blur-md border border-rose-500/40 p-5 sm:p-6 rounded-2xl shadow-lg relative overflow-hidden group hover:border-rose-500 transition-all duration-200'>
        <div className='absolute -right-4 -bottom-4 w-20 h-20 bg-rose-500/10 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-xs font-semibold tracking-wider text-[#85BB92] uppercase'>Failed</span>
          <span className='p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </div>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-[#e2f1e7]'>{counts.failed}</h2>
      </div>
    </div>

  )
}

export default TaskListNumbers