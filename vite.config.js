import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/leandracr-site/", // <-- A linha mais importante de todas
  plugins: [react()],
})