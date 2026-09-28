import type { PublicPageProps } from '../ui/SiteHeader';
import { SiteHeader, SiteFooter } from '../ui/SiteHeader';
import { PageHero } from '../ui/PageHero';
import { PrimaryButton, Slugline } from '../ui/primitives';
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';
import { IconArrowRight } from '../icons/icons';
import { ACADEMY_COURSES, ACADEMY_INTRO, EVENTS, EVENTS_INTRO } from '../../data/content';
import { CourseCard } from './CourseCard';
import { EventCard } from './EventCard';

export function AcademyPage({ onAuth, onStartWriting, onLogo, onNav }: PublicPageProps) {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader activePage="akademi" onLogo={onLogo} onNav={onNav} onAuth={onAuth} />

      <PageHero kicker={ACADEMY_INTRO.kicker} title={ACADEMY_INTRO.title} desc={ACADEMY_INTRO.desc} />

      <section className="max-w-[1120px] mx-auto px-6 sm:px-8 py-12">
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACADEMY_COURSES.map((c) => (
            <RevealItem key={c.title}>
              <CourseCard course={c} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="border-t border-line-soft bg-bg-alt">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-16 md:py-20">
          <Reveal>
            <div className="mb-10 max-w-[560px]">
              <Slugline>{EVENTS_INTRO.kicker}</Slugline>
              <h3 className="font-display mt-4 text-[28px] sm:text-[34px] text-ink balance">{EVENTS_INTRO.title}</h3>
            </div>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 gap-5">
            {EVENTS.map((e) => (
              <RevealItem key={e.title}>
                <EventCard event={e} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-20 text-center">
          <Reveal>
            <h3 className="font-display text-[26px] sm:text-[32px] balance max-w-[560px] mx-auto">Akademi'ye kaydolarak başla.</h3>
            <p className="mt-4 text-[15.5px] text-ink-soft max-w-[480px] mx-auto leading-relaxed">
              Ücretsiz hesabını 20 saniyede oluştur, tüm derslere anında erişim kazan.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <PrimaryButton size="lg" onClick={() => onAuth('signup')}>
                Ücretsiz Kayıt Ol <IconArrowRight size={17} />
              </PrimaryButton>
              <PrimaryButton size="lg" onClick={onStartWriting} className="!bg-white !text-ink border border-line hover:!bg-bg-alt">
                Önce Yazmayı Dene
              </PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
