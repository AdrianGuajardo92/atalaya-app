'use client';

import { ReactNode, useState } from 'react';
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
    ? 'cursor-pointer rounded-lg transition-all outline outline-2 outline-emerald-400/70 dark:outline-emerald-600/60 bg-emerald-50/50 dark:bg-emerald-900/15 relative pl-9 pr-9'
    : 'cursor-pointer rounded-lg transition-all hover:bg-surface-raised dark:hover:bg-slate-700/25 relative pl-9 pr-9 group/usable';
}

function UsedBadge() {
  return (
    <>
      <span className="absolute top-1/2 -translate-y-1/2 left-1.5 text-xl select-none leading-none">✅</span>
      <span className="absolute top-1/2 -translate-y-1/2 right-1.5 text-lg select-none leading-none">🔖</span>
    </>
  );
}

function HoverHint() {
  return (
    <>
      <span className="absolute top-1/2 -translate-y-1/2 left-1.5 text-xl select-none leading-none opacity-10 group-hover/usable:opacity-50 transition-opacity">⬜</span>
      <span className="absolute top-1/2 -translate-y-1/2 right-1.5 text-lg select-none leading-none opacity-0 group-hover/usable:opacity-30 transition-opacity">🔖</span>
    </>
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
      className={enableMarking ? `mb-1 py-1 ${usedItemClass(isUsed)}` : 'mb-1 py-1'}
      onClick={enableMarking && itemId ? () => onToggleUsed?.(itemId) : undefined}
      role={enableMarking ? 'button' : undefined}
    >
      {enableMarking && (isUsed ? <UsedBadge /> : <HoverHint />)}
      <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-2">
        <span className="text-text-tertiary font-medium">[{label}]</span>
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

function SecondaryCollapsible({
  children,
  count,
}: {
  children: ReactNode;
  count: number;
}) {
  const [open, setOpen] = useState(true);

  if (count < 2) {
    return <>{children}</>;
  }

  return (
    <div className="mt-1">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="mb-2 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors"
      >
        {open ? '▾ Ocultar detalles' : '▸ Ver más detalles del párrafo'} ({count})
      </button>
      {open && <div className="space-y-3">{children}</div>}
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
  const primaryItems = items.filter((item) => !item.secondary);
  const secondaryItems = items.filter((item) => item.secondary);
  const primaryCount = primaryItems.length;

  return (
    <div className="space-y-4">
      <div className="prose prose-slate max-w-none space-y-3">
        {items.map((item, globalIdx) => {
          const isSecondary = Boolean(item.secondary);
          const displayNumber = globalIdx + 1;
          const itemId = itemIdPrefix ? `${itemIdPrefix}-${globalIdx}` : undefined;

          if (isSecondary && globalIdx === primaryCount) {
            return (
              <SecondaryCollapsible key={`secondary-group-${globalIdx}`} count={secondaryItems.length}>
                {secondaryItems.map((secondaryItem, secIdx) => {
                  const secGlobalIdx = primaryCount + secIdx;
                  const secItemId = itemIdPrefix ? `${itemIdPrefix}-${secGlobalIdx}` : undefined;
                  return (
                    <AnswerRow
                      key={`secondary-${secGlobalIdx}`}
                      item={secondaryItem}
                      label={String(secGlobalIdx + 1)}
                      itemId={secItemId}
                      enableMarking={enableMarking}
                      isUsed={secItemId ? Boolean(usedItems?.[secItemId]) : false}
                      onToggleUsed={onToggleUsed}
                      renderBoldText={renderBoldText}
                      textClassName="text-base text-text-secondary"
                      showDetailPill
                    />
                  );
                })}
              </SecondaryCollapsible>
            );
          }

          if (isSecondary) {
            return null;
          }

          return (
            <AnswerRow
              key={`primary-${globalIdx}`}
              item={item}
              label={String(displayNumber)}
              itemId={itemId}
              enableMarking={enableMarking}
              isUsed={itemId ? Boolean(usedItems?.[itemId]) : false}
              onToggleUsed={onToggleUsed}
              renderBoldText={renderBoldText}
              textClassName="text-lg text-text-body"
            />
          );
        })}

        {primaryCount === 0 &&
          secondaryItems.map((item, secIdx) => {
            const secGlobalIdx = secIdx;
            const secItemId = itemIdPrefix ? `${itemIdPrefix}-${secGlobalIdx}` : undefined;
            return (
              <AnswerRow
                key={`secondary-only-${secGlobalIdx}`}
                item={item}
                label={String(secGlobalIdx + 1)}
                itemId={secItemId}
                enableMarking={enableMarking}
                isUsed={secItemId ? Boolean(usedItems?.[secItemId]) : false}
                onToggleUsed={onToggleUsed}
                renderBoldText={renderBoldText}
                textClassName="text-base text-text-secondary"
                showDetailPill
              />
            );
          })}
      </div>
    </div>
  );
}
