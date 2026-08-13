/* Responsive Bildauslieferung: baut srcset-Strings aus dem Varianten-
   Manifest (public/media/w480, w960 — erzeugt aus den Originalen).
   Mobilgeräte laden so ~480px- statt 1600px-Dateien; URLs und
   Original-Bilder (OG, JSON-LD, Poster) bleiben unverändert. */

import manifest from "../data/image-variants.json";

type VariantEntry = { original: number; variants: number[]; avif?: boolean };

const entries = manifest as Record<string, VariantEntry>;

/** srcset für ein /media/-Bild — undefined, wenn keine Varianten existieren. */
export function srcsetFor(src: string): string | undefined {
  if (!src.startsWith("/media/")) return undefined;
  const name = src.slice("/media/".length);
  const entry = entries[name];
  if (!entry || entry.variants.length === 0) return undefined;
  const candidates = entry.variants.map((width) => `/media/w${width}/${name} ${width}w`);
  candidates.push(`${src} ${entry.original}w`);
  return candidates.join(", ");
}

/** AVIF-srcset zum selben Bild — für die <source>-Zeile eines <picture>. */
export function avifSrcsetFor(src: string): string | undefined {
  if (!src.startsWith("/media/") || !src.endsWith(".jpg")) return undefined;
  const name = src.slice("/media/".length);
  const entry = entries[name];
  if (!entry?.avif) return undefined;
  const avifName = name.replace(/\.jpg$/, ".avif");
  const candidates = entry.variants.map((width) => `/media/w${width}/${avifName} ${width}w`);
  candidates.push(`/media/${avifName} ${entry.original}w`);
  return candidates.join(", ");
}
