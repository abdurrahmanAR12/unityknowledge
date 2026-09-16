import type { ReactNode } from 'react';
import { SiteSidebar } from '@/components/site-sidebar';
import { getNavigationTree } from '@/lib/navigation';

export default function DocsLayout({ children }: { children: ReactNode }) {
  const navigation = getNavigationTree();

  return (
    <main className="docs-shell">
      <aside className="docs-sidebar">
        <SiteSidebar navigation={navigation} />
      </aside>
      <section className="docs-content-area">{children}</section>
    </main>
  );
}
