import Link from 'next/link';
import { ArrowRight, Wordmark } from '@threads-connect/ui';
import { Compass, GraduationCap, UsersRound } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';

const navigation = [
  { label: 'Overview', href: '/app', icon: Compass, active: true },
  { label: 'Your community', href: '#community', icon: UsersRound, active: false },
];

export default function AppHome() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <Link href="/" aria-label="threads_connect home">
          <Wordmark />
        </Link>
        <nav aria-label="Workspace navigation">
          <p className="app-nav-label">Your community</p>
          {navigation.map(({ label, href, icon: Icon, active }) => (
            <Link
              className={`app-nav-item${active ? ' app-nav-item--active' : ''}`}
              href={href}
              key={label}
              aria-current={active ? 'page' : undefined}
            >
              <Icon aria-hidden="true" size={17} strokeWidth={1.7} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="app-main">
        <div className="app-topbar">
          <ThemeToggle />
        </div>
        <section className="app-content">
          <span className="tc-eyebrow">Your community</span>
          <h1 className="tc-display">Every chapter belongs.</h1>
          <p>
            Your institution&apos;s community will find its home here. Stay close to the people,
            ideas and opportunities that bring it to life.
          </p>
          <div className="empty-state" id="community">
            <span className="tc-avatar tc-avatar--sage tc-avatar--large" aria-hidden="true">
              <GraduationCap size={22} strokeWidth={1.6} />
            </span>
            <h2>Your next connection starts here</h2>
            <p>
              We&apos;re preparing a thoughtful space for your alumni, students, faculty and
              institutional community.
            </p>
            <Link className="tc-button tc-button--primary" href="/#institutional-partnership">
              Learn about threads_connect <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <footer className="footer">Beyond Graduation. Beyond Connections.</footer>
        </section>
      </main>
    </div>
  );
}
