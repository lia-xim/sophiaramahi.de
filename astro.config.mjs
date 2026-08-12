import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const noindexPages = new Set(["/impressum/", "/datenschutz/"]);
const indexableLocations = new Set(["/standorte/duesseldorf/", "/standorte/koeln/"]);

export default defineConfig({
  site: "https://sophiaramahi.de",
  output: "static",
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        if (noindexPages.has(pathname)) return false;
        if (/^\/standorte\/[^/]+\/$/.test(pathname)) return indexableLocations.has(pathname);
        return true;
      },
    }),
  ],
  trailingSlash: "always",
  compressHTML: true,
  build: { inlineStylesheets: "auto" },
  vite: { build: { cssMinify: "lightningcss" } },
});
