import { useState, type FormEvent } from 'react';
import type { DailyGoal } from '../../types';
import { Modal, PrimaryButton, TextField } from '../ui/primitives';
import { IconCheck, IconTarget } from '../icons/icons';

interface ScheduleModalProps {
  initial: DailyGoal | null;
  onClose: () => void;
  onSave: (goal: DailyGoal) => void;
}

export function ScheduleModal({ initial, onClose, onSave }: ScheduleModalProps) {
  const [pages, setPages] = useState(initial ? initial.pages : 5);
  const [time, setTime] = useState(initial ? initial.time : '09:00');

  function submit(ev: FormEvent) {
    ev.preventDefault();
    onSave({ pages: Number(pages), time });
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <div className="w-11 h-11 rounded-2xl bg-accent-wash text-accent-ink flex items-center justify-center mb-5">
        <IconTarget size={20} />
      </div>
      <h2 className="text-[24px] font-bold tracking-[-.01em] mb-1">Yazım hedefi.</h2>
      <p className="text-[14px] text-ink-soft mb-6">Günlük sayfa hedefini ve hatırlatma saatini belirle.</p>
      <form onSubmit={submit} className="space-y-5">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="block text-[12px] font-semibold uppercase tracking-[.08em] text-ink-soft">Günlük Sayfa Hedefi</span>
            <span className="text-[13px] font-bold text-accent-ink">{pages} sayfa</span>
          </div>
          <input
            type="range"
            min={1}
            max={15}
            value={pages}
            onChange={(ev) => setPages(Number(ev.target.value))}
            className="w-full accent-accent"
          />
        </div>
        <TextField label="Hatırlatma Saati" type="time" value={time} onChange={setTime} />
        <PrimaryButton type="submit" className="w-full mt-2">
          Hedefi Kaydet <IconCheck size={16} />
        </PrimaryButton>
      </form>
    </Modal>
  );
}
