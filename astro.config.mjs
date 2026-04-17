import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://julietaecologia.com.ar',
  integrations: [mdx(), sitemap()],
});
