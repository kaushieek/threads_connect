'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

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
  const reduceMotion = useReducedMotion();

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
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      className="tc-icon-button"
      onClick={toggle}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
      title={`Switch to ${dark ? 'light' : 'dark'} theme`}
      type="button"
    >
      {dark ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
    </motion.button>
  );
}
