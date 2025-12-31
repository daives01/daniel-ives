import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [mdx()],
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
  },
});

