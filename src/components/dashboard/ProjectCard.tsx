import type { Project } from '../../types';
import { timeAgoTr } from '../../utils/time';
import { IconClock } from '../icons/icons';

export function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left rounded-[22px] border border-line bg-white p-6 hover:-translate-y-[2px] hover:border-ink/20 hover:shadow-[0_18px_38px_-20px_rgba(29,29,31,.25)] transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-xl bg-bg-alt border border-line-soft flex items-center justify-center text-ink-soft font-script text-[13px] font-bold">
          {project.name.charAt(0).toUpperCase()}
        </div>
        <span className="font-script text-[10.5px] font-bold uppercase tracking-[.06em] text-ink-faint border border-line rounded-full px-2.5 py-1">
          {project.type}
        </span>
      </div>
      <div className="mt-5 text-[16px] font-bold tracking-[-.01em] text-ink">{project.name}</div>
      <p className="mt-1 text-[13px] text-ink-soft">{project.author}</p>
      <div className="mt-4 flex items-center gap-1.5 text-[12px] text-ink-faint">
        <IconClock size={12} /> {timeAgoTr(project.updatedAt)} düzenlendi
      </div>
    </button>
  );
}
