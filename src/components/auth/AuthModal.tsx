import { useState, type FormEvent } from 'react';
import type { AuthMode } from '../../types';
import { Modal, PrimaryButton, TextField } from '../ui/primitives';
import { cx } from '../../utils/cx';
import { IconArrowRight, IconLock } from '../icons/icons';

interface AuthModalProps {
  mode: AuthMode;
  reason: string | null;
  knownName: string;
  onClose: () => void;
  onSuccess: (name: string) => void;
}

export function AuthModal({ mode, reason, knownName, onClose, onSuccess }: AuthModalProps) {
  const [tab, setTab] = useState<AuthMode>(mode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function submit(ev: FormEvent) {
    ev.preventDefault();
    const finalName = tab === 'signup' ? name.trim() || 'Kerim' : knownName || 'Kerim';
    onSuccess(finalName);
  }

  return (
    <Modal onClose={onClose}>
      {reason ? (
        <div className="mb-5 flex items-start gap-3 rounded-2xl bg-accent-wash border border-accent/25 p-4">
          <span className="mt-0.5 text-accent-ink">
            <IconLock size={16} />
          </span>
          <p className="text-[13px] leading-relaxed text-accent-ink">{reason}</p>
        </div>
      ) : null}
      <div className="flex items-center gap-1 mb-7 rounded-full bg-bg-alt border border-line-soft p-1 w-fit">
        <button
          onClick={() => setTab('login')}
          className={cx(
            'px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors',
            tab === 'login' ? 'bg-white shadow-sm text-ink' : 'text-ink-soft',
          )}
        >
          Giriş Yap
        </button>
        <button
          onClick={() => setTab('signup')}
          className={cx(
            'px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors',
            tab === 'signup' ? 'bg-white shadow-sm text-ink' : 'text-ink-soft',
          )}
        >
          Kaydol
        </button>
      </div>
      <h2 className="text-[24px] font-bold tracking-[-.01em] mb-1">{tab === 'login' ? 'Tekrar hoş geldin.' : 'Yazarlığa başla.'}</h2>
      <p className="text-[14px] text-ink-soft mb-6">
        {tab === 'login' ? 'Senaryolarına kaldığın yerden devam et.' : 'Ücretsiz hesabını 20 saniyede oluştur.'}
      </p>
      <form onSubmit={submit} className="space-y-4">
        {tab === 'signup' ? <TextField label="Ad Soyad" value={name} onChange={setName} placeholder="Kerim Yılmaz" /> : null}
        <TextField label="E-posta" type="email" value={email} onChange={setEmail} placeholder="kerim@example.com" required />
        <TextField label="Şifre" type="password" value={pass} onChange={setPass} placeholder="••••••••" required />
        <PrimaryButton type="submit" className="w-full mt-2">
          {tab === 'login' ? 'Giriş Yap' : 'Ücretsiz Kaydol'} <IconArrowRight size={16} />
        </PrimaryButton>
      </form>
      <p className="mt-6 text-center text-[12px] text-ink-faint">Bu bir prototip deneyimidir — girdiğiniz bilgiler kaydedilmez.</p>
    </Modal>
  );
}
