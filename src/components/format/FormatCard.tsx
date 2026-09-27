import type { FormatType } from '../../data/content';

export function FormatCard({ format }: { format: FormatType }) {
  const Icon = format.icon;
  return (
    <div className="rounded-[20px] bg-bg-alt p-7 hover:-translate-y-[2px] transition-all duration-200">
      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center mb-5 text-ink-soft shadow-[0_1px_2px_rgba(10,10,10,.06)]">
        <Icon size={19} strokeWidth={1.6} />
      </div>
      <div className="text-[16px] font-bold tracking-[-.01em] text-ink">{format.title}</div>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{format.desc}</p>
    </div>
  );
}
