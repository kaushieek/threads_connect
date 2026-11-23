import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Avatar, Badge, Wordmark } from '@threads-connect/ui';
import { Compass, GraduationCap, Landmark, Lightbulb, Quote, Sparkles } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { PublicNavigation } from './public-navigation';
import { Reveal } from './motion';

const community = [
  {
    number: '01',
    title: 'Alumni',
    text: 'Keep meaningful ties to the people and place that shaped your journey. Share perspective, open doors and stay part of what comes next.',
    icon: GraduationCap,
  },
  {
    number: '02',
    title: 'Students',
    text: 'Meet people who have walked a similar path. Find guidance, opportunities and a clearer view of the possibilities ahead.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Faculty',
    text: 'Bring teaching, research and mentorship into the wider life of your institution and its community.',
    icon: Lightbulb,
  },
  {
    number: '04',
    title: 'Institutions',
    text: 'Create a living home for your community, with the context and care to make each connection count.',
    icon: Landmark,
  },
];

const steps = [
  {
    number: '01',
    title: 'Bring your community together',
    text: 'One trusted home gives every generation a way to find people, shared interests and the right place to begin.',
  },
  {
    number: '02',
    title: 'Make room for meaningful exchange',
    text: 'Mentorship, ideas and opportunity move more naturally when the community around them is easy to reach.',
  },
  {
    number: '03',
    title: 'Keep belonging in motion',
    text: 'The relationship with an institution does not end at commencement. It grows with every new chapter.',
  },
];

export default function Home() {
  return (
    <div className="landing">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="header-brand" href="/" aria-label="threads_connect home">
          <Wordmark />
        </Link>
        <PublicNavigation />
        <div className="header-actions">
          <ThemeToggle />
          <Link className="header-login" href="/app">
            Sign in
          </Link>
          <Link className="tc-button tc-button--primary tc-button--small" href="/app">
            Explore the platform <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </div>
      </header>

      <main id="main-content">
        <section className="hero tc-container" aria-labelledby="hero-title">
          <Reveal className="hero-copy">
            <span className="tc-eyebrow">A community that keeps growing</span>
            <h1 className="tc-display" id="hero-title">
              Beyond graduation.
              <br />
              <em>Beyond connections.</em>
            </h1>
            <p>
              An enduring home for the people, ideas and opportunities that make an institution a
              community — long after the last class ends.
            </p>
            <div className="hero-cta">
              <Link className="tc-button tc-button--primary tc-button--large" href="/app">
                Find your community <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link className="tc-button tc-button--quiet" href="#how-it-works">
                See how it works <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
            <div className="hero-note">
              <Sparkles aria-hidden="true" size={15} strokeWidth={1.7} />
              Built for every chapter of institutional life
            </div>
          </Reveal>

          <Reveal className="story-art" delay={0.14}>
            <div
              className="story-frame"
              role="group"
              aria-label="An example of alumni and student connection"
            >
              <div className="story-frame-top">
                <small>A note from the community</small>
                <Badge tone="success">Mentorship</Badge>
              </div>
              <h2>A first conversation can change the shape of what comes next.</h2>
              <p>Across graduating years, a little perspective goes a long way.</p>
              <div className="story-person">
                <Avatar initials="MC" name="Maya Chen" tone="sage" />
                <div className="story-person-copy">
                  <strong>Maya Chen</strong>
                  <span>Alumna · Class of 2018</span>
                </div>
                <ArrowUpRight aria-hidden="true" size={16} />
              </div>
              <div className="story-person">
                <Avatar initials="AR" name="Aarav Rao" tone="sand" />
                <div className="story-person-copy">
                  <strong>Aarav Rao</strong>
                  <span>Student · Class of 2027</span>
                </div>
                <ArrowUpRight aria-hidden="true" size={16} />
              </div>
              <div className="story-quote">
                <Quote aria-hidden="true" size={15} />
                <p>
                  “It helped to hear how someone else found their way through the same questions.”
                </p>
                <span>A small moment, with room to grow.</span>
              </div>
            </div>
            <span className="art-caption">A community, in conversation</span>
          </Reveal>
        </section>

        <section className="institution-band" aria-label="Platform community">
          <div className="institution-band-inner tc-container">
            <p>One institution. Many chapters.</p>
            <strong>ALUMNI</strong>
            <strong>STUDENTS</strong>
            <strong>FACULTY</strong>
            <strong>LEADERSHIP</strong>
          </div>
        </section>

        <section className="intro-section tc-container" aria-labelledby="intro-title">
          <span className="tc-eyebrow">Belonging, made lasting</span>
          <div className="intro-copy">
            <h2 className="tc-display" id="intro-title">
              The story of an institution is written by <span>everyone who is part of it.</span>
            </h2>
            <p>
              threads_connect brings alumni, students, faculty and administrators into a shared
              space. It turns a lifelong relationship into a living community — one conversation,
              introduction and opportunity at a time.
            </p>
          </div>
        </section>

        <section className="community-section" id="community" aria-labelledby="community-title">
          <div className="tc-container">
            <div className="section-heading">
              <div>
                <span className="tc-eyebrow">A place for every perspective</span>
                <h2 className="tc-display" id="community-title">
                  Connected by where you have been. Open to where you are going.
                </h2>
              </div>
              <p>
                Different roles, shared roots. Make space for the whole community to contribute and
                find their next connection.
              </p>
            </div>
            <div className="community-list">
              {community.map(({ number, title, text, icon: Icon }) => (
                <article className="community-row" key={title}>
                  <span className="community-index">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Icon aria-hidden="true" size={19} strokeWidth={1.6} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="approach-section tc-container"
          id="how-it-works"
          aria-labelledby="approach-title"
        >
          <div className="approach-grid">
            <div className="approach-intro">
              <span className="tc-eyebrow">A simple place to begin</span>
              <h2 className="tc-display" id="approach-title">
                The best connections keep finding their way back.
              </h2>
              <p>
                Designed around the people and purpose of your institution, threads_connect makes it
                easier for community to become part of everyday life.
              </p>
              <Link className="tc-button tc-button--secondary" href="/app">
                Explore the experience <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <div className="approach-steps">
              {steps.map((step) => (
                <article className="approach-step" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="closing-section"
          id="institutional-partnership"
          aria-labelledby="closing-title"
        >
          <div className="closing-inner tc-container">
            <div>
              <span className="tc-eyebrow">Your community has more to share</span>
              <h2 className="tc-display" id="closing-title">
                Make the connections that last feel closer.
              </h2>
            </div>
            <Link className="tc-button tc-button--inverse tc-button--large" href="/app">
              Step inside <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="site-footer tc-container">
        <Link href="/" aria-label="threads_connect home">
          <Wordmark />
        </Link>
        <span className="footer-note">Beyond Graduation. Beyond Connections.</span>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="#community">Our community</Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="/app">Sign in</Link>
        </nav>
      </footer>
    </div>
  );
}
