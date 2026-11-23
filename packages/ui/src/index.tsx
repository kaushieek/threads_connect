import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'primary' | 'quiet';
};

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={`tc-button tc-button--${variant} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

export function Wordmark() {
  return (
    <span className="tc-wordmark" aria-label="threads_connect">
      <span aria-hidden="true" className="tc-mark">
        t
      </span>{' '}
      threads<span className="tc-wordmark__accent">_connect</span>
    </span>
  );
}
