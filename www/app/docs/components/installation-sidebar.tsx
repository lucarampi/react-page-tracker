'use client';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function InstallationSidebar() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-lg font-medium text-gray-500">
        Installation
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="pl-2">
          <SidebarMenuButton asChild isActive={pathname === '/docs/nextjs'}>
            <Link href="/docs/nextjs">Next.js</Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild isActive={pathname === '/docs/remix'}>
            <Link href="/docs/remix">Remix</Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
