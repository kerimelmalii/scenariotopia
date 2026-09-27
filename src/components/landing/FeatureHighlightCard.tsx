import type { FeatureHighlight } from '../../data/content';

export function FeatureHighlightCard({ feature, onClick }: { feature: FeatureHighlight; onClick: () => void }) {
  const Icon = feature.icon;
  return (
    <button onClick={onClick} className="group text-left rounded-[20px] bg-bg-alt p-7 hover:-translate-y-[2px] transition-all duration-200">
      <div className="flex items-center justify-between mb-6">
        <span className="font-script text-[11px] font-bold uppercase tracking-[.08em] text-ink-soft">{feature.eyebrow}</span>
        <span className="text-ink-soft">
          <Icon size={18} strokeWidth={1.6} />
        </span>
      </div>
      <div className="text-[16px] font-bold tracking-[-.01em] text-ink">{feature.title}</div>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{feature.desc}</p>
    </button>
  );
}
