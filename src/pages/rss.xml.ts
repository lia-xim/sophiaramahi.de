import type { APIRoute } from "astro";
import { articles, site } from "../data/site";

const xml = (value: string) => value.replace(/[<>&'\"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char]!);

export const GET: APIRoute = () => {
  const items = articles.map((article) => `<item><title>${xml(article.title)}</title><link>${site.url}/journal/${article.slug}/</link><guid isPermaLink="true">${site.url}/journal/${article.slug}/</guid><description>${xml(article.excerpt)}</description><pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate></item>`).join("");
  const lastBuildDate = new Date(Math.max(...articles.map((article) => new Date(article.publishedAt).getTime()))).toUTCString();
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Sophia Ramahi Journal</title><link>${site.url}/journal/</link><atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml"/><description>Praxiswissen zu Videoproduktion, Ton und Visuals.</description><language>de-DE</language><lastBuildDate>${lastBuildDate}</lastBuildDate>${items}</channel></rss>`, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
