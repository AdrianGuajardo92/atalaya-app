'use client';

import { useState, useEffect, useRef } from 'react';

interface PdfFile {
  name: string;
  filename: string;
  path: string;
}

interface SelectedFileWithName {
  file: File;
  customName: string;
}

interface PdfUploaderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PdfUploader({ isOpen, onClose }: PdfUploaderProps) {
  const [pdfs, setPdfs] = useState<PdfFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<SelectedFileWithName[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [viewingPdf, setViewingPdf] = useState<PdfFile | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cargar lista de PDFs al abrir
  useEffect(() => {
    if (isOpen) {
      loadPdfs();
    }
  }, [isOpen]);

  const loadPdfs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/pdfs');
      const data = await response.json();
      setPdfs(data.pdfs || []);
    } catch (error) {
      console.error('Error loading PDFs:', error);
      setMessage({ type: 'error', text: 'Error al cargar la lista de PDFs' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles: SelectedFileWithName[] = Array.from(files).map(file => ({
        file,
        customName: file.name.replace('.pdf', '').replace(/_/g, ' ')
      }));
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
    // Limpiar input para permitir seleccionar los mismos archivos de nuevo
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleNameChange = (index: number, newName: string) => {
    setSelectedFiles(prev => prev.map((item, i) =>
      i === index ? { ...item, customName: newName } : item
    ));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setMessage({ type: 'error', text: 'Selecciona al menos un archivo PDF' });
      return;
    }

    setIsUploading(true);
    setMessage(null);

    let successCount = 0;
    let errorCount = 0;

    for (const { file, customName } of selectedFiles) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        if (customName.trim()) {
          formData.append('name', customName.trim());
        }

        const response = await fetch('/api/pdfs', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          successCount++;
        } else {
          errorCount++;
        }
      } catch (error) {
        console.error('Error uploading PDF:', error);
        errorCount++;
      }
    }

    if (errorCount === 0) {
      setMessage({ type: 'success', text: `${successCount} PDF(s) subidos correctamente` });
    } else {
      setMessage({ type: 'error', text: `${successCount} subidos, ${errorCount} errores` });
    }

    setSelectedFiles([]);
    loadPdfs();
    setIsUploading(false);
  };

  const handleDelete = async (filename: string) => {
    if (!confirm(`¿Eliminar "${filename}"?`)) return;

    try {
      const response = await fetch(`/api/pdfs?filename=${encodeURIComponent(filename)}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        loadPdfs();
      } else {
        setMessage({ type: 'error', text: data.error });
      }
    } catch (error) {
      console.error('Error deleting PDF:', error);
      setMessage({ type: 'error', text: 'Error al eliminar el PDF' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--backdrop)] flex items-center justify-center z-50 p-4">
      <div className="bg-surface rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Gestionar PDFs</h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="p-5 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Mensaje de estado */}
          {message && (
            <div className={`mb-4 p-3 rounded-lg text-sm ${
              message.type === 'success'
                ? 'bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-200 border border-green-300 dark:border-green-700'
                : 'bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-200 border border-red-300 dark:border-red-700'
            }`}>
              {message.text}
            </div>
          )}

          {/* Formulario de subida */}
          <div className="mb-6 p-4 bg-surface-alt rounded-lg border-2 border-dashed border-border-strong">
            <h3 className="font-semibold text-text-body mb-3">Subir PDFs</h3>

            <div className="space-y-3">
              <div>
                <label className="block text-sm text-text-secondary mb-1">Seleccionar archivos PDF:</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  multiple
                  onChange={handleFileSelect}
                  className="w-full text-sm text-text-secondary file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 dark:file:bg-blue-700 file:text-white file:font-medium file:cursor-pointer hover:file:bg-blue-700 dark:hover:file:bg-blue-600"
                />
              </div>

              {/* Lista de archivos seleccionados */}
              {selectedFiles.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-text-body">
                    Archivos seleccionados ({selectedFiles.length}):
                  </p>
                  {selectedFiles.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-surface rounded-lg border border-border">
                      <span className="text-red-600 dark:text-red-400">📄</span>
                      <input
                        type="text"
                        value={item.customName}
                        onChange={(e) => handleNameChange(index, e.target.value)}
                        className="flex-1 px-2 py-1 text-sm text-text-primary font-medium border border-border-strong rounded bg-surface focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Nombre del archivo"
                      />
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 px-2"
                        title="Quitar"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={selectedFiles.length === 0 || isUploading}
                className="w-full py-2.5 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 disabled:bg-text-tertiary disabled:cursor-not-allowed transition-colors"
              >
                {isUploading ? 'Subiendo...' : `Subir ${selectedFiles.length > 0 ? selectedFiles.length + ' PDF(s)' : 'PDFs'}`}
              </button>
            </div>
          </div>

          {/* Lista de PDFs */}
          <div>
            <h3 className="font-semibold text-text-body mb-3">
              PDFs almacenados ({pdfs.length})
            </h3>

            {isLoading ? (
              <p className="text-text-muted text-sm">Cargando...</p>
            ) : pdfs.length === 0 ? (
              <p className="text-text-muted text-sm italic">No hay PDFs almacenados</p>
            ) : (
              <div className="space-y-2">
                {pdfs.map((pdf) => (
                  <div
                    key={pdf.filename}
                    className="flex items-center justify-between p-3 bg-surface-alt rounded-lg border border-border"
                  >
                    <button
                      onClick={() => setViewingPdf(pdf)}
                      className="flex items-center gap-2 hover:bg-surface-raised rounded-lg px-2 py-1 -mx-2 -my-1 transition-colors"
                      title="Ver PDF"
                    >
                      <span className="text-red-600 dark:text-red-400 text-xl">📄</span>
                      <span className="font-medium text-text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{pdf.name}</span>
                    </button>
                    <button
                      onClick={() => handleDelete(pdf.filename)}
                      className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950 rounded-lg transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Instrucciones */}
          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-700">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Cómo usar:</h4>
            <ol className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-decimal list-inside">
              <li>Sube los PDFs de La Atalaya aquí</li>
              <li>En la terminal, dile a Claude Code:</li>
            </ol>
            <code className="block mt-2 p-2 bg-amber-100 dark:bg-amber-900 rounded text-xs text-amber-900 dark:text-amber-100">
              &quot;Extrae el artículo 44 del PDF noviembre-2025&quot;
            </code>
          </div>
        </div>
      </div>

      {/* Modal Visor de PDF */}
      {viewingPdf && (
        <div className="fixed inset-0 bg-[var(--backdrop)] flex items-center justify-center z-[60] p-4">
          <div className="bg-surface rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden">
            {/* Header del visor */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white p-4 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📄</span>
                <h2 className="text-lg font-bold">{viewingPdf.name}</h2>
              </div>
              <button
                onClick={() => setViewingPdf(null)}
                className="text-white/80 hover:text-white text-2xl font-bold hover:bg-white/10 rounded-lg w-10 h-10 flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>

            {/* Contenido del PDF */}
            <div className="flex-1 bg-surface-raised">
              <iframe
                src={`/api/pdfs/${viewingPdf.filename}`}
                className="w-full h-full border-0"
                title={`Visor de ${viewingPdf.name}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
