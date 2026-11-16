import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

const root = path.dirname(fileURLToPath(import.meta.url));

// User site (root): https://ali-aliakbari.github.io — requires repo rename to Ali-AliAkbari.github.io
export default defineConfig({
  site: 'https://ali-aliakbari.github.io',
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
    '/project/': '/projects/',
    '/portfolio/': '/projects/',
  },
});