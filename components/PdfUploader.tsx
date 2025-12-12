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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
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
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}>
              {message.text}
            </div>
          )}

          {/* Formulario de subida */}
          <div className="mb-6 p-4 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <h3 className="font-semibold text-slate-700 mb-3">Subir PDFs</h3>

            <div className="space-y-3">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Seleccionar archivos PDF:</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  multiple
                  onChange={handleFileSelect}
                  className="w-full text-sm text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:font-medium file:cursor-pointer hover:file:bg-blue-700"
                />
              </div>

              {/* Lista de archivos seleccionados */}
              {selectedFiles.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-700">
                    Archivos seleccionados ({selectedFiles.length}):
                  </p>
                  {selectedFiles.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                      <span className="text-red-600">📄</span>
                      <input
                        type="text"
                        value={item.customName}
                        onChange={(e) => handleNameChange(index, e.target.value)}
                        className="flex-1 px-2 py-1 text-sm text-slate-900 font-medium border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Nombre del archivo"
                      />
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="text-red-500 hover:text-red-700 px-2"
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
                className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
              >
                {isUploading ? 'Subiendo...' : `Subir ${selectedFiles.length > 0 ? selectedFiles.length + ' PDF(s)' : 'PDFs'}`}
              </button>
            </div>
          </div>

          {/* Lista de PDFs */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-3">
              PDFs almacenados ({pdfs.length})
            </h3>

            {isLoading ? (
              <p className="text-slate-500 text-sm">Cargando...</p>
            ) : pdfs.length === 0 ? (
              <p className="text-slate-500 text-sm italic">No hay PDFs almacenados</p>
            ) : (
              <div className="space-y-2">
                {pdfs.map((pdf) => (
                  <div
                    key={pdf.filename}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 text-xl">📄</span>
                      <span className="font-medium text-slate-800">{pdf.name}</span>
                    </div>
                    <button
                      onClick={() => handleDelete(pdf.filename)}
                      className="px-3 py-1 text-sm text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Instrucciones */}
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Cómo usar:</h4>
            <ol className="text-sm text-amber-700 space-y-1 list-decimal list-inside">
              <li>Sube los PDFs de La Atalaya aquí</li>
              <li>En la terminal, dile a Claude Code:</li>
            </ol>
            <code className="block mt-2 p-2 bg-amber-100 rounded text-xs text-amber-900">
              &quot;Extrae el artículo 44 del PDF noviembre-2025&quot;
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
