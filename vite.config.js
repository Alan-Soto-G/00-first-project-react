import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/00-first-project-react/', // mismo nombre del repo
  plugins: [react()],
})