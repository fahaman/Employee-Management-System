const AcceptTask = ({ data, onAction }) => {
  return (
    <div className='flex-shrink-0 w-full sm:w-[320px] p-6 bg-[#12544F] border border-[#85BB92]/50 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-200 hover:scale-[1.01] hover:shadow-2xl'>
      <div>
        <div className='flex justify-between items-center mb-4'>
          <span className='bg-[#85BB92]/20 text-[#85BB92] border border-[#85BB92]/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider'>
            {data.category}
          </span>
          <span className='text-xs font-medium text-[#85BB92]/80 flex items-center gap-1'>
            <svg className="w-3.5 h-3.5 text-[#85BB92]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {data.taskDate}
          </span>
        </div>

        <h2 className='text-xl font-bold text-[#e2f1e7] mb-2 line-clamp-2'>{data.taskTitle}</h2>
        <p className='text-sm text-[#e2f1e7]/80 leading-relaxed line-clamp-4 mb-4'>
          {data.taskDescription}
        </p>
      </div>

      <div className='pt-4 border-t border-[#247B62]/40 grid grid-cols-2 gap-2'>
        <button 
          onClick={() => onAction && onAction('complete')}
          className='bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer'
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Complete</span>
        </button>

        <button 
          onClick={() => onAction && onAction('fail')}
          className='bg-rose-600/80 hover:bg-rose-600 active:scale-[0.98] text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer'
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Fail</span>
        </button>
      </div>
    </div>
  )
}


export default AcceptTask