import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Project is served from https://<user>.github.io/scenariotopia/ on GitHub
// Pages, so production builds need that path prefix; the dev server stays
// at the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/scenariotopia/' : '/',
  plugins: [react()],
}));
