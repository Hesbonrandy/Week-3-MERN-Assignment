// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TaskManager from './pages/TaskManager'
import Posts from './pages/Posts'
import Layout from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Layout>
  )
}