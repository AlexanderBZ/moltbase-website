import { forgotPasswordAction } from "@/lib/database-functions/auth-functions";
import { FormMessage, Message } from "@/components/auth/form-message";
import { SubmitButton } from "@/components/auth/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex flex-col justify-center items-center gap-[20px] w-screen h-screen mx-auto">
      {/* App Logo */}
      <Image
        src="/svgs/app-icon.svg"
        width={30}
        height={30}
        alt="App Logo"
        className="rounded-full"
      />

      <h2 className="text-3xl font-bold mb-8">Reset Password</h2>

      <div className="bg-background p-8 rounded-lg w-[90%] max-w-md border border-border">
        <p className="text-muted-foreground text-center mb-6">
          {
            "Enter your email address and we'll send you a link to reset your password."
          }
        </p>

        <form action={forgotPasswordAction} className="space-y-6">
          <div>
            <Label htmlFor="email" className="block text-sm font-medium mb-1">
              Email address
            </Label>
            <Input
              name="email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-input"
            />
          </div>

          <div>
            <SubmitButton
              formAction={forgotPasswordAction}
              pendingText="Sending..."
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg"
            >
              Reset Password
            </SubmitButton>
          </div>

          <FormMessage message={searchParams} />
        </form>
      </div>

      <p className="mt-6 text-sm">
        <Link href="/sign-in" className="text-muted-foreground hover:underline">
          Back to Sign In
        </Link>
      </p>
    </div>
  );
}
