import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingGetStarted = ({
  title,
  subtitle,
  buttonTitle = "Get Started",
  href = "/sign-up",
}: {
  title: string;
  subtitle: string;
  buttonTitle?: string;
  href?: string;
}) => {
  return (
    <div className="w-full bg-background py-20 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-secondary-foreground mb-8">{subtitle}</p>

        <Button asChild>
          <Link href={href}>{buttonTitle}</Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingGetStarted;
