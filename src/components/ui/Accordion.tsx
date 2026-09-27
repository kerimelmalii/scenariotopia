import { useState } from 'react';
import { cx } from '../../utils/cx';
import { IconChevronRight } from '../icons/icons';

export interface AccordionItem {
  q: string;
  a: string;
}

export function Accordion({ items }: { items: readonly AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line-soft">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-bold text-ink">{item.q}</span>
              <IconChevronRight size={15} className={cx('shrink-0 text-ink-faint transition-transform duration-200', isOpen ? 'rotate-90' : '')} />
            </button>
            <div
              className="grid transition-all duration-200 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-[13.5px] leading-relaxed text-ink-soft max-w-[600px]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
