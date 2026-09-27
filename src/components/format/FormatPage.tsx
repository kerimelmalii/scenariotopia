import type { PublicPageProps } from '../ui/SiteHeader';
import { SiteHeader, SiteFooter } from '../ui/SiteHeader';
import { PageHero } from '../ui/PageHero';
import { PrimaryButton } from '../ui/primitives';
import { IconArrowRight } from '../icons/icons';
import { FORMAT_INTRO, FORMAT_TYPES } from '../../data/content';
import { FormatCard } from './FormatCard';

export function FormatPage({ onAuth, onStartWriting, onLogo, onNav }: PublicPageProps) {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader activePage="format" onLogo={onLogo} onNav={onNav} onAuth={onAuth} />

      <PageHero kicker={FORMAT_INTRO.kicker} title={FORMAT_INTRO.title} desc={FORMAT_INTRO.desc} />

      <section className="max-w-[1120px] mx-auto px-6 sm:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {FORMAT_TYPES.map((f) => (
            <FormatCard key={f.title} format={f} />
          ))}
        </div>
      </section>

      <section className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-20 text-center">
          <h3 className="text-[26px] sm:text-[32px] font-bold tracking-[-.02em] balance max-w-[560px] mx-auto">
            Formatı seç, biz halledelim.
          </h3>
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
