/* Lokaler Vorschauserver fuer die Konzeptansichten aus Phase 1.
 *
 *   node tools/preview-server.mjs           -> http://127.0.0.1:4321/
 *   node tools/preview-server.mjs --open    -> zusaetzlich Browser oeffnen
 *   PORT=5000 node tools/preview-server.mjs
 *
 * Ist der Port belegt, wird automatisch der naechste freie genommen.
 *
 * Serviert ausschliesslich design/concepts/ und bindet nur auf 127.0.0.1.
 * Wird in Phase 2 durch `npm run dev` von Astro abgeloest.
 */

import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../design/site", import.meta.url)));
const port = Number(process.env.PORT ?? 4321);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff2": "font/woff2",
};

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", "http://127.0.0.1");
    let rel = decodeURIComponent(url.pathname);
    if (rel.endsWith("/")) rel += "index.html";

    const file = resolve(join(root, normalize(rel)));
    if (file !== root && !file.startsWith(root + "\\") && !file.startsWith(root + "/")) {
      res.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    const info = await stat(file);
    if (info.isDirectory()) {
      res.writeHead(302, { location: rel.replace(/\/?$/, "/") });
      res.end();
      return;
    }

    res.writeHead(200, {
      "content-type": types[extname(file).toLowerCase()] ?? "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    res.end(
      '<!doctype html><meta charset="utf-8"><title>404</title>' +
        '<body style="background:#050506;color:#f4f2f5;font:16px system-ui;padding:48px">' +
        '<p>Nicht gefunden. <a style="color:#8faaff" href="/">Zur Konzeptuebersicht</a></p>'
    );
  }
});

/* Belegten Port nicht als Fehler behandeln, sondern den naechsten freien
   nehmen. Mit --open geht danach der Standardbrowser auf. */
const openBrowser = process.argv.includes("--open");

// Genau einmal registriert, damit ein Port-Wechsel keine zweite Meldung
// erzeugt. Gemeldet wird der tatsaechlich gebundene Port.
server.once("listening", () => {
  const url = `http://127.0.0.1:${server.address().port}/`;
  console.log("");
  console.log(`  sophiaramahi.de laeuft: ${url}`);
  console.log(`  Wurzel: ${root}`);
  console.log("");
  console.log("  Zum Beenden: Strg+C oder dieses Fenster schliessen.");
  console.log("");

  if (openBrowser) {
    const command =
      process.platform === "win32"
        ? ["cmd", ["/c", "start", "", url]]
        : process.platform === "darwin"
          ? ["open", [url]]
          : ["xdg-open", [url]];
    spawn(command[0], command[1], { stdio: "ignore", detached: true }).unref();
  }
});

const listen = (candidate, attemptsLeft) => {
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && attemptsLeft > 0) {
      console.log(`Port ${candidate} ist belegt, versuche ${candidate + 1} ...`);
      listen(candidate + 1, attemptsLeft - 1);
      return;
    }
    console.error(`Server konnte nicht starten: ${error.message}`);
    process.exit(1);
  });

  server.listen(candidate, "127.0.0.1");
};

listen(port, 10);
