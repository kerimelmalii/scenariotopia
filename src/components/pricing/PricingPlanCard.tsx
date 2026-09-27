import type { PricingPlan } from '../../data/content';
import { GhostButton, PrimaryButton } from '../ui/primitives';
import { IconCheck } from '../icons/icons';

interface PricingPlanCardProps {
  plan: PricingPlan;
  onPrimaryAction: () => void;
}

export function PricingPlanCard({ plan, onPrimaryAction }: PricingPlanCardProps) {
  return (
    <div className="rounded-[24px] bg-bg-alt p-8 relative">
      {plan.featured ? (
        <span className="font-script absolute top-8 right-8 text-[10px] font-bold uppercase tracking-[.06em] bg-ink text-white rounded-full px-2.5 py-1">
          Popüler
        </span>
      ) : null}
      <div className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">{plan.label}</div>
      <div className="mt-3 text-[36px] font-extrabold text-ink">
        {plan.price}
        {plan.priceSuffix ? <span className="text-[15px] font-medium text-ink-soft">{plan.priceSuffix}</span> : null}
      </div>
      <p className="mt-2 text-[13.5px] text-ink-soft leading-relaxed">{plan.desc}</p>

      {plan.featured ? (
        <PrimaryButton onClick={onPrimaryAction} className="mt-6 w-full">
          Ücretsiz Kayıt Ol
        </PrimaryButton>
      ) : (
        <GhostButton onClick={onPrimaryAction} className="mt-6 w-full !bg-white">
          Yazmaya Başla
        </GhostButton>
      )}

      <ul className="mt-7 pt-6 border-t border-line space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[13.5px] text-ink/80">
            <IconCheck size={15} className="shrink-0 mt-0.5 text-ink-soft" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
