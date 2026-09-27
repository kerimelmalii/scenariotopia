import type { ReactNode } from 'react';
import { Slugline } from './primitives';

interface PageHeroProps {
  kicker: string;
  title: ReactNode;
  desc?: string;
}

export function PageHero({ kicker, title, desc }: PageHeroProps) {
  return (
    <section className="pt-16 sm:pt-20 pb-8">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 text-center">
        <div className="reveal">
          <Slugline>{kicker}</Slugline>
        </div>
        <h1
          className="reveal balance mt-5 text-[36px] sm:text-[52px] font-extrabold tracking-[-.03em] leading-[1.05] text-ink"
          style={{ animationDelay: '.05s' }}
        >
          {title}
        </h1>
        {desc ? (
          <p
            className="reveal balance mt-6 text-[16px] sm:text-[18px] text-ink-soft max-w-[560px] mx-auto leading-relaxed"
            style={{ animationDelay: '.1s' }}
          >
            {desc}
          </p>
        ) : null}
      </div>
    </section>
  );
}
