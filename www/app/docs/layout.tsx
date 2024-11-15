import { DocSidebar } from '@/app/docs/components/doc-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DocSidebar />
      <main className="max-w-full">
        <SidebarTrigger />
        <section className="p-10">{children}</section>
      </main>
    </SidebarProvider>
  );
}
