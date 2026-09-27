import { IconTarget } from '../icons/icons';

interface ScriptLine {
  t: 'scene' | 'action' | 'character' | 'dialogue';
  v: string;
}

const LINES: readonly ScriptLine[] = [
  { t: 'scene', v: '1. İÇ. AHŞAP EV - GECE' },
  { t: 'action', v: 'Pencereden sızan mehtap ışığı tozlu döşemede ince bir çizgi çizer.' },
  { t: 'character', v: 'ELİF' },
  { t: 'dialogue', v: 'Burada biri var mı?' },
];

function ScriptLineRow({ line }: { line: ScriptLine }) {
  if (line.t === 'scene') return <div className="font-bold text-[11px] tracking-wide mb-2 mt-3">{line.v}</div>;
  if (line.t === 'character') return <div className="text-[10px] pl-10 mt-2">{line.v}</div>;
  if (line.t === 'dialogue') return <div className="text-[10px] pl-6 pr-8 text-ink/80">{line.v}</div>;
  return <div className="text-[10px] text-ink/70 leading-relaxed mb-1">{line.v}</div>;
}

export function DeviceMock() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div
        className="absolute -inset-16 -z-10 rounded-full opacity-60"
        style={{ background: 'radial-gradient(closest-side, var(--line), transparent 70%)', filter: 'blur(40px)' }}
      />
      <div className="relative rounded-[38px] border border-line bg-white shadow-[0_50px_100px_-30px_rgba(29,29,31,.35)] p-3">
        <div className="rounded-[28px] border border-line-soft bg-bg-alt overflow-hidden">
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((k) => (
                <span key={k} className="w-2 h-2 rounded-full bg-ink/10" />
              ))}
            </div>
            <span className="font-script text-[9px] uppercase tracking-widest text-ink-faint">Kayıp Yolcu</span>
          </div>
          <div className="mx-4 mb-4 rounded-2xl bg-white border border-line-soft p-5 font-script shadow-sm">
            {LINES.map((line, i) => (
              <ScriptLineRow key={i} line={line} />
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute -right-6 -bottom-8 w-40 rounded-[22px] border border-line bg-white shadow-[0_30px_60px_-20px_rgba(29,29,31,.3)] p-3 hidden sm:block reveal"
        style={{ animationDelay: '.25s' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-6 rounded-full bg-bg-alt flex items-center justify-center text-ink">
            <IconTarget size={12} />
          </span>
          <span className="text-[9px] font-semibold text-ink-soft uppercase tracking-wide">Bugünkü Hedef</span>
        </div>
        <div className="text-[11px] text-ink font-semibold">4 / 5 sayfa</div>
        <div className="mt-2 h-1.5 rounded-full bg-line-soft overflow-hidden">
          <div className="h-full rounded-full bg-ink" style={{ width: '80%' }} />
        </div>
      </div>
    </div>
  );
}
