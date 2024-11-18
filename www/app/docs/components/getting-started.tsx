'use client';
import { SidebarMenuButton } from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function GettingStarted() {
  const pathname = usePathname();
  return (
    <>
      <SidebarMenuButton className="pl-4" asChild isActive={pathname === '/docs'}>
        <Link href="/docs">Getting Started</Link>
      </SidebarMenuButton>
      <SidebarMenuButton className="border-t pl-4 pt-2" asChild>
        <Link href="/demo">Demo</Link>
      </SidebarMenuButton>
    </>
  );
}
