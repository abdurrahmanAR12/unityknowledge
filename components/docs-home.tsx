import Link from 'next/link';
import type { NavigationNode } from '@/lib/navigation';
import { getSectionIcon } from '@/lib/section-meta';

const sectionDescriptions: Record<string, string> = {
  'Getting Started': 'Set up Unity correctly and avoid painful early mistakes.',
  Workflow: 'Project structure, upgrades, plugins, code reviews, and DevOps discipline.',
  Scripting: 'Write better C# and debug the kinds of errors that waste hours.',
  Architecture: 'Bootstrap, modularity, scene ownership, and scaling without chaos.',
  Assets: 'Import settings, Addressables, and asset lifecycle discipline.',
  UI: 'Modern UI, legacy UI, and the hidden performance traps around both.',
  Graphics: 'Rendering, shaders, pipelines, and GPU debugging flows.',
  Physics: 'Collision, Rigidbody timing, and query sanity.',
  Animation: 'Animator debugging, state machines, rigs, and transition issues.',
  Audio: 'Mixers, import settings, routing, and runtime audio bugs.',
  Systems: 'Core game systems such as save/load with production-minded structure.',
  Optimization: 'Profiling, memory, GC, mobile performance, and practical runbooks.',
  Builds: 'Player builds, platform targets, and release reliability.',
  Multiplayer: 'Unity networking choices plus debugging guidance.',
  XR: 'AR/VR/MR systems with device-specific runbooks.',
  Packages: 'Package-level adoption guidance and risk awareness.',
  Platforms: 'Platform-specific warnings for Android, iOS, and WebGL.',
  Testing: 'QA, validation scenes, and maintenance discipline.',
  Troubleshooting: 'Fast symptom-based triage and failure pattern docs.',
  Resources: 'Decision matrices, onboarding, and release checklists.',
  'Direct Answers': 'Fast routes to common painful questions developers ask under pressure.',
};

export function DocsHome({ navigation }: { navigation: NavigationNode[] }) {
  const cards = navigation.filter((node) => node.children?.length && node.title !== 'Home');

  return (
    <div className="docs-home-shell">
      <section className="docs-home-hero card-panel">
        <p className="eyebrow">Documentation</p>
        <h1>Unity guidance organized the way developers actually need it.</h1>
        <p className="hero-copy docs-home-copy">
          Browse by system, by package, or by the exact painful question you need answered right now.
        </p>
        <div className="hero-actions">
          <Link href="/docs/what-to-read-by-need" className="button-primary">What to read by need</Link>
          <Link href="/docs/questions/what-should-i-read-first-for-the-exact-thing-i-need" className="button-secondary">Direct answer router</Link>
        </div>
      </section>

      <section className="docs-home-grid">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="tile-card">
            <div className="tile-card-label-row">
              <span className="section-icon large">{getSectionIcon(card.title)}</span>
              <span className="tile-card-label">{card.title}</span>
            </div>
            <div className="tile-card-title">{card.children?.[0]?.title ?? card.title}</div>
            <p className="tile-card-copy">{sectionDescriptions[card.title] ?? 'Explore this section of the handbook.'}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
