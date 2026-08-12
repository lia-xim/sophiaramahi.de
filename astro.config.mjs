import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://sophiaramahi.de",
  output: "static",
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !["https://sophiaramahi.de/impressum/", "https://sophiaramahi.de/datenschutz/"].includes(page) })],
  trailingSlash: "always",
  compressHTML: true,
  build: { inlineStylesheets: "auto" },
  vite: { build: { cssMinify: "lightningcss" } },
});
