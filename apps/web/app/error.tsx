'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="app-main">
      <section className="empty-state" role="alert">
        <span className="empty-icon" aria-hidden="true">
          !
        </span>
        <h2>We hit a small snag</h2>
        <p>Your work is safe. Try loading this view again.</p>
        <button className="tc-button tc-button--primary" onClick={reset}>
          Try again
        </button>
      </section>
    </main>
  );
}
