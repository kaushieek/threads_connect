export default function Loading() {
  return (
    <main className="landing" role="status" aria-label="Loading your workspace" aria-busy="true">
      <div className="loading-skeleton">
        <span className="skeleton skeleton-heading" />
        <span className="skeleton skeleton-copy" />
        <div className="skeleton-panel">
          {[0, 1, 2].map((item) => (
            <div className="skeleton-row" key={item}>
              <span className="skeleton skeleton-avatar" />
              <span className="skeleton-lines">
                <span className="skeleton skeleton-line" />
                <span className="skeleton skeleton-line skeleton-line--short" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
