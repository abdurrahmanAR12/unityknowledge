import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="landing-shell">
      <section className="landing-hero">
        <p className="eyebrow">Unity documentation, but structured for real work</p>
        <h1>Learn faster, debug earlier, and keep your Unity project sane.</h1>
        <p className="hero-copy">
          A clean, Apple-inspired docs experience for a problem-oriented Unity handbook:
          setup, architecture, packages, performance, troubleshooting, XR, multiplayer, and more.
        </p>
        <div className="hero-actions">
          <Link href="/docs" className="button-primary">
            Open documentation
          </Link>
          <Link href="/docs/what-to-read-by-need" className="button-secondary">
            Find what to read first
          </Link>
        </div>
      </section>
    </main>
  );
}
