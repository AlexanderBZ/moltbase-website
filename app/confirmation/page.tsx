import Image from "next/image";
import Link from "next/link";
import SlimHeader from "@/components/shared/slim-header";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConfirmationPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <SlimHeader />

      {/* Main */}
      <div className="absolute inset-0 flex w-full flex-col items-center justify-center gap-6 px-4 text-center">
        <Image
          src="/svgs/app-icon.svg"
          alt="Atlas View Icon"
          width={50}
          height={50}
          className="rounded-full"
        />

        <h1 className="text-xl font-medium">
          Thanks for requesting a demo of Atlas View!
        </h1>

        <p className="max-w-lg text-sm text-muted-foreground">
          We have received your demo request and our team will be in touch
          shortly. We will send further details to&nbsp;
          <span className="font-medium text-foreground">your work email</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            variant="default"
            className="min-w-[180px] bg-foreground text-background hover:bg-foreground/90"
          >
            <Link href="/" rel="noopener noreferrer">
              Visit Atlas View website
            </Link>
          </Button>
        </div>

        {/* Divider */}
        <div className="flex w-full max-w-lg items-center gap-4 pt-8">
          <hr className="flex-1 border-border" />
          <span className="text-xs text-muted-foreground">
            Follow us for updates
          </span>
          <hr className="flex-1 border-border" />
        </div>

        {/* Social links */}
        <nav className="flex gap-8">
          <Link
            href="https://www.linkedin.com/company/dreamer-labs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin size={24} strokeWidth={2} />
          </Link>

          <Link
            href="https://x.com/useatlasview"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Twitter size={24} strokeWidth={2} />
          </Link>

          <Link
            href="https://www.youtube.com/@useatlasview"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Youtube size={24} strokeWidth={2} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
