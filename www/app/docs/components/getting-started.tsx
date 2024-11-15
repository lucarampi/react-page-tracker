import { SidebarMenuButton } from '@/components/ui/sidebar';
import Link from 'next/link';

export function GettingStarted() {
  return (
    <>
      <SidebarMenuButton className="pl-4" asChild>
        <Link href="/docs">Getting Started</Link>
      </SidebarMenuButton>
      <SidebarMenuButton className="border-t pl-4 pt-2" asChild>
        <Link href="/demo">Demo</Link>
      </SidebarMenuButton>
    </>
  );
}
