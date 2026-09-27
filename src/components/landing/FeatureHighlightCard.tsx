import type { FeatureHighlight } from '../../data/content';
import { CATEGORY_COLORS } from '../ui/primitives';

export function FeatureHighlightCard({ feature, onClick }: { feature: FeatureHighlight; onClick: () => void }) {
  const Icon = feature.icon;
  const color = CATEGORY_COLORS[feature.categoryIndex];
  return (
    <button
      onClick={onClick}
      className="group text-left rounded-[4px] border border-line bg-white p-7 hover:-translate-y-[2px] hover:shadow-[0_18px_38px_-20px_rgba(10,10,10,.22)] transition-all duration-200"
      style={{ borderTopColor: color, borderTopWidth: 3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="font-script text-[11px] font-bold uppercase tracking-[.08em]" style={{ color }}>
          {feature.eyebrow}
        </span>
        <span style={{ color }}>
          <Icon size={18} strokeWidth={1.6} />
        </span>
      </div>
      <div className="text-[16px] font-bold tracking-[-.01em] text-ink">{feature.title}</div>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{feature.desc}</p>
    </button>
  );
}
