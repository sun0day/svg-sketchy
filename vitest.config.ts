import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 10000,
    root: './packages/cli/',
    setupFiles: resolve(process.cwd(), './vitest.setup.ts'),
    coverage: {
      enabled: true,
      reporter: ['html', 'text'],
      exclude: ['**/assets/', '**/coverage'],
    },
  },
})
