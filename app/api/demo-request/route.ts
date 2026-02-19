import { NextRequest, NextResponse } from "next/server";
import verifyTurnstile from "@/lib/cloudflare/verify-turnstile";
import { createDemoRequest } from "@/lib/database-functions/demo-functions";

export async function POST(req: NextRequest) {
  const data = await req.formData();

  // Where should we bounce back on failure?
  const referer = req.headers.get("referer") || "/";

  // Helper to redirect back with an error string
  const backWithError = (msg: string) =>
    NextResponse.redirect(
      new URL(`${referer}?error=${encodeURIComponent(msg)}`, req.url),
      303
    );

  const token = data.get("cf-turnstile-response")?.toString() ?? "";

  const remoteIp =
    req.headers.get("cf-connecting-ip") ?? // → Cloudflare
    req.headers.get("x-forwarded-for")?.split(",")[0] ?? // → generic proxy
    null;

  if (
    process.env.CAPTCHA_ENABLED === "true" &&
    (!token || !(await verifyTurnstile(token, remoteIp)))
  ) {
    return backWithError("Captcha verification failed. Try again.");
  }

  // Extract form fields according to form.tsx structure
  const name = data.get("name")?.toString().trim() ?? "";
  const work_email = data.get("work_email")?.toString().trim() ?? "";
  const company = data.get("company")?.toString().trim() ?? "";
  const job_title = data.get("job_title")?.toString().trim() ?? "";
  const team_size = data.get("team_size")?.toString().trim() ?? "";
  const use_case = data.get("use_case")?.toString().trim() ?? "";

  // Validate required fields
  if (!name || !work_email || !company || !job_title || !use_case) {
    return backWithError("Please fill out all required fields.");
  }

  try {
    // Create demo request using the IDemoSubmission structure
    const result = await createDemoRequest({
      name,
      work_email: work_email,
      company,
      job_title: job_title,
      team_size: team_size || undefined, // Only include if provided
      use_case: use_case || "", // Only include if provided
    });

    // If null is returned, the request failed
    if (!result) {
      return backWithError("You've already submitted a demo request – thanks!");
    }

    /* Happy path -> confirmation page */
    return NextResponse.redirect(new URL("/confirmation", req.url), 303);
  } catch (err) {
    console.error("Demo route error:", err);
    return backWithError("Something went wrong. Please try again.");
  }
}
