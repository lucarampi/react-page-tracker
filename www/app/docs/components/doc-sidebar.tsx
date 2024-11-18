import { Sidebar, SidebarFooter } from '@/components/ui/sidebar';
import { GettingStarted } from '@/app/docs/components/getting-started';
import Link from 'next/link';
import { ApiSidebar } from '@/app/docs/components/api-sidebar';
import { InstallationSidebar } from '@/app/docs/components/installation-sidebar';
import { Logo } from '@/app/home-components/logo';
import React from 'react';
import BuyMeCoffee from '@/components/buy-me-coffee';

export function DocSidebar() {
  return (
    <Sidebar className="flex flex-col">
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-1 pl-2 pt-5 text-lg font-bold">
          <Logo width={28} height={28} />
          React Page Tracker
        </Link>
        <GettingStarted />
        <InstallationSidebar />
        <ApiSidebar />
      </div>
      <SidebarFooter>
        <BuyMeCoffee />
      </SidebarFooter>
    </Sidebar>
  );
}
