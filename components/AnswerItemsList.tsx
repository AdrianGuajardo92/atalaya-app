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

function FollowUpBlock({ followUp }: { followUp: string }) {
  return (
    <div className="mt-2 ml-6 rounded-lg border border-amber-200/60 dark:border-[#8B5A40]/50 bg-amber-50/50 dark:bg-[#332520]/40 px-3 py-2">
      <span className="text-[10px] font-bold text-amber-700 dark:text-[#E09070] uppercase tracking-[0.15em]">
        Si no lo mencionan
      </span>
      <p className="text-sm text-text-body italic mt-1">{followUp}</p>
    </div>
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
  const displayItem = showDetailPill ? { ...item, followUp: undefined } : item;

  return (
    <div
      className={enableMarking ? `mb-1 py-1 ${usedItemClass(isUsed)}` : 'mb-1 py-1'}
      onClick={enableMarking && itemId ? () => onToggleUsed?.(itemId) : undefined}
      role={enableMarking ? 'button' : undefined}
    >
      {enableMarking && (isUsed ? <UsedBadge /> : <HoverHint />)}
      <p className={`${textClassName} leading-relaxed m-0 flex flex-wrap items-baseline gap-2`}>
        <span className="text-text-tertiary font-medium">[{label}]</span>
        {showDetailPill && <DetailPill />}
        <span>{renderBoldText(displayItem.text)}</span>
      </p>
      {displayItem.followUp && <FollowUpBlock followUp={displayItem.followUp} />}
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
  const [open, setOpen] = useState(false);

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
        {open ? '▾' : '▸'} Ver más detalles del párrafo ({count})
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
