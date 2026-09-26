import type { Project, ProjectPatch } from '../../types';
import { PanelTextarea } from './PanelTextarea';

export function InfoPanel({ project, onUpdate }: { project: Project; onUpdate: (patch: ProjectPatch) => void }) {
  return (
    <div className="max-w-[720px]">
      <PanelTextarea label="Logline" rows={2} value={project.logline} placeholder="Hikayenizi tek cümlede özetleyin…" onChange={(v) => onUpdate({ logline: v })} />
      <PanelTextarea label="Sinopsis" rows={6} value={project.synopsis} placeholder="Hikayenin kısa özeti…" onChange={(v) => onUpdate({ synopsis: v })} />
      <PanelTextarea label="Tretman" rows={10} value={project.treatment} placeholder="Sahne sahne detaylı anlatım…" onChange={(v) => onUpdate({ treatment: v })} />
    </div>
  );
}
