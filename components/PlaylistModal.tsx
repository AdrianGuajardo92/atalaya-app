'use client';

import { useState, useEffect, useRef } from 'react';
import { ArticleData } from '@/types/atalaya';
import { generatePlaylist, playlistToText, PlaylistItem } from '@/lib/generatePlaylist';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
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
              <h2 className="text-lg font-bold">Lista de Reproducción</h2>
              <p className="text-xs text-white/70">Art. {article.metadata.articleNumber} &middot; {article.metadata.week}</p>
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
  switch (item.type) {
    case 'song':
      return (
        <div className="flex items-center gap-2 py-2">
          <span className="text-amber-500 text-sm">🎵</span>
          <span className="text-text-primary font-medium text-sm">{item.content}</span>
        </div>
      );

    case 'title':
      return (
        <div className="py-2">
          <span className="font-serif font-bold text-text-primary text-base">{item.content}</span>
        </div>
      );

    case 'biblical-text':
      return (
        <div className="py-1.5">
          <span className="italic text-text-secondary text-sm">{item.content}</span>
        </div>
      );

    case 'section':
      return (
        <div className="pt-3 pb-1">
          <div className="bg-slate-800 dark:bg-slate-700 text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg">
            {item.content}
          </div>
        </div>
      );

    case 'paragraph':
      return (
        <div className={`flex items-center gap-2 py-1 ${item.indent ? 'ml-5 border-l-2 border-slate-200 dark:border-slate-600 pl-3' : ''}`}>
          <span className="text-text-primary text-sm">{item.content}</span>
        </div>
      );

    case 'read-text':
      return (
        <div className="flex items-center gap-2 py-1">
          <span className="text-sm">📖</span>
          <span className="text-blue-600 dark:text-[var(--accent-dark)] font-medium text-sm">{item.content}</span>
        </div>
      );

    case 'image':
      return (
        <div className="flex items-center gap-2 py-1">
          <span className="text-sm">🖼️</span>
          <span className="text-text-tertiary text-sm">Imagen</span>
        </div>
      );

    default:
      return null;
  }
}
