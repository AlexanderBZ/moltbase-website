import { CircleUser } from "lucide-react";
import Link from "next/link";

import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export async function AppHeader({ title }: { title: string }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <span className="text-sm font-medium">{title}</span>
      </div>

      <div className="ml-auto hidden items-center gap-1 md:flex">
        {user ? (
          <Button variant="ghost" size="sm" asChild>
            <Link href="/profile">
              <CircleUser className="size-4" />
              Profile
            </Link>
          </Button>
        ) : (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/sign-in">Log In</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
