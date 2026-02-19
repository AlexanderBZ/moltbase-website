import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { buttonVariants } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground px-5 lg:px-0 py-10 rounded-2xl my-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* First Column */}
          <div>
            <h2 className="text-2xl mb-4">Atlas View</h2>
            <p className="text-muted-foreground mb-4">
              Build what matters most
            </p>
            <Button
              className={buttonVariants({ variant: "secondary" })}
              asChild
            >
              <Link href="/demo">Get A Demo</Link>
            </Button>
          </div>

          {/* Resources & Company */}
          <section className="flex flex-col md:flex-row mt-10 lg:mt-0 gap-8 md:gap-32 lg:mr-10">
            <div>
              <h2 className="text-xl mb-4">Resources</h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about-us"
                    className="text-muted-foreground hover:text-primary-foreground transition duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:alexander@dreamerlabs.xyz?subject=Atlas%20View%20Support%20Request&body=Hello%2C%20I%20need%20help%20with%20Atlas%20View..."
                    className="text-muted-foreground hover:text-primary-foreground transition duration-300"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-primary-foreground transition duration-300"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl mb-4">Company</h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://x.com/useatlasview"
                    className="text-muted-foreground hover:text-primary-foreground transition duration-300"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/master-plan"
                    className="text-muted-foreground hover:text-primary-foreground transition duration-300"
                  >
                    Master Plan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/culture"
                    className="text-muted-foreground hover:text-primary-foreground transition duration-300"
                  >
                    Culture
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-muted-foreground">
          <p className="text-muted-foreground">Copyright © Dreamer Labs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
