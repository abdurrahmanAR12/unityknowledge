import { flattenNavigation, getNavigationTree } from '@/lib/navigation';
import { getDocBySlug } from '@/lib/docs';
import type { RelatedDocItem } from '@/components/related-docs';

const manualMap: Record<string, string[][]> = {
  'systems/save-load-systems': [
    ['architecture', 'scene-management-and-bootstrap-architecture'],
    ['architecture', 'reference-architecture-bootstrap-save-load-scenes'],
    ['troubleshooting', 'scene-loading-lifecycle-and-execution-order'],
  ],
  'workflow/project-organization-and-version-control': [
    ['workflow', 'package-management-version-upgrades-and-migrations'],
    ['architecture', 'modular-architecture-scriptableobjects-asmdefs'],
    ['troubleshooting', 'scenes-prefabs-serialization-and-missing-references'],
  ],
  'optimization/profiling-memory-gc-and-performance': [
    ['optimization', 'mobile-optimization-deep-dive'],
    ['troubleshooting', 'performance-runbook'],
    ['graphics', 'shader-and-rendering-debugging-deep-dive'],
  ],
  'multiplayer/multiplayer-netcode-and-ugs': [
    ['multiplayer', 'multiplayer-debugging-runbook'],
    ['packages', 'netcode-for-gameobjects'],
    ['questions', 'why-do-input-ui-xr-networking-behave-weirdly'],
  ],
  'xr/ar-vr-xr-foundation-and-openxr': [
    ['packages', 'xri-openxr'],
    ['packages', 'ar-foundation'],
    ['xr', 'meta-quest-runbook'],
  ],
};

export function getRelatedDocs(slug: string[]): RelatedDocItem[] {
  const key = slug.join('/');
  const manual = manualMap[key] ?? [];
  const items: RelatedDocItem[] = [];

  for (const target of manual) {
    const doc = getDocBySlug(target);
    if (doc) {
      items.push({
        title: doc.title,
        href: doc.href,
        sectionLabel: doc.sectionLabel,
        description: doc.description,
      });
    }
  }

  if (items.length >= 3) return items;

  const sameSection = flattenNavigation(getNavigationTree())
    .filter((item) => item.slug[0] === slug[0] && item.slug.join('/') !== key)
    .slice(0, 6);

  for (const node of sameSection) {
    const doc = getDocBySlug(node.slug);
    if (!doc) continue;
    if (items.some((item) => item.href === doc.href)) continue;
    items.push({
      title: doc.title,
      href: doc.href,
      sectionLabel: doc.sectionLabel,
      description: doc.description,
    });
    if (items.length >= 3) break;
  }

  return items;
}
