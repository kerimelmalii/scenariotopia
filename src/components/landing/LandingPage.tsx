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
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';
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
      <SiteHeader activePage={null} onLogo={onLogo} onNav={onNav} onAuth={onAuth} transparentOnTop />

      <section className="relative overflow-hidden bg-hero-bg hero-scene">
        <div className="absolute inset-0 hero-grain pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1120px] mx-auto px-6 sm:px-8 pt-32 sm:pt-44 pb-20 sm:pb-28 text-center">
          <Reveal>
            <span className="slugline inline-flex items-center gap-2 text-[11px] text-hero-ink-soft">
              <span className="text-accent-2">—</span> {HERO.kicker}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display balance mt-6 text-[44px] sm:text-[72px] md:text-[88px] font-semibold tracking-[-.02em] leading-[1.05] text-hero-ink">
              {HERO.title[0]}
              <br />
              <span className="italic text-hero-ink-soft">{HERO.title[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="balance mt-7 text-[17px] sm:text-[19px] text-hero-ink-soft max-w-[560px] mx-auto leading-relaxed">{HERO.desc}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <PrimaryButton size="lg" onClick={onStartWriting} className="!bg-hero-ink !text-hero-bg hover:!bg-white">
                Hemen Yazmaya Başla
                <IconArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </PrimaryButton>
              <GhostButton
                onClick={() => onAuth('signup')}
                className="!px-7 !py-3.5 !text-[15px] !bg-transparent !border-hero-line !text-hero-ink hover:!bg-white/5"
              >
                Kayıt Ol
              </GhostButton>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-5 text-[12.5px] text-hero-ink-soft/70">{HERO.note}</p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-transparent to-bg pointer-events-none" />
      </section>

      <section className="relative -mt-16 sm:-mt-20 pb-10 px-6">
        <Reveal delay={0.1}>
          <DeviceMock />
        </Reveal>
      </section>

      <section className="max-w-[1120px] mx-auto px-6 sm:px-8 py-16 md:py-20 border-t border-line-soft">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <Slugline>{FEATURES_INTRO.kicker}</Slugline>
              <h3 className="font-display mt-4 text-[28px] sm:text-[36px] text-ink balance">{FEATURES_INTRO.title}</h3>
            </div>
            <TextButton onClick={() => onNav('ozellikler')} className="inline-flex items-center gap-1.5 shrink-0">
              Tüm özellikleri incele <IconArrowRight size={14} />
            </TextButton>
          </div>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-3 gap-5">
          {FEATURE_HIGHLIGHTS.map((f) => (
            <RevealItem key={f.title}>
              <FeatureHighlightCard feature={f} onClick={() => onNav('ozellikler')} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-16 md:py-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <Slugline>{FORMAT_INTRO.kicker}</Slugline>
                <h3 className="font-display mt-4 text-[28px] sm:text-[36px] text-ink balance">{FORMAT_INTRO.title}</h3>
                <p className="mt-3 text-[15px] text-ink-soft max-w-[440px]">{FORMAT_INTRO.desc}</p>
              </div>
              <TextButton onClick={() => onNav('format')} className="inline-flex items-center gap-1.5 shrink-0">
                Tüm formatları incele <IconArrowRight size={14} />
              </TextButton>
            </div>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FORMAT_TYPES.map((f) => (
              <RevealItem key={f.title}>
                <FormatCard format={f} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-20 text-center">
          <Reveal>
            <Slugline>{ACADEMY_INTRO.kicker}</Slugline>
            <h3 className="font-display mt-4 text-[26px] sm:text-[34px] text-ink balance max-w-[600px] mx-auto">{ACADEMY_INTRO.title}</h3>
            <p className="mt-4 text-[15.5px] text-ink-soft max-w-[520px] mx-auto leading-relaxed">{ACADEMY_INTRO.desc}</p>
            <TextButton onClick={() => onNav('akademi')} className="mt-6 inline-flex items-center gap-1.5">
              Kursları keşfet <IconArrowRight size={14} />
            </TextButton>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-20">
          <Reveal>
            <div className="text-center mb-12">
              <Slugline>{PRICING_INTRO.kicker}</Slugline>
              <h3 className="font-display mt-4 text-[26px] sm:text-[34px] text-ink">{PRICING_INTRO.title}</h3>
            </div>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 gap-6 max-w-[720px] mx-auto">
            {PRICING_PLANS.map((plan) => (
              <RevealItem key={plan.key}>
                <PricingPlanCard plan={plan} onPrimaryAction={plan.featured ? () => onAuth('signup') : onStartWriting} />
              </RevealItem>
            ))}
          </RevealGroup>
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
