import { HOW_IT_WORKS } from '../../data/content';
import { Slugline } from '../ui/primitives';

export function HowItWorks() {
  return (
    <section className="max-w-[1120px] mx-auto px-6 sm:px-8 py-16 md:py-20 border-t border-line-soft">
      <div className="mb-12 max-w-[520px]">
        <Slugline>Nasıl çalışır</Slugline>
        <h3 className="mt-4 text-[28px] sm:text-[34px] font-bold tracking-[-.02em] text-ink balance">
          Fikirden final taslağa, üç adım.
        </h3>
      </div>
      <div className="grid sm:grid-cols-3 gap-x-8 gap-y-12">
        {HOW_IT_WORKS.map((s, i) => (
          <div key={s.step} className="relative">
            <span className="font-script text-[40px] font-bold text-accent-wash select-none leading-none">{s.step}</span>
            <h4 className="mt-3 text-[17px] font-bold tracking-[-.01em] text-ink">{s.title}</h4>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft max-w-[300px]">{s.desc}</p>
            {i < HOW_IT_WORKS.length - 1 ? (
              <span className="hidden sm:block absolute top-4 -right-4 w-8 h-px bg-line" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
