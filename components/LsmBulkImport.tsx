'use client';

import { useState, useMemo } from 'react';
import { copyToClipboard } from '@/lib/clipboard';

interface LsmBulkImportProps {
  isOpen: boolean;
  onClose: () => void;
  articleId: string;
  currentLsmData: Record<string, string>;
  onImportComplete: (newData: Record<string, string>) => void;
}

export default function LsmBulkImport({ isOpen, onClose, articleId, currentLsmData, onImportComplete }: LsmBulkImportProps) {
  const [jsonText, setJsonText] = useState('');
  const [isImporting, setIsImporting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  // Parsear y validar JSON en tiempo real
  const parseResult = useMemo(() => {
    if (!jsonText.trim()) {
      return { valid: false, data: undefined, error: undefined };
    }
    try {
      const parsed = JSON.parse(jsonText);
      if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
        return { valid: false, data: undefined, error: 'Debe ser un objeto JSON { }, no un array ni otro tipo.' };
      }
      // Validar que todos los valores sean strings
      for (const [k, v] of Object.entries(parsed)) {
        if (typeof v !== 'string') {
          return { valid: false, data: undefined, error: `La clave "${k}" tiene un valor de tipo ${typeof v}. Todos los valores deben ser texto (string).` };
        }
      }
      return { valid: true, data: parsed as Record<string, string>, error: undefined };
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'JSON no válido';
      return { valid: false, data: undefined, error: msg };
    }
  }, [jsonText]);

  // Calcular diff entre datos actuales y nuevos
  const diff = useMemo(() => {
    if (!parseResult.valid || !parseResult.data) {
      return { newKeys: [] as string[], updatedKeys: [] as string[], unchangedKeys: [] as string[] };
    }
    const newKeys: string[] = [];
    const updatedKeys: string[] = [];
    const unchangedKeys: string[] = [];

    for (const key of Object.keys(parseResult.data)) {
      if (!(key in currentLsmData) || !currentLsmData[key]) {
        newKeys.push(key);
      } else if (currentLsmData[key] !== parseResult.data[key]) {
        updatedKeys.push(key);
      } else {
        unchangedKeys.push(key);
      }
    }
    return { newKeys, updatedKeys, unchangedKeys };
  }, [parseResult, currentLsmData]);

  const handleImport = async () => {
    if (!parseResult.valid || !parseResult.data) return;

    setIsImporting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/lsm', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId,
          data: parseResult.data,
          mode: 'merge'
        })
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: `${result.imported} traducciones importadas correctamente.` });
        onImportComplete(result.data);
        setJsonText('');
      } else {
        setMessage({ type: 'error', text: result.error || 'Error al importar' });
      }
    } catch (error) {
      console.error('Error importing LSM:', error);
      setMessage({ type: 'error', text: 'Error de conexión al importar' });
    } finally {
      setIsImporting(false);
    }
  };

  const handleExportCurrent = () => {
    // Filtrar solo las claves de preguntas LSM (no bullets, flashcards, etc.)
    const lsmOnly: Record<string, string> = {};
    for (const [k, v] of Object.entries(currentLsmData)) {
      if (v && !k.startsWith('bullets-') && !k.startsWith('bullet-types-') && !k.startsWith('flashcards-') && !k.startsWith('reflections-') && !k.startsWith('applications-')) {
        lsmOnly[k] = v;
      }
    }
    const json = JSON.stringify(lsmOnly, null, 2);
    copyToClipboard(json);
    setMessage({ type: 'success', text: `JSON copiado al portapapeles (${Object.keys(lsmOnly).length} claves)` });
  };

  const handleClose = () => {
    setJsonText('');
    setMessage(null);
    setShowHelp(false);
    onClose();
  };

  if (!isOpen) return null;

  const totalChanges = diff.newKeys.length + diff.updatedKeys.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
      onClick={handleClose}
    >
      <div
        className="bg-surface rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-border flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800 text-white p-4 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🤟</span>
            <div>
              <h2 className="text-lg font-bold">Importar LSM en bloque</h2>
              <p className="text-xs text-white/70">Pega un JSON con todas las traducciones</p>
            </div>
          </div>
          <button onClick={handleClose} className="text-white/80 hover:text-white text-2xl leading-none">&times;</button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {/* Mensaje de estado */}
          {message && (
            <div className={`p-3 rounded-lg text-sm font-medium ${
              message.type === 'success'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
            }`}>
              {message.type === 'success' ? '✅' : '❌'} {message.text}
            </div>
          )}

          {/* Ayuda colapsable */}
          <div className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="w-full px-4 py-2.5 text-left text-sm font-medium text-text-secondary bg-surface-alt hover:bg-surface-raised transition-colors flex items-center justify-between"
            >
              <span>📖 Formato esperado del JSON</span>
              <span className="text-text-muted">{showHelp ? '▲' : '▼'}</span>
            </button>
            {showHelp && (
              <div className="px-4 py-3 bg-surface text-xs space-y-2 border-t border-border">
                <pre className="bg-surface-alt p-3 rounded-lg overflow-x-auto text-text-body font-mono leading-relaxed">
{`{
  "title": "TÍTULO EN LSM",
  "1": "PREGUNTA 1 LSM",
  "1, 2": "PREGUNTAS 1, 2 LSM",
  "section-4": "SECCIÓN LSM",
  "review-0": "REPASO 1 LSM",
  "review-1": "REPASO 2 LSM"
}`}
                </pre>
                <p className="text-text-muted">
                  <strong>Claves:</strong> &quot;1&quot;, &quot;1, 2&quot;, etc. = preguntas &bull; &quot;section-X&quot; = subtítulos &bull; &quot;review-0&quot;, &quot;review-1&quot; = repaso &bull; &quot;title&quot; = título del artículo
                </p>
              </div>
            )}
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">
              Pega el JSON aquí
            </label>
            <textarea
              ref={(el) => { if (el && !jsonText) el.focus(); }}
              value={jsonText}
              onChange={(e) => { setJsonText(e.target.value); setMessage(null); }}
              className="w-full p-4 bg-surface-alt border border-border rounded-lg text-text-body font-mono text-sm resize-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all"
              rows={10}
              placeholder='{\n  "1": "PREGUNTA 1 LSM",\n  "2": "PREGUNTA 2 LSM"\n}'
              spellCheck={false}
            />
          </div>

          {/* Error de parseo */}
          {parseResult.error && jsonText.trim() && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-sm text-red-700 dark:text-red-400">
              <span className="font-bold">Error:</span> {parseResult.error}
            </div>
          )}

          {/* Preview */}
          {parseResult.valid && parseResult.data && (
            <div className="p-4 rounded-lg bg-surface-alt border border-border space-y-3">
              <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
                <span>📊</span> Vista previa
              </h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                {diff.newKeys.length > 0 && (
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                    <div className="text-xl font-bold text-green-700 dark:text-green-400">{diff.newKeys.length}</div>
                    <div className="text-xs text-green-600 dark:text-green-500">Nuevas</div>
                  </div>
                )}
                {diff.updatedKeys.length > 0 && (
                  <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800">
                    <div className="text-xl font-bold text-amber-700 dark:text-amber-400">{diff.updatedKeys.length}</div>
                    <div className="text-xs text-amber-600 dark:text-amber-500">Actualizadas</div>
                  </div>
                )}
                {diff.unchangedKeys.length > 0 && (
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <div className="text-xl font-bold text-text-muted">{diff.unchangedKeys.length}</div>
                    <div className="text-xs text-text-muted">Sin cambio</div>
                  </div>
                )}
              </div>
              {/* Detalle de claves */}
              {(diff.newKeys.length > 0 || diff.updatedKeys.length > 0) && (
                <div className="text-xs space-y-1 max-h-32 overflow-y-auto">
                  {diff.newKeys.map(k => (
                    <div key={k} className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <span className="font-mono bg-green-100 dark:bg-green-900/40 px-1.5 py-0.5 rounded">{k}</span>
                      <span className="text-text-muted truncate flex-1">{parseResult.data![k]}</span>
                    </div>
                  ))}
                  {diff.updatedKeys.map(k => (
                    <div key={k} className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                      <span className="font-mono bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded">{k}</span>
                      <span className="text-text-muted truncate flex-1">{parseResult.data![k]}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-surface-alt flex items-center justify-between flex-shrink-0">
          <button
            onClick={handleExportCurrent}
            className="text-xs text-text-muted hover:text-text-secondary transition-colors flex items-center gap-1"
            title="Copiar traducciones actuales como JSON"
          >
            <span>📋</span> Exportar actual
          </button>
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleImport}
              disabled={!parseResult.valid || totalChanges === 0 || isImporting}
              className="px-5 py-2 text-sm font-bold text-white bg-slate-700 hover:bg-slate-600 rounded-lg shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isImporting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Importando...
                </>
              ) : (
                <>🤟 Aplicar {totalChanges > 0 ? `(${totalChanges})` : ''}</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
