import type { PublicPageProps } from '../ui/SiteHeader';
import { SiteHeader, SiteFooter } from '../ui/SiteHeader';
import { PageHero } from '../ui/PageHero';
import { Accordion, type AccordionItem } from '../ui/Accordion';
import { PRICING_INTRO, PRICING_PLANS } from '../../data/content';
import { PricingPlanCard } from './PricingPlanCard';

const FAQ: readonly AccordionItem[] = [
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
            <PricingPlanCard key={plan.key} plan={plan} onPrimaryAction={plan.featured ? () => onAuth('signup') : onStartWriting} />
          ))}
        </div>
      </section>

      <section className="border-t border-line-soft">
        <div className="max-w-[640px] mx-auto px-6 sm:px-8 py-16 md:py-20">
          <h3 className="text-[22px] font-bold tracking-[-.01em] mb-4 text-center">Sık sorulan sorular</h3>
          <Accordion items={FAQ} />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
