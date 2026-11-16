import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

const root = path.dirname(fileURLToPath(import.meta.url));

// Optional preview repo only. Live site: Ali-AliAkbari.github.io (no base path).
export default defineConfig({
  site: 'https://ali-aliakbari.github.io',
  base: '/ali-akbari-site',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(root, 'src'),
      },
    },
  },
  redirects: {
    '/about/': '/',
    '/about.html': '/',
    '/Project/': '/projects/',
    '/portfolio/': '/projects/',
  },
});