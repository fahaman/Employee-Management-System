const FailedTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 w-full sm:w-[320px] p-6 bg-[#143d57] border border-rose-500/40 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-200 hover:scale-[1.01] hover:shadow-2xl'>
      <div>
        <div className='flex justify-between items-center mb-4'>
          <span className='bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider'>
            {data?.category || 'Task'}
          </span>
          <span className='text-xs font-medium text-[#cbbeb5] flex items-center gap-1'>
            <svg className="w-3.5 h-3.5 text-[#a29890]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {data?.taskDate}
          </span>
        </div>

        <h2 className='text-xl font-bold text-[#d6cbc4] mb-2 line-clamp-2'>{data?.taskTitle}</h2>
        <p className='text-sm text-[#cbbeb5] leading-relaxed line-clamp-4 mb-4'>
          {data?.taskDescription}
        </p>
      </div>

      <div className='pt-4 border-t border-[#407294]/30'>
        <div className='w-full bg-rose-500/20 text-rose-400 border border-rose-500/40 font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2'>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Task Failed</span>
        </div>
      </div>
    </div>
  )
}

export default FailedTask