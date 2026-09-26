import type { AuthMode } from '../../types';
import { FEATURE_HIGHLIGHTS, PRICING_PLANS } from '../../data/content';
import { GhostButton, PrimaryButton, Slugline, TextButton } from '../ui/primitives';
import { SiteHeader, SiteFooter, type NavSection } from '../ui/SiteHeader';
import { IconArrowRight } from '../icons/icons';
import { DeviceMock } from './DeviceMock';
import { FeatureHighlightCard } from './FeatureHighlightCard';
import { HowItWorks } from './HowItWorks';
import { Differentiators } from './Differentiators';

interface LandingPageProps {
  onAuth: (mode: AuthMode) => void;
  onStartWriting: () => void;
  onLogo: () => void;
  onNav: (section: NavSection) => void;
}

export function LandingPage({ onAuth, onStartWriting, onLogo, onNav }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader activeSection={null} onLogo={onLogo} onNav={onNav} onAuth={onAuth} />

      <section className="relative pt-16 sm:pt-24 pb-10 overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 text-center">
          <div className="reveal">
            <Slugline>Cebinizdeki yazı odası</Slugline>
          </div>
          <h1
            className="reveal balance mt-5 text-[42px] sm:text-[64px] md:text-[76px] font-extrabold tracking-[-.03em] leading-[1.02] text-ink"
            style={{ animationDelay: '.05s' }}
          >
            Cebindeki
            <br />
            Senaryo Ofisi.
          </h1>
          <p
            className="reveal balance mt-6 text-[17px] sm:text-[19px] text-ink-soft max-w-[560px] mx-auto leading-relaxed"
            style={{ animationDelay: '.1s' }}
          >
            Fikirlerinizi yatağınızda, sette veya metroda yazın. Şablonlarla boğuşmayın, sadece hikayenize odaklanın.
          </p>
          <div className="reveal mt-9 flex items-center justify-center gap-3" style={{ animationDelay: '.15s' }}>
            <PrimaryButton size="lg" onClick={onStartWriting}>
              Hemen Yazmaya Başla
              <IconArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </PrimaryButton>
          </div>
          <p className="reveal mt-4 text-[12.5px] text-ink-faint" style={{ animationDelay: '.2s' }}>
            Kayıt olmadan deneyin — istediğinizde hesap açın.
          </p>
        </div>
        <div className="reveal mt-16 sm:mt-20 px-6" style={{ animationDelay: '.25s' }}>
          <DeviceMock />
        </div>
      </section>

      <section className="max-w-[1120px] mx-auto px-6 sm:px-8 py-16 md:py-20 border-t border-line-soft">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <Slugline>Neler sunuyoruz</Slugline>
            <h3 className="mt-4 text-[28px] sm:text-[34px] font-bold tracking-[-.02em] text-ink balance">
              Yazma sürecinin her adımı için.
            </h3>
          </div>
          <TextButton onClick={() => onNav('ozellikler')} className="inline-flex items-center gap-1.5 shrink-0">
            Tüm özellikleri incele <IconArrowRight size={14} />
          </TextButton>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {FEATURE_HIGHLIGHTS.map((f, i) => (
            <FeatureHighlightCard key={f.title} feature={f} index={i} onClick={() => onNav('ozellikler')} />
          ))}
        </div>
      </section>

      <HowItWorks />
      <Differentiators />

      <section id="akademi" className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-20 text-center">
          <Slugline>Scenariotopia Akademi</Slugline>
          <h3 className="mt-4 text-[26px] sm:text-[32px] font-bold tracking-[-.02em] balance max-w-[600px] mx-auto">
            Yazarken öğren, öğrenirken yaz.
          </h3>
          <p className="mt-4 text-[15.5px] text-ink-soft max-w-[520px] mx-auto leading-relaxed">
            Kısa dersler ve gerçek senaryo örnekleriyle zanaatını geliştir. Kaydolan her yazar Akademi’ye erişebilir.
          </p>
        </div>
      </section>

      <section id="fiyat" className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-20">
          <div className="text-center mb-12">
            <Slugline>Fiyatlandırma</Slugline>
            <h3 className="mt-4 text-[26px] sm:text-[32px] font-bold tracking-[-.02em]">Basit, dürüst planlar.</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-[720px] mx-auto">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.key}
                className={
                  plan.featured
                    ? 'rounded-[24px] border border-accent/40 bg-accent-wash p-8 relative overflow-hidden'
                    : 'rounded-[24px] border border-line bg-white p-8'
                }
              >
                <div
                  className={
                    plan.featured
                      ? 'text-[13px] font-semibold uppercase tracking-wide text-accent-ink'
                      : 'text-[13px] font-semibold uppercase tracking-wide text-ink-soft'
                  }
                >
                  {plan.label}
                </div>
                <div className="mt-3 text-[32px] font-extrabold">
                  {plan.price}
                  {plan.priceSuffix ? <span className="text-[15px] font-medium text-ink-soft">{plan.priceSuffix}</span> : null}
                </div>
                <p className={plan.featured ? 'mt-3 text-[14px] text-ink/70 leading-relaxed' : 'mt-3 text-[14px] text-ink-soft leading-relaxed'}>
                  {plan.desc}
                </p>
                {plan.featured ? (
                  <PrimaryButton onClick={() => onAuth('signup')} className="mt-6 w-full">
                    Ücretsiz Kayıt Ol
                  </PrimaryButton>
                ) : (
                  <GhostButton onClick={onStartWriting} className="mt-6 w-full">
                    Yazmaya Başla
                  </GhostButton>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
