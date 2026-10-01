import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Served under /flikk (proxied in from the portfolio site's vercel.json).
export default defineConfig({
  base: '/flikk/',
  plugins: [react()],
  // Emit into dist/flikk so the files physically live at the /flikk path.
  build: {
    outDir: 'dist/flikk',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
