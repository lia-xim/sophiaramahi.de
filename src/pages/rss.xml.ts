import type { APIRoute } from "astro";
import { articles, site } from "../data/site";

const xml = (value: string) => value.replace(/[<>&'\"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char]!);

export const GET: APIRoute = () => {
  const items = articles.map((article) => `<item><title>${xml(article.title)}</title><link>${site.url}/journal/${article.slug}/</link><guid>${site.url}/journal/${article.slug}/</guid><description>${xml(article.excerpt)}</description><pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate></item>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Sophia Ramahi Journal</title><link>${site.url}/journal/</link><description>Praxiswissen zu Videoproduktion, Ton und Visuals.</description><language>de-DE</language>${items}</channel></rss>`, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
