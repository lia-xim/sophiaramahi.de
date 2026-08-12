import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = new URL("../dist/", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const origin = "https://sophiaramahi.de";
const failures = [];
const warnings = [];
const pages = new Map();
const indexableLocations = new Set(["/standorte/duesseldorf/", "/standorte/koeln/"]);

const walk = (directory) => {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith(".html")) {
      const relativePath = relative(root, path).split(sep).join("/");
      const route = relativePath === "index.html" ? "/" : relativePath === "404.html" ? "/404/" : `/${relativePath.replace(/index\.html$/, "")}`;
      pages.set(route, { html: readFileSync(path, "utf8"), inbound: 0 });
    }
  }
};

walk(root);
const content = (html, pattern) => html.match(pattern)?.[1]?.trim();
const sitemapPath = join(root, "sitemap-0.xml");
const robotsPath = join(root, "robots.txt");
const videoSitemapPath = join(root, "video-sitemap.xml");
for (const [path, label] of [[join(root, "sitemap-index.xml"), "sitemap-index.xml"], [sitemapPath, "sitemap-0.xml"], [robotsPath, "robots.txt"], [videoSitemapPath, "video-sitemap.xml"]]) {
  if (!existsSync(path)) failures.push(`${label} is missing`);
}

const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, "utf8") : "";
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]));
const robots = existsSync(robotsPath) ? readFileSync(robotsPath, "utf8") : "";
if (!robots.includes(`Sitemap: ${origin}/sitemap-index.xml`)) failures.push("robots.txt does not reference the canonical sitemap index");
if (!robots.includes(`Sitemap: ${origin}/video-sitemap.xml`)) failures.push("robots.txt does not reference the video sitemap");

for (const [route, page] of pages) {
  const { html } = page;
  const canonical = content(html, /<link rel="canonical" href="([^"]+)"/i);
  const expectedCanonical = `${origin}${route}`;
  const robotsMeta = content(html, /<meta name="robots" content="([^"]+)"/i);
  const noindex = robotsMeta?.toLowerCase().includes("noindex") ?? false;
  const title = content(html, /<title>(.*?)<\/title>/is);
  const description = content(html, /<meta name="description" content="([^"]*)"/i);
  const ogUrl = content(html, /<meta property="og:url" content="([^"]+)"/i);
  const ogImage = content(html, /<meta property="og:image" content="([^"]+)"/i);
  const ogImageAlt = content(html, /<meta property="og:image:alt" content="([^"]+)"/i);
  const twitterTitle = content(html, /<meta name="twitter:title" content="([^"]+)"/i);

  if (!title || !description) failures.push(`${route}: title or description missing`);
  if (!robotsMeta) failures.push(`${route}: robots meta missing`);
  if (canonical !== expectedCanonical) failures.push(`${route}: canonical is ${canonical || "missing"}, expected ${expectedCanonical}`);
  if (ogUrl !== canonical) failures.push(`${route}: og:url does not match canonical`);
  if (!ogImage?.startsWith(`${origin}/`)) failures.push(`${route}: absolute og:image missing`);
  if (!ogImageAlt) failures.push(`${route}: og:image:alt missing`);
  if (!twitterTitle) failures.push(`${route}: Twitter metadata missing`);
  if (title?.length > 65) warnings.push(`${route}: title is ${title.length} characters`);
  if (description?.length > 160) warnings.push(`${route}: description is ${description.length} characters`);

  const inSitemap = sitemapUrls.has(canonical);
  if (noindex && inSitemap) failures.push(`${route}: noindex URL appears in sitemap`);
  if (!noindex && route !== "/404/" && !inSitemap) failures.push(`${route}: indexable canonical missing from sitemap`);

  if (/^\/standorte\/[^/]+\/$/.test(route)) {
    if (indexableLocations.has(route) && noindex) failures.push(`${route}: approved location is noindex`);
    if (!indexableLocations.has(route) && !noindex) failures.push(`${route}: unproven location is indexable`);
  }

  const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (jsonBlocks.length === 0) failures.push(`${route}: JSON-LD missing`);
  for (const [, json] of jsonBlocks) {
    try { JSON.parse(json); } catch { failures.push(`${route}: invalid JSON-LD`); }
  }
  if (!html.includes('"@type":"WebPage"')) failures.push(`${route}: WebPage schema missing`);
  if (route !== "/" && route !== "/404/" && !["/impressum/", "/datenschutz/"].includes(route) && !html.includes('"@type":"BreadcrumbList"')) warnings.push(`${route}: breadcrumb schema missing`);

  for (const match of html.matchAll(/\bhref=(["'])(\/.*?)\1/gi)) {
    const target = match[2].split(/[?#]/)[0];
    if (pages.has(target)) pages.get(target).inbound += 1;
  }
}

for (const [route, page] of pages) {
  const robotsMeta = content(page.html, /<meta name="robots" content="([^"]+)"/i) ?? "";
  if (route !== "/" && route !== "/404/" && !robotsMeta.includes("noindex") && page.inbound === 0) failures.push(`${route}: indexable orphan page`);
}

const showreel = pages.get("/showreel/")?.html ?? "";
if (!showreel.includes('"@type":"VideoObject"')) failures.push("/showreel/: VideoObject schema missing");
if (existsSync(videoSitemapPath)) {
  const videoSitemap = readFileSync(videoSitemapPath, "utf8");
  for (const required of [`${origin}/showreel/`, `${origin}/media/showreel.mp4`, `${origin}/media/electric-lights-cover.jpg`]) {
    if (!videoSitemap.includes(required)) failures.push(`video-sitemap.xml is missing ${required}`);
  }
}

if (failures.length) {
  console.error(`Technical SEO QA failed with ${failures.length} problem(s):\n${failures.map((item) => `- ${item}`).join("\n")}`);
  process.exit(1);
}
if (warnings.length) console.warn(`Technical SEO QA warnings (${warnings.length}):\n${warnings.map((item) => `- ${item}`).join("\n")}`);
console.log(`Technical SEO QA passed: ${pages.size} HTML pages, ${sitemapUrls.size} sitemap canonicals, robots, social metadata, JSON-LD, location gates and orphan checks.`);
