import type { ReactNode } from 'react';
import clsx from 'clsx';

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: 'info' | 'tip' | 'warning' | 'checklist';
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className={clsx('callout', `callout-${type}`)}>
      {title ? <div className="callout-title">{title}</div> : null}
      <div className="callout-body">{children}</div>
    </div>
  );
}

export function Tip({ title = 'Tip', children }: { title?: string; children: ReactNode }) {
  return <Callout type="tip" title={title}>{children}</Callout>;
}

export function Warning({ title = 'Warning', children }: { title?: string; children: ReactNode }) {
  return <Callout type="warning" title={title}>{children}</Callout>;
}

export function Checklist({ title = 'Checklist', children }: { title?: string; children: ReactNode }) {
  return <Callout type="checklist" title={title}>{children}</Callout>;
}
