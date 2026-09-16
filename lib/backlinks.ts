import { getAllDocs } from '@/lib/docs';

export type BacklinkDoc = {
  title: string;
  href: string;
  sectionLabel: string;
  description?: string;
};

function normalizeHrefTarget(href: string) {
  if (!href.startsWith('/docs')) return null;
  return href.replace(/\/$/, '');
}

export function getBacklinks(slug: string[]): BacklinkDoc[] {
  const targetHref = (slug.length ? `/docs/${slug.join('/')}` : '/docs').replace(/\/$/, '');
  const all = getAllDocs();
  const results: BacklinkDoc[] = [];

  for (const doc of all) {
    if (doc.href === targetHref) continue;

    const matches = Array.from(doc.source.matchAll(/\[[^\]]+\]\((\/docs\/[^)]+)\)/g))
      .map((match) => normalizeHrefTarget(match[1]))
      .filter(Boolean) as string[];

    if (matches.includes(targetHref)) {
      results.push({
        title: doc.title,
        href: doc.href,
        sectionLabel: doc.sectionLabel,
        description: doc.description,
      });
    }
  }

  return results;
}
