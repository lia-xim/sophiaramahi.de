/* Erzeugt die Bildvarianten der Website und das Manifest dazu.
   Idempotent: Nur fehlende oder veraltete Ableitungen werden gebaut.

   Je Original (public/media/<name>.jpg):
     - JPEG-Resizes  public/media/w480|w960/<name>.jpg   (nur wenn schmaler als Original)
     - AVIF-Zwilling public/media/<name>.avif            (volle Breite)
     - AVIF-Resizes  public/media/w480|w960/<name>.avif

   Manifest: src/data/image-variants.json
     { "<name>.jpg": { original: <Breite>, variants: [480, 960], avif: true } }

   Aufruf: node scripts/build-image-variants.mjs
   Voraussetzung: ffmpeg/ffprobe im PATH (libaom-av1 für AVIF). */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MEDIA = new URL("../public/media/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const MANIFEST = new URL("../src/data/image-variants.json", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const WIDTHS = [480, 960];
const JPEG_Q = "4"; // ffmpeg mjpeg qscale ≈ visuell q80
const AVIF_CRF = "28"; // konservativ — keine sichtbaren Verluste, ~50 % kleiner als JPEG

const widthOf = (file) =>
  Number(
    execFileSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width", "-of", "csv=p=0", file], {
      encoding: "utf8",
    }).trim()
  );

const outdated = (src, out) => !existsSync(out) || statSync(out).mtimeMs < statSync(src).mtimeMs;

const encode = (src, out, args) => {
  if (!outdated(src, out)) return false;
  execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", "-i", src, ...args, out], { stdio: "inherit" });
  return true;
};

for (const w of WIDTHS) mkdirSync(join(MEDIA, `w${w}`), { recursive: true });

const manifest = {};
let built = 0;

for (const name of readdirSync(MEDIA).filter((f) => f.endsWith(".jpg")).sort()) {
  const src = join(MEDIA, name);
  const original = widthOf(src);
  const variants = [];

  for (const w of WIDTHS) {
    if (w >= original) continue;
    variants.push(w);
    const jpgOut = join(MEDIA, `w${w}`, name);
    if (encode(src, jpgOut, ["-vf", `scale=${w}:-2`, "-q:v", JPEG_Q])) built++;
    const avifOut = jpgOut.replace(/\.jpg$/, ".avif");
    if (encode(src, avifOut, ["-vf", `scale=${w}:-2`, "-c:v", "libaom-av1", "-crf", AVIF_CRF, "-b:v", "0", "-cpu-used", "5", "-still-picture", "1"])) built++;
  }

  const avifFull = src.replace(/\.jpg$/, ".avif");
  if (encode(src, avifFull, ["-c:v", "libaom-av1", "-crf", AVIF_CRF, "-b:v", "0", "-cpu-used", "5", "-still-picture", "1"])) built++;

  manifest[name] = { original, variants, avif: true };
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`${Object.keys(manifest).length} Bilder im Manifest, ${built} Ableitungen neu gebaut.`);
