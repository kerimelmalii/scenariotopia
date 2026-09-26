import { useState, type FormEvent } from 'react';
import { Modal, PrimaryButton } from '../ui/primitives';
import { IconCheck, IconNote } from '../icons/icons';

interface QuickNoteModalProps {
  onClose: () => void;
  onSave: (text: string) => void;
}

export function QuickNoteModal({ onClose, onSave }: QuickNoteModalProps) {
  const [text, setText] = useState('');

  function submit(ev: FormEvent) {
    ev.preventDefault();
    if (text.trim()) onSave(text.trim());
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <div className="w-11 h-11 rounded-2xl bg-accent-wash text-accent-ink flex items-center justify-center mb-5">
        <IconNote size={20} />
      </div>
      <h2 className="text-[24px] font-bold tracking-[-.01em] mb-1">Hızlı not.</h2>
      <p className="text-[14px] text-ink-soft mb-6">Aklına gelen bir diyalog ya da fikri kaybetme.</p>
      <form onSubmit={submit}>
        <textarea
          autoFocus
          value={text}
          onChange={(ev) => setText(ev.target.value)}
          rows={4}
          placeholder="Örn. Elif aslında kardeşini biliyordu…"
          className="w-full rounded-xl border border-line bg-bg-alt px-4 py-3 text-[15px] leading-relaxed outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all resize-none"
        />
        <PrimaryButton type="submit" className="w-full mt-4">
          Notu Kaydet <IconCheck size={16} />
        </PrimaryButton>
      </form>
    </Modal>
  );
}
