import { signInAction } from "@/lib/database-functions/auth-functions";
import { FormMessage, Message } from "@/components/auth/form-message";
import { SubmitButton } from "@/components/auth/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default async function Login(props: { searchParams: Promise<Message> }) {
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

      <h2 className="text-2xl font-bold mb-8">Welcome Back!</h2>

      <div className="bg-background p-8 rounded-lg w-[90%] max-w-md border border-border">
        {/* Social Sign-in Button */}
        {/* <button
          type="button"
          className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 rounded-lg mb-6"
        >
          <Image
            width={20}
            height={20}
            src="/svgs/google-logo.svg"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        <OrDivider /> */}

        <form action={signInAction} className="space-y-6">
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
            <Label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-lg border border-input"
            />
          </div>

          <div>
            <SubmitButton
              formAction={signInAction}
              pendingText="Signing In..."
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg"
            >
              Sign in
            </SubmitButton>
          </div>

          <FormMessage message={searchParams} />
        </form>

        <div className="text-center mt-4">
          <Link
            className="text-muted-foreground text-sm hover:underline"
            href="/sign-up"
          >
            {"Don't have an account? Sign Up"}
          </Link>
        </div>
      </div>

      <p className="mt-6 text-sm">
        <Link
          href="/forgot-password"
          className="text-muted-foreground hover:underline"
        >
          Forgot Password?
        </Link>
      </p>
    </div>
  );
}
