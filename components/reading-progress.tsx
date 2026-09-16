'use client';

import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const article = document.querySelector('.doc-article');
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const articleTop = rect.top + scrollTop;
      const articleHeight = article.clientHeight;
      const viewportHeight = window.innerHeight;
      const max = Math.max(articleHeight - viewportHeight * 0.7, 1);
      const current = Math.min(Math.max(scrollTop - articleTop + 80, 0), max);
      setProgress((current / max) * 100);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="reading-progress" aria-hidden="true">
      <div className="reading-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
