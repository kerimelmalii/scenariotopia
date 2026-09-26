import type { ReactNode } from 'react';
import { PrimaryButton } from '../ui/primitives';
import { IconArrowRight, IconLock } from '../icons/icons';

interface LockedPanelProps {
  label: string;
  onUnlock: () => void;
  children: ReactNode;
}

export function LockedPanel({ label, onUnlock, children }: LockedPanelProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none select-none" style={{ filter: 'blur(6px)', opacity: 0.55 }}>
        {children}
      </div>
      <div className="absolute inset-0 flex items-start sm:items-center justify-center pt-10 sm:pt-0 px-4">
        <div className="max-w-[380px] w-full text-center bg-white/95 backdrop-blur-md border border-line rounded-[26px] shadow-[0_25px_70px_-20px_rgba(29,29,31,.35)] p-8">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-accent-wash text-accent-ink flex items-center justify-center mb-4">
            <IconLock size={20} />
          </div>
          <p className="text-[14.5px] leading-relaxed text-ink/85">Bu özelliği kullanmak için ücretsiz kayıt oluşturun. {label} senaryona entegre et.</p>
          <PrimaryButton onClick={onUnlock} className="mt-5 w-full">
            Ücretsiz Kayıt Ol <IconArrowRight size={15} />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
