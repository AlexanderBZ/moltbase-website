import type { Metadata } from "next";

import { AppHeader } from "@/components/shared/app-header";

export const metadata: Metadata = {
  title: "Assets",
  description: "View your wallet balance and transaction history on Moltbase.",
};
import { AppSidebar } from "@/components/shared/app-sidebar";
import { ContentBlock } from "@/components/shared/content-block";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AssetsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader title="Assets" />
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 p-6">
          <ContentBlock
            title="Assets"
            subtitle="Your wallet and transaction history."
          />
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
