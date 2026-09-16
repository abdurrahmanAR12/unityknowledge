import { DocsHome } from '@/components/docs-home';
import { getNavigationTree } from '@/lib/navigation';

export default function DocsIndexPage() {
  return <DocsHome navigation={getNavigationTree()} />;
}
