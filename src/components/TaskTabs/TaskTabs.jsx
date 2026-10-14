import { Tabs } from 'antd'

const tabs = [
  { key: 'all', label: 'All', children: null },
  { key: 'active', label: 'Active', children: null },
  { key: 'completed', label: 'Completed', children: null },
]

function TaskTabs({ activeTab, onChange }) {
  return (
    <Tabs
      className="todo-tabs"
      activeKey={activeTab}
      items={tabs}
      onChange={onChange}
      animated={false}
    />
  )
}

export default TaskTabs
