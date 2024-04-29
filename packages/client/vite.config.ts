import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      formats: ['iife'],
      entry: resolve(fileURLToPath(import.meta.url), '../src/main.ts'),
      name: 'SVG_SKETCHY',
      // the proper extensions will be added
      fileName: 'svg-sketchy',
    },
  },
})
