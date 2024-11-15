import { Sidebar, SidebarFooter } from '@/components/ui/sidebar';
import { GettingStarted } from '@/app/docs/components/getting-started';
import Link from 'next/link';
import { ApiSidebar } from '@/app/docs/components/api-sidebar';
import { InstallationSidebar } from '@/app/docs/components/installation-sidebar';

export function DocSidebar() {
  return (
    <Sidebar>
      <Link href="/" className="pl-2 pt-5 text-lg font-bold">
        React Page Tracker
      </Link>
      <GettingStarted />
      <InstallationSidebar />
      <ApiSidebar />
      <SidebarFooter />
    </Sidebar>
  );
}
