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
        className="!h-14 min-w-0 flex-1 !rounded-lg !px-4 !text-base"
        placeholder="add details"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Button
        className="!h-14 !w-[76px] !shrink-0 !rounded-lg !px-4 !text-base sm:!w-[96px]"
        type="primary"
        htmlType="submit"
      >
        Add
      </Button>
    </form>
  )
}

export default AddTaskForm
