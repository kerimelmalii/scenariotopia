import type { ReactNode } from 'react';
import { Slugline } from './primitives';
import { Reveal } from './Reveal';

interface PageHeroProps {
  kicker: string;
  title: ReactNode;
  desc?: string;
}

export function PageHero({ kicker, title, desc }: PageHeroProps) {
  return (
    <section className="pt-16 sm:pt-20 pb-8">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 text-center">
        <Reveal>
          <Slugline>{kicker}</Slugline>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="font-display balance mt-5 text-[38px] sm:text-[56px] leading-[1.08] text-ink">{title}</h1>
        </Reveal>
        {desc ? (
          <Reveal delay={0.12}>
            <p className="balance mt-6 text-[16px] sm:text-[18px] text-ink-soft max-w-[560px] mx-auto leading-relaxed">{desc}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
