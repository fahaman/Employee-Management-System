import { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext)

  // Find latest employee data from context using email
  const currentEmployee = userData?.find(emp => emp.email === props.data?.email) || props.data

  const handleTaskAction = (taskIndex, actionType) => {
    if (!userData || !currentEmployee) return

    const updatedUserData = userData.map((emp) => {
      if (emp.email === currentEmployee.email) {
        const updatedTasks = [...emp.tasks]
        const task = { ...updatedTasks[taskIndex] }
        const counts = { ...emp.taskCounts }

        if (actionType === 'accept') {
          if (task.newTask) {
            task.newTask = false
            task.active = true
            counts.newTask = Math.max(0, (counts.newTask || 0) - 1)
            counts.active = (counts.active || 0) + 1
          }
        } else if (actionType === 'complete') {
          if (task.active) {
            task.active = false
            task.completed = true
            counts.active = Math.max(0, (counts.active || 0) - 1)
            counts.completed = (counts.completed || 0) + 1
          }
        } else if (actionType === 'fail') {
          if (task.active) {
            task.active = false
            task.failed = true
            counts.active = Math.max(0, (counts.active || 0) - 1)
            counts.failed = (counts.failed || 0) + 1
          }
        }

        updatedTasks[taskIndex] = task
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: counts
        }
      }
      return emp
    })

    setUserData(updatedUserData)
  }

  return (
    <div className='min-h-screen w-full p-4 sm:p-8 lg:p-10 bg-[#0e2f44] text-[#d6cbc4]'>
      <div className='max-w-7xl mx-auto'>
        <Header changeUser={props.changeUser} data={currentEmployee} />
        <TaskListNumbers data={currentEmployee} />
        <TaskList data={currentEmployee} onTaskAction={handleTaskAction} />
      </div>
    </div>
  )
}

export default EmployeeDashboard