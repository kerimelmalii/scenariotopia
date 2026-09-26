import type { CharacterEntry, NewProjectInput, Project, ScriptBlock } from '../types';

export function uid(prefix: string): string {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export const PROJECT_TYPES = ['Uzun Metraj', 'Dizi Sezon/Bölüm', 'Kısa Film'] as const;

export const BEATS_TEMPLATE: readonly string[] = [
  'Açılış Görüntüsü',
  'Tema Belirtilir',
  'Kurulum',
  'Katalizör',
  'Tartışma',
  '2. Perdeye Giriş',
  'B Hikayesi',
  'Eğlenceler ve Oyunlar',
  'Orta Nokta',
  'Kötüler Yaklaşıyor',
  'Her Şey Kaybedilir',
  'Ruhun Karanlık Gecesi',
  '3. Perdeye Giriş',
  'Final',
  'Son Görüntü',
];

export function seedBlocks(): ScriptBlock[] {
  return [
    { id: uid('b'), type: 'scene', text: '1. İÇ. AHŞAP EV - GECE' },
    {
      id: uid('b'),
      type: 'action',
      text: 'Pencereden sızan mehtap ışığı, tozlu döşeme tahtalarında ince bir çizgi çizer. ELİF (28), elinde titrek bir fenerle karanlığa adım atar.',
    },
    { id: uid('b'), type: 'character', text: 'ELİF' },
    { id: uid('b'), type: 'parenthetical', text: '(fısıltıyla)' },
    { id: uid('b'), type: 'dialogue', text: 'Burada biri var mı?' },
    {
      id: uid('b'),
      type: 'action',
      text: 'Sessizlik. Sadece tahtaların gıcırtısı. Fener ışığı köşedeki eski bir sandığa takılır kalır.',
    },
  ];
}

export function makeProject(opts: NewProjectInput): Project {
  const now = new Date().toISOString();
  const characters: CharacterEntry[] = [
    { id: uid('c'), name: 'Elif', want: 'Kayıp kardeşini bulmak.', need: 'Geçmişiyle yüzleşip kendini affetmek.' },
  ];
  return {
    id: uid('p'),
    name: opts.name,
    type: opts.type,
    author: opts.author,
    createdAt: now,
    updatedAt: now,
    logline: '',
    synopsis: '',
    treatment: '',
    blocks: seedBlocks(),
    beats: BEATS_TEMPLATE.map((name) => ({ name, text: '' })),
    characters,
    notes: [],
  };
}

export function sampleProjects(): Project[] {
  const p1 = makeProject({ name: 'Kayıp Yolcu', type: 'Uzun Metraj', author: 'Kerim' });
  p1.updatedAt = new Date(Date.now() - 1000 * 60 * 47).toISOString();
  p1.logline =
    "Anadolu'da tenha bir istasyonda mahsur kalan bir kondüktör, kayıp kızının izini son bir yolcunun çantasında bulur.";

  const p2 = makeProject({ name: 'Sahilde Bir Yaz', type: 'Dizi Sezon/Bölüm', author: 'Kerim' });
  p2.updatedAt = new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString();
  p2.characters.push({ id: uid('c'), name: 'Mert', want: 'Aile pansiyonunu kurtarmak.', need: 'Kontrolü bırakmayı öğrenmek.' });

  return [p1, p2];
}
