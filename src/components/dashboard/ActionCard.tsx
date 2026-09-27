import type { IconComponent } from '../../types';
import { cx } from '../../utils/cx';

interface ActionCardProps {
  icon: IconComponent;
  eyebrow: string;
  title: string;
  desc: string;
  chip?: string | null;
  featured?: boolean;
  onClick: () => void;
}

export function ActionCard({ icon: Icon, eyebrow, title, desc, chip, featured, onClick }: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cx(
        'text-left rounded-[22px] border p-6 transition-all duration-200 hover:-translate-y-[2px] group',
        featured
          ? 'border-transparent bg-ink text-white shadow-[0_20px_45px_-18px_rgba(29,29,31,.55)] hover:shadow-[0_26px_55px_-16px_rgba(29,29,31,.6)]'
          : 'border-line bg-white hover:border-ink/20 hover:shadow-[0_18px_38px_-20px_rgba(29,29,31,.25)]',
      )}
    >
      <div className="flex items-center justify-between mb-5">
        <span className={cx('font-script text-[11px] font-bold uppercase tracking-[.1em]', featured ? 'text-accent-2' : 'text-accent-ink')}>
          {eyebrow}
        </span>
        <span className={featured ? 'text-white/70' : 'text-ink-faint'}>
          <Icon size={17} strokeWidth={1.7} />
        </span>
      </div>
      <div className={cx('text-[16px] font-bold tracking-[-.01em]', featured ? 'text-white' : 'text-ink')}>{title}</div>
      <p className={cx('mt-1.5 text-[13.5px] leading-relaxed', featured ? 'text-white/65' : 'text-ink-soft')}>{desc}</p>
      {chip ? (
        <div
          className={cx(
            'font-script mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[.06em] rounded-full px-3 py-1',
            featured ? 'bg-white/10 text-accent-2' : 'bg-accent-wash text-accent-ink',
          )}
        >
          {chip}
        </div>
      ) : null}
    </button>
  );
}
