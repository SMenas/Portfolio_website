import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
export default defineConfig({
  devToolbar: {
    enabled: false},

  site: 'https://lexingtonthemes.com',
  integrations: [tailwind(),  sitemap()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});