import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/cmd.ts', 'src/runner.ts'],
  format: ['esm', 'cjs'],
  target: ['node18'],
  splitting: false,
  sourcemap: false,
  clean: true,
})
