import type { CharacterEntry, Project, ProjectPatch } from '../../types';
import { uid } from '../../data/seed';
import { IconPlus, IconX } from '../icons/icons';

function CharacterCard({ character, onUpdate, onDelete }: { character: CharacterEntry; onUpdate: (patch: Partial<CharacterEntry>) => void; onDelete: () => void }) {
  return (
    <div className="rounded-[22px] border border-line bg-white p-6">
      <div className="flex items-start justify-between gap-3 mb-4">
        <input
          value={character.name}
          onChange={(ev) => onUpdate({ name: ev.target.value })}
          placeholder="Karakter Adı"
          className="text-[17px] font-bold tracking-[-.01em] outline-none bg-transparent w-full placeholder:text-ink-faint placeholder:font-normal"
        />
        <button
          onClick={onDelete}
          aria-label="Karakteri sil"
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-ink-faint hover:text-ink hover:bg-bg-alt transition-colors"
        >
          <IconX size={14} />
        </button>
      </div>
      <div className="space-y-3">
        <div>
          <span className="block text-[10.5px] font-semibold uppercase tracking-[.08em] text-ink-soft mb-1">İstek (Want)</span>
          <textarea
            value={character.want}
            onChange={(ev) => onUpdate({ want: ev.target.value })}
            rows={2}
            placeholder="Karakterin dışsal amacı…"
            className="w-full rounded-lg border border-line-soft bg-bg-alt px-3 py-2 text-[13px] leading-relaxed outline-none focus:border-accent resize-none"
          />
        </div>
        <div>
          <span className="block text-[10.5px] font-semibold uppercase tracking-[.08em] text-ink-soft mb-1">İhtiyaç (Need)</span>
          <textarea
            value={character.need}
            onChange={(ev) => onUpdate({ need: ev.target.value })}
            rows={2}
            placeholder="Karakterin içsel ihtiyacı…"
            className="w-full rounded-lg border border-line-soft bg-bg-alt px-3 py-2 text-[13px] leading-relaxed outline-none focus:border-accent resize-none"
          />
        </div>
      </div>
    </div>
  );
}

export function CharactersPanel({ project, onUpdate }: { project: Project; onUpdate: (patch: ProjectPatch) => void }) {
  function updateChar(id: string, patch: Partial<CharacterEntry>) {
    onUpdate({ characters: project.characters.map((c) => (c.id === id ? { ...c, ...patch } : c)) });
  }
  function addChar() {
    onUpdate({ characters: project.characters.concat([{ id: uid('c'), name: '', want: '', need: '' }]) });
  }
  function delChar(id: string) {
    onUpdate({ characters: project.characters.filter((c) => c.id !== id) });
  }

  return (
    <div className="max-w-[900px]">
      <div className="grid sm:grid-cols-2 gap-5">
        {project.characters.map((c) => (
          <CharacterCard key={c.id} character={c} onUpdate={(patch) => updateChar(c.id, patch)} onDelete={() => delChar(c.id)} />
        ))}
        <button
          onClick={addChar}
          className="rounded-[22px] border-2 border-dashed border-line hover:border-accent/50 hover:bg-accent-wash/40 transition-colors flex flex-col items-center justify-center gap-2 py-10 text-ink-soft"
        >
          <span className="w-9 h-9 rounded-full bg-bg-alt flex items-center justify-center">
            <IconPlus size={16} />
          </span>
          <span className="text-[13px] font-semibold">Yeni Karakter Ekle</span>
        </button>
      </div>
    </div>
  );
}
