import { SidebarMenuButton } from '@/components/ui/sidebar';
import Link from 'next/link';

export function GettingStarted() {
  return (
    <SidebarMenuButton className="pl-4" asChild>
      <Link href="/docs">Getting Started</Link>
    </SidebarMenuButton>
  );
}
