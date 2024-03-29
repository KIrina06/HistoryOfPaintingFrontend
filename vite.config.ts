import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/HistoryOfPaintingFrontend/",
  plugins: [react()],
  server: { port: 3000, open: true },
  build: {outDir: "build", sourcemap: true}
})