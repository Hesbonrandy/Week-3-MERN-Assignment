export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center text-gray-600 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Task Manager App</p>
    </footer>
  )
}