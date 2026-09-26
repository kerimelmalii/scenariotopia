import type { AuthMode } from '../../types';
import { Logo, PrimaryButton, TextButton } from './primitives';
import { cx } from '../../utils/cx';
import { IconHeart } from '../icons/icons';

export type NavSection = 'akademi' | 'ozellikler' | 'fiyat';

const NAV_LINKS: ReadonlyArray<readonly [string, NavSection]> = [
  ['Akademi', 'akademi'],
  ['Özellikler', 'ozellikler'],
  ['Fiyatlandırma', 'fiyat'],
];

interface SiteHeaderProps {
  activeSection: NavSection | null;
  onLogo: () => void;
  onNav: (section: NavSection) => void;
  onAuth: (mode: AuthMode) => void;
}

export function SiteHeader({ activeSection, onLogo, onNav, onAuth }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 glass border-b border-line-soft">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={onLogo} aria-label="Anasayfa" className="inline-flex">
          <Logo />
        </button>
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(([label, key]) => {
            const isActive = activeSection === key;
            return (
              <button
                key={key}
                onClick={() => onNav(key)}
                className={cx(
                  'font-script text-[12.5px] font-bold uppercase tracking-[.06em] transition-colors',
                  isActive ? 'text-ink' : 'text-ink-soft hover:text-ink',
                )}
              >
                {label}
              </button>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <TextButton onClick={() => onAuth('login')}>Giriş Yap</TextButton>
          <PrimaryButton onClick={() => onAuth('signup')} className="!px-5 !py-2 !text-[13px]">
            Kaydol
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line-soft">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo size="text-[15px]" />
        <p className="text-[13px] text-ink-faint flex items-center gap-1.5">
          Yazarlar için, <IconHeart size={12} className="text-accent" /> ile.
        </p>
      </div>
    </footer>
  );
}
