import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'node:url'

const entry = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  base: '/',
  plugins: [tsconfigPaths()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Multi-page app: base page + profession pages
      input: {
        main: entry('index.html'),
        csharp: entry('csharp.html'),
        analyst: entry('analyst.html'),
      },
      output: {
        assetFileNames: 'assets/[name][extname]',
        // [extname] is not valid for chunks; MPA produces shared chunks
        chunkFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: ``
      }
    }
  }
})
