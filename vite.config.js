import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@assets/data', replacement: path.resolve(__dirname, './src/assets/data') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@common', replacement: path.resolve(__dirname, './src/common') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
    ],
  },
})
