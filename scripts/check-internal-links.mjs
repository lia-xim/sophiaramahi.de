import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
const root = new URL("../dist/", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const htmlFiles = [];
const walk = (directory) => { for (const name of readdirSync(directory)) { const path = join(directory, name); if (statSync(path).isDirectory()) walk(path); else if (name.endsWith(".html")) htmlFiles.push(path); } };
walk(root);
const problems = [];
const titles = new Map();
const descriptions = new Map();
const internalTarget = (raw) => {
  const path = raw.split(/[?#]/)[0];
  if (!path.startsWith("/") || path.startsWith("//")) return null;
  if (path === "/") return join(root, "index.html");
  if (path.endsWith("/")) return join(root, path.slice(1), "index.html");
  const direct = join(root, path.slice(1));
  return existsSync(direct) ? direct : join(root, path.slice(1), "index.html");
};
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const label = relative(root, file);
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) problems.push(`${label}: expected exactly one h1, found ${h1Count}`);
  if (/lorem ipsum|todo|placeholder text/i.test(html)) problems.push(`${label}: placeholder copy found`);
  for (const img of html.match(/<img\b[^>]*>/gi) || []) if (!/\balt(?:\s|=|>)/.test(img)) problems.push(`${label}: image without alt attribute`);
  for (const [, href] of html.matchAll(/\bhref=["']([^"']+)["']/gi)) { const target = internalTarget(href); if (target && !existsSync(target)) problems.push(`${label}: broken internal href ${href}`); }
  for (const [, src] of html.matchAll(/\bsrc=["']([^"']+)["']/gi)) { const target = internalTarget(src); if (target && !existsSync(target)) problems.push(`${label}: missing asset ${src}`); }
  const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1]?.trim();
  if (!title) problems.push(`${label}: title missing`); else if (titles.has(title)) problems.push(`${label}: duplicate title with ${titles.get(title)}`); else titles.set(title, label);
  if (!description) problems.push(`${label}: meta description missing`); else if (descriptions.has(description)) problems.push(`${label}: duplicate description with ${descriptions.get(description)}`); else descriptions.set(description, label);
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) { try { JSON.parse(json); } catch { problems.push(`${label}: invalid JSON-LD`); } }
}
if (problems.length) { console.error(`QA failed with ${problems.length} problem(s):\n${problems.map((item) => `- ${item}`).join("\n")}`); process.exit(1); }
console.log(`QA passed: ${htmlFiles.length} HTML pages, internal links/assets, one h1, unique titles/descriptions and valid JSON-LD.`);
