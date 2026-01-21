import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/StudyHub-Notes-platform/',
  server: {

    proxy: {
      '/api': "http://localhost:3000"
    }
  },
  plugins: [react()],

})
