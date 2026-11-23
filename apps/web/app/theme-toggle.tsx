'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { motion } from 'motion/react';

function subscribe(onChange: () => void) {
  window.addEventListener('tc-theme-change', onChange);
  return () => window.removeEventListener('tc-theme-change', onChange);
}

function getSnapshot() {
  return document.documentElement.dataset.theme === 'dark';
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  useEffect(() => {
    const saved = localStorage.getItem('tc-theme');
    const initial = saved
      ? saved === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = initial ? 'dark' : 'light';
    window.dispatchEvent(new Event('tc-theme-change'));
  }, []);
  function toggle() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('tc-theme', next ? 'dark' : 'light');
    window.dispatchEvent(new Event('tc-theme-change'));
  }
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
      title="Change theme"
    >
      {dark ? '☼' : '◐'}
    </motion.button>
  );
}
