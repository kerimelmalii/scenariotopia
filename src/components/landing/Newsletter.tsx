import { useState, type FormEvent } from 'react';
import { NEWSLETTER } from '../../data/content';
import { PrimaryButton, Slugline } from '../ui/primitives';
import { Reveal } from '../ui/Reveal';
import { IconCheck } from '../icons/icons';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function submit(ev: FormEvent) {
    ev.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="border-t border-line-soft">
      <div className="max-w-[640px] mx-auto px-6 sm:px-8 py-20 text-center">
        <Reveal>
          <Slugline>{NEWSLETTER.kicker}</Slugline>
          <h3 className="font-display mt-4 text-[26px] sm:text-[32px] balance">{NEWSLETTER.title}</h3>
          <p className="mt-4 text-[15px] text-ink-soft leading-relaxed">{NEWSLETTER.desc}</p>
        </Reveal>
        {submitted ? (
          <div className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-ink">
            <IconCheck size={16} className="text-c-green" /> Kaydedildi — teşekkürler!
          </div>
        ) : (
          <form onSubmit={submit} className="mt-7 flex flex-col sm:flex-row items-center gap-3 justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="e-posta adresin"
              className="w-full sm:w-[280px] rounded-full border border-line bg-bg-alt px-5 py-3 text-[14px] text-ink placeholder:text-ink-faint outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all"
            />
            <PrimaryButton type="submit" className="w-full sm:w-auto shrink-0">
              Bültene Katıl
            </PrimaryButton>
          </form>
        )}
      </div>
    </section>
  );
}
