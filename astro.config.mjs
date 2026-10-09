import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { articles } from "./src/data/site.ts";

const noindexPages = new Set(["/impressum/", "/datenschutz/", "/kontakt/danke/"]);
const articleDates = new Map(articles.map((article) => [
  `/journal/${article.slug}/`,
  article.updatedAt ?? article.publishedAt,
]));

export default defineConfig({
  site: "https://sophiaramahi.de",
  output: "static",
  adapter: vercel(),
  integrations: [
    sitemap({
      // Alle 16 Standortseiten tragen seit den Stadtprofilen eigene,
      // individuelle Inhalte und gehören damit in die Sitemap.
      filter: (page) => !noindexPages.has(new URL(page).pathname),
      serialize: (item) => {
        const modifiedAt = articleDates.get(new URL(item.url).pathname);
        return modifiedAt ? { ...item, lastmod: new Date(modifiedAt) } : item;
      },
    }),
  ],
  trailingSlash: "always",
  compressHTML: true,
  build: { inlineStylesheets: "auto" },
  vite: { build: { cssMinify: "lightningcss" } },
});
