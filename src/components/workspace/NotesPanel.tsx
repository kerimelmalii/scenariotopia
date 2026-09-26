import { useState } from 'react';
import type { Project, ProjectPatch } from '../../types';
import { uid } from '../../data/seed';
import { GhostButton } from '../ui/primitives';
import { IconPlus, IconX } from '../icons/icons';

export function NotesPanel({ project, onUpdate }: { project: Project; onUpdate: (patch: ProjectPatch) => void }) {
  const [draft, setDraft] = useState('');

  function addNote() {
    if (!draft.trim()) return;
    onUpdate({ notes: [{ id: uid('n'), text: draft.trim(), createdAt: new Date().toISOString() }].concat(project.notes) });
    setDraft('');
  }
  function delNote(id: string) {
    onUpdate({ notes: project.notes.filter((n) => n.id !== id) });
  }

  return (
    <div className="max-w-[720px]">
      <div className="rounded-2xl border border-line bg-white p-5 mb-6 flex items-start gap-3">
        <textarea
          value={draft}
          onChange={(ev) => setDraft(ev.target.value)}
          rows={2}
          placeholder="Yeni bir fikir, diyalog ya da hatırlatma yaz…"
          className="flex-1 outline-none text-[14px] leading-relaxed resize-none placeholder:text-ink-faint"
        />
        <GhostButton onClick={addNote} className="!px-4 !py-2 shrink-0">
          <IconPlus size={14} />
          Ekle
        </GhostButton>
      </div>
      {project.notes.length === 0 ? (
        <p className="text-[13.5px] text-ink-faint">Henüz not yok.</p>
      ) : (
        <div className="space-y-3">
          {project.notes.map((n) => (
            <div key={n.id} className="group rounded-2xl border border-line bg-bg-alt p-5 flex items-start justify-between gap-4">
              <p className="text-[13.5px] leading-relaxed text-ink/85">{n.text}</p>
              <button onClick={() => delNote(n.id)} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-ink-faint hover:text-ink">
                <IconX size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
