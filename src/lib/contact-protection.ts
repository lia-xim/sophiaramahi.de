type ProtectionDependencies = {
  env: (name: string) => string | undefined;
  fetcher: typeof fetch;
};

const blockedEmails = ["rrsztjgs2296@hotmail.com", "robertgulledge51652@aol.com"];
const list = (value: string | undefined) => (value ?? "").split(",").map((item) => item.trim().toLowerCase()).filter(Boolean);

export function isBlockedContact(email: string, env: ProtectionDependencies["env"]) {
  return [...blockedEmails, ...list(env("CONTACT_BLOCKED_EMAILS"))].includes(email.trim().toLowerCase());
}

export async function verifyContactToken(token: FormDataEntryValue | null, { env, fetcher }: ProtectionDependencies): Promise<0 | 403 | 503> {
  const secret = env("TURNSTILE_SECRET_KEY");
  if (!secret) return 503;
  if (typeof token !== "string" || !token.trim() || token.length > 2048) return 403;
  try {
    const response = await fetcher("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) return 503;
    const result = await response.json();
    if (!result || typeof result !== "object") return 503;
    if (result["error-codes"]?.some?.((code: string) => ["missing-input-secret", "invalid-input-secret", "internal-error"].includes(code))) return 503;
    const hostnames = ["sophiaramahi.de", "www.sophiaramahi.de", ...list(env("CONTACT_ALLOWED_HOSTNAMES"))];
    if (result.success !== true || result.action !== "contact" || !hostnames.includes(result.hostname)) return 403;
    return 0;
  } catch {
    return 503;
  }
}
