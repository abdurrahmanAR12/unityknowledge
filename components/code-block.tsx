'use client';

import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';

function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node && typeof node === 'object' && 'props' in node) {
    const props = (node as { props?: { children?: ReactNode } }).props;
    return extractText(props?.children ?? '');
  }
  return '';
}

function extractLanguage(node: ReactNode): string | null {
  if (node && typeof node === 'object' && 'props' in node) {
    const props = (node as { props?: { className?: string } }).props;
    const className = props?.className ?? '';
    const match = className.match(/language-([\w-]+)/);
    return match?.[1] ?? null;
  }
  return null;
}

function prettyLanguageLabel(language: string | null) {
  if (!language) return null;

  const map: Record<string, string> = {
    csharp: 'C#',
    cs: 'C#',
    ts: 'TypeScript',
    tsx: 'TSX',
    js: 'JavaScript',
    jsx: 'JSX',
    json: 'JSON',
    mdx: 'MDX',
    md: 'Markdown',
    bash: 'Bash',
    sh: 'Shell',
    yml: 'YAML',
    yaml: 'YAML',
    html: 'HTML',
    css: 'CSS',
    text: 'Text',
  };

  return map[language.toLowerCase()] ?? language.toUpperCase();
}

export function CodeBlock({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false);
  const rawText = useMemo(() => extractText(children).trimEnd(), [children]);
  const language = useMemo(() => extractLanguage(children), [children]);
  const label = useMemo(() => prettyLanguageLabel(language), [language]);

  const onCopy = async () => {
    await navigator.clipboard.writeText(rawText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="code-block-wrap">
      <div className="code-block-toolbar">
        {label ? <span className="code-language-badge">{label}</span> : <span />}
        <button type="button" className="copy-code-button" onClick={onCopy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre>{children}</pre>
    </div>
  );
}
