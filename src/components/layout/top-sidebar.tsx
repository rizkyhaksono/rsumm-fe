"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type TopSidebarItem = {
  title: string;
  url: string;
};

export function TopSidebar({
  top_sidebar,
  defaultVersion,
}: Readonly<{
  top_sidebar: TopSidebarItem[];
  defaultVersion: string;
}>) {
  const router = useRouter();
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);

  const handleSelect = (item: TopSidebarItem) => {
    setSelectedVersion(item.title); // Update the selected version
    router.push(item.url); // Navigate to the selected URL
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                <Image
                  src="/rsumm.png"
                  alt="Rumah Sakit UMM"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Rumah Sakit UMM</span>
                <span className="">{selectedVersion}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width]"
            align="start"
          >
            {top_sidebar.map((item) => (
              <DropdownMenuItem
                key={item.title}
                onSelect={() => handleSelect(item)}
              >
                {item.title}{" "}
                {item.title === selectedVersion && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
