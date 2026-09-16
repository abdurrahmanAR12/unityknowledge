import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { flattenNavigation, getNavigationTree } from '@/lib/navigation';
import { slugToHref, titleize, headingId } from '@/lib/utils';

const DOCS_DIR = path.join(process.cwd(), 'content', 'docs');

export type DocHeading = { text: string; id: string; depth: number };
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type DocRecord = {
  slug: string[];
  href: string;
  title: string;
  sectionLabel: string;
  description?: string;
  source: string;
  headings: DocHeading[];
  lastUpdated: string;
  lastUpdatedLabel: string;
  filePath: string;
  relativePath: string;
  editHref: string;
  level: SkillLevel;
  tags: string[];
};

type FrontmatterData = {
  title?: string;
  description?: string;
  level?: SkillLevel;
  tags?: string[];
};

function resolveFilePath(slug: string[]) {
  const candidates = [
    path.join(DOCS_DIR, ...slug) + '.md',
    path.join(DOCS_DIR, ...slug) + '.mdx',
    path.join(DOCS_DIR, ...slug, 'index.md'),
    path.join(DOCS_DIR, ...slug, 'index.mdx'),
  ];

  if (!slug.length) {
    candidates.unshift(path.join(DOCS_DIR, 'index.md'));
    candidates.unshift(path.join(DOCS_DIR, 'index.mdx'));
  }

  return candidates.find((candidate) => fs.existsSync(candidate));
}

function extractTitle(source: string, fallback: string) {
  const match = source.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() ?? fallback;
}

function extractDescription(source: string) {
  const lines = source.split('\n').map((line) => line.trim());
  let afterTitle = false;

  for (const line of lines) {
    if (!afterTitle && line.startsWith('# ')) {
      afterTitle = true;
      continue;
    }

    if (!afterTitle) continue;
    if (!line) continue;
    if (line.startsWith('##')) break;
    if (line.startsWith('>')) return line.replace(/^>\s?/, '');
    if (!line.startsWith('-') && !line.startsWith('```')) return line;
  }

  return undefined;
}

function extractHeadings(source: string): DocHeading[] {
  const headings: DocHeading[] = [];
  const regex = /^(##|###)\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(source))) {
    const depth = match[1].length;
    const text = match[2].trim();
    headings.push({ text, id: headingId(text), depth });
  }

  return headings;
}

function stripMarkdown(source: string) {
  return source
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^#+\s+/gm, '')
    .replace(/[>*_-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatLastUpdated(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

function inferLevel(sectionLabel: string, slug: string[]): SkillLevel {
  const key = slug.join('/');

  if (sectionLabel === 'Getting Started' || sectionLabel === 'Questions') return 'beginner';
  if (sectionLabel === 'Troubleshooting' || sectionLabel === 'Workflow' || sectionLabel === 'Systems') return 'intermediate';
  if (sectionLabel === 'Optimization' || sectionLabel === 'Graphics' || sectionLabel === 'Architecture') return 'advanced';
  if (sectionLabel === 'XR' || sectionLabel === 'Multiplayer') return 'advanced';
  if (key.includes('runbook')) return 'advanced';
  if (sectionLabel === 'Packages') return 'intermediate';
  return 'intermediate';
}

function inferTags(sectionLabel: string, slug: string[], title: string, source: string) {
  const tags = new Set<string>();
  tags.add(sectionLabel.toLowerCase());

  const key = `${slug.join(' ')} ${title} ${source}`.toLowerCase();
  const addIf = (needle: string, tag = needle) => {
    if (key.includes(needle)) tags.add(tag);
  };

  addIf('addressables');
  addIf('input', 'input');
  addIf('ui', 'ui');
  addIf('xr', 'xr');
  addIf('ar', 'ar');
  addIf('vr', 'vr');
  addIf('multiplayer');
  addIf('netcode');
  addIf('performance');
  addIf('profiling');
  addIf('save');
  addIf('build');
  addIf('render');
  addIf('shader');
  addIf('animation');
  addIf('physics');
  addIf('workflow');

  return Array.from(tags).slice(0, 6);
}

function getEditHref(filePath: string) {
  const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
  const editBase = process.env.NEXT_PUBLIC_EDIT_BASE_URL;
  const repoSlug = process.env.GITHUB_REPOSITORY;

  if (editBase) {
    return `${editBase.replace(/\/$/, '')}/${relativePath}`;
  }

  if (repoSlug) {
    return `https://github.com/${repoSlug}/edit/main/${relativePath}`;
  }

  return `vscode://file/${filePath}`;
}

export function getDocBySlug(slug: string[]): DocRecord | null {
  const filePath = resolveFilePath(slug);
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const frontmatter = parsed.data as FrontmatterData;
  const titleFallback = titleize(slug[slug.length - 1] ?? 'index');
  const title = String(frontmatter.title ?? extractTitle(parsed.content, titleFallback));
  const description = String(frontmatter.description ?? extractDescription(parsed.content) ?? '');
  const sectionLabel = slug[0] ? titleize(slug[0]) : 'Overview';
  const stats = fs.statSync(filePath);
  const level = frontmatter.level ?? inferLevel(sectionLabel, slug);
  const tags = Array.isArray(frontmatter.tags) && frontmatter.tags.length
    ? frontmatter.tags
    : inferTags(sectionLabel, slug, title, parsed.content);

  return {
    slug,
    href: slugToHref(slug),
    title,
    sectionLabel,
    description: description || undefined,
    source: parsed.content,
    headings: extractHeadings(parsed.content),
    lastUpdated: stats.mtime.toISOString(),
    lastUpdatedLabel: formatLastUpdated(stats.mtime),
    filePath,
    relativePath: path.relative(process.cwd(), filePath).replace(/\\/g, '/'),
    editHref: getEditHref(filePath),
    level,
    tags,
  };
}

export function getDocSlugs(): string[][] {
  return flattenNavigation(getNavigationTree()).map((item) => item.slug);
}

export function getAllDocs(): DocRecord[] {
  return getDocSlugs()
    .map((slug) => getDocBySlug(slug))
    .filter((doc): doc is DocRecord => Boolean(doc));
}

export function getAdjacentDocs(slug: string[]) {
  const flat = flattenNavigation(getNavigationTree());
  const currentHref = slugToHref(slug);
  const index = flat.findIndex((item) => item.href === currentHref);
  const previous = index > 0 ? flat[index - 1] : null;
  const next = index >= 0 && index < flat.length - 1 ? flat[index + 1] : null;
  return { previous, next };
}

export function getSearchIndex() {
  return getAllDocs().map((doc) => ({
    title: doc.title,
    href: doc.href,
    description: doc.description,
    sectionLabel: doc.sectionLabel,
    lastUpdatedLabel: doc.lastUpdatedLabel,
    text: stripMarkdown(`${doc.title} ${doc.description ?? ''} ${doc.headings.map((h) => h.text).join(' ')} ${doc.source}`),
  }));
}
