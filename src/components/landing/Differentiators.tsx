import { DIFFERENTIATORS } from '../../data/content';
import { Slugline } from '../ui/primitives';

export function Differentiators() {
  return (
    <section className="bg-bg-alt border-t border-line-soft">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-16 md:py-20">
        <div className="mb-12 max-w-[560px]">
          <Slugline>Neden Scenariotopia</Slugline>
          <h3 className="mt-4 text-[28px] sm:text-[34px] font-bold tracking-[-.02em] text-ink balance">
            Word değil, senaryo için tasarlandı.
          </h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className="rounded-[4px] bg-white border border-line p-6">
                <div className="text-accent-ink mb-4">
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <div className="text-[15px] font-bold tracking-[-.01em] text-ink">{d.title}</div>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
