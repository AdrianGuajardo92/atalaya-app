'use client';

import { ReactNode } from 'react';
import { AnswerItem } from '@/types/atalaya';

interface AnswerItemsListProps {
  items: AnswerItem[];
  renderBoldText: (text: string) => ReactNode;
  itemIdPrefix?: string;
  usedItems?: Record<string, boolean>;
  onToggleUsed?: (itemId: string) => void;
}

function usedItemClass(isUsed: boolean): string {
  return isUsed
    ? 'cursor-pointer rounded-lg transition-all outline outline-2 outline-emerald-400/70 dark:outline-emerald-600/60 bg-emerald-50/50 dark:bg-emerald-900/15 relative pl-9 pr-4'
    : 'cursor-pointer rounded-lg transition-all hover:bg-surface-raised dark:hover:bg-slate-700/25 relative pl-9 pr-4 group/usable';
}

function UsedBadge() {
  return (
    <span className="absolute top-1/2 -translate-y-1/2 left-1.5 text-xl select-none leading-none">✅</span>
  );
}

function HoverHint() {
  return (
    <span className="absolute top-1/2 -translate-y-1/2 left-1.5 text-xl select-none leading-none opacity-10 group-hover/usable:opacity-50 transition-opacity">⬜</span>
  );
}

function DetailPill() {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface-alt px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-text-tertiary">
      Detalle
    </span>
  );
}

function AnswerRow({
  item,
  label,
  itemId,
  enableMarking,
  isUsed,
  onToggleUsed,
  renderBoldText,
  textClassName,
  showDetailPill,
}: {
  item: AnswerItem;
  label: string;
  itemId?: string;
  enableMarking: boolean;
  isUsed: boolean;
  onToggleUsed?: (itemId: string) => void;
  renderBoldText: (text: string) => ReactNode;
  textClassName: string;
  showDetailPill?: boolean;
}) {
  return (
    <div
      className={enableMarking ? `py-2 ${usedItemClass(isUsed)}` : 'py-2'}
      onClick={enableMarking && itemId ? () => onToggleUsed?.(itemId) : undefined}
      role={enableMarking ? 'button' : undefined}
    >
      {enableMarking && (isUsed ? <UsedBadge /> : <HoverHint />)}
      <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-2">
        <span className="text-lg text-text-tertiary font-medium">[{label}]</span>
        <p className={`${textClassName} leading-relaxed m-0 min-w-0`}>
          <span>{renderBoldText(item.text)}</span>
          {showDetailPill && (
            <span className="ml-2 inline-flex align-middle">
              <DetailPill />
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default function AnswerItemsList({
  items,
  renderBoldText,
  itemIdPrefix,
  usedItems,
  onToggleUsed,
}: AnswerItemsListProps) {
  const enableMarking = Boolean(itemIdPrefix && usedItems && onToggleUsed);

  return (
    <div className="space-y-4">
      <div className="prose prose-slate max-w-none">
        {items.map((item, globalIdx) => {
          const isSecondary = Boolean(item.secondary);
          const itemId = itemIdPrefix ? `${itemIdPrefix}-${globalIdx}` : undefined;

          return (
            <AnswerRow
              key={`answer-${globalIdx}`}
              item={item}
              label={String(globalIdx + 1)}
              itemId={itemId}
              enableMarking={enableMarking}
              isUsed={itemId ? Boolean(usedItems?.[itemId]) : false}
              onToggleUsed={onToggleUsed}
              renderBoldText={renderBoldText}
              textClassName={isSecondary ? 'text-lg text-text-secondary' : 'text-lg text-text-body'}
              showDetailPill={isSecondary}
            />
          );
        })}
      </div>
    </div>
  );
}
