import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { Callout, Checklist, Tip, Warning } from '@/components/callout';
import { CodeBlock } from '@/components/code-block';
import { headingId } from '@/lib/utils';

function toHeadingText(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) {
    return children
      .map((child) => (typeof child === 'string' ? child : ''))
      .join(' ')
      .trim();
  }
  return '';
}

function createHeading(level: 'h2' | 'h3' | 'h4') {
  return function Heading({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    const text = toHeadingText(children);
    const id = props.id ?? headingId(text || level);
    const Tag = level;
    return <Tag id={id} {...props}>{children}</Tag>;
  };
}

export const mdxComponents = {
  h2: createHeading('h2'),
  h3: createHeading('h3'),
  h4: createHeading('h4'),
  pre: ({ children }: { children: ReactNode }) => <CodeBlock>{children}</CodeBlock>,
  Callout,
  Tip,
  Warning,
  Checklist,
  a: ({ href = '', children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href.startsWith('/')) {
      return <Link href={href} {...props}>{children}</Link>;
    }
    return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} {...props}>{children}</a>;
  },
};
