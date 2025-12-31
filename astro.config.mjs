import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://daniel-ives.com',
  output: 'static',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/tesla/daniel': 'https://ts.la/daniel395842',
    '/tesla/quincy': 'https://ts.la/quincy11390',
    '/tesla': 'https://ts.la/quincy11390'
  },
  prefetch: {
    prefetchAll: true, // Prefetch all links automatically for instant navigation
    defaultStrategy: "viewport", // Prefetch links when they enter the viewport
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@/": new URL("./src/", import.meta.url).pathname,
      },
    },
  },
});

