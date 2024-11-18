'use client';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ApiSidebar() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-lg font-medium text-gray-500">API</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="pl-2">
          <SidebarMenuButton asChild isActive={pathname === '/docs/page-tracker'}>
            <Link href="/docs/page-tracker">PageTracker</Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild isActive={pathname === '/docs/use-page-tracker-store'}>
            <Link href="/docs/use-page-tracker-store">usePageTrackerStore()</Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
