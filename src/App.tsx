import { useCallback, useEffect, useState } from 'react';
import type { AuthMode, DailyGoal, NewProjectInput, Project, ProjectPatch, QuickNote, View } from './types';
import { makeProject, sampleProjects, uid } from './data/seed';
import type { NavSection } from './components/ui/SiteHeader';
import { LandingPage } from './components/landing/LandingPage';
import { FeaturesPage } from './components/features/FeaturesPage';
import { Dashboard } from './components/dashboard/Dashboard';
import { Workspace } from './components/workspace/Workspace';
import { NewProjectModal } from './components/NewProjectModal';
import { AuthModal } from './components/auth/AuthModal';

interface AuthModalState {
  open: boolean;
  mode: AuthMode;
  reason: string | null;
  intent: 'header' | 'unlock';
}

const CLOSED_AUTH: AuthModalState = { open: false, mode: 'login', reason: null, intent: 'header' };

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [projects, setProjects] = useState<Project[]>(() => sampleProjects());
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [quickNotes, setQuickNotes] = useState<QuickNote[]>([]);
  const [dailyGoal, setDailyGoal] = useState<DailyGoal | null>(null);
  const [showNewProject, setShowNewProject] = useState(false);
  const [authModal, setAuthModal] = useState<AuthModalState>(CLOSED_AUTH);
  const [pendingAnchor, setPendingAnchor] = useState<NavSection | null>(null);

  const goToLanding = useCallback(() => setView('landing'), []);

  const navigateSection = useCallback(
    (key: NavSection) => {
      if (key === 'ozellikler') {
        setView('features');
        return;
      }
      if (view !== 'landing') {
        setPendingAnchor(key);
        setView('landing');
        return;
      }
      document.getElementById(key)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [view],
  );

  useEffect(() => {
    if (view === 'landing' && pendingAnchor) {
      const key = pendingAnchor;
      setPendingAnchor(null);
      requestAnimationFrame(() => {
        document.getElementById(key)?.scrollIntoView({ block: 'start' });
      });
    }
  }, [view, pendingAnchor]);

  function openAuth(mode: AuthMode, reason?: string | null, intent: 'header' | 'unlock' = 'header') {
    setAuthModal({ open: true, mode, reason: reason || null, intent });
  }
  function closeAuth() {
    setAuthModal(CLOSED_AUTH);
  }
  function completeAuth(name: string) {
    setUserName(name);
    setIsLoggedIn(true);
    const intent = authModal.intent;
    closeAuth();
    if (intent !== 'unlock') setView('dashboard');
  }

  function openNewProject() {
    setShowNewProject(true);
  }
  function createProject(data: NewProjectInput) {
    const proj = makeProject(data);
    setProjects((prev) => prev.concat([proj]));
    setActiveProjectId(proj.id);
    setShowNewProject(false);
    setView('workspace');
  }
  function openProject(id: string) {
    setActiveProjectId(id);
    setView('workspace');
  }
  function updateProject(id: string, patch: ProjectPatch) {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch, updatedAt: new Date().toISOString() } : p)));
  }
  function goBackFromWorkspace() {
    setView(isLoggedIn ? 'dashboard' : 'landing');
  }
  function signOut() {
    setIsLoggedIn(false);
    setView('landing');
  }
  function addQuickNote(text: string) {
    setQuickNotes((prev) => [{ id: uid('qn'), text, createdAt: new Date().toISOString() }].concat(prev));
  }

  const activeProject = projects.find((p) => p.id === activeProjectId) || null;

  useEffect(() => {
    document.body.style.background = 'var(--bg)';
  }, []);

  return (
    <>
      {view === 'landing' ? (
        <LandingPage onAuth={(mode) => openAuth(mode, null, 'header')} onStartWriting={openNewProject} onLogo={goToLanding} onNav={navigateSection} />
      ) : null}

      {view === 'features' ? (
        <FeaturesPage onAuth={(mode) => openAuth(mode, null, 'header')} onStartWriting={openNewProject} onLogo={goToLanding} onNav={navigateSection} />
      ) : null}

      {view === 'dashboard' ? (
        <Dashboard
          userName={userName}
          projects={projects}
          quickNotes={quickNotes}
          dailyGoal={dailyGoal}
          onNewProject={openNewProject}
          onOpenProject={openProject}
          onAddNote={addQuickNote}
          onSetGoal={setDailyGoal}
          onSignOut={signOut}
        />
      ) : null}

      {view === 'workspace' && activeProject ? (
        <Workspace
          project={activeProject}
          isLoggedIn={isLoggedIn}
          onBack={goBackFromWorkspace}
          onUpdateProject={updateProject}
          onAuth={(mode, reason) => openAuth(mode, reason, 'unlock')}
        />
      ) : null}

      {showNewProject ? <NewProjectModal onClose={() => setShowNewProject(false)} defaultAuthor={userName} onCreate={createProject} /> : null}

      {authModal.open ? <AuthModal mode={authModal.mode} reason={authModal.reason} knownName={userName} onClose={closeAuth} onSuccess={completeAuth} /> : null}
    </>
  );
}
