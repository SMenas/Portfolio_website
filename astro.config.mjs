import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  devToolbar: {
    enabled: false},
   site: 'https://lexingtonthemes.com',
  integrations: [tailwind(),  sitemap()]
});
