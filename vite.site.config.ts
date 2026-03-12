import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'public',
  build: {
    emptyOutDir: true,
    outDir: 'dist/site',
  },
})
