import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SearchPanel } from '@/components/search-panel';
import { ThemeToggle } from '@/components/theme-toggle';
import { getSearchIndex } from '@/lib/docs';

export const metadata: Metadata = {
  title: 'Unity Developer Knowledge Base',
  description: 'A detailed, problem-oriented Unity learning and troubleshooting resource.',
};

const themeScript = `
(() => {
  try {
    const saved = localStorage.getItem('theme');
    const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  const searchIndex = getSearchIndex();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <header className="topbar">
          <div className="topbar-inner">
            <Link href="/" className="brand">
              Unity Developer Knowledge Base
            </Link>
            <div className="topbar-actions">
              <SearchPanel items={searchIndex} />
              <ThemeToggle />
              <nav className="topnav">
                <Link href="/docs">Docs</Link>
                <a href="https://docs.unity3d.com/Manual/index.html" target="_blank" rel="noreferrer">
                  Unity Manual
                </a>
              </nav>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
