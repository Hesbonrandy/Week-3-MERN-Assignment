# Task Manager Application

A responsive React application demonstrating component architecture, state management, hooks, and API integration.

## ✨ Features

- **Task Manager**
  - Add, complete, delete, and filter tasks (All / Active / Completed)
  - Tasks persist in `localStorage`
- **Public Posts Browser**
  - Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - Real-time search and "Load More" pagination
  - Loading and error states
- **UI/UX**
  - Fully responsive (mobile, tablet, desktop)
  - Light/dark mode toggle (persists across sessions)
  - Clean, accessible design with Tailwind CSS
- **Architecture**
  - Reusable components (`Button`, `Card`, `Navbar`, etc.)
  - Custom hook: `useLocalStorage`
  - Context API for theme management
  - React Router v6 for navigation

## 🛠️ Tech Stack

- React 18 + Vite
- Tailwind CSS v3.4
- React Router DOM v6
- JSONPlaceholder (public API)

## 🚀 Setup

Live Demo: [Task Manager App](https://hesbonrandy.github.io/Week-3-MERN-Assignment/)

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
