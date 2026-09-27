import type { ReactNode } from 'react';
import type { IconComponent } from '../../types';
import { cx } from '../../utils/cx';

interface FeatureRowProps {
  reverse?: boolean;
  index: number;
  title: string;
  desc: string;
  visual: ReactNode;
}

export function FeatureRow({ reverse, index, title, desc, visual }: FeatureRowProps) {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-20 border-t border-line-soft">
      <div className={cx('order-2', reverse ? 'md:order-2' : 'md:order-1')}>
        <span className="font-script inline-flex items-center justify-center w-8 h-8 rounded-[8px] text-[13px] font-bold text-white bg-ink">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-4 text-[28px] sm:text-[34px] font-bold tracking-[-.02em] text-ink balance">{title}</h3>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft max-w-[440px]">{desc}</p>
      </div>
      <div className={cx('order-1', reverse ? 'md:order-1' : 'md:order-2', 'flex justify-center')}>{visual}</div>
    </div>
  );
}

export function PaperVisual({ icon: Icon }: { icon: IconComponent }) {
  return (
    <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[20px] bg-bg-alt flex items-center justify-center overflow-hidden">
      <div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center text-ink-soft shadow-[0_1px_2px_rgba(10,10,10,.06)]">
        <Icon size={32} strokeWidth={1.5} />
      </div>
    </div>
  );
}
