import type { FeatureHighlight } from '../../data/content';

export function FeatureHighlightCard({ feature, index, onClick }: { feature: FeatureHighlight; index: number; onClick: () => void }) {
  const Icon = feature.icon;
  return (
    <button
      onClick={onClick}
      className="group text-left rounded-[4px] border border-line bg-white p-7 hover:-translate-y-[2px] hover:border-ink/20 hover:shadow-[0_18px_38px_-20px_rgba(29,29,31,.25)] transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-script text-[13px] font-bold text-ink-faint group-hover:text-accent-ink transition-colors">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-accent-ink">
          <Icon size={18} strokeWidth={1.6} />
        </span>
      </div>
      <div className="text-[16px] font-bold tracking-[-.01em] text-ink">{feature.title}</div>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{feature.desc}</p>
    </button>
  );
}
