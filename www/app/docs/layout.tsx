import { DocSidebar } from '@/app/docs/components/doc-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AdDocBottom from '@/components/ad/ad-doc-bottom';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DocSidebar />
      <main className="max-w-full">
        <SidebarTrigger />
        <section className="p-10">
          {children} <AdDocBottom />
        </section>
      </main>
    </SidebarProvider>
  );
}
