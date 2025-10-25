import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
        TaskApp
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:underline">
          Tasks
        </Link>
        <Link to="/posts" className="text-gray-700 dark:text-gray-300 hover:underline">
          Posts
        </Link>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}