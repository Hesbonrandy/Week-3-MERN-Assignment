import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'tailwindcss',
      apply: 'postcss',
      enforce: 'pre',
      transform(code, id) {
        if (id.endsWith('.css')) {
          return code
        }
      }
    }
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss('./tailwind.config.cjs'),
        require('autoprefixer')
      ]
    }
  }
})