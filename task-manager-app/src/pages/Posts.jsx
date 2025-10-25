import { useState, useEffect, useCallback } from 'react'
import Card from '../components/Card'
import { fetchPosts } from '../utils/api'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [hasMore, setHasMore] = useState(true)

  const loadPosts = useCallback(async (pageNum, query) => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchPosts(pageNum, query)
      setPosts(prev => pageNum === 1 ? data : [...prev, ...data])
      setHasMore(data.length === 10)
    } catch (err) {
      setError(err.message || 'An error occurred')
      setHasMore(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    setPage(1)
    loadPosts(1, searchQuery)
  }, [searchQuery, loadPosts])

  const handleSearch = (e) => {
    e.preventDefault()
  }

  const loadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    loadPosts(nextPage, searchQuery)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Public Posts</h1>
      <Card>
        <form onSubmit={handleSearch} className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts by title or content..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 rounded">
            ❌ {error}
          </div>
        )}

        {loading && page === 1 && (
          <p className="text-center py-4 text-gray-600 dark:text-gray-400">Loading posts...</p>
        )}

        {posts.length > 0 ? (
          <ul className="space-y-5">
            {posts.map(post => (
              <li key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-5 last:border-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{post.body}</p>
              </li>
            ))}
          </ul>
        ) : !loading && !error && (
          <p className="text-center py-4 text-gray-500 dark:text-gray-400 italic">
            No posts found. Try a different search.
          </p>
        )}

        {!loading && hasMore && (
          <div className="mt-6 text-center">
            <button
              onClick={loadMore}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Load More
            </button>
          </div>
        )}

        {loading && page > 1 && (
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400">Loading more...</p>
        )}
      </Card>
    </div>
  )
}