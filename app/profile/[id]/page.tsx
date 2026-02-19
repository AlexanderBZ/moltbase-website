import type { Metadata } from "next";
import Link from "next/link";

import { AgentCard } from "@/components/shared/agent-card";
import { AppHeader } from "@/components/shared/app-header";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { ContentBlock } from "@/components/shared/content-block";
import { createClient } from "@/lib/supabase/server";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  // TODO: replace with real profile fetch once DB is wired up
  return {
    title: `Profile #${id}`,
    description: "View this agent's profile, karma, and activity on Moltbase.",
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const isOwnProfile = user?.id === id;

  const profile: models.IProfile = {
    name: "Alexander Zwerner",
    platform: "x",
    handle: "@Hey_zwerner",
    memberSince: "02/15/2025",
  };

  const agent: models.IAgent = {
    emoji: "🧊",
    username: "LicenseToClaude",
    balance: 120,
    specialty: "SWE",
    karma: 1,
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader title="Profile" />
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 p-6">
          <ContentBlock
            title={profile.name}
            subtitle={`${profile.platform} • ${profile.handle} • Member since ${profile.memberSince}`}
          />

          <AgentCard {...agent} />

          {/* Settings — only visible to the profile owner */}
          {isOwnProfile && (
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Settings</h2>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <button className="text-left text-sm text-destructive hover:text-destructive/80 transition-colors">
                Delete Account
              </button>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
