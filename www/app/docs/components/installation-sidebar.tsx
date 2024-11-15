import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Link from 'next/link';

export function InstallationSidebar() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-lg font-medium text-gray-500">
        Installation
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="pl-2">
          <SidebarMenuButton asChild>
            <Link href="/docs/nextjs">Next.js</Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Link href="/docs/remix">Remix</Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
