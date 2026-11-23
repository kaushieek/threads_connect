'use client';

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleHelp,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import {
  useEffect,
  useId,
  useRef,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type PropsWithChildren,
  type SelectHTMLAttributes,
} from 'react';

export {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleHelp,
  Menu,
  Moon,
  Sun,
  X,
};

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'primary' | 'secondary' | 'quiet' | 'inverse';
  size?: 'small' | 'medium' | 'large';
};

export function Button({
  variant = 'primary',
  size = 'medium',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`tc-button tc-button--${variant} tc-button--${size} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`tc-wordmark${compact ? ' tc-wordmark--compact' : ''}`}>
      <BrandMark />
      <span aria-label="threads_connect">
        threads<span className="tc-wordmark__accent">_connect</span>
      </span>
    </span>
  );
}

export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`tc-brand-mark ${className}`.trim()}
      fill="none"
      viewBox="0 0 36 36"
    >
      <rect className="tc-brand-mark__field" height="36" rx="12" width="36" />
      <path
        d="M11 25V12.8c0-2.2 1.3-3.8 3.4-3.8 2.2 0 3.6 1.5 3.6 3.8v12.4c0 2.2 1.3 3.8 3.5 3.8 2.1 0 3.5-1.6 3.5-3.8V12"
        className="tc-brand-mark__thread"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
      <path
        d="M8.5 16.5h18"
        className="tc-brand-mark__crossing"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Badge({
  children,
  tone = 'neutral',
}: PropsWithChildren<{ tone?: 'neutral' | 'success' | 'accent' }>) {
  return <span className={`tc-badge tc-badge--${tone}`}>{children}</span>;
}

export function Avatar({
  initials,
  name,
  tone = 'sage',
  size = 'medium',
}: {
  initials: string;
  name: string;
  tone?: 'sage' | 'sand' | 'blue' | 'rose';
  size?: 'small' | 'medium' | 'large';
}) {
  return (
    <span
      className={`tc-avatar tc-avatar--${tone} tc-avatar--${size}`}
      role="img"
      aria-label={name}
    >
      {initials}
    </span>
  );
}

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function TextField({ label, hint, error, id, className = '', ...props }: TextFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const messageId = `${fieldId}-message`;
  return (
    <label className="tc-field" htmlFor={fieldId}>
      <span className="tc-field__label">{label}</span>
      <input
        className={`tc-input${error ? ' tc-input--error' : ''} ${className}`.trim()}
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={hint || error ? messageId : undefined}
        {...props}
      />
      {(hint || error) && (
        <span
          className={`tc-field__message${error ? ' tc-field__message--error' : ''}`}
          id={messageId}
        >
          {error ?? hint}
        </span>
      )}
    </label>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  hint?: string;
  options: ReadonlyArray<{ value: string; label: string }>;
};

export function SelectField({
  label,
  hint,
  id,
  options,
  className = '',
  ...props
}: SelectFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return (
    <label className="tc-field" htmlFor={fieldId}>
      <span className="tc-field__label">{label}</span>
      <span className="tc-select-wrap">
        <select className={`tc-select ${className}`.trim()} id={fieldId} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" size={16} />
      </span>
      {hint && <span className="tc-field__message">{hint}</span>}
    </label>
  );
}

export function Tooltip({ label, children }: PropsWithChildren<{ label: string }>) {
  const tooltipId = useId();
  return (
    <span
      className="tc-tooltip"
      tabIndex={0}
      role="group"
      aria-label={label}
      aria-describedby={tooltipId}
    >
      {children}
      <span className="tc-tooltip__content" id={tooltipId} role="tooltip">
        {label}
      </span>
    </span>
  );
}

export function DropdownMenu({ label, children }: PropsWithChildren<{ label: string }>) {
  return (
    <details className="tc-dropdown">
      <summary aria-label={label}>
        {label} <ChevronDown aria-hidden="true" size={14} />
      </summary>
      <div className="tc-dropdown__content">{children}</div>
    </details>
  );
}

export function NavigationMenu({
  label,
  children,
  className = '',
}: PropsWithChildren<{ label: string; className?: string }>) {
  return (
    <nav aria-label={label} className={`tc-navigation ${className}`.trim()}>
      {children}
    </nav>
  );
}

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
}: PropsWithChildren<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
}>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      className="tc-dialog"
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onClose={() => onOpenChange(false)}
      onClick={(event) => {
        if (event.target === dialogRef.current) onOpenChange(false);
      }}
    >
      <div className="tc-dialog__header">
        <div>
          <h2 id={titleId}>{title}</h2>
          {description && <p id={descriptionId}>{description}</p>}
        </div>
        <button
          className="tc-icon-button"
          type="button"
          aria-label="Close dialog"
          onClick={() => onOpenChange(false)}
        >
          <X aria-hidden="true" size={18} />
        </button>
      </div>
      <div className="tc-dialog__body">{children}</div>
    </dialog>
  );
}
