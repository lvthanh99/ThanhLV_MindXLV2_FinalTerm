import { useState } from 'react'
import { Button, Input } from 'antd'

function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')

  function submitTask(event) {
    event.preventDefault()
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    onAddTask(trimmedTitle)
    setTitle('')
  }

  return (
    <form
      className="mb-5 flex w-full items-start gap-3 sm:gap-5"
      onSubmit={submitTask}
    >
      <Input
        aria-label="Add details"
        className="!h-[52px] min-w-0 flex-1 !rounded-lg !px-3"
        placeholder="add details"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Button
        className="!h-[52px] !w-[76px] !shrink-0 !rounded-lg !px-4 sm:!w-[90px]"
        type="primary"
        htmlType="submit"
      >
        Add
      </Button>
    </form>
  )
}

export default AddTaskForm
