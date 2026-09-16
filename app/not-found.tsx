import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="landing-shell">
      <section className="landing-hero">
        <p className="eyebrow">404</p>
        <h1>That page could not be found.</h1>
        <p className="hero-copy">
          Try the documentation home or jump straight to the “What to Read by Need” page.
        </p>
        <div className="hero-actions">
          <Link href="/docs" className="button-primary">
            Docs home
          </Link>
          <Link href="/docs/what-to-read-by-need" className="button-secondary">
            What to read by need
          </Link>
        </div>
      </section>
    </main>
  );
}
