import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const noindexPages = new Set(["/impressum/", "/datenschutz/"]);

export default defineConfig({
  site: "https://sophiaramahi.de",
  output: "static",
  adapter: vercel(),
  integrations: [
    sitemap({
      // Alle 16 Standortseiten tragen seit den Stadtprofilen eigene,
      // individuelle Inhalte und gehören damit in die Sitemap.
      filter: (page) => !noindexPages.has(new URL(page).pathname),
    }),
  ],
  trailingSlash: "always",
  compressHTML: true,
  build: { inlineStylesheets: "auto" },
  vite: { build: { cssMinify: "lightningcss" } },
});
