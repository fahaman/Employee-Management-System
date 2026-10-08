import  { useState } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, onTaskAction }) => {
    const [activeTab, setActiveTab] = useState('all')

    if (!data || !data.tasks || data.tasks.length === 0) {
        return (
            <div className='p-8 bg-[#12544F]/50 rounded-2xl border border-[#247B62]/30 text-center text-[#85BB92] text-sm'>
                No tasks assigned yet.
            </div>
        )
    }

    const filteredTasks = data.tasks.map((task, originalIndex) => ({ ...task, originalIndex })).filter(elem => {
        if (activeTab === 'new') return elem.newTask
        if (activeTab === 'active') return elem.active
        if (activeTab === 'completed') return elem.completed
        if (activeTab === 'failed') return elem.failed
        return true
    })

    return (
        <div className='w-full'>
            {/* Filter Tabs */}
            <div className='flex flex-wrap items-center justify-between gap-3 mb-6 pb-2 border-b border-[#247B62]/30'>
                <h3 className='text-lg font-bold text-[#e2f1e7]'>Assigned Tasks</h3>
                <div className='flex flex-wrap gap-1.5 bg-[#092328] p-1.5 rounded-xl border border-[#247B62]/40'>
                    {['all', 'new', 'active', 'completed', 'failed'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all duration-150 cursor-pointer ${
                                activeTab === tab
                                    ? 'bg-[#247B62] text-[#e2f1e7] shadow-sm border border-[#85BB92]/30'
                                    : 'text-[#85BB92] hover:text-[#e2f1e7] hover:bg-[#12544F]'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Task Container */}
            <div id='tasklist' className='flex flex-col sm:flex-row items-stretch sm:items-start justify-start gap-5 overflow-x-auto py-2 pr-2 scroll-smooth'>
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((elem) => {
                        const idx = elem.originalIndex
                        const handleAction = (action) => onTaskAction && onTaskAction(idx, action)

                        if (elem.active) {
                            return <AcceptTask key={idx} data={elem} onAction={handleAction} />
                        }
                        if (elem.newTask) {
                            return <NewTask key={idx} data={elem} onAction={handleAction} />
                        }
                        if (elem.completed) {
                            return <CompleteTask key={idx} data={elem} />
                        }
                        if (elem.failed) {
                            return <FailedTask key={idx} data={elem} />
                        }
                        return null
                    })
                ) : (
                    <div className='w-full py-12 text-center text-[#85BB92] text-sm bg-[#12544F]/40 rounded-2xl border border-[#247B62]/30'>
                        No tasks found under &quot;{activeTab}&quot; category.
                    </div>
                )}
            </div>
        </div>
    )

}

export default TaskList