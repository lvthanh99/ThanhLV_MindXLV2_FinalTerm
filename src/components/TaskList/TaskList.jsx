import { Button, Checkbox, Empty } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

function TaskList({
  tasks,
  showDelete,
  onToggleTask,
  onDeleteTask,
  onDeleteAll,
}) {
  if (tasks.length === 0) {
    return <Empty className="!my-10" description="No tasks" />
  }

  return (
    <>
      <ul className="m-0 flex list-none flex-col gap-4 p-0">
        {tasks.map((task) => (
          <li
            className="flex min-h-8 items-center justify-between gap-3"
            key={task.id}
          >
            <Checkbox
              checked={!task.active}
              onChange={() => onToggleTask(task.id)}
              className="min-w-0 flex-1 [&_.ant-checkbox+span]:break-words [&_.ant-checkbox+span]:text-base sm:[&_.ant-checkbox+span]:text-lg"
            >
              <span
                className={
                  task.active
                    ? 'text-neutral-800'
                    : 'text-neutral-500 line-through'
                }
              >
                {task.title}
              </span>
            </Checkbox>
            {showDelete && (
              <Button
                aria-label={`Delete ${task.title}`}
                className="!text-neutral-400 hover:!text-red-500"
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => onDeleteTask(task.id)}
              />
            )}
          </li>
        ))}
      </ul>
      {showDelete && (
        <div className="mt-7 flex justify-end">
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={onDeleteAll}
          >
            delete all
          </Button>
        </div>
      )}
    </>
  )
}

export default TaskList
