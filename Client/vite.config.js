import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // otras opciones si tienes
  },
  // 👇 ESTA PARTE es lo importante
  server: {
    historyApiFallback: true
  }
})
