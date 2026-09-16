import Link from 'next/link';
import { getSectionColors } from '@/lib/section-meta';

export type BreadcrumbItem = {
  title: string;
  href: string;
  icon?: string;
  current?: boolean;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items.length) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const colors = getSectionColors(item.title);
        return (
          <div className="breadcrumb-item" key={`${item.href}-${item.title}-${index}`}>
            {index > 0 ? <span className="breadcrumb-separator">/</span> : null}
            {item.current ? (
              <span className="breadcrumb-current">
                {item.icon ? (
                  <span className="section-icon small" style={{ color: colors.fg, background: colors.bg }}>
                    {item.icon}
                  </span>
                ) : null}
                {item.title}
              </span>
            ) : (
              <Link href={item.href} className="breadcrumb-link">
                {item.icon ? (
                  <span className="section-icon small" style={{ color: colors.fg, background: colors.bg }}>
                    {item.icon}
                  </span>
                ) : null}
                {item.title}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
