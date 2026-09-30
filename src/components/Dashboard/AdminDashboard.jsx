// import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full p-4 sm:p-8 lg:p-10 bg-[#0e2f44] text-[#d6cbc4]'>
            <div className='max-w-7xl mx-auto'>
                <Header changeUser={props.changeUser} />
                <CreateTask />
                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard