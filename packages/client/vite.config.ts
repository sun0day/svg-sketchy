import {defineConfig} from 'vite'
import {fileURLToPath} from 'node:url'
import {resolve} from 'node:path'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      formats: ['iife'],
       entry: resolve(fileURLToPath(import.meta.url), '../src/main.ts'),
      name: 'SVG_SKETCHY',
      // the proper extensions will be added
      fileName: 'svg-sketchy',
    }
  }
})
