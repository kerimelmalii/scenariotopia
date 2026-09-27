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
        'bg-ink shadow-[0_10px_24px_-10px_rgba(10,10,10,.45)]',
        'hover:bg-ink/85 hover:shadow-[0_14px_30px_-10px_rgba(10,10,10,.5)] hover:-translate-y-[1px]',
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

/** The six category colors, in the fixed order used across the logo stripe
 * motif, course/event category coding and anywhere a "which category" signal
 * is needed. Index 0-5 maps 1:1 to CATEGORY_COLORS in data/content.ts. */
export const CATEGORY_COLORS = [
  'var(--c-bordo)',
  'var(--c-coral)',
  'var(--c-purple)',
  'var(--c-blue)',
  'var(--c-turquoise)',
  'var(--c-green)',
] as const;

export function LogoStripes({ barHeight = 10 }: { barHeight?: number }) {
  return (
    <span className="inline-flex items-center gap-[3px]" aria-hidden="true">
      {CATEGORY_COLORS.map((color, i) => (
        <span
          key={i}
          className="rounded-[2px] shrink-0"
          style={{ width: barHeight * 0.4, height: barHeight, background: color, transform: 'skewX(-16deg)' }}
        />
      ))}
    </span>
  );
}

export function Logo({ size = 'text-[19px]', withStripes = false }: { size?: string; withStripes?: boolean }) {
  const wordmark = (
    <span className={cx('inline-flex items-baseline gap-[1px] font-extrabold tracking-[-.01em]', size)}>
      <span className="text-ink">Senaryo</span>
      <span className="font-normal text-ink-soft">topia</span>
    </span>
  );
  if (!withStripes) {
    return <span className="inline-flex items-center select-none">{wordmark}</span>;
  }
  return (
    <span className="inline-flex flex-col items-start gap-2 select-none">
      {wordmark}
      <LogoStripes barHeight={size === 'text-[15px]' ? 9 : 12} />
    </span>
  );
}

/**
 * CategoryStripe — the "which of the six categories is this" indicator used
 * on course/event cards: the item's own color is lit, the other five stay
 * passive gray, echoing the logo's stripe motif at content-card scale.
 */
export function CategoryStripe({ activeIndex, barHeight = 8 }: { activeIndex: number; barHeight?: number }) {
  return (
    <span className="inline-flex items-center gap-[3px]" aria-hidden="true">
      {CATEGORY_COLORS.map((color, i) => (
        <span
          key={i}
          className="rounded-[2px] shrink-0"
          style={{
            width: barHeight * 0.4,
            height: barHeight,
            background: i === activeIndex ? color : 'var(--line)',
            transform: 'skewX(-16deg)',
          }}
        />
      ))}
    </span>
  );
}
