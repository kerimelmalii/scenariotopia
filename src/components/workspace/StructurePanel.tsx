import type { Project, ProjectPatch } from '../../types';

export function StructurePanel({ project, onUpdate }: { project: Project; onUpdate: (patch: ProjectPatch) => void }) {
  function updateBeat(i: number, text: string) {
    const beats = project.beats.slice();
    beats[i] = { ...beats[i], text };
    onUpdate({ beats });
  }

  return (
    <div className="max-w-[720px] space-y-4">
      {project.beats.map((b, i) => (
        <div key={i} className="rounded-2xl border border-line bg-white p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-script w-7 h-7 rounded-full bg-accent-wash text-accent-ink text-[11px] font-bold flex items-center justify-center shrink-0">
              {i + 1}
            </span>
            <span className="text-[14.5px] font-semibold text-ink">{b.name}</span>
          </div>
          <textarea
            value={b.text}
            onChange={(ev) => updateBeat(i, ev.target.value)}
            rows={2}
            placeholder="Bu beat'te ne oluyor?"
            className="w-full rounded-xl border border-line-soft bg-bg-alt px-4 py-3 text-[13.5px] leading-relaxed outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all resize-none"
          />
        </div>
      ))}
    </div>
  );
}
