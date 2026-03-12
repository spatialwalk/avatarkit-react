import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: false,
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
    lib: {
      entry: 'src/lib/index.ts',
      name: 'AvatarKitReact',
      fileName: 'avatarkit-react',
    },
    emptyOutDir: true,
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        '@spatialwalk/avatarkit',
        '@spatialwalk/avatarkit-rtc',
        'livekit-client',
      ],
      output: {
        globals: {
          '@spatialwalk/avatarkit': 'AvatarKit',
          '@spatialwalk/avatarkit-rtc': 'AvatarKitRtc',
          'livekit-client': 'LiveKitClient',
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    sourcemap: true,
  },
})
