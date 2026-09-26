import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Le site est servi depuis https://<user>.github.io/lecture-fluence/
  base: '/lecture-fluence/',
})
