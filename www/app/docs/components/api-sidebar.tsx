import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Link from 'next/link';

export function ApiSidebar() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-lg font-medium text-gray-500">API</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="pl-2">
          <SidebarMenuButton asChild>
            <Link href="/docs/page-tracker">PageTracker</Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Link href="/docs/use-page-tracker-store">usePageTrackerStore()</Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
