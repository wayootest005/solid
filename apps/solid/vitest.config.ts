import { defineConfig } from 'vitest/config';

import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

export default defineConfig({
 
  plugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    tsconfigPaths({
      projects: ['./tsconfig.spec.json'],
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment

  ],
  test: {
    environment: 'jsdom',
    include: ['test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
