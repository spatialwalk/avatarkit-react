import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: false,
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
