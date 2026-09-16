import Link from 'next/link';
import type { NavigationNode } from '@/lib/navigation';

export function DocPagination({ previous, next }: { previous: NavigationNode | null; next: NavigationNode | null }) {
  if (!previous && !next) return null;

  return (
    <div className="doc-pagination">
      {previous ? (
        <Link href={previous.href} className="doc-pagination-card">
          <div className="doc-pagination-label">Previous</div>
          <div className="doc-pagination-title">{previous.title}</div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={next.href} className="doc-pagination-card">
          <div className="doc-pagination-label">Next</div>
          <div className="doc-pagination-title">{next.title}</div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
