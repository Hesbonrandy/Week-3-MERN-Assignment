import { useState, useMemo } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all')

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const filteredTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter(t => !t.completed)
    if (filter === 'completed') return tasks.filter(t => t.completed)
    return tasks
  }, [tasks, filter])

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Task Manager</h1>
      <Card>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {['all', 'active', 'completed'].map(f => (
            <Button
              key={f}
              variant={filter === f ? 'primary' : 'secondary'}
              onClick={() => setFilter(f)}
              className="capitalize"
            >
              {f}
            </Button>
          ))}
        </div>

        <ul className="space-y-2">
          {filteredTasks.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 italic">No tasks found.</p>
          ) : (
            filteredTasks.map(task => (
              <li key={task.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span
                  onClick={() => toggleTask(task.id)}
                  className={`cursor-pointer flex-1 ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}
                >
                  {task.text}
                </span>
                <Button variant="danger" onClick={() => deleteTask(task.id)} className="ml-2">
                  Delete
                </Button>
              </li>
            ))
          )}
        </ul>
      </Card>
    </div>
  )
}