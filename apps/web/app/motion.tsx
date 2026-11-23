'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { PropsWithChildren } from 'react';

export function Reveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
