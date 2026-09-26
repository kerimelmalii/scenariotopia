export type View = 'landing' | 'features' | 'dashboard' | 'workspace';

export type AuthMode = 'login' | 'signup';
export type AuthIntent = 'header' | 'unlock';

export type ProjectType = 'Uzun Metraj' | 'Dizi Sezon/Bölüm' | 'Kısa Film';

export type BlockType = 'scene' | 'action' | 'character' | 'dialogue' | 'parenthetical';

export interface ScriptBlock {
  id: string;
  type: BlockType;
  text: string;
}

export interface Beat {
  name: string;
  text: string;
}

export interface CharacterEntry {
  id: string;
  name: string;
  want: string;
  need: string;
}

export interface ProjectNote {
  id: string;
  text: string;
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  author: string;
  createdAt: string;
  updatedAt: string;
  logline: string;
  synopsis: string;
  treatment: string;
  blocks: ScriptBlock[];
  beats: Beat[];
  characters: CharacterEntry[];
  notes: ProjectNote[];
}

export type ProjectPatch = Partial<Omit<Project, 'id' | 'createdAt'>>;

export interface QuickNote {
  id: string;
  text: string;
  createdAt: string;
}

export interface DailyGoal {
  pages: number;
  time: string;
}

export interface NewProjectInput {
  name: string;
  type: ProjectType;
  author: string;
}

export type IconComponent = (props: IconProps) => JSX.Element;

export interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}
