import { useState } from 'react';
import type { AuthMode, IconComponent, Project, ProjectPatch, ScriptBlock } from '../../types';
import { cx } from '../../utils/cx';
import { IconChevronLeft, IconDownload, IconFileText, IconLayers, IconLock, IconNote, IconPencil, IconUsers } from '../icons/icons';
import { ScriptEditor } from './ScriptEditor';
import { InfoPanel } from './InfoPanel';
import { StructurePanel } from './StructurePanel';
import { CharactersPanel } from './CharactersPanel';
import { NotesPanel } from './NotesPanel';
import { LockedPanel } from './LockedPanel';
import { PrintScript } from './PrintScript';

type TabId = 'bilgiler' | 'senaryo' | 'yapi' | 'karakterler' | 'notlar';

interface TabDef {
  id: TabId;
  label: string;
  icon: IconComponent;
  lockLabel?: string;
}

const WS_TABS: readonly TabDef[] = [
  { id: 'bilgiler', label: 'Bilgiler', icon: IconFileText, lockLabel: 'Sinopsis ve tretman araçlarını' },
  { id: 'senaryo', label: 'Senaryo', icon: IconPencil },
  { id: 'yapi', label: 'Dramatik Yapı', icon: IconLayers, lockLabel: 'Dramatik yapı şablonunu' },
  { id: 'karakterler', label: 'Karakterler', icon: IconUsers, lockLabel: 'Karakter matrisini' },
  { id: 'notlar', label: 'Notlar', icon: IconNote, lockLabel: 'Fikir sandığını' },
];

interface WorkspaceProps {
  project: Project;
  isLoggedIn: boolean;
  onBack: () => void;
  onUpdateProject: (id: string, patch: ProjectPatch) => void;
  onAuth: (mode: AuthMode, reason?: string) => void;
}

export function Workspace({ project, isLoggedIn, onBack, onUpdateProject, onAuth }: WorkspaceProps) {
  const [tab, setTab] = useState<TabId>('senaryo');

  function onUpdate(patch: ProjectPatch) {
    onUpdateProject(project.id, patch);
  }
  function onUpdateBlocks(blocks: ScriptBlock[]) {
    onUpdateProject(project.id, { blocks });
  }

  const currentTabDef = WS_TABS.find((t) => t.id === tab);
  const lockedNow = Boolean(currentTabDef?.lockLabel) && !isLoggedIn;

  function renderPanel() {
    if (tab === 'bilgiler') return <InfoPanel project={project} onUpdate={onUpdate} />;
    if (tab === 'yapi') return <StructurePanel project={project} onUpdate={onUpdate} />;
    if (tab === 'karakterler') return <CharactersPanel project={project} onUpdate={onUpdate} />;
    if (tab === 'notlar') return <NotesPanel project={project} onUpdate={onUpdate} />;
    return null;
  }

  function handlePdf() {
    window.print();
  }

  return (
    <div className="h-screen flex flex-col bg-bg-alt">
      <div id="print-script-mount">
        <PrintScript project={project} />
      </div>
      <header className="shrink-0 h-16 glass border-b border-line-soft flex items-center gap-4 px-4 sm:px-6">
        <button onClick={onBack} className="w-9 h-9 rounded-full flex items-center justify-center text-ink-soft hover:text-ink hover:bg-bg-alt transition-colors">
          <IconChevronLeft size={18} />
        </button>
        <div className="min-w-0">
          <div className="text-[14.5px] font-bold truncate max-w-[240px] sm:max-w-none">{project.name}</div>
          <div className="text-[11.5px] text-ink-faint">
            {project.type} · {project.author}
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2 text-[11.5px] text-ink-faint">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Taslak kaydedildi
        </div>
      </header>
      <div className="flex-1 flex min-h-0">
        <aside className="shrink-0 w-full sm:w-[220px] border-b sm:border-b-0 sm:border-r border-line-soft bg-white flex sm:flex-col overflow-x-auto sm:overflow-visible no-scrollbar px-3 sm:px-3 py-3 sm:py-6 gap-1">
          {WS_TABS.map((t) => {
            const isLocked = Boolean(t.lockLabel) && !isLoggedIn;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cx(
                  'shrink-0 flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[13.5px] font-medium transition-colors whitespace-nowrap',
                  tab === t.id ? 'bg-ink text-white' : 'text-ink/70 hover:bg-bg-alt',
                )}
              >
                <t.icon size={15} />
                {t.label}
                {isLocked ? <IconLock size={11} className={cx('ml-auto', tab === t.id ? 'text-white/60' : 'text-ink-faint')} /> : null}
              </button>
            );
          })}
          <div className="hidden sm:block h-px bg-line-soft my-3" />
          <button
            onClick={handlePdf}
            className="shrink-0 flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[13.5px] font-semibold text-accent-ink hover:bg-accent-wash transition-colors whitespace-nowrap"
          >
            <IconDownload size={15} /> İndir (PDF)
          </button>
        </aside>
        <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
          {tab === 'senaryo' ? (
            <ScriptEditor project={project} onUpdateBlocks={onUpdateBlocks} />
          ) : (
            <div className="flex-1 overflow-y-auto px-5 sm:px-10 py-8 sm:py-10">
              {lockedNow && currentTabDef ? (
                <LockedPanel
                  label={currentTabDef.lockLabel || ''}
                  onUnlock={() => onAuth('signup', `${currentTabDef.lockLabel} kullanmak için ücretsiz kayıt oluşturun.`)}
                >
                  {renderPanel()}
                </LockedPanel>
              ) : (
                renderPanel()
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
