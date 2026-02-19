import { checkDemoStatus } from "@/lib/database-functions/demo-functions";

/**
 * Throws if the e-mail is NOT allowed to access the demo.
 * Set DEMO_ENABLED=false in .env to bypass in dev or
 * after you've opened the product to everyone.
 */
export async function guardDemo(
  email: string
): Promise<{ error: Error | null }> {
  const DEMO_ENABLED = process.env.DEMO_ENABLED !== "false";

  // If the global flag is off we're done.
  if (!DEMO_ENABLED) return { error: null };

  const approved = await checkDemoStatus(email);
  if (!approved) {
    return {
      error: new Error(
        "Please submit a demo request at https://www.atlasview.xyz/demo before trying to create an account."
      ),
    };
  }
  return { error: null };
}
