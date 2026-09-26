import type { AuthMode } from '../../types';
import { FEATURE_DETAILS } from '../../data/content';
import { PrimaryButton, Slugline } from '../ui/primitives';
import { SiteHeader, SiteFooter, type NavSection } from '../ui/SiteHeader';
import { IconArrowRight } from '../icons/icons';
import { FeatureRow, PaperVisual } from '../landing/FeatureRow';

interface FeaturesPageProps {
  onAuth: (mode: AuthMode) => void;
  onStartWriting: () => void;
  onLogo: () => void;
  onNav: (section: NavSection) => void;
}

export function FeaturesPage({ onAuth, onStartWriting, onLogo, onNav }: FeaturesPageProps) {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader activeSection="ozellikler" onLogo={onLogo} onNav={onNav} onAuth={onAuth} />

      <section className="pt-16 sm:pt-20 pb-8">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 text-center">
          <div className="reveal">
            <Slugline>Özellikler</Slugline>
          </div>
          <h1
            className="reveal balance mt-5 text-[36px] sm:text-[52px] font-extrabold tracking-[-.03em] leading-[1.05] text-ink"
            style={{ animationDelay: '.05s' }}
          >
            Yazma sürecinin
            <br />
            her adımı için bir araç.
          </h1>
          <p
            className="reveal balance mt-6 text-[16px] sm:text-[18px] text-ink-soft max-w-[560px] mx-auto leading-relaxed"
            style={{ animationDelay: '.1s' }}
          >
            Scenariotopia, fikirden final taslağa kadar tüm süreci cebine sığdırır.
          </p>
        </div>
      </section>

      <section className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {FEATURE_DETAILS.map((f) => (
          <FeatureRow key={f.title} reverse={f.reverse} kicker={f.kicker} title={f.title} desc={f.desc} visual={<PaperVisual icon={f.icon} />} />
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
