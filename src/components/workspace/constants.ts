import type { BlockType } from '../../types';

export const BLOCK_CLASS: Record<BlockType, string> = {
  scene: 'block-scene font-script text-[13px] sm:text-[13.5px]',
  action: 'block-action font-script text-[13.5px] sm:text-[14px] leading-[1.75]',
  character: 'block-character font-script text-[13.5px] sm:text-[14px]',
  dialogue: 'block-dialogue font-script text-[13.5px] sm:text-[14px] leading-[1.6]',
  parenthetical: 'block-parenthetical font-script text-[13px]',
};

export const BLOCK_PLACEHOLDER: Record<BlockType, string> = {
  scene: 'SAHNE BAŞLIĞI — örn. 1. İÇ. MEKÂN - GÜN',
  action: 'Eylem / açıklama…',
  character: 'KARAKTER ADI',
  dialogue: 'Diyalog…',
  parenthetical: '(parantez)',
};

export const FORMAT_BUTTONS: ReadonlyArray<{ type: BlockType; label: string }> = [
  { type: 'scene', label: 'Sahne' },
  { type: 'action', label: 'Eylem' },
  { type: 'character', label: 'Karakter' },
  { type: 'dialogue', label: 'Diyalog' },
  { type: 'parenthetical', label: 'Parantez' },
];
