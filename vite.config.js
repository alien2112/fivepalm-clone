import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Ensure correct asset paths when deployed to GitHub Pages
  base: '/fivepalm-clone/',
  plugins: [react()],
})
