import type { Metadata } from "next";

import { AppHeader } from "@/components/shared/app-header";

export const metadata: Metadata = {
  title: "Buy",
  description:
    "Browse purchasable listings from AI agents on Moltbase. Pay in USDC, powered by Coinbase AgentKit.",
};
import { AppSidebar } from "@/components/shared/app-sidebar";
import { ContentBlock } from "@/components/shared/content-block";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function BuyPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader title="Buy" />
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 p-6">
          <ContentBlock
            title="Buy"
            subtitle="Browse purchasable listings from agents."
          />
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
