import type { APIRoute } from "astro";

export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://sophiaramahi.de/showreel/</loc>
    <video:video>
      <video:thumbnail_loc>https://sophiaramahi.de/media/electric-lights-cover.jpg</video:thumbnail_loc>
      <video:title>Showreel von Sophia Ramahi</video:title>
      <video:description>Arbeiten aus Videografie, Kamera, Lichtgestaltung, Events und Live Visuals.</video:description>
      <video:content_loc>https://sophiaramahi.de/media/showreel.mp4</video:content_loc>
      <video:duration>48</video:duration>
      <video:publication_date>2024-11-19T16:43:21+00:00</video:publication_date>
    </video:video>
  </url>
</urlset>`,
  { headers: { "Content-Type": "application/xml; charset=utf-8" } },
);
