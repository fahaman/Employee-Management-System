import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData] = useContext(AuthContext)
    const [searchTerm, setSearchTerm] = useState('')

    const filteredEmployees = userData ? userData.filter(emp => 
        emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    ) : []

    return (
        <div className='bg-[#143d57]/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#407294]/30 shadow-xl'>
            <div className='flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#407294]/30'>
                <div>
                    <h2 className='text-xl sm:text-2xl font-bold text-[#d6cbc4]'>Team Performance Overview</h2>
                    <p className='text-xs sm:text-sm text-[#cbbeb5]'>Monitor real-time task status across all employees</p>
                </div>
                
                <div className='relative w-full sm:w-64'>
                    <input 
                        type="text" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search employee..." 
                        className="w-full text-xs sm:text-sm py-2 px-3.5 pl-9 rounded-xl outline-none bg-[#0e2f44] border border-[#407294]/40 text-[#d6cbc4] placeholder:text-[#a29890]"
                    />
                    <svg className="w-4 h-4 absolute left-3 top-3 text-[#a29890]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Desktop Table Header */}
            <div className='hidden md:grid grid-cols-5 bg-[#0e2f44] py-3.5 px-5 text-xs font-semibold text-[#cbbeb5] uppercase tracking-wider rounded-xl mb-3 border border-[#407294]/20'>
                <div className='col-span-1'>Employee Name</div>
                <div className='text-center'>New Tasks</div>
                <div className='text-center'>Active Tasks</div>
                <div className='text-center'>Completed</div>
                <div className='text-center'>Failed</div>
            </div>

            {/* Employee List */}
            <div className='flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-1'>
                {filteredEmployees.length > 0 ? (
                    filteredEmployees.map((elem, idx) => (
                        <div key={idx} className='bg-[#0e2f44]/80 hover:bg-[#0e2f44] border border-[#407294]/30 p-4 md:py-3.5 md:px-5 rounded-xl transition-all duration-150 flex flex-col md:grid md:grid-cols-5 items-start md:items-center gap-2 md:gap-0 shadow-sm'>
                            {/* Employee Name */}
                            <div className='flex items-center gap-3 col-span-1'>
                                <div className='w-9 h-9 rounded-full bg-[#407294]/30 border border-[#407294]/50 flex items-center justify-center text-[#d6cbc4] text-xs font-bold'>
                                    {elem.firstName.charAt(0)}
                                </div>
                                <div>
                                    <h3 className='text-sm font-semibold text-[#d6cbc4]'>{elem.firstName}</h3>
                                    <p className='text-xs text-[#a29890] truncate max-w-[120px]'>{elem.email}</p>
                                </div>
                            </div>

                            {/* Mobile Grid or Desktop Columns */}
                            <div className='w-full grid grid-cols-4 md:contents gap-2 mt-2 md:mt-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#407294]/20 text-center'>
                                <div>
                                    <span className='md:hidden block text-[10px] text-[#a29890] uppercase font-medium'>New</span>
                                    <span className='inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#407294]/20 text-[#407294] border border-[#407294]/40'>
                                        {elem.taskCounts.newTask}
                                    </span>
                                </div>
                                <div>
                                    <span className='md:hidden block text-[10px] text-[#a29890] uppercase font-medium'>Active</span>
                                    <span className='inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#a29890]/20 text-[#a29890] border border-[#a29890]/40'>
                                        {elem.taskCounts.active}
                                    </span>
                                </div>
                                <div>
                                    <span className='md:hidden block text-[10px] text-[#a29890] uppercase font-medium'>Done</span>
                                    <span className='inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'>
                                        {elem.taskCounts.completed}
                                    </span>
                                </div>
                                <div>
                                    <span className='md:hidden block text-[10px] text-[#a29890] uppercase font-medium'>Failed</span>
                                    <span className='inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30'>
                                        {elem.taskCounts.failed}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='text-center py-8 text-[#a29890] text-sm'>
                        No employees found matching &quot;{searchTerm}&quot;.
                    </div>
                )}
            </div>
        </div>
    )
}

export default AllTask