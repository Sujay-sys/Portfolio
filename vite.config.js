import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { splitVendorChunkPlugin } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(), 
    tailwindcss(),
    splitVendorChunkPlugin() // Automatically handles third-party chunks safely
  ]
})