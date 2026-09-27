import { useEffect, useState } from 'react';
import type { DailyGoal, Project, QuickNote } from '../../types';
import { Logo } from '../ui/primitives';
import { IconCheck, IconNote, IconPlus, IconTarget } from '../icons/icons';
import { ActionCard } from './ActionCard';
import { ProjectCard } from './ProjectCard';
import { QuickNoteModal } from './QuickNoteModal';
import { ScheduleModal } from './ScheduleModal';
import { timeAgoTr } from '../../utils/time';

interface DashboardProps {
  userName: string;
  projects: Project[];
  quickNotes: QuickNote[];
  dailyGoal: DailyGoal | null;
  onNewProject: () => void;
  onOpenProject: (id: string) => void;
  onAddNote: (text: string) => void;
  onSetGoal: (goal: DailyGoal) => void;
  onSignOut: () => void;
}

export function Dashboard({ userName, projects, quickNotes, dailyGoal, onNewProject, onOpenProject, onAddNote, onSetGoal, onSignOut }: DashboardProps) {
  const [showQuickNote, setShowQuickNote] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(''), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  const now = new Date();
  const dateStr = now.toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' });
  const timeStr = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="min-h-screen bg-bg-alt">
      <header className="sticky top-0 z-30 glass border-b border-line-soft">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <span className="font-script hidden sm:inline text-[11px] font-bold uppercase tracking-[.06em] text-ink-soft">
              {dateStr} · {timeStr}
            </span>
            <button onClick={onSignOut} className="w-9 h-9 rounded-full bg-ink text-white text-[13px] font-bold flex items-center justify-center">
              {(userName || 'K').charAt(0).toUpperCase()}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1120px] mx-auto px-6 sm:px-8 py-12">
        <div className="reveal">
          <h1 className="text-[32px] sm:text-[38px] font-extrabold tracking-[-.02em]">Hoş geldin, {userName || 'Yazar'}.</h1>
          <p className="mt-2 text-[15px] text-ink-soft">{dateStr} · Bugün yazmaya ne dersin?</p>
        </div>

        <div className="reveal mt-8 grid sm:grid-cols-3 gap-5" style={{ animationDelay: '.05s' }}>
          <ActionCard featured icon={IconPlus} eyebrow="Proje" title="Yeni Proje Oluştur" desc="Sıfırdan bir senaryoya başla." onClick={onNewProject} />
          <ActionCard icon={IconNote} eyebrow="Fikir" title="Not Al" desc="Aklına gelen fikri hızlıca kaydet." onClick={() => setShowQuickNote(true)} />
          <ActionCard
            icon={IconTarget}
            eyebrow="Hedef"
            title="Yazımını Programla"
            desc="Günlük sayfa hedefi belirle."
            chip={dailyGoal ? `${dailyGoal.pages} sayfa · ${dailyGoal.time}` : null}
            onClick={() => setShowSchedule(true)}
          />
        </div>

        <div className="reveal mt-14" style={{ animationDelay: '.1s' }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[19px] font-bold tracking-[-.01em]">Son Çalışılan Projelerim</h2>
            <span className="font-script text-[11px] font-bold uppercase tracking-[.06em] text-ink-faint">{projects.length} proje</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} onClick={() => onOpenProject(p.id)} />
            ))}
          </div>
        </div>

        {quickNotes.length ? (
          <div className="reveal mt-14" style={{ animationDelay: '.15s' }}>
            <h2 className="text-[19px] font-bold tracking-[-.01em] mb-5">Fikir Sandığı</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {quickNotes.slice(0, 6).map((nte) => (
                <div key={nte.id} className="rounded-2xl border border-line bg-white p-5">
                  <p className="text-[13.5px] leading-relaxed text-ink/85">{nte.text}</p>
                  <div className="mt-3 text-[11px] text-ink-faint">{timeAgoTr(nte.createdAt)}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </main>

      {showQuickNote ? (
        <QuickNoteModal
          onClose={() => setShowQuickNote(false)}
          onSave={(text) => {
            onAddNote(text);
            setToast('Not kaydedildi.');
          }}
        />
      ) : null}
      {showSchedule ? (
        <ScheduleModal
          onClose={() => setShowSchedule(false)}
          initial={dailyGoal}
          onSave={(g) => {
            onSetGoal(g);
            setToast('Hedef kaydedildi.');
          }}
        />
      ) : null}

      {toast ? (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] reveal bg-ink text-white text-[13px] font-medium px-5 py-3 rounded-full shadow-[0_15px_40px_-10px_rgba(0,0,0,.5)] flex items-center gap-2"
          style={{ animationDuration: '.3s' }}
        >
          <IconCheck size={14} className="text-accent-2" /> {toast}
        </div>
      ) : null}
    </div>
  );
}
