export const fetchPosts = async (page = 1, search = '') => {
  const limit = 10
  const start = (page - 1) * limit
  let url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
  if (search.trim()) {
    url += `&q=${encodeURIComponent(search.trim())}`
  }
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}