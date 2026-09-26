import { useState, type FormEvent } from 'react';
import type { NewProjectInput, ProjectType } from '../types';
import { PROJECT_TYPES } from '../data/seed';
import { Modal, PrimaryButton, SelectField, TextField } from './ui/primitives';
import { IconArrowRight, IconPencil } from './icons/icons';

interface NewProjectModalProps {
  defaultAuthor: string;
  onClose: () => void;
  onCreate: (data: NewProjectInput) => void;
}

export function NewProjectModal({ defaultAuthor, onClose, onCreate }: NewProjectModalProps) {
  const [name, setName] = useState('');
  const [type, setType] = useState<ProjectType>(PROJECT_TYPES[0]);
  const [author, setAuthor] = useState(defaultAuthor || '');

  function submit(ev: FormEvent) {
    ev.preventDefault();
    onCreate({ name: name.trim() || 'İsimsiz Senaryo', type, author: author.trim() || 'Bilinmeyen Yazar' });
  }

  return (
    <Modal onClose={onClose}>
      <div className="w-11 h-11 rounded-2xl bg-accent-wash text-accent-ink flex items-center justify-center mb-5">
        <IconPencil size={20} />
      </div>
      <h2 className="text-[24px] font-bold tracking-[-.01em] mb-1">Yeni senaryo.</h2>
      <p className="text-[14px] text-ink-soft mb-6">Birkaç detay yeter, hemen yazmaya başla.</p>
      <form onSubmit={submit} className="space-y-4">
        <TextField label="Proje Adı" value={name} onChange={setName} placeholder="Kayıp Yolcu" required />
        <SelectField label="Proje Türü" value={type} onChange={setType} options={PROJECT_TYPES} />
        <TextField label="Yazar Adı" value={author} onChange={setAuthor} placeholder="Kerim Yılmaz" />
        <PrimaryButton type="submit" className="w-full mt-2">
          Projeyi Başlat ve Yazmaya Geç <IconArrowRight size={16} />
        </PrimaryButton>
      </form>
    </Modal>
  );
}
