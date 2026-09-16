'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useMemo, useState } from 'react';

export type SearchItem = {
  title: string;
  href: string;
  description?: string;
  sectionLabel: string;
  text: string;
  lastUpdatedLabel?: string;
};

function scoreItem(item: SearchItem, query: string) {
  const q = query.toLowerCase();
  const title = item.title.toLowerCase();
  const section = item.sectionLabel.toLowerCase();
  const description = (item.description ?? '').toLowerCase();
  const text = item.text.toLowerCase();

  let score = 0;
  if (title === q) score += 140;
  if (title.includes(q)) score += 80;
  if (section.includes(q)) score += 24;
  if (description.includes(q)) score += 24;
  if (text.includes(q)) score += 12;
  return score;
}

function highlightText(text: string, query: string) {
  if (!query.trim()) return text;
  const q = query.trim();
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'ig');
  const qLower = q.toLowerCase();
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === qLower ? <mark key={`${part}-${index}`}>{part}</mark> : <Fragment key={`${part}-${index}`}>{part}</Fragment>,
  );
}

function getSnippet(text: string, query: string) {
  if (!query.trim()) return text.slice(0, 140);
  const q = query.toLowerCase();
  const index = text.toLowerCase().indexOf(q);
  if (index < 0) return text.slice(0, 160);
  const start = Math.max(0, index - 48);
  const end = Math.min(text.length, index + q.length + 92);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < text.length ? '…' : '';
  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
}

export function SearchPanel({ items }: { items: SearchItem[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isCommand = event.metaKey || event.ctrlKey;
      if (isCommand && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
      if (!isCommand && event.key === '/' && !open) {
        const target = event.target as HTMLElement | null;
        const isTyping = target && ['INPUT', 'TEXTAREA'].includes(target.tagName);
        if (!isTyping) {
          event.preventDefault();
          setOpen(true);
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return items.slice(0, 10);
    return items
      .map((item) => ({ item, score: scoreItem(item, trimmed) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((entry) => entry.item);
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, open]);

  return (
    <>
      <button type="button" className="search-trigger" onClick={() => setOpen(true)} aria-label="Search documentation">
        <span>Search docs</span>
        <kbd>⌘K</kbd>
      </button>

      {open ? (
        <div className="search-overlay" onClick={() => setOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-input-row">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (!results.length) return;
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex((value) => (value + 1) % results.length);
                  }
                  if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex((value) => (value - 1 + results.length) % results.length);
                  }
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const selected = results[selectedIndex];
                    if (selected) {
                      setOpen(false);
                      router.push(selected.href);
                    }
                  }
                }}
                placeholder="Search by topic, problem, package, or page title"
                className="search-input"
              />
            </div>
            <div className="search-results">
              {results.length ? (
                results.map((item, index) => {
                  const snippet = getSnippet(item.text, query);
                  return (
                    <Link key={item.href} href={item.href} className={`search-result-card ${selectedIndex === index ? 'active' : ''}`} onClick={() => setOpen(false)}>
                      <div className="search-result-topline">
                        <div className="search-result-meta">{item.sectionLabel}</div>
                        {item.lastUpdatedLabel ? <div className="search-result-date">Updated {item.lastUpdatedLabel}</div> : null}
                      </div>
                      <div className="search-result-title">{highlightText(item.title, query)}</div>
                      {item.description ? (
                        <div className="search-result-description">{highlightText(item.description, query)}</div>
                      ) : null}
                      <div className="search-result-snippet">{highlightText(snippet, query)}</div>
                    </Link>
                  );
                })
              ) : (
                <div className="search-empty">No results found for that query.</div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
