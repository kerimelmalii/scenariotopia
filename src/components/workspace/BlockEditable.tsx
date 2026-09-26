import { useRef, type KeyboardEvent } from 'react';
import type { ScriptBlock } from '../../types';
import { cx } from '../../utils/cx';
import { BLOCK_CLASS, BLOCK_PLACEHOLDER } from './constants';

interface BlockEditableProps {
  block: ScriptBlock;
  isActive: boolean;
  registerRef: (id: string, node: HTMLDivElement | null) => void;
  onFocus: () => void;
  onCommit: (text: string) => void;
  onEnter: () => void;
  onBackspaceEmpty: () => void;
}

export function BlockEditable({ block, isActive, registerRef, onFocus, onCommit, onEnter, onBackspaceEmpty }: BlockEditableProps) {
  const localRef = useRef<HTMLDivElement | null>(null);

  function combinedRef(node: HTMLDivElement | null) {
    localRef.current = node;
    registerRef(block.id, node);
    if (node && !node.hasAttribute('data-inited')) {
      node.textContent = block.text;
      node.setAttribute('data-inited', 'true');
    }
  }

  function handleBlur() {
    if (localRef.current) onCommit(localRef.current.textContent || '');
  }

  function handleKeyDown(ev: KeyboardEvent<HTMLDivElement>) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      onCommit(localRef.current?.textContent || '');
      onEnter();
    } else if (ev.key === 'Backspace' && localRef.current && localRef.current.textContent === '') {
      ev.preventDefault();
      onBackspaceEmpty();
    }
  }

  return (
    <div
      className={cx('block-wrap', isActive ? 'is-active' : '')}
      onClick={() => localRef.current?.focus()}
    >
      <div
        ref={combinedRef}
        contentEditable
        suppressContentEditableWarning
        onFocus={onFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        data-placeholder={BLOCK_PLACEHOLDER[block.type]}
        className={BLOCK_CLASS[block.type] + ' text-ink'}
      />
    </div>
  );
}
