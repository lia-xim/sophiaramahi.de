/* Dünne Astro-Route. Validierung, Spam-Schutz und Versandlogik liegen in
   lib/contact-handler.ts und sind dort ohne echten Resend-Versand testbar. */

import type { APIRoute } from "astro";
import { handleContactRequest } from "../../lib/contact-handler";

export const prerender = false;

export const POST: APIRoute = ({ request }) => handleContactRequest(request);

/* Alles außer POST ist hier nicht vorgesehen. */
export const ALL: APIRoute = () =>
  new Response(null, {
    status: 405,
    headers: { Allow: "POST", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });
