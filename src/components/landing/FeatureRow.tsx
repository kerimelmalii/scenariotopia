import type { ReactNode } from 'react';
import type { IconComponent } from '../../types';
import { cx } from '../../utils/cx';
import { CATEGORY_COLORS } from '../ui/primitives';

interface FeatureRowProps {
  reverse?: boolean;
  categoryIndex: number;
  index: number;
  title: string;
  desc: string;
  visual: ReactNode;
}

export function FeatureRow({ reverse, categoryIndex, index, title, desc, visual }: FeatureRowProps) {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-20 border-t border-line-soft">
      <div className={cx('order-2', reverse ? 'md:order-2' : 'md:order-1')}>
        <span
          className="font-script inline-flex items-center justify-center w-8 h-8 rounded-[8px] text-[13px] font-bold text-white"
          style={{ background: CATEGORY_COLORS[categoryIndex] }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-4 text-[28px] sm:text-[34px] font-bold tracking-[-.02em] text-ink balance">{title}</h3>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft max-w-[440px]">{desc}</p>
      </div>
      <div className={cx('order-1', reverse ? 'md:order-1' : 'md:order-2', 'flex justify-center')}>{visual}</div>
    </div>
  );
}

export function PaperVisual({ icon: Icon, categoryIndex }: { icon: IconComponent; categoryIndex: number }) {
  return (
    <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[4px] border border-line bg-bg-alt paper-grain flex items-center justify-center overflow-hidden shadow-[0_30px_60px_-30px_rgba(10,10,10,.18)]">
      <div
        className="absolute -top-3 left-10 w-14 h-6 rotate-[-6deg] border"
        style={{ background: `color-mix(in srgb, ${CATEGORY_COLORS[categoryIndex]} 14%, white)`, borderColor: `color-mix(in srgb, ${CATEGORY_COLORS[categoryIndex]} 30%, white)` }}
        aria-hidden="true"
      />
      <div
        className="relative w-20 h-20 rounded-full bg-white border border-line shadow-[0_20px_40px_-15px_rgba(10,10,10,.22)] flex items-center justify-center"
        style={{ color: CATEGORY_COLORS[categoryIndex] }}
      >
        <Icon size={32} strokeWidth={1.5} />
      </div>
    </div>
  );
}
