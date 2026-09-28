import { useEffect, useState } from 'react';
import type { AuthMode } from '../../types';
import { Logo, PrimaryButton, TextButton } from './primitives';
import { cx } from '../../utils/cx';
import { IconHeart } from '../icons/icons';

export type PublicPage = 'ozellikler' | 'format' | 'akademi' | 'fiyat';

export interface PublicPageProps {
  onAuth: (mode: AuthMode) => void;
  onStartWriting: () => void;
  onLogo: () => void;
  onNav: (page: PublicPage) => void;
}

const NAV_LINKS: ReadonlyArray<readonly [string, PublicPage]> = [
  ['Özellikler', 'ozellikler'],
  ['Format', 'format'],
  ['Akademi', 'akademi'],
  ['Fiyatlandırma', 'fiyat'],
];

interface SiteHeaderProps {
  activePage: PublicPage | null;
  onLogo: () => void;
  onNav: (page: PublicPage) => void;
  onAuth: (mode: AuthMode) => void;
  /** When true, the header starts transparent over a dark hero and only
   * turns into the normal solid glass bar once the page scrolls past it. */
  transparentOnTop?: boolean;
}

export function SiteHeader({ activePage, onLogo, onNav, onAuth, transparentOnTop }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);

  useEffect(() => {
    if (!transparentOnTop) return;
    function onScroll() {
      setScrolled(window.scrollY > 64);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparentOnTop]);

  const dark = Boolean(transparentOnTop) && !scrolled;

  return (
    <header
      className={cx(
        'sticky top-0 z-40 border-b transition-colors duration-300',
        dark ? 'bg-transparent border-transparent' : 'glass border-line-soft',
      )}
    >
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={onLogo} aria-label="Anasayfa" className="inline-flex">
          <Logo dark={dark} />
        </button>
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(([label, key]) => {
            const isActive = activePage === key;
            return (
              <button
                key={key}
                onClick={() => onNav(key)}
                className={cx(
                  'font-script text-[12.5px] font-bold uppercase tracking-[.06em] transition-colors',
                  dark
                    ? isActive
                      ? 'text-hero-ink'
                      : 'text-hero-ink-soft hover:text-hero-ink'
                    : isActive
                      ? 'text-ink'
                      : 'text-ink-soft hover:text-ink',
                )}
              >
                {label}
              </button>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <TextButton onClick={() => onAuth('login')} className={dark ? '!text-hero-ink-soft hover:!text-hero-ink' : undefined}>
            Giriş Yap
          </TextButton>
          <PrimaryButton
            onClick={() => onAuth('signup')}
            className={cx('!px-5 !py-2 !text-[13px]', dark && '!bg-hero-ink !text-hero-bg hover:!bg-white')}
          >
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
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-12 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6">
        <Logo size="text-[15px]" withStripes />
        <p className="text-[13px] text-ink-faint flex items-center gap-1.5">
          Yazarlar için, <IconHeart size={12} className="text-c-coral" /> ile.
        </p>
      </div>
    </footer>
  );
}
