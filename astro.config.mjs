import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  redirects: {
    '/tesla/daniel': 'https://ts.la/daniel395842',
    '/tesla/quincy': 'https://ts.la/quincy11390',
    '/tesla': 'https://ts.la/quincy11390'
    },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
});

