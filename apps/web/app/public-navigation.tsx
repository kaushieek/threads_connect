'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#community', label: 'Our community' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#institutional-partnership', label: 'For institutions' },
];

export function PublicNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        id="main-navigation"
        className="header-nav"
        aria-label="Main navigation"
        data-open={open}
      >
        {links.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
      <button
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="main-navigation"
        className="mobile-menu-toggle"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
      </button>
    </>
  );
}
