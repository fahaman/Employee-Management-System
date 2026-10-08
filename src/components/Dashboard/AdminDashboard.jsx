import { useState } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import RegisterEmployee from '../other/RegisterEmployee'

const AdminDashboard = (props) => {
    const [activeSection, setActiveSection] = useState('create')

    return (
        <div className='min-h-screen w-full p-4 sm:p-8 lg:p-10 bg-[#FFFAD3] text-[#4A2E2B]'>
            <div className='max-w-7xl mx-auto'>
                <Header changeUser={props.changeUser} />

                {/* Admin Navigation Tabs */}
                <div className='flex flex-wrap items-center gap-2 mb-6 bg-white/80 p-2 rounded-2xl border border-[#FFCCB8] backdrop-blur-md shadow-sm'>
                    <button
                        onClick={() => setActiveSection('create')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                            activeSection === 'create'
                                ? 'bg-[#FFB1B1] text-[#4A2E2B] shadow-md border border-[#FFCCB8]'
                                : 'text-[#8C5A55] hover:text-[#4A2E2B] hover:bg-[#FFDBB0]/40'
                        }`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Assign Task</span>
                    </button>

                    <button
                        onClick={() => setActiveSection('register')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                            activeSection === 'register'
                                ? 'bg-[#FFDBB0] text-[#4A2E2B] shadow-md border border-[#FFCCB8]'
                                : 'text-[#8C5A55] hover:text-[#4A2E2B] hover:bg-[#FFDBB0]/40'
                        }`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <span>Register New Employee</span>
                    </button>
                </div>

                {activeSection === 'create' && <CreateTask />}
                {activeSection === 'register' && <RegisterEmployee />}

                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard