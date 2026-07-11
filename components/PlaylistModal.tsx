'use client';

import { useState, useEffect, useRef } from 'react';
import { ArticleData } from '@/types/atalaya';
import {
  generatePlaylist,
  playlistItemToText,
  playlistToText,
  PlaylistItem,
} from '@/lib/generatePlaylist';
import { copyToClipboard } from '@/lib/clipboard';

interface PlaylistModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: ArticleData;
}

export default function PlaylistModal({ isOpen, onClose, article }: PlaylistModalProps) {
  const [copied, setCopied] = useState(false);
  const copiedTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimeout.current) clearTimeout(copiedTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const playlist = generatePlaylist(article);

  const handleCopy = async () => {
    const text = playlistToText(playlist);
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      if (copiedTimeout.current) clearTimeout(copiedTimeout.current);
      copiedTimeout.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="playlist-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--backdrop)] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden border border-border flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-[#3A3A37] dark:to-[#30302E] text-white p-4 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎵</span>
            <div>
              <h2 id="playlist-modal-title" className="text-lg font-bold">Lista de Reproducción</h2>
              <p className="text-xs text-white/70">{article.metadata.week}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white text-2xl leading-none">&times;</button>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto flex-1">
          <div className="space-y-1">
            {playlist.map((item, index) => (
              <PlaylistRow key={`${item.type}-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border flex-shrink-0">
          <button
            onClick={handleCopy}
            className="w-full py-2.5 rounded-lg font-medium text-sm transition-all bg-slate-700 dark:bg-[#3A3A37] hover:bg-slate-800 dark:hover:bg-[#4A4A45] text-white"
          >
            {copied ? '✓ Copiado' : 'Copiar lista'}
          </button>
        </div>
      </div>
    </div>
  );
}

function PlaylistRow({ item }: { item: PlaylistItem }) {
  return (
    <div className="whitespace-pre-line py-1.5 text-sm text-text-body">
      {playlistItemToText(item)}
    </div>
  );
}
