import {resolve} from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    root: "./packages/cli/",
    setupFiles: resolve(process.cwd(), './vitest.setup.ts'),
    coverage: {
      enabled: true,
      reporter: ["html", "text"],
      exclude: ["**/assets/", "**/coverage"]
    }
  },
});
