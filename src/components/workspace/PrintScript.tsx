import type { Project } from '../../types';
import { BLOCK_CLASS } from './constants';

export function PrintScript({ project }: { project: Project | null }) {
  if (!project) return null;
  return (
    <div id="print-script" className="font-script">
      <div style={{ textAlign: 'center', marginBottom: '2em' }}>
        <strong>{project.name.toUpperCase()}</strong>
        <div>Yazan: {project.author}</div>
      </div>
      {project.blocks.map((b) => (
        <div key={b.id} className={BLOCK_CLASS[b.type].split(' ')[0]}>
          {b.text}
        </div>
      ))}
    </div>
  );
}
