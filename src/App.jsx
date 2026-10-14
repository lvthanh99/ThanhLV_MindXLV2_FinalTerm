import { useState } from 'react'
import TaskTabContent from './components/TaskTabs/TaskTabContent'
import TaskTabs from './components/TaskTabs/TaskTabs'

const initialTasks = [
  { id: 'task-1', title: 'Do coding challenges', active: true },
  { id: 'task-2', title: 'Do coding challenges', active: true },
  { id: 'task-3', title: 'Do coding challenges', active: false },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [activeTab, setActiveTab] = useState('all')

  function addTask(title) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: crypto.randomUUID(), title, active: true },
    ])
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, active: !task.active } : task,
      ),
    )
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
  }

  function deleteCompletedTasks() {
    setTasks((currentTasks) => currentTasks.filter((task) => task.active))
  }

  return (
    <main className="mx-auto min-h-screen w-[min(100%-2rem,44rem)] py-8 sm:py-10">
      <h1 className="mb-9 text-center text-[2.5rem] font-bold leading-tight text-neutral-800 sm:mb-12 sm:text-5xl">
        #todo
      </h1>

      <TaskTabs activeTab={activeTab} onChange={setActiveTab} />
      <TaskTabContent
        key={activeTab}
        activeTab={activeTab}
        tasks={tasks}
        onAddTask={addTask}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onDeleteCompletedTasks={deleteCompletedTasks}
      />
    </main>
  )
}

export default App
