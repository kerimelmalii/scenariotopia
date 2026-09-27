import type { PublicPageProps } from '../ui/SiteHeader';
import { SiteHeader, SiteFooter } from '../ui/SiteHeader';
import { PageHero } from '../ui/PageHero';
import { PrimaryButton } from '../ui/primitives';
import { FEATURES_INTRO, FEATURE_DETAILS } from '../../data/content';
import { IconArrowRight } from '../icons/icons';
import { FeatureRow, PaperVisual } from '../landing/FeatureRow';

export function FeaturesPage({ onAuth, onStartWriting, onLogo, onNav }: PublicPageProps) {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader activePage="ozellikler" onLogo={onLogo} onNav={onNav} onAuth={onAuth} />

      <PageHero
        kicker={FEATURES_INTRO.kicker}
        title={
          <>
            Yazma sürecinin
            <br />
            her adımı için bir araç.
          </>
        }
        desc="Scenariotopia, fikirden final taslağa kadar tüm süreci cebine sığdırır."
      />

      <section className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {FEATURE_DETAILS.map((f, i) => (
          <FeatureRow
            key={f.title}
            index={i}
            reverse={f.reverse}
            title={f.title}
            desc={f.desc}
            visual={<PaperVisual icon={f.icon} />}
          />
        ))}
      </section>

      <section className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-20 text-center">
          <h3 className="text-[26px] sm:text-[32px] font-bold tracking-[-.02em] balance max-w-[560px] mx-auto">Yazmaya bugün başla.</h3>
          <p className="mt-4 text-[15.5px] text-ink-soft max-w-[480px] mx-auto leading-relaxed">
            Kayıt olmadan deneyin, istediğinizde ücretsiz hesap açın.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <PrimaryButton size="lg" onClick={onStartWriting}>
              Hemen Yazmaya Başla <IconArrowRight size={17} />
            </PrimaryButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
