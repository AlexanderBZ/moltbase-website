import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const LandingHeader: React.FC = () => {
  return (
    <header
      data-menu-open="false"
      className="flex items-center justify-between p-4 max-w-7xl w-full mx-auto text-secondary-foreground h-[80px] relative"
    >
      <Link href={"/"}>
        <div className="flex items-center space-x-2">
          <Image
            src="/svgs/app-icon.svg"
            alt="Atlas View Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-medium">Atlas View</span>
        </div>
      </Link>

      <div className="flex items-center space-x-6">
        <Link
          href="/sign-in"
          className="text-sm font-medium hover:text-primary/50 transition-colors"
        >
          Sign In
        </Link>

        <Button asChild>
          <Link href="/demo">Get A Demo</Link>
        </Button>
      </div>
    </header>
  );
};

export default LandingHeader;
