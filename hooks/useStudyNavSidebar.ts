'use client';

/* eslint-disable react-hooks/set-state-in-effect */

import { useCallback, useEffect, useState } from 'react';
import {
  isTabletPortraitViewport,
  NAV_SIDEBAR_OPEN_STORAGE_KEY,
} from '@/lib/studyParagraphNav';

const DESKTOP_NAV_QUERY = '(min-width: 768px)';

function readSidebarOpenFromStorage(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(NAV_SIDEBAR_OPEN_STORAGE_KEY) === 'true';
}

function isEditableElement(element: Element | null): boolean {
  if (!element) return false;

  const tag = element.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
  if (element instanceof HTMLElement && element.isContentEditable) return true;

  return false;
}

export function useIsDesktopNav(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(DESKTOP_NAV_QUERY);
    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return isDesktop;
}

export function useIsTabletPortraitNav(): boolean {
  const [isTabletPortrait, setIsTabletPortrait] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const update = () => {
      setIsTabletPortrait(isTabletPortraitViewport(window.innerWidth, window.innerHeight));
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return isTabletPortrait;
}

export function useStudyNavSidebar(enabled: boolean) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setIsOpen(readSidebarOpenFromStorage());
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated || typeof window === 'undefined') return;
    localStorage.setItem(NAV_SIDEBAR_OPEN_STORAGE_KEY, String(isOpen));
  }, [hasHydrated, isOpen]);

  const toggle = useCallback(() => {
    setIsOpen((current) => !current);
  }, []);

  const setOpen = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'b') return;
      if (isEditableElement(document.activeElement)) return;

      event.preventDefault();
      toggle();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, toggle]);

  return { isOpen, toggle, setOpen, hasHydrated };
}
