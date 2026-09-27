import type { WritingEvent } from '../../data/content';
import { CATEGORY_COLORS } from '../ui/primitives';

export function EventCard({ event }: { event: WritingEvent }) {
  const Icon = event.icon;
  const color = CATEGORY_COLORS[event.categoryIndex];
  return (
    <div className="rounded-[20px] bg-bg-alt p-6 flex items-start gap-4 hover:-translate-y-[2px] transition-all duration-200">
      <div className="w-11 h-11 shrink-0 rounded-full bg-white flex items-center justify-center" style={{ color }}>
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
