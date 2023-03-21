import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/stats-preview-card-component-main/`,
  plugins: [react()],
})
