import * as React from "react";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { TopSidebar } from "@/components/layout/top-sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  sidebar_data,
  sidebar_about_data,
  sidebar_contact_data,
} from "@/commons/contants/sidebar";

type SidebarNavData = {
  navMain: {
    title: string;
    items: { title: string; url: string; isActive?: boolean }[];
  }[];
};

export function AppSidebar({
  link,
  ...props
}: Readonly<{
  link?: string;
}>) {
  const getSidebarData = (): SidebarNavData => {
    switch (link) {
      case "about":
        return sidebar_about_data;
      case "contact":
        return sidebar_contact_data;
      default:
        return sidebar_data;
    }
  };

  const { navMain } = getSidebarData();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <TopSidebar
          top_sidebar={sidebar_data.top_sidebar}
          defaultVersion="Home"
        />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((subItem) => (
                      <SidebarMenuItem key={subItem.title}>
                        <SidebarMenuButton asChild isActive={subItem.isActive}>
                          <Link href={subItem.url}>
                            {subItem.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
