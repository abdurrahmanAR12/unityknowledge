import type { SkillLevel } from '@/lib/docs';

function levelLabel(level: SkillLevel) {
  return level.charAt(0).toUpperCase() + level.slice(1);
}

export function TagList({ level, tags }: { level: SkillLevel; tags: string[] }) {
  const unique = [levelLabel(level), ...tags.filter((tag) => tag.toLowerCase() !== level.toLowerCase())];

  return (
    <div className="tag-list">
      {unique.map((tag, index) => (
        <span key={`${tag}-${index}`} className={`tag-chip ${index === 0 ? `level-${level}` : ''}`}>
          {tag}
        </span>
      ))}
    </div>
  );
}
