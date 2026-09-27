import type { PublicPageProps } from '../ui/SiteHeader';
import { SiteHeader, SiteFooter } from '../ui/SiteHeader';
import { PageHero } from '../ui/PageHero';
import { GhostButton, PrimaryButton } from '../ui/primitives';
import { PRICING_INTRO, PRICING_PLANS } from '../../data/content';

const FAQ = [
  {
    q: 'Misafir planında neler kısıtlı?',
    a: 'Senaryo yazımı ve PDF olarak dışa aktarma herkese açık ve sınırsız. Karakter matrisi, dramatik yapı şablonları, Akademi ve Fikir Sandığı kayıtlı "Yazar" kullanıcılarına özel.',
  },
  {
    q: 'İstediğim zaman iptal edebilir miyim?',
    a: 'Evet — abonelik taahhütsüz, istediğin an iptal edebilirsin.',
  },
  {
    q: 'Yazdıklarım nerede saklanıyor?',
    a: 'Şu an tarayıcında saklanıyor; hesap tabanlı bulut senkronizasyonu yakında aktif olacak.',
  },
];

export function PricingPage({ onAuth, onStartWriting, onLogo, onNav }: PublicPageProps) {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader activePage="fiyat" onLogo={onLogo} onNav={onNav} onAuth={onAuth} />

      <PageHero kicker={PRICING_INTRO.kicker} title={PRICING_INTRO.title} />

      <section className="max-w-[1120px] mx-auto px-6 sm:px-8 py-12">
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
      </section>

      <section className="border-t border-line-soft bg-bg-alt">
        <div className="max-w-[720px] mx-auto px-6 sm:px-8 py-16 md:py-20">
          <h3 className="text-[22px] font-bold tracking-[-.01em] mb-8 text-center">Sık sorulan sorular</h3>
          <div className="space-y-5">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-2xl border border-line bg-white p-6">
                <div className="text-[15px] font-bold text-ink">{item.q}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
