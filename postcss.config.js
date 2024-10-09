import { defineConfig } from 'vite'

export default defineConfig ({
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        input: './index.html',
        entryFileNames: '[name].js',
      }
    }
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
})
