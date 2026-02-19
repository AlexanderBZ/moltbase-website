import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { buttonVariants } from "@/components/ui/button";

interface TeamsBannerProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

const TeamsBanner: React.FC<TeamsBannerProps> = ({
  title = "Teams & institutional plans",
  subtitle = "FOR TEAMS",
  description = "Collaborate with your research team and speed up your workflow.",
  buttonText = "Learn more",
  buttonHref = "/teams",
}) => {
  return (
    <div className="w-full bg-secondary py-20 rounded-2xl">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-primary-foreground text-sm font-medium mb-4">
          {subtitle}
        </p>
        <h2 className="text-primary-foreground text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-primary-foreground text-lg mb-8">{description}</p>

        <div className="flex justify-center">
          <Button className={buttonVariants({ variant: "secondary" })} asChild>
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamsBanner;
