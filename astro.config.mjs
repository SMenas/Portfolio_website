import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import netlify from '@astrojs/netlify/functions';  // This line was likely the issue

export default defineConfig({
  devToolbar: {
    enabled: false},
  integrations: [tailwind(),  sitemap()],
  output: "server",
  adapter: netlify()  // Make sure this matches the import above
});