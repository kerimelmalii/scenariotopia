import type { WritingEvent } from '../../data/content';
import { CATEGORY_COLORS } from '../ui/primitives';

export function EventCard({ event }: { event: WritingEvent }) {
  const Icon = event.icon;
  const color = CATEGORY_COLORS[event.categoryIndex];
  return (
    <div className="rounded-[22px] border border-line bg-white p-6 flex items-start gap-4 hover:-translate-y-[2px] hover:shadow-[0_18px_38px_-20px_rgba(10,10,10,.22)] transition-all duration-200">
      <div
        className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center border"
        style={{ color, borderColor: `color-mix(in srgb, ${color} 35%, white)`, background: `color-mix(in srgb, ${color} 8%, white)` }}
      >
        <Icon size={18} strokeWidth={1.6} />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
          <span className="font-script text-[10.5px] font-bold uppercase tracking-[.06em]" style={{ color }}>
            {event.format}
          </span>
          <span className="text-[11px] text-ink-faint">· {event.when}</span>
        </div>
        <div className="text-[15.5px] font-bold tracking-[-.01em] text-ink">{event.title}</div>
        <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{event.desc}</p>
      </div>
    </div>
  );
}
