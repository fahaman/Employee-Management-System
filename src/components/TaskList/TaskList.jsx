import  { useState } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, onTaskAction }) => {
    const [activeTab, setActiveTab] = useState('all')

    if (!data || !data.tasks || data.tasks.length === 0) {
        return (
            <div className='p-8 bg-[#143d57]/50 rounded-2xl border border-[#407294]/30 text-center text-[#cbbeb5] text-sm'>
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
            <div className='flex flex-wrap items-center justify-between gap-3 mb-6 pb-2 border-b border-[#407294]/30'>
                <h3 className='text-lg font-bold text-[#d6cbc4]'>Assigned Tasks</h3>
                <div className='flex flex-wrap gap-1.5 bg-[#0e2f44] p-1.5 rounded-xl border border-[#407294]/30'>
                    {['all', 'new', 'active', 'completed', 'failed'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all duration-150 cursor-pointer ${
                                activeTab === tab
                                    ? 'bg-[#407294] text-[#d6cbc4] shadow-sm'
                                    : 'text-[#a29890] hover:text-[#d6cbc4] hover:bg-[#143d57]'
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
                    <div className='w-full py-12 text-center text-[#a29890] text-sm bg-[#143d57]/30 rounded-2xl border border-[#407294]/20'>
                        No tasks found under &quot;{activeTab}&quot; category.
                    </div>
                )}
            </div>
        </div>
    )
}

export default TaskList