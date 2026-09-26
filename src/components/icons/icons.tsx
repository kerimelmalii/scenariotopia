import type { IconProps } from '../../types';

function IconBase({ size = 20, strokeWidth = 1.75, className = '', children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ flexShrink: 0 }}
    >
      {children}
    </svg>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </IconBase>
  );
}
export function IconChevronLeft(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M15 6l-6 6 6 6" />
    </IconBase>
  );
}
export function IconChevronRight(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M9 6l6 6-6 6" />
    </IconBase>
  );
}
export function IconX(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </IconBase>
  );
}
export function IconCheck(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M20 6L9 17l-5-5" />
    </IconBase>
  );
}
export function IconPlus(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </IconBase>
  );
}
export function IconLock(p: IconProps) {
  return (
    <IconBase {...p}>
      <rect x={4} y={11} width={16} height={9} rx={2} />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </IconBase>
  );
}
export function IconDownload(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </IconBase>
  );
}
export function IconPencil(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </IconBase>
  );
}
export function IconMapPin(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
      <circle cx={12} cy={10} r={3} />
    </IconBase>
  );
}
export function IconUsers(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx={9} cy={7} r={4} />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </IconBase>
  );
}
export function IconLayers(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </IconBase>
  );
}
export function IconFileText(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
      <path d="M8 9h2" />
    </IconBase>
  );
}
export function IconNote(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M4 4h13l3 3v13H4z" />
      <path d="M17 4v3h3" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </IconBase>
  );
}
export function IconClock(p: IconProps) {
  return (
    <IconBase {...p}>
      <circle cx={12} cy={12} r={9} />
      <path d="M12 7v5l3 3" />
    </IconBase>
  );
}
export function IconTarget(p: IconProps) {
  return (
    <IconBase {...p}>
      <circle cx={12} cy={12} r={9} />
      <circle cx={12} cy={12} r={5} />
      <circle cx={12} cy={12} r={1} />
    </IconBase>
  );
}
export function IconHeart(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M12 21s-7.2-4.6-9.6-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.6 12c-2.4 4.4-9.6 9-9.6 9z" />
    </IconBase>
  );
}
export function IconFilm(p: IconProps) {
  return (
    <IconBase {...p}>
      <rect x={2} y={3} width={20} height={18} rx={2} />
      <path d="M7 3v18" />
      <path d="M17 3v18" />
      <path d="M2 8h5" />
      <path d="M2 16h5" />
      <path d="M17 8h5" />
      <path d="M17 16h5" />
    </IconBase>
  );
}
export function IconShuffle(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M2 18h1.4c1.4 0 2.7-.7 3.4-1.9l.4-.6" />
      <path d="M2 6h1.4c1.4 0 2.7.7 3.4 1.9l5.4 8.2c.7 1.2 2 1.9 3.4 1.9H22" />
      <path d="M18 2l4 4-4 4" />
      <path d="M18 14l4 4-4 4" />
      <path d="M2 6h1.4c1.4 0 2.7-.7 3.4-1.9L7.2 4" />
    </IconBase>
  );
}
export function IconCloud(p: IconProps) {
  return (
    <IconBase {...p}>
      <path d="M17.5 19H6a4 4 0 01-1-7.87A5.5 5.5 0 0116.64 8h.86a4.5 4.5 0 010 9z" />
    </IconBase>
  );
}
