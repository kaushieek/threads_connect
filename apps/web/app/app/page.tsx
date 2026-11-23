import Link from 'next/link';
import { Button, Wordmark } from '@threads-connect/ui';
import { ThemeToggle } from '../theme-toggle';

export default function AppHome() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <Link href="/" aria-label="threads_connect home">
          <Wordmark />
        </Link>
        <nav aria-label="Workspace navigation">
          <p className="app-nav-label">Workspace</p>
          <Link className="app-nav-item app-nav-item--active" href="/app">
            ⌂ &nbsp; Overview
          </Link>
          <Link className="app-nav-item" href="/app">
            ◌ &nbsp; Conversations
          </Link>
          <Link className="app-nav-item" href="/app">
            ♧ &nbsp; People
          </Link>
          <p className="app-nav-label">Your space</p>
          <Link className="app-nav-item" href="/app">
            ＋ &nbsp; Connect a team
          </Link>
        </nav>
      </aside>
      <main className="app-main">
        <div className="app-topbar">
          <ThemeToggle />
        </div>
        <section className="app-content">
          <span className="eyebrow">Your workspace</span>
          <h1>Make room for good work.</h1>
          <p>Your conversations and the people around them will find their home here.</p>
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">
              ✳
            </span>
            <h2>Your space is ready when you are</h2>
            <p>
              Connect a team to bring your conversations together and make the important context
              easier to find.
            </p>
            <Button>
              Connect your first team <span aria-hidden="true">→</span>
            </Button>
          </div>
          <footer className="footer">A calmer way to work, together.</footer>
        </section>
      </main>
    </div>
  );
}
