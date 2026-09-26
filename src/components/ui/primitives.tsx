import { useEffect, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { IconChevronRight, IconX } from '../icons/icons';
import { cx } from '../../utils/cx';

/**
 * Slugline — the site's signature label, styled after a screenplay scene
 * heading (INT./EXT. — DAY) instead of a generic pill-and-dot "kicker".
 */
export function Slugline({ children }: { children: ReactNode }) {
  return (
    <span className="slugline inline-flex items-center gap-2 text-[11px] text-accent-ink">
      <span className="text-accent">—</span>
      {children}
    </span>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'lg';
}

export function PrimaryButton({ size = 'md', className, children, ...rest }: ButtonProps) {
  const sizeCls = size === 'lg' ? 'px-7 py-3.5 text-[15px]' : 'px-5 py-2.5 text-[14px]';
  return (
    <button
      type="button"
      {...rest}
      className={cx(
        'group inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white',
        'bg-accent shadow-[0_10px_24px_-10px_rgba(10,102,194,.55)]',
        'hover:bg-accent-ink hover:shadow-[0_14px_30px_-10px_rgba(10,102,194,.6)] hover:-translate-y-[1px]',
        'active:translate-y-0 transition-all duration-200',
        sizeCls,
        className,
      )}
    >
      {children}
    </button>
  );
}

export function GhostButton({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium text-ink',
        'border border-line bg-white hover:border-ink/30 hover:bg-bg-alt transition-colors duration-150',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function TextButton({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={cx('text-[14px] font-medium text-ink/80 hover:text-ink transition-colors', className)}
    >
      {children}
    </button>
  );
}

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export function TextField({ label, value, onChange, type = 'text', placeholder, required }: TextFieldProps) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold uppercase tracking-[.08em] text-ink-soft mb-1.5">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-line bg-bg-alt px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all"
      />
    </label>
  );
}

interface SelectFieldProps<T extends string> {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: readonly T[];
}

export function SelectField<T extends string>({ label, value, onChange, options }: SelectFieldProps<T>) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold uppercase tracking-[.08em] text-ink-soft mb-1.5">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(ev) => onChange(ev.target.value as T)}
          className="w-full appearance-none rounded-xl border border-line bg-bg-alt px-4 py-3 text-[15px] text-ink outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft">
          <IconChevronRight size={14} className="rotate-90" />
        </div>
      </div>
    </label>
  );
}

interface ModalProps {
  onClose: () => void;
  maxWidth?: string;
  children: ReactNode;
}

export function Modal({ onClose, maxWidth, children }: ModalProps) {
  useEffect(() => {
    function onKey(ev: KeyboardEvent) {
      if (ev.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-ink/30 backdrop-blur-sm reveal"
        style={{ animationDuration: '.25s' }}
        onClick={onClose}
      />
      <div
        className={cx(
          'relative w-full reveal bg-white rounded-[26px] border border-line shadow-[0_30px_80px_-20px_rgba(29,29,31,.35)] p-7 sm:p-9',
          maxWidth || 'max-w-[440px]',
        )}
        style={{ animationDuration: '.35s' }}
      >
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-5 top-5 w-8 h-8 rounded-full flex items-center justify-center text-ink-soft hover:text-ink hover:bg-bg-alt transition-colors"
        >
          <IconX size={16} />
        </button>
        {children}
      </div>
    </div>
  );
}

export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true" className="shrink-0">
      <rect x={1} y={1} width={20} height={20} rx={6} className="fill-ink" />
      <path d="M6 8h10M6 11h7" stroke="white" strokeWidth={1.4} strokeLinecap="round" />
      <circle cx={7} cy={14.5} r={1.1} className="fill-accent-2" />
      <path d="M9.5 14.5h6.5" stroke="white" strokeWidth={1.4} strokeLinecap="round" opacity={0.55} />
    </svg>
  );
}

export function Logo({ size = 'text-[19px]', withMark = true }: { size?: string; withMark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 select-none">
      {withMark ? <LogoMark size={size === 'text-[15px]' ? 20 : 24} /> : null}
      <span className={cx('inline-flex items-baseline gap-[1px] font-extrabold tracking-[-.01em]', size)}>
        <span className="text-ink">Scenario</span>
        <span className="font-normal text-ink-soft">topia</span>
      </span>
    </span>
  );
}
