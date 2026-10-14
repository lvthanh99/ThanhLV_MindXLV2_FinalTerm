import AddTaskForm from '../AddTaskForm/AddTaskForm'
import TaskList from '../TaskList/TaskList'

function TaskTabContent({
  activeTab,
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  onDeleteCompletedTasks,
}) {
  const visibleTasks = tasks.filter((task) => {
    if (activeTab === 'active') return task.active
    if (activeTab === 'completed') return !task.active
    return true
  })
  const isCompletedTab = activeTab === 'completed'

  return (
    <section
      className="pt-4"
      role="tabpanel"
      aria-label={`${activeTab} tasks`}
    >
      {!isCompletedTab && <AddTaskForm onAddTask={onAddTask} />}
      <TaskList
        tasks={visibleTasks}
        showDelete={isCompletedTab}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
        onDeleteAll={onDeleteCompletedTasks}
      />
    </section>
  )
}

export default TaskTabContent
