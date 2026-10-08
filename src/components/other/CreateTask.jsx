import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState({ text: '', type: '' })

    const submitHandler = (e) => {
        e.preventDefault()

        if (!asignTo) {
            setMessage({ text: 'Please select an employee to assign task.', type: 'error' })
            return
        }

        const taskObj = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        // Deep copy userData to trigger React state re-render cleanly
        const updatedUserData = [...userData]
        let assigned = false

        updatedUserData.forEach((elem) => {
            if (elem.firstName.toLowerCase() === asignTo.toLowerCase()) {
                elem.tasks.push(taskObj)
                elem.taskCounts.newTask = (elem.taskCounts.newTask || 0) + 1
                assigned = true
            }
        })

        if (assigned) {
            setUserData(updatedUserData)
            setMessage({ text: `Task successfully assigned to ${asignTo}!`, type: 'success' })
            
            // Clear fields
            setTaskTitle('')
            setCategory('')
            setAsignTo('')
            setTaskDate('')
            setTaskDescription('')
        } else {
            setMessage({ text: `Employee "${asignTo}" not found.`, type: 'error' })
        }

        setTimeout(() => setMessage({ text: '', type: '' }), 3000)
    }

    return (
        <div className='p-6 sm:p-8 bg-[#12544F]/90 backdrop-blur-md rounded-2xl border border-[#247B62]/40 shadow-xl mb-8'>
            <div className='flex items-center justify-between mb-6 pb-4 border-b border-[#247B62]/30'>
                <div>
                    <h2 className='text-xl sm:text-2xl font-bold text-[#e2f1e7]'>Create New Task</h2>
                    <p className='text-xs sm:text-sm text-[#85BB92]'>Assign tasks to your team members</p>
                </div>
                {message.text && (
                    <div className={`px-4 py-2 rounded-xl text-xs font-semibold animate-pulse ${message.type === 'success' ? 'bg-[#247B62] text-[#e2f1e7]' : 'bg-rose-500/80 text-white'}`}>
                        {message.text}
                    </div>
                )}
            </div>

            <form onSubmit={submitHandler} className='flex flex-col lg:flex-row gap-6 w-full items-stretch'>
                {/* Left Column - Meta details */}
                <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                    <div>
                        <label className='block text-xs font-semibold text-[#85BB92] uppercase tracking-wider mb-1.5'>Task Title</label>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            required
                            className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-[#092328]/90 border border-[#247B62]/50 text-[#e2f1e7] focus:border-[#85BB92] placeholder:text-[#85BB92]/50 transition-colors'
                            type="text" 
                            placeholder='e.g., Revamp User Dashboard UI'
                        />
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-xs font-semibold text-[#85BB92] uppercase tracking-wider mb-1.5'>Due Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                required
                                className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-[#092328]/90 border border-[#247B62]/50 text-[#e2f1e7] focus:border-[#85BB92] transition-colors' 
                                type="date" 
                            />
                        </div>
                        <div>
                            <label className='block text-xs font-semibold text-[#85BB92] uppercase tracking-wider mb-1.5'>Assign To</label>
                            <select
                                value={asignTo}
                                onChange={(e) => setAsignTo(e.target.value)}
                                required
                                className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-[#092328]/90 border border-[#247B62]/50 text-[#e2f1e7] focus:border-[#85BB92] transition-colors cursor-pointer'
                            >
                                <option value="" disabled className='text-[#85BB92]/50'>Select Employee</option>
                                {userData && userData.map((emp) => (
                                    <option key={emp.id} value={emp.firstName} className='bg-[#092328] text-[#e2f1e7]'>
                                        {emp.firstName} ({emp.email})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className='block text-xs font-semibold text-[#85BB92] uppercase tracking-wider mb-1.5'>Category</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-[#092328]/90 border border-[#247B62]/50 text-[#e2f1e7] focus:border-[#85BB92] placeholder:text-[#85BB92]/50 transition-colors' 
                            type="text" 
                            placeholder='e.g., Design, Dev, QA, Marketing' 
                        />
                    </div>
                </div>

                {/* Right Column - Description & Action */}
                <div className='w-full lg:w-1/2 flex flex-col justify-between gap-4'>
                    <div className='flex-1 flex flex-col'>
                        <label className='block text-xs font-semibold text-[#85BB92] uppercase tracking-wider mb-1.5'>Task Description</label>
                        <textarea 
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            required
                            placeholder='Provide detailed instructions or requirements for this task...'
                            className='w-full flex-1 min-h-[140px] text-sm py-3 px-4 rounded-xl outline-none bg-[#092328]/90 border border-[#247B62]/50 text-[#e2f1e7] focus:border-[#85BB92] placeholder:text-[#85BB92]/50 transition-colors resize-none' 
                        />
                    </div>

                    <button 
                        type="submit"
                        className='bg-[#247B62] hover:bg-[#247B62]/90 active:scale-[0.99] text-[#e2f1e7] font-bold text-base py-3 px-6 rounded-xl transition-all duration-200 shadow-md shadow-[#247B62]/30 flex items-center justify-center gap-2 cursor-pointer border border-[#85BB92]/30'
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>Assign Task</span>
                    </button>
                </div>
            </form>
        </div>
    )

}

export default CreateTask