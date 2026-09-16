import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import { Backlinks } from '@/components/backlinks';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { DocPagination } from '@/components/doc-pagination';
import { EditPageLink } from '@/components/edit-page-link';
import { mdxComponents } from '@/components/mdx-components';
import { ReadingProgress } from '@/components/reading-progress';
import { RelatedDocs } from '@/components/related-docs';
import { TagList } from '@/components/tag-list';
import { TableOfContents } from '@/components/table-of-contents';
import { getBacklinks } from '@/lib/backlinks';
import { getAdjacentDocs, getDocBySlug, getDocSlugs } from '@/lib/docs';
import { findNavigationPath } from '@/lib/navigation';
import { getRelatedDocs } from '@/lib/related';
import { getSectionColors, getSectionIcon } from '@/lib/section-meta';

type Params = { slug: string[] };

const prettyCodeOptions = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
  keepBackground: false,
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getDocSlugs()
    .filter((slug) => slug.length > 0)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const resolved = await params;
  const doc = getDocBySlug(resolved.slug);
  if (!doc) return {};
  return {
    title: `${doc.title} · Unity Developer Knowledge Base`,
    description: doc.description,
  };
}

export default async function DocPage({ params }: { params: Promise<Params> }) {
  const resolved = await params;
  const slug = resolved.slug;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const { content } = await compileMDX({
    source: doc.source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
    },
  });

  const adjacent = getAdjacentDocs(slug);
  const related = getRelatedDocs(slug);
  const backlinks = getBacklinks(slug);
  const path = findNavigationPath(slug);
  const breadcrumbs = [
    { title: 'Docs', href: '/docs', icon: getSectionIcon('Overview') },
    ...path.map((item, index) => ({
      title: item.title,
      href: item.href,
      icon: item.children?.length ? getSectionIcon(item.title) : undefined,
      current: index === path.length - 1,
    })),
  ];

  const sectionColors = getSectionColors(doc.sectionLabel);

  return (
    <>
      <ReadingProgress />
      <div className="doc-page-grid">
        <article className="doc-article">
          <div className="doc-header">
            <Breadcrumbs items={breadcrumbs} />
            <p className="doc-section-label">
              <span className="section-icon small" style={{ color: sectionColors.fg, background: sectionColors.bg }}>
                {getSectionIcon(doc.sectionLabel)}
              </span>
              {doc.sectionLabel}
            </p>
            <h1>{doc.title}</h1>
            {doc.description ? <p className="doc-description">{doc.description}</p> : null}
            <TagList level={doc.level} tags={doc.tags} />
            <div className="doc-meta-row">
              <span>Last updated {doc.lastUpdatedLabel}</span>
              <span>Section: {doc.sectionLabel}</span>
              <EditPageLink href={doc.editHref} />
            </div>
          </div>
          <div className="doc-prose">{content}</div>
          <RelatedDocs items={related} />
          <Backlinks items={backlinks} />
          <DocPagination previous={adjacent.previous} next={adjacent.next} />
        </article>
        <aside className="doc-toc-column">
          <TableOfContents headings={doc.headings} />
        </aside>
      </div>
    </>
  );
}
