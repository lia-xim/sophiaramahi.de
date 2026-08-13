import assert from "node:assert/strict";
import test from "node:test";
import { handleContactRequest } from "../src/lib/contact-handler.ts";

const now = Date.parse("2026-08-13T12:00:00.000Z");
const submissionId = "123e4567-e89b-42d3-a456-426614174000";
const validData = {
  name: "Release Test",
  email: "release-test@example.com",
  project: "Videoproduktion",
  message: "Das ist eine ausreichend lange und konkrete Projektanfrage.",
  firma: "",
  ts: String(now - 10_000),
  submissionId,
};

function request(fields = {}, headers = {}) {
  const body = new URLSearchParams({ ...validData, ...fields });
  return new Request("https://sophiaramahi.de/api/kontakt/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Origin: "https://sophiaramahi.de",
      "Sec-Fetch-Site": "same-origin",
      "X-Forwarded-For": "203.0.113.7",
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
    body,
  });
}

const env = (name) => ({
  RESEND_API_KEY: "re_test",
  CONTACT_TO: "info@sophiaramahi.de",
  CONTACT_FROM: "Website <website@sophiaramahi.de>",
})[name];

test("validiert und sendet eine Anfrage genau einmal mit Idempotency-Key", async () => {
  const calls = [];
  const response = await handleContactRequest(request(), {
    now: () => now,
    env,
    rateLimit: () => true,
    fetcher: async (url, init) => {
      calls.push({ url, init });
      return new Response(JSON.stringify({ id: "email_1" }), { status: 200 });
    },
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].init.headers["Idempotency-Key"], `contact_${submissionId}`);
  const payload = JSON.parse(calls[0].init.body);
  assert.equal(payload.reply_to, validData.email);
  assert.equal(payload.to[0], "info@sophiaramahi.de");
});

test("beantwortet Honeypot und zu schnelle Eingaben still ohne Versand", async () => {
  let sends = 0;
  const dependencies = {
    now: () => now,
    env,
    rateLimit: () => true,
    fetcher: async () => {
      sends += 1;
      return new Response(null, { status: 200 });
    },
  };
  const honeypot = await handleContactRequest(request({ firma: "Spambots GmbH" }), dependencies);
  const tooFast = await handleContactRequest(request({ ts: String(now - 500) }), dependencies);
  assert.equal(honeypot.status, 200);
  assert.equal(tooFast.status, 200);
  assert.equal(sends, 0);
});

test("weist Cross-Site-, falsche Content-Type- und übergroße Requests ab", async () => {
  const crossSite = await handleContactRequest(request({}, { Origin: "https://example.org" }), { now: () => now });
  const wrongType = await handleContactRequest(request({}, { "Content-Type": "application/json" }), { now: () => now });
  const tooLarge = await handleContactRequest(request({}, { "Content-Length": "16001" }), { now: () => now });
  assert.equal(crossSite.status, 400);
  assert.equal(wrongType.status, 415);
  assert.equal(tooLarge.status, 413);
});

test("weist Parameter-Pollution und ungültige Felder ab", async () => {
  const pollutedBody = new URLSearchParams(validData);
  pollutedBody.append("email", "zweite@example.com");
  const polluted = new Request("https://sophiaramahi.de/api/kontakt/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Origin: "https://sophiaramahi.de",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: pollutedBody,
  });
  const pollutedResponse = await handleContactRequest(polluted, { now: () => now });
  const invalidEmail = await handleContactRequest(request({ email: "keine-mail" }), { now: () => now });
  assert.equal(pollutedResponse.status, 400);
  assert.equal(invalidEmail.status, 400);
});

test("liefert bei Rate-Limit 429 mit Retry-After", async () => {
  const response = await handleContactRequest(request(), {
    now: () => now,
    env,
    rateLimit: () => false,
  });
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("retry-after"), "600");
  assert.deepEqual(await response.json(), { ok: false, error: "rate" });
});

test("mappt Resend-Ausfälle und klassische Form-Posts sauber", async () => {
  const resendFailure = await handleContactRequest(request(), {
    now: () => now,
    env,
    rateLimit: () => true,
    fetcher: async () => new Response(null, { status: 422 }),
  });
  assert.equal(resendFailure.status, 502);

  const htmlRequest = request({}, { Accept: "text/html" });
  const htmlSuccess = await handleContactRequest(htmlRequest, {
    now: () => now,
    env,
    rateLimit: () => true,
    fetcher: async () => new Response(null, { status: 200 }),
  });
  assert.equal(htmlSuccess.status, 303);
  assert.equal(htmlSuccess.headers.get("location"), "https://sophiaramahi.de/kontakt/danke/");
});
