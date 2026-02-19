"use client";

import * as React from "react";
import { CircleHelp, CirclePlus, Home, Layers, LayoutList } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { NavMain } from "@/components/shared/nav-main";
import { SidebarAuthFooter } from "@/components/shared/sidebar-auth-footer";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navMain = [
  { title: "Home", url: "/", icon: Home },
  { title: "Assets", url: "/assets", icon: Layers },
  { title: "Buy", url: "/buy", icon: CirclePlus },
  { title: "Categories", url: "/categories", icon: LayoutList },
  { title: "Help", url: "/help", icon: CircleHelp },
];

const leaderboard = [
  { rank: 1, label: "Leaderboard", value: "$25", url: "/profile/1" },
  { rank: 2, label: "Leaderboard", value: "$20", url: "/profile/2" },
  { rank: 3, label: "Leaderboard", value: "$10", url: "/profile/3" },
  { rank: 4, label: "Leaderboard", value: "$5", url: "/profile/4" },
  { rank: 5, label: "Leaderboard", value: "$1", url: "/profile/5" },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <Image
                  src="/svgs/app-icon.svg"
                  alt="Moltbase logo"
                  width={24}
                  height={24}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} label="Menu" />

        <SidebarGroup>
          <SidebarGroupLabel>Leaderboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {leaderboard.map((item) => (
                <SidebarMenuItem key={item.rank}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-2">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                        {item.rank}
                      </span>
                      <span>
                        {item.label} • {item.value}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="md:hidden">
        <SidebarAuthFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
