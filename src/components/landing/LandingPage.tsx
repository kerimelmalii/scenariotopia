import type { AuthMode } from '../../types';
import {
  ACADEMY_INTRO,
  FEATURE_HIGHLIGHTS,
  FEATURES_INTRO,
  FORMAT_INTRO,
  FORMAT_TYPES,
  HERO,
  PRICING_INTRO,
  PRICING_PLANS,
} from '../../data/content';
import { GhostButton, PrimaryButton, Slugline, TextButton } from '../ui/primitives';
import { SiteHeader, SiteFooter, type PublicPage } from '../ui/SiteHeader';
import { IconArrowRight } from '../icons/icons';
import { DeviceMock } from './DeviceMock';
import { FeatureHighlightCard } from './FeatureHighlightCard';
import { Newsletter } from './Newsletter';
import { FormatCard } from '../format/FormatCard';
import { PricingPlanCard } from '../pricing/PricingPlanCard';

interface LandingPageProps {
  onAuth: (mode: AuthMode) => void;
  onStartWriting: () => void;
  onLogo: () => void;
  onNav: (page: PublicPage) => void;
}

export function LandingPage({ onAuth, onStartWriting, onLogo, onNav }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader activePage={null} onLogo={onLogo} onNav={onNav} onAuth={onAuth} />

      <section className="relative pt-16 sm:pt-24 pb-10 overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 text-center">
          <div className="reveal">
            <Slugline>{HERO.kicker}</Slugline>
          </div>
          <h1
            className="reveal balance mt-5 text-[42px] sm:text-[64px] md:text-[76px] font-extrabold tracking-[-.03em] leading-[1.02] text-ink"
            style={{ animationDelay: '.05s' }}
          >
            {HERO.title[0]}
            <br />
            {HERO.title[1]}
          </h1>
          <p
            className="reveal balance mt-6 text-[17px] sm:text-[19px] text-ink-soft max-w-[560px] mx-auto leading-relaxed"
            style={{ animationDelay: '.1s' }}
          >
            {HERO.desc}
          </p>
          <div className="reveal mt-9 flex flex-col sm:flex-row items-center justify-center gap-3" style={{ animationDelay: '.15s' }}>
            <PrimaryButton size="lg" onClick={onStartWriting}>
              Hemen Yazmaya Başla
              <IconArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </PrimaryButton>
            <GhostButton onClick={() => onAuth('signup')} className="!px-7 !py-3.5 !text-[15px]">
              Kayıt Ol
            </GhostButton>
          </div>
          <p className="reveal mt-4 text-[12.5px] text-ink-faint" style={{ animationDelay: '.2s' }}>
            {HERO.note}
          </p>
        </div>
        <div className="reveal mt-16 sm:mt-20 px-6" style={{ animationDelay: '.25s' }}>
          <DeviceMock />
        </div>
      </section>

      <section className="max-w-[1120px] mx-auto px-6 sm:px-8 py-16 md:py-20 border-t border-line-soft">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <Slugline>{FEATURES_INTRO.kicker}</Slugline>
            <h3 className="mt-4 text-[28px] sm:text-[34px] font-bold tracking-[-.02em] text-ink balance">{FEATURES_INTRO.title}</h3>
          </div>
          <TextButton onClick={() => onNav('ozellikler')} className="inline-flex items-center gap-1.5 shrink-0">
            Tüm özellikleri incele <IconArrowRight size={14} />
          </TextButton>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {FEATURE_HIGHLIGHTS.map((f) => (
            <FeatureHighlightCard key={f.title} feature={f} onClick={() => onNav('ozellikler')} />
          ))}
        </div>
      </section>

      <section className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-16 md:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <Slugline>{FORMAT_INTRO.kicker}</Slugline>
              <h3 className="mt-4 text-[28px] sm:text-[34px] font-bold tracking-[-.02em] text-ink balance">{FORMAT_INTRO.title}</h3>
              <p className="mt-3 text-[15px] text-ink-soft max-w-[440px]">{FORMAT_INTRO.desc}</p>
            </div>
            <TextButton onClick={() => onNav('format')} className="inline-flex items-center gap-1.5 shrink-0">
              Tüm formatları incele <IconArrowRight size={14} />
            </TextButton>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FORMAT_TYPES.map((f) => (
              <FormatCard key={f.title} format={f} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-20 text-center">
          <Slugline>{ACADEMY_INTRO.kicker}</Slugline>
          <h3 className="mt-4 text-[26px] sm:text-[32px] font-bold tracking-[-.02em] balance max-w-[600px] mx-auto">{ACADEMY_INTRO.title}</h3>
          <p className="mt-4 text-[15.5px] text-ink-soft max-w-[520px] mx-auto leading-relaxed">{ACADEMY_INTRO.desc}</p>
          <TextButton onClick={() => onNav('akademi')} className="mt-6 inline-flex items-center gap-1.5">
            Kursları keşfet <IconArrowRight size={14} />
          </TextButton>
        </div>
      </section>

      <section className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-20">
          <div className="text-center mb-12">
            <Slugline>{PRICING_INTRO.kicker}</Slugline>
            <h3 className="mt-4 text-[26px] sm:text-[32px] font-bold tracking-[-.02em]">{PRICING_INTRO.title}</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-[720px] mx-auto">
            {PRICING_PLANS.map((plan) => (
              <PricingPlanCard key={plan.key} plan={plan} onPrimaryAction={plan.featured ? () => onAuth('signup') : onStartWriting} />
            ))}
          </div>
          <div className="text-center mt-6">
            <TextButton onClick={() => onNav('fiyat')} className="inline-flex items-center gap-1.5">
              Sık sorulan sorular <IconArrowRight size={14} />
            </TextButton>
          </div>
        </div>
      </section>

      <Newsletter />

      <SiteFooter />
    </div>
  );
}
