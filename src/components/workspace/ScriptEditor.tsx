import { useEffect, useRef, useState } from 'react';
import type { BlockType, Project, ScriptBlock } from '../../types';
import { uid } from '../../data/seed';
import { cx } from '../../utils/cx';
import { FORMAT_BUTTONS } from './constants';
import { BlockEditable } from './BlockEditable';

interface ScriptEditorProps {
  project: Project;
  onUpdateBlocks: (blocks: ScriptBlock[]) => void;
}

export function ScriptEditor({ project, onUpdateBlocks }: ScriptEditorProps) {
  const blocks = project.blocks;
  const [activeId, setActiveId] = useState<string | null>(null);
  const [pendingFocus, setPendingFocus] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (pendingFocus && refs.current[pendingFocus]) {
      const node = refs.current[pendingFocus];
      node?.focus();
      try {
        const range = document.createRange();
        if (node) range.selectNodeContents(node);
        range.collapse(false);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      } catch {
        // ignore selection errors on unsupported browsers
      }
      setPendingFocus(null);
    }
  }, [pendingFocus, blocks]);

  function updateBlocks(nb: ScriptBlock[]) {
    onUpdateBlocks(nb);
  }
  function commitText(id: string, text: string) {
    updateBlocks(blocks.map((b) => (b.id === id ? { ...b, text } : b)));
  }
  function appendBlock(type: BlockType) {
    const nb: ScriptBlock = { id: uid('b'), type, text: '' };
    updateBlocks(blocks.concat([nb]));
    setPendingFocus(nb.id);
  }
  function setActiveType(type: BlockType) {
    if (activeId) {
      updateBlocks(blocks.map((b) => (b.id === activeId ? { ...b, type } : b)));
    } else {
      appendBlock(type);
    }
  }
  function handleEnter(id: string) {
    const idx = blocks.findIndex((b) => b.id === id);
    const cur = blocks[idx];
    const nextType: BlockType = cur.type === 'character' || cur.type === 'parenthetical' ? 'dialogue' : 'action';
    const nb: ScriptBlock = { id: uid('b'), type: nextType, text: '' };
    const nblocks = blocks.slice(0, idx + 1).concat([nb]).concat(blocks.slice(idx + 1));
    updateBlocks(nblocks);
    setPendingFocus(nb.id);
  }
  function handleBackspaceEmpty(id: string) {
    const idx = blocks.findIndex((b) => b.id === id);
    if (idx <= 0 || blocks.length <= 1) return;
    const nblocks = blocks.slice(0, idx).concat(blocks.slice(idx + 1));
    updateBlocks(nblocks);
    setPendingFocus(nblocks[idx - 1].id);
  }

  const activeType = activeId ? blocks.find((b) => b.id === activeId)?.type : null;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 sm:px-10 py-10">
        <div className="script-page mx-auto max-w-[680px] rounded-sm border border-line shadow-[0_30px_70px_-30px_rgba(29,29,31,.25)] px-8 sm:px-14 py-12 sm:py-16 min-h-[900px]">
          {blocks.map((b) => (
            <BlockEditable
              key={b.id}
              block={b}
              isActive={activeId === b.id}
              registerRef={(id, node) => {
                refs.current[id] = node;
              }}
              onFocus={() => setActiveId(b.id)}
              onCommit={(text) => commitText(b.id, text)}
              onEnter={() => handleEnter(b.id)}
              onBackspaceEmpty={() => handleBackspaceEmpty(b.id)}
            />
          ))}
        </div>
        <div className="h-24" />
      </div>
      <div className="sticky bottom-0 border-t border-line-soft glass px-3 sm:px-6 py-3">
        <div className="max-w-[680px] mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {FORMAT_BUTTONS.map((f) => {
            const isActiveType = activeType === f.type;
            return (
              <button
                key={f.type}
                onClick={() => setActiveType(f.type)}
                className={cx(
                  'shrink-0 px-4 py-2 rounded-full text-[12.5px] font-semibold border transition-colors',
                  isActiveType ? 'bg-ink text-white border-ink' : 'bg-white text-ink/70 border-line hover:border-ink/30',
                )}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
