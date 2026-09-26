interface PanelTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
}

export function PanelTextarea({ label, value, onChange, rows = 4, placeholder }: PanelTextareaProps) {
  return (
    <div className="mb-7">
      <span className="block text-[12px] font-semibold uppercase tracking-[.08em] text-ink-soft mb-2">{label}</span>
      <textarea
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-line bg-white px-5 py-4 text-[14.5px] leading-relaxed outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all resize-none"
      />
    </div>
  );
}
