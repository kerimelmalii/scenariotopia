import type { FormatType } from '../../data/content';
import { CATEGORY_COLORS } from '../ui/primitives';

export function FormatCard({ format }: { format: FormatType }) {
  const Icon = format.icon;
  const color = CATEGORY_COLORS[format.categoryIndex];
  return (
    <div
      className="rounded-[4px] border border-line bg-white p-7 hover:-translate-y-[2px] hover:shadow-[0_18px_38px_-20px_rgba(10,10,10,.22)] transition-all duration-200"
      style={{ borderTopColor: color, borderTopWidth: 3 }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-5 border"
        style={{ color, borderColor: `color-mix(in srgb, ${color} 35%, white)`, background: `color-mix(in srgb, ${color} 8%, white)` }}
      >
        <Icon size={19} strokeWidth={1.6} />
      </div>
      <div className="text-[16px] font-bold tracking-[-.01em] text-ink">{format.title}</div>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{format.desc}</p>
    </div>
  );
}
