import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { slugToHref, titleize } from '@/lib/utils';

const NAV_PATH = path.join(process.cwd(), 'content', 'mkdocs.yml');

export type NavigationNode = {
  title: string;
  href: string;
  slug: string[];
  children?: NavigationNode[];
};

type ParsedMkDocs = { nav?: Array<Record<string, string | Array<Record<string, unknown>>>> };

function filePathToSlug(filePath: string): string[] {
  const clean = filePath.replace(/\.mdx?$/, '');
  if (clean === 'index') return [];
  const parts = clean.split('/');
  if (parts[parts.length - 1] === 'index') {
    return parts.slice(0, -1);
  }
  return parts;
}

function parseNavEntry(entry: Record<string, unknown>): NavigationNode {
  const [title, value] = Object.entries(entry)[0];

  if (typeof value === 'string') {
    const slug = filePathToSlug(value);
    return { title, slug, href: slugToHref(slug) };
  }

  if (Array.isArray(value)) {
    const children = value.map((child) => parseNavEntry(child as Record<string, unknown>));
    return {
      title,
      slug: [],
      href: children[0]?.href ?? '/docs',
      children,
    };
  }

  return { title: titleize(title), slug: [], href: '/docs' };
}

export function getNavigationTree(): NavigationNode[] {
  const raw = fs.readFileSync(NAV_PATH, 'utf8');
  const parsed = YAML.parse(raw) as ParsedMkDocs;
  const nav = parsed.nav ?? [];
  return nav.map((entry) => parseNavEntry(entry));
}

export function flattenNavigation(nodes: NavigationNode[]): NavigationNode[] {
  const flat: NavigationNode[] = [];
  const visit = (node: NavigationNode) => {
    if (!node.children?.length) flat.push(node);
    else node.children.forEach(visit);
  };
  nodes.forEach(visit);
  return flat;
}

export function findNavigationPath(slug: string[], nodes = getNavigationTree()): NavigationNode[] {
  const href = slugToHref(slug);

  const visit = (items: NavigationNode[], trail: NavigationNode[]): NavigationNode[] | null => {
    for (const item of items) {
      const nextTrail = item.title === 'Home' ? trail : [...trail, item];
      if (!item.children?.length && item.href === href) return nextTrail;
      if (item.children?.length) {
        const found = visit(item.children, nextTrail);
        if (found) return found;
      }
    }
    return null;
  };

  return visit(nodes, []) ?? [];
}
