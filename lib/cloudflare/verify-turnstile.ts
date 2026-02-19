async function verifyTurnstile(token: string, ip: string | null) {
  const params = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY!,
    response: token,
    ...(ip ? { remoteip: ip } : {}),
  });

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    }
  );

  const data: { success: boolean } = await res.json();
  return data.success;
}

export default verifyTurnstile;
