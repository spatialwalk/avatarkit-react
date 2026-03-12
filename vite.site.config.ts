import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'public',
  resolve: {
    alias: [
      { find: '@/components', replacement: fileURLToPath(new URL('./src/lib/components', import.meta.url)) },
      { find: '@/hooks', replacement: fileURLToPath(new URL('./src/lib/hooks', import.meta.url)) },
      { find: '@/types', replacement: fileURLToPath(new URL('./src/lib/types', import.meta.url)) },
      { find: '@/lib', replacement: fileURLToPath(new URL('./src/lib', import.meta.url)) },
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
  build: {
    emptyOutDir: true,
    outDir: 'dist/site',
  },
})
