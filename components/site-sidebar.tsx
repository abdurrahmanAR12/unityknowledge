'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import type { Dispatch, SetStateAction } from 'react';
import { useMemo, useState } from 'react';
import type { NavigationNode } from '@/lib/navigation';
import { getSectionIcon } from '@/lib/section-meta';

function branchContainsPath(node: NavigationNode, pathname: string): boolean {
  if (!node.children?.length) return pathname === node.href;
  return node.children.some((child) => branchContainsPath(child, pathname));
}

function SidebarNode({
  node,
  pathname,
  openMap,
  setOpenMap,
  depth = 0,
}: {
  node: NavigationNode;
  pathname: string;
  openMap: Record<string, boolean>;
  setOpenMap: Dispatch<SetStateAction<Record<string, boolean>>>;
  depth?: number;
}) {
  const active = pathname === node.href;
  const key = `${depth}-${node.title}`;
  const icon = getSectionIcon(node.title);

  if (node.children?.length) {
    const open = openMap[key] ?? (branchContainsPath(node, pathname) || depth === 0);

    return (
      <div className="sidebar-group" style={{ marginLeft: depth ? 8 : 0 }}>
        <button
          type="button"
          className={clsx('sidebar-group-button', open && 'open')}
          onClick={() => setOpenMap((value) => ({ ...value, [key]: !open }))}
        >
          <span className="sidebar-group-button-main">
            <span className="section-icon">{icon}</span>
            <span className={clsx('sidebar-group-title', depth > 0 && 'nested')}>{node.title}</span>
          </span>
          <span className="sidebar-group-chevron">{open ? '−' : '+'}</span>
        </button>
        {open ? (
          <div className="sidebar-children">
            {node.children.map((child) => (
              <SidebarNode
                key={`${child.href}-${child.title}`}
                node={child}
                pathname={pathname}
                openMap={openMap}
                setOpenMap={setOpenMap}
                depth={depth + 1}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <Link href={node.href} className={clsx('sidebar-link', active && 'active')}>
      {node.title}
    </Link>
  );
}

export function SiteSidebar({ navigation }: { navigation: NavigationNode[] }) {
  const pathname = usePathname();
  const initialState = useMemo(() => {
    const state: Record<string, boolean> = {};
    const visit = (nodes: NavigationNode[], depth = 0) => {
      for (const node of nodes) {
        if (node.children?.length) {
          state[`${depth}-${node.title}`] = branchContainsPath(node, pathname) || depth === 0;
          visit(node.children, depth + 1);
        }
      }
    };
    visit(navigation);
    return state;
  }, [navigation, pathname]);

  const [openMap, setOpenMap] = useState<Record<string, boolean>>(initialState);

  return (
    <div>
      <div className="sidebar-search">Browse the handbook</div>
      {navigation.map((node) => (
        <SidebarNode
          key={`${node.href}-${node.title}`}
          node={node}
          pathname={pathname}
          openMap={openMap}
          setOpenMap={setOpenMap}
        />
      ))}
    </div>
  );
}
