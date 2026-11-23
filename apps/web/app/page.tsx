import Link from 'next/link';
import { Button, Wordmark } from '@threads-connect/ui';
import { ThemeToggle } from './theme-toggle';
import { MotionDiv } from './motion';

const threads = [
  {
    initials: 'AL',
    name: 'Design system refresh',
    text: 'The new direction feels much more like us. Added notes on the type scale.',
    time: '2m ago',
    tone: '',
  },
  {
    initials: 'JM',
    name: 'Partnership launch',
    text: 'Ravi shared the final timeline — everything is lined up for next week.',
    time: '18m ago',
    tone: 'avatar--gold',
  },
  {
    initials: 'SK',
    name: 'Q4 planning',
    text: 'Pulled the research highlights into one place for the team.',
    time: '1h ago',
    tone: 'avatar--blue',
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Link href="/" aria-label="threads_connect home">
          <Wordmark />
        </Link>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="text-link" href="/app">
            Sign in
          </Link>
          <Link href="/app">
            <Button>
              Get started <span aria-hidden="true">↗</span>
            </Button>
          </Link>
        </div>
      </header>
      <main className="landing">
        <section className="hero">
          <MotionDiv
            className="hero-copy"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <span className="eyebrow">A more connected workspace</span>
            <h1>
              Good work starts with <em>good conversations.</em>
            </h1>
            <p>
              Bring your conversations, context, and people into one thoughtful space. Less
              searching for the thread. More moving things forward.
            </p>
            <div className="hero-cta">
              <Link href="/app">
                <Button>
                  Find your flow <span aria-hidden="true">→</span>
                </Button>
              </Link>
              <Link className="text-link" href="#how-it-works">
                A little more about us <span>↓</span>
              </Link>
            </div>
            <div className="trust-line">Made for the teams who make things happen.</div>
          </MotionDiv>
          <MotionDiv
            className="preview-wrap"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            aria-label="Preview of a connected conversation workspace"
          >
            <div className="preview-orbit" aria-hidden="true" />
            <div className="preview">
              <div className="preview-top">
                <span className="preview-title">Your conversations</span>
                <span className="live-pill">● All caught up</span>
              </div>
              <p className="thread-label">In your orbit today</p>
              {threads.map((thread) => (
                <div className="thread-row" key={thread.name}>
                  <div className={`avatar ${thread.tone}`}>{thread.initials}</div>
                  <div className="thread-main">
                    <strong>{thread.name}</strong>
                    <p>{thread.text}</p>
                  </div>
                  <span className="thread-meta">{thread.time}</span>
                </div>
              ))}
              <div className="connected-card">
                <div>
                  <small>Connected with</small>
                  <strong>3 teams · 12 people</strong>
                </div>
                <div className="connected-dots" aria-label="Team members">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </MotionDiv>
        </section>
        <section
          className="feature-strip"
          id="how-it-works"
          aria-label="What makes threads_connect different"
        >
          <article className="feature">
            <span className="feature-icon" aria-hidden="true">
              ⌘
            </span>
            <h2>Context stays close</h2>
            <p>Keep the decisions, details, and people around every conversation in reach.</p>
          </article>
          <article className="feature">
            <span className="feature-icon" aria-hidden="true">
              ↗
            </span>
            <h2>Work moves naturally</h2>
            <p>Pick up where your team left off without digging through disconnected tools.</p>
          </article>
          <article className="feature">
            <span className="feature-icon" aria-hidden="true">
              ◎
            </span>
            <h2>People feel in sync</h2>
            <p>A shared view of what matters helps everyone find their place in the work.</p>
          </article>
        </section>
        <footer className="footer">
          <Wordmark />
          <span> &nbsp; A little more in sync.</span>
        </footer>
      </main>
    </>
  );
}
