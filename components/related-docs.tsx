import Link from 'next/link';

export type RelatedDocItem = {
  title: string;
  href: string;
  sectionLabel: string;
  description?: string;
};

export function RelatedDocs({ items }: { items: RelatedDocItem[] }) {
  if (!items.length) return null;

  return (
    <section className="related-section">
      <h2>Related pages</h2>
      <div className="related-grid">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="related-card">
            <div className="related-card-section">{item.sectionLabel}</div>
            <div className="related-card-title">{item.title}</div>
            {item.description ? <div className="related-card-description">{item.description}</div> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
